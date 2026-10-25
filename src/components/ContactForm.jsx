import React, { useState } from 'react';
import { Send, CheckCircle2, Building2, User, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ContactForm() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    comentario: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.empresa.trim()) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('Las variables de entorno de EmailJS no están configuradas en el archivo .env (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID o VITE_EMAILJS_PUBLIC_KEY).');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const templateParams = {
        nombre_completo: formData.nombre.trim(),
        nombre_negocio: formData.empresa.trim(),
        comentario: formData.comentario.trim() || 'Sin comentarios adicionales'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitted(true);
    } catch (err) {
      console.error('Error al enviar el formulario a través de EmailJS:', err);
      setError(
        err?.text || 
        err?.message || 
        'Ocurrió un error al enviar tu consulta. Por favor, verifica las credenciales o intenta nuevamente.'
      );
    } finally {
      setLoading(false);
    }
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
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ nombre: '', empresa: '', comentario: '' });
                  setError(null);
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3 animate-in fade-in duration-200">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-red-800">No se pudo enviar la consulta</p>
                    <p className="text-xs text-red-600 leading-relaxed">{error}</p>
                  </div>
                </div>
              )}

              {/* Nombre */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#086b6d]" />
                  <span>Nombre completo *</span>
                </label>
                <input
                  type="text"
                  required
                  disabled={loading}
                  placeholder="Ej. Emanuel Gómez"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#086b6d]/30 focus:border-[#086b6d] transition-all disabled:opacity-60"
                />
              </div>

              {/* Empresa */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#086b6d]" />
                  <span>Nombre del Negocio o empresa *</span>
                </label>
                <input
                  type="text"
                  required
                  disabled={loading}
                  placeholder="Ej. Distribuidora Norte S.A."
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#086b6d]/30 focus:border-[#086b6d] transition-all disabled:opacity-60"
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
                  disabled={loading}
                  placeholder="Cuéntanos qué tipo de documentos procesas (facturas de compra, tickets, recibos) o dudas que tengas..."
                  value={formData.comentario}
                  onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
                  className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl p-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#086b6d]/30 focus:border-[#086b6d] transition-all resize-none disabled:opacity-60"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#086b6d] hover:bg-[#056467] disabled:opacity-70 disabled:cursor-not-allowed text-white text-base font-bold shadow-lg shadow-[#086b6d]/25 transition-all hover:shadow-xl active:scale-95 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                    <span>Enviando consulta...</span>
                  </>
                ) : (
                  <>
                    <span>Solicitar Prueba Gratis</span>
                    <Send className="w-4 h-4 text-[#f7c948]" />
                  </>
                )}
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
