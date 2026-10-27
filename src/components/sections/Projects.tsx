import React from 'react';
import { PROJECTS, Project } from '../../data/portfolioData';
import { ExternalLink, Github, FolderKanban, Receipt, LayoutDashboard, Code2 } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import { RevealSection } from '../common/RevealSection';

export const Projects: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'flowgrid':
        return <FolderKanban className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
      case 'billbox':
        return <Receipt className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
      case 'ai-analytics-dashboard':
        return <LayoutDashboard className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
      default:
        return <Code2 className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
    }
  };

  const getSubtextNote = (id: string) => {
    switch (id) {
      case 'flowgrid':
        return 'Project Management SaaS';
      case 'billbox':
        return 'Invoicing Platform';
      case 'ai-analytics-dashboard':
        return 'Recharts Analytics';
      default:
        return 'Web Application';
    }
  };

  return (
    <section id="projects" className="py-16 md:py-20 px-4 sm:px-6">
      <RevealSection className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="space-y-1.5 mb-10">
          <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 border-orange-500/20 bg-orange-500/5">
            SELECTED WORK
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Featured Projects &amp; Engineering Work
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Real full-stack web applications and SaaS platforms, built with modern tooling and deployed online with verified repositories.
          </p>
        </div>

        {/* Balanced Two-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {PROJECTS.map((project: Project) => {
            const isFeatured = Boolean(project.featured);

            return (
              <Card 
                key={project.id}
                className="editorial-card flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-[#241c1e] bg-white dark:bg-[#130f10] shadow-sm h-full transition-colors duration-200 hover:border-orange-500/40 dark:hover:border-orange-500/35"
              >
                {/* Header Top Bar */}
                <div className="px-5 sm:px-6 py-3.5 border-b border-zinc-100 dark:border-[#241c1e] bg-zinc-50/60 dark:bg-zinc-900/30 flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-orange-500/10 dark:bg-[#1e1513] border border-orange-500/20 dark:border-[#38231a] inline-flex items-center justify-center">
                      {getProjectIcon(project.id)}
                    </span>
                    <span className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isFeatured && (
                      <Badge variant="outline" className="text-[10px] font-mono border-orange-500/30 text-orange-600 dark:text-orange-400 bg-orange-500/10 py-0.5 px-2">
                        Featured
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-[10px] font-mono border-zinc-200 dark:border-[#281f21] text-zinc-500 dark:text-zinc-400 py-0.5 px-2">
                      {project.year}
                    </Badge>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Live
                    </span>
                  </div>
                </div>

                {/* Main Card Content */}
                <CardContent className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    {/* Dedicated Visual Project Preview (16:9 Widescreen) */}
                    {project.image && (
                      <div className="relative group overflow-hidden rounded-xl border border-zinc-200/80 dark:border-[#281f21] bg-zinc-100 dark:bg-[#161213]">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live application preview of ${project.title} (opens in new tab)`}
                          className="block relative aspect-video w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
                        >
                          <img
                            src={project.image}
                            alt={project.imageAlt || `Live interface preview of ${project.title}`}
                            loading="lazy"
                            width={1280}
                            height={720}
                            className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.015]"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 dark:group-hover:bg-black/35 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 dark:bg-zinc-800/90 backdrop-blur-xs text-white text-xs font-medium shadow-md">
                              <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
                              <span>View Live Site</span>
                            </span>
                          </div>
                        </a>
                      </div>
                    )}

                    <div className="space-y-1.5 pt-0.5">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technical Highlights */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold block">
                        Technical Highlights
                      </span>
                      <ul className="space-y-1.5">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2 leading-snug">
                            <span className="text-orange-600 dark:text-orange-500 shrink-0 font-bold leading-none mt-0.5">&rsaquo;</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold block mb-2">
                      Technologies Used
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          className="text-[11px] font-mono border-zinc-200/80 dark:border-[#281f21] bg-zinc-50/60 dark:bg-[#161112] text-zinc-700 dark:text-zinc-300 py-0.5 px-2.5 font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Bottom Footer Actions (Pinned to bottom) */}
                <CardFooter className="px-5 sm:px-6 py-3.5 border-t border-zinc-100 dark:border-[#241c1e] bg-zinc-50/40 dark:bg-[#110d0e] flex items-center justify-between gap-3 mt-auto">
                  <div className="flex items-center gap-2.5">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title} (opens in new tab)`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 text-white hover:bg-orange-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-orange-600 dark:hover:text-white text-xs font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code of ${project.title} on GitHub (opens in new tab)`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-[#281f21] hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 text-zinc-700 dark:text-zinc-300 text-xs font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 hidden sm:inline-block">
                    {getSubtextNote(project.id)}
                  </span>
                </CardFooter>
              </Card>
            );
          })}
        </div>

      </RevealSection>
    </section>
  );
};

export default Projects;
