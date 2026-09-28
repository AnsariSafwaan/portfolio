import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockups';
import { GithubIcon } from './SocialIcons';

export const Projects = ({ onSelectProject }) => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft text-left">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-600" />
            <span>Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/80">
          {['All', 'Full Stack', 'Frontend'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Responsive Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-soft hover:border-brand-300 transition-all flex flex-col justify-between group"
          >
            {/* Top Interactive Mockup Preview */}
            <div
              onClick={() => onSelectProject(project)}
              className="h-44 sm:h-52 bg-slate-950 p-3 relative overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
                <ProjectMockup type={project.previewType} />
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex-1 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-brand-700 border border-blue-100">
                    {project.badge}
                  </span>
                </div>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Action Links */}
              <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-800 transition-colors group/btn"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Source Code"
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    title="Source Code"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Demo"
                    className="p-1.5 rounded-lg text-slate-500 hover:text-brand-600 hover:bg-blue-50 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
