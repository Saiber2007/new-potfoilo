import React, { useState } from 'react';
import { Cpu, ShieldCheck, Code, Wrench, Sparkles, Search } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { sounds } from '../utils/audio';

export const Skills: React.FC = () => {
  const { skills } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', ...skills.map(s => s.category)];

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Practical':
        return 'bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]';
      case 'Familiar':
        return 'bg-cyber-green/15 text-cyber-green border-cyber-green/40';
      case 'Learning':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/40';
      case 'Beginner':
      default:
        return 'bg-blue-500/15 text-blue-400 border-blue-500/40';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity':
        return <ShieldCheck className="w-4 h-4 text-cyber-cyan" />;
      case 'Programming':
        return <Code className="w-4 h-4 text-cyber-green" />;
      case 'Tools & Technologies':
        return <Wrench className="w-4 h-4 text-purple-400" />;
      case 'Other':
      default:
        return <Sparkles className="w-4 h-4 text-blue-400" />;
    }
  };

  const filteredSkills = skills.filter(cat => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) return false;
    return true;
  }).map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.level.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <section id="skills" className="py-20 relative z-10 bg-cyber-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-green text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>OPERATIONAL COMPETENCIES & TOOLKITS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Technical <span className="text-cyber-green">Skills Matrix</span>
          </h2>
          <p className="text-cyber-muted text-xs font-mono mt-2">
            [AUTHENTIC PROFICIENCY TAGS — NO ARTIFICIAL PERCENTAGES]
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-green to-cyber-cyan rounded-full mt-3" />
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  sounds.playClick();
                  setSelectedCategory(cat);
                }}
                onMouseEnter={() => sounds.playHover()}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === cat
                    ? 'bg-cyber-cyan text-cyber-bg font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'bg-cyber-card border border-cyber-border text-gray-300 hover:border-cyber-cyan/50 hover:text-white'
                }`}
              >
                {cat !== 'All' && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-cyber-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or level..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-cyber-card border border-cyber-border rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-white placeholder-cyber-muted focus:outline-none focus:border-cyber-cyan"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-8">
          {filteredSkills.map(cat => (
            <div
              key={cat.category}
              className="bg-cyber-card/80 border border-cyber-border/80 rounded-2xl p-6 backdrop-blur-xl shadow-cyber-card"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-cyber-border/60">
                <div className="p-2 rounded-lg bg-cyber-dark border border-cyber-border">
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">{cat.category}</h3>
                  <p className="text-xs font-mono text-cyber-muted">{cat.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.items.map(item => (
                  <div
                    key={item.name}
                    onMouseEnter={() => sounds.playHover()}
                    className="skill-badge group relative flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-cyber-dark/80 border border-cyber-border/70 hover:border-cyber-cyan transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span className="font-heading font-medium text-sm text-gray-200 group-hover:text-white">
                      {item.name}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${getLevelBadgeClass(
                        item.level
                      )}`}
                    >
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
