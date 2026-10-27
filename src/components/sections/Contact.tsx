import React, { useState } from 'react';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Copy, Check } from 'lucide-react';
import TwitterXIcon from '../common/TwitterXIcon';
import { RevealSection } from '../common/RevealSection';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 relative">
      <RevealSection className="max-w-5xl mx-auto">
        
        {/* ============================================================== */}
        {/* Top Header Section                                            */}
        {/* ============================================================== */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-orange-600 dark:text-orange-500 font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT CENTER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
            Let's Build Something Great Together
          </h2>

          <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full" />

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed pt-1">
            I'm always interested in discussing internships, freelance projects, collaborations, and exciting opportunities. Feel free to reach out directly through my email or social channels!
          </p>
        </div>

        {/* ============================================================== */}
        {/* 2 Top Information Cards Grid (Email & Office Location)        */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Email Address */}
          <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-[#241c1e] bg-white dark:bg-[#130f10] shadow-sm text-left flex items-start gap-4 transition-colors">
            <span className="p-3.5 rounded-2xl bg-orange-500/10 dark:bg-[#1e1513] border border-orange-500/20 dark:border-[#38231a] text-orange-600 dark:text-orange-500 inline-flex shrink-0">
              <Mail className="w-6 h-6" />
            </span>

            <div className="space-y-1 min-w-0 flex-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block">
                Email Address
              </span>

              <a 
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors break-all block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm"
              >
                {DEVELOPER_INFO.email}
              </a>

              <div className="flex items-center justify-between pt-1">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Direct inbox access
                </p>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={copiedEmail ? 'Email address copied to clipboard' : 'Copy email address to clipboard'}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded px-1.5 py-0.5"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Office Location & Phone */}
          <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-[#241c1e] bg-white dark:bg-[#130f10] shadow-sm text-left flex items-start gap-4 transition-colors">
            <span className="p-3.5 rounded-2xl bg-orange-500/10 dark:bg-[#1e1513] border border-orange-500/20 dark:border-[#38231a] text-orange-600 dark:text-orange-500 inline-flex shrink-0">
              <MapPin className="w-6 h-6" />
            </span>

            <div className="space-y-1 min-w-0 flex-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block">
                Office Location
              </span>

              <p className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                {DEVELOPER_INFO.location}
              </p>

              <div className="flex items-center justify-between pt-1">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Available for remote &amp; hybrid roles
                </p>

                <a 
                  href={`tel:${DEVELOPER_INFO.phone}`} 
                  aria-label={`Call ${DEVELOPER_INFO.phone}`}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded px-1.5 py-0.5"
                >
                  <Phone className="w-3 h-3 text-orange-500" />
                  <span>{DEVELOPER_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* Bottom Card: Socials & Networks Action Bar                     */}
        {/* ============================================================== */}
        <div className="mt-6 p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-[#241c1e] bg-white dark:bg-[#130f10] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left transition-colors">
          <div className="space-y-0.5">
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
              Socials &amp; Networks
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Connect with me across platforms
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <a 
              href={DEVELOPER_INFO.github} 
              target="_blank" 
              rel="noreferrer"
              aria-label="GitHub Profile (opens in new tab)"
              className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-[#281e20] bg-zinc-50 dark:bg-[#191314] text-zinc-700 dark:text-zinc-300 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center justify-center gap-2 text-xs font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
              title="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5 shrink-0" />
              <span>rishiraj9701</span>
            </a>

            <a 
              href={DEVELOPER_INFO.linkedin} 
              target="_blank" 
              rel="noreferrer"
              aria-label="LinkedIn Profile (opens in new tab)"
              className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-[#281e20] bg-zinc-50 dark:bg-[#191314] text-zinc-700 dark:text-zinc-300 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center justify-center gap-2 text-xs font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 shrink-0" />
              <span>workrishirajshukla</span>
            </a>

            <a 
              href={DEVELOPER_INFO.twitter} 
              target="_blank" 
              rel="noreferrer"
              aria-label="X Profile (opens in new tab)"
              className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-[#281e20] bg-zinc-50 dark:bg-[#191314] text-zinc-700 dark:text-zinc-300 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center justify-center gap-2 text-xs font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
              title="X Profile"
            >
              <TwitterXIcon className="w-3 h-3 shrink-0" />
              <span>work_Rishi_Raj</span>
            </a>

            <a 
              href={`mailto:${DEVELOPER_INFO.email}`}
              aria-label="Send email to work.rishirajshukla@gmail.com"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium transition-colors flex items-center justify-center gap-2 text-xs shadow-md shadow-orange-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Mail</span>
            </a>
          </div>
        </div>

      </RevealSection>
    </section>
  );
};

export default Contact;
