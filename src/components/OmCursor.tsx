import React, { useEffect, useState, useRef } from 'react';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  alpha: number;
}

export const OmCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const particlesRef = useRef<TrailParticle[]>([]);
  const [, setRenderTrigger] = useState(0);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Add particle to trail
      if (Math.random() > 0.4) {
        const newParticle: TrailParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 5 + 3,
          alpha: 0.8
        };
        particlesRef.current.push(newParticle);
        if (particlesRef.current.length > 12) {
          particlesRef.current.shift();
        }
      }

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest(
          'a, button, input, textarea, select, [role="button"], .interactive-card, .cert-card, .project-card, .skill-badge'
        );
        setIsHovered(!!isInteractive);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Particle decay animation loop
    let animId: number;
    const animateTrail = () => {
      if (particlesRef.current.length > 0) {
        particlesRef.current = particlesRef.current
          .map(p => ({
            ...p,
            alpha: p.alpha - 0.05,
            size: p.size * 0.92
          }))
          .filter(p => p.alpha > 0.05);

        setRenderTrigger(prev => prev + 1);
      }
      animId = requestAnimationFrame(animateTrail);
    };

    animId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  // Don't render cursor on mobile touch devices
  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Particle Trail */}
      {particlesRef.current.map(p => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-[9998] rounded-full transition-opacity"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(0,240,255,0.9) 0%, rgba(0,255,102,0.4) 60%, transparent 100%)',
            opacity: p.alpha,
            boxShadow: '0 0 8px rgba(0, 240, 255, 0.6)'
          }}
        />
      ))}

      {/* Main Om Cursor Container */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out flex items-center justify-center`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${
            isMouseDown ? 0.8 : isHovered ? 1.4 : 1
          })`
        }}
      >
        {/* Outer Glowing Ring */}
        <div
          className={`absolute rounded-full border transition-all duration-300 ${
            isHovered
              ? 'w-10 h-10 border-cyber-cyan bg-cyber-cyan/15 shadow-[0_0_15px_rgba(0,240,255,0.8)]'
              : 'w-7 h-7 border-cyber-cyan/50 bg-cyber-cyan/5 shadow-[0_0_10px_rgba(0,240,255,0.4)]'
          }`}
        />

        {/* ॐ Symbol SVG */}
        <svg
          viewBox="0 0 100 100"
          className={`relative z-10 transition-colors duration-200 ${
            isHovered ? 'w-6 h-6 text-cyber-green' : 'w-4 h-4 text-cyber-cyan'
          }`}
          fill="currentColor"
          style={{
            filter: isHovered
              ? 'drop-shadow(0 0 8px rgba(0,255,102,0.9))'
              : 'drop-shadow(0 0 6px rgba(0,240,255,0.8))'
          }}
        >
          {/* High precision Om Path */}
          <text
            x="50%"
            y="55%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize="78"
            fontWeight="bold"
            fontFamily="'Inter', 'Segoe UI Historic', sans-serif"
            fill="currentColor"
          >
            ॐ
          </text>
        </svg>

        {/* Pulse Ring when Hovered */}
        {isHovered && (
          <div className="absolute w-12 h-12 rounded-full border border-cyber-green/40 animate-ping" />
        )}
      </div>
    </>
  );
};
