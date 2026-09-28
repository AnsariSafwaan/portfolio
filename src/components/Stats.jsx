import React from 'react';
import { CheckCircle2, FileCode2, Layers, Heart } from 'lucide-react';

export const Stats = () => {
  const statsList = [
    { value: '4+', label: 'Projects Completed', icon: CheckCircle2 },
    { value: '1+', label: 'Years of Learning', icon: FileCode2 },
    { value: '5+', label: 'Technologies Used', icon: Layers },
    { value: '100%', label: 'Passion & Dedication', icon: Heart },
  ];

  return (
    <section className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] text-left">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
          <span>My Journey</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Numbers Speak
        </h2>
      </div>

      {/* 4 Stats in a row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {statsList.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl p-3.5 border border-slate-200/80 flex flex-col items-start justify-between text-left group hover:border-brand-300 transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-100/70 text-brand-600 flex items-center justify-center mb-2">
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
