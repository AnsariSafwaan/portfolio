import React from 'react';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockups';

export const Projects = ({ onSelectProject }) => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] text-left">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
            <span>Projects</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
        </div>

        <a
          href="#projects"
          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 2x2 Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden cursor-pointer group"
          >
            {/* Mockup Preview Area */}
            <div className="h-32 bg-slate-950 p-2 relative overflow-hidden">
              <div className="w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-inner">
                <ProjectMockup type={project.previewType} />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 text-[10px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:text-brand-700">
                  <span>View Project</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
