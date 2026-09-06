import { useEffect, useRef } from 'react';

/**
 * Interactive node-network background for the homepage hero.
 *
 * This is the Growth Engineering idea drawn rather than described: independent
 * nodes drifting on their own, forming connections when they come close enough,
 * and organising around the cursor. It replaced a 2.3 MB photograph that was the
 * page's LCP element.
 *
 * Constraints it has to respect, because a hero animation that misbehaves is
 * worse than no hero animation:
 *  - Nothing runs during prerender. The canvas element renders; all logic is in
 *    an effect, so `window` is never touched in Node.
 *  - `prefers-reduced-motion` paints one static frame and stops.
 *  - Animation halts when the tab is hidden or the hero scrolls out of view.
 *  - Node count scales with area and is capped, so a 4K monitor does not melt.
 *  - Pointer interaction is skipped on coarse pointers (touch), where it cannot
 *    work and would only cost battery.
 */

const LINK_DISTANCE = 150;
const POINTER_RADIUS = 200;
const MAX_NODES = 90;

export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    let width = 0;
    let height = 0;
    let nodes = [];
    let frame = null;
    let visible = true;
    const pointer = { x: -9999, y: -9999, active: false };

    const seedNodes = () => {
      // Roughly one node per 18k css pixels, capped at both ends so the field
      // stays legible on a phone and affordable on a large display.
      const target = Math.max(24, Math.min(MAX_NODES, Math.round((width * height) / 18000)));
      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 1.1,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      // Cap DPR at 2: beyond that the cost is real and the difference is not.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedNodes();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DISTANCE) continue;

          // Links fade in as nodes approach, the "systems connecting" beat.
          const strength = 1 - dist / LINK_DISTANCE;
          ctx.strokeStyle = `rgba(120, 200, 170, ${strength * 0.34})`;
          ctx.lineWidth = strength * 1.15;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }

        if (pointer.active) {
          const pdx = a.x - pointer.x;
          const pdy = a.y - pointer.y;
          const pdist = Math.hypot(pdx, pdy);
          if (pdist < POINTER_RADIUS) {
            const strength = 1 - pdist / POINTER_RADIUS;
            ctx.strokeStyle = `rgba(214, 250, 86, ${strength * 0.5})`;
            ctx.lineWidth = strength * 1.3;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const nearPointer =
          pointer.active && Math.hypot(node.x - pointer.x, node.y - pointer.y) < POINTER_RADIUS;
        ctx.fillStyle = nearPointer ? 'rgba(214, 250, 86, 0.95)' : 'rgba(190, 230, 210, 0.7)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Wrap rather than bounce: bouncing makes the edges of the field read as
        // walls, which is the opposite of the impression wanted here.
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;

        if (pointer.active) {
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const dist = Math.hypot(dx, dy);
          if (dist < POINTER_RADIUS && dist > 0.5) {
            const pull = (1 - dist / POINTER_RADIUS) * 0.035;
            node.vx += (dx / dist) * pull;
            node.vy += (dy / dist) * pull;
          }
        }

        // Damping keeps the pointer pull from accumulating into chaos.
        node.vx = Math.max(-0.9, Math.min(0.9, node.vx * 0.995));
        node.vy = Math.max(-0.9, Math.min(0.9, node.vy * 0.995));
      }

      draw();
      frame = requestAnimationFrame(step);
    };

    const start = () => {
      if (frame === null && visible && !reduceMotion) frame = requestAnimationFrame(step);
    };

    const stop = () => {
      if (frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
      }
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const onPointerLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    resize();

    // Always paint one frame synchronously. requestAnimationFrame can be
    // throttled to zero in a background or non-composited tab, and relying on it
    // for first paint leaves the hero as an empty gradient in those cases.
    draw();

    if (!reduceMotion) start();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    document.addEventListener('visibilitychange', onVisibility);
    if (finePointer) {
      canvas.addEventListener('pointermove', onPointerMove);
      canvas.addEventListener('pointerleave', onPointerLeave);
    }

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
