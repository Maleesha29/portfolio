import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Clock, 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Terminal,
  FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const PostMortem = () => {
  const { postMortem } = portfolioData;
  const [isExpanded, setIsExpanded] = useState(true);

  if (!postMortem) return null;

  return (
    <section id="post-mortem" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-950/40 border border-rose-800/40 text-rose-400 text-xs font-mono mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Operational SRE Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Production Incident Post-Mortem & RCA
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A real-world sanitized case study demonstrating root-cause triage, MTTR recovery speed, and preventative policy-as-code automation.
          </p>
        </div>

        {/* Post Mortem Case Study Container */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-2xl">
          {/* Top Incident Status Banner */}
          <div className="px-6 py-4 bg-slate-950/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-rose-500/20 text-rose-300 font-mono text-xs font-bold border border-rose-500/30">
                {postMortem.severity}
              </span>
              <span className="font-mono text-xs text-slate-400">
                ID: {postMortem.incidentNumber}
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-xs text-slate-300 font-mono hidden sm:inline">
                {postMortem.date}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                MTTR: {postMortem.mttr}
              </span>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                aria-label="Toggle post-mortem view"
              >
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {postMortem.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {postMortem.rootCause.summary}
              </p>
            </div>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 pt-2"
              >
                {/* Detection Alert Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 font-mono text-xs space-y-2">
                    <div className="text-cyan-400 font-semibold flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      Detection Mechanism & Alert Rule
                    </div>
                    <div className="text-slate-400">
                      Alert: <span className="text-slate-200">{postMortem.detectionMechanism.alertName}</span>
                    </div>
                    <div className="text-slate-400">
                      Condition: <code className="text-amber-300">{postMortem.detectionMechanism.threshold}</code>
                    </div>
                    <div className="text-slate-400">
                      Escalation: <span className="text-slate-300">{postMortem.detectionMechanism.routing}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 font-mono text-xs space-y-2">
                    <div className="text-emerald-400 font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Incident Timeline Metrics
                    </div>
                    <div className="text-slate-400">
                      Detected: <span className="text-slate-200">{postMortem.detectionTime}</span>
                    </div>
                    <div className="text-slate-400">
                      Mitigated & Resolved: <span className="text-slate-200">{postMortem.resolutionTime}</span>
                    </div>
                    <div className="text-slate-400">
                      Total Degradation Window: <span className="text-emerald-300 font-bold">{postMortem.mttr}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Step-by-Step */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-violet-400" />
                    Triage & Mitigation Sequence
                  </h4>
                  <div className="relative border-l border-white/10 ml-3 pl-4 space-y-3 font-mono text-xs">
                    {postMortem.timeline.map((step, sIdx) => (
                      <div key={sIdx} className="relative">
                        <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-violet-400" />
                        <span className="text-cyan-400 font-bold mr-2">{step.time}:</span>
                        <span className="text-slate-300 font-sans">{step.event}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preventative Remediation & Policy-as-Code gates */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Preventative Remediation & Policy-as-Code Gates
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {postMortem.remediations.map((rem, rIdx) => (
                      <div key={rIdx} className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs space-y-1">
                        <div className="font-semibold text-emerald-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{rem.action}</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed font-sans pt-1">
                          {rem.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
