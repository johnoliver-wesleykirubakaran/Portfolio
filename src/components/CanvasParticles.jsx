import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

// Pointer state
const Vd = {
    x: -9e4,
    y: -9e4,
    tx: -9e4,
    ty: -9e4
};
let Hd = false;

function Ud() {
    if (Hd) return;
    Hd = true;
    
    window.addEventListener('pointermove', e => {
        Vd.tx = e.clientX;
        Vd.ty = e.clientY;
    }, { passive: true });
    
    window.addEventListener('pointerdown', e => {
        Vd.tx = e.clientX;
        Vd.ty = e.clientY;
        if (e.pointerType === 'touch') {
            Vd.x = e.clientX;
            Vd.y = e.clientY;
        }
    }, { passive: true });
    
    const onPointerUp = e => {
        if (e.pointerType === 'touch') {
            Vd.tx = -9e4;
            Vd.ty = -9e4;
            Vd.x = -9e4;
            Vd.y = -9e4;
        }
    };
    
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('pointercancel', onPointerUp, { passive: true });
    
    document.documentElement.addEventListener('pointerleave', () => {
        Vd.tx = -9e4;
        Vd.ty = -9e4;
    });
    
    gsap.ticker.add(() => {
        Vd.x += (Vd.tx - Vd.x) * 0.22;
        Vd.y += (Vd.ty - Vd.y) * 0.22;
    });
}

function Kd(e) {
    let t = e.trim().replace('#', ''),
        n = parseInt(t.length === 3 ? t.split('').map(e => e + e).join('') : t, 16);
    return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
}

function qd() {
    return window.matchMedia('(max-width: 720px)').matches ? 24e3 : (navigator.hardwareConcurrency || 4) >= 8 ? 9e4 : 48e3;
}

const Wd = `#version 300 es
precision highp float;
in vec4 aSeed;
in vec4 aTgt; // xy: target (device px), z: has-target, w: stagger
uniform vec2 uRes;
uniform float uT;
uniform vec2 uMouse;
uniform float uDpr;
uniform vec4 uGuard;
uniform float uMorph;
uniform vec2 uTouch;
uniform float uTouchAmp;
out float vAlpha;
out float vAccent;
out float vSettle;
out float vShimmer;

// Vector potential; the flow is its curl, so the field is
// divergence-free by construction — no sinks, the cloud never clumps.
vec3 psi(vec3 p, float t) {
  return vec3(
    sin(p.y * 1.3 + t * 0.40) + cos(p.z * 1.7 - t * 0.30),
    sin(p.z * 1.1 - t * 0.35) + cos(p.x * 1.5 + t * 0.45),
    sin(p.x * 1.7 + t * 0.30) + cos(p.y * 1.2 - t * 0.40)
  );
}

vec3 flow(vec3 p, float t) {
  const float e = 0.12;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);
  float x = (psi(p + dy, t).z - psi(p - dy, t).z)
          - (psi(p + dz, t).y - psi(p - dz, t).y);
  float y = (psi(p + dz, t).x - psi(p - dz, t).x)
          - (psi(p + dx, t).z - psi(p - dx, t).z);
  float z = (psi(p + dx, t).y - psi(p - dx, t).y)
          - (psi(p + dy, t).x - psi(p - dy, t).x);
  return vec3(x, y, z) / (2.0 * e);
}

void main() {
  vec2 base = aSeed.xy * uRes;

  // Displacement from a fixed home, never integration — position is a
  // pure function of (home, time), so the cloud is bounded forever.
  vec3 wp = vec3(base / uRes.y * 3.0, aSeed.w * 2.0);
  vec2 p = base + flow(wp, uT * 0.35).xy * (10.0 + 22.0 * aSeed.z) * uDpr;

  // Cursor repulsion on the fluid state.
  vec2 d = p - uMouse;
  float dist2 = dot(d, d) + 60.0;
  p += (d * inversesqrt(dist2)) * min(9000.0 * uDpr * uDpr / dist2, 46.0 * uDpr);

  // Touch ripple (ported from the prototype): a decaying radial wave
  // around the last touch point, displacing the FLUID component only —
  // at full settle this term has zero weight, so the word never leaves
  // its position; it shimmers instead (below).
  float tD = distance(p, uTouch);
  vec2 tDir = (p - uTouch) / max(tD, 1e-3);
  p += tDir * (uTouchAmp * exp(-tD / (190.0 * uDpr)) *
               sin(tD * (0.045 / uDpr) - uT * 22.0) * 46.0 * uDpr);

  // Per-particle staggered settle: condensation reads as a wave.
  float local = clamp((uMorph - aTgt.w * 0.35) / 0.65, 0.0, 1.0);
  float e2 = local * local * (3.0 - 2.0 * local);
  float settle = e2 * aTgt.z;
  vSettle = settle;

  // Comet arc: mid-flight the particle sweeps a curve, not a chord. The
  // arc term is sin(pi*settle)-shaped — exactly zero at both ends, so
  // arrival position and time are untouched.
  vec2 chord = aTgt.xy - p;
  float span = length(chord);
  vec2 dirc = chord / max(span, 1e-4);
  vec2 perp = vec2(-dirc.y, dirc.x);
  float side = fract(sin(dot(aSeed.zw, vec2(157.31, 93.17))) * 43758.5453) - 0.5;
  vec2 formed = mix(p, aTgt.xy, settle) + perp * (sin(3.14159265 * settle) * span * 0.2 * side);

  // A settled glyph still answers the cursor — gently, and it self-heals
  // because position is recomputed from scratch every frame.
  vec2 d2 = formed - uMouse;
  float dd2 = dot(d2, d2) + 80.0;
  formed += (d2 * inversesqrt(dd2)) * min(2600.0 * uDpr * uDpr / dd2, 15.0 * uDpr) * settle;

  // Legibility floor: ambient particles attenuate over the headline box;
  // granted particles are the text, so they are exempt.
  vec2 g1 = uGuard.xy;
  vec2 g2 = uGuard.xy + uGuard.zw;
  float feather = 44.0 * uDpr;
  vec2 s = smoothstep(g1 - feather, g1 + feather, formed) *
           (1.0 - smoothstep(g2 - feather, g2 + feather, formed));
  vAlpha = mix(mix(1.0, 0.14, s.x * s.y), 1.0, settle);

  vAccent = step(0.94, fract(aSeed.z * 7.31 + aSeed.w * 3.17));

  // Touch shimmer: settled particles near the touch swell and glow
  // WITHOUT moving — the word stays exactly where it is.
  vShimmer = uTouchAmp * exp(-distance(formed, uTouch) / (110.0 * uDpr));

  vec2 clip = (formed / uRes) * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  float swell = sin(3.14159265 * settle);
  gl_PointSize = ((0.8 + 1.3 * aSeed.z) + swell * 0.9 + settle * 0.9 +
                  vShimmer * settle * 1.3) * uDpr;
}`;

