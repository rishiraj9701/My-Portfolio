import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { Sun, Moon, Menu, X, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Button';
import { downloadResumePDF } from '../../utils/resumeGenerator';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    downloadResumePDF();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'glass-panel border-b border-gray-200/50 dark:border-gray-800/50 py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo (ChaiCode Bold brackets + masterji design aesthetic) */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-orange-500 to-amber-500 p-[1px] shadow-lg shadow-brand-orange-500/10">
              <div className="w-full h-full bg-[#0B0F17] hover:bg-[#111827] rounded-xl flex items-center justify-center text-white font-display font-bold text-sm tracking-wide transition-colors">
                R
              </div>
              <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-brand-orange-400 to-orange-600 filter blur-sm opacity-0 group-hover:opacity-60 transition duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-medium text-sm tracking-wide text-gray-900 dark:text-white leading-none">
                Rishi Raj Shukla
              </span>
              <span className="font-mono text-[9px] text-brand-orange-500 font-semibold tracking-wider uppercase mt-0.5">
                Frontend Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs px-3.5 py-2 font-display font-medium text-gray-600 hover:text-brand-orange-500 dark:text-gray-300 dark:hover:text-brand-orange-400 transition-colors duration-200 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/30"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions panel */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Social quick icons */}
            <div className="flex items-center gap-1 border-r border-gray-200 dark:border-gray-800 pr-3 mr-1.5">
              <a 
                href={DEVELOPER_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={DEVELOPER_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Dark & Light System Mode Toggler */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="p-2 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-brand-orange-500/20 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5 text-brand-orange-400" /> : <Moon className="w-4.5 h-4.5 text-slate-700" />}
            </button>

            {/* Resume button */}
            <Button variant="glass" size="sm" onClick={handleResumeClick} className="gap-1.5 font-display text-xs">
              <FileText className="w-3.5 h-3.5" />
              Resume
            </Button>
          </div>

          {/* Mobile Right Controls Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Dark & Light Toggle for mobile */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle system theme"
              className="p-2.5 rounded-xl border border-gray-200/50 dark:border-gray-800/50 text-gray-600 dark:text-gray-300 bg-white/5 dark:bg-black/10 cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-brand-orange-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open context navigation menu"
              className="p-2.5 rounded-xl border border-gray-200/50 dark:border-gray-800/50 text-gray-600 dark:text-gray-300 bg-white/5 dark:bg-black/10 cursor-pointer"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden glass-panel border-b border-gray-200/50 dark:border-gray-800/50 bg-[#FAF9F6] dark:bg-[#0B0F17] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
              <div className="flex flex-col gap-1 py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl font-display font-medium text-sm text-gray-700 dark:text-gray-300 hover:text-brand-orange-500 dark:hover:text-brand-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800/20 transition-all duration-150"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <hr className="border-gray-200 dark:border-gray-800/80 my-2" />

              <div className="flex items-center justify-between gap-4 px-4 py-2">
                <span className="text-xs text-gray-400 font-medium">Quick Socials</span>
                <div className="flex items-center gap-3">
                  <a href={DEVELOPER_INFO.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-orange-500 dark:text-gray-400 dark:hover:text-brand-orange-400 transition" title="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={DEVELOPER_INFO.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-orange-500 dark:text-gray-400 dark:hover:text-brand-orange-400 transition" title="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${DEVELOPER_INFO.email}`} className="text-gray-500 hover:text-brand-orange-500 dark:text-gray-400 dark:hover:text-brand-orange-400 transition" title="Email">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="pt-3 px-2">
                <Button variant="glow" fullWidth onClick={handleResumeClick} className="gap-2 text-sm justify-center py-3">
                  <FileText className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
