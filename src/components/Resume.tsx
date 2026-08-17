import React, { useState } from 'react';
import { FileText, Download, Eye, ShieldCheck, GraduationCap, X, Printer } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { sounds } from '../utils/audio';

export const Resume: React.FC = () => {
  const { profile, skills, certifications, achievements } = usePortfolio();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleDownloadResume = () => {
    sounds.playClick();
    // Generate formatted printable resume text document
    const resumeText = `====================================================================
DIXIT GAUTAMBHAI DABHI — RESUME / CURRICULUM VITAE
Email: ${profile.email}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}
Portfolio: ${profile.portfolioUrl}
====================================================================

PROFILE SUMMARY
${profile.bio}

EDUCATION
Degree: ${profile.education.degree}
University: ${profile.education.university}, ${profile.education.location}
Academic Status: ${profile.education.year} (${profile.education.semester})
Focus: ${profile.education.focus}

CORE SKILLS & COMPETENCIES
${skills.map(s => `[${s.category}]: ${s.items.map(i => `${i.name} (${i.level})`).join(', ')}`).join('\n')}

VERIFIED CERTIFICATIONS
${certifications.map(c => `- ${c.title} | ${c.organization} (${c.date}) ${c.credentialId ? `[ID: ${c.credentialId}]` : ''}`).join('\n')}

LEADERSHIP & ACTIVITIES
${achievements.map(a => `- ${a.title} (${a.period}): ${a.description}`).join('\n')}

====================================================================
Official Verified Resume — Dixit Gautambhai Dabhi
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Dixit_Dabhi_Cybersecurity_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintPDF = () => {
    sounds.playClick();
    window.print();
  };

  return (
    <section id="resume" className="py-20 relative z-10 bg-cyber-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>OFFICIAL CURRICULUM VITAE DOSSIER</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Security <span className="text-cyber-cyan">Resume</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-green rounded-full mt-3" />
        </div>

        {/* Action Card */}
        <div className="max-w-3xl mx-auto bg-cyber-card/90 border border-cyber-border rounded-2xl p-8 backdrop-blur-xl shadow-cyber-card text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-cyber-cyan/10 border border-cyber-cyan/40 mx-auto flex items-center justify-center text-cyber-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            <FileText className="w-8 h-8" />
          </div>

          <div>
            <h3 className="font-heading font-bold text-2xl text-white">Dixit Gautambhai Dabhi — Resume</h3>
            <p className="text-gray-300 text-sm mt-2 font-sans">
              B.Tech Computer Science Engineering + Cybersecurity | Silver Oak University
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4 border-t border-cyber-border/60">
            <div className="flex items-start gap-2.5">
              <GraduationCap className="w-5 h-5 text-cyber-green shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono text-cyber-muted">EDUCATION</div>
                <div className="text-sm font-semibold text-white">{profile.education.degree}</div>
                <div className="text-xs text-gray-400">{profile.education.university}</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono text-cyber-muted">SPECIALIZATION</div>
                <div className="text-sm font-semibold text-white">Ethical Hacking & OSINT</div>
                <div className="text-xs text-gray-400">Digital Forensics & Python Security</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handleDownloadResume}
              onMouseEnter={() => sounds.playHover()}
              className="px-6 py-3.5 rounded-xl bg-cyber-green text-cyber-bg font-heading font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,102,0.4)] hover:shadow-[0_0_30px_rgba(0,255,102,0.7)] hover:scale-[1.02] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={handlePrintPDF}
              onMouseEnter={() => sounds.playHover()}
              className="px-6 py-3.5 rounded-xl bg-cyber-cyan text-cyber-bg font-heading font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] hover:scale-[1.02] transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setIsResumeModalOpen(true);
              }}
              onMouseEnter={() => sounds.playHover()}
              className="px-6 py-3.5 rounded-xl bg-cyber-card border border-cyber-cyan/40 text-white font-heading font-semibold text-sm flex items-center gap-2 hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all"
            >
              <Eye className="w-4 h-4 text-cyber-cyan" />
              <span>Interactive Viewer</span>
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Resume View Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-cyber-card border border-cyber-cyan/50 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-[0_0_50px_rgba(0,240,255,0.3)] relative">
            <div className="flex items-center justify-between border-b border-cyber-border/70 pb-4">
              <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs">
                <FileText className="w-4 h-4" /> DIXIT_DABHI_RESUME_VIEWER
              </div>
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="p-1.5 rounded-lg bg-cyber-dark border border-cyber-border text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-cyber-dark rounded-xl border border-cyber-border p-6 font-mono text-xs space-y-6 text-gray-300">
              <div className="border-b border-cyber-border/60 pb-4">
                <h2 className="font-heading font-bold text-2xl text-white">{profile.fullName}</h2>
                <div className="text-cyber-cyan mt-1">{profile.headline}</div>
                <div className="text-gray-400 mt-2">Email: {profile.email} | GitHub: {profile.github}</div>
              </div>

              <div>
                <h4 className="font-heading font-bold text-sm text-cyber-green uppercase mb-2">&gt; Education</h4>
                <div>{profile.education.degree}</div>
                <div className="text-gray-400">{profile.education.university} — {profile.education.year} ({profile.education.semester})</div>
              </div>

              <div>
                <h4 className="font-heading font-bold text-sm text-cyber-cyan uppercase mb-2">&gt; Skills Summary</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {skills.map(s => (
                    <div key={s.category}>
                      <span className="text-white">{s.category}:</span> {s.items.map(i => i.name).join(', ')}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-heading font-bold text-sm text-purple-400 uppercase mb-2">&gt; Leadership & Activities</h4>
                <ul className="list-disc list-inside space-y-1">
                  {profile.leadership.map((l, idx) => (
                    <li key={idx}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-cyber-border/60">
              <div className="flex gap-2">
                <button
                  onClick={handleDownloadResume}
                  className="px-4 py-2 rounded-xl bg-cyber-green text-cyber-bg font-heading font-bold text-xs flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download
                </button>
                <button
                  onClick={handlePrintPDF}
                  className="px-4 py-2 rounded-xl bg-cyber-cyan text-cyber-bg font-heading font-bold text-xs flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" /> Print / Save PDF
                </button>
              </div>
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-cyber-dark border border-cyber-border text-xs font-mono text-gray-300"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
