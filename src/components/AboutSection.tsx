import React, { useState } from 'react';
import { ABOUT_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="about" className="py-16 md:py-24">
      {/* Header Container */}
      <div className="mb-8">
        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-indigo-500/20 inline-block mb-3">
          TRAYECTORIA &amp; PERFIL
        </span>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          {ABOUT_DATA.title}
        </h2>
      </div>

      {/* Narrative Bento Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
        <div className="lg:col-span-8 bg-[#141416] border border-[#232326] rounded-3xl p-6 sm:p-8 space-y-4 bento-card">
          <p className="font-body text-sm sm:text-base text-zinc-300 leading-relaxed">
            {ABOUT_DATA.paragraphs[0]}
          </p>
          <p className="font-body text-sm sm:text-base text-zinc-400 leading-relaxed">
            {ABOUT_DATA.paragraphs[1]}
          </p>
        </div>

        <div className="lg:col-span-4 bg-[#141416] border border-[#232326] rounded-3xl p-6 sm:p-8 flex flex-col justify-between bento-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none"></div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-2">Visión Integradora</span>
            <h3 className="font-display font-bold text-lg text-white mb-3">
              Solución a Retos Complejos
            </h3>
            <p className="font-body text-xs text-zinc-400 leading-relaxed">
              {ABOUT_DATA.paragraphs[2]}
            </p>
          </div>
          <div className="pt-4 border-t border-[#232326] mt-4 flex items-center justify-between text-xs font-bold text-emerald-400">
            <span>Rigor + Sensibilidad</span>
            <span className="material-symbols-outlined text-sm">balance</span>
          </div>
        </div>
      </div>

      {/* Interactive Pillar Selector (Bento Grid) */}
      <div className="bg-[#141416] border border-[#232326] rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#232326] pb-5 mb-6">
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Trinomio de Capacidad Profesional
            </h3>
            <p className="font-body text-xs text-zinc-400 mt-0.5">
              Haz clic en cada módulo para explorar la aplicación práctica en el servicio público
            </p>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full self-start sm:self-auto">
            Sinergia
          </span>
        </div>

        {/* Pillar Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {ABOUT_DATA.pillars.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <button
                key={idx}
                onClick={() => setActivePillar(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-br from-indigo-600 to-violet-700 text-white border-indigo-500 shadow-lg shadow-indigo-500/20'
                    : 'bg-[#1C1C1F] text-zinc-300 border-[#232326] hover:bg-[#232326] hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`material-symbols-outlined text-2xl ${isSelected ? 'text-white' : 'text-emerald-400'}`}>
                    {pillar.icon}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  )}
                </div>
                <div>
                  <span className={`block font-display font-bold text-sm leading-tight ${isSelected ? 'text-white' : 'text-white'}`}>
                    {pillar.title}
                  </span>
                  <span className={`block font-body text-xs mt-1 ${isSelected ? 'text-indigo-100' : 'text-zinc-500'}`}>
                    {pillar.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Details Container */}
        {ABOUT_DATA.pillars[activePillar] && (
          <div className="bg-[#1C1C1F] p-6 rounded-2xl border border-[#232326] animate-fadeIn">
            <h4 className="font-display font-bold text-sm text-white mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-400 text-lg">
                check_circle
              </span>
              {ABOUT_DATA.pillars[activePillar].title}
            </h4>
            <p className="font-body text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed">
              {ABOUT_DATA.pillars[activePillar].description}
            </p>

            <div>
              <span className="block font-body text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                Aportaciones Clave:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {ABOUT_DATA.pillars[activePillar].highlights.map((item, hIdx) => (
                  <li key={hIdx} className="bg-[#141416] px-3 py-2 rounded-xl border border-[#232326] text-xs font-medium text-zinc-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

