import React from 'react';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { GraduationCap, Award, Layout, Server, Database, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { RevealSection } from '../common/RevealSection';

export const About: React.FC = () => {
  const developmentPriorities = [
    {
      title: "Frontend Architecture",
      desc: "Reusable React components and responsive interfaces.",
      icon: Layout
    },
    {
      title: "Backend & APIs",
      desc: "Server-side logic, REST APIs, and error handling.",
      icon: Server
    },
    {
      title: "Database Management",
      desc: "Data modeling, CRUD operations, and data integrity.",
      icon: Database
    },
    {
      title: "Security & Performance",
      desc: "Authentication, validation, accessibility, and optimization.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6">
      <RevealSection className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="space-y-1.5 mb-8 sm:mb-10">
          <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 border-orange-500/20 bg-orange-500/5">
            ABOUT ME
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            About Me &amp; Full Stack Development
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            How I build modern web applications from frontend to backend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Introduction & Development Priorities */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-3.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p>
                I'm a Computer Science and Engineering student specializing in AI/ML, based in Delhi, India. I build responsive, user-friendly web applications.
              </p>
              <p>
                My focus is React, Next.js, TypeScript, Node.js, REST APIs, and databases, with an emphasis on clean code, maintainable architecture, and reliable functionality.
              </p>
            </div>

            {/* Key Development Priorities */}
            <div className="pt-1 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-mono">
                Development Priorities
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {developmentPriorities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={item.title}
                      className="p-3.5 rounded-xl border border-zinc-200/80 bg-zinc-50/70 dark:border-[#241c1e] dark:bg-[#130f10]/70 text-left transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500 shrink-0" />
                        <span className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Education & Training Cards */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Education Card */}
            <Card className="rounded-2xl border-zinc-200/80 dark:border-[#241c1e] bg-white dark:bg-[#130f10] shadow-sm">
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold">Education</CardTitle>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Undergraduate Degree</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-1 space-y-1 text-xs">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Axis Institute of Technology and Management
                </p>
                <p className="text-zinc-600 dark:text-zinc-300">
                  B.Tech in Computer Science Engineering (AI/ML)
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 font-mono text-[11px] pt-0.5">
                  2023 — 2027 &bull; Kanpur, India
                </p>
              </CardContent>
            </Card>

            {/* Training & Certifications Card */}
            <Card className="rounded-2xl border-zinc-200/80 dark:border-[#241c1e] bg-white dark:bg-[#130f10] shadow-sm">
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold">Training &amp; Certifications</CardTitle>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Verified Programs &amp; Badges</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-1 text-xs">
                {CERTIFICATIONS.map((cert, index) => (
                  <React.Fragment key={cert.title}>
                    {index > 0 && <Separator className="my-2.5 bg-zinc-200/60 dark:bg-zinc-800/60" />}
                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="font-medium text-zinc-900 dark:text-zinc-200">
                          {cert.title}
                        </p>
                        {cert.year && (
                          <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 shrink-0">
                            {cert.year}
                          </span>
                        )}
                      </div>
                      {cert.issuer && (
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                          {cert.issuer}
                        </p>
                      )}
                      {cert.description && (
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
                          {cert.description}
                        </p>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </CardContent>
            </Card>

          </div>

        </div>

      </RevealSection>
    </section>
  );
};

export default About;
