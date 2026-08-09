import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'expertise', 'success', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Trayectoria' },
    { id: 'expertise', label: 'Competencias' },
    { id: 'success', label: 'Casos de Éxito' },
    { id: 'contact', label: 'Contacto' }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-4 left-0 right-0 w-[calc(100%-2rem)] max-w-[1280px] mx-auto z-50 transition-all duration-300"
      >
        <div
          className={`bg-[#141416]/90 backdrop-blur-md border border-[#232326] px-5 sm:px-6 py-3.5 rounded-2xl flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'shadow-xl shadow-black/40 border-zinc-800' : ''
          }`}
        >
          {/* Brand Logo & Emblem */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="font-display text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-3 group"
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-emerald-400 rounded-lg flex items-center justify-center font-extrabold text-black text-xs transition-transform group-hover:scale-105">
              MS
            </div>
            <div className="flex flex-col">
              <span className="leading-tight text-white font-bold">Mariano Saucedo H.</span>
              <span className="text-[10px] text-zinc-400 font-normal">Servicio Público &amp; Derecho</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 bg-[#1C1C1F] px-5 py-2 rounded-xl border border-[#232326]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`font-body text-xs font-semibold tracking-wide transition-all relative py-1 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-emerald-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Right Action Controls */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right hidden lg:block">
              <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Estatus</p>
              <p className="text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                DISPONIBLE
              </p>
            </div>

            <button
              onClick={onOpenResumeModal}
              className="text-xs font-bold uppercase tracking-wider bg-[#1C1C1F] border border-[#232326] text-zinc-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center gap-1.5"
              title="Ver Resumen Ejecutivo"
            >
              <span className="material-symbols-outlined text-sm text-indigo-400">description</span>
              CV
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="bg-emerald-400 hover:bg-emerald-300 text-black px-4 py-2 rounded-xl font-body text-xs font-extrabold tracking-wide transition-all shadow-lg shadow-emerald-500/10"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResumeModal}
              className="text-xs font-bold uppercase bg-[#1C1C1F] border border-[#232326] text-emerald-400 px-3 py-1.5 rounded-lg"
            >
              CV
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 bg-[#1C1C1F] border border-[#232326] text-white rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0A0A0B]/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-6 md:hidden px-6 transition-all duration-300">
          <div className="text-center mb-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-emerald-400 rounded-xl mx-auto flex items-center justify-center font-bold text-black text-sm mb-2">
              MS
            </div>
            <h3 className="font-display font-bold text-lg text-white">Mariano Saucedo H.</h3>
            <span className="text-xs text-emerald-400 font-mono">PORTAFOLIO BENTO OS</span>
          </div>

          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`w-full text-center py-2.5 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                      : 'text-zinc-300 hover:bg-[#1C1C1F]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-3 w-full max-w-xs border-t border-[#232326]">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full bg-[#1C1C1F] border border-[#232326] text-white py-3 rounded-xl font-body text-xs font-bold uppercase tracking-wider flex justify-center items-center gap-2"
            >
              <span className="material-symbols-outlined text-base text-indigo-400">description</span>
              Curriculum Ejecutivo
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="w-full bg-emerald-400 text-black py-3 rounded-xl text-center font-body text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-emerald-500/20"
            >
              Iniciar Contacto
            </a>
          </div>
        </div>
      )}
    </>
  );
};

