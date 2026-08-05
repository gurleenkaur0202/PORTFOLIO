import React from 'react';
import { Linkedin, Github, Mail, ArrowRight, Download, Sparkles, MapPin, GraduationCap, Code2 } from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  data: ProfileData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Typography & Details Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-pink-900/20 border border-pink-600/30 text-pink-500 text-[10px] font-bold uppercase tracking-widest shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-600 animate-ping" />
              <span>Available for Full Stack & AI Opportunities</span>
              <Sparkles className="w-3 h-3 text-pink-500" />
            </div>

            {/* Big Name Display Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-none tracking-tight">
                Gurleen Kaur
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-bold text-pink-500 uppercase tracking-widest">
                Full Stack Developer <span className="text-pink-700">|</span> AI Enthusiast <span className="text-pink-700">|</span> UI/UX Designer
              </p>
            </div>

            {/* Subtitle / Key Facts */}
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed italic">
              Bachelors in technology in computer science engineering at <strong className="text-white font-semibold not-italic">K.R. Mangalam University (2023–2027)</strong>. Based in Gurugram / Faridabad, India.
            </p>

            {/* Location & Quick Meta Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-[11px]">
              <div className="flex items-center space-x-1.5 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-pink-500" />
                <span>Gurugram / Faridabad</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 text-gray-300">
                <GraduationCap className="w-3.5 h-3.5 text-pink-500" />
                <span>B.Tech CSE (2023–2027)</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                id="hero-get-in-touch-btn"
                href="#contact"
                className="px-5 py-2.5 rounded bg-pink-600 hover:bg-pink-700 text-white font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="hero-view-resume-btn"
                href="#resume"
                className="px-5 py-2.5 rounded border border-pink-600 text-pink-500 hover:bg-pink-600 hover:text-white font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV PDF</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center justify-center lg:justify-start space-x-3">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Connect:</span>
              <a
                id="hero-linkedin-link"
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gurleen Kaur LinkedIn Profile"
                className="p-2 rounded bg-zinc-900 text-gray-400 hover:text-pink-400 hover:bg-zinc-800 border border-zinc-800 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="hero-github-link"
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gurleen Kaur GitHub Profile"
                className="p-2 rounded bg-zinc-900 text-gray-400 hover:text-pink-400 hover:bg-zinc-800 border border-zinc-800 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-email-link"
                href={`mailto:${data.email}`}
                aria-label="Email Gurleen Kaur"
                className="p-2 rounded bg-zinc-900 text-gray-400 hover:text-pink-400 hover:bg-zinc-800 border border-zinc-800 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Portrait Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              <div className="w-full aspect-[4/5] bg-pink-900/10 border border-pink-600/30 rounded-xl overflow-hidden relative shadow-2xl flex items-center justify-center">
                <img
                  src={data.heroPhoto || data.avatar || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"}
                  alt={`${data.name} - Profile Photo`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
