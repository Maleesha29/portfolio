import React, { useEffect, useRef, useState } from 'react';

export const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes configuration with multi-color cyber palette
    const colors = [
      { r: 56, g: 189, b: 248 },   // Cyan / Sky
      { r: 168, g: 85, b: 247 },   // Violet / Purple
      { r: 52, g: 211, b: 153 },   // Emerald / Mint
      { r: 244, g: 114, b: 182 },  // Rose / Pink
      { r: 96, g: 165, b: 250 },   // Electric Blue
      { r: 251, g: 191, b: 36 },   // Amber Gold
    ];

    const particleCount = Math.min(Math.floor(width / 20), 65);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.8,
        color: color,
        alpha: Math.random() * 0.5 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.008,
      });
    }

    const maxDistance = 145;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines between close particles with dynamic gradient tints
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.18;
            const p1 = particles[i];
            const p2 = particles[j];

            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(${p1.color.r}, ${p1.color.g}, ${p1.color.b}, ${lineAlpha})`);
            gradient.addColorStop(1, `rgba(${p2.color.r}, ${p2.color.g}, ${p2.color.b}, ${lineAlpha})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particle points with soft glowing rings
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Bounce from edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > width) p.vy *= -1;

        // Pulse alpha
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.004;
        const currentAlpha = Math.max(0.15, Math.min(0.85, p.alpha));

        // Particle core
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle outer glow halo
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha * 0.25})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Precision matrix dot grid overlay with subtle cyan-indigo tint */}
      <div 
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Subtle geometric line grid with violet accent */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(168, 85, 247, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Canvas particle constellation */}
      {!prefersReducedMotion && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}

      {/* Vibrant Atmospheric Spotlight Nebulas */}
      {/* Top Center: Cyan -> Indigo -> Violet glow */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-gradient-to-b from-cyan-500/15 via-indigo-600/12 to-transparent blur-[160px] rounded-full pointer-events-none animate-pulse-glow" />
      
      {/* Top Right: Electric Violet / Magenta aurora */}
      <div className="absolute top-[5%] -right-[10%] w-[650px] h-[650px] bg-gradient-to-bl from-violet-600/15 via-fuchsia-600/10 to-transparent blur-[150px] rounded-full pointer-events-none" />

      {/* Mid Left: Emerald / Teal cyber glow */}
      <div className="absolute top-[40%] -left-[12%] w-[700px] h-[700px] bg-gradient-to-tr from-emerald-600/12 via-teal-500/10 to-transparent blur-[160px] rounded-full pointer-events-none" />

      {/* Mid-Lower Center: Indigo & Blue ambient field */}
      <div className="absolute top-[65%] left-1/3 w-[600px] h-[500px] bg-gradient-to-r from-blue-600/10 via-indigo-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      {/* Bottom Right: Sunset Rose / Coral / Amber aura */}
      <div className="absolute bottom-[2%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-tl from-purple-700/15 via-pink-600/10 to-amber-500/5 blur-[170px] rounded-full pointer-events-none" />
    </div>
  );
};

