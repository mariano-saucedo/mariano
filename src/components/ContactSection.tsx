import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate network transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      {/* Section Header */}
      <div className="text-left mb-8">
        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-500/20 inline-block mb-3">
          CONTACTO DIRECTO &amp; VÍNCULO
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Iniciemos una Colaboración
        </h2>
        <p className="font-body text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl">
          Apertura inmediata para colaboraciones institucionales, asesoría técnica o incorporación a proyectos de alto impacto público.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left Column: Information Bento Card */}
        <div className="bg-[#141416] border border-[#232326] rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 bento-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none"></div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 block mb-2">
              Canales Oficiales
            </span>
            <h3 className="font-display font-bold text-xl text-white mb-4">
              Información de Enlace Directo
            </h3>
            <p className="font-body text-xs text-zinc-400 leading-relaxed mb-6">
              Si buscas un perfil que combine rigor jurídico, capacidad operativa y un genuino enfoque humano para liderar equipos y resolver retos institucionales, estoy a tu disposición.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3.5 bg-[#1C1C1F] rounded-2xl border border-[#232326]">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase">Ubicación</span>
                  <span className="font-body text-xs font-bold text-white">{CONTACT_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-[#1C1C1F] rounded-2xl border border-[#232326]">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </div>
                <div className="flex-1">
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase">Correo Electrónico</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="font-body text-xs font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs text-emerald-400 hover:underline flex items-center gap-0.5 ml-auto font-mono"
                      title="Copiar correo"
                    >
                      <span className="material-symbols-outlined text-xs">content_copy</span>
                      {copiedEmail ? 'Copiado' : 'Copiar'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#1C1C1F] rounded-2xl border border-[#232326]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Disponibilidad Institucional
            </div>
            <p className="font-body text-xs text-zinc-400">
              {CONTACT_INFO.availability}
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form Bento Card */}
        <div className="bg-[#141416] border border-[#232326] rounded-3xl p-6 sm:p-8 bento-card">
          {submittedSuccess ? (
            <div className="text-center py-12 px-4 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Mensaje Enviado Exitosamente
              </h3>
              <p className="font-body text-xs text-zinc-400 max-w-sm mx-auto">
                Gracias por comunicarte. He recibido tu consulta y me pondré en contacto a la brevedad.
              </p>
              <button
                onClick={() => setSubmittedSuccess(false)}
                className="mt-4 px-6 py-2.5 bg-[#1C1C1F] border border-[#232326] text-white rounded-xl text-xs font-bold hover:bg-[#232326]"
              >
                Enviar Otro Mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label
                  className="font-body text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1.5"
                  htmlFor="name"
                >
                  Nombre Completo *
                </label>
                <input
                  className="w-full bento-input rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none"
                  id="name"
                  name="name"
                  placeholder="Ej. Lic. Roberto Alarcón"
                  required
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  className="font-body text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1.5"
                  htmlFor="email"
                >
                  Correo Electrónico *
                </label>
                <input
                  className="w-full bento-input rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none"
                  id="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  className="font-body text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1.5"
                  htmlFor="subject"
                >
                  Asunto
                </label>
                <input
                  className="w-full bento-input rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none"
                  id="subject"
                  name="subject"
                  placeholder="Propuesta de colaboración / Consulta"
                  required
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  className="font-body text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1.5"
                  htmlFor="message"
                >
                  Mensaje *
                </label>
                <textarea
                  className="w-full bento-input rounded-xl p-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none resize-none"
                  id="message"
                  name="message"
                  placeholder="¿Cómo puedo ayudar a su institución?"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-500 transition-all flex justify-center items-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <span className="material-symbols-outlined text-base">send</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

