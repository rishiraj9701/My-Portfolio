import React from 'react';
import { ArrowDown, FileDown, Code2, Server, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleResumeClick = async () => {
    try {
      const { downloadResumePDF } = await import('../../utils/resumeGenerator');
      downloadResumePDF();
    } catch (error) {
      console.error('Error loading resume PDF:', error);
      window.open('/resume.pdf', '_blank');
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-18 px-4 sm:px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* 1. Availability Pill Label */}
        <div className="hero-enter-1 mb-4 sm:mb-5 flex justify-center w-full px-2">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-white/90 dark:bg-[#141012] text-xs font-medium text-zinc-800 dark:text-zinc-200 shadow-2xs max-w-full text-center transition-colors">
            <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" aria-hidden="true" />
            <span className="leading-snug">Available for Full Stack Developer Roles &amp; Internships</span>
          </div>
        </div>

        {/* 2. Headline Structure — Three Lines */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-zinc-950 dark:text-zinc-100 leading-[1.25] sm:leading-[1.2] max-w-4xl">
          <span className="hero-enter-2 block mb-1.5 sm:mb-2">
            Building Digital
          </span>
          <span className="hero-enter-2 block mb-2 sm:mb-3">
            Experiences, From
          </span>
          <span className="hero-enter-2b inline-flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3.5 gap-y-2">
            <span className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-0.5 sm:py-1 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100/80 dark:bg-[#161314] text-zinc-900 dark:text-white shadow-xs">
              <Code2 className="w-4.5 h-4.5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-zinc-800 dark:text-white shrink-0" strokeWidth={2.2} />
              <span>Frontend</span>
            </span>
            <span>to</span>
            <span className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-0.5 sm:py-1 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100/80 dark:bg-[#161314] text-zinc-900 dark:text-white shadow-xs">
                <Server className="w-4.5 h-4.5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-zinc-800 dark:text-white shrink-0" strokeWidth={2.2} />
                <span>Backend</span>
              </span>
              <span>.</span>
            </span>
          </span>
        </h1>

        {/* 3. Supporting Description */}
        <p className="hero-enter-3 mt-5 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
          I'm <span className="font-semibold text-orange-600 dark:text-orange-400">Rishi Raj Shukla</span>, a Full Stack Developer building scalable web applications with responsive UI/UX, modern frontend technologies, backend integration, and AI-powered solutions.
        </p>

        {/* 4. Call-to-action Buttons */}
        <div className="hero-enter-4 mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3">
          <button 
            type="button"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-tl-[6px] rounded-tr-[22px] rounded-br-[6px] rounded-bl-[22px] bg-[#141214] hover:bg-[#201d20] active:bg-[#0c0a0c] text-white text-sm font-semibold border border-zinc-800/90 shadow-2xs transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4 text-orange-500 shrink-0" />
          </button>

          <button 
            type="button"
            onClick={handleResumeClick}
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-tl-[22px] rounded-tr-[6px] rounded-br-[22px] rounded-bl-[6px] bg-white dark:bg-[#121012] hover:bg-zinc-50 dark:hover:bg-[#1a171a] active:bg-zinc-100 dark:active:bg-[#0e0c0e] text-zinc-900 dark:text-zinc-100 text-sm font-semibold border border-zinc-300/90 dark:border-zinc-800 shadow-2xs transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
          >
            <FileDown className="w-4 h-4 text-orange-500 shrink-0" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* 5. Highlighted Work Preference / Relocation Badge */}
        <div className="hero-enter-5 mt-5 sm:mt-6 flex justify-center w-full px-2">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/80 dark:bg-[#120f11]/60 text-xs font-medium text-zinc-600 dark:text-zinc-400 shadow-2xs transition-colors">
            <Globe className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500 shrink-0" aria-hidden="true" strokeWidth={1.8} />
            <span className="leading-snug">Open to Relocation &amp; Remote</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
