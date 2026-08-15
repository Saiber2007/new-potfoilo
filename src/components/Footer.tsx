import React from 'react';
import { Shield, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { GithubIcon, LinkedinIcon } from './Icons';
import { sounds } from '../utils/audio';

export const Footer: React.FC = () => {
  const { profile } = usePortfolio();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-cyber-border bg-cyber-dark/95 text-cyber-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-wide">
                {profile.name}
              </span>
            </div>
            <p className="text-xs font-mono text-cyber-cyan">
              Cybersecurity • Computer Science • Ethical Hacking
            </p>
            <p className="text-xs text-cyber-muted font-sans max-w-sm">
              B.Tech CSE student specializing in cybersecurity engineering, OSINT reconnaissance, digital forensics, and Python security tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs font-mono">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyber-card border border-cyber-border text-gray-300 hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyber-card border border-cyber-border text-gray-300 hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyber-card border border-cyber-border text-gray-300 hover:text-cyber-green hover:border-cyber-green/50 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <div className="md:col-span-3 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              onMouseEnter={() => sounds.playHover()}
              className="p-3 rounded-xl bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all flex items-center gap-2 text-xs font-mono"
            >
              <span>TOP OF HUB</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-cyber-border/50 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-cyber-muted gap-2">
          <div>
            © {currentYear} {profile.fullName}. All security rights reserved.
          </div>
          <div className="flex items-center gap-2 text-cyber-green">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
            <span>SECURE SYSTEM DEPLOYED</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
