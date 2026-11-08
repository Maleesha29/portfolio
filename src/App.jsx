import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy-load below-the-fold sections for optimal initial bundle and fast FCP
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Certificates = lazy(() => import('./components/Certificates').then(m => ({ default: m.Certificates })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const CommandMenu = lazy(() => import('./components/CommandMenu').then(m => ({ default: m.CommandMenu })));

// Minimal non-blocking fallback component
const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

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
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:text-cyan-200">
        
        {/* Subtle grid texture & soft radial glow */}
        <Background />

        {/* Fixed Navbar with scroll progress and theme toggle */}
        <Navbar onOpenCommand={() => setCommandOpen(true)} />

        {/* Main Flow: Hero -> Projects -> Experience -> Skills -> Certifications -> Contact */}
        <main className="relative z-10">
          <Hero />

          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Certificates />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>

        {/* Footer with CI/CD status and About note */}
        <Suspense fallback={<div className="h-20" />}>
          <Footer />
        </Suspense>

        {/* Command Palette */}
        {commandOpen && (
          <Suspense fallback={null}>
            <CommandMenu
              isOpen={commandOpen}
              onClose={() => setCommandOpen(false)}
            />
          </Suspense>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
