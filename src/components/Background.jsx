import React from 'react';

export const Background = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* Soft Radial Ambient Glow */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] rounded-full bg-gradient-to-b from-cyan-500/10 via-violet-500/5 to-transparent dark:from-cyan-500/15 dark:via-violet-600/10 blur-[100px] transition-colors duration-500" 
      />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
};
