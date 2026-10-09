import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { Icons } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="border-t border-cyan-500/20 bg-gray-950 pt-14 pb-10 relative z-10 overflow-hidden"
    >
      {/* Multi-color top gradient highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 via-purple-500/60 to-transparent pointer-events-none" />

      {/* Ambient background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-start">
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span className="text-white font-bold text-base tracking-tight font-mono">
                {personal.name} <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">{personal.surname}</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-sm mx-auto md:mx-0 leading-relaxed">
              {personal.role} building scalable, secure, and automated cloud-native systems with AWS, Kubernetes, Terraform, and CI/CD pipelines.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 pt-1 text-xs font-mono text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Based in Colombo, Sri Lanka (UTC+5:30)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
              Navigation
            </span>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-xs font-medium text-zinc-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Social Channels */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Connect Directly
            </span>
            
            <div className="flex items-center gap-2.5">
              {/* GitHub */}
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-gray-900 hover:bg-purple-950/40 text-zinc-300 hover:text-purple-300 border border-white/10 hover:border-purple-500/40 transition-all shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Icons.Github className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-gray-900 hover:bg-blue-950/40 text-zinc-300 hover:text-blue-300 border border-white/10 hover:border-blue-500/40 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Icons.Linkedin className="w-4 h-4" />
              </a>

              {/* Email Direct */}
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-gray-900 hover:bg-emerald-950/40 text-zinc-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/40 transition-all shadow-sm"
                aria-label="Direct Email"
                title={`Email: ${personal.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white border border-cyan-400/40 transition-all ml-1 shadow-md shadow-cyan-500/25"
                aria-label="Scroll back to top"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} {personal.name} {personal.surname}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Colombo Infrastructure Active
            </span>
          </div>
        </div>

      </div>
    </motion.footer>
  );
};

