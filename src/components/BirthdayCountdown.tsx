import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { calculateNextBirthday } from '../utils/age';
import type { BirthdayCountdown as CountdownType } from '../utils/age';
import { triggerConfetti } from '../utils/confetti';

interface BirthdayCountdownProps {
  dobStr?: string;
}

export const BirthdayCountdown: React.FC<BirthdayCountdownProps> = ({ dobStr }) => {
  const [countdown, setCountdown] = useState<CountdownType>(() => calculateNextBirthday(dobStr));

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateNextBirthday(dobStr);
      setCountdown(updated);

      if (updated.isToday) {
        triggerConfetti();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [dobStr]);

  return (
    <div className="relative group overflow-hidden rounded-2xl bg-cyber-card/80 border border-cyber-cyan/30 p-6 backdrop-blur-xl shadow-cyber-card transition-all duration-300 hover:border-cyber-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]">
      {/* Background HUD accent */}
      <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-xs text-cyber-cyan select-none pointer-events-none">
        [SYS_TIMER_DOB_2007-10-24]
      </div>

      <div className="flex items-center justify-between mb-4 border-b border-cyber-border/60 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan">
            <Clock className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm tracking-wider text-white uppercase flex items-center gap-2">
              Next Birthday
              {countdown.isToday && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyber-green/20 text-cyber-green text-[10px] border border-cyber-green/40">
                  <Sparkles className="w-3 h-3 animate-spin" /> TODAY! 🎉
                </span>
              )}
            </h3>
            <p className="text-[11px] font-mono text-cyber-muted">Target: 24 October {countdown.targetYear}</p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[11px] font-mono text-cyber-green flex items-center gap-1 justify-end">
            <Calendar className="w-3 h-3" /> AUTO_SYNCED
          </span>
        </div>
      </div>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
        {/* Days */}
        <div className="bg-cyber-dark/80 rounded-xl p-3 border border-cyber-border/80 group-hover:border-cyber-cyan/40 transition-colors">
          <div className="font-mono font-bold text-2xl sm:text-3xl text-cyber-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
            {String(countdown.days).padStart(2, '0')}
          </div>
          <div className="text-[10px] font-mono text-cyber-muted uppercase mt-1 tracking-wider">Days</div>
        </div>

        {/* Hours */}
        <div className="bg-cyber-dark/80 rounded-xl p-3 border border-cyber-border/80 group-hover:border-cyber-cyan/40 transition-colors">
          <div className="font-mono font-bold text-2xl sm:text-3xl text-white">
            {String(countdown.hours).padStart(2, '0')}
          </div>
          <div className="text-[10px] font-mono text-cyber-muted uppercase mt-1 tracking-wider">Hours</div>
        </div>

        {/* Minutes */}
        <div className="bg-cyber-dark/80 rounded-xl p-3 border border-cyber-border/80 group-hover:border-cyber-cyan/40 transition-colors">
          <div className="font-mono font-bold text-2xl sm:text-3xl text-white">
            {String(countdown.minutes).padStart(2, '0')}
          </div>
          <div className="text-[10px] font-mono text-cyber-muted uppercase mt-1 tracking-wider">Minutes</div>
        </div>

        {/* Seconds */}
        <div className="bg-cyber-dark/80 rounded-xl p-3 border border-cyber-border/80 group-hover:border-cyber-green/40 transition-colors">
          <div className="font-mono font-bold text-2xl sm:text-3xl text-cyber-green drop-shadow-[0_0_8px_rgba(0,255,102,0.5)]">
            {String(countdown.seconds).padStart(2, '0')}
          </div>
          <div className="text-[10px] font-mono text-cyber-muted uppercase mt-1 tracking-wider">Seconds</div>
        </div>
      </div>
    </div>
  );
};
