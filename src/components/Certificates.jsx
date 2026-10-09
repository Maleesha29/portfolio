import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Cloud,
  FileCheck,
  Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certificates = () => {
  const { certificates } = portfolioData;

  const getCertTheme = (type) => {
    switch (type) {
      case 'kubernetes':
        return {
          icon: Cpu,
          iconBox: 'bg-blue-950/60 border-blue-500/40 text-blue-400',
          border: 'border-blue-500/20 hover:border-blue-400/50',
          glow: 'from-blue-500/15 via-cyan-500/10 to-transparent',
          tagBg: 'bg-blue-950/40 border-blue-500/20 text-blue-300 hover:border-blue-400/50',
          btnHover: 'hover:border-blue-400 hover:text-blue-300 hover:bg-blue-950/50',
          badgeText: 'text-blue-300',
        };
      case 'aws':
        return {
          icon: Cloud,
          iconBox: 'bg-amber-950/60 border-amber-500/40 text-amber-400',
          border: 'border-amber-500/20 hover:border-amber-400/50',
          glow: 'from-amber-500/15 via-orange-500/10 to-transparent',
          tagBg: 'bg-amber-950/40 border-amber-500/20 text-amber-300 hover:border-amber-400/50',
          btnHover: 'hover:border-amber-400 hover:text-amber-300 hover:bg-amber-950/50',
          badgeText: 'text-amber-300',
        };
      case 'jenkins':
        return {
          icon: Terminal,
          iconBox: 'bg-orange-950/60 border-orange-500/40 text-orange-400',
          border: 'border-orange-500/20 hover:border-orange-400/50',
          glow: 'from-orange-500/15 via-red-500/10 to-transparent',
          tagBg: 'bg-orange-950/40 border-orange-500/20 text-orange-300 hover:border-orange-400/50',
          btnHover: 'hover:border-orange-400 hover:text-orange-300 hover:bg-orange-950/50',
          badgeText: 'text-orange-300',
        };
      case 'terraform':
        return {
          icon: Terminal,
          iconBox: 'bg-purple-950/60 border-purple-500/40 text-purple-400',
          border: 'border-purple-500/20 hover:border-purple-400/50',
          glow: 'from-purple-500/15 via-violet-500/10 to-transparent',
          tagBg: 'bg-purple-950/40 border-purple-500/20 text-purple-300 hover:border-purple-400/50',
          btnHover: 'hover:border-purple-400 hover:text-purple-300 hover:bg-purple-950/50',
          badgeText: 'text-purple-300',
        };
      case 'linux':
      default:
        return {
          icon: ShieldCheck,
          iconBox: 'bg-rose-950/60 border-rose-500/40 text-rose-400',
          border: 'border-rose-500/20 hover:border-rose-400/50',
          glow: 'from-rose-500/15 via-pink-500/10 to-transparent',
          tagBg: 'bg-rose-950/40 border-rose-500/20 text-rose-300 hover:border-rose-400/50',
          btnHover: 'hover:border-rose-400 hover:text-rose-300 hover:bg-rose-950/50',
          badgeText: 'text-rose-300',
        };
    }
  };

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">Industry Certifications</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Formal engineering credentials demonstrating deep technical competence across cloud platforms, container orchestration, and declarative infrastructure.
          </p>
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => {
            const theme = getCertTheme(cert.iconType);
            const IconComponent = theme.icon;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className={`rounded-2xl p-6 sm:p-7 bg-gray-950/80 border ${theme.border} backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl`}
              >
                {/* Subtle ambient gradient flare per card */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${theme.glow} blur-[60px] pointer-events-none rounded-full group-hover:scale-125 transition-all duration-700`} />

                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-xl ${theme.iconBox} shadow-inner transition-colors`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          Verified Active Credential
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors mt-0.5">
                          {cert.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-5 text-xs text-zinc-300">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500 font-mono">Issuer:</span>
                      <span className="font-medium text-zinc-200">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-4 text-zinc-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        Issued: {cert.issuedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileCheck className="w-3.5 h-3.5 text-zinc-500" />
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  </div>

                  {/* Core Domains Tested */}
                  <div className="mb-5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Exam Domain Proficiencies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className={`text-[11px] font-mono px-2.5 py-1 rounded-lg ${theme.tagBg} transition-all cursor-default`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action verification link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-mono">Digital Accreditation</span>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gray-900 border border-white/10 ${theme.btnHover} text-xs font-mono text-zinc-200 transition-all shadow-sm group/btn font-medium`}
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};



