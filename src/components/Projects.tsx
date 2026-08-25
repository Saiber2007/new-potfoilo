import React, { useState } from 'react';
import { FolderCode, ExternalLink, Check, X, Terminal } from 'lucide-react';
import { Github } from './SocialIcons';
import { PORTFOLIO_DATA, type Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = ['All', 'Cybersecurity', 'OSINT', 'Tools'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (p) => selectedFilter === 'All' || p.category === selectedFilter
  );

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1624] border border-[#00ff9d]/30 text-xs font-mono text-[#00ff9d]">
            <FolderCode className="w-3.5 h-3.5" />
            <span>03 // FEATURED BUILDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-cyan-400">Tools</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
            Practical security tools, open-source intelligence scripts, and responsive web applications engineered during my academic and self-directed cybersecurity journey.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff9d] to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/40 shadow-[0_0_15px_rgba(0,255,157,0.25)] font-semibold'
                  : 'bg-[#0b101c] text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0b101b]/90 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-[#00ff9d]/50 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(0,255,157,0.15)] flex flex-col group transform hover:-translate-y-1"
            >
              {/* Project Visual / Thumbnail */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b] via-[#0b101b]/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#090e18]/90 backdrop-blur-md border border-[#00ff9d]/30 text-[10px] font-mono text-[#00ff9d]">
                  {project.category}
                </div>

                {project.liveUrl && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-[10px] font-mono text-emerald-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-ping" />
                    LIVE
                  </div>
                )}
              </div>

              {/* Project Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#00ff9d] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-sans line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0f172a] text-cyan-300 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-xl bg-[#00ff9d]/15 hover:bg-[#00ff9d]/25 border border-[#00ff9d]/40 text-[#00ff9d] font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-[#0e1626] hover:bg-[#131d33] border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GitHub Code</span>
                  </a>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                    title="View Detailed Specs"
                  >
                    <Terminal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button Footer */}
        <div className="mt-12 text-center">
          <a
            href={PORTFOLIO_DATA.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b101c] hover:bg-[#0f172a] border border-[#00ff9d]/30 hover:border-[#00ff9d] text-slate-200 hover:text-[#00ff9d] font-mono text-xs font-bold transition-all shadow-lg"
          >
            <Github className="w-4 h-4 text-[#00ff9d]" />
            <span>VIEW ALL REPOSITORIES ON GITHUB</span>
          </a>
        </div>

      </div>

      {/* Modal View for Detailed Project Overview */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0b101b] border border-[#00ff9d]/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#00ff9d] px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30">
                {activeModalProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white font-heading">
                {activeModalProject.title}
              </h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {activeModalProject.fullDescription}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-cyan-400 font-bold">KEY HIGHLIGHTS & ARCHITECTURE:</h4>
              <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                {activeModalProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#00ff9d] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {activeModalProject.technologies.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-[#0e1626] text-cyan-300 border border-slate-700">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#00ff9d] text-slate-950 font-bold text-xs flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Launch Demo
                </a>
              )}
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-xs flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" /> View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
