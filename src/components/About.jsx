import React, { useState } from 'react';
import { MapPin, Mail, Phone, ArrowRight, Check, Copy, CircleDot } from 'lucide-react';
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
    <section id="about" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] text-left">
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
          <span>About Me</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {personal.aboutHeadline}
        </h2>
      </div>

      {/* Narrative */}
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
        {personal.aboutDescription}
      </p>

      {/* Grid: Desk Image on Left + Quick Info on Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch mb-6">
        
        {/* Left: Desk Image */}
        <div className="md:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group h-48 sm:h-56">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            alt="Developer Desk Workspace"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Quick Info Box */}
        <div className="md:col-span-5 bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 flex flex-col justify-between text-xs space-y-3">
          <h3 className="font-bold text-slate-800 text-sm border-b border-slate-200/70 pb-2">
            Quick Info
          </h3>

          <div className="space-y-3">
            {/* Location */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-brand-600 flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Location</span>
                <p className="font-semibold text-slate-800">{personal.location}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start justify-between gap-2 group">
              <div className="flex items-start gap-2.5 overflow-hidden">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-brand-600 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">Email</span>
                  <p className="font-semibold text-slate-800 truncate">{personal.email}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="text-slate-400 hover:text-brand-600 p-1 rounded"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-brand-600 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Phone</span>
                <p className="font-semibold text-slate-800">{personal.phone}</p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] text-emerald-700 font-semibold uppercase">Availability</span>
                <p className="font-bold text-slate-800">{personal.availability}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Action CTA */}
      <button
        onClick={onOpenResume}
        className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-md shadow-brand-600/20 active:scale-[0.98] transition-all"
      >
        <span>Learn More About Me</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </section>
  );
};
