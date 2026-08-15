import React, { useState } from 'react';
import { Award, ShieldCheck, ExternalLink, Eye, CheckCircle2, Calendar, Hash } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { CertificationItem } from '../types';
import { CertificateModal } from './CertificateModal';
import { sounds } from '../utils/audio';

export const Certifications: React.FC = () => {
  const { certifications } = usePortfolio();
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'Hackviser':
        return 'bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/40';
      case 'Google':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/40';
      case 'AWS':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/40';
      case 'IEEE':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/40';
      case 'Simplilearn':
        return 'bg-cyber-green/15 text-cyber-green border-cyber-green/40';
      default:
        return 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/30';
    }
  };

  return (
    <section id="certifications" className="py-20 relative z-10 bg-cyber-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-green text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CYBERSECURITY & INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Certifications & <span className="text-cyber-green">Badges</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-green to-cyber-cyan rounded-full mt-3" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map(cert => (
            <div
              key={cert.id}
              className="cert-card group relative rounded-2xl bg-cyber-card/90 border border-cyber-border/80 p-6 flex flex-col justify-between backdrop-blur-xl shadow-cyber-card transition-all duration-300 hover:border-cyber-green hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(0,255,102,0.25)]"
            >
              <div>
                {/* Header Badge & Verification Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold border ${getBadgeColor(cert.badgeType)}`}>
                    {cert.badgeType}
                  </span>

                  <span className="flex items-center gap-1 text-[11px] font-mono text-cyber-green">
                    <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-cyber-green transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-cyber-muted mb-4">
                  {cert.organization}
                </p>

                <p className="text-sm text-gray-300 font-sans line-clamp-3 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Dates & ID */}
                <div className="space-y-1.5 mb-6 text-xs font-mono text-gray-400 border-t border-b border-cyber-border/60 py-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-cyber-muted">
                      <Calendar className="w-3.5 h-3.5" /> Issued:
                    </span>
                    <span className="text-white">{cert.date}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-cyber-muted">
                        <Hash className="w-3.5 h-3.5" /> ID:
                      </span>
                      <span className="text-cyber-cyan font-semibold">{cert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Topics Tag List */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.topics.slice(0, 4).map(topic => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded bg-cyber-dark text-[11px] font-mono text-gray-300 border border-cyber-border/60"
                    >
                      {topic}
                    </span>
                  ))}
                  {cert.topics.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-cyber-dark text-[11px] font-mono text-cyber-cyan border border-cyber-border/60">
                      +{cert.topics.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setSelectedCert(cert);
                    }}
                    onMouseEnter={() => sounds.playHover()}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-cyan hover:text-white transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sounds.playClick()}
                      onMouseEnter={() => sounds.playHover()}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-green hover:underline"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Certificate Viewer Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
