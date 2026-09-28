import React from 'react';
import { CheckCircle2, TrendingUp, Boxes, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const statIcons = {
  CheckCircle2: CheckCircle2,
  TrendingUp: TrendingUp,
  Boxes: Boxes,
  Heart: Heart,
};

export const Stats = () => {
  const { stats } = portfolioData;

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-600" />
            My Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Numbers Speak
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComp = statIcons[stat.icon] || CheckCircle2;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-brand-300 transition-all duration-300 flex flex-col items-start text-left group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
