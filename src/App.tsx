import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { OmCursor } from './components/OmCursor';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  return (
    <PortfolioProvider>
      <div className="relative min-h-screen bg-cyber-bg text-cyber-light font-sans selection:bg-cyber-cyan selection:text-cyber-bg overflow-x-hidden">
        {/* Custom Om (ॐ) Cursor (Desktop active, touch auto-disabled) */}
        <OmCursor />

        {/* Interactive Mouse Reactive Network & Spotlight Background Canvas */}
        <BackgroundCanvas />

        {/* HUD Scanlines overlay */}
        <div className="fixed inset-0 pointer-events-none z-[1] opacity-20 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_51%)] bg-[length:100%_4px]" />

        {/* Sticky Navbar Header */}
        <Navbar />

        {/* Main Section Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Resume />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals & Overlays */}
        <AdminModal />
        <CommandPalette />
      </div>
    </PortfolioProvider>
  );
}

export default App;
