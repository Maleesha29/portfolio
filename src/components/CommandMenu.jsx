import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Layers, 
  Briefcase, 
  Mail, 
  X, 
  Sparkles, 
  Award, 
  Copy, 
  Check, 
  Sun, 
  Moon, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { Icons } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const CommandMenu = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { personal } = portfolioData;

  const actions = [
    {
      id: 'jump-hero',
      title: 'Jump to: About & Introduction',
      category: 'Navigation',
      icon: Compass,
      perform: () => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'jump-projects',
      title: 'Jump to: Featured DevOps Projects',
      category: 'Navigation',
      icon: Layers,
      perform: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'jump-experience',
      title: 'Jump to: Work Experience',
      category: 'Navigation',
      icon: Briefcase,
      perform: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'jump-skills',
      title: 'Jump to: Skills & Technical Arsenal',
      category: 'Navigation',
      icon: Sparkles,
      perform: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'jump-certs',
      title: 'Jump to: Industry Certifications',
      category: 'Navigation',
      icon: Award,
      perform: () => {
        document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'jump-contact',
      title: 'Jump to: Contact & Terminal',
      category: 'Navigation',
      icon: Mail,
      perform: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'open-resume',
      title: 'Download Resume (Maleesha_Karunarathna_DevOps_Resume.pdf)',
      category: 'Actions',
      icon: FileText,
      perform: () => {
        const link = document.createElement('a');
        link.href = personal.resumeUrl;
        link.download = 'Maleesha_Karunarathna_DevOps_Resume.pdf';
        link.click();
        onClose();
      },
    },
    {
      id: 'copy-email',
      title: copied ? 'Email Copied to Clipboard!' : `Copy Email (${personal.email})`,
      category: 'Actions',
      icon: copied ? Check : Copy,
      perform: () => {
        navigator.clipboard?.writeText(personal.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 800);
      },
    },
    {
      id: 'open-github',
      title: 'Open GitHub Profile (@Maleesha29)',
      category: 'Links',
      icon: Icons.Github,
      perform: () => {
        window.open(personal.github, '_blank', 'noreferrer');
        onClose();
      },
    },
    {
      id: 'toggle-theme',
      title: `Toggle Theme (Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode)`,
      category: 'Preferences',
      icon: theme === 'dark' ? Sun : Moon,
      perform: () => {
        toggleTheme();
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].perform();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Palette Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10"
        >
          {/* Input Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Type a command or search sections..."
              className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              aria-label="Close command palette"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2">
            {filteredActions.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-400 font-mono">
                No matching commands found.
              </div>
            ) : (
              filteredActions.map((act, idx) => {
                const isSelected = idx === selectedIndex;
                const IconComp = act.icon;

                return (
                  <button
                    key={act.id}
                    onClick={() => act.perform()}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs transition-colors ${
                      isSelected
                        ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="font-medium truncate">{act.title}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                        {act.category}
                      </span>
                      {isSelected && <ArrowRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Guide */}
          <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span>↑↓ Navigate</span>
              <span>•</span>
              <span>↵ Select</span>
              <span>•</span>
              <span>Esc Close</span>
            </div>
            <span>Maleesha DevOps Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
