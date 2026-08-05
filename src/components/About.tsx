import React from 'react';
import { ProfileData } from '../types';
import { Code, BarChart, Users, Palette, BookOpen, CheckCircle2, Sparkles, Cpu } from 'lucide-react';

interface AboutProps {
  data: ProfileData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  const pillarCards = [
    {
      title: "Front End Developer",
      skills: "HTML, CSS, JavaScript, React, Node.js, Python",
      icon: Code,
      color: "from-[#e01e83] to-[#800f48]"
    },
    {
      title: "Data Analysis & Visualization",
      skills: "NumPy, Data Analysis, MS Excel, Visualization",
      icon: BarChart,
      color: "from-[#c026d3] to-[#701a7f]"
    },
    {
      title: "Project Management & Collaboration",
      skills: "Task Coordination, Research, Effective Communication",
      icon: Users,
      color: "from-[#d946ef] to-[#86198f]"
    },
    {
      title: "UI/UX Design",
      skills: "Figma, Adobe XD, Wireframing, User Research",
      icon: Palette,
      color: "from-[#ec4899] to-[#9d174d]"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-xs uppercase font-bold text-pink-500 tracking-widest flex items-center justify-center gap-2">
            <span className="h-[1px] w-4 bg-pink-500"></span> About Me <span className="h-[1px] w-4 bg-pink-500"></span>
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering, AI & User-Centered Design
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Bridging full-stack software development, artificial intelligence alignment, and intuitive interfaces.
          </p>
        </div>

        {/* Bio & Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm group">
              <div className="relative rounded-xl overflow-hidden border border-pink-600/30 bg-zinc-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Gurleen Kaur - About Me Photo"
                  className="w-full h-[380px] object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent">
                  <p className="text-[10px] text-pink-500 uppercase font-bold tracking-wider">Gurleen Kaur</p>
                  <p className="text-xs font-bold text-white">K.R. Mangalam University (B.Tech CSE '27)</p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-pink-600 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest">
                FARIDABAD / GURUGRAM
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-gray-300">
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed font-normal">
              {data.bio.map((paragraph, index) => (
                <p key={index} className="text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Coursework Highlight Box */}
            <div className="pt-4 border-t border-zinc-800">
              <div className="flex items-center space-x-2 text-pink-500 uppercase font-bold text-xs tracking-widest mb-3">
                <BookOpen className="w-4 h-4 text-pink-500" />
                <span>Relevant Coursework</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {data.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-medium text-gray-300 hover:border-pink-600/50 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                    <span>{course}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* What I Build & Design (Pillar Cards) */}
        <div className="pt-4">
          <div className="text-center mb-8">
            <h3 className="text-xs uppercase font-bold text-pink-500 tracking-widest flex items-center justify-center gap-2">
              <span className="h-[1px] w-4 bg-pink-500"></span> Core Competencies
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
              What I Build & Design
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillarCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-zinc-900/60 hover:bg-zinc-900 p-6 rounded-xl border border-zinc-800 border-l-2 border-l-pink-600 hover:border-pink-600/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="p-3 rounded-lg bg-pink-600/10 border border-pink-600/20 text-pink-500 w-fit group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors mb-1">
                      {card.title}
                    </h4>

                    <p className="text-xs text-gray-400 leading-relaxed">
                      {card.skills}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
