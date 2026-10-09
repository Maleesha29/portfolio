import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Building2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>Track Record of Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">Career Milestones</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            A chronological timeline of building foundational software, guiding engineering cultures, and delivering high-value products.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-cyan-500/20 ml-3 md:ml-6 pl-6 md:pl-10 space-y-10 max-w-5xl">
          {experience.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div
                key={item.role + item.company}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Timeline node pip with pulse ring on active */}
                <div className="absolute -left-[32px] md:-left-[48px] top-4">
                  {isExpanded ? (
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-cyan-400 opacity-60"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gradient-to-r from-cyan-400 to-indigo-400 shadow-[0_0_12px_rgba(56,189,248,0.8)] border-2 border-gray-950"></span>
                    </div>
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full bg-gray-950 border-2 border-zinc-600 group-hover:border-cyan-400 transition-colors" />
                  )}
                </div>

                {/* Card Container */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className={`rounded-2xl p-6 bg-gray-950/80 border backdrop-blur-xl transition-all cursor-pointer shadow-xl ${
                    isExpanded 
                      ? 'border-cyan-500/40 bg-gray-900/90 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.15)]' 
                      : 'border-white/10 hover:border-cyan-500/30 hover:bg-gray-900/50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors flex items-center gap-2">
                        <span>{item.role}</span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 90 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronRight className="w-4 h-4 text-cyan-400" />
                        </motion.div>
                      </h3>
                      <div className="text-sm font-medium text-zinc-300 flex items-center gap-2 mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                        <span className="text-indigo-200 font-semibold">{item.company}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs text-zinc-400 font-mono bg-indigo-950/40 border border-indigo-500/20 px-2 py-0.5 rounded-full">{item.type}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 self-start sm:self-auto">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Expandable accomplishments */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 pt-5 border-t border-cyan-500/20 space-y-3">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                            Key Accomplishments & Impact:
                          </h4>
                          <ul className="space-y-2">
                            {item.accomplishments.map((acc, aIdx) => (
                              <li key={aIdx} className="text-xs text-zinc-300 flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{acc}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Skills tags */}
                          <div className="flex flex-wrap gap-1.5 pt-3">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-950/30 border border-cyan-500/20 text-cyan-300 hover:text-white hover:border-cyan-400 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


