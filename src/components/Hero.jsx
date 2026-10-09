import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenCommand }) => {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden flex flex-col justify-center">
      {/* Background subtle glow flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Availability Status Badge & Work Rights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2.5 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-950/90 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-950/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-xs font-mono font-medium text-emerald-300">
              {personal.status.text}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-200">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>{personal.workAuthorization}</span>
          </div>
        </motion.div>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Cloud Architectures</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            download="Maleesha_Karunarathna_DevOps_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 hover:bg-cyan-950/40 border border-cyan-500/20 text-sm font-medium text-cyan-200 hover:text-white hover:border-cyan-400/50 transition-all shadow-sm"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Resume.pdf</span>
          </a>
        </motion.div>
      </div>

      {/* Down scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-zinc-500">
        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/80">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </div>
    </section>
  );
};

