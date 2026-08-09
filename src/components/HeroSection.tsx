import React from 'react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onExplorePortfolio: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePortfolio,
  onContactClick
}) => {
  return (
    <section id="hero" className="pt-28 pb-16 md:py-24">
      {/* Bento Grid Layout Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {/* 1. Main Headline Bento Card (Col span 2 / Row span 2) */}
        <div className="md:col-span-2 lg:col-span-2 bg-[#141416] border border-[#232326] rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group bento-card">
          {/* Ambient Purple/Indigo Radial Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/15 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[11px] font-bold uppercase tracking-widest rounded-full border border-indigo-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              LIDERAZGO &amp; DERECHO ADMINISTRATIVO
            </div>

            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
              Mariano Saucedo H.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500 font-bold">
                Servicio Público Eficiente y Humano
              </span>
            </h1>

            <p className="font-body text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8 max-w-xl">
              {HERO_DATA.subtitle}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 pt-6 border-t border-[#232326]">
            <button
              onClick={onExplorePortfolio}
              className="bg-white text-black hover:bg-zinc-200 px-6 py-3 rounded-xl font-body text-xs font-bold uppercase tracking-wide transition-all flex items-center gap-2 shadow-lg shadow-white/5"
            >
              Explorar Competencias
              <span className="material-symbols-outlined text-base">arrow_downward</span>
            </button>

            <button
              onClick={onContactClick}
              className="bg-[#1C1C1F] hover:bg-[#232326] border border-[#232326] text-white px-5 py-3 rounded-xl font-body text-xs font-bold uppercase tracking-wide transition-all flex items-center gap-2"
            >
              Contactar
              <span className="material-symbols-outlined text-base text-emerald-400">mail</span>
            </button>
          </div>
        </div>

        {/* 2. Photo Bento Card (Col span 1) */}
        <div className="md:col-span-1 lg:col-span-1 bg-[#141416] border border-[#232326] rounded-3xl p-4 flex flex-col justify-between relative overflow-hidden group bento-card">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#1C1C1F] border border-[#232326]">
            <img
              src={HERO_DATA.profileImage}
              alt="Mariano Saucedo Hernández"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
              }}
            />
            {/* Status Floating Pill */}
            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-zinc-700/50 text-[10px] font-bold text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              OFICIAL
            </div>
          </div>

          <div className="mt-3 px-2 flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-white">Mariano Saucedo H.</p>
              <p className="text-[10px] text-zinc-500 font-mono">Lic. en Derecho</p>
            </div>
            <div className="w-8 h-8 rounded-xl bg-[#1C1C1F] border border-[#232326] flex items-center justify-center text-indigo-400">
              <span className="material-symbols-outlined text-base">verified</span>
            </div>
          </div>
        </div>

        {/* 3. High Impact Emerald Highlight Card (Col span 1) */}
        <div className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-3xl p-6 flex flex-col justify-between text-black shadow-xl shadow-emerald-500/10 group">
          <div className="flex justify-between items-start">
            <span className="font-extrabold text-[10px] uppercase tracking-widest bg-black/10 px-2.5 py-1 rounded-full">
              Satisfacción
            </span>
            <span className="material-symbols-outlined text-black/70 text-2xl">verified_user</span>
          </div>

          <div className="my-4">
            <h3 className="text-4xl lg:text-5xl font-black tracking-tighter">98%</h3>
            <p className="text-xs font-extrabold uppercase tracking-wide opacity-80 mt-1">
              Índice en Gestión Ciudadana
            </p>
          </div>

          <div className="pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-bold">
            <span>Rigor + Empatía</span>
            <span className="material-symbols-outlined text-sm">trending_up</span>
          </div>
        </div>

        {/* 4. Quick Multidisciplinary Matrix Card (Col span 2) */}
        <div className="md:col-span-2 lg:col-span-2 bg-[#141416] border border-[#232326] rounded-3xl p-6 flex flex-col justify-between bento-card">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
              <p className="text-zinc-400 font-bold text-xs uppercase tracking-wider">Trinomio de Competencias</p>
            </div>
            <span className="text-[10px] text-indigo-400 font-mono">Sinergia Operativa</span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-[#1C1C1F] border border-[#232326] rounded-2xl">
              <span className="material-symbols-outlined text-indigo-400 text-lg mb-1 block">gavel</span>
              <p className="text-xs font-bold text-white">Derecho</p>
              <p className="text-[10px] text-zinc-500 mt-0.5">Marco Normativo</p>
            </div>
            <div className="p-3 bg-[#1C1C1F] border border-[#232326] rounded-2xl">
              <span className="material-symbols-outlined text-emerald-400 text-lg mb-1 block">health_and_safety</span>
              <p className="text-xs font-bold text-white">Enfermería</p>
              <p className="text-[10px] text-zinc-500 mt-0.5">Empatía y Crisis</p>
            </div>
            <div className="p-3 bg-[#1C1C1F] border border-[#232326] rounded-2xl">
              <span className="material-symbols-outlined text-amber-400 text-lg mb-1 block">settings_suggest</span>
              <p className="text-xs font-bold text-white">Operaciones</p>
              <p className="text-[10px] text-zinc-500 mt-0.5">Captura &amp; Gestión</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#232326] flex justify-between items-center text-xs text-zinc-500 font-mono">
            <span>Apego Normativo: <strong className="text-emerald-400">100% Legalidad</strong></span>
            <span>Años de Experiencia Integrada</span>
          </div>
        </div>

        {/* 5. Indigo Collaborative Callout Card (Col span 2) */}
        <div className="md:col-span-1 lg:col-span-2 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 rounded-3xl p-6 flex flex-col justify-between text-white shadow-xl shadow-indigo-600/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
              Enfoque en Soluciones
            </span>
            <span className="material-symbols-outlined text-white/80">hub</span>
          </div>

          <div className="my-2">
            <h4 className="text-lg font-bold">Alineación Institucional &amp; Trabajo en Equipo</h4>
            <p className="text-xs text-indigo-100 mt-1 leading-relaxed">
              Capacidad probada de dirigir personal administrativo, coordinar ventanillas de atención y estandarizar datos.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-white/20 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Prácticas de Gobierno Transparente y Eficiente</span>
          </div>
        </div>

      </div>
    </section>
  );
};

