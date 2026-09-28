import React, { useState } from 'react';
import { MapPin, Mail, Phone, ArrowRight, Check, Copy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = ({ onOpenResume }) => {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft text-left">
        
        {/* Section Tag & Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="w-2 h-2 rounded-full bg-brand-600" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {personal.aboutHeadline}
          </h2>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Workspace Image */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group h-72 sm:h-80">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Developer Workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-medium bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                  ⚡ Passionate Full Stack Engineering
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Quick Info */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {personal.aboutDescription}
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 text-xs">
              {/* Location */}
              <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-slate-100 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Location</span>
                  <p className="font-semibold text-slate-800 text-xs sm:text-sm">{personal.location}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-2 bg-white rounded-xl border border-slate-100 shadow-2xs group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Email</span>
                    <p className="font-semibold text-slate-800 text-xs sm:text-sm truncate">{personal.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-slate-400 hover:text-brand-600 p-1.5 rounded"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-slate-100 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Phone</span>
                  <p className="font-semibold text-slate-800 text-xs sm:text-sm">{personal.phone}</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-3 p-2 bg-emerald-50/70 rounded-xl border border-emerald-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] text-emerald-700 font-bold uppercase">Availability</span>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm">{personal.availability}</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md shadow-brand-600/25 active:scale-[0.98] transition-all"
              >
                <span>Learn More About Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
