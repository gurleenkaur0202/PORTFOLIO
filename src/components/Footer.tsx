import React from 'react';
import { ProfileData } from '../types';
import { Linkedin, Github, Mail, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  data: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-800/80 pt-12 pb-10 text-gray-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-zinc-800/80 items-center">
          
          <div className="md:col-span-6 space-y-2">
            <a href="#" className="text-xl font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>Gurleen Kaur</span>
              <span className="text-pink-600 font-extrabold text-xl">.</span>
            </a>
            <p className="text-xs text-gray-400 max-w-md">
              Computer Science Engineer specializing in Full Stack Web Development, AI LLM Post-Training, and UI/UX Design.
            </p>
          </div>

          {/* Signature Quote */}
          <div className="md:col-span-6 text-left md:text-right">
            <p className="text-base font-medium text-pink-500">
              "Start of something powerful ~ GK."
            </p>
            <p className="text-[11px] text-gray-500 mt-0.5">Gurugram / Faridabad, Haryana, India</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()} Gurleen Kaur. All rights reserved.</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="hover:text-pink-400 transition-colors"
              aria-label="Email Gurleen"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-zinc-900 hover:bg-pink-600 text-gray-300 hover:text-white border border-zinc-800 transition-all cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
