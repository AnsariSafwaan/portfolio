import React from 'react';
import { CheckCircle2, TrendingUp, Boxes, Heart } from 'lucide-react';

export const Stats = () => {
  const statsList = [
    { value: '4+', label: 'Projects Completed', icon: CheckCircle2 },
    { value: '1+', label: 'Years of Experience', icon: TrendingUp },
    { value: '12+', label: 'Technologies Used', icon: Boxes },
    { value: '100%', label: 'Passion & Dedication', icon: Heart },
  ];

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft text-left">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-brand-600" />
          <span>My Journey</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Numbers Speak
        </h2>
      </div>

      {/* 4 Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsList.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all flex flex-col items-start group"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-0.5">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
