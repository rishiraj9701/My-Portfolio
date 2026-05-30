import React from 'react';
import { EXPERIENCE_TIMELINE } from '../../data/portfolioData';
import { Briefcase, Calendar, GraduationCap, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-black/20">
      
      {/* Visual top/bottom lines representing continuous development */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-gray-200 dark:from-gray-800 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* Header section title */}
        <div className="text-center md:text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-500/10 border border-brand-orange-500/20 text-xs font-mono text-brand-orange-500 font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Employment Timeline</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-950 dark:text-white tracking-tight">
            Work Experience & Background
          </h2>
          <div className="w-12 h-1 bg-brand-orange-500 mx-auto md:mx-0 rounded-full" />
        </div>

        {/* Timeline representation (Gradient connectors and indicators) */}
        <div className="relative border-l-2 border-dashed border-gray-200 dark:border-gray-800 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-12">
          
          {EXPERIENCE_TIMELINE.map((item, idx) => {
            const isLatest = idx === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-150px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative text-left"
              >
                {/* Marker point */}
                <span className={`absolute -left-[35px] sm:-left-[43px] top-1.5 p-1.5 sm:p-2 rounded-xl flex items-center justify-center transition-all ${
                  isLatest 
                    ? 'bg-brand-orange-500 text-white shadow-lg shadow-brand-orange-500/20 ring-4 ring-brand-orange-500/10' 
                    : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800'
                }`}>
                  {idx === 0 ? <Briefcase className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
                </span>

                <div className="glass-panel glass-card-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden">
                  
                  {/* Latest flag bubble */}
                  {isLatest && (
                    <div className="absolute top-0 right-0 p-1 bg-brand-orange-500 text-[9px] font-mono font-bold text-white uppercase px-3 rounded-bl-xl tracking-wider shadow-sm">
                      Current Focus
                    </div>
                  )}

                  {/* Header metadata row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white leading-snug">
                        {item.role}
                      </h3>
                      <p className="font-display font-medium text-xs sm:text-sm text-brand-orange-500 dark:text-brand-orange-400 mt-0.5">
                        {item.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-100/50 dark:border-gray-800/80 bg-gray-55/60 dark:bg-black/10 self-start text-[11px] font-mono text-gray-500 dark:text-gray-400 font-medium">
                      <Calendar className="w-3 h-3 text-brand-orange-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Descriptions lists */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {item.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-brand-orange-500/60 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
export default Experience;
