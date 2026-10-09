import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ onOpenCommand }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-gray-950/85 backdrop-blur-xl border-b border-cyan-500/15 shadow-lg shadow-cyan-950/20'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2.5 text-white font-semibold tracking-tight text-lg"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 p-[1.5px] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                <div className="w-full h-full bg-gray-950 rounded-[6.5px] flex items-center justify-center">
                  <span className="text-sm font-mono font-bold bg-gradient-to-r from-cyan-400 to-indigo-300 bg-clip-text text-transparent">
                    M
                  </span>
                </div>
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-gray-950 animate-pulse" />
            </div>
            <span className="font-mono text-sm tracking-normal text-white">
              maleesha<span className="text-cyan-400 font-medium">.dev</span>
            </span>
          </motion.a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-gray-950/70 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full shadow-inner shadow-cyan-500/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-cyan-300 rounded-full transition-all hover:bg-cyan-500/10 relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Command palette button & CTA */}
          <div className="flex items-center gap-2.5">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenCommand}
              aria-label="Open command palette"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900/90 border border-cyan-500/20 text-xs text-zinc-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-all hover:bg-cyan-950/40 shadow-sm"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono text-[11px] text-zinc-400">Cmd + K</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            {/* Mobile menu toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-900 border border-white/10 text-zinc-300 hover:text-cyan-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-0 top-[64px] z-30 p-4 md:hidden"
          >
            <div className="bg-gray-950/95 backdrop-blur-2xl border border-cyan-500/20 rounded-2xl p-5 shadow-2xl shadow-cyan-950/50 flex flex-col gap-2.5">
              {navLinks.map((link, lIdx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: lIdx * 0.05 }}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-zinc-200 hover:bg-cyan-500/10 hover:text-cyan-300 border border-transparent hover:border-cyan-500/20 transition-all flex items-center justify-between"
                >
                  {link.name}
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </motion.a>
              ))}
              <div className="pt-3 mt-1 border-t border-white/10 flex items-center justify-between gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommand();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 text-xs font-mono text-cyan-300 transition-colors"
                >
                  <Command className="w-3.5 h-3.5 text-cyan-400" />
                  Palette (Cmd+K)
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-center text-xs font-semibold shadow-md shadow-cyan-500/20"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};



