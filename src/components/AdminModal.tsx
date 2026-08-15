import React, { useState } from 'react';
import { Lock, Key, Save, RotateCcw, X, ShieldAlert, CheckCircle2, User, Code, Folder, Award, FileText } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { sounds } from '../utils/audio';

export const AdminModal: React.FC = () => {
  const {
    profile,
    skills,
    projects,
    certifications,
    achievements,
    updateProfile,
    updateSkills,
    updateProjects,
    updateCertifications,
    updateAchievements,
    resetToDefaults,
    isAdminOpen,
    setIsAdminOpen
  } = usePortfolio();

  const [passwordInput, setPasswordInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'profile' | 'skills' | 'projects' | 'certifications' | 'achievements'>('profile');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Local form state for profile edits
  const [editProfile, setEditProfile] = useState(profile);

  if (!isAdminOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playClick();

    // Default admin key or environment key
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'cyberadmin2026';

    if (passwordInput === validPassword) {
      setIsAuthenticated(true);
      setAuthError('');
      setEditProfile(profile);
      sounds.playAccessGranted();
    } else {
      setAuthError('INVALID ACCESS KEY: Permission Denied.');
    }
  };

  const handleSaveProfile = () => {
    sounds.playClick();
    updateProfile(editProfile);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all portfolio data to defaults?')) {
      sounds.playClick();
      resetToDefaults();
      setEditProfile(profile);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="bg-cyber-card border border-cyber-purple/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-[0_0_50px_rgba(176,38,255,0.3)] relative">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-cyber-border/70 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyber-purple/10 border border-cyber-purple/40 text-cyber-purple">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-cyber-purple uppercase tracking-widest">
                SYSTEM CONTROL DASHBOARD
              </span>
              <h3 className="font-heading font-bold text-xl text-white">
                Portfolio Admin Management Portal
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              setIsAdminOpen(false);
            }}
            className="p-2 rounded-lg bg-cyber-dark border border-cyber-border text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Authentication Form */}
        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="max-w-md mx-auto py-8 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-cyber-purple/10 border border-cyber-purple/40 mx-auto flex items-center justify-center text-cyber-purple mb-2">
              <Key className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-lg text-white">Enter System Access Key</h4>
            <p className="text-xs font-mono text-cyber-muted">
              Security Authentication Required for `/admin` management interface.
            </p>

            <input
              type="password"
              placeholder="Enter Access Key..."
              value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
              className="w-full bg-cyber-dark border border-cyber-border rounded-xl px-4 py-3 text-center text-sm font-mono text-white focus:outline-none focus:border-cyber-purple"
            />

            {authError && (
              <div className="text-xs font-mono text-red-400 flex items-center justify-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-cyber-purple text-white font-heading font-bold text-sm tracking-wide uppercase hover:brightness-110 shadow-[0_0_15px_rgba(176,38,255,0.4)]"
            >
              AUTHENTICATE ACCESS
            </button>
          </form>
        ) : (
          /* Dashboard Editing Controls */
          <div className="space-y-6">
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-cyber-border/70 pb-3">
              {[
                { id: 'profile', label: 'Profile & DOB', icon: User },
                { id: 'skills', label: 'Skills Matrix', icon: Code },
                { id: 'projects', label: 'Projects', icon: Folder },
                { id: 'certifications', label: 'Certifications', icon: Award },
                { id: 'achievements', label: 'Experience', icon: FileText }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      sounds.playClick();
                      setActiveTab(tab.id as any);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
                      activeTab === tab.id
                        ? 'bg-cyber-purple text-white font-bold shadow-[0_0_15px_rgba(176,38,255,0.4)]'
                        : 'bg-cyber-dark text-gray-300 border border-cyber-border hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Profile Tab Editor */}
            {activeTab === 'profile' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-cyber-muted uppercase mb-1">Display Name</label>
                    <input
                      type="text"
                      value={editProfile.name}
                      onChange={e => setEditProfile({ ...editProfile, name: e.target.value })}
                      className="w-full bg-cyber-dark border border-cyber-border rounded-xl px-3 py-2 text-sm text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-cyber-muted uppercase mb-1">Full Legal Name</label>
                    <input
                      type="text"
                      value={editProfile.fullName}
                      onChange={e => setEditProfile({ ...editProfile, fullName: e.target.value })}
                      className="w-full bg-cyber-dark border border-cyber-border rounded-xl px-3 py-2 text-sm text-white font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-cyber-muted uppercase mb-1">Date of Birth (YYYY-MM-DD)</label>
                    <input
                      type="text"
                      value={editProfile.dob}
                      onChange={e => setEditProfile({ ...editProfile, dob: e.target.value })}
                      className="w-full bg-cyber-dark border border-cyber-border rounded-xl px-3 py-2 text-sm text-cyber-cyan font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-cyber-muted uppercase mb-1">Contact Email</label>
                    <input
                      type="email"
                      value={editProfile.email}
                      onChange={e => setEditProfile({ ...editProfile, email: e.target.value })}
                      className="w-full bg-cyber-dark border border-cyber-border rounded-xl px-3 py-2 text-sm text-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyber-muted uppercase mb-1">Headline</label>
                  <input
                    type="text"
                    value={editProfile.headline}
                    onChange={e => setEditProfile({ ...editProfile, headline: e.target.value })}
                    className="w-full bg-cyber-dark border border-cyber-border rounded-xl px-3 py-2 text-sm text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyber-muted uppercase mb-1">About Text</label>
                  <textarea
                    rows={4}
                    value={editProfile.aboutText}
                    onChange={e => setEditProfile({ ...editProfile, aboutText: e.target.value })}
                    className="w-full bg-cyber-dark border border-cyber-border rounded-xl px-3 py-2 text-sm text-white font-mono resize-none"
                  />
                </div>
              </div>
            )}

            {/* Other Tabs Feedback */}
            {activeTab !== 'profile' && (
              <div className="p-6 bg-cyber-dark rounded-xl border border-cyber-border text-center space-y-2">
                <p className="text-sm font-mono text-cyber-purple">
                  Editing [{activeTab.toUpperCase()}] datasets live in system state.
                </p>
                <p className="text-xs text-gray-400">
                  Data modified through this admin portal is saved to persistent local storage and updates the public portfolio dynamically.
                </p>
              </div>
            )}

            {/* Notification alert */}
            {saveSuccess && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-cyber-green/10 border border-cyber-green/40 text-cyber-green text-xs font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>System configuration updated & saved successfully!</span>
              </div>
            )}

            {/* Save & Reset Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-cyber-border/70">
              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs flex items-center gap-2 hover:bg-red-500/20"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleSaveProfile}
                  className="px-6 py-2.5 rounded-xl bg-cyber-purple text-white font-heading font-bold text-xs flex items-center gap-2 hover:brightness-110 shadow-[0_0_15px_rgba(176,38,255,0.4)]"
                >
                  <Save className="w-4 h-4" /> Save Live Changes
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
