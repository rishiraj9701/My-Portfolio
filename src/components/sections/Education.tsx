import React from 'react';
import { EDUCATION_INFO } from '../../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="space-y-1.5 mb-10">
          <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 border-orange-500/20 bg-orange-500/5">
            EDUCATION
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Education
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Undergraduate academic studies in computer science, software engineering, and artificial intelligence.
          </p>
        </div>

        {/* Dedicated Education Card */}
        <Card className="editorial-card border border-zinc-200/80 dark:border-[#241c1e] bg-white dark:bg-[#130f10] shadow-sm">
          <CardContent className="p-6 sm:p-7 space-y-5">
            
            {/* Header: Institution, Degree & Duration */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <span className="p-2.5 rounded-xl bg-orange-500/10 dark:bg-[#1e1513] border border-orange-500/20 dark:border-[#38231a] text-orange-600 dark:text-orange-500 inline-flex shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </span>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {EDUCATION_INFO.degree}
                    </h3>
                    <Badge variant="outline" className="text-[10px] py-0 px-2 font-mono border-orange-500/30 text-orange-600 dark:text-orange-400 bg-orange-500/10">
                      {EDUCATION_INFO.status}
                    </Badge>
                  </div>

                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
                    {EDUCATION_INFO.institution}
                  </p>

                  {EDUCATION_INFO.location && (
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 pt-0.5">
                      <MapPin className="w-3 h-3 text-orange-500/70 shrink-0" />
                      <span>{EDUCATION_INFO.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0 sm:self-start bg-zinc-50 dark:bg-[#181314] px-3 py-1.5 rounded-lg border border-zinc-200/80 dark:border-[#281f21]">
                <Calendar className="w-3.5 h-3.5 text-orange-500/70" />
                <span>{EDUCATION_INFO.duration}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-[#241c1e] pt-4">
              {EDUCATION_INFO.description}
            </p>

            {/* Core Coursework & Focus Areas */}
            {EDUCATION_INFO.coursework && EDUCATION_INFO.coursework.length > 0 && (
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3 text-orange-500/70" />
                  Key Coursework &amp; Areas of Study
                </span>
                
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION_INFO.coursework.map((subject) => (
                    <Badge
                      key={subject}
                      variant="outline"
                      className="text-xs font-normal border-zinc-200/80 dark:border-[#281f21] bg-zinc-50/60 dark:bg-[#161112] text-zinc-700 dark:text-zinc-300 py-1 px-2.5"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default Education;
