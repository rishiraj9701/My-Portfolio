import React from 'react';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight, FileSpreadsheet } from 'lucide-react';
import { Button } from '../ui/Button';
import { downloadResumePDF } from '../../utils/resumeGenerator';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const handleResumeClick = () => {
    downloadResumePDF();
  };

  return (
    <footer className="relative border-t border-gray-200/50 dark:border-gray-800/50 bg-white/50 dark:bg-[#090C12]/80 backdrop-blur-md overflow-hidden">
      
      {/* Dynamic line effect imitating Vercel aesthetics */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-orange-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Col 1: Bio */}
          <div className="col-span-1 md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-orange-500 to-amber-500 p-[1px]">
                <div className="w-full h-full bg-[#0B0F17] rounded-lg flex items-center justify-center text-white font-display font-medium text-xs">
                  R
                </div>
              </div>
              <span className="font-display font-semibold text-base text-gray-900 dark:text-white">
                Rishi Raj Shukla
              </span>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
              {DEVELOPER_INFO.tagline}
            </p>

            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-brand-orange-500" />
                <span>{DEVELOPER_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Phone className="w-3.5 h-3.5 text-brand-orange-500" />
                <span>{DEVELOPER_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="col-span-1 md:col-span-3 space-y-3">
            <h3 className="font-display font-semibold text-xs tracking-wider uppercase text-gray-900 dark:text-white uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="text-gray-500 hover:text-brand-orange-500 dark:text-gray-400 dark:hover:text-brand-orange-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-500 hover:text-brand-orange-500 dark:text-gray-400 dark:hover:text-brand-orange-400 transition-colors">
                  Skills Base
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-500 hover:text-brand-orange-500 dark:text-gray-400 dark:hover:text-brand-orange-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-500 hover:text-brand-orange-500 dark:text-gray-400 dark:hover:text-brand-orange-400 transition-colors">
                  My Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-500 hover:text-brand-orange-500 dark:text-gray-400 dark:hover:text-brand-orange-400 transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Documents and socials */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h3 className="font-display font-semibold text-xs tracking-wider uppercase text-gray-900 dark:text-white uppercase pb-1 border-b border-gray-100 dark:border-gray-800">
              Credentials
            </h3>
            
            <div className="flex flex-col gap-2">
              <Button 
                variant="glass" 
                size="sm" 
                onClick={handleResumeClick}
                className="w-full justify-between group py-2"
              >
                <span className="flex items-center gap-1.5 text-xs text-left">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-brand-orange-500" />
                  Review Resume
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-orange-500 transition-colors" />
              </Button>
            </div>

            <div className="flex gap-2">
              <a 
                href={DEVELOPER_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 ml-0 rounded-lg text-gray-500 dark:text-gray-400 hover:text-brand-orange-500 dark:hover:text-brand-orange-400 border border-gray-200/50 dark:border-gray-800/80 bg-white/5 dark:bg-black/10 transition"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={DEVELOPER_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-brand-orange-500 dark:hover:text-brand-orange-400 border border-gray-200/50 dark:border-gray-800/80 bg-white/5 dark:bg-black/10 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${DEVELOPER_INFO.email}`} 
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-brand-orange-500 dark:hover:text-brand-orange-400 border border-gray-200/50 dark:border-gray-800/80 bg-white/5 dark:bg-black/10 transition"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
        </div>

        {/* Legal area */}
        <div className="border-t border-gray-200/50 dark:border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-[11px] text-gray-400 dark:text-gray-500">
            &copy; {currentYear} {DEVELOPER_INFO.name}. All Rights Reserved.
          </p>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 flex items-center gap-1.5 font-mono">
            <span>Built with precision in India</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 inline-block animate-ping" />
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
