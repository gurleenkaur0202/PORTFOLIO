import React from 'react';
import { AchievementItem } from '../types';
import { Award, TrendingUp, Sparkles, CheckCircle } from 'lucide-react';

interface AchievementsProps {
  items: AchievementItem[];
}

export const Achievements: React.FC<AchievementsProps> = ({ items }) => {
  return (
    <section id="achievements" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <h2 className="text-xs uppercase font-bold text-pink-500 tracking-widest flex items-center justify-center gap-2">
            <span className="h-[1px] w-4 bg-pink-500"></span> Milestones & Impact
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements & Leadership
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Key recognitions, community engagement, and technical accomplishments.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/60 rounded-xl p-6 border border-zinc-800 border-l-2 border-l-pink-600 hover:border-pink-600/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="p-2.5 rounded-lg bg-pink-600/10 border border-pink-600/20 text-pink-500 w-fit mb-5 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <Award className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-pink-400 transition-colors mb-1">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-pink-500 mb-3">
                  {item.organization} {item.date && `• ${item.date}`}
                </p>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-zinc-800 flex items-center space-x-1.5 text-[11px] text-gray-400">
                <CheckCircle className="w-3.5 h-3.5 text-pink-500" />
                <span>Verified Achievement</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
