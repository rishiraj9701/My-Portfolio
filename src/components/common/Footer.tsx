import React from 'react';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight, FileSpreadsheet } from 'lucide-react';
import TwitterXIcon from './TwitterXIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleResumeClick = async () => {
    try {
      const { downloadResumePDF } = await import('../../utils/resumeGenerator');
      downloadResumePDF();
    } catch (error) {
      console.error('Error loading resume PDF:', error);
      window.open('/resume.pdf', '_blank');
    }
  };

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Featured Projects', href: '#projects' },
    { name: 'Skills Base', href: '#skills' },
    { name: 'Experience & Timeline', href: '#experience' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#FAF8F5]/80 dark:bg-[#0A0809]/80 backdrop-blur-md overflow-hidden">
      
      {/* Subtle top ambient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 relative z-10">
        
        {/* ============================================================== */}
        {/* Main 3-Column Desktop Layout                                  */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 text-left">
          
          {/* Column 1 — Personal Introduction */}
          <div className="md:col-span-6 lg:col-span-6 space-y-4">
            
            {/* Wordmark & Name */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#140f10] border border-orange-500/35 flex items-center justify-center text-orange-500 font-bold text-xs shrink-0 shadow-xs">
                R
              </div>
              <span className="text-base font-bold tracking-tight text-zinc-950 dark:text-white">
                {DEVELOPER_INFO.name}
              </span>
            </div>

            {/* Concise Description */}
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              Building modern, scalable, and user-focused web applications with React, Next.js, and TypeScript.
            </p>

            {/* Restrained Location & Phone details */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500 shrink-0" />
                <span>{DEVELOPER_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                <Phone className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500 shrink-0" />
                <a 
                  href={`tel:${DEVELOPER_INFO.phone}`} 
                  className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  {DEVELOPER_INFO.phone}
                </a>
              </div>
            </div>

          </div>

          {/* Column 2 — Quick Navigation */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 block">
              Quick Links
            </h3>

            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="inline-flex items-center text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Credentials and Social Links */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4 block">
              Credentials
            </h3>

            {/* Outlined Resume Button */}
            <button
              type="button"
              onClick={handleResumeClick}
              aria-label="Download Resume PDF"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-zinc-200/90 dark:border-[#281f21] bg-white dark:bg-[#130f10] text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 transition-colors group cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
            >
              <span className="flex items-center gap-2">
                <FileSpreadsheet className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500 shrink-0" />
                <span>Review Resume</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-orange-500 transition-colors" />
            </button>

            {/* Compact, evenly spaced social icon buttons */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              <a 
                href={DEVELOPER_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="h-9 rounded-xl border border-zinc-200/90 dark:border-[#281f21] bg-white dark:bg-[#130f10] flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a 
                href={DEVELOPER_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="h-9 rounded-xl border border-zinc-200/90 dark:border-[#281f21] bg-white dark:bg-[#130f10] flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a 
                href={DEVELOPER_INFO.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="h-9 rounded-xl border border-zinc-200/90 dark:border-[#281f21] bg-white dark:bg-[#130f10] flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
                title="X (Twitter) Profile"
                aria-label="X (Twitter) Profile"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>

              <a 
                href={`mailto:${DEVELOPER_INFO.email}`} 
                className="h-9 rounded-xl border border-zinc-200/90 dark:border-[#281f21] bg-white dark:bg-[#130f10] flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
                title="Email Message"
                aria-label="Email Message"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* Bottom Bar Separated by a Low-Contrast Divider                 */}
        {/* ============================================================== */}
        <div className="mt-12 pt-6 border-t border-zinc-200/80 dark:border-[#221b1c] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600 dark:text-zinc-400 text-center sm:text-left">
          <p>
            &copy; {currentYear} {DEVELOPER_INFO.name}. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1.5 font-normal">
            <span>Built with care in India.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
