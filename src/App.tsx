import React, { useState, useEffect } from 'react';
import { CyberBackground } from './components/CyberBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { ResumeSection } from './components/ResumeSection';
import { ProfessionalPresence } from './components/ProfessionalPresence';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'experience', 'resume', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-[#00ff9d]/30 selection:text-[#00ff9d] cyber-grid font-sans">
      
      {/* Dynamic Cyber Node & Particle Canvas */}
      <CyberBackground />

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Page Layout Sections */}
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <ResumeSection />
        <ProfessionalPresence />
        <Contact />
      </main>

      {/* Footer & Floating Return to Top */}
      <Footer />
      <ScrollToTop />

    </div>
  );
};

export default App;
