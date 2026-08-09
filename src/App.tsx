import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { EducationSection } from './components/EducationSection';
import { SuccessCasesSection } from './components/SuccessCasesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-body flex flex-col pt-20">
      {/* Top Navbar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Container matching Executive Minimalist layout */}
      <main className="max-w-[1280px] w-full mx-auto px-4 md:px-6 flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExplorePortfolio={() => scrollToSection('expertise')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. Sobre Mí Section */}
        <AboutSection />

        {/* 3. Áreas de Expertise / Competencias Clave */}
        <CompetenciesSection />

        {/* 4. Estudios y Certificaciones */}
        <EducationSection />

        {/* 5. Casos de Éxito / Proyectos */}
        <SuccessCasesSection />

        {/* 6. Contacto */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Curriculum Summary Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

