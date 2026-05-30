import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { MainLayout } from './components/layout/MainLayout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        {/* Full Portfolio Layout Section Nodes */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </MainLayout>
    </ThemeProvider>
  );
}

