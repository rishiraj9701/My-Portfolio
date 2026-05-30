import React from 'react';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { CheckCircle2, Award, Calendar, Lightbulb, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <section id="about" className="py-24 relative px-4 sm:px-6 lg:px-8">
      {/* Absolute decor lines */}
      <div className="absolute top-0 right-1/4 w-[2px] h-32 bg-gradient-to-b from-gray-200/40 dark:from-gray-800/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-500/10 border border-brand-orange-500/20 text-xs font-mono text-brand-orange-500 font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Profile Summary</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-950 dark:text-white tracking-tight">
            About Me & Professional Focus
          </h2>
          <div className="w-12 h-1 bg-brand-orange-500 mx-auto md:mx-0 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
              I am a dedicated Frontend Developer based in Kanpur, India. Passionate about engineering clean, responsive, and performance-minded single page applications. With a specialized focus on the React.js and Next.js ecosystems, I turn designer sketches into high-fidelity code structures.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              My engineering philosophy revolves around pixel-perfect grid systems, atomic component architectures, responsive user interfaces, and semantic HTML foundations that ensure smooth interactions for every user.
            </p>

            <h3 className="font-display font-semibold text-sm text-gray-900 dark:text-white tracking-wide pt-2">
              Core Deliverables & Proficiencies:
            </h3>

            {/* Checkmark layout block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {DEVELOPER_INFO.experienceSummary.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-100 dark:border-gray-800/80 bg-white/40 dark:bg-[#111622]/45 backdrop-blur-sm shadow-sm group hover:border-brand-orange-500/10 transition">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Graphics Panel */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {DEVELOPER_INFO.stats.map((stat, index) => {
              const icons = [
                <Code2 className="w-5 h-5 text-brand-orange-500" />, 
                <Lightbulb className="w-5 h-5 text-amber-500" />, 
                <CheckCircle2 className="w-5 h-5 text-blue-500" />,
                <Calendar className="w-5 h-5 text-purple-500" />
              ];
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  className="glass-panel glass-card-hover p-6 rounded-2xl flex flex-col justify-between text-left h-40"
                >
                  <div className="flex items-center justify-between">
                    <span className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800/60 inline-flex">
                      {icons[index % icons.length]}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      Metric #{index + 1}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white leading-none mb-1 shadow-glow">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-mono text-gray-500 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
export default About;
