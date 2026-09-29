import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Skills = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Languages', 'Frontend', 'Backend & APIs', 'Databases', 'Tools & Workflow'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft text-left">
      {/* Section Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-600" />
            <span>Skills</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            My Technical Skills
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center flex-wrap gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-slate-50/70 hover:bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-white p-2 shadow-2xs border border-slate-100 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <TechIcon name={skill.icon || skill.name} className="w-6 h-6" />
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-brand-600 transition-colors">
              {skill.name}
            </span>
            <span className="text-[11px] text-slate-400 font-medium mt-0.5">
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
