import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Volume2, VolumeX, Menu, X, Command, Lock } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { sounds } from '../utils/audio';

export const Navbar: React.FC = () => {
  const { profile, setIsAdminOpen, setIsCommandPaletteOpen, audioEnabled, setAudioEnabled } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'achievements', 'resume', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
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
    { id: 'achievements', label: 'Experience' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleAudio = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    sounds.setEnabled(next);
    if (next) sounds.playClick();
  };

  const handleNavClick = (id: string) => {
    sounds.playClick();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cyber-dark/90 backdrop-blur-md border-b border-cyber-border/80 shadow-cyber-card py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Callsign */}
          <button
            onClick={() => handleNavClick('home')}
            onMouseEnter={() => sounds.playHover()}
            className="flex items-center gap-3 group text-left"
          >
            <div className="relative w-10 h-10 rounded-lg bg-cyber-card border border-cyber-cyan/40 flex items-center justify-center group-hover:border-cyber-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
              <Shield className="w-5 h-5 text-cyber-cyan group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyber-green rounded-full animate-ping" />
            </div>
            <div>
              <div className="font-heading font-bold text-lg text-white group-hover:text-cyber-cyan transition-colors tracking-wide flex items-center gap-1.5">
                {profile.name}
                <span className="text-xs text-cyber-green font-mono">_SEC</span>
              </div>
              <div className="text-[11px] font-mono text-cyber-muted tracking-wider uppercase">
                B.Tech CSE Cybersecurity
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-cyber-card/60 backdrop-blur-md p-1.5 rounded-full border border-cyber-border">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                onMouseEnter={() => sounds.playHover()}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Controls & Status */}
          <div className="hidden md:flex items-center gap-3">
            {/* Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-green text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              <span>AVAILABLE FOR COLLABORATION</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleAudio}
              title={audioEnabled ? 'Mute Cyber Audio' : 'Unmute Cyber Audio'}
              className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-gray-300 hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-colors"
            >
              {audioEnabled ? <Volume2 className="w-4 h-4 text-cyber-cyan" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
            </button>

            {/* Ctrl + K Command Palette */}
            <button
              onClick={() => {
                sounds.playClick();
                setIsCommandPaletteOpen(true);
              }}
              title="Command Palette (Ctrl + K)"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-cyber-card border border-cyber-border text-xs font-mono text-gray-300 hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-colors"
            >
              <Command className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>CTRL+K</span>
            </button>

            {/* Admin Lock */}
            <button
              onClick={() => {
                sounds.playClick();
                setIsAdminOpen(true);
              }}
              title="Admin System Control (/admin)"
              className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-gray-300 hover:text-cyber-purple hover:border-cyber-purple/50 transition-colors"
            >
              <Lock className="w-4 h-4 text-cyber-purple" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                sounds.playClick();
                setIsCommandPaletteOpen(true);
              }}
              className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-cyber-cyan"
            >
              <Terminal className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cyber-dark/95 backdrop-blur-xl border-b border-cyber-border px-4 pt-4 pb-6 space-y-3 mt-3 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-cyber-border/50">
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-green">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              AVAILABLE FOR COLLABORATION
            </div>
            <button
              onClick={toggleAudio}
              className="p-1.5 rounded-md bg-cyber-card text-cyber-cyan border border-cyber-border"
            >
              {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-mono transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40'
                    : 'text-gray-300 bg-cyber-card/40 border border-cyber-border/40 hover:bg-cyber-card'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsAdminOpen(true);
              }}
              className="w-full py-2 rounded-lg bg-cyber-purple/20 border border-cyber-purple/40 text-cyber-purple text-xs font-mono flex items-center justify-center gap-2"
            >
              <Lock className="w-3.5 h-3.5" />
              Admin Portal
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
