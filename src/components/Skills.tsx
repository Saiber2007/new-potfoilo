import React, { useState } from 'react';
import { Shield, Code2, Globe, Terminal, Cpu, Search, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5 text-[#00ff9d]" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Terminal': default: return <Terminal className="w-5 h-5 text-emerald-400" />;
    }
  };

  const categories = ['All', ...PORTFOLIO_DATA.skillCategories.map((c) => c.title)];

  const filteredCategories = PORTFOLIO_DATA.skillCategories
    .filter((cat) => selectedCategory === 'All' || cat.title === selectedCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter((cat) => cat.skills.length > 0);

  const getLevelBadge = (level: 'Proficient' | 'Intermediate' | 'Exploring') => {
    switch (level) {
      case 'Proficient':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
            PROFICIENT
          </span>
        );
      case 'Intermediate':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
            INTERMEDIATE
          </span>
        );
      case 'Exploring':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950/80 text-blue-400 border border-blue-500/30">
            EXPLORING
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1624] border border-[#00ff9d]/30 text-xs font-mono text-[#00ff9d]">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-cyan-400">Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
            Structured view of technical proficiency in cybersecurity domains, programming languages, web stacks, and practical tools.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff9d] to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#0b101c] p-3 rounded-2xl border border-slate-800 backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/40 shadow-[0_0_12px_rgba(0,255,157,0.2)] font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python, OSINT)..."
              className="w-full bg-[#07090e] border border-slate-700/80 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-[#00ff9d]/50 font-mono"
            />
          </div>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#0b101b]/90 border border-slate-800/90 hover:border-[#00ff9d]/30 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#0e1626] border border-slate-700">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-sans">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-[#0e1626]/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-[#111b2f] transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff9d] opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      {getLevelBadge(skill.level)}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>SKILLS COUNT: {category.skills.length}</span>
                <span className="text-emerald-400">VERIFIED STACK</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note Disclaimer */}
        <div className="mt-8 text-center text-xs font-mono text-slate-400 max-w-lg mx-auto bg-[#0d1320] py-2 px-4 rounded-xl border border-slate-800/80">
          💡 Skill levels reflect hands-on experience & continuous project exploration.
        </div>

      </div>
    </section>
  );
};
