import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const { personal, skills, experiences, projects } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {}
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-8 sticky top-0 bg-white/95 backdrop-blur-md pt-2 z-10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-600" />
            <h3 className="text-lg font-bold text-slate-900">Curriculum Vitae Preview</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="space-y-8 print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              {personal.name}
            </h1>
            <p className="text-brand-600 font-bold text-lg mt-0.5">
              {personal.role}
            </p>

            <div className="flex flex-wrap gap-4 mt-4 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {personal.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {personal.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                Portfolio Website
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">
              Professional Summary
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Results-oriented Full Stack Developer specializing in React, Next.js, Node.js, Express, and modern database architectures. Experienced in translating design wireframes into high-performance, accessible, and responsive user interfaces, as well as architecting scalable REST APIs and full-stack solutions.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-3">
              Core Competencies & Technologies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Frontend:</span>
                <span className="text-slate-600 ml-1">React, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5/CSS3</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Backend & APIs:</span>
                <span className="text-slate-600 ml-1">Node.js, Express.js, RESTful APIs, JWT Auth, Microservices</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Databases:</span>
                <span className="text-slate-600 ml-1">MongoDB, Mongoose, MySQL, PostgreSQL, Prisma ORM</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">DevOps & Tools:</span>
                <span className="text-slate-600 ml-1">Git, GitHub, Docker, Postman, Vercel, Vite, NPM</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-4">
              Work Experience
            </h4>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-slate-900">{exp.role} <span className="font-normal text-slate-500">at</span> <span className="text-brand-600 font-semibold">{exp.company}</span></span>
                    <span className="text-xs text-slate-500 font-semibold">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 mt-2">
                    {exp.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-3">
              Selected Projects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                  <p className="font-bold text-slate-900">{proj.title}</p>
                  <p className="text-slate-600 mt-1">{proj.description}</p>
                  <p className="text-[11px] text-brand-600 font-medium mt-2">
                    Stack: {proj.tags.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-slate-200 pt-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">
              Education & Certifications
            </h4>
            <div className="flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-slate-800">Bachelor of Computer Applications / Computer Science</p>
                <p className="text-slate-500">Graduated with Distinction</p>
              </div>
              <span className="text-slate-500 font-semibold">2020 - 2023</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
