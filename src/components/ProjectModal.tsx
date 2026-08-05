import React from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="project-modal-card"
        className="relative max-w-3xl w-full bg-[#0a0a0a] rounded-xl border border-zinc-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800 bg-zinc-900/60">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">
              Project Showcase
            </span>
          </div>
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-1 rounded text-gray-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Image Header */}
          <div className="relative aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-3">
              <span className="px-2.5 py-0.5 rounded bg-pink-600 text-white font-bold text-[10px] uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs font-semibold text-pink-500 mt-0.5">
              "{project.tagline}"
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2 text-xs text-gray-300 leading-relaxed">
            <p>{project.description}</p>
            {project.longDescription && (
              <p className="text-gray-400">{project.longDescription}</p>
            )}
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-pink-500">
              Technologies & Tools Used:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-900 text-gray-300 border border-zinc-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-zinc-800 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                id="modal-live-demo-link"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-pink-600 hover:bg-pink-700 text-white font-bold text-[10px] uppercase tracking-widest transition-all flex items-center space-x-1.5 shadow-sm"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                id="modal-github-code-link"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-zinc-900 hover:bg-zinc-800 text-gray-300 border border-zinc-800 font-bold text-[10px] uppercase tracking-widest transition-all flex items-center space-x-1.5"
              >
                <Github className="w-3.5 h-3.5 text-pink-500" />
                <span>View Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
