import React, { useState } from 'react';
import { COMPETENCIES_DATA } from '../data/portfolioData';
import { Competency } from '../types';

export const CompetenciesSection: React.FC = () => {
  const [selectedCompetency, setSelectedCompetency] = useState<Competency | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Collect all unique tags
  const allTags = Array.from(
    new Set(COMPETENCIES_DATA.flatMap((c) => c.tags || []))
  );

  // Filter competencies based on search or active tag
  const filteredCompetencies = COMPETENCIES_DATA.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = activeTag ? c.tags?.includes(activeTag) : true;

    return matchesSearch && matchesTag;
  });

  return (
    <section id="expertise" className="py-16 md:py-24">
      {/* Section Header */}
      <div className="text-left mb-8">
        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-indigo-500/20 inline-block mb-3">
          MÓDULOS DE EXPERTOS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Competencias Clave
        </h2>
        <p className="font-body text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl">
          Dominio técnico, normativo y humano estructurado para resolver desafíos de alta exigencia en la función pública.
        </p>
      </div>

      {/* Filter & Search Bar Bento Box */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-[#141416] p-4 rounded-2xl border border-[#232326]">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-lg">
            search
          </span>
          <input
            type="text"
            placeholder="Buscar competencia o palabra clave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-8 py-2 bg-[#1C1C1F] border border-[#232326] rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>

        {/* Tag Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
              activeTag === null
                ? 'bg-white text-black'
                : 'bg-[#1C1C1F] text-zinc-400 border border-[#232326] hover:text-white'
            }`}
          >
            Todas
          </button>
          {allTags.map((tag) => {
            const isSelected = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(isSelected ? null : tag)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  isSelected
                    ? 'bg-emerald-400 text-black font-bold'
                    : 'bg-[#1C1C1F] text-zinc-400 border border-[#232326] hover:text-white'
                }`}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Competencies Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCompetencies.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedCompetency(item)}
            className="bento-card rounded-3xl p-6 flex flex-col justify-between gap-4 cursor-pointer group"
          >
            <div>
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-[#1C1C1F] border border-[#232326] flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl">
                  {item.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-body text-xs text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Card Footer / Tags */}
            <div className="pt-4 border-t border-[#232326] flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {item.tags?.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono text-zinc-500 bg-[#1C1C1F] px-2 py-0.5 rounded-md border border-[#232326]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ver Más
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredCompetencies.length === 0 && (
        <div className="text-center py-12 bg-[#141416] rounded-3xl border border-[#232326]">
          <span className="material-symbols-outlined text-4xl text-zinc-600 mb-2">
            search_off
          </span>
          <p className="font-body text-xs text-zinc-400">
            No se encontraron competencias para &quot;{searchQuery}&quot;.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveTag(null);
            }}
            className="mt-3 text-xs font-bold text-emerald-400 underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Modal for Competency Detail in Dark Bento Theme */}
      {selectedCompetency && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div
            className="bg-[#141416] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#232326] animate-fadeIn text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCompetency(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-[#1C1C1F]"
              aria-label="Cerrar modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-600/30">
                <span className="material-symbols-outlined text-2xl">
                  {selectedCompetency.icon}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  Módulo Competencial
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  {selectedCompetency.title}
                </h3>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed bg-[#1C1C1F] p-4 rounded-2xl border border-[#232326]">
              {selectedCompetency.description}
            </p>

            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-400 mb-3">
              Capacidades y Alcances Operativos:
            </h4>
            <ul className="space-y-2.5 mb-6">
              {selectedCompetency.details?.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-zinc-200 font-body">
                  <span className="material-symbols-outlined text-emerald-400 text-base flex-shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {selectedCompetency.tags?.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-[#1C1C1F] text-zinc-300 rounded-lg text-xs font-mono border border-[#232326]"
                >
                  #{t}
                </span>
              ))}
            </div>

            <div className="flex justify-end pt-4 border-t border-[#232326]">
              <button
                onClick={() => setSelectedCompetency(null)}
                className="bg-white text-black px-6 py-2 rounded-xl text-xs font-extrabold uppercase hover:bg-zinc-200"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

