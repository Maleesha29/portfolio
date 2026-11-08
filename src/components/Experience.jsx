import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="py-20 relative" aria-label="Work Experience and Roles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Execution Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Work <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Professional background in data risk analytics, process automation scripting, and fullstack MERN web engineering.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6 pl-6 md:pl-10 space-y-8 max-w-4xl">
          {experience.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={item.role + item.company} className="relative">
                {/* Timeline node pip */}
                <div className="absolute -left-[31px] md:-left-[47px] top-6">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                    isExpanded 
                      ? 'bg-cyan-500 border-cyan-500 ring-4 ring-cyan-500/20' 
                      : 'bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-600'
                  }`} />
                </div>

                {/* Card Container */}
                <div
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className={`rounded-2xl p-6 bg-white dark:bg-slate-900 border transition-all cursor-pointer shadow-sm ${
                    isExpanded 
                      ? 'border-cyan-500/50 ring-1 ring-cyan-500/20' 
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>{item.role}</span>
                        <ChevronRight className={`w-4 h-4 text-cyan-600 dark:text-cyan-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </h3>
                      <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Expandable accomplishments */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                      <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Key Accomplishments
                      </div>
                      {item.accomplishments.map((acc, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{acc}</span>
                        </div>
                      ))}

                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
