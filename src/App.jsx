import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueHighlights } from './components/ValueHighlights';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Stats } from './components/Stats';
import { Experience } from './components/Experience';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-brand-500 selection:text-white relative">
      
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Container */}
      <main>
        {/* Full-width Hero Section */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* 2-Column Split Bento Dashboard Layout matching the design */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-start">
            
            {/* Left Column (Feature highlights, About Me, Technical Skills) */}
            <div className="lg:col-span-7 space-y-6">
              <ValueHighlights />
              <About onOpenResume={() => setIsResumeOpen(true)} />
              <Skills />
            </div>

            {/* Right Column (Featured Projects 2x2, Numbers Speak, Work Experience) */}
            <div className="lg:col-span-5 space-y-6">
              <Projects onSelectProject={(project) => setSelectedProject(project)} />
              <Stats />
              <Experience />
            </div>

          </div>
        </div>

        {/* Full-width CTA Banner with mountain scenery */}
        <CtaBanner onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

export default App;
