import React, { useState } from 'react';
import { Send, CheckCircle2, Building2, User, MessageSquare } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ContactForm() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    comentario: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.empresa.trim()) return;
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="contacto" className="py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Prueba DocumentAI Gratis en tu Empresa
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Déjanos tus datos y te configuramos una prueba con tus propias facturas y plantillas de Excel.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-[#e8f6f4] text-[#086b6d] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">¡Solicitud recibida con éxito!</h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Gracias, <strong>{formData.nombre}</strong>. Nos contactaremos con el equipo de <strong>{formData.empresa}</strong> en menos de 24 horas para habilitar tu acceso.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ nombre: '', empresa: '', comentario: '' });
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#086b6d]" />
                  <span>Nombre completo *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Emanuel Gómez"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#086b6d]/30 focus:border-[#086b6d] transition-all"
                />
              </div>

              {/* Empresa */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#086b6d]" />
                  <span>Empresa o Estudio Contable *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Distribuidora Norte S.A."
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#086b6d]/30 focus:border-[#086b6d] transition-all"
                />
              </div>

              {/* Comentario */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#086b6d]" />
                  <span>Comentario o volumen mensual</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Cuéntanos qué tipo de documentos procesas (facturas de compra, tickets, recibos) o dudas que tengas..."
                  value={formData.comentario}
                  onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
                  className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl p-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#086b6d]/30 focus:border-[#086b6d] transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#086b6d] hover:bg-[#056467] text-white text-base font-bold shadow-lg shadow-[#086b6d]/25 transition-all hover:shadow-xl active:scale-95 cursor-pointer"
              >
                <span>Solicitar Prueba Gratis</span>
                <Send className="w-4 h-4 text-[#f7c948]" />
              </button>

              <p className="text-center text-xs text-slate-500">
                Respuesta en menos de 24 horas
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
