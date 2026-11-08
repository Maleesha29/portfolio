import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Cloud, 
  Boxes 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certificates = () => {
  const { certificates } = portfolioData;

  const getCertIcon = (type) => {
    switch (type) {
      case 'kubernetes':
        return <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'aws':
        return <Cloud className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'jenkins':
        return <Terminal className="w-5 h-5 text-orange-600 dark:text-orange-400" />;
      case 'docker':
        return <Boxes className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'kubernetes':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20';
      case 'aws':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20';
      case 'jenkins':
        return 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20';
      case 'docker':
        return 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20';
      default:
        return 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20';
    }
  };

  return (
    <section id="certificates" className="py-20 relative" aria-label="Certifications and Verified Credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Verified Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Industry <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Formally accredited competencies in AWS Cloud Architecture, Kubernetes cluster administration, automated Jenkins CI/CD, and Docker containerization.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Issuer */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {getCertIcon(cert.iconType)}
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border font-medium ${getBadgeStyle(cert.iconType)}`}>
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* Issue Date & Credential ID */}
                <div className="space-y-1 mb-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Issued: {cert.issuedDate}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="truncate text-[11px]">
                      ID: <span className="text-slate-700 dark:text-slate-300">{cert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Skills Learned */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {cert.skillsLearned?.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
