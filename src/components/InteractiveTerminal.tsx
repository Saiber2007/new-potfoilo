import React, { useState, useEffect, useRef } from 'react';
import { Terminal, CornerDownLeft } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CommandOutput {
  command: string;
  output: string | React.ReactNode;
  type?: 'success' | 'info' | 'warning' | 'error';
}

export const InteractiveTerminal: React.FC = () => {
  const initialWelcomeLogs: CommandOutput[] = [
    {
      command: 'sys_init --mode=security_analyst',
      output: 'Initializing Dixit Dabhi Cybersecurity Sandbox... [OK]',
      type: 'info'
    },
    {
      command: 'whoami',
      output: `DIXIT DABHI | CSE Student (Cybersecurity Specialization)\nHeadline: ${PORTFOLIO_DATA.personal.headline}`,
      type: 'success'
    },
    {
      command: 'status --quick',
      output: '🟢 OPEN TO LEARNING & OPPORTUNITIES | Status: SECURE | Firewalls: ACTIVE',
      type: 'info'
    }
  ];

  const [inputCommand, setInputCommand] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>(initialWelcomeLogs);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandExecution = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let resOutput: React.ReactNode = '';
    let resType: 'success' | 'info' | 'warning' | 'error' = 'info';

    switch (trimmed) {
      case 'whoami':
        resOutput = (
          <div className="space-y-1">
            <p className="text-[#00ff9d] font-bold">Dixit Dabhi</p>
            <p>Role: B.Tech Computer Science & Engineering (Cybersecurity Specialization)</p>
            <p className="text-slate-400 font-sans text-xs">"{PORTFOLIO_DATA.personal.bioShort}"</p>
          </div>
        );
        resType = 'success';
        break;

      case 'skills':
      case 'nmap':
      case 'nmap -sv skills.net':
        resOutput = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-400 font-bold">[NMAP DISCOVERY REPORT - SKILLS MATRIX]</p>
            <p className="text-emerald-400">PORT 22/TCP OPEN  - Cybersecurity: Ethical Hacking, OSINT, Digital Forensics</p>
            <p className="text-emerald-400">PORT 80/TCP OPEN  - Programming: Python, C, C++, JavaScript</p>
            <p className="text-emerald-400">PORT 443/TCP OPEN - Web Tech: HTML5, CSS3, Tailwind CSS, React</p>
            <p className="text-emerald-400">PORT 8080/TCP OPEN- Tools: Kali Linux, Git, Nmap, VS Code</p>
          </div>
        );
        resType = 'success';
        break;

      case 'projects':
        resOutput = (
          <div className="space-y-1 text-xs">
            <p className="text-amber-400 font-bold">[FEATURED PROJECTS]</p>
            {PORTFOLIO_DATA.projects.map((p, idx) => (
              <p key={p.id} className="text-slate-300">
                <span className="text-[#00ff9d] font-mono">0{idx + 1}. {p.title}</span> - {p.shortDescription}
              </p>
            ))}
          </div>
        );
        resType = 'info';
        break;

      case 'status':
        resOutput = (
          <div className="text-xs space-y-1">
            <p className="text-[#00ff9d]">🟢 STATUS: ACTIVE & OPEN TO OPPORTUNITIES</p>
            <p className="text-slate-400">Education: B.Tech CSE (Cybersecurity Specialization)</p>
            <p className="text-slate-400">Encryption: AES-256-GCM | Integrity: Verified</p>
          </div>
        );
        resType = 'success';
        break;

      case 'contact':
        resOutput = (
          <div className="text-xs space-y-1">
            <p className="text-cyan-400">GitHub: <a href={PORTFOLIO_DATA.personal.githubUrl} target="_blank" rel="noreferrer" className="underline hover:text-[#00ff9d]">{PORTFOLIO_DATA.personal.githubUrl}</a></p>
            <p className="text-cyan-400">LinkedIn: <a href={PORTFOLIO_DATA.personal.linkedinUrl} target="_blank" rel="noreferrer" className="underline hover:text-[#00ff9d]">{PORTFOLIO_DATA.personal.linkedinUrl}</a></p>
          </div>
        );
        resType = 'info';
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'help':
      default:
        if (trimmed !== 'help' && trimmed !== '') {
          resOutput = (
            <span className="text-red-400">
              Command not recognized: '<span className="text-white">{trimmed}</span>'. Type <span className="text-[#00ff9d]">help</span> for valid commands.
            </span>
          );
          resType = 'error';
        } else {
          resOutput = (
            <div className="text-xs space-y-1 text-slate-300">
              <p className="text-cyan-400 font-semibold">AVAILABLE CYBER COMMANDS:</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono">
                <span className="text-[#00ff9d]">whoami</span> <span>- Profile overview</span>
                <span className="text-[#00ff9d]">skills</span> <span>- Scan skill stack</span>
                <span className="text-[#00ff9d]">projects</span> <span>- List key builds</span>
                <span className="text-[#00ff9d]">status</span> <span>- Check availability</span>
                <span className="text-[#00ff9d]">contact</span> <span>- Links & socials</span>
                <span className="text-[#00ff9d]">clear</span> <span>- Reset console log</span>
              </div>
            </div>
          );
          resType = 'info';
        }
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: resOutput, type: resType }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCommand.trim()) return;
    handleCommandExecution(inputCommand);
    setInputCommand('');
  };

  const runQuickCommand = (cmd: string) => {
    setInputCommand(cmd);
    handleCommandExecution(cmd);
    setInputCommand('');
  };

  return (
    <div className="w-full rounded-xl bg-[#090d16]/95 border border-[#00ff9d]/25 shadow-[0_0_35px_rgba(0,255,157,0.12)] overflow-hidden font-mono text-xs scanline flex flex-col h-[380px] sm:h-[420px]">
      {/* Terminal Titlebar */}
      <div className="bg-[#0e1422] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-400/40" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/40" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
          <span className="ml-2 text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#00ff9d]" />
            dixit@cyber-sec-lab:~
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-400">
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
            AES-256
          </span>
          <span className="flex items-center gap-1 text-[#00ff9d]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-ping" />
            ONLINE
          </span>
        </div>
      </div>

      {/* Quick Action Pills */}
      <div className="bg-[#0b101c] px-3 py-1.5 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto no-scrollbar text-[11px]">
        <span className="text-slate-400 text-[10px]">QUICK CMD:</span>
        {['whoami', 'skills', 'projects', 'status', 'help'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => runQuickCommand(cmd)}
            className="px-2 py-0.5 rounded bg-slate-800/70 hover:bg-[#00ff9d]/20 text-slate-300 hover:text-[#00ff9d] border border-slate-700 hover:border-[#00ff9d]/40 transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Stream */}
      <div className="p-4 flex-1 overflow-y-auto space-y-3 font-mono leading-relaxed bg-[#07090e]/90 text-slate-300">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-[#00ff9d] font-semibold">
              <span className="text-cyan-400">guest@dixit-sec:~$</span>
              <span>{item.command}</span>
            </div>
            <div className="pl-4 text-slate-300 border-l border-emerald-500/20 py-0.5">
              {item.output}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Interactive Command Prompt Line */}
      <form onSubmit={handleSubmit} className="bg-[#0c111e] px-4 py-2.5 border-t border-slate-800 flex items-center gap-2">
        <span className="text-[#00ff9d] font-bold">guest@dixit-sec:~$</span>
        <input
          type="text"
          value={inputCommand}
          onChange={(e) => setInputCommand(e.target.value)}
          placeholder="Type command ('whoami', 'skills', 'projects', 'help')..."
          className="flex-1 bg-transparent text-[#00ff9d] focus:outline-none font-mono text-xs placeholder:text-slate-400"
        />
        <button
          type="submit"
          className="p-1 rounded bg-[#00ff9d]/20 text-[#00ff9d] hover:bg-[#00ff9d]/30 transition-colors"
          title="Execute Command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
