import React, { useState } from 'react';
import { ArrowRight, Mail, Check, Copy, Sparkles } from 'lucide-react';
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
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-12 left-1/4 -z-10 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-28 right-10 -z-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200/60 text-brand-600 font-semibold text-sm shadow-xs animate-in fade-in duration-500">
              <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
              <span>{personal.greeting}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                <span className="text-brand-600">{personal.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
                {personal.role}
              </h2>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personal.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2.5 bg-brand-600 hover:bg-brand-700 active:scale-[0.98] text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-brand-600/25 transition-all duration-200 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center font-semibold px-6 py-3.5 rounded-full border-2 border-slate-300 hover:border-brand-600 text-slate-700 hover:text-brand-600 bg-white hover:bg-brand-50/50 transition-all duration-200 active:scale-[0.98]"
              >
                Contact Me
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80 w-full sm:w-auto">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl text-slate-600 hover:text-brand-600 hover:bg-brand-50 border border-transparent hover:border-brand-100 transition-all duration-200"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl text-slate-600 hover:text-brand-600 hover:bg-brand-50 border border-transparent hover:border-brand-100 transition-all duration-200"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personal.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X Profile"
                className="p-2.5 rounded-xl text-slate-600 hover:text-brand-600 hover:bg-brand-50 border border-transparent hover:border-brand-100 transition-all duration-200"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <button
                onClick={onOpenContact}
                aria-label="Send Email"
                className="p-2.5 rounded-xl text-slate-600 hover:text-brand-600 hover:bg-brand-50 border border-transparent hover:border-brand-100 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Profile Visual & Floating Elements */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Main Avatar Container with Glow */}
            <div className="relative w-72 sm:w-84 lg:w-96">
              
              {/* Radiant back aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-sky-400/30 rounded-full blur-2xl transform scale-110" />

              {/* Developer Profile Card / Illustration */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-blue-100/60 to-slate-100 p-2 shadow-xl border border-white/80">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-sky-100 via-blue-50 to-slate-200 flex items-center justify-center">
                  
                  {/* Photo or Realistic SVG Avatar */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt={personal.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  
                  {/* Subtle inner overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge (Top Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/50 flex items-center gap-2.5 animate-float">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 fill-amber-400 text-amber-500" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-slate-500 leading-none">Turning ideas</p>
                  <p className="text-xs font-bold text-slate-800 leading-tight mt-0.5">into real solutions</p>
                </div>
              </div>

              {/* Floating Dark Code Card (Bottom Right / Offset) */}
              <div className="absolute -bottom-6 -right-2 sm:-right-8 sm:-bottom-8 max-w-[260px] sm:max-w-[290px] bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-800 text-left text-xs font-mono text-slate-300">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-1 text-slate-400 font-sans">developer.js</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="hover:text-white p-1 rounded transition-colors"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="space-y-0.5 text-[11px] leading-relaxed">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                  <p className="pl-3"><span className="text-sky-300">name:</span> <span className="text-emerald-300">"Safwaan Ansari"</span>,</p>
                  <p className="pl-3"><span className="text-sky-300">role:</span> <span className="text-emerald-300">"Full Stack Dev"</span>,</p>
                  <p className="pl-3"><span className="text-sky-300">skills:</span> [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node.js"</span>, <span className="text-amber-300">"Next.js"</span>, <span className="text-amber-300">"MongoDB"</span>]</p>
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
