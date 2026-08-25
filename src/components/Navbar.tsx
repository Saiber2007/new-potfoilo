import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'experience', label: 'Experience' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-[#00ff9d]/20 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#0d131f] border border-[#00ff9d]/30 group-hover:border-[#00ff9d] transition-all group-hover:shadow-[0_0_15px_rgba(0,255,157,0.4)]">
              <Shield className="w-5 h-5 text-[#00ff9d] group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00ff9d] animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-white tracking-wider group-hover:text-[#00ff9d] transition-colors flex items-center gap-1.5">
                DIXIT DABHI
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                  SEC
                </span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-tight hidden sm:block">
                SYS_STATUS: <span className="text-[#00ff9d]">SECURE</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0d121c]/70 border border-slate-800/80 p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/30 shadow-[0_0_12px_rgba(0,255,157,0.2)] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Social Icons & Status Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0a101d] border border-emerald-500/20 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
              <span className="text-emerald-400 font-medium">OPEN FOR OPPS</span>
            </div>

            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0d121c] border border-slate-800 text-slate-400 hover:text-[#00ff9d] hover:border-[#00ff9d]/40 transition-all hover:shadow-[0_0_10px_rgba(0,255,157,0.2)]"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0d121c] border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#0d121c] border border-[#00ff9d]/30 text-[#00ff9d] hover:bg-[#00ff9d]/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e17]/95 border-b border-[#00ff9d]/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
              SYSTEM ACTIVE
            </span>
            <span>DIXIT DABHI portfolio</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/30 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-around pt-4 border-t border-slate-800/80 mt-3">
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-[#00ff9d] text-xs font-mono"
            >
              <Github className="w-4 h-4 text-[#00ff9d]" /> GitHub
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 text-xs font-mono"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
