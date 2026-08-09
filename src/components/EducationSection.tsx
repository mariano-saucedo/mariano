import React, { useState } from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { EducationItem } from '../types';

export const EducationSection: React.FC = () => {
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);

  return (
    <section id="success" className="py-16 md:py-24">
      {/* Header */}
      <div className="text-left mb-8">
        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-indigo-500/20 inline-block mb-3">
          FORMACIÓN ACADÉMICA
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Estudios y Certificaciones
        </h2>
        <p className="font-body text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl">
          Preparación continua multidisciplinaria que integra rigor legal, sensibilidad técnica y destrezas operativas.
        </p>
      </div>

      {/* Bento Grid layout for Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EDUCATION_DATA.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedEducation(item)}
            className="bento-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer group"
          >
            <div className="flex items-start gap-4 mb-4">
              {/* Badge Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#1C1C1F] border border-[#232326] text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:border-emerald-500 transition-transform">
                <span className="material-symbols-outlined text-2xl icon-fill">
                  {item.icon}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                    {item.institution}
                  </span>
                  <span className="text-xs text-zinc-500 group-hover:text-emerald-400 transition-colors flex items-center gap-0.5">
                    Detalles
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {item.degree}
                </h3>
              </div>
            </div>

            <p className="font-body text-xs text-zinc-400 leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Key Skill Badges */}
            <div className="pt-3 border-t border-[#232326] flex flex-wrap gap-1.5">
              {item.keySkills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[10px] font-medium bg-[#1C1C1F] border border-[#232326] text-zinc-300 px-2.5 py-1 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Detailed view for Education Item */}
      {selectedEducation && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div
            className="bg-[#141416] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#232326] animate-fadeIn text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEducation(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-[#1C1C1F]"
              aria-label="Cerrar modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl icon-fill">
                  {selectedEducation.icon}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">
                  {selectedEducation.institution}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  {selectedEducation.degree}
                </h3>
              </div>
            </div>

            <div className="bg-[#1C1C1F] p-4 rounded-2xl border border-[#232326] mb-6">
              <p className="font-body text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {selectedEducation.description}
              </p>
            </div>

            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-400 mb-3">
              Competencias Adquiridas &amp; Aplicación Institucional:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {selectedEducation.keySkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-[#1C1C1F] p-2.5 rounded-xl border border-[#232326] text-xs font-semibold text-white flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  {skill}
                </div>
              ))}
            </div>

            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-base text-emerald-400">verified</span>
              <span>
                Documentación y títulos oficiales verificados para el ejercicio público e institucional.
              </span>
            </div>

            <div className="flex justify-end pt-4 border-t border-[#232326]">
              <button
                onClick={() => setSelectedEducation(null)}
                className="bg-white text-black px-6 py-2 rounded-xl text-xs font-extrabold uppercase hover:bg-zinc-200"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

