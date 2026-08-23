import React, { createContext, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const TransitionContext = createContext(null);

const jd = 13;

function Md(e) {
    let t = 100 * (1 - e);
    return `M 0 ${t} Q 50 ${t - jd * Math.sin(Math.PI * e)} 100 ${t}`;
}

function Nd(e) {
    return `${Md(e)} L 100 101 L 0 101 Z`;
}

function Pd(e) {
    let t = 100 * (1 - e);
    return `M 0 ${t} Q 50 ${t + jd * Math.sin(Math.PI * e)} 100 ${t}`;
}

function Fd(e) {
    let t = 100 * (1 - e);
    return `M 0 -1 L 0 ${t} Q 50 ${t + jd * Math.sin(Math.PI * e)} 100 ${t} L 100 -1 Z`;
}

export function TransitionProvider({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const isAnimating = useRef(false);
    
    const containerRef = useRef(null);
    const curtainRef = useRef(null);
    const edgeRef = useRef(null);
    const labelRef = useRef(null);
    const pendingCallback = useRef(null);

    useEffect(() => {
        if (!pendingCallback.current) return;
        const cb = pendingCallback.current;
        pendingCallback.current = null;
        requestAnimationFrame(() => requestAnimationFrame(cb));
    }, [location]);

    const transitionTo = useCallback((to, { label = '', accent = '' } = {}) => {
        const targetPath = to.split('#')[0] || '/';
        const targetHash = to.includes('#') ? to.slice(to.indexOf('#')) : '';
        
        if (isAnimating.current || (targetPath === location.pathname && !targetHash)) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            navigate(to);
            if (targetHash) {
                setTimeout(() => document.querySelector(targetHash)?.scrollIntoView(), 60);
            }
            return;
        }

        isAnimating.current = true;
        
        const container = containerRef.current;
        const curtain = curtainRef.current;
        const edge = edgeRef.current;
        const textLabel = labelRef.current;

        textLabel.textContent = label;
        container.style.setProperty('--t-accent', accent || 'var(--accent)');
        container.classList.add('is-active');

        const state = { p: 0 };
        
        const drawCurtainClose = () => {
            curtain.setAttribute('d', Nd(state.p));
            edge.setAttribute('d', Md(state.p));
        };

        const drawCurtainOpen = () => {
            curtain.setAttribute('d', Fd(state.p));
            edge.setAttribute('d', Pd(state.p));
        };

        const onRouteChangedReveal = () => {
            state.p = 0;
            gsap.set('#main', { clearProps: 'all' });
            
            gsap.timeline({
                onComplete: () => {
                    container.classList.remove('is-active');
                    edge.setAttribute('d', '');
                    isAnimating.current = false;
                    ScrollTrigger.refresh();
                    if (targetHash) {
                        window.__lenis?.scrollTo(targetHash);
                    }
                }
            })
            .to(textLabel, {
                autoAlpha: 0,
                yPercent: -60,
                duration: 0.3,
                ease: 'power2.in'
            })
            .to(state, {
                p: 1,
                duration: 0.7,
                ease: 'expo.inOut',
                onUpdate: drawCurtainOpen
            }, 0.08)
            .fromTo('#main', {
                scale: 1.015,
                transformOrigin: '50% 12%'
            }, {
                scale: 1,
                duration: 0.7,
                ease: 'expo.out',
                clearProps: 'all'
            }, 0.2);
        };

        gsap.timeline({
            onComplete: () => {
                pendingCallback.current = onRouteChangedReveal;
                navigate(to);
            }
        })
        .to(state, {
            p: 1,
            duration: 0.55,
            ease: 'expo.inOut',
            onUpdate: drawCurtainClose
        })
        .to('#main', {
            scale: 0.98,
            autoAlpha: 0.9,
            transformOrigin: '50% 30%',
            duration: 0.55,
            ease: 'expo.inOut'
        }, 0)
        .fromTo(textLabel, {
            autoAlpha: 0,
            yPercent: 80
        }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.35,
            ease: 'power3.out'
        }, 0.28);

    }, [location, navigate]);

    return (
        <TransitionContext.Provider value={transitionTo}>
            {children}
            <div ref={containerRef} className="page-transition" aria-hidden="true">
                <svg className="pt-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path ref={curtainRef} className="pt-curtain" d="" />
                    <path ref={edgeRef} className="pt-edge" d="" vectorEffect="non-scaling-stroke" />
                </svg>
                <p ref={labelRef} className="pt-label" />
            </div>
        </TransitionContext.Provider>
    );
}
