import React, { useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

interface NodeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const { matrixMode } = usePortfolio();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize network nodes
    const nodeCount = Math.floor(Math.min(width, height) / 14);
    let nodes: NodeParticle[] = [];

    const colors = ['#00f0ff', '#00ff66', '#3b82f6', '#b026ff'];

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.2 : 0.6),
          vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.2 : 0.6),
          radius: Math.random() * 2 + 1,
          baseAlpha: Math.random() * 0.4 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    initNodes();

    // Matrix Rain Columns Setup
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const rainDrops: number[] = Array(columns).fill(1);
    const charSet = '010101010101010101010101010101010101010101010101010101010101010101010101010101010101';

    const render = () => {
      // Smooth lerp mouse position
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Dark futuristic base gradient
      const bgGrad = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        10,
        mouseRef.current.x,
        mouseRef.current.y,
        Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, 'rgba(11, 22, 48, 0.7)');
      bgGrad.addColorStop(0.4, 'rgba(4, 7, 17, 0.95)');
      bgGrad.addColorStop(1, '#040711');

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Grid background pattern
      ctx.strokeStyle = 'rgba(21, 35, 71, 0.25)';
      ctx.lineWidth = 1;
      const gridSize = 45;
      const offsetX = (mouseRef.current.x * 0.02) % gridSize;
      const offsetY = (mouseRef.current.y * 0.02) % gridSize;

      for (let x = offsetX; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = offsetY; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Mouse Spotlight Glow
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        const lightGrad = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          320
        );
        lightGrad.addColorStop(0, 'rgba(0, 240, 255, 0.15)');
        lightGrad.addColorStop(0.5, 'rgba(0, 255, 102, 0.05)');
        lightGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = lightGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // Matrix Rain mode if enabled
      if (matrixMode) {
        ctx.fillStyle = 'rgba(0, 255, 102, 0.85)';
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

        for (let i = 0; i < rainDrops.length; i++) {
          const text = charSet.charAt(Math.floor(Math.random() * charSet.length));
          const x = i * fontSize;
          const y = rainDrops[i] * fontSize;

          ctx.fillText(text, x, y);

          if (y > height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
      }

      // Update & Draw Nodes
      nodes.forEach((node, i) => {
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        // Distance to mouse
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        // Repel or pull slightly near mouse
        if (distToMouse < 180 && !prefersReducedMotion) {
          const force = (180 - distToMouse) / 180;
          node.x -= (dx / distToMouse) * force * 1.5;
          node.y -= (dy / distToMouse) * force * 1.5;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = distToMouse < 180 ? 0.9 : node.baseAlpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Draw line connection to neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const ndx = other.x - node.x;
          const ndy = other.y - node.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (nDist < 120) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            const lineAlpha = (1 - nDist / 120) * 0.25;
            ctx.strokeStyle = node.color;
            ctx.globalAlpha = lineAlpha;
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [matrixMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[0] transition-opacity duration-500"
    />
  );
};
