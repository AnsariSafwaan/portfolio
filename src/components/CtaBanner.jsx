import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

export const CtaBanner = ({ onOpenContact }) => {
  return (
    <section id="contact" className="relative pt-8 pb-0 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating CTA Banner */}
        <div className="bg-gradient-to-r from-blue-50/90 via-sky-50/80 to-blue-100/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-blue-200/80 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-600/25">
              <Send className="w-5 h-5 -translate-x-0.5 translate-y-0.5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Let's Work Together
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                I'm always open to new opportunities and interesting projects. Feel free to reach out — I'd love to hear from you!
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 active:scale-[0.98] text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 transition-all group"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

      </div>

      {/* Mountain Landscape Silhouette Graphic */}
      <div className="relative w-full -mt-10 sm:-mt-16 pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 1440 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-blue-200/40"
          preserveAspectRatio="none"
        >
          {/* Back Mountain layer */}
          <path
            d="M0 200L120 150L280 220L420 90L580 180L720 120L860 170L1020 70L1180 160L1320 110L1440 170V280H0V200Z"
            fill="#dbeafe"
            opacity="0.6"
          />
          {/* Middle Mountain layer with snow peaks */}
          <path
            d="M0 220L160 130L320 200L500 100L680 190L840 90L1000 170L1160 80L1300 170L1440 140V280H0V220Z"
            fill="#bfdbfe"
            opacity="0.8"
          />
          {/* Foreground Crisp mountain layer */}
          <path
            d="M0 240L200 160L380 220L560 140L740 200L920 130L1080 190L1240 120L1380 200L1440 180V280H0V240Z"
            fill="#93c5fd"
            opacity="0.9"
          />
          {/* Ice white peaks */}
          <path
            d="M500 100L470 130L530 130L500 100ZM840 90L810 125L870 125L840 90ZM1160 80L1130 115L1190 115L1160 80Z"
            fill="#ffffff"
            opacity="0.95"
          />
        </svg>
      </div>
    </section>
  );
};
