import React from 'react';
import { Code2, Layers, Lightbulb, BookOpen } from 'lucide-react';

export const ValueHighlights = () => {
  const highlights = [
    {
      title: 'Clean Code',
      desc: 'Write maintainable, scalable codebase',
      icon: Code2
    },
    {
      title: 'Modern Stack',
      desc: 'React, Node.js, MongoDB and more',
      icon: Layers
    },
    {
      title: 'Problem Solver',
      desc: 'Find efficient solutions to complex problems',
      icon: Lightbulb
    },
    {
      title: 'Continuous Learning',
      desc: 'Always exploring new technologies',
      icon: BookOpen
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
      {highlights.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-brand-300 hover:shadow-md transition-all flex items-start gap-3.5 text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-brand-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
