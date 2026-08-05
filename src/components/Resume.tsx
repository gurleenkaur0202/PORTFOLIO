import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Check, Copy, Eye } from 'lucide-react';
import { ProfileData } from '../types';

interface ResumeProps {
  data: ProfileData;
  onUpdateResumeUrl?: (newUrl: string) => void;
}

export const Resume: React.FC<ResumeProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'text' | 'view'>('text');

  const handleCopyText = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Convert Google Drive view links to embeddable preview links if needed
  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com/file/d/')) {
      const match = url.match(/\/d\/([^\/]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }
    return `${url}#toolbar=1&navpanes=0`;
  };

  return (
    <section id="resume" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-xs uppercase font-bold text-pink-500 tracking-widest flex items-center justify-center gap-2">
            <span className="h-[1px] w-4 bg-pink-500"></span> Curriculum Vitae
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Official Resume
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            View Gurleen's structured resume or download the complete document in PDF format.
          </p>
        </div>

        {/* Action Controls Bar */}
        <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800 mb-6 flex flex-wrap items-center justify-between gap-3">
          
          {/* Tab Switcher */}
          <div className="flex items-center space-x-1 bg-[#0a0a0a] p-1 rounded-lg border border-zinc-800">
            <button
              id="resume-tab-formatted-text"
              onClick={() => setActiveTab('text')}
              className={`px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'text'
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Formatted Web View</span>
            </button>
            <button
              id="resume-tab-pdf-view"
              onClick={() => setActiveTab('view')}
              className={`px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'view'
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>PDF Document</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <a
              id="download-resume-direct-btn"
              href={data.resumePdfUrl}
              download="Gurleen_Kaur_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded bg-pink-600 hover:bg-pink-700 text-white font-bold text-[10px] uppercase tracking-widest flex items-center space-x-1.5 transition-all cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV PDF</span>
            </a>
          </div>
        </div>

        {/* Tab 1: Formatted Text Web Resume */}
        {activeTab === 'text' ? (
          <div className="bg-zinc-900/60 rounded-xl border border-zinc-800 p-6 space-y-6 text-gray-200">
            {/* Header */}
            <div className="border-b border-zinc-800 pb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">GURLEEN KAUR</h3>
                <p className="text-xs font-bold text-pink-500 uppercase tracking-widest mt-0.5">Faridabad / Gurugram, Haryana, India</p>
                <p className="text-xs text-gray-400 mt-0.5">kaurgurleen0202@gmail.com | +91-8178126477</p>
              </div>
              <button
                onClick={handleCopyText}
                className="px-3 py-1.5 rounded bg-zinc-900 text-pink-400 border border-zinc-800 text-[10px] font-bold uppercase tracking-widest flex items-center space-x-1.5 hover:bg-pink-600 hover:text-white transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Data!' : 'Copy Summary'}</span>
              </button>
            </div>

            {/* Content summary blocks */}
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold text-pink-500 uppercase tracking-widest mb-2">Education</h4>
                <div className="bg-[#0a0a0a] p-3.5 rounded border border-zinc-800">
                  <p className="font-bold text-white text-xs">K.R. Mangalam University — B.Tech CSE (2023–2027)</p>
                  <p className="text-xs text-gray-400 mt-0.5">CGPA: 7.0 / 10 | Relevant Coursework: Data Structures, DBMS, OOP, Data Analysis</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-pink-500 uppercase tracking-widest mb-2">Experience</h4>
                <div className="space-y-2">
                  <div className="bg-[#0a0a0a] p-3.5 rounded border border-zinc-800">
                    <p className="font-bold text-white text-xs">LLM Post-Training Intern — Ethara.ai (April 2026–Aug 2026)</p>
                    <p className="text-xs text-gray-400 mt-0.5">Prompt Engineering, Model Evaluation, AI Alignment on Talos & Fenrir models.</p>
                  </div>
                  <div className="bg-[#0a0a0a] p-3.5 rounded border border-zinc-800">
                    <p className="font-bold text-white text-xs">Front-End Developer Intern — Writo Education Pvt. Ltd (June 2025–Aug 2025)</p>
                    <p className="text-xs text-gray-400 mt-0.5">Designed & developed OPS Naturals official website using HTML, CSS, JS and UI/UX mockups.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-pink-500 uppercase tracking-widest mb-2">Projects</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Yggdrasil (Journal/Productivity), ByteStock (Android GST Inventory), ProTrack (Collaborative Workspace), Punjab Fabricators (Interior Design), OPS Naturals Web Platform.</p>
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: PDF Viewer Embed */
          <div className="bg-zinc-900/60 rounded-xl border border-zinc-800 overflow-hidden p-2 sm:p-3">
            <div className="relative w-full aspect-[8.5/11] min-h-[500px] sm:min-h-[700px] rounded-lg overflow-hidden bg-[#0a0a0a]">
              <iframe
                src={getEmbedUrl(data.resumePdfUrl)}
                title="Gurleen Kaur Resume PDF"
                className="w-full h-full border-0"
              />
              <div className="absolute top-3 right-3 bg-[#0a0a0a]/90 backdrop-blur-md px-2.5 py-1 rounded border border-zinc-800 text-[10px] text-pink-400 font-bold uppercase tracking-wider flex items-center space-x-1">
                <ExternalLink className="w-3 h-3" />
                <a href={data.resumePdfUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Open PDF in New Tab
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
