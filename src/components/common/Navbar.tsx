import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { Menu, X, FileDown, Github, Linkedin } from 'lucide-react';
import { Button } from '../ui/Button';
import TwitterXIcon from './TwitterXIcon';
import ThemeToggleIcon from './ThemeToggleIcon';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Focus', href: '#capabilities' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'experience', 'capabilities', 'contact'];
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleResumeClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const { downloadResumePDF } = await import('../../utils/resumeGenerator');
      downloadResumePDF();
    } catch (error) {
      console.error('Error loading resume PDF:', error);
      window.open('/resume.pdf', '_blank');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#FAF8F5]/90 dark:bg-[#0A0809]/90 border-b border-zinc-200/80 dark:border-[#221b1c]/80 backdrop-blur-md py-3 shadow-xs' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Brand */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 rounded-lg py-1"
            aria-label="Scroll to top"
          >
            <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-white select-none lowercase">
              {DEVELOPER_INFO.name.toLowerCase()}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs px-3 py-1.5 rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 ${
                    isActive
                      ? 'text-orange-600 dark:text-orange-400 font-semibold'
                      : 'font-medium text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Socials, Theme, Resume */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 pr-2 border-r border-zinc-200 dark:border-zinc-800">
              <a 
                href={DEVELOPER_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-1.5 rounded-md text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={DEVELOPER_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-1.5 rounded-md text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={DEVELOPER_INFO.twitter} 
                target="_blank" 
                rel="noreferrer"
                className="p-1.5 rounded-md text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500"
                title="X (Twitter)"
                aria-label="X Profile"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Dark & Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-lg text-zinc-600 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500"
            >
              <ThemeToggleIcon 
                className={`w-4 h-4 transition-transform duration-300 ${
                  theme === 'dark' ? 'rotate-180' : 'rotate-0'
                }`} 
              />
            </button>

            {/* Resume button */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleResumeClick}
              className="gap-1.5 text-xs font-medium"
            >
              <FileDown className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500" />
              Resume
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-zinc-600 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 transition-colors"
            >
              <ThemeToggleIcon 
                className={`w-4 h-4 transition-transform duration-300 ${
                  theme === 'dark' ? 'rotate-180' : 'rotate-0'
                }`} 
              />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
              className="p-2 rounded-lg border border-zinc-200 text-zinc-700 hover:text-orange-600 hover:border-orange-500/30 dark:border-zinc-800 dark:text-zinc-200 dark:hover:text-orange-400 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div 
          id="mobile-nav-drawer"
          className="md:hidden border-b border-zinc-200/90 bg-[#FAF8F5]/98 dark:bg-[#0E0C0D]/98 backdrop-blur-md px-4 pt-3 pb-6 dark:border-[#221b1c] shadow-lg transition-colors"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 ${
                    isActive
                      ? 'text-orange-600 dark:text-orange-400 font-semibold'
                      : 'font-medium text-zinc-700 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          
          <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-[#221b1c] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <a 
                href={DEVELOPER_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-md text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50" 
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={DEVELOPER_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-md text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50" 
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={DEVELOPER_INFO.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-md text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50" 
                title="X (Twitter)"
                aria-label="X (Twitter) Profile"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <Button size="sm" variant="accent" onClick={handleResumeClick} className="gap-1.5 text-xs">
              <FileDown className="w-3.5 h-3.5" />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
