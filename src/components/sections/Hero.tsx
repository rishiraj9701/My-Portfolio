import React from 'react';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { ArrowUpRight, FileText, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { downloadResumePDF } from '../../utils/resumeGenerator';

export const Hero: React.FC = () => {
  const handleResumeClick = () => {
    downloadResumePDF();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
    >
      {/* Decorative Ornaments (Gradient circles floating in background) */}
      <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu justify-center [mask-image:radial-gradient(90%_100%_at_top_center,white,transparent)]">
        <div className="mx-auto flex w-[40rem] flex-none justify-end">
          <div className="w-[80rem] flex-none animate-spin-slow opacity-15 dark:opacity-20 [background-image:radial-gradient(120%_120%_at_top_right,#f97316_0%,transparent_50%)] h-[40rem]" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Tagline / Batch */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-[11px] font-mono tracking-wider text-brand-orange-500 uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 animate-pulse" />
            <span>Open for Job Opportunities & Internships</span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1 
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-gray-900 dark:text-white leading-[1.1]"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-500 via-amber-400 to-brand-orange-600 dark:from-brand-orange-400 dark:via-amber-300 dark:to-orange-500 select-all">{DEVELOPER_INFO.name}</span>
          </motion.h1>

          {/* Role subtitle tag */}
          <motion.p 
            variants={itemVariants}
            className="font-display font-medium text-base sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {DEVELOPER_INFO.role}
          </motion.p>

          {/* Core Description Copy */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            I build responsive, scalable, and visually polished web applications that combine exceptional user experiences with clean, maintainable code. Passionate about creating modern SaaS products, analytics dashboards, and interactive web experiences.
          </motion.p>

          {/* Actions & Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
          >
            <Button variant="glow" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = '#projects'}>
              View Projects
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            
            <Button variant="glass" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = '#contact'}>
              Contact Me
            </Button>

            <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2" onClick={handleResumeClick}>
              <FileText className="w-4.5 h-4.5 text-brand-orange-500" />
              Download Resume
            </Button>
          </motion.div>

          {/* Quick socials row */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-6 pt-6 text-gray-400 dark:text-gray-500"
          >
            <a 
              href={DEVELOPER_INFO.github} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-brand-orange-500 dark:hover:text-brand-orange-400 transform hover:scale-110 transition-all duration-200 flex items-center gap-1.5 text-xs font-mono"
            >
              <Github className="w-4 h-4" />
              <span>github</span>
            </a>
            <span className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full" />
            <a 
              href={DEVELOPER_INFO.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-brand-orange-500 dark:hover:text-brand-orange-400 transform hover:scale-110 transition-all duration-200 flex items-center gap-1.5 text-xs font-mono"
            >
              <Linkedin className="w-4 h-4" />
              <span>linkedin</span>
            </a>
            <span className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full" />
            <a 
              href={`mailto:${DEVELOPER_INFO.email}`}
              className="hover:text-brand-orange-500 dark:hover:text-brand-orange-400 transform hover:scale-110 transition-all duration-200 flex items-center gap-1.5 text-xs font-mono"
            >
              <Mail className="w-4 h-4" />
              <span>email</span>
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Decorative Slide Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-float pointer-events-none">
        <span className="font-mono text-[9px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">Scroll Down</span>
        <ArrowDown className="w-4 h-4 text-brand-orange-500/80" />
      </div>
    </section>
  );
};
export default Hero;
