import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Icons } from './Icons';
import { portfolioData } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  const { personal, siteMeta } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 pt-14 pb-10 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200 dark:border-slate-800 items-start">
          
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-slate-900 dark:text-white font-bold text-base tracking-tight font-mono">
                {personal.name} {personal.surname}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans max-w-sm leading-relaxed">
              DevOps & Cloud Engineer specializing in AWS infrastructure automation, Kubernetes orchestration, and GitOps CI/CD delivery.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Colombo, Sri Lanka (UTC+5:30)</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Navigation
            </span>
            <div className="flex flex-col space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* About this site & CI/CD Status Badge */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              About This Site
            </span>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 space-y-2">
              <div>
                <span className="text-slate-900 dark:text-white font-medium">Stack: </span>
                {siteMeta.builtWith}
              </div>
              <div>
                <span className="text-slate-900 dark:text-white font-medium">Hosting: </span>
                {siteMeta.hosting}
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Pipeline Status:</span>
                {/* GitHub Actions Status Badge linking to workflow */}
                <a
                  href="https://github.com/Maleesha29/portfolio/actions/workflows/deploy.yml"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono hover:bg-emerald-500/20 transition-colors"
                  title="View GitHub Actions Deploy Workflow"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>deploy: passing</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Socials & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div>
            © {currentYear} {personal.name} {personal.surname}. All rights reserved.
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Icons.Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Icons.Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="Email Maleesha"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 transition-colors ml-2"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
