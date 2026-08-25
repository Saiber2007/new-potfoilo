import React from 'react';
import { GraduationCap, ShieldCheck, FolderCode, Award, UserCheck, Terminal, Cpu, Target } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#00ff9d]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'FolderCode': return <FolderCode className="w-6 h-6 text-emerald-400" />;
      case 'Award': default: return <Award className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1624] border border-[#00ff9d]/30 text-xs font-mono text-[#00ff9d]">
            <UserCheck className="w-3.5 h-3.5" />
            <span>01 // BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff9d] to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-[#0b101b]/80 border border-[#00ff9d]/20 rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 p-4 text-slate-800 pointer-events-none">
              <Terminal className="w-32 h-32 opacity-10" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-[#00ff9d]" />
                <span className="font-mono text-xs text-slate-400">profile_summary.md</span>
              </div>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-sans">
                {PORTFOLIO_DATA.personal.bioLong}
              </p>

              {/* Core Interests Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#0e1626] border border-slate-800 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-1">
                    <Target className="w-4 h-4" /> ETHICAL HACKING
                  </div>
                  <p className="text-xs text-slate-400">Exploring reconnaissance, vulnerability identification, and security fundamentals.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0e1626] border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                    <Cpu className="w-4 h-4" /> OSINT & FORENSICS
                  </div>
                  <p className="text-xs text-slate-400">Public intelligence gathering, log inspection, and digital investigation workflows.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>SPECIALIZATION: CSE CYBERSECURITY</span>
              <span className="text-[#00ff9d]">STATUS: ACTIVE STUDENT</span>
            </div>
          </div>

          {/* Key Animated Stats Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {PORTFOLIO_DATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#0b101b]/80 border border-slate-800 hover:border-[#00ff9d]/40 rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,157,0.1)] group flex items-center gap-4"
              >
                <div className="p-3.5 rounded-xl bg-[#0f172a] border border-slate-700/80 group-hover:border-[#00ff9d]/50 group-hover:scale-105 transition-all">
                  {getIcon(stat.icon)}
                </div>

                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-heading group-hover:text-[#00ff9d] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
