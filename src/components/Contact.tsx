import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react';
import { ProfileData } from '../types';

interface ContactProps {
  data: ProfileData;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <h2 className="text-xs uppercase font-bold text-pink-500 tracking-widest flex items-center justify-center gap-2">
            <span className="h-[1px] w-4 bg-pink-500"></span> Let's Connect
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Have an exciting project, AI collaboration, or engineering role? Feel free to reach out directly.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Email Card */}
          <a
            href={`mailto:${data.email}`}
            className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800 border-l-2 border-l-pink-600 hover:border-pink-600/50 transition-all flex items-center space-x-4 group"
          >
            <div className="p-2.5 rounded-lg bg-pink-600/10 border border-pink-600/20 text-pink-500 shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div className="overflow-hidden flex-1">
              <p className="text-[10px] uppercase font-bold tracking-widest text-pink-500">Email</p>
              <p className="text-xs font-bold text-white group-hover:text-pink-400 transition-colors truncate">
                {data.email}
              </p>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href={`tel:${data.phone}`}
            className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800 border-l-2 border-l-pink-600 hover:border-pink-600/50 transition-all flex items-center space-x-4 group"
          >
            <div className="p-2.5 rounded-lg bg-pink-600/10 border border-pink-600/20 text-pink-500 shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div className="overflow-hidden flex-1">
              <p className="text-[10px] uppercase font-bold tracking-widest text-pink-500">Phone</p>
              <p className="text-xs font-bold text-white group-hover:text-pink-400 transition-colors">
                {data.phone}
              </p>
            </div>
          </a>

          {/* Location Card */}
          <div className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800 border-l-2 border-l-pink-600 transition-colors flex items-center space-x-4">
            <div className="p-2.5 rounded-lg bg-pink-600/10 border border-pink-600/20 text-pink-500 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="overflow-hidden flex-1">
              <p className="text-[10px] uppercase font-bold tracking-widest text-pink-500">Location</p>
              <p className="text-xs font-bold text-white">{data.location}</p>
            </div>
          </div>

          {/* Resume Card */}
          <a
            href="#resume"
            className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800 border-l-2 border-l-pink-600 hover:border-pink-600/50 transition-all flex items-center space-x-4 group"
          >
            <div className="p-2.5 rounded-lg bg-pink-600/10 border border-pink-600/20 text-pink-500 shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <div className="overflow-hidden flex-1">
              <p className="text-[10px] uppercase font-bold tracking-widest text-pink-500">Resume</p>
              <p className="text-xs font-bold text-white group-hover:text-pink-400 transition-colors flex items-center space-x-1">
                <span>View Official Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800 border-l-2 border-l-pink-600 hover:border-pink-600/50 transition-all flex items-center space-x-4 group"
          >
            <div className="p-2.5 rounded-lg bg-pink-600/10 border border-pink-600/20 text-pink-500 shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="overflow-hidden flex-1">
              <p className="text-[10px] uppercase font-bold tracking-widest text-pink-500">LinkedIn</p>
              <p className="text-xs font-bold text-white group-hover:text-pink-400 transition-colors flex items-center space-x-1">
                <span>Gurleen Kaur</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </p>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800 border-l-2 border-l-pink-600 hover:border-pink-600/50 transition-all flex items-center space-x-4 group"
          >
            <div className="p-2.5 rounded-lg bg-pink-600/10 border border-pink-600/20 text-pink-500 shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </div>
            <div className="overflow-hidden flex-1">
              <p className="text-[10px] uppercase font-bold tracking-widest text-pink-500">GitHub</p>
              <p className="text-xs font-bold text-white group-hover:text-pink-400 transition-colors flex items-center space-x-1">
                <span>@gurleenkaur0202</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
