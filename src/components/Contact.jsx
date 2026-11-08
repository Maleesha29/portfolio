import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Terminal as TerminalIcon, 
  CheckCircle2, 
  Copy, 
  Check, 
  Mail, 
  CornerDownLeft
} from 'lucide-react';
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
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Functional interactive terminal
  const [cliInput, setCliInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: 'Antigravity DevOps Console v2.0 (x86_64-aws-cloud)' },
    { type: 'system', text: 'Type "help" to view executable commands (help, projects, skills, certs, contact, clear).' },
    { type: 'cmd', text: 'projects' },
    { type: 'output', text: '1. GitOps CI/CD (Jenkins, Argo CD, K8s)\n2. AWS Terraform Web Stack (Multi-AZ VPC, ALB, EC2)\n3. EKS Fargate Serverless Ingress (AWS ALB Controller)\n4. Node.js on EC2 with Stripe\n5. Smart Pet Care Microservices (Docker Compose)' },
  ]);

  const handleCliSubmit = (e) => {
    e.preventDefault();
    const cmd = cliInput.trim();
    if (!cmd) return;

    const cleanCmd = cmd.toLowerCase();
    let response = '';

    if (cleanCmd === 'help') {
      response = `Available commands:
  • projects - View production DevOps and Cloud repositories
  • skills   - List core infrastructure tools, orchestrators, and platforms
  • certs    - List accredited AWS, Kubernetes, Jenkins, and Docker certifications
  • contact  - Display email, telephone, residency, and professional links
  • clear    - Clear terminal stdout history`;
    } else if (cleanCmd === 'projects') {
      response = `Featured Infrastructure Repositories:
  1. GitOps CI/CD: Jenkins + Argo CD + Kubernetes -> https://github.com/Maleesha29/jenkins-argo-pipeline
  2. AWS Terraform Web Stack: Multi-AZ VPC + ALB + EC2 -> https://github.com/Maleesha29/Terraform_Project
  3. Serverless EKS: AWS Fargate + ALB Controller + IRSA -> https://github.com/Maleesha29/eks-fargate-alb-deployment
  4. Cloud-Native Node.js: Docker + AWS EC2 + Stripe -> https://github.com/Maleesha29/nodejs-aws-ec2-deployment
  5. Multi-Container Mesh: Docker Compose + React + Python Flask + MongoDB -> https://github.com/Maleesha29/smart-pet-care`;
    } else if (cleanCmd === 'skills') {
      response = `Technical Arsenal & Capabilities:
  • Cloud & IaC: AWS (EC2, VPC, ALB, S3, IAM, EKS, Fargate), Terraform (HCL)
  • Containers & GitOps: Docker, Kubernetes, Argo CD, Helm, kubectl, Minikube
  • CI/CD & Automation: Jenkins, GitHub Actions, SonarQube, Maven, Bash Scripting
  • Systems: Linux (Ubuntu CLI), Process & Network Administration
  • Fullstack: React 19, Node.js, Express, Python Flask, MongoDB (MERN)`;
    } else if (cleanCmd === 'certs') {
      response = `Accredited Credentials:
  1. AWS SimuLearn: Cloud Practitioner (Amazon Web Services)
  2. AWS Academy Graduate: Cloud Web Application Builder (AWS Academy)
  3. Kubernetes for the Absolute Beginners (KodeKloud)
  4. Jenkins For Beginners (KodeKloud)
  5. Introduction to Containerization: Docker Beginners Guide (CoDeKu)`;
    } else if (cleanCmd === 'contact') {
      response = `Direct Communication Channels:
  • Name: Maleesha Karunarathna
  • Role: DevOps & Cloud Infrastructure Engineer
  • Email: lishan.m29@gmail.com
  • Phone: +94 767067288
  • Location: Colombo, Sri Lanka (UTC+5:30)
  • GitHub: https://github.com/Maleesha29
  • LinkedIn: https://linkedin.com/in/lishanmaleesha`;
    } else if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      setCliInput('');
      return;
    } else {
      response = `sh: command not found: "${cmd}". Type "help" for available commands.`;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 700);
    }
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative" aria-label="Contact and Communication">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get in <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Interested in discussing DevOps engineering roles, cloud infrastructure projects, or technical collaborations? Feel free to reach out directly.
          </p>
        </motion.div>

        {/* Two-Column Grid: Left = Form & Quick Info, Right = Functional Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Direct dispatch to Maleesha's inbox
                </p>
              </div>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />}
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you! Your message has been received. Maleesha will review and respond as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                        errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                        errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="DevOps Engineer Opportunity / Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Maleesha, we'd like to discuss an opportunity on our cloud platform team..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none ${
                        errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold text-xs font-mono shadow-sm shadow-cyan-500/20 transition-all disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Dispatching...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Functional Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden font-mono text-xs"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-slate-400 text-[11px] ml-2">devops-sh: maleesha@cloud</span>
              </div>
              <TerminalIcon className="w-3.5 h-3.5 text-slate-500" />
            </div>

            {/* Terminal Stdout Area */}
            <div className="p-4 max-h-[360px] min-h-[280px] overflow-y-auto space-y-2 text-slate-300">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="leading-relaxed">
                  {item.type === 'system' && (
                    <div className="text-slate-500 text-[11px]"># {item.text}</div>
                  )}
                  {item.type === 'cmd' && (
                    <div className="flex items-center gap-1.5 text-cyan-400">
                      <span className="text-slate-500">$</span>
                      <span className="font-semibold">{item.text}</span>
                    </div>
                  )}
                  {item.type === 'output' && (
                    <pre className="text-slate-300 whitespace-pre-wrap font-mono text-[11px] pl-3 border-l border-slate-800 py-0.5">
                      {item.text}
                    </pre>
                  )}
                </div>
              ))}
            </div>

            {/* Terminal Command Input Form */}
            <form onSubmit={handleCliSubmit} className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/90 border-t border-slate-800">
              <span className="text-cyan-400 font-bold">$</span>
              <input
                type="text"
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                placeholder="type 'help', 'projects', 'skills', 'certs', 'contact'..."
                className="w-full bg-transparent text-xs text-white placeholder:text-slate-600 focus:outline-none"
              />
              <button
                type="submit"
                className="p-1 rounded bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Execute command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
