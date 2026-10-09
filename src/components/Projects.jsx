import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  TrendingUp, 
  X, 
  Layers, 
  Cpu, 
  CheckCircle2,
  GitBranch,
  ShieldAlert,
  Package,
  Boxes,
  FileCode2,
  Sparkles
} from 'lucide-react';
import { Icons } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'DevOps & CI/CD', 'Cloud / AWS', 'Kubernetes'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const getArtifactIcon = (type) => {
    switch (type) {
      case 'github':
        return <Icons.Github className="w-3.5 h-3.5 text-cyan-400" />;
      case 'helm':
        return <Package className="w-3.5 h-3.5 text-blue-400" />;
      case 'registry':
        return <Boxes className="w-3.5 h-3.5 text-amber-400" />;
      case 'action':
        return <GitBranch className="w-3.5 h-3.5 text-purple-400" />;
      default:
        return <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'DevOps & CI/CD':
        return 'bg-purple-950/90 text-purple-300 border-purple-500/40';
      case 'Kubernetes':
        return 'bg-blue-950/90 text-blue-300 border-blue-500/40';
      case 'Cloud / AWS':
        return 'bg-amber-950/90 text-amber-300 border-amber-500/40';
      default:
        return 'bg-cyan-950/90 text-cyan-300 border-cyan-500/40';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Production Deployments & Platform Engines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Infrastructure Projects</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Real-world architectures engineered for automated GitOps delivery, zero-trust security compliance, and measurable cloud cost reduction.
            </p>
          </motion.div>

          {/* Filter Pills with animated layoutId indicator */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-gray-950 border border-cyan-500/20 backdrop-blur-md self-start md:self-auto shadow-inner relative">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors z-10 ${
                    isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-cyan-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg shadow-md shadow-cyan-500/30"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="group rounded-2xl bg-gray-950/80 border border-cyan-500/20 overflow-hidden hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-950/40 backdrop-blur-xl transition-all flex flex-col justify-between relative"
              >
                <div>
                  {/* Image Cover Preview with Gradient Overlay */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center contrast-110 group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />

                    {/* Impact badge */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-950/90 backdrop-blur-md border border-emerald-500/30 text-emerald-300 shadow-md">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        {project.metrics}
                      </span>
                      <span className={`text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-md border backdrop-blur-sm ${getCategoryBadgeClass(project.category)}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                    </h3>
                    <p className="text-xs text-cyan-400/90 font-mono mt-1 mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-gray-900 border border-cyan-500/15 text-cyan-300/80 group-hover:border-cyan-400/30 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Links & Deep Dive button */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/10">
                  <motion.button
                    whileHover={{ x: 2 }}
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-cyan-300 hover:text-white flex items-center gap-1 py-1.5 transition-colors font-mono group/btn"
                  >
                    <span>Architecture Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform text-cyan-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </motion.button>

                  <div className="flex items-center gap-2.5">
                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-gray-900 border border-white/10 hover:border-cyan-400/50 text-zinc-400 hover:text-cyan-300 transition-colors"
                      aria-label={`GitHub repo for ${project.title}`}
                      title="Source Repository"
                    >
                      <Icons.Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-gray-900 border border-white/10 hover:border-cyan-400/50 text-zinc-400 hover:text-cyan-300 transition-colors"
                      aria-label={`Live telemetry for ${project.title}`}
                      title="Live Telemetry / System Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Deep Dive Modal with Trade-offs and Runnable Artifacts */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.93, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 20 }}
                transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gray-950 border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 p-6 sm:p-8 z-10"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                      Infrastructure Architecture Spec
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 bg-gradient-to-r from-white via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-lg bg-gray-900 text-zinc-400 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Runnable Code & Artifact Links */}
                {selectedProject.artifacts && (
                  <div className="mb-6 p-4 rounded-xl bg-gray-900/90 border border-cyan-500/20">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-2">
                      <Boxes className="w-4 h-4 text-cyan-400" />
                      Direct Links to Raw Code & Production Artifacts
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProject.artifacts.map((art, aIdx) => (
                        <motion.a
                          key={aIdx}
                          whileHover={{ x: 3 }}
                          href={art.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between p-2.5 rounded-lg bg-gray-950 hover:bg-cyan-950/40 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-zinc-200 hover:text-cyan-200 transition-all group"
                        >
                          <div className="flex items-center gap-2">
                            {getArtifactIcon(art.type)}
                            <span>{art.label}</span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Technical Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-indigo-400" />
                    Engineering Highlights & Implementation Design
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.architecture.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 bg-gray-900/70 p-3 rounded-xl border border-white/10 hover:border-indigo-500/30 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architectural Trade-offs Section */}
                {selectedProject.tradeoffs && (
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-amber-400" />
                      Architectural Trade-Off Notes (Chosen vs. Rejected)
                    </h4>
                    <div className="space-y-3">
                      {selectedProject.tradeoffs.map((tradeoff, tIdx) => (
                        <div key={tIdx} className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs">
                          <div className="font-semibold text-indigo-200 font-mono mb-1">
                            Decision: {tradeoff.decision}
                          </div>
                          <div className="text-zinc-300 leading-relaxed font-sans">
                            {tradeoff.rationale}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Impact Metric Banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/50 via-teal-950/40 to-gray-900 border border-emerald-500/30 mb-6 flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs text-emerald-400 font-mono">Verified Metric Impact:</div>
                    <div className="text-sm font-semibold text-emerald-200">{selectedProject.metrics}</div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 border border-white/10 text-xs font-mono font-medium text-white transition-colors"
                  >
                    <Icons.Github className="w-4 h-4 text-cyan-400" />
                    Source Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-xs font-mono shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-violet-500 transition-all"
                  >
                    Launch Live Telemetry
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};



