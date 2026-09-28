import React from 'react';
import { X, ExternalLink, CheckCircle, Sparkles, Layers } from 'lucide-react';
import { ProjectMockup } from './ProjectMockups';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center shadow-md hover:scale-105 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Preview Banner */}
        <div className="h-64 sm:h-72 bg-slate-950 p-4 relative rounded-t-3xl overflow-hidden">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <ProjectMockup type={project.previewType} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-100">
                {project.category}
              </span>
              <span className="text-xs font-semibold text-slate-400">·</span>
              <span className="text-xs text-slate-500 font-medium">Production Ready</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {project.title}
            </h3>
            <p className="text-slate-600 text-base mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>Key Highlights & Features</span>
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-600" />
              <span>Tech Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-xl bg-blue-50 text-brand-700 font-semibold text-xs border border-brand-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md shadow-brand-600/30"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Preview</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
