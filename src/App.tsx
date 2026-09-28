import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { MethodologySection } from './components/MethodologySection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { LearningOutcomesSection } from './components/LearningOutcomesSection.tsx';
import { ResearchSection } from './components/ResearchSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { SprintsSection } from './components/SprintsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text-primary))] flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Skiplink voor toetsenbordgebruikers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-cyan-500 focus:text-[rgb(var(--bg))] focus:font-semibold"
      >
        Ga naar inhoud
      </a>

      {/* 1. Sticky Navbar */}
      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* 2. Hero Section (bevat de enige H1) */}
        <HeroSection />

        {/* 2b. Scrum-methodiek, los van de hero voor een rustig eerste scherm */}
        <MethodologySection />

        {/* 3. Over mij (#over-mij) */}
        <AboutSection />

        {/* 4. Leeruitkomsten (#leeruitkomsten) */}
        <LearningOutcomesSection />

        {/* 5. Onderzoek (#onderzoek) */}
        <ResearchSection />

        {/* 6. Projecten (#projecten) */}
        <ProjectsSection />

        {/* 7. Sprint-overzicht (#sprints) */}
        <SprintsSection />

        {/* 8. Contact (#contact) */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
