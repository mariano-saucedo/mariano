import React from 'react';
import { HERO_DATA, ABOUT_DATA, COMPETENCIES_DATA, EDUCATION_DATA, CONTACT_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#141416] rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative shadow-2xl border border-[#232326] my-8 max-h-[90vh] overflow-y-auto print:bg-white print:text-black print:max-h-none print:shadow-none print:border-none print:my-0">
        {/* Controls - Hide on print */}
        <div className="flex justify-between items-center pb-4 border-b border-[#232326] mb-6 print:hidden">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-mono">
            <span className="material-symbols-outlined text-base">description</span>
            Resumen Ejecutivo Oficial
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-emerald-500 text-black px-4 py-1.5 rounded-xl text-xs font-extrabold hover:bg-emerald-400 transition-colors flex items-center gap-1.5 uppercase tracking-wider"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              Imprimir / PDF
            </button>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-[#1C1C1F]"
              aria-label="Cerrar modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="text-left font-body">
          {/* Resume Header */}
          <div className="border-b border-[#232326] print:border-black pb-6 mb-6">
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white print:text-black mb-1">
              {HERO_DATA.name}
            </h1>
            <p className="font-display font-bold text-xs sm:text-sm text-emerald-400 print:text-emerald-700 mb-3">
              Abogado &amp; Servidor Público | Liderazgo, Gestión y Atención Ciudadana
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-zinc-400 print:text-zinc-700 font-mono">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                {CONTACT_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">mail</span>
                {CONTACT_INFO.email}
              </span>
            </div>
          </div>

          {/* Perfil Ejecutivo */}
          <div className="mb-6">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-indigo-400 print:text-indigo-800 border-b border-[#232326] print:border-zinc-300 pb-1 mb-2">
              Perfil Ejecutivo &amp; Visión
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 print:text-zinc-900 leading-relaxed">
              {ABOUT_DATA.paragraphs[0]}
            </p>
          </div>

          {/* Formación Académica */}
          <div className="mb-6">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-indigo-400 print:text-indigo-800 border-b border-[#232326] print:border-zinc-300 pb-1 mb-3">
              Formación Académica y Certificaciones
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="p-3.5 bg-[#1C1C1F] print:bg-zinc-100 rounded-2xl border border-[#232326] print:border-zinc-300">
                  <h3 className="font-display font-bold text-xs text-white print:text-black">
                    {edu.degree}
                  </h3>
                  <span className="block text-[11px] text-emerald-400 print:text-emerald-700 font-bold mt-0.5 font-mono">
                    {edu.institution}
                  </span>
                  <p className="text-[11px] text-zinc-400 print:text-zinc-700 mt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Competencias Clave */}
          <div className="mb-6">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-indigo-400 print:text-indigo-800 border-b border-[#232326] print:border-zinc-300 pb-1 mb-3">
              Competencias Clave y Dominios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COMPETENCIES_DATA.map((comp) => (
                <div key={comp.id} className="text-xs">
                  <strong className="block font-display text-white print:text-black font-semibold">
                    • {comp.title}
                  </strong>
                  <span className="text-zinc-400 print:text-zinc-700 text-[11px] leading-tight block ml-3 mt-0.5">
                    {comp.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pilares Institucionales */}
          <div className="p-4 bg-[#1C1C1F] print:bg-zinc-100 rounded-2xl border border-[#232326] print:border-zinc-300 text-xs">
            <h3 className="font-display font-bold text-white print:text-black mb-1">
              Compromiso con el Servicio Público
            </h3>
            <p className="text-zinc-400 print:text-zinc-700">
              Apego estricto a los principios de legalidad, honradez, lealtad, imparcialidad y eficiencia en la atención al ciudadano y la administración pública.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-[#232326] flex justify-end gap-3 print:hidden">
          <button
            onClick={onClose}
            className="bg-white text-black px-6 py-2 rounded-xl text-xs font-extrabold uppercase hover:bg-zinc-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

