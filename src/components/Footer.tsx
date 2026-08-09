import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-[#eceef0] w-full py-12 border-t border-[#c5c6cd]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display text-lg font-bold text-black">
            Mariano Saucedo Hernández
          </span>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="text-[#44474d] font-body text-xs uppercase tracking-wider font-semibold hover:text-[#009668] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="text-[#44474d] font-body text-xs uppercase tracking-wider font-semibold hover:text-[#009668] transition-colors"
            >
              Terms of Service
            </button>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#44474d] font-body text-xs uppercase tracking-wider font-semibold hover:text-[#009668] transition-colors flex items-center gap-1"
            >
              LinkedIn
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </a>
          </div>

          <p className="text-[#44474d] font-body text-xs text-center md:text-right">
            © {new Date().getFullYear()} Mariano Saucedo Hernández. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Simple Terms / Privacy Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-xl border border-[#c5c6cd]/30 animate-fadeIn text-left">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-[#75777e] hover:text-black p-1 rounded-full hover:bg-[#eceef0]"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <h3 className="font-display font-bold text-lg text-black mb-3">
              {modalType === 'privacy' ? 'Política de Privacidad' : 'Términos de Servicio'}
            </h3>

            <p className="font-body text-xs text-[#44474d] leading-relaxed mb-4">
              {modalType === 'privacy'
                ? 'Los datos proporcionados en el formulario de contacto se utilizan únicamente para responder a consultas profesionales e institucionales. No se comparten datos con terceros.'
                : 'Este portafolio presenta la información profesional de Mariano Saucedo Hernández con fines informativos y de contacto profesional.'}
            </p>

            <div className="flex justify-end pt-3 border-t border-[#eceef0]">
              <button
                onClick={() => setModalType(null)}
                className="bg-black text-white px-4 py-1.5 rounded text-xs font-semibold hover:bg-black/85"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
