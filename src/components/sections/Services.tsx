import React from 'react';
import { CAPABILITIES } from '../../data/portfolioData';
import { Layout, Server, Database, Gauge, Check } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { RevealSection } from '../common/RevealSection';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
      case 'Server':
        return <Server className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
      case 'Database':
        return <Database className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
      case 'Gauge':
      default:
        return <Gauge className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
    }
  };

  return (
    <section id="capabilities" className="py-16 md:py-20 px-4 sm:px-6">
      <RevealSection className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="space-y-1.5 mb-8 sm:mb-10">
          <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 border-orange-500/20 bg-orange-500/5">
            CAPABILITIES
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Full Stack Development &amp; Engineering Strengths
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            How I build responsive interfaces, reliable APIs, and maintainable web applications.
          </p>
        </div>

        {/* 2x2 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CAPABILITIES.map((cap) => (
            <Card 
              key={cap.title}
              className="rounded-2xl border border-zinc-200/80 dark:border-[#241c1e] bg-white dark:bg-[#130f10] shadow-sm flex flex-col justify-between transition-colors"
            >
              <CardHeader className="p-5 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400">
                    {getIcon(cap.icon)}
                  </span>
                  <CardTitle className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
                    {cap.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="p-5 pt-0 space-y-3.5">
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {cap.description}
                </p>

                <div className="pt-2.5 border-t border-zinc-100 dark:border-[#241c1e] space-y-1.5">
                  {cap.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </RevealSection>
    </section>
  );
};

export default Services;
