import React from 'react';
import { EducationItem } from '../types';
import { GraduationCap, Award, Calendar, MapPin, Check } from 'lucide-react';

interface EducationProps {
  items: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ items }) => {
  return (
    <section id="education" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <h2 className="text-xs uppercase font-bold text-pink-500 tracking-widest flex items-center justify-center gap-2">
            <span className="h-[1px] w-4 bg-pink-500"></span> Academic Background
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Solid foundations in Computer Science, Data Structures & Software Engineering.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/60 rounded-xl p-6 border border-zinc-800 border-l-2 border-l-pink-600 hover:border-pink-600/50 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Score Badge */}
                {item.score && (
                  <div className="absolute top-6 right-6 px-2.5 py-1 rounded bg-pink-600/10 border border-pink-600/30 text-pink-400 font-bold text-[11px] uppercase tracking-wider">
                    {item.score}
                  </div>
                )}

                {/* Institution Header */}
                <div className="flex items-start space-x-3.5 mb-5 pr-20">
                  <div className="p-3 rounded-lg bg-pink-600/10 border border-pink-600/20 text-pink-500 shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-pink-400 transition-colors">
                      {item.institution}
                    </h3>
                    <p className="text-xs font-semibold text-pink-500 mt-0.5 uppercase tracking-wider">
                      {item.degree}
                    </p>
                  </div>
                </div>

                {/* Date & Location */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-5 pb-3 border-b border-zinc-800">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-pink-500" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-pink-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Key Highlights */}
                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-gray-300 leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
