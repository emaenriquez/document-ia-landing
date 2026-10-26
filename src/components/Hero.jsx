import React from 'react';
import { 
  FileSpreadsheet, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  FileCheck,
  ChevronDown
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background radial gradient decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#e8f6f4]/60 via-[#f3f6f8]/40 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
            De facturas a{' '}
            <span className="relative inline-block text-[#086b6d]">
              datos
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#f7c948]/80" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="6" fill="transparent" strokeLinecap="round" />
              </svg>
            </span>{' '}
            listos para trabajar en cuestión de segundos.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
            Convierte PDFs, fotos y tickets en planillas claras. DocumentAI extrae cada dato y te entrega un Excel listo para tu equipo.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#086b6d] hover:bg-[#056467] text-white font-bold text-base shadow-lg shadow-[#086b6d]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <span>Probar Gratis</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs transition-all"
            >
              <FileSpreadsheet className="w-5 h-5 text-[#086b6d]" />
              <span>Ver Cómo Funciona</span>
            </a>
          </div>

        </div>

        {/* Product Visual Mockup Showcase (Tablet Mockup) */}
        <div className="mt-12 relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl md:rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-slate-200/80 to-slate-300/40 border border-slate-300/60 shadow-2xl">
            <img 
              src="/Flujo---3.-Revisar@3x.png" 
              alt="Interfaz de DocumentAI procesando factura de ForgeWorks Manufacturing en tiempo real" 
              className="w-full h-auto rounded-xl md:rounded-2xl shadow-inner border border-slate-900/10 object-cover"
            />
            

            {/* Floating verification badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 md:left-8 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-xl items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#e8f6f4] text-[#086b6d] flex items-center justify-center font-bold">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#086b6d]">Validación en Vivo</div>
                <div className="text-sm font-extrabold text-slate-800">100% Filas coincidentes con Total</div>
              </div>
            </div>

            {/* Floating Excel badge */}
            <div className="hidden sm:flex absolute -top-5 -right-4 md:right-8 bg-[#056467] text-white border border-teal-500/30 rounded-2xl p-4 shadow-xl items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <FileSpreadsheet className="w-6 h-6 text-[#f7c948]" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal-200">Exportación Directa</div>
                <div className="text-sm font-extrabold text-white">Excel organizado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
