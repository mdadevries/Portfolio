import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { LearningOutcomesSection } from './components/LearningOutcomesSection.tsx';
import { ResearchSection } from './components/ResearchSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { SprintsSection } from './components/SprintsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A1A33] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

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
