import React from 'react';
import { Code2, Layers, Lightbulb, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Layers: Layers,
  Lightbulb: Lightbulb,
  BookOpen: BookOpen,
};

export const ValueHighlights = () => {
  const { valueHighlights } = portfolioData;

  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {valueHighlights.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code2;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-brand-300 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
