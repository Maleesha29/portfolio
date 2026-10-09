import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BentoGrid } from './components/BentoGrid';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandMenu } from './components/CommandMenu';
import { ParticleBackground } from './components/ParticleBackground';

function App() {
  const [commandOpen, setCommandOpen] = useState(false);

  // Global keyboard shortcut listener for Cmd + K / Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans antialiased">
      {/* Dynamic ambient particle and grid backdrop */}
      <ParticleBackground />

      {/* Main Navigation */}
      <Navbar onOpenCommand={() => setCommandOpen(true)} />

      {/* Main Page Flow */}
      <main className="relative z-10 pt-20">
        <BentoGrid />
        <Certificates />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Command Palette Dialog */}
      <CommandMenu
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
      />
    </div>
  );
}

export default App;
