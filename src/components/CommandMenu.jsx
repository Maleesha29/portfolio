import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Layers, 
  Briefcase, 
  Mail, 
  X, 
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';
import { Icons } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const CommandMenu = ({ isOpen, onClose, onSelectAction }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    {
      id: 'certificates',
      title: 'View Verified Certifications (AWS, Kubernetes, Jenkins)',
      category: 'Navigation',
      icon: Award,
      action: () => {
        document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'projects',
      title: 'Navigate to Projects & Cloud Platforms',
      category: 'Navigation',
      icon: Layers,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'resume',
      title: 'Download Resume.pdf (Formatted CV)',
      category: 'Document',
      icon: FileText,
      action: () => {
        const link = document.createElement('a');
        link.href = portfolioData.personal.resumeUrl;
        link.download = 'Maleesha_Karunarathna_DevOps_Resume.pdf';
        link.click();
        onClose();
      },
    },
    {
      id: 'bento',
      title: 'Explore About & Core Skills',
      category: 'Navigation',
      icon: Sparkles,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'experience',
      title: 'View Career Experience',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'contact',
      title: 'Initiate Contact / Send Message',
      category: 'Action',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'cv',
      title: 'Download Resume / Curriculum Vitae',
      category: 'Document',
      icon: FileText,
      action: () => {
        window.open(portfolioData.personal.resumeUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      category: 'External',
      icon: Icons.Github,
      action: () => {
        window.open(portfolioData.personal.github, '_blank');
        onClose();
      },
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External',
      icon: Icons.Linkedin,
      action: () => {
        window.open(portfolioData.personal.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'Navigation':
        return 'bg-cyan-950/50 text-cyan-300 border-cyan-500/30';
      case 'Document':
        return 'bg-amber-950/50 text-amber-300 border-amber-500/30';
      case 'Action':
        return 'bg-emerald-950/50 text-emerald-300 border-emerald-500/30';
      case 'External':
        return 'bg-purple-950/50 text-purple-300 border-purple-500/30';
      default:
        return 'bg-gray-800 text-zinc-300 border-white/10';
    }
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-gray-950 border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 z-10"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-cyan-500/20 bg-gray-900/90">
            <Search className="w-5 h-5 text-cyan-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or jump to section..."
              className="flex-1 bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none font-sans"
              autoFocus
            />
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
              ESC
            </span>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close command palette"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filtered.length === 0 ? (
              <div className="p-8 text-center text-sm text-zinc-400">
                No matching results found for "{query}"
              </div>
            ) : (
              filtered.map((item, index) => {
                const Icon = item.icon;
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-500/20 via-indigo-500/15 to-transparent text-white border border-cyan-500/40 shadow-sm'
                        : 'text-zinc-300 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white' : 'bg-gray-900 text-cyan-400 border border-cyan-500/20'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${getCategoryBadge(item.category)}`}>
                        {item.category}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-0.5 text-cyan-400' : 'text-zinc-500'}`} />
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Navigation Hints */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-gray-900/90 border-t border-cyan-500/20 text-[11px] text-cyan-400/80 font-mono">
            <div className="flex items-center gap-3">
              <span><kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-cyan-300 border border-cyan-500/20">↑↓</kbd> Navigate</span>
              <span><kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-cyan-300 border border-cyan-500/20">↵</kbd> Select</span>
            </div>
            <span className="text-zinc-400">Antigravity Palette v2.4</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

