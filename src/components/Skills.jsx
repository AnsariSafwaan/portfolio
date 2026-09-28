import React, { useState } from 'react';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Skills = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Language', 'Styling', 'Version Control', 'Deployment'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-600" />
              Skills
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              My Technical Skills
            </h2>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex items-center flex-wrap gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200/80 shadow-xs">
            {['All', 'Frontend', 'Backend', 'Database'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-brand-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group relative overflow-hidden"
            >
              {/* Top ambient color dot */}
              <div
                className="w-1.5 h-1.5 rounded-full absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: skill.color }}
              />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3 mb-3 group-hover:scale-110 group-hover:bg-brand-50/50 transition-all duration-300">
                <TechIcon name={skill.icon || skill.name} className="w-8 h-8" />
              </div>

              {/* Title & Category */}
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-brand-600 transition-colors">
                {skill.name}
              </h3>
              <span className="text-[11px] font-medium text-slate-400 mt-0.5">
                {skill.category}
              </span>

              {/* Hover skill level bar */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="h-full rounded-full bg-brand-600 transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Detail Popup / Drawer */}
        {selectedSkill && (
          <div className="mt-6 bg-brand-50/80 border border-brand-200/80 rounded-2xl p-4 sm:p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in duration-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white p-2.5 shadow-xs border border-brand-100 flex items-center justify-center">
                <TechIcon name={selectedSkill.icon || selectedSkill.name} className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-900 text-base">{selectedSkill.name}</h4>
                  <span className="text-xs bg-brand-100 text-brand-700 font-semibold px-2.5 py-0.5 rounded-full">
                    {selectedSkill.category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">{selectedSkill.description}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="text-xs font-semibold text-brand-600 hover:text-brand-800 self-end sm:self-center px-3 py-1.5 bg-white rounded-lg border border-brand-200 shadow-xs"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
