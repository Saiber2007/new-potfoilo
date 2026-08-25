import React, { useState } from 'react';
import { FileText, Download, Eye, GraduationCap, CheckCircle2, ShieldCheck, X, Printer } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDownload = () => {
    // Generate clean print layout or download prompt
    window.print();
  };

  return (
    <section id="resume" className="py-24 relative z-10 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1624] border border-[#00ff9d]/30 text-xs font-mono text-[#00ff9d]">
            <FileText className="w-3.5 h-3.5" />
            <span>06 // RECRUITER HUB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Resume & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-cyan-400">Curriculum Vitae</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
            Clean, high-contrast, recruiter-focused summary of academic standing, technical competencies, and project background.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff9d] to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Dedicated Recruiter-Friendly Resume Card */}
        <div className="max-w-4xl mx-auto bg-[#0d1320] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          {/* Top Banner with Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 tracking-wider">RECRUITER QUICK VIEW</span>
              <h3 className="text-2xl font-bold text-white font-heading">
                {PORTFOLIO_DATA.personal.name}
              </h3>
              <p className="text-xs font-mono text-emerald-400">
                {PORTFOLIO_DATA.resume.education.degree} ({PORTFOLIO_DATA.resume.education.specialization})
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* View Resume Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#00ff9d]/15 hover:bg-[#00ff9d]/25 border border-[#00ff9d]/40 text-[#00ff9d] font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,255,157,0.2)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              {/* Download Resume Button */}
              <button
                onClick={handleDownload}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Recruiter Preview Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left: Summary & Education */}
            <div className="md:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00ff9d]" /> PROFESSIONAL SUMMARY
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans bg-[#090d16] p-4 rounded-xl border border-slate-800">
                  {PORTFOLIO_DATA.resume.summary}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-cyan-400" /> ACADEMIC BACKGROUND
                </h4>
                <div className="bg-[#090d16] p-4 rounded-xl border border-slate-800 space-y-1 text-xs">
                  <p className="text-white font-bold">{PORTFOLIO_DATA.resume.education.degree}</p>
                  <p className="text-emerald-400 font-mono">{PORTFOLIO_DATA.resume.education.specialization}</p>
                  <p className="text-slate-400">{PORTFOLIO_DATA.resume.education.status}</p>
                  <p className="text-slate-400 pt-1 text-[11px]">Core: {PORTFOLIO_DATA.resume.education.focus}</p>
                </div>
              </div>

            </div>

            {/* Right: Key Competencies */}
            <div className="md:col-span-5 space-y-3">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> CORE COMPETENCIES
              </h4>

              <div className="bg-[#090d16] p-4 rounded-xl border border-slate-800 space-y-2">
                {PORTFOLIO_DATA.resume.competencies.map((comp, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d]" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                🟢 Clean recruiter layout optimized for PDF print & HR screening.
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Recruiter Full Resume Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0b101b] border border-cyan-500/40 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-[#00ff9d] font-mono text-xs">
                <FileText className="w-4 h-4" />
                <span>DIXIT_DABHI_RESUME.pdf (PREVIEW)</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono flex items-center gap-1 hover:bg-cyan-500/30"
                >
                  <Printer className="w-3.5 h-3.5" /> Print / Save PDF
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Style Render */}
            <div className="bg-[#ffffff] text-slate-900 p-8 rounded-xl shadow-inner space-y-6 text-sm font-sans">
              <div className="border-b-2 border-slate-800 pb-4 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">{PORTFOLIO_DATA.personal.name}</h1>
                <p className="text-sm font-semibold text-emerald-700">{PORTFOLIO_DATA.personal.headline}</p>
                <p className="text-xs text-slate-600 pt-1">
                  Email: {PORTFOLIO_DATA.personal.email} | GitHub: github.com/Saiber2007 | LinkedIn: linkedin.com/in/dixit-dabhi-76190b371
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">Executive Summary</h2>
                <p className="text-xs text-slate-700 leading-relaxed">{PORTFOLIO_DATA.resume.summary}</p>
              </div>

              <div>
                <h2 className="text-xs font-bold text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">Education</h2>
                <div className="flex justify-between items-start text-xs">
                  <div>
                    <p className="font-bold">{PORTFOLIO_DATA.resume.education.degree}</p>
                    <p className="text-slate-700">{PORTFOLIO_DATA.resume.education.specialization}</p>
                  </div>
                  <span className="text-slate-600 font-mono">Present</span>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">Core Technical Skills</h2>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-800">
                  {PORTFOLIO_DATA.resume.competencies.map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">Key Cybersecurity Projects</h2>
                <div className="space-y-3 text-xs">
                  {PORTFOLIO_DATA.projects.map((p) => (
                    <div key={p.id}>
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>{p.title}</span>
                        <span className="text-slate-600 font-mono">{p.category}</span>
                      </div>
                      <p className="text-slate-700">{p.shortDescription}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-mono"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
