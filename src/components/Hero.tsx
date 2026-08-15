import React, { useState, useEffect } from 'react';
import { Terminal, Shield, ArrowRight, ExternalLink, Activity, Lock, Cpu } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { calculateAge } from '../utils/age';
import { BirthdayCountdown } from './BirthdayCountdown';
import { sounds } from '../utils/audio';

export const Hero: React.FC = () => {
  const { profile } = usePortfolio();
  const [ageDetails, setAgeDetails] = useState(() => calculateAge(profile.dob));
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Update age dynamically
  useEffect(() => {
    const timer = setInterval(() => {
      setAgeDetails(calculateAge(profile.dob));
    }, 60000);
    return () => clearInterval(timer);
  }, [profile.dob]);

  // Terminal Typing effect
  useEffect(() => {
    const sequence = [
      '> initializing_security_profile...',
      '> loading_projects...',
      '> loading_certifications...',
      '> verifying_security_clearance...',
      '> system_ready'
    ];

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < sequence.length) {
        setTerminalLines(prev => [...prev, sequence[currentIdx]]);
        currentIdx++;
      } else {
        setIsReady(true);
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    sounds.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Terminal Status Box */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyber-card/90 border border-cyber-cyan/40 text-xs font-mono text-cyber-cyan shadow-[0_0_12px_rgba(0,240,255,0.2)]">
              <Terminal className="w-3.5 h-3.5 text-cyber-green animate-pulse" />
              <span>STATUS: ONLINE</span>
              <span className="text-cyber-border">|</span>
              <span className="text-gray-400">CLEARANCE: ETHICAL_HACKER</span>
            </div>

            {/* Dynamic Name Heading */}
            <div>
              <div className="text-xs sm:text-sm font-mono text-cyber-cyan tracking-widest uppercase mb-1">
                Security Engineering & Cyber Defense
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none">
                {profile.name.toUpperCase()}
              </h1>
              <div className="mt-3 font-heading font-semibold text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-green to-blue-400">
                {profile.headline}
              </div>
            </div>

            {/* Terminal Typing Log Component */}
            <div className="bg-cyber-dark/90 rounded-xl border border-cyber-border p-4 font-mono text-xs text-gray-300 space-y-1.5 shadow-inner">
              <div className="flex items-center gap-2 pb-2 border-b border-cyber-border/60 text-cyber-muted text-[11px]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="ml-2">bash - dixit@cyber-node:~</span>
              </div>
              <div className="pt-1 space-y-1">
                {terminalLines.map((line, idx) => (
                  <div
                    key={idx}
                    className={line.includes('ready') ? 'text-cyber-green font-bold' : 'text-cyber-cyan/90'}
                  >
                    {line}
                  </div>
                ))}
                {!isReady && <span className="inline-block w-2 h-4 bg-cyber-cyan animate-ping ml-1" />}
              </div>
            </div>

            {/* Supporting Bio Paragraph */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans max-w-2xl">
              {profile.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('projects')}
                onMouseEnter={() => sounds.playHover()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-blue-600 text-cyber-bg font-heading font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] hover:scale-[1.02] transition-all"
              >
                <span>Explore Security Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                onMouseEnter={() => sounds.playHover()}
                className="px-6 py-3.5 rounded-xl bg-cyber-card border border-cyber-cyan/40 text-white font-heading font-semibold text-sm flex items-center gap-2 hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all"
              >
                <span>Contact Security Officer</span>
              </button>
            </div>

            {/* Dynamic Age Badge Indicator */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-cyber-muted">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border">
                <Activity className="w-3.5 h-3.5 text-cyber-green" />
                <span>DYNAMIC_AGE: <strong className="text-white">{ageDetails.formattedAge}</strong></span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border">
                <Cpu className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>SPEC: <strong>B.TECH CSE + CYBERSECURITY</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column — Live Age & Birthday Dashboard Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Age Highlight Card */}
            <div className="relative overflow-hidden rounded-2xl bg-cyber-card/90 border border-cyber-cyan/40 p-6 backdrop-blur-xl shadow-cyber-card group hover:border-cyber-cyan transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">SYSTEM OPERATOR AGE</h3>
                    <p className="text-[11px] font-mono text-cyber-muted">DOB: 24 October 2007 (Auto-calculated)</p>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-green text-[10px] font-mono">
                  LIVE_METRIC
                </div>
              </div>

              <div className="text-center py-4 bg-cyber-dark/80 rounded-xl border border-cyber-border">
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-green tracking-tight">
                  {ageDetails.years}
                </div>
                <div className="text-xs font-mono text-cyber-cyan uppercase tracking-widest mt-1">
                  Years Old ({ageDetails.months} Months, {ageDetails.days} Days)
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>Silver Oak University</span>
                <span>2nd Year / 3rd Semester</span>
              </div>
            </div>

            {/* Live Birthday Countdown */}
            <BirthdayCountdown dobStr={profile.dob} />

          </div>
        </div>
      </div>
    </section>
  );
};
