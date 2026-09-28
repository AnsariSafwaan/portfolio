import React from 'react';
import { Send, ArrowRight, Sparkles } from 'lucide-react';

export const CtaBanner = ({ onOpenContact }) => {
  return (
    <section id="contact" className="relative pt-12 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating CTA Card */}
        <div className="bg-gradient-to-r from-blue-50/90 via-sky-50/80 to-blue-100/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-blue-200/80 shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-600/30">
              <Send className="w-7 h-7 -translate-x-0.5 translate-y-0.5" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Let's Work Together
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-1.5 max-w-xl leading-relaxed">
                I'm always open to new opportunities, collaborations, and interesting web projects. Feel free to reach out — I'd love to hear from you!
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 active:scale-[0.98] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 transition-all duration-200 group"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

      </div>

      {/* Mountain Landscape Silhouette Graphic (Matching Design) */}
      <div className="relative w-full -mt-16 sm:-mt-24 pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-blue-200/40"
          preserveAspectRatio="none"
        >
          {/* Back Mountain layer */}
          <path
            d="M0 240L120 180L280 260L420 120L580 220L720 150L860 210L1020 90L1180 200L1320 140L1440 210V320H0V240Z"
            fill="#dbeafe"
            opacity="0.6"
          />
          {/* Middle Mountain layer with snow peaks */}
          <path
            d="M0 260L160 160L320 240L500 130L680 230L840 120L1000 200L1160 100L1300 210L1440 170V320H0V260Z"
            fill="#bfdbfe"
            opacity="0.8"
          />
          {/* Foreground Crisp mountain layer */}
          <path
            d="M0 280L200 200L380 260L560 170L740 240L920 160L1080 230L1240 150L1380 240L1440 220V320H0V280Z"
            fill="#93c5fd"
            opacity="0.9"
          />
          {/* Subtle ice white peaks */}
          <path
            d="M500 130L470 160L530 160L500 130ZM840 120L810 155L870 155L840 120ZM1160 100L1130 140L1190 140L1160 100Z"
            fill="#ffffff"
            opacity="0.95"
          />
        </svg>
      </div>
    </section>
  );
};
