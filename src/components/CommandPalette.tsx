import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Command, X, ArrowRight, Shield } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { sounds } from '../utils/audio';

export const CommandPalette: React.FC = () => {
  const { isCommandPaletteOpen, setIsCommandPaletteOpen, setMatrixMode, matrixMode, profile } = usePortfolio();
  const [inputCommand, setInputCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: 'system_init', output: 'Cyber Security Terminal HUD v2.6 Ready. Type "help" for command list.' }
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Global Ctrl + K key binding listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sounds.playClick();
        setIsCommandPaletteOpen(!isCommandPaletteOpen);
      }
      if (e.key === 'Escape' && isCommandPaletteOpen) {
        setIsCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, setIsCommandPaletteOpen]);

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  const handleCommandExecute = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputCommand.trim().toLowerCase();
    if (!cmd) return;

    sounds.playClick();
    let output = '';

    switch (cmd) {
      case 'help':
        output = 'Available commands: about, skills, projects, certs, contact, github, linkedin, matrix, sysinfo, clear, exit';
        break;
      case 'about':
        output = `${profile.fullName} | ${profile.education.degree} (${profile.education.university})`;
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        output = 'Navigating to Technical Skills Matrix...';
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        output = 'Navigating to Security Projects Showcase...';
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'certs':
      case 'certifications':
        output = 'Navigating to Verified Certifications & Credentials...';
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        output = `Direct Inbox Transmission: ${profile.email}`;
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'github':
        output = `Opening GitHub: ${profile.github}`;
        window.open(profile.github, '_blank');
        break;
      case 'linkedin':
        output = `Opening LinkedIn: ${profile.linkedin}`;
        window.open(profile.linkedin, '_blank');
        break;
      case 'matrix':
        setMatrixMode(!matrixMode);
        output = `Matrix Data Rain Mode: ${!matrixMode ? 'ENABLED 🟢' : 'DISABLED 🔴'}`;
        break;
      case 'sysinfo':
        output = `Operator: ${profile.name} | DOB: 24-10-2007 | OS: CyberSec-Kernel-v2.6 | Status: ACTIVE`;
        break;
      case 'clear':
        setCommandHistory([]);
        setInputCommand('');
        return;
      case 'exit':
        setIsCommandPaletteOpen(false);
        setInputCommand('');
        return;
      default:
        output = `Command not recognized: "${cmd}". Type "help" for available commands.`;
    }

    setCommandHistory(prev => [...prev, { cmd, output }]);
    setInputCommand('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-cyber-dark/95 border border-cyber-cyan/50 rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-[0_0_50px_rgba(0,240,255,0.3)] relative font-mono">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-cyber-border/70 pb-3 text-xs text-cyber-cyan">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyber-green animate-pulse" />
            <span>COMMAND HUD TERMINAL [CTRL + K]</span>
          </div>
          <button
            onClick={() => setIsCommandPaletteOpen(false)}
            className="text-gray-400 hover:text-white px-2 py-0.5 rounded bg-cyber-card border border-cyber-border"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Console Log Area */}
        <div className="max-h-64 overflow-y-auto space-y-2 text-xs py-2 pr-2">
          {commandHistory.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-1.5 text-cyber-green">
                <span>dixit@cyber-node:~$</span>
                <span className="text-white font-bold">{item.cmd}</span>
              </div>
              <div className="text-gray-300 pl-4 border-l border-cyber-cyan/30">
                {item.output}
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommandExecute} className="flex items-center gap-2 pt-2 border-t border-cyber-border/70">
          <span className="text-cyber-green text-xs font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type command ('help', 'projects', 'matrix', 'certs', 'contact')..."
            value={inputCommand}
            onChange={e => setInputCommand(e.target.value)}
            className="w-full bg-transparent text-xs text-cyber-cyan placeholder-cyber-muted focus:outline-none"
          />
          <button type="submit" className="p-1 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="text-[10px] text-cyber-muted flex items-center justify-between pt-1">
          <span>Press ESC or type 'exit' to close</span>
          <span>CYBER_TERMINAL_HUD_OK</span>
        </div>

      </div>
    </div>
  );
};
