import React, { useState } from 'react';
import { SERVICES, Service } from '../../data/portfolioData';
import { Layout, Atom, Zap, BarChart3, Sparkles, Gauge, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-brand-orange-500" />;
      case 'Atom':
        return <Atom className="w-6 h-6 text-orange-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-blue-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-yellow-500" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-emerald-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-orange-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-black/10">
      
      {/* Absolute connector lines */}
      <div className="absolute top-0 right-1/3 w-[2px] h-32 bg-gradient-to-b from-gray-200/40 dark:from-gray-800/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Header Title block */}
        <div className="text-center md:text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-500/10 border border-brand-orange-500/20 text-xs font-mono text-brand-orange-500 font-semibold uppercase tracking-wider">
            <Layout className="w-3.5 h-3.5" />
            <span>Scope Of Services</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-950 dark:text-white tracking-tight">
            How I Can Support Your Team
          </h2>
          <div className="w-12 h-1 bg-brand-orange-500 mx-auto md:mx-0 rounded-full" />
        </div>

        {/* Grid Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const isOpened = activeService === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveService(isOpened ? null : service.id)}
                className={`glass-panel p-6 sm:p-8 rounded-2xl cursor-pointer text-left transition-all duration-300 relative overflow-hidden group ${
                  isOpened 
                    ? 'ring-2 ring-brand-orange-500/40 border-brand-orange-500/20 bg-brand-orange-500/[0.03] dark:bg-brand-orange-500/[0.01]' 
                    : 'glass-card-hover'
                }`}
              >
                {/* Accent glow on top for opened element */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-orange-500 to-amber-500 transition-opacity duration-300 ${
                  isOpened ? 'opacity-100' : 'opacity-0'
                }`} />

                <div className="space-y-4">
                  
                  {/* Icon & ID */}
                  <div className="flex items-center justify-between">
                    <span className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800/80 inline-flex group-hover:scale-110 transition-transform">
                      {getServiceIcon(service.icon)}
                    </span>
                    <span className="font-mono text-[9px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-semibold">
                      Service #0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white group-hover:text-brand-orange-500 dark:group-hover:text-brand-orange-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Interactive toggle link */}
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-brand-orange-500 pt-2 select-none">
                    <span>{isOpened ? "Hide features" : "Analyze features"}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transform transition-transform duration-300 ${
                      isOpened ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`} />
                  </div>

                  {/* Inner expanded lists with features */}
                  <AnimatePresence initial={false}>
                    {isOpened && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pt-4 border-t border-gray-100 dark:border-gray-800/60 mt-4 space-y-2 text-xs text-gray-500 dark:text-gray-400"
                      >
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 py-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange-500 flex-shrink-0" />
                            <span className="font-sans font-medium">{feature}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Services;
