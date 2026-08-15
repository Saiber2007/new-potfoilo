import React from 'react';
import { GraduationCap, Building2, Calendar, BookOpen, ShieldAlert, CheckCircle2, UserCheck } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { sounds } from '../utils/audio';

export const About: React.FC = () => {
  const { profile } = usePortfolio();

  const cards = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: profile.education.degree,
      accent: 'border-cyber-cyan text-cyber-cyan',
      bg: 'bg-cyber-cyan/5'
    },
    {
      icon: Building2,
      label: 'University',
      value: `${profile.education.university}, ${profile.education.location}`,
      accent: 'border-cyber-green text-cyber-green',
      bg: 'bg-cyber-green/5'
    },
    {
      icon: Calendar,
      label: 'Academic Year',
      value: profile.education.year,
      accent: 'border-blue-400 text-blue-400',
      bg: 'bg-blue-400/5'
    },
    {
      icon: BookOpen,
      label: 'Current Semester',
      value: profile.education.semester,
      accent: 'border-purple-400 text-purple-400',
      bg: 'bg-purple-400/5'
    },
    {
      icon: ShieldAlert,
      label: 'Core Focus',
      value: profile.education.focus,
      accent: 'border-cyber-cyan text-cyber-cyan',
      bg: 'bg-cyber-cyan/5'
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>PERSONAL IDENTITY & ACADEMIC DOSSIER</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            About <span className="text-cyber-cyan">Dixit Dabhi</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-green rounded-full mt-3" />
        </div>

        {/* Bio Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-cyber-card/90 border border-cyber-border rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-cyber-card relative overflow-hidden group hover:border-cyber-cyan/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/5 rounded-full blur-2xl pointer-events-none" />
            <h3 className="font-heading font-bold text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-cyber-green">&gt;</span> Academic Profile & Security Focus
            </h3>
            <p className="text-gray-300 text-base leading-relaxed font-sans">
              {profile.aboutText}
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-cyber-border/60">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyber-green shrink-0" />
                <span>Ethical Hacking & Reconnaissance</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0" />
                <span>OSINT & Digital Forensics</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Python & Linux Automation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Detail Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => sounds.playHover()}
                className={`interactive-card p-6 rounded-2xl bg-cyber-card/80 border border-cyber-border/80 ${card.bg} backdrop-blur-xl shadow-cyber-card transition-all duration-300 hover:border-cyber-cyan hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyber-muted uppercase tracking-wider">
                    {card.label}
                  </span>
                  <div className={`p-2.5 rounded-xl bg-cyber-dark border ${card.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="font-heading font-bold text-lg text-white">
                  {card.value}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
