import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1624] border border-[#00ff9d]/30 text-xs font-mono text-[#00ff9d]">
            <Award className="w-3.5 h-3.5" />
            <span>04 // CREDENTIALS & WORKSHOPS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-cyan-400">Learning</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
            Hands-on technical workshops, IEEE student chapter activities, and cybersecurity training courses.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff9d] to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#0b101b]/90 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Category Badge & Date */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#0e1626] border border-cyan-500/30 text-[10px] font-mono text-cyan-400 font-bold">
                    {cert.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-xs">
                    <Calendar className="w-3.5 h-3.5 text-[#00ff9d]" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Certificate Title & Organization */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#00ff9d] transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-400 font-mono">
                    {cert.organization}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-6 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00ff9d]" />
                  VERIFIED LEARNING
                </span>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#0e1626] text-cyan-400 hover:text-white border border-slate-700 hover:border-cyan-500 transition-colors"
                    title="View Credential"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                    CERTIFICATE / ATTENDANCE
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs font-mono text-slate-400">
          📜 Additional industry certifications in progress as part of continuous cybersecurity learning.
        </div>

      </div>
    </section>
  );
};
