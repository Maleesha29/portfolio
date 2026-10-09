import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  MapPin, 
  Clock, 
  Layers, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  User,
  Terminal,
  Award,
  ArrowUpRight,
  Cloud,
  Lock,
  Boxes,
  Activity,
  Download,
  GitBranch,
  Flame,
  Shield,
  Zap,
  Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const BentoGrid = () => {
  const { personal, bentoItems } = portfolioData;
  const [currentTime, setCurrentTime] = useState('');
  const [imgError, setImgError] = useState(false);

  // Real-time clock for Colombo, Sri Lanka (Asia/Colombo / UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const pillarStyles = [
    {
      borderColor: 'hover:border-cyan-400/50',
      iconColor: 'text-cyan-400',
      bgGlow: 'hover:bg-cyan-950/20',
      dotColor: 'bg-cyan-400',
    },
    {
      borderColor: 'hover:border-violet-400/50',
      iconColor: 'text-violet-400',
      bgGlow: 'hover:bg-violet-950/20',
      dotColor: 'bg-violet-400',
    },
    {
      borderColor: 'hover:border-amber-400/50',
      iconColor: 'text-amber-400',
      bgGlow: 'hover:bg-amber-950/20',
      dotColor: 'bg-amber-400',
    },
    {
      borderColor: 'hover:border-emerald-400/50',
      iconColor: 'text-emerald-400',
      bgGlow: 'hover:bg-emerald-950/20',
      dotColor: 'bg-emerald-400',
    },
  ];

  const categoryThemes = [
    {
      color: 'sky',
      icon: Cloud,
      borderHover: 'hover:border-cyan-400/50',
      borderDefault: 'border-cyan-500/20',
      glow: 'from-cyan-500/15 via-blue-500/10 to-transparent',
      badgeBg: 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30',
      tagDot: 'bg-cyan-400',
      tagHover: 'hover:!border-cyan-400/60 hover:!text-cyan-200 hover:!bg-cyan-950/40',
      iconBoxBg: 'bg-cyan-950/60 border-cyan-500/30 text-cyan-400',
    },
    {
      color: 'violet',
      icon: GitBranch,
      borderHover: 'hover:border-violet-400/50',
      borderDefault: 'border-violet-500/20',
      glow: 'from-violet-500/15 via-purple-500/10 to-transparent',
      badgeBg: 'bg-violet-950/40 text-violet-300 border-violet-500/30',
      tagDot: 'bg-violet-400',
      tagHover: 'hover:!border-violet-400/60 hover:!text-violet-200 hover:!bg-violet-950/40',
      iconBoxBg: 'bg-violet-950/60 border-violet-500/30 text-violet-400',
    },
    {
      color: 'amber',
      icon: Terminal,
      borderHover: 'hover:border-amber-400/50',
      borderDefault: 'border-amber-500/20',
      glow: 'from-amber-500/15 via-orange-500/10 to-transparent',
      badgeBg: 'bg-amber-950/40 text-amber-300 border-amber-500/30',
      tagDot: 'bg-amber-400',
      tagHover: 'hover:!border-amber-400/60 hover:!text-amber-200 hover:!bg-amber-950/40',
      iconBoxBg: 'bg-amber-950/60 border-amber-500/30 text-amber-400',
    },
    {
      color: 'emerald',
      icon: Activity,
      borderHover: 'hover:border-emerald-400/50',
      borderDefault: 'border-emerald-500/20',
      glow: 'from-emerald-500/15 via-teal-500/10 to-transparent',
      badgeBg: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30',
      tagDot: 'bg-emerald-400',
      tagHover: 'hover:!border-emerald-400/60 hover:!text-emerald-200 hover:!bg-emerald-950/40',
      iconBoxBg: 'bg-emerald-950/60 border-emerald-500/30 text-emerald-400',
    },
    {
      color: 'rose',
      icon: Cpu,
      borderHover: 'hover:border-rose-400/50',
      borderDefault: 'border-rose-500/20',
      glow: 'from-rose-500/15 via-pink-500/10 to-transparent',
      badgeBg: 'bg-rose-950/40 text-rose-300 border-rose-500/30',
      tagDot: 'bg-rose-400',
      tagHover: 'hover:!border-rose-400/60 hover:!text-rose-200 hover:!bg-rose-950/40',
      iconBoxBg: 'bg-rose-950/60 border-rose-500/30 text-rose-400',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Editorial Hero Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-gray-950/85 border border-cyan-500/20 backdrop-blur-2xl mb-8 relative overflow-hidden shadow-2xl shadow-black group"
        >
          {/* Vibrant Ambient Radial Glows with pulse */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-cyan-500/15 via-indigo-600/10 to-transparent blur-[130px] pointer-events-none rounded-full animate-pulse-glow" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-violet-600/20 via-pink-600/10 to-transparent blur-[110px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Polished Photo Frame with Luminous Gradient Ring */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-sm sm:max-w-md group/photo">
                
                {/* Multi-color Glow border ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-pink-500 rounded-3xl blur-md opacity-50 group-hover/photo:opacity-100 transition duration-700" />
                
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-cyan-500/30 bg-black shadow-2xl transition-transform duration-500 group-hover/photo:scale-[1.01]">
                  {!imgError ? (
                    <img
                      src={personal.avatar || "/profile.jpg"}
                      alt={`${personal.name} ${personal.surname}`}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-center contrast-105 transition-all duration-700 group-hover/photo:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-gradient-to-b from-gray-900 via-gray-950 to-black flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 text-3xl font-bold font-mono mb-4 shadow-inner animate-float-slow">
                        MK
                      </div>
                      <div className="text-sm font-medium text-white mb-1">{personal.name} {personal.surname}</div>
                      <div className="text-xs text-cyan-400 font-mono">{personal.role}</div>
                      <div className="mt-4 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-[11px] text-cyan-300 font-mono">
                        public/profile.jpg
                      </div>
                    </div>
                  )}

                  {/* Gradient bottom scrim */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

                  {/* Dynamic Status Badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-950/90 backdrop-blur-md border border-cyan-500/30 text-xs font-mono text-cyan-200 shadow-lg"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span>Colombo, Sri Lanka</span>
                    </motion.div>

                    <span className="text-[11px] font-mono text-purple-200 bg-purple-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-purple-500/30">
                      SLIIT IT '26
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Editorial Typography & Clean Bio Hierarchy */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              
              {/* Badge Pills with colorful accents */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-200 text-xs font-mono hover:bg-indigo-900/50 transition-colors">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personal.role}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-200 text-xs font-mono hover:bg-cyan-900/50 transition-colors">
                  <Cloud className="w-3.5 h-3.5 text-cyan-400" />
                  <span>AWS & KodeKloud Certified</span>
                </span>
              </motion.div>

              {/* Expressive Editorial Headline with Multi-Stop Gradient */}
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Hello!<br />
                I'm <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">{personal.name} {personal.surname}.</span>
              </motion.h1>

              {/* Narrative Content */}
              <motion.div variants={itemVariants} className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  I'm an <strong className="text-cyan-300 font-semibold">{personal.role}</strong> and BSc (Hons) in Information Technology graduate from <strong className="text-indigo-300 font-medium">SLIIT</strong> based in Colombo, Sri Lanka. I specialize in designing and provisioning cloud environments using <strong className="text-violet-300 font-medium">AWS, Terraform (IaC), Docker, Kubernetes, and Jenkins CI/CD pipelines</strong>.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  With hands-on expertise spanning fullstack development with the MERN stack, data risk analytics, and modern DevOps practices, I focus on building scalable, secure, and automated cloud-native systems.
                </p>
              </motion.div>

              {/* 4 Key Pillars Grid with Color Coded Accents */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/10">
                {(personal.aboutMe?.highlights || [
                  "AWS Cloud Infrastructure & Terraform (IaC)",
                  "Automated CI/CD Pipelines (Jenkins, Maven, SonarQube)",
                  "Container Orchestration (Docker, Kubernetes, Helm, EKS)",
                  "Fullstack Web & Linux Automation (MERN Stack, Bash)"
                ]).map((highlight, idx) => {
                  const style = pillarStyles[idx % pillarStyles.length];
                  return (
                    <motion.div 
                      key={idx} 
                      whileHover={{ y: -2, x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className={`flex items-start gap-2.5 p-3 rounded-xl bg-gray-900/70 border border-white/10 ${style.borderColor} ${style.bgGlow} transition-all text-xs sm:text-sm text-zinc-200 shadow-sm`}
                    >
                      <CheckCircle2 className={`w-4 h-4 ${style.iconColor} shrink-0 mt-0.5`} />
                      <span className="font-medium leading-snug">{highlight}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Primary Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-6 mt-2">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
                >
                  <span>Explore DevOps Projects</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>

                <motion.a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  download="Maleesha_Karunarathna_DevOps_Resume.pdf"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900/80 hover:bg-cyan-950/30 border border-cyan-500/20 text-sm font-medium text-cyan-200 hover:border-cyan-400/50 transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume.pdf</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Cloud Platform & Infrastructure Arsenal - Modern Domain Grid */}
        <div className="mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
              <Boxes className="w-3.5 h-3.5 text-cyan-400" />
              <span>Production Stack & Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Cloud Platform & Infrastructure <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Arsenal</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Battle-tested tools, orchestrators, and declarative frameworks leveraged across enterprise environments.
            </p>
          </motion.div>

          {/* Categorized Interactive Domain Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bentoItems.techCategories.map((cat, idx) => {
              const theme = categoryThemes[idx % categoryThemes.length];
              const IconComponent = theme.icon;

              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className={`rounded-2xl p-6 bg-gray-950/80 border ${theme.borderDefault} ${theme.borderHover} backdrop-blur-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group shadow-xl`}
                >
                  <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${theme.glow} blur-[50px] pointer-events-none rounded-full group-hover:scale-150 transition-transform duration-700`} />

                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl ${theme.iconBoxBg} shadow-inner transition-colors`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white transition-colors">
                          {cat.category}
                        </h4>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {cat.skills.length} Core Technologies
                        </span>
                      </div>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05, y: -1 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-900/80 border border-white/10 text-xs font-mono text-zinc-300 group-hover:border-white/20 ${theme.tagHover} transition-all cursor-default shadow-sm`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${theme.tagDot} group-hover:shadow-[0_0_6px_currentColor]`} />
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Legacy Tooling pill if present */}
                  {cat.legacyMigrationSkills && (
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span className="text-zinc-500">Legacy Migration:</span>
                      <span className="text-amber-300/90">{cat.legacyMigrationSkills.join(', ')}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};



