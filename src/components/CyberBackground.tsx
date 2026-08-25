import React, { useEffect, useRef, useState } from 'react';
import { Eye, Zap } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export const CyberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [matrixMode, setMatrixMode] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes setup
    const numParticles = Math.min(Math.floor(width / 22), 55);
    const particles: Particle[] = [];
    const colors = ['#00ff9d', '#00f0ff', '#3b82f6', '#10b981'];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Matrix rain setup
    const matrixChars = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ<>/:;{}[]#@!&$*';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    // Mouse tracking for interactive connection lines
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      if (matrixMode) {
        // Render Matrix Digital Rain Effect
        ctx.fillStyle = 'rgba(7, 9, 14, 0.15)';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#00ff9d';
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

        for (let i = 0; i < drops.length; i++) {
          const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Subtle gradient coloring for matrix drops
          if (Math.random() > 0.92) {
            ctx.fillStyle = '#ffffff';
          } else if (Math.random() > 0.7) {
            ctx.fillStyle = '#00f0ff';
          } else {
            ctx.fillStyle = '#00ff9d';
          }

          ctx.fillText(char, x, y);

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      } else {
        // Render Cyber Network Node Grid
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 130) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 255, 157, ${0.15 * (1 - dist / 130)})`;
              ctx.lineWidth = 0.8;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }

          // Connect to mouse cursor
          const mdx = particles[i].x - mouseX;
          const mdy = particles[i].y - mouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 160) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.35 * (1 - mdist / 160)})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }
        }

        // Draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Update position
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [matrixMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
      <canvas ref={canvasRef} className="block w-full h-full" />
      
      {/* Subtle Matrix / Node Mode Toggle Floating Control */}
      <div className="pointer-events-auto fixed bottom-6 left-6 z-30 hidden md:flex items-center gap-2 bg-[#0d121c]/80 backdrop-blur-md border border-[#00ff9d]/20 px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 shadow-lg hover:border-[#00ff9d]/50 transition-all">
        <span className="text-slate-400">BG MATRIX:</span>
        <button
          onClick={() => setMatrixMode(!matrixMode)}
          className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full transition-all text-[11px] ${
            matrixMode 
              ? 'bg-[#00ff9d]/20 text-[#00ff9d] border border-[#00ff9d]/40 shadow-[0_0_10px_rgba(0,255,157,0.3)]' 
              : 'bg-slate-800 text-slate-300 hover:text-emerald-400'
          }`}
          title="Toggle Cyber Matrix Stream"
        >
          {matrixMode ? <Zap className="w-3 h-3 text-[#00ff9d] animate-pulse" /> : <Eye className="w-3 h-3 text-cyan-400" />}
          {matrixMode ? 'STREAM ACTIVE' : 'NODE GRID'}
        </button>
      </div>
    </div>
  );
};
