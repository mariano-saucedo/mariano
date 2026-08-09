import React, { useState } from 'react';
import { SUCCESS_CASES_DATA } from '../data/portfolioData';

export const SuccessCasesSection: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState(SUCCESS_CASES_DATA[0].id);

  const activeCase = SUCCESS_CASES_DATA.find((c) => c.id === selectedCaseId) || SUCCESS_CASES_DATA[0];

  return (
    <section className="py-16 md:py-24">
      {/* Header */}
      <div className="text-left mb-8">
        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-indigo-500/20 inline-block mb-3">
          CASOS DE ÉXITO &amp; RESULTADOS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Impacto Institucional y Soluciones
        </h2>
        <p className="font-body text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl">
          Ejemplos de retos administrativos resueltos mediante la integración de legalidad, empatía y eficiencia.
        </p>
      </div>

      {/* Interactive Bento Layout: Left Selector, Right Detailed Case Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Case Navigation Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {SUCCESS_CASES_DATA.map((cCase) => {
            const isSelected = cCase.id === selectedCaseId;
            return (
              <button
                key={cCase.id}
                onClick={() => setSelectedCaseId(cCase.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1C1C1F] border-emerald-400 shadow-lg shadow-emerald-500/10'
                    : 'bg-[#141416] border-[#232326] hover:bg-[#1C1C1F] hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                    {cCase.category}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  )}
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-white mb-1">
                  {cCase.title}
                </h3>
                <p className="font-body text-xs text-zinc-400 line-clamp-2">
                  {cCase.impact}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Case Details Card */}
        <div className="lg:col-span-8 bg-[#141416] border border-[#232326] rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#232326] mb-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                {activeCase.category}
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                {activeCase.title}
              </h3>
            </div>
            <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              {activeCase.impact}
            </div>
          </div>

          {/* Problem & Solution Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#1C1C1F] p-5 rounded-2xl border border-[#232326]">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-amber-400 mb-2">
                <span className="material-symbols-outlined text-base">warning</span>
                Desafío Institucional
              </div>
              <p className="font-body text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {activeCase.problem}
              </p>
            </div>

            <div className="bg-[#1C1C1F] p-5 rounded-2xl border border-[#232326]">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-emerald-400 mb-2">
                <span className="material-symbols-outlined text-base">task_alt</span>
                Estrategia e Intervención
              </div>
              <p className="font-body text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {activeCase.solution}
              </p>
            </div>
          </div>

          {/* Quantitative Metrics Bento Grid */}
          <div className="mb-6">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-400 mb-3">
              Indicadores Cuantitativos Obtenidos:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeCase.metrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="p-4 bg-[#1C1C1F] rounded-2xl border border-[#232326] text-center"
                >
                  <span className="block font-display font-black text-2xl text-emerald-400">
                    {metric.value}
                  </span>
                  <span className="block font-body text-xs text-zinc-300 mt-1 font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#232326]">
            {activeCase.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-[#1C1C1F] text-zinc-400 rounded-lg text-xs font-mono border border-[#232326]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

