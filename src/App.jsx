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
      
      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* 4 Feature Value Highlights */}
        <ValueHighlights />

        {/* About Section with Quick Info */}
        <About
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Technical Skills Bento Grid */}
        <Skills />

        {/* Featured Projects with UI Mockups */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Numbers Speak / Stats Counter */}
        <Stats />

        {/* Work Experience Timeline */}
        <Experience />

        {/* CTA Banner with Mountain Landscape Silhouette */}
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
