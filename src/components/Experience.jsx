import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] text-left">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
          <span>Experience</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Work Experience
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 border-l-2 border-brand-200 ml-2 space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group text-left">
            
            {/* Dot on timeline */}
            <div
              className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white ${
                exp.isCurrent ? 'bg-brand-600 ring-4 ring-brand-100' : 'bg-brand-500'
              }`}
            />

            {/* Header: Period & Role */}
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-brand-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                {exp.period}
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-900">
              {exp.role}
            </h3>
            <p className="text-xs font-medium text-slate-500 mb-2">
              {exp.company}
            </p>

            {/* Bullet points */}
            <ul className="space-y-1.5 text-xs text-slate-600">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
