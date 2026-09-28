import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockups';
import { GithubIcon } from './SocialIcons';

export const Projects = ({ onSelectProject }) => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-600" />
              Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200/80 shadow-xs">
            {['All', 'Full Stack', 'Frontend'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  filter === category
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (2 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-soft-lg hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group text-left"
            >
              {/* Top Interactive Mockup / Preview Banner */}
              <div
                onClick={() => onSelectProject(project)}
                className="relative h-48 sm:h-56 bg-slate-950 overflow-hidden cursor-pointer p-3.5 group-hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-inner">
                  <ProjectMockup type={project.previewType} />
                </div>

                {/* Overlay hover cue */}
                <div className="absolute inset-0 bg-brand-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-white text-brand-600 font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                      {project.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium text-xs border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-800 transition-colors group/btn"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                      title="Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="p-2 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
