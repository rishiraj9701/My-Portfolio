import React, { useState, useEffect } from 'react';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import { AtmosphericBackground } from '../common/AtmosphericBackground';
import { ArrowUp } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative bg-[#FAF8F5] text-zinc-900 dark:bg-[#0A0809] dark:text-zinc-100 transition-colors duration-200 selection:bg-orange-500/20 selection:text-orange-950 dark:selection:text-orange-200">
      
      {/* Authentic Atmospheric Background (Ambient amber glow + organic SVG hexagon clusters) */}
      <AtmosphericBackground />

      {/* Restrained scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-orange-600 dark:bg-orange-500 z-50 origin-left transition-all duration-75"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Navigation (Above background) */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 w-full pt-16">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-2.5 rounded-lg border border-zinc-200 bg-white/90 text-zinc-700 shadow-sm hover:border-orange-500/40 hover:text-orange-600 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:border-orange-500/40 dark:hover:text-orange-400 backdrop-blur-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default MainLayout;
