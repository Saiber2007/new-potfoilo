import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1624] border border-[#00ff9d]/30 text-xs font-mono text-[#00ff9d]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>05 // TIMELINE & ACTIVITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-cyan-400">Activities</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
            Chronological view of technical involvement, IEEE chapter activities, creative committees, and academic project milestones.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff9d] to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00ff9d] via-cyan-500 to-blue-500 -translate-x-1/2 opacity-40 shadow-[0_0_10px_rgba(0,255,157,0.5)]" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-[#07090e] border-2 border-[#00ff9d] shadow-[0_0_15px_rgba(0,255,157,0.6)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d] animate-pulse" />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${isEven ? 'sm:pr-0' : 'sm:pl-0'}`}>
                    <div className="bg-[#0b101b]/90 border border-slate-800 hover:border-[#00ff9d]/40 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(0,255,157,0.1)] group">
                      
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#0e1626] text-cyan-400 border border-cyan-500/30">
                          {exp.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-400 font-mono text-xs">
                          <Calendar className="w-3.5 h-3.5 text-[#00ff9d]" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#00ff9d] transition-colors">
                        {exp.role}
                      </h3>

                      <div className="text-xs font-semibold text-emerald-400 font-mono mb-3">
                        {exp.organization}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements list */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                            <ChevronRight className="w-3.5 h-3.5 text-[#00ff9d] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
