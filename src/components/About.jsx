import React, { useState } from 'react';
import { MapPin, Mail, Phone, Sparkles, ArrowRight, Check, Copy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = ({ onOpenResume, onOpenContact }) => {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-600" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {personal.aboutHeadline}
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image + Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Workspace Desk Photo Mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Workspace setup with code on screen"
                className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs sm:text-sm font-medium bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                  ⚡ Passionate about clean code and modern developer tooling
                </span>
              </div>
            </div>

            {/* Narrative text */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {personal.aboutDescription}
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full shadow-md shadow-brand-600/20 active:scale-[0.98] transition-all duration-200"
              >
                <span>Learn More About Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Quick Info Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 text-left relative overflow-hidden">
              
              {/* Top gradient stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-600 via-sky-500 to-indigo-600" />

              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span>Quick Info</span>
              </h3>

              <div className="space-y-5">
                
                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Location</span>
                    <p className="text-slate-800 font-semibold text-sm sm:text-base mt-0.5">{personal.location}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start justify-between gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</span>
                      <p className="text-slate-800 font-semibold text-sm sm:text-base mt-0.5">{personal.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-slate-400 hover:text-brand-600 p-2 rounded-lg hover:bg-brand-50 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phone</span>
                    <p className="text-slate-800 font-semibold text-sm sm:text-base mt-0.5">{personal.phone}</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 relative">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 relative" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Availability</span>
                    <p className="text-emerald-900 font-bold text-sm sm:text-base mt-0.5">{personal.availability}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
