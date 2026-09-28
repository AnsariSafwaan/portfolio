import React from 'react';
import { Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft text-left">
        
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="w-2 h-2 rounded-full bg-brand-600" />
            <span>Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-200 ml-2 sm:ml-4 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group text-left">
              
              {/* Connected Dot on Timeline */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-white ${
                  exp.isCurrent ? 'bg-brand-600 ring-4 ring-brand-100' : 'bg-brand-500'
                }`}
              />

              {/* Card */}
              <div className="bg-slate-50/70 hover:bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-brand-600 font-semibold text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-600 text-xs font-semibold border border-slate-200 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-sm text-slate-600">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                {exp.technologies && (
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md bg-blue-50 text-brand-700 text-xs font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
