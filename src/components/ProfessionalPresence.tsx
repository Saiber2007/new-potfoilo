import React from 'react';
import { ExternalLink, Globe, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ProfessionalPresence: React.FC = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1624] border border-[#00ff9d]/30 text-xs font-mono text-[#00ff9d]">
            <Globe className="w-3.5 h-3.5" />
            <span>07 // ONLINE PROFILES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-cyan-400">Presence</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans">
            Connect with me on official developer & professional platforms to review code commits and networking updates.
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* GitHub Card */}
          <div className="bg-[#0b101b]/90 border border-slate-800 hover:border-[#00ff9d]/50 rounded-2xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(0,255,157,0.15)] flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-[#0e1626] border border-slate-700 text-[#00ff9d] group-hover:scale-110 transition-transform">
                  <Github className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
                  @Saiber2007
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white font-heading group-hover:text-[#00ff9d] transition-colors flex items-center gap-2">
                  GitHub Profile
                  <ArrowUpRight className="w-5 h-5 text-[#00ff9d] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                  Explore my open-source repositories, cybersecurity scripts, OSINT toolkits, and technical code experiments.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-300">
                <div className="p-3 rounded-xl bg-[#090d16] border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">MAIN STACK</span>
                  <span className="text-[#00ff9d] font-bold">Python / JS</span>
                </div>
                <div className="p-3 rounded-xl bg-[#090d16] border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">WORKFLOW</span>
                  <span className="text-cyan-400 font-bold">Git / Repos</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6">
              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#00ff9d]/15 hover:bg-[#00ff9d]/25 border border-[#00ff9d]/40 text-[#00ff9d] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,255,157,0.2)]"
              >
                <span>EXPLORE GITHUB CODE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-[#0b101b]/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-[#0e1626] border border-slate-700 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
                  Dixit Dabhi
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  LinkedIn Network
                  <ArrowUpRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                  Connect professionally, follow my academic cybersecurity progress, IEEE activities, and engineering updates.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-300">
                <div className="p-3 rounded-xl bg-[#090d16] border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">NETWORK</span>
                  <span className="text-cyan-400 font-bold">CSE Peers & Pros</span>
                </div>
                <div className="p-3 rounded-xl bg-[#090d16] border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">CHAPTER</span>
                  <span className="text-emerald-400 font-bold">IEEE Student</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6">
              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                <span>CONNECT ON LINKEDIN</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
