import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const { personal, skills, experiences, projects, education } = portfolioData;

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
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions bar */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200 mb-6 sticky top-0 bg-white/95 backdrop-blur-md pt-2 z-10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-600" />
            <h3 className="text-lg font-bold text-slate-900">Safwaan Ansari — Curriculum Vitae</h3>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="./Safwaan_Ansari_Resume.pdf"
              download="Safwaan_Ansari_Resume.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-md shadow-brand-600/30 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Resume</span>
            </a>
            
            <a
              href="./Safwaan_Ansari_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable / Formatted Resume Content */}
        <div className="space-y-6 text-slate-800">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-5 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              SAFWAAN ANSARI
            </h1>
            <p className="text-brand-600 font-bold text-lg mt-0.5">
              Full Stack Developer
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-600" />
                {personal.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-600" />
                {personal.email}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-2 text-xs font-medium text-brand-600">
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn: linkedin.com/in/ansarisafwaan
              </a>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noreferrer" className="hover:underline">
                GitHub: github.com/AnsariSafwaan
              </a>
              <span>•</span>
              <a href="https://ansarisafwaan.github.io/portfolio/" target="_blank" rel="noreferrer" className="hover:underline">
                Portfolio: ansarisafwaan.github.io/portfolio/
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-1.5">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {personal.aboutDescription}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">
              Technical Skills
            </h4>
            <div className="space-y-1.5 text-xs">
              <p><span className="font-bold text-slate-900">Languages:</span> Python, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3</p>
              <p><span className="font-bold text-slate-900">Frontend:</span> Next.js, React.js, Bootstrap, Tailwind CSS, Responsive Web Design, JSON/API Integration</p>
              <p><span className="font-bold text-slate-900">Backend & APIs:</span> FastAPI, SQLAlchemy (ORM), RESTful APIs, JWT Authentication, SMTP Integration, Node.js</p>
              <p><span className="font-bold text-slate-900">Databases:</span> Microsoft SQL Server (MS SQL), MySQL, MongoDB</p>
              <p><span className="font-bold text-slate-900">Tools & Workflow:</span> Git, GitHub, Postman, VS Code, Docker</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-3">
              Professional Experience
            </h4>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="text-left bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-900">{exp.role} <span className="font-normal text-slate-500">—</span> <span className="text-brand-600 font-semibold">{exp.company}</span></span>
                    <span className="text-xs text-slate-500 font-semibold">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 mt-2">
                    {exp.points.map((p, i) => (
                      <li key={i} className="leading-relaxed">{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-3">
              Key Projects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3 bg-slate-50/70 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-bold text-slate-900">{proj.title}</p>
                  </div>
                  <p className="text-[11px] text-brand-600 font-semibold mb-1.5">
                    Tech: {proj.tags.join(', ')}
                  </p>
                  <p className="text-slate-600 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-slate-200 pt-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">
              Education
            </h4>
            <div className="space-y-2 text-xs">
              {education && education.map((edu, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900">{edu.degree}</p>
                    <p className="text-slate-500">{edu.institution}</p>
                  </div>
                  <span className="text-slate-500 font-semibold mt-0.5 sm:mt-0">{edu.completed}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
