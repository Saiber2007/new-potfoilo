import React, { useState, useEffect } from 'react';
import { Shield, Lock } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [utcTime, setUtcTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#05070c] border-t border-slate-800/80 py-12 relative z-10 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#0d131f] border border-[#00ff9d]/30">
              <Shield className="w-5 h-5 text-[#00ff9d]" />
            </div>
            <div>
              <span className="font-heading font-bold text-white text-base block tracking-wide">
                DIXIT DABHI
              </span>
              <span className="text-[11px] text-emerald-400">
                CSE CYBERSECURITY PORTFOLIO
              </span>
            </div>
          </div>

          {/* Live UTC Cyber Clock */}
          <div className="px-3 py-1.5 rounded-lg bg-[#0a0e17] border border-slate-800 text-[11px] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
            <span>SYS_TIME: <span className="text-white font-bold">{utcTime || 'UTC_ACTIVE'}</span></span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#0c111c] border border-slate-800 hover:border-[#00ff9d]/40 text-slate-400 hover:text-[#00ff9d] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#0c111c] border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <p>
            © 2026 <span className="text-white font-bold">Dixit Dabhi</span>. All rights reserved.
          </p>

          <p className="text-slate-400 flex items-center justify-center gap-1.5">
            Built with curiosity, code & <span className="text-[#00ff9d] font-semibold">cybersecurity</span>.
          </p>

          <div className="flex items-center gap-2 text-slate-400">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>SECURITY_LEVEL: HIGH</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
