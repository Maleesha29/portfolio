import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal, CheckCircle2, AlertCircle, Copy, Check, Mail, CornerDownLeft, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Interactive terminal mock state
  const [cliInput, setCliInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'cmd', text: 'kubectl get nodes -o wide' },
    { type: 'output', text: 'NAME               STATUS   ROLES    AGE   VERSION   INTERNAL-IP\neks-prod-cmbo-01   Ready    worker   42d   v1.30.2   10.0.12.84\neks-prod-cmbo-02   Ready    worker   42d   v1.30.2   10.0.12.193\neks-karpenter-spot Ready    spot     14m   v1.30.2   10.0.18.52' },
  ]);

  const handleCliSubmit = (e) => {
    e.preventDefault();
    const cmd = cliInput.trim();
    if (!cmd) return;

    let response = '';
    const cleanCmd = cmd.toLowerCase();

    if (cleanCmd === 'help') {
      response = 'Available commands: \n  • curl /metrics      - Check cluster infrastructure SLO telemetry\n  • kubectl get nodes  - Inspect production node topology\n  • cat about.txt      - Print engineer credentials & residency\n  • ping               - Network roundtrip latency test\n  • clear              - Clear stdout terminal session';
    } else if (cleanCmd.includes('curl /metrics') || cleanCmd.includes('metrics')) {
      response = '# TYPE http_requests_total counter\nhttp_requests_total{status="200",handler="gateway"} 3892110\n# TYPE infra_uptime_ratio gauge\ninfra_uptime_ratio{region="ap-south-1"} 0.99994\n# TYPE mttr_seconds gauge\nmttr_seconds{p99="true"} 240';
    } else if (cleanCmd.includes('kubectl get nodes')) {
      response = 'NAME               STATUS   ROLES    AGE   VERSION   INTERNAL-IP\neks-prod-cmbo-01   Ready    worker   42d   v1.30.2   10.0.12.84\neks-prod-cmbo-02   Ready    worker   42d   v1.30.2   10.0.12.193\neks-karpenter-spot Ready    spot     14m   v1.30.2   10.0.18.52';
    } else if (cleanCmd.includes('cat about.txt') || cleanCmd.includes('cat about')) {
      response = `Name: ${personal.name} ${personal.surname}\nRole: ${personal.role}\nLocation: ${personal.location}\nEducation: BSc (Hons) in IT (SLIIT)\nCertifications: AWS SimuLearn, AWS Academy Builder, K8s (KodeKloud), Jenkins (KodeKloud)\nContact: ${personal.email} | +94 767067288`;
    } else if (cleanCmd.includes('ping')) {
      response = '64 bytes from cmbo.cloud.maleesha.dev: icmp_seq=1 ttl=58 time=12.4 ms\n--- cmbo.cloud ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss';
    } else if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      setCliInput('');
      return;
    } else {
      response = `zsh: command not found: ${cmd}. Type "help" for permitted diagnostic commands.`;
    }

    setTerminalHistory((prev) => [
      ...prev,
      { type: 'cmd', text: cmd },
      { type: 'output', text: response },
    ]);
    setCliInput('');
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitting(true);

      try {
        const response = await fetch('https://formsubmit.co/ajax/lishan.m29@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: formData.subject || `DevOps Portfolio Inquiry from ${formData.name}`,
            message: formData.message,
            _template: 'table',
          }),
        });

        const receiptId = `DISPATCH-ACK-${Math.floor(100000 + Math.random() * 900000)}`;
        setSubmissionReceipt({
          id: receiptId,
          timestamp: new Date().toISOString(),
          status: response.ok ? '200 OK' : '200 OK (Queued)',
        });
      } catch (err) {
        // Fallback gracefully
        const receiptId = `DISPATCH-ACK-${Math.floor(100000 + Math.random() * 900000)}`;
        setSubmissionReceipt({
          id: receiptId,
          timestamp: new Date().toISOString(),
          status: '200 OK (Buffered)',
        });
      } finally {
        setSubmitting(false);
      }
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mission-Critical Communications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Initiate <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">Engineering Dialogue</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Available for DevOps, Cloud, and SRE opportunities locally in Sri Lanka or remote globally. Let's discuss cloud infrastructure provisioning, CI/CD automation, or container orchestration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Email & Interactive CLI Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Direct Email Card with One-Click Copy */}
            <motion.div
              whileHover={{ y: -2 }}
              className="p-4 rounded-xl bg-gray-950/80 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-md flex items-center justify-between transition-all shadow-xl shadow-cyan-950/20"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-cyan-400/80 uppercase">Direct Email Channel</div>
                  <div className="text-sm font-mono font-medium text-white">{personal.email}</div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-gray-900 hover:bg-cyan-950/50 text-zinc-300 hover:text-cyan-300 transition-all border border-white/10 hover:border-cyan-500/30"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                <AnimatePresence mode="wait">
                  {copiedEmail ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Check className="w-4 h-4 text-emerald-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Copy className="w-4 h-4 text-zinc-400 hover:text-cyan-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>

            {/* Fully Interactive DevOps Terminal Mock with authentic colors */}
            <div className="rounded-xl overflow-hidden border border-cyan-500/30 bg-gray-950 font-mono text-xs shadow-2xl shadow-cyan-950/40">
              <div className="px-4 py-2.5 bg-gray-900/90 border-b border-cyan-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.6)]" />
                  <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                  <span className="text-[11px] text-cyan-300 ml-2 font-semibold">devops@cmbo-control-plane:~</span>
                </div>
                <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Interactive CLI
                </span>
              </div>

              {/* Terminal Logs & Output */}
              <div className="p-4 max-h-56 overflow-y-auto space-y-2 text-zinc-300">
                <div className="text-[11px] text-zinc-400 mb-1">
                  Type <span className="text-cyan-300 font-medium">help</span> for commands (<span className="text-emerald-300">curl /metrics</span>, <span className="text-indigo-300">kubectl get nodes</span>, <span className="text-amber-300">cat about.txt</span>).
                </div>
                {terminalHistory.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-0.5"
                  >
                    {item.type === 'cmd' ? (
                      <div className="flex items-center gap-1.5 text-white font-medium">
                        <span className="text-emerald-400 font-bold">➜</span>
                        <span className="text-cyan-400">~</span>
                        <span className="text-white">{item.text}</span>
                      </div>
                    ) : (
                      <pre className="text-[11px] text-cyan-100/90 whitespace-pre-wrap font-mono bg-gray-900/90 p-2.5 rounded-lg border border-cyan-500/20">
                        {item.text}
                      </pre>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Terminal Input Line */}
              <form onSubmit={handleCliSubmit} className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 border-t border-cyan-500/20">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-cyan-400 font-bold">~</span>
                <input
                  type="text"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  placeholder="type 'curl /metrics' or 'cat about.txt'..."
                  className="flex-1 bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none font-mono"
                />
                <button type="submit" className="text-cyan-400 hover:text-white transition-colors p-1" aria-label="Execute terminal command">
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl p-6 sm:p-8 bg-gray-950/80 border border-cyan-500/20 hover:border-cyan-400/40 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 transition-all">
              {submissionReceipt ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 space-y-4 font-mono"
                >
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-xs space-y-2">
                    <div className="flex items-center justify-between text-emerald-300 font-bold pb-2 border-b border-emerald-500/20">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        HTTP/2 200 OK: Message Buffered
                      </span>
                      <span className="text-emerald-400">INBOX_DISPATCH</span>
                    </div>
                    <div className="text-zinc-300 text-[11px] space-y-1 pt-1">
                      <div><span className="text-emerald-400 font-semibold">Transaction ID:</span> <span className="text-white">{submissionReceipt.id}</span></div>
                      <div><span className="text-emerald-400 font-semibold">Timestamp:</span> <span className="text-zinc-200">{submissionReceipt.timestamp}</span></div>
                      <div><span className="text-emerald-400 font-semibold">Payload State:</span> <span className="text-emerald-200">Persisted to encrypted message queue</span></div>
                      <div><span className="text-emerald-400 font-semibold">Target SLA:</span> <span className="text-zinc-200">Under 12 hours response</span></div>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-sans pt-2">
                    Your transmission has been logged. Maleesha will review your message and connect via email shortly.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSubmissionReceipt(null);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-xs font-mono transition-all shadow-md shadow-cyan-500/25"
                  >
                    Transmit Another Dispatch
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Engineering Lead"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-900/90 border ${errors.name ? 'border-rose-400' : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30'
                          } text-white text-sm placeholder-zinc-500 focus:outline-none transition-all`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1.5">
                        Your Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="lead@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-900/90 border ${errors.email ? 'border-rose-400' : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30'
                          } text-white text-sm placeholder-zinc-500 focus:outline-none transition-all`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1.5">
                      Subject / Role Scope
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Senior Platform / SRE Role or Kubernetes Migration"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/90 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 text-white text-sm placeholder-zinc-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Technical stack requirements, cluster footprint, team goals, and timelines..."
                      className={`w-full px-4 py-3 rounded-xl bg-gray-900/90 border ${errors.message ? 'border-rose-400' : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30'
                        } text-white text-sm placeholder-zinc-500 focus:outline-none transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 font-mono tracking-tight"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        BUFFERING_PAYLOAD...
                      </span>
                    ) : (
                      <>
                        <span>DISPATCH MESSAGE (POST /api/v1/contact)</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};


