import React, { useState } from 'react';
import { Skill } from '../types';
import {
  Code2, Terminal, Cpu, Layout, Globe, BrainCircuit, Sparkles, Bot, BarChart3,
  GitBranch, Laptop, FileSpreadsheet, Mail, Palette, Figma, Eye, Layers, Users,
  Search, Kanban, MessageSquare, PieChart, Check
} from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'technical', label: 'Languages & Tech' },
    { id: 'ai', label: 'AI / ML' },
    { id: 'tools', label: 'Tools & Libs' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'soft', label: 'Soft Skills' },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  // Icon mapping helper
  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-[#e01e83]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#e01e83]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#e01e83]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#e01e83]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#e01e83]" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-[#e01e83]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#e01e83]" />;
      case 'Bot': return <Bot className="w-5 h-5 text-[#e01e83]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#e01e83]" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-[#e01e83]" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-[#e01e83]" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-[#e01e83]" />;
      case 'Mail': return <Mail className="w-5 h-5 text-[#e01e83]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#e01e83]" />;
      case 'Figma': return <Figma className="w-5 h-5 text-[#e01e83]" />;
      case 'Eye': return <Eye className="w-5 h-5 text-[#e01e83]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#e01e83]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#e01e83]" />;
      case 'Search': return <Search className="w-5 h-5 text-[#e01e83]" />;
      case 'Kanban': return <Kanban className="w-5 h-5 text-[#e01e83]" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-[#e01e83]" />;
      case 'PieChart': return <PieChart className="w-5 h-5 text-[#e01e83]" />;
      default: return <Code2 className="w-5 h-5 text-[#e01e83]" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-xs uppercase font-bold text-pink-500 tracking-widest flex items-center justify-center gap-2">
            <span className="h-[1px] w-4 bg-pink-500"></span> Technical Capabilities
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Expertise
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Repertoire spanning full-stack web development, artificial intelligence, UI/UX design, and cross-functional project management.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skill-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded text-[11px] font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'bg-zinc-900 text-gray-400 border border-zinc-800 hover:border-pink-600/50 hover:text-pink-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-900/60 rounded-xl p-5 border border-zinc-800 hover:border-pink-600/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-pink-600/10 border border-pink-600/20 text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                      {renderIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] text-pink-500 uppercase tracking-widest font-bold">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-pink-400 bg-pink-600/10 px-2 py-0.5 rounded border border-pink-600/30">
                    {skill.level}%
                  </span>
                </div>

                {skill.description && (
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mt-2">
                <div
                  className="bg-pink-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Chip Cloud */}
        <div className="mt-14 bg-zinc-900/40 rounded-xl p-6 border border-zinc-800 text-center">
          <h3 className="text-xs uppercase font-bold text-pink-500 tracking-widest mb-4">
            Tech Stack At A Glance
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Java", "Python", "C++", "HTML5", "CSS3", "JavaScript", "React", "Node.js",
              "Neural Networks", "OpenAI GPT", "LLM Post-Training", "Prompt Engineering",
              "Git", "GitHub", "Figma", "Adobe XD", "UI/UX Design",
              "Project Management", "Team Collaboration"
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-pink-600/50 hover:text-pink-400 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
