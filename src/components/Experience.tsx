import React from 'react';
import { ExperienceItem } from '../types';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface ExperienceProps {
  items: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-xs uppercase font-bold text-pink-500 tracking-widest flex items-center justify-center gap-2">
            <span className="h-[1px] w-4 bg-pink-500"></span> Professional Journey
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Industry experience spanning artificial intelligence research, LLM post-training, full-stack development, and UI/UX engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-ml-0.5 before:w-0.5 before:bg-zinc-800">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 p-2 rounded-full bg-pink-600 text-white ring-8 ring-[#0a0a0a]">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2.5rem)] ml-16 md:ml-0 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 border-l-2 border-l-pink-600 hover:border-pink-600/50 transition-all duration-300 group">
                  
                  {/* Current Role Tag */}
                  {item.isCurrent && (
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-pink-600/10 text-pink-400 border border-pink-600/30 text-[10px] font-bold uppercase tracking-widest mb-3">
                      <Sparkles className="w-3 h-3 text-pink-500 animate-pulse" />
                      <span>Current Position</span>
                    </div>
                  )}

                  {/* Header info */}
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-white group-hover:text-pink-400 transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-xs font-semibold text-pink-400 bg-pink-600/10 px-2.5 py-0.5 rounded border border-pink-600/20">
                      {item.company}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4 pb-3 border-b border-zinc-800">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-pink-500" />
                      <span>{item.duration}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-pink-500" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Description Bullets */}
                  <ul className="space-y-2 mb-5">
                    {item.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-gray-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
