import React, { useState } from 'react';
import { ArrowRight, Mail, Check, Copy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Hero = ({ onOpenContact }) => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(personal.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-8 lg:pt-28 lg:pb-10 overflow-hidden">
      {/* Background Soft Radiant Gradient Orbs */}
      <div className="absolute top-10 left-1/3 -z-10 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 -z-10 w-[400px] h-[400px] bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-4 text-left">
            {/* Greeting Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-brand-600 font-semibold text-xs tracking-wide">
              <span>Hello, I'm</span>
            </div>

            {/* Name & Role */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Safwaan <span className="text-brand-600">Ansari</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight pt-0.5">
                Full Stack Developer
              </h2>
            </div>

            {/* Short Bio */}
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              I build modern, scalable and user-friendly web applications using the latest technologies. Passionate about solving real-world problems through clean code and innovative solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-md shadow-brand-600/25 active:scale-[0.98] transition-all group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center font-semibold text-sm px-6 py-2.5 rounded-full border border-slate-300 hover:border-brand-600 text-slate-700 hover:text-brand-600 bg-white hover:bg-blue-50/50 transition-all active:scale-[0.98]"
              >
                Contact Me
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-600 flex items-center justify-center transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-600 flex items-center justify-center transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenContact}
                aria-label="Send Email"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-600 flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Hero Column: Male Developer Portrait + Code Snippet + Floating Badge */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 lg:w-[360px]">
              
              {/* Radial blue aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 via-sky-300/30 to-blue-600/10 rounded-full blur-2xl transform scale-110" />

              {/* Developer Portrait with male photo in black hoodie */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-blue-100/80 via-sky-50 to-slate-100 shadow-xl border border-white">
                <div className="relative aspect-[3/4] overflow-hidden flex items-end justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
                    alt="Safwaan Ansari - Full Stack Developer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Bottom subtle gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Top Right Floating Pill */}
              <div className="absolute -top-3 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-md flex items-center gap-2 z-20">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <div className="text-left">
                  <p className="text-[10px] font-semibold text-slate-400 uppercase leading-none">Turning ideas</p>
                  <p className="text-xs font-bold text-slate-800 leading-tight mt-0.5">into real solutions</p>
                </div>
              </div>

              {/* Bottom Right Floating Dark Code Snippet Box */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 max-w-[240px] sm:max-w-[260px] bg-[#0f172a]/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-slate-700/60 text-left text-xs font-mono text-slate-200 z-20">
                <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800 text-[9px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="ml-1 text-slate-400 font-sans">developer.js</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <div className="space-y-0.5 text-[10px] leading-relaxed">
                  <p><span className="text-purple-400">const</span> <span className="text-sky-300">developer</span> = {'{'}</p>
                  <p className="pl-2.5"><span className="text-slate-400">name:</span> <span className="text-amber-300">"Safwaan Ansari"</span>,</p>
                  <p className="pl-2.5"><span className="text-slate-400">role:</span> <span className="text-amber-300">"Full Stack Developer"</span>,</p>
                  <p className="pl-2.5"><span className="text-slate-400">skills:</span> [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"FastAPI"</span>,</p>
                  <p className="pl-7"><span className="text-emerald-300">"Next.js"</span>, <span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"MS SQL"</span>]</p>
                  <p>{'};'}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
