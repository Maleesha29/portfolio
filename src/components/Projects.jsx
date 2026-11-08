import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  TrendingUp, 
  X, 
  Cpu, 
  CheckCircle2, 
  GitBranch, 
  ShieldAlert, 
  Package, 
  Boxes, 
  FileCode2,
  Code2
} from 'lucide-react';
import { Icons } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { ArchitectureDiagram } from './ArchitectureDiagram';

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'DevOps & CI/CD', 'Cloud / AWS', 'Kubernetes', 'Docker & Containers'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => {
        if (p.category === activeFilter) return true;
        if (activeFilter === 'Kubernetes' && (p.tags?.includes('Kubernetes') || p.tags?.includes('Minikube'))) return true;
        if (activeFilter === 'DevOps & CI/CD' && (p.tags?.includes('GitOps') || p.tags?.includes('DevOps') || p.tags?.includes('Docker'))) return true;
        if (activeFilter === 'Docker & Containers' && (p.category === 'Docker & Containers' || p.tags?.includes('Docker') || p.tags?.includes('Docker Compose'))) return true;
        if (activeFilter === 'Cloud / AWS' && (p.category === 'Cloud / AWS' || p.tags?.includes('AWS'))) return true;
        return false;
      });

  const getArtifactIcon = (type) => {
    switch (type) {
      case 'github':
        return <Icons.Github className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />;
      case 'helm':
        return <Package className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />;
      case 'registry':
        return <Boxes className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />;
      case 'action':
        return <GitBranch className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />;
      default:
        return <FileCode2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative" aria-label="DevOps and Cloud Engineering Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Production Deployments & Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Real-world architectures engineered for automated GitOps continuous delivery, zero-trust security compliance, and measurable reliability.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive 
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Cover Preview */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80";
                    }}
                    className="w-full h-full object-cover object-center contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Impact metric badge overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-900/90 text-emerald-400 border border-emerald-500/30">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                      <span className="truncate max-w-[200px]">{project.metrics}</span>
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono mt-1 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: View Code + Live Demo + Deep Dive */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={project.repoUrl || project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>View Code</span>
                  </a>

                  <a
                    href={project.demoUrl || project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                    <span>Live Demo</span>
                  </a>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 text-xs font-mono font-semibold transition-colors"
                >
                  <span>Architecture Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Deep Dive Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 z-10 text-left"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
                      Architecture & Delivery Spec
                    </span>
                    <h3 id="modal-project-title" className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                    aria-label="Close architecture modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Architecture Diagram */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2 font-semibold">
                    <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    Architecture Flow Diagram
                  </h4>
                  <ArchitectureDiagram type={selectedProject.diagramType} />
                </div>

                {/* Outcome Metrics */}
                {selectedProject.outcomes && (
                  <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2.5 flex items-center gap-2 font-semibold">
                      <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Measurable Engineering Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.outcomes.map((outcome, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Implementation Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5 flex items-center gap-2 font-semibold">
                    <GitBranch className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                    Implementation Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.architecture.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architectural Trade-offs */}
                {selectedProject.tradeoffs && (
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5 flex items-center gap-2 font-semibold">
                      <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      Architectural Decisions & Trade-Offs
                    </h4>
                    <div className="space-y-2.5">
                      {selectedProject.tradeoffs.map((tradeoff, tIdx) => (
                        <div key={tIdx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs">
                          <div className="font-semibold text-slate-900 dark:text-white font-mono mb-1">
                            {tradeoff.decision}
                          </div>
                          <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {tradeoff.rationale}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct Artifact Links */}
                {selectedProject.artifacts && (
                  <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2 font-semibold">
                      <Boxes className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      Repository Artifacts & Manifests
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.artifacts.map((art, aIdx) => (
                        <a
                          key={aIdx}
                          href={art.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                        >
                          <div className="flex items-center gap-2 truncate">
                            {getArtifactIcon(art.type)}
                            <span className="truncate">{art.label}</span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={selectedProject.repoUrl || selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium transition-colors"
                  >
                    <Icons.Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>View Repository</span>
                  </a>
                  <a
                    href={selectedProject.demoUrl || selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white text-xs font-mono font-semibold shadow-md shadow-cyan-500/20 transition-all"
                  >
                    <span>Open Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
