import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TechIcon } from './TechIcons';

export const Skills = () => {
  const row1 = [
    { name: 'React', category: 'Frontend', icon: 'react' },
    { name: 'Next.js', category: 'Frontend', icon: 'nextjs' },
    { name: 'JavaScript', category: 'Language', icon: 'javascript' },
    { name: 'TypeScript', category: 'Language', icon: 'typescript' },
    { name: 'Node.js', category: 'Backend', icon: 'nodejs' },
    { name: 'Express.js', category: 'Backend', icon: 'express' },
    { name: 'MySQL', category: 'Database', icon: 'mysql' },
  ];

  const row2 = [
    { name: 'Tailwind CSS', category: 'Styling', icon: 'tailwind' },
    { name: 'Git & GitHub', category: 'Version Control', icon: 'git' },
    { name: 'Postman', category: 'API Testing', icon: 'postman' },
    { name: 'Docker', category: 'Deployment', icon: 'docker' },
  ];

  return (
    <section id="skills" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] text-left">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
            <span>Skills</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            My Technical Skills
          </h2>
        </div>

        <a
          href="#skills"
          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors"
        >
          <span>View All Skills</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 mb-3">
        {row1.map((skill) => (
          <div
            key={skill.name}
            className="bg-slate-50/70 hover:bg-white rounded-2xl p-3.5 border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-white p-2 shadow-xs border border-slate-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <TechIcon name={skill.icon} className="w-6 h-6" />
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-brand-600 transition-colors truncate w-full">
              {skill.name}
            </span>
            <span className="text-[10px] text-slate-400 font-medium mt-0.5">
              {skill.category}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3">
        {row2.map((skill) => (
          <div
            key={skill.name}
            className="bg-slate-50/70 hover:bg-white rounded-2xl p-3.5 border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-white p-2 shadow-xs border border-slate-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <TechIcon name={skill.icon} className="w-6 h-6" />
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-brand-600 transition-colors truncate w-full">
              {skill.name}
            </span>
            <span className="text-[10px] text-slate-400 font-medium mt-0.5">
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
