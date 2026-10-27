import React, { useState } from 'react';
import { SKILL_GROUPS } from '../../data/portfolioData';
import { Layout, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { RevealSection } from '../common/RevealSection';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_GROUPS.map((g) => g.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Development':
        return <Layout className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
      case 'Backend Development':
        return <Server className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
      case 'Databases & Data Management':
        return <Database className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
      case 'Developer Tools & Platforms':
        return <Wrench className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
      case 'Engineering Practices':
      default:
        return <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-500" />;
    }
  };

  const filteredGroups = selectedCategory === 'All' 
    ? SKILL_GROUPS 
    : SKILL_GROUPS.filter((g) => g.category === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-20 px-4 sm:px-6">
      <RevealSection className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="space-y-1.5 mb-8">
          <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 border-orange-500/20 bg-orange-500/5">
            TECHNICAL STACK
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Skills &amp; Technologies
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            The core tools, languages, and frameworks I use to develop reliable, full-stack web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter skills by category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 ${
                selectedCategory === cat
                  ? 'bg-orange-600 text-white shadow-xs font-semibold'
                  : 'border border-zinc-200/80 bg-zinc-50/70 dark:border-[#241c1e] dark:bg-[#130f10]/70 text-zinc-600 dark:text-zinc-400 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGroups.map((group, idx) => {
            const isFullSpan = selectedCategory === 'All' && idx === 4;
            return (
              <Card 
                key={group.category}
                className={`rounded-2xl border border-zinc-200/80 dark:border-[#241c1e] bg-white dark:bg-[#130f10] shadow-sm transition-colors ${
                  isFullSpan ? 'md:col-span-2' : ''
                }`}
              >
                <CardHeader className="p-4 pb-2.5 border-b border-zinc-100 dark:border-[#241c1e]">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400">
                      {getCategoryIcon(group.category)}
                    </span>
                    <CardTitle className="text-sm font-semibold">
                      {group.category}
                    </CardTitle>
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 ml-auto">
                      {group.skills.length} skills
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="p-4 pt-3.5">
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs font-normal border-zinc-200/80 dark:border-[#281f21] bg-zinc-50/70 dark:bg-[#161112] text-zinc-800 dark:text-zinc-200 py-1 px-2.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </RevealSection>
    </section>
  );
};

export default Skills;
