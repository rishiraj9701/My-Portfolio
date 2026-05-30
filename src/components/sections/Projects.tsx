import React from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { Github, Zap, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative px-4 sm:px-6 lg:px-8">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[55vw] h-[55vw] rounded-full filter blur-[150px] opacity-10 bg-gradient-to-r from-orange-500 to-amber-500 pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Header section structure */}
        <div className="text-center md:text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-500/10 border border-brand-orange-500/20 text-xs font-mono text-brand-orange-500 font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Showcase Gallery</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-950 dark:text-white tracking-tight">
            Featured Projects & SaaS Designs
          </h2>
          <div className="w-12 h-1 bg-brand-orange-500 mx-auto md:mx-0 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel rounded-3xl overflow-hidden hover:border-brand-orange-500/30 dark:hover:border-brand-orange-500/40 hover:shadow-xl dark:hover:shadow-brand-orange-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Text metadata block */}
              <div className="p-6 flex-grow flex flex-col justify-between text-left">
                <div className="space-y-4">
                  
                  {/* Title & Badge */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white group-hover:text-brand-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    <span className="p-1 rounded-lg bg-brand-orange-500/10 text-brand-orange-500">
                      <Layers className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Description text */}
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-sans min-h-[3.75rem]">
                    {project.description}
                  </p>

                  {/* Features Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-brand-orange-500 uppercase">Key Features</span>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1.5 leading-snug">
                          <span className="text-brand-orange-500 mt-0.5">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badge lists */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-mono bg-gray-100 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Button Panel */}
                <div className="pt-6 mt-4 border-t border-gray-100 dark:border-gray-800/80">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-brand-orange-500/20 hover:text-brand-orange-500 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all font-display"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Codebase
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
