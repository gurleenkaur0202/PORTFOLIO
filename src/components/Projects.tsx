import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, Sparkles, FolderCode, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-xs uppercase font-bold text-pink-500 tracking-widest flex items-center justify-center gap-2">
            <span className="h-[1px] w-4 bg-pink-500"></span> Featured Portfolio
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Projects & Work
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Innovative software applications combining artificial intelligence, full-stack web engineering, and custom UI/UX design.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/60 rounded-xl border border-zinc-800 hover:border-pink-600/50 overflow-hidden transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale contrast-110 group-hover:grayscale-0 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-zinc-900/90 border border-zinc-800 text-pink-400 text-[10px] font-bold uppercase tracking-wider">
                  {project.category}
                </span>

                {/* Featured Badge */}
                {project.featured && (
                  <span className="absolute top-3 right-3 p-1 rounded bg-pink-600 text-white shadow-md" title="Featured Project">
                    <Sparkles className="w-3 h-3" />
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-pink-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-pink-500" />
                  </h3>
                  
                  <p className="text-xs text-pink-500 font-medium mt-0.5">
                    "{project.tagline}"
                  </p>

                  <p className="text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[10px] text-gray-500 bg-zinc-900">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
                  <button
                    id={`view-project-details-${project.id}`}
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 py-1.5 px-3 rounded bg-pink-600/10 hover:bg-pink-600 text-pink-400 hover:text-white border border-pink-600/30 text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>

                  {project.githubUrl && (
                    <a
                      id={`github-link-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-gray-400 hover:text-pink-400 border border-zinc-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      id={`demo-link-${project.id}`}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-gray-400 hover:text-pink-400 border border-zinc-800 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Project Modal Container */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
