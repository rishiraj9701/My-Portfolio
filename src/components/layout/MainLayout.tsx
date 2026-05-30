import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme();
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
    <div className="min-h-screen relative overflow-x-hidden bg-[#FAF9F6] text-gray-900 transition-colors duration-300 dark:bg-[#0B0F17] dark:text-gray-100">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-orange-500 via-amber-400 to-amber-500 z-50 origin-left transition-all duration-75"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Decorative Ornaments & Ambient Glow - Vercel / Stripe Style */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Cyber Grid Background */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)]"
        />

        {/* Top-Right Glow Spot */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full filter blur-[120px] opacity-20 dark:opacity-30 bg-gradient-to-br from-brand-orange-500 to-purple-600 animate-pulse-slow" />

        {/* Center-Left Glow Spot */}
        <div className="absolute top-[40%] left-[-15%] w-[60vw] h-[60vw] rounded-full filter blur-[150px] opacity-10 dark:opacity-15 bg-gradient-to-tr from-blue-500 to-brand-orange-400 animate-pulse-slow" />

        {/* Bottom Glow Spot */}
        <div className="absolute bottom-[5%] right-[-10%] w-[45vw] h-[45vw] rounded-full filter blur-[120px] opacity-15 dark:opacity-20 bg-gradient-to-r from-amber-500 to-purple-500" />
      </div>

      {/* Interactive Navigation */}
      <Navbar />

      {/* Main Content Showcase */}
      <main className="relative z-10 w-full pt-16">
        {children}
      </main>

      {/* Footer System */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full cursor-pointer bg-white/80 dark:bg-gray-900/80 hover:bg-brand-orange-500 dark:hover:bg-brand-orange-500 hover:text-white dark:hover:text-white border border-gray-200/50 dark:border-gray-800/80 backdrop-blur-md shadow-lg transition-all duration-300 group"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
export default MainLayout;