const Gd = `#version 300 es
precision mediump float;
in float vAlpha;
in float vAccent;
in float vSettle;
in float vShimmer;
uniform vec3 uInk;
uniform vec3 uAccentCol;
uniform float uFade;
out vec4 outColor;

void main() {
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float m = 1.0 - smoothstep(0.5, 1.0, dot(c, c));
  // Ambient dots are ink (a sparse few accent); the settled word is
  // fully accent — it inherits the em's colour.
  vec3 col = mix(mix(uInk, uAccentCol, vAccent), uAccentCol,
                 smoothstep(0.5, 0.95, vSettle));
  float ambientA = (0.075 + 0.16 * vAccent) * vAlpha;
  float a = m * uFade *
    (mix(ambientA, 0.85, vSettle) + sin(3.14159265 * vSettle) * 0.18 +
     vShimmer * 0.45 * vSettle);
  outColor = vec4(col * a, a); // premultiplied
}`;

export default function CanvasParticles() {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        
        const canvas = canvasRef.current;
        const gl = canvas.getContext('webgl2', {
            alpha: true,
            antialias: false,
            depth: false,
            powerPreference: 'low-power'
        });
        if (!gl) return;
        
        const createShader = (type, source) => {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return gl.getShaderParameter(shader, gl.COMPILE_STATUS)
                ? shader
                : (console.warn('hero-field shader:', gl.getShaderInfoLog(shader)), null);
        };
        
        const vertexShader = createShader(gl.VERTEX_SHADER, Wd);
        const fragmentShader = createShader(gl.FRAGMENT_SHADER, Gd);
        if (!vertexShader || !fragmentShader) return;
        
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
        
        gl.useProgram(program);
        
        const maxParticles = qd();
        const seedData = new Float32Array(maxParticles * 4);
        for (let i = 0; i < maxParticles * 4; i++) {
            seedData[i] = Math.random();
        }
        
        const seedBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, seedBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, seedData, gl.STATIC_DRAW);
        const aSeed = gl.getAttribLocation(program, 'aSeed');
        gl.enableVertexAttribArray(aSeed);
        gl.vertexAttribPointer(aSeed, 4, gl.FLOAT, false, 0, 0);
        
        const targetBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, targetBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(maxParticles * 4), gl.DYNAMIC_DRAW);
        const aTgt = gl.getAttribLocation(program, 'aTgt');
        gl.enableVertexAttribArray(aTgt);
        gl.vertexAttribPointer(aTgt, 4, gl.FLOAT, false, 0, 0);
        
        const getUniform = name => gl.getUniformLocation(program, name);
        const uRes = getUniform('uRes');
        const uT = getUniform('uT');
        const uMouse = getUniform('uMouse');
        const uGuard = getUniform('uGuard');
        const uFade = getUniform('uFade');
        const uMorph = getUniform('uMorph');
        const uTouch = getUniform('uTouch');
        const uTouchAmp = getUniform('uTouchAmp');
        const uDprLoc = getUniform('uDpr');
        
        const styles = getComputedStyle(document.documentElement);
        gl.uniform3fv(getUniform('uInk'), Kd(styles.getPropertyValue('--ink') || '#f5f0eb'));
        gl.uniform3fv(getUniform('uAccentCol'), Kd(styles.getPropertyValue('--accent') || '#ff5c28'));
        
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.clearColor(0, 0, 0, 0);
        
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        gl.uniform1f(uDprLoc, dpr);
        
        const getEmElementData = () => {
            const em = canvas.parentElement.querySelector('.hero-headline em');
            if (!em) return null;
            let offsetLeft = 0;
            let offsetTop = 0;
            let parent = em;
            while (parent && parent !== canvas.parentElement) {
                offsetLeft += parent.offsetLeft;
                offsetTop += parent.offsetTop;
                parent = parent.offsetParent;
            }
            const bounds = em.getBoundingClientRect();
            return {
                em,
                x: offsetLeft,
                y: offsetTop,
                w: bounds.width,
                h: bounds.height
            };
        };
        
        const handleResize = () => {
            const parentBounds = canvas.parentElement.getBoundingClientRect();
            let height = parentBounds.height;
            const emData = getEmElementData();
            if (emData) {
                height = Math.max(height, emData.y + emData.h + 60);
            }
            canvas.style.height = `${height}px`;
            canvas.width = Math.max(1, Math.round(parentBounds.width * dpr));
            canvas.height = Math.max(1, Math.round(height * dpr));
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(uRes, canvas.width, canvas.height);
            
            const headline = canvas.parentElement.querySelector('.hero-headline');
            if (headline) {
                const hlBounds = headline.getBoundingClientRect();
                gl.uniform4f(
                    uGuard,
                    (hlBounds.left - parentBounds.left) * dpr,
                    (hlBounds.top - parentBounds.top) * dpr,
                    hlBounds.width * dpr,
                    hlBounds.height * dpr
                );
            }
        };
        
        handleResize();
        
        let emElement = null;
        
        const generateTextPoints = () => {
            const emData = getEmElementData();
            if (!emData) return null;
            const em = emData.em;
            const style = getComputedStyle(em);
            const text = em.textContent;
            const fontSize = parseFloat(style.fontSize);
            
            const textCanvas = document.createElement('canvas');
            const ctx = textCanvas.getContext('2d', { willReadFrequently: true });
            
            const applyFont = () => {
                ctx.font = `${style.fontStyle} ${style.fontWeight} ${fontSize}px ${style.fontFamily}`;
                try {
                    ctx.letterSpacing = style.letterSpacing === 'normal' ? '0px' : style.letterSpacing;
                } catch (err) {}
            };
            
            applyFont();
            const padding = Math.ceil(fontSize * 0.6);
            textCanvas.width = Math.ceil(ctx.measureText(text).width + padding * 2);
            textCanvas.height = Math.ceil(fontSize * 1.7);
            
            applyFont();
            ctx.fillStyle = '#fff';
            ctx.textBaseline = 'alphabetic';
            ctx.fillText(text, padding, Math.round(fontSize * 1.15));
            
            const imgData = ctx.getImageData(0, 0, textCanvas.width, textCanvas.height).data;
            const points = [];
            
            let minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9;
            for (let y = 0; y < textCanvas.height; y++) {
                for (let x = 0; x < textCanvas.width; x++) {
                    if (imgData[(y * textCanvas.width + x) * 4 + 3] > 128) {
                        const px = x + Math.random();
                        const py = y + Math.random();
                        points.push([px, py]);
                        if (px < minX) minX = px;
                        if (py < minY) minY = py;
                        if (px > maxX) maxX = px;
                        if (py > maxY) maxY = py;
                    }
                }
            }
            
            return points.length ? {
                em,
                pts: points,
                bc: [(minX + maxX) / 2, (minY + maxY) / 2],
                ec: [emData.x + emData.w / 2, emData.y + emData.h / 2]
            } : null;
        };
        
        const populateTargetBuffer = () => {
            const data = generateTextPoints();
            if (!data) return;
            emElement = data.em;
            
            for (let i = data.pts.length - 1; i > 0; i--) {
                const j = Math.random() * (i + 1) | 0;
                const temp = data.pts[i];
                data.pts[i] = data.pts[j];
                data.pts[j] = temp;
            }
            
            const count = Math.min(data.pts.length, Math.floor(maxParticles * 0.5));
            const targets = new Float32Array(maxParticles * 4);
            for (let i = 0; i < count; i++) {
                targets[i * 4] = (data.ec[0] + (data.pts[i][0] - data.bc[0])) * dpr;
                targets[i * 4 + 1] = (data.ec[1] + (data.pts[i][1] - data.bc[1])) * dpr;
                targets[i * 4 + 2] = 1;
                targets[i * 4 + 3] = Math.random();
            }
            
            gl.bindBuffer(gl.ARRAY_BUFFER, targetBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, targets, gl.DYNAMIC_DRAW);
        };
        
        let morphStartTime = 0;
        let setupTimer = 0;
        
        document.fonts?.ready?.then(() => {
            handleResize();
            setupTimer = setTimeout(() => {
                handleResize();
                populateTargetBuffer();
                if (emElement) {
                    morphStartTime = performance.now();
                    emElement.style.transition = 'opacity 0.7s ease';
                    emElement.style.opacity = '0';
                }
            }, 1800);
        });
        
        Ud();
        
        const ripple = {
            x: -9e4,
            y: -9e4,
            amp: 0
        };
        
        const handlePointer = e => {
            if (e.pointerType !== 'touch') return;
            const rect = canvas.getBoundingClientRect();
            ripple.x = (e.clientX - rect.left) * dpr;
            ripple.y = (e.clientY - rect.top) * dpr;
            ripple.amp = e.type === 'pointerdown' ? 1 : Math.min(1, ripple.amp + 0.3);
        };
        
        window.addEventListener('pointerdown', handlePointer, { passive: true });
        window.addEventListener('pointermove', handlePointer, { passive: true });
        
        let animationFrameId = 0;
        let isDrawing = false;
        let fadeWeight = 0;
        const renderStartTime = performance.now();
        
        const loop = time => {
            animationFrameId = 0;
            if (!isDrawing) return;
            
            fadeWeight = Math.min(1, fadeWeight + 0.016);
            const rect = canvas.getBoundingClientRect();
            const morphProgress = morphStartTime ? Math.min(1, (time - morphStartTime) / 1900) : 0;
            
            ripple.amp *= 0.965;
            
            gl.uniform1f(uT, (time - renderStartTime) / 1e3);
            gl.uniform2f(uMouse, (Vd.x - rect.left) * dpr, (Vd.y - rect.top) * dpr);
            gl.uniform2f(uTouch, ripple.x, ripple.y);
            gl.uniform1f(uTouchAmp, ripple.amp);
            gl.uniform1f(uFade, fadeWeight * fadeWeight);
            gl.uniform1f(uMorph, morphProgress);
            
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.POINTS, 0, maxParticles);
            
            animationFrameId = requestAnimationFrame(loop);
        };
        
        const setDrawingState = active => {
            isDrawing = active;
            if (active && !animationFrameId) {
                animationFrameId = requestAnimationFrame(loop);
            }
        };
        
        const observer = new IntersectionObserver(([entry]) => {
            setDrawingState(entry.isIntersecting && !document.hidden);
        }, { threshold: 0.02 });
        observer.observe(canvas);
        
        const handleVisibility = () => setDrawingState(!document.hidden);
        document.addEventListener('visibilitychange', handleVisibility);
        
        const handleWindowResize = () => {
            handleResize();
            if (emElement) populateTargetBuffer();
        };
        window.addEventListener('resize', handleWindowResize);
        
        const handleContextLost = e => {
            e.preventDefault();
            setDrawingState(false);
            canvas.style.opacity = '0';
            if (emElement) emElement.style.opacity = '';
        };
        canvas.addEventListener('webglcontextlost', handleContextLost);
        
        return () => {
            setDrawingState(false);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            clearTimeout(setupTimer);
            if (emElement) {
                emElement.style.transition = '';
                emElement.style.opacity = '';
            }
            observer.disconnect();
            document.removeEventListener('visibilitychange', handleVisibility);
            window.removeEventListener('resize', handleWindowResize);
            window.removeEventListener('pointerdown', handlePointer);
            window.removeEventListener('pointermove', handlePointer);
            canvas.removeEventListener('webglcontextlost', handleContextLost);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="hero-field"
            aria-hidden="true"
        />
    );
}
