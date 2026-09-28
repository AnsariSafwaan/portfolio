import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Skills = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Language', 'Styling', 'Version Control', 'Deployment'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft text-left">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2.5">
              <span className="w-2 h-2 rounded-full bg-brand-600" />
              <span>Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              My Technical Skills
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/80">
            {['All', 'Frontend', 'Backend', 'Database', 'Language'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-white p-2.5 shadow-xs border border-slate-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <TechIcon name={skill.icon || skill.name} className="w-7 h-7" />
              </div>
              <span className="font-bold text-slate-800 text-sm group-hover:text-brand-600 transition-colors">
                {skill.name}
              </span>
              <span className="text-xs text-slate-400 font-medium mt-0.5">
                {skill.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
