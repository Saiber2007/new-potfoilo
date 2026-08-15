import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Eye, Clock, CheckCircle, Shield } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import type { ProjectItem } from '../types';
import { GithubIcon } from './Icons';
import { sounds } from '../utils/audio';

export const Projects: React.FC = () => {
  const { projects } = usePortfolio();
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>SECURITY REPOSITORY & LAB PROJECTS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Featured <span className="text-cyber-cyan">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-cyan to-blue-500 rounded-full mt-3" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="project-card group relative rounded-2xl bg-cyber-card/90 border border-cyber-border/80 p-6 flex flex-col justify-between backdrop-blur-xl shadow-cyber-card transition-all duration-300 hover:border-cyber-cyan hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-[11px] font-mono font-semibold">
                    {project.badge}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-mono">
                    {project.status === 'Completed' ? (
                      <span className="flex items-center gap-1 text-cyber-green">
                        <CheckCircle className="w-3.5 h-3.5" /> {project.status}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-yellow-400">
                        <Clock className="w-3.5 h-3.5" /> {project.status}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 font-sans line-clamp-3 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Card Footer Tech Badges & Buttons */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-cyber-dark text-[11px] font-mono text-gray-300 border border-cyber-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-cyber-border/60">
                  {/* GitHub or Coming Soon */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sounds.playClick()}
                      onMouseEnter={() => sounds.playHover()}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-cyber-cyan transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-cyber-muted italic">Coming Soon</span>
                  )}

                  {/* Live Demo or Coming Soon */}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sounds.playClick()}
                      onMouseEnter={() => sounds.playHover()}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-green hover:underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        sounds.playClick();
                        setActiveProjectModal(project);
                      }}
                      onMouseEnter={() => sounds.playHover()}
                      className="inline-flex items-center gap-1 text-xs font-mono text-cyber-cyan hover:underline"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-cyber-card border border-cyber-cyan/50 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-[0_0_40px_rgba(0,240,255,0.3)]">
            <div className="flex items-center justify-between border-b border-cyber-border/60 pb-3">
              <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs">
                <Shield className="w-4 h-4" /> PROJECT DOSSIER
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="text-gray-400 hover:text-white font-mono text-xs px-2 py-1 rounded bg-cyber-dark border border-cyber-border"
              >
                [ESC / CLOSE]
              </button>
            </div>

            <h3 className="font-heading font-bold text-2xl text-white">{activeProjectModal.title}</h3>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              {activeProjectModal.longDescription || activeProjectModal.description}
            </p>

            <div>
              <span className="text-xs font-mono text-cyber-muted uppercase tracking-wider block mb-2">Technologies Used</span>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.technologies.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-cyber-dark text-xs font-mono text-cyber-cyan border border-cyber-border">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-cyber-border/60">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-xl bg-cyber-dark border border-cyber-border text-xs font-mono text-gray-300 hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
