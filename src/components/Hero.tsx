import React from 'react';
import { ArrowRight, Download, Mail, Terminal, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff9d]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0d1624] border border-[#00ff9d]/30 text-xs font-mono shadow-[0_0_15px_rgba(0,255,157,0.1)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff9d]"></span>
              </span>
              <span className="text-emerald-300 font-medium">
                {PORTFOLIO_DATA.personal.status}
              </span>
            </div>

            {/* Main Title & Name */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-cyan-400 tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#00ff9d]" />
                COMPUTER SCIENCE & ENGINEERING (CYBERSECURITY)
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none font-heading">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-emerald-400 font-mono tracking-tight pt-1">
                {PORTFOLIO_DATA.personal.headline}
              </p>
            </div>

            {/* Short Intro Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              "{PORTFOLIO_DATA.personal.bioShort}"
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3.5 items-center">
              {/* Primary: View My Projects */}
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)] hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Primary: Download Resume */}
              <button
                onClick={() => onNavigate('resume')}
                className="px-6 py-3.5 rounded-xl bg-[#0e1626] hover:bg-[#131d33] border border-cyan-500/40 text-cyan-300 hover:text-white font-semibold text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              {/* Secondary: Contact Me */}
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Highlight Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80 max-w-xl text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ff9d]" />
                <span>Ethical Hacking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>OSINT & Forensics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Python & Linux</span>
              </div>
            </div>

          </div>

          {/* Right Column: Futuristic Cyber Terminal Visual */}
          <div className="lg:col-span-5 relative">
            <InteractiveTerminal />
          </div>

        </div>
      </div>
    </section>
  );
};
