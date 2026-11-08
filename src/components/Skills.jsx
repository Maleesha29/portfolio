import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  GitBranch, 
  Boxes, 
  Terminal, 
  Activity, 
  Cpu, 
  Sparkles, 
  BookOpen, 
  Layers 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { personal, bentoItems, nowLearning } = portfolioData;

  // Icon mapping for tech categories
  const categoryIcons = {
    'DevOps & CI/CD': GitBranch,
    'Cloud & Infrastructure': Cloud,
    'Containerization & Orchestration': Boxes,
    'Fullstack & API Engineering': Cpu,
    'Operating Systems & Scripting': Terminal,
    'Data & Risk Analytics': Activity,
  };

  // Domain badge colors applied strictly to small icons and tags
  const tagColorStyles = {
    'DevOps & CI/CD': 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20',
    'Cloud & Infrastructure': 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20',
    'Containerization & Orchestration': 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20',
    'Fullstack & API Engineering': 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20',
    'Operating Systems & Scripting': 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20',
    'Data & Risk Analytics': 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20',
  };

  return (
    <section id="skills" className="py-20 relative" aria-label="Engineering Capabilities and Skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* PART 1: "WHAT I DO" - 4 CORE PILLARS MOVED OUT OF HERO */}
        {/* ============================================================== */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Core Specializations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              What I <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Do</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Foundational DevOps engineering capabilities applied across infrastructure automation, container platforms, and continuous delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {personal.aboutMe.pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* PART 2: TECHNICAL ARSENAL (CATEGORIZED TOOLS) */}
        {/* ============================================================== */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-mono mb-3">
              <Boxes className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
              <span>Production Stack & Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Technical <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Arsenal</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Practiced tools, cloud services, orchestrators, and declarative frameworks used in projects and labs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bentoItems.techCategories.map((cat, idx) => {
              const IconComp = categoryIcons[cat.category] || Boxes;
              const tagStyle = tagColorStyles[cat.category] || 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';

              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                        <IconComp className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {cat.category}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {cat.skills.length} Technologies
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono font-medium ${tagStyle}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* PART 3: "NOW LEARNING" STRIP */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Now Learning & Preparing
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Continuous skill expansion and active certification roadmap
                </p>
              </div>
            </div>

            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 self-start sm:self-auto">
              Active Focus • 2026 – 2027
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nowLearning.map((item) => (
              <div
                key={item.name}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                      {item.name}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mb-2 font-medium">
                    {item.category}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-cyan-700 dark:text-cyan-300 pt-2 border-t border-slate-200 dark:border-slate-800">
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
