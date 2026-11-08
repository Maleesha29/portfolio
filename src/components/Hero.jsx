import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  GraduationCap, 
  ShieldCheck, 
  ChevronDown 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Helper component for count-up animation triggered once in view
const CountUpStat = ({ target, suffix = '', label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200; // ms
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-left">
      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
        {label}
      </div>
    </div>
  );
};

export const Hero = () => {
  const { personal } = portfolioData;
  const [imgError, setImgError] = useState(false);

  return (
    <section 
      id="hero" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      aria-label="Introduction and Overview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability status badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personal.status.text}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>{personal.workAuthorization}</span>
          </div>
        </motion.div>

        {/* Two-column hero: Left = Headline & CTA; Right = Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Value Statement, Proof Point & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              Hi, I'm {personal.name} {personal.surname}.<br />
              Building <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">reliable</span> cloud infrastructure.
            </h1>

            {/* One-line value statement */}
            <p className="text-lg sm:text-xl font-normal text-slate-700 dark:text-slate-300 leading-relaxed mb-3 max-w-2xl">
              {personal.headline}
            </p>

            {/* One proof point */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
              {personal.proofPoint}
            </p>

            {/* Two Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold text-sm shadow-md shadow-cyan-500/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download="Maleesha_Karunarathna_DevOps_Resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium text-sm transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </motion.a>
            </div>

            {/* Count-up Stats Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              {personal.stats.map((stat, idx) => (
                <CountUpStat
                  key={idx}
                  target={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column: Clean Solid Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-3">
                
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                  {!imgError ? (
                    <picture>
                      <source srcSet="/profile.webp" type="image/webp" />
                      <source srcSet="/profile.jpg" type="image/jpeg" />
                      <img
                        src="/profile.jpg"
                        alt="Maleesha Karunarathna portrait"
                        width={400}
                        height={600}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-top"
                      />
                    </picture>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-300 text-2xl font-bold font-mono mb-3">
                        MK
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {personal.name} {personal.surname}
                      </div>
                      <div className="text-xs text-cyan-600 dark:text-cyan-400 font-mono mt-1">
                        {personal.role}
                      </div>
                    </div>
                  )}

                  {/* Scrim overlay at bottom for readability */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

                  {/* Bottom info overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-sm border border-white/10 font-mono text-[11px]">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span>Colombo, Sri Lanka</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-sm border border-white/10 font-mono text-[11px] text-violet-300">
                      <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
                      <span>SLIIT '26</span>
                    </span>
                  </div>
                </div>

                {/* Subtitle caption beneath image */}
                <div className="pt-3 px-1 pb-1 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-mono">DevOps & Cloud Engineer</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Available</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Downward scroll hint */}
      <div className="mt-12 hidden md:flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-600 dark:text-cyan-400" />
      </div>
    </section>
  );
};
