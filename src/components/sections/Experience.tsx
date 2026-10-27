import React from 'react';
import { EXPERIENCE_ITEMS } from '../../data/portfolioData';
import { Calendar } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { RevealSection } from '../common/RevealSection';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 px-4 sm:px-6">
      <RevealSection className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="space-y-1.5 mb-10">
          <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 border-orange-500/20 bg-orange-500/5">
            CAREER &amp; EXPERIENCE
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Experience &amp; Learning Timeline
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Practical development work, web application engineering, and professional technical training.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-zinc-200 dark:border-[#241c1e] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {EXPERIENCE_ITEMS.map((item, idx) => {
            const isCurrent = idx === 0;
            return (
              <div key={item.id} className="relative">
                {/* Timeline Dot Marker */}
                <span className={`absolute -left-[32px] sm:-left-[40px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border ${
                  isCurrent 
                    ? 'border-orange-600 bg-orange-600 text-white dark:border-orange-500 dark:bg-orange-500 ring-4 ring-orange-500/20' 
                    : 'border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900'
                }`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${isCurrent ? 'bg-white' : 'bg-zinc-400 dark:bg-zinc-500'}`} />
                </span>

                {/* Content Card */}
                <Card className="rounded-2xl border border-zinc-200/80 dark:border-[#241c1e] bg-white dark:bg-[#130f10] shadow-sm">
                  <CardContent className="p-5 sm:p-6 space-y-3">
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                            {item.role}
                          </h3>
                          {isCurrent && (
                            <Badge variant="outline" className="text-[10px] py-0 px-2 font-mono border-orange-500/30 text-orange-600 dark:text-orange-400 bg-orange-500/10">
                              Active
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs font-medium text-orange-600 dark:text-orange-400 mt-0.5">
                          {item.organization}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-orange-500/70" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-1.5 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      {item.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-orange-600 dark:text-orange-400 shrink-0 mt-0.5 font-bold">&bull;</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

      </RevealSection>
    </section>
  );
};

export default Experience;
