import React, { useState } from 'react';
import { Mail, Send, Terminal, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLog, setSubmittedLog] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmittedLog('ENCRYPTING_PAYLOAD...');

    setTimeout(() => {
      setSubmittedLog('DISPATCHING_SECURE_PACKET...');
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmittedLog('STATUS: 200 OK :: MESSAGE_SENT_SUCCESSFULLY');
        
        // Trigger celebratory sci-fi confetti burst
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00ff9d', '#00f0ff', '#3b82f6']
        });

        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 800);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1624] border border-[#00ff9d]/30 text-xs font-mono text-[#00ff9d]">
            <Mail className="w-3.5 h-3.5" />
            <span>08 // INITIATE TRANSMISSION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-cyan-400">Connect</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans">
            Have an opportunity, technical question, or project inquiry? Send a secure message below or reach out via official platforms.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff9d] to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0b101b]/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-[#00ff9d]" />
                <span className="font-mono text-xs text-[#00ff9d]">COMMS_ENDPOINT: ACTIVE</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px]">NAME & ROLE</span>
                  <span className="text-white font-bold text-sm font-sans">{PORTFOLIO_DATA.personal.name}</span>
                  <span className="text-emerald-400 block text-[11px]">CSE Student (Cybersecurity)</span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px]">STATUS</span>
                  <span className="text-[#00ff9d] font-bold">🟢 Open for Internship & Project Opps</span>
                </div>
              </div>

              {/* Direct Platform Buttons */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                <a
                  href={PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0e1626] border border-slate-700 hover:border-[#00ff9d]/40 text-slate-300 hover:text-white transition-all text-xs font-mono"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#00ff9d]" /> GitHub Code Repos
                  </span>
                  <span className="text-slate-400">@Saiber2007</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0e1626] border border-slate-700 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-mono"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn Profile
                  </span>
                  <span className="text-slate-400">Dixit Dabhi</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 text-xs font-mono text-cyan-300 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-400" /> PRIVACY GUARANTEE
              </div>
              <p className="text-slate-400 text-[11px]">No unsolicited data collection. Communication remains private.</p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0b101b]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300 block">
                    YOUR NAME <span className="text-[#00ff9d]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Recruiter"
                    className="w-full bg-[#07090e] border border-slate-700 focus:border-[#00ff9d] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-400 focus:outline-none font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300 block">
                    EMAIL ADDRESS <span className="text-[#00ff9d]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full bg-[#07090e] border border-slate-700 focus:border-[#00ff9d] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-400 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-slate-300 block">
                  SUBJECT
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship / Cybersecurity Project Inquiry"
                  className="w-full bg-[#07090e] border border-slate-700 focus:border-[#00ff9d] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-400 focus:outline-none font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-300 block">
                  MESSAGE PACKET <span className="text-[#00ff9d]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Dixit, we reviewed your cybersecurity portfolio..."
                  className="w-full bg-[#07090e] border border-slate-700 focus:border-[#00ff9d] rounded-xl p-3.5 text-xs text-white placeholder:text-slate-400 focus:outline-none font-mono resize-none"
                />
              </div>

              {submittedLog && (
                <div className="p-3 rounded-xl bg-[#07090e] border border-[#00ff9d]/40 text-xs font-mono text-[#00ff9d] flex items-center gap-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff9d]" />
                  <span>{submittedLog}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs font-mono transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)] hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
