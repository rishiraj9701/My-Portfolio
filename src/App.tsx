import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { MainLayout } from './components/layout/MainLayout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';

export default function App() {
  useEffect(() => {
    // Ensure browser scroll restoration is disabled on full reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Reset scroll to top immediately on initial mount
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // If reloaded with a hash fragment, clear it so it doesn't force scroll down
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Secondary frame check to prevent delayed browser jumps
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <MainLayout>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Services />
        <Contact />
      </MainLayout>
    </ThemeProvider>
  );
}
