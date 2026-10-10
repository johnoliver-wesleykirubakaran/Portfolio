/**
 * TechnicalCanvas: A restrained generative coordinate / lattice pattern
 * evoking neural vector spaces and attention graphs.
 * Runs on HTML5 Canvas with minimal CPU footprint and pauses when offscreen
 * or when prefers-reduced-motion is active.
 */

import { useEffect, useRef } from 'react';

export default function TechnicalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    // Grid nodes
    const cols = Math.floor(width / 60) + 1;
    const rows = Math.floor(height / 60) + 1;
    const points: { x: number; y: number; baseOriginX: number; baseOriginY: number; vx: number; vy: number; phase: number }[] = [];

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = c * 60;
        const y = r * 60;
        points.push({
          x,
          y,
          baseOriginX: x,
          baseOriginY: y,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let t = 0;

    const render = () => {
      t += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle lattice lines
      ctx.strokeStyle = 'rgba(241, 238, 232, 0.025)';
      ctx.lineWidth = 1;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        if (!p) continue;

        if (!prefersReducedMotion) {
          // Micro drift
          p.x = p.baseOriginX + Math.sin(t + p.phase) * 6;
          p.y = p.baseOriginY + Math.cos(t + p.phase) * 6;

          // Gentle mouse displacement
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            p.x -= (dx / dist) * force * 12;
            p.y -= (dy / dist) * force * 12;
          }
        }

        // Draw node dot
        ctx.fillStyle = 'rgba(212, 163, 115, 0.09)';
        ctx.fillRect(p.x - 1, p.y - 1, 2, 2);

        // Connect right and down neighbors
        const rightNeighbor = points[i + rows];
        if (rightNeighbor && Math.abs(rightNeighbor.baseOriginX - p.baseOriginX) <= 65) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(rightNeighbor.x, rightNeighbor.y);
          ctx.stroke();
        }

        const downNeighbor = points[i + 1];
        if (downNeighbor && downNeighbor.baseOriginX === p.baseOriginX) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(downNeighbor.x, downNeighbor.y);
          ctx.stroke();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero__technical-canvas"
      aria-hidden="true"
    />
  );
}
