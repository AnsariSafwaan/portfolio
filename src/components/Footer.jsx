import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Footer = ({ onOpenContact }) => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-8 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-black text-sm">
              SA
            </div>
            <div className="text-left text-xs sm:text-sm text-slate-500">
              <span className="font-bold text-slate-800">{personal.name}</span>
              <span className="mx-2">·</span>
              <span>© {new Date().getFullYear()} All rights reserved.</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-500 hover:text-brand-600 hover:bg-slate-100 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-500 hover:text-brand-600 hover:bg-slate-100 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="p-2 rounded-lg text-slate-500 hover:text-brand-600 hover:bg-slate-100 transition-colors"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenContact}
              aria-label="Contact Email"
              className="p-2 rounded-lg text-slate-500 hover:text-brand-600 hover:bg-slate-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="ml-2 p-2 rounded-lg bg-brand-50 text-brand-600 hover:bg-brand-600 hover:text-white transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
