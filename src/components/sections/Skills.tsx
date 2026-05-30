import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Sparkles, Terminal, Cpu, Hammer, Blocks, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(cat => cat.title)];

  const getFilteredSkills = () => {
    if (activeCategory === 'All') {
      // Flatten all skills with duplicates removed
      const all: string[] = [];
      SKILL_CATEGORIES.forEach(cat => {
        cat.skills.forEach(s => {
          if (!all.includes(s)) all.push(s);
        });
      });
      return all;
    }
    return SKILL_CATEGORIES.find(cat => cat.title === activeCategory)?.skills || [];
  };

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Frontend':
        return <Cpu className="w-4 h-4 text-brand-orange-500" />;
      case 'State Management':
        return <Blocks className="w-4 h-4 text-orange-500" />;
      case 'Tools & DevOps':
        return <Hammer className="w-4 h-4 text-blue-500" />;
      case 'Languages':
        return <Terminal className="w-4 h-4 text-purple-500" />;
      default:
        return <Lightbulb className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Decorative gradient sphere in background */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full filter blur-[150px] opacity-10 bg-gradient-to-r from-brand-orange-500/20 to-amber-500/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Header Title block */}
        <div className="text-center md:text-left space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-500/10 border border-brand-orange-500/20 text-xs font-mono text-brand-orange-500 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack & Tools</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-950 dark:text-white tracking-tight">
            My Professional Skills Array
          </h2>
          <div className="w-12 h-1 bg-brand-orange-500 mx-auto md:mx-0 rounded-full" />
        </div>

        {/* Tab Selector Filters */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-display font-medium border transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-orange-500 text-white border-brand-orange-500 shadow-md shadow-brand-orange-500/20'
                  : 'bg-white/40 border-gray-100 hover:border-gray-200 text-gray-600 dark:bg-gray-800/40 dark:border-gray-800 dark:hover:border-gray-700 dark:text-gray-400'
              }`}
            >
              <span className="flex items-center gap-1.5">
                {cat !== 'All' && getCategoryIcon(cat)}
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Skill Chips Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main skills block */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              <AnimatePresence mode="popLayout">
                {getFilteredSkills().map((skill) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    key={skill}
                    className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm flex items-center justify-between group hover:border-brand-orange-500/30 dark:hover:border-brand-orange-500/40 hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-brand-orange-500 opacity-60 group-hover:scale-125 duration-150 transition-transform" />
                      <span className="text-xs sm:text-sm font-display font-medium text-gray-800 dark:text-gray-200">
                        {skill}
                      </span>
                    </div>
                    
                    {/* Tiny glowing tag badge */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[9px] font-mono bg-brand-orange-500/10 text-brand-orange-500 px-2 py-0.5 rounded-full font-semibold">
                      active &bull;
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Inline Sidebar detailing proficiency descriptions */}
          <div className="md:col-span-4 space-y-4">
            {SKILL_CATEGORIES.map((cat) => (
              <div 
                key={cat.title} 
                onClick={() => setActiveCategory(cat.title)}
                className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                  activeCategory === cat.title || activeCategory === 'All'
                    ? 'border-brand-orange-500/20 bg-brand-orange-500/[0.02] dark:bg-brand-orange-500/[0.01]'
                    : 'border-gray-100 bg-white/10 dark:border-gray-800/50 dark:bg-transparent opacity-60'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800">
                    {getCategoryIcon(cat.title)}
                  </span>
                  <h3 className="font-display font-semibold text-xs tracking-wide text-gray-950 dark:text-white">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {cat.skills.slice(0, 4).map((sk) => (
                    <span key={sk} className="text-[10px] font-mono bg-gray-50 dark:bg-gray-800/40 text-gray-400 px-1.5 py-0.5 rounded">
                      {sk}
                    </span>
                  ))}
                  {cat.skills.length > 4 && (
                    <span className="text-[10px] font-mono text-gray-400 py-0.5 px-0.5">
                      +{cat.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
export default Skills;
