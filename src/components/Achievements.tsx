import React from 'react';
import { Award, Users, Mic, Flag, CheckCircle2, ChevronRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { sounds } from '../utils/audio';

export const Achievements: React.FC = () => {
  const { achievements } = usePortfolio();

  const getIcon = (category: string) => {
    switch (category) {
      case 'IEEE':
        return <Users className="w-5 h-5 text-cyber-cyan" />;
      case 'Speaker':
        return <Mic className="w-5 h-5 text-cyber-green" />;
      case 'CTF':
      default:
        return <Flag className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>COMMUNITY LEADERSHIP & ACTIVITIES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Experience & <span className="text-purple-400">Leadership</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-cyber-cyan rounded-full mt-3" />
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {achievements.map((item, idx) => (
            <div
              key={item.id}
              onMouseEnter={() => sounds.playHover()}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Vertical timeline line */}
              {idx !== achievements.length - 1 && (
                <div className="absolute left-[17px] top-10 bottom-0 w-0.5 bg-cyber-border group-hover:bg-cyber-cyan/40 transition-colors" />
              )}

              {/* Node Icon */}
              <div className="absolute left-0 top-1.5 w-9 h-9 rounded-xl bg-cyber-card border border-cyber-border flex items-center justify-center group-hover:border-cyber-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                {getIcon(item.category)}
              </div>

              {/* Card Container */}
              <div className="bg-cyber-card/80 border border-cyber-border/80 rounded-2xl p-6 backdrop-blur-xl shadow-cyber-card transition-all duration-300 group-hover:border-cyber-cyan/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyber-dark border border-cyber-border text-xs font-mono text-cyber-cyan">
                    {item.role}
                  </span>
                  <span className="text-xs font-mono text-cyber-muted">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-cyber-green mb-3">
                  {item.organization}
                </p>

                <p className="text-sm text-gray-300 font-sans leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-cyber-border/50">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono text-gray-300">
                      <ChevronRight className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
