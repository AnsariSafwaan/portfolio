import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-600" />
            Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Experience
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 text-left border-l-2 border-brand-200/80 ml-2 sm:ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-4 border-white transition-transform duration-300 group-hover:scale-125 ${
                  exp.isCurrent ? 'bg-brand-600 ring-4 ring-brand-100' : 'bg-brand-400'
                }`}
              />

              {/* Experience Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-brand-300 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-brand-600 font-semibold text-sm sm:text-base mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold self-start sm:self-auto border border-slate-200/60">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-slate-600 text-sm sm:text-base">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                {exp.technologies && (
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-blue-50/70 text-brand-700 text-xs font-semibold border border-brand-100/60"
                      >
                        {tech}
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
