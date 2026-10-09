import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Testimonials = () => {
  const { testimonials } = portfolioData;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-950/40 border border-violet-800/40 text-violet-400 text-xs font-mono mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Executive Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Leadership Perspectives
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Feedback from Engineering VPs, Infrastructure Directors, and Reliability Guild Leads on architectural delivery and incident execution.
          </p>
        </div>

        {/* Testimonials Grid without 5-star consumer ratings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl p-6 bg-slate-900/40 border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-violet-500/30 transition-all group"
            >
              <div>
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author attribution with LinkedIn link */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-violet-400/30"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {t.author}
                    </h4>
                    <p className="text-xs text-slate-400">{t.title}</p>
                  </div>
                </div>

                <a
                  href={t.linkedinUrl || "https://linkedin.com"}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-violet-600/20 text-slate-400 hover:text-cyan-300 transition-colors"
                  aria-label={`LinkedIn recommendation for ${t.author}`}
                  title="View on LinkedIn"
                >
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
