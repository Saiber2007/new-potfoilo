import React, { useState, useEffect } from 'react';
import { ShieldCheck, ExternalLink, X, ZoomIn, ZoomOut, RotateCcw, Award, CheckCircle2 } from 'lucide-react';
import { CertificationItem } from '../types';
import { sounds } from '../utils/audio';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-cyber-card border border-cyber-cyan/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-[0_0_50px_rgba(0,240,255,0.3)] relative">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-cyber-border/70 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-cyber-green uppercase flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED CREDENTIAL DOSSIER
              </span>
              <h3 className="font-heading font-bold text-lg text-white">{cert.title}</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              className="p-2 rounded-lg bg-cyber-dark border border-cyber-border text-gray-300 hover:text-cyber-cyan"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              className="p-2 rounded-lg bg-cyber-dark border border-cyber-border text-gray-300 hover:text-cyber-cyan"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              title="Reset Zoom"
              className="p-2 rounded-lg bg-cyber-dark border border-cyber-border text-gray-300 hover:text-cyber-cyan"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="p-2 rounded-lg bg-cyber-dark border border-cyber-border text-gray-300 hover:text-red-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Graphic Render Display */}
        <div className="overflow-hidden rounded-xl bg-cyber-dark border border-cyber-border p-6 flex items-center justify-center min-h-[300px]">
          <div
            className="transition-transform duration-200 w-full max-w-2xl bg-gradient-to-br from-slate-900 via-cyber-dark to-slate-950 p-8 rounded-2xl border-2 border-cyber-cyan/40 shadow-2xl relative"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {/* Certificate Header Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-mono text-cyber-cyan tracking-widest uppercase">
                  CERTIFICATE OF ACCOMPLISHMENT
                </span>
                <h4 className="font-heading font-extrabold text-2xl text-white mt-1">
                  {cert.organization}
                </h4>
              </div>
              <div className="px-3 py-1 rounded-full bg-cyber-green/10 border border-cyber-green/40 text-cyber-green text-xs font-mono">
                VERIFIED
              </div>
            </div>

            <div className="my-6 space-y-2 border-y border-cyber-border/60 py-6">
              <p className="text-xs font-mono text-cyber-muted">THIS IS PROUDLY PRESENTED TO</p>
              <h2 className="font-heading font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-green">
                DIXIT GAUTAMBHAI DABHI
              </h2>
              <p className="text-xs font-mono text-gray-300 pt-2">
                For successfully fulfilling all curriculum requirements & demonstrating competence in:
              </p>
              <p className="font-heading font-semibold text-base text-cyber-cyan">
                {cert.title}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-400 pt-2">
              <div>
                <span className="text-cyber-muted">DATE OF ISSUE:</span>
                <div className="text-white font-semibold">{cert.date}</div>
              </div>
              {cert.credentialId && (
                <div>
                  <span className="text-cyber-muted">CREDENTIAL ID:</span>
                  <div className="text-cyber-green font-semibold">{cert.credentialId}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Certificate Details & Verification Button */}
        <div className="space-y-4">
          <p className="text-gray-300 text-sm leading-relaxed">
            {cert.description}
          </p>

          <div>
            <span className="text-xs font-mono text-cyber-muted uppercase tracking-wider block mb-2">Curriculum Topics & Competencies</span>
            <div className="flex flex-wrap gap-2">
              {cert.topics.map(topic => (
                <span
                  key={topic}
                  className="px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-cyber-border/70 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-cyber-muted">
              Official Credential Holder: <strong className="text-white">Dixit Dabhi</strong>
            </div>

            <div className="flex items-center gap-3">
              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="px-5 py-2.5 rounded-xl bg-cyber-green text-cyber-bg font-heading font-bold text-xs flex items-center gap-2 hover:brightness-110 shadow-[0_0_15px_rgba(0,255,102,0.4)] transition-all"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-cyber-dark border border-cyber-border text-xs font-mono text-gray-300 hover:text-white"
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
