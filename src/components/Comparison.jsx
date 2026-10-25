import React from 'react';
import { XCircle, CheckCircle2, TrendingUp, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Comparison() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    Tu equipo puede dedicar el día a algo más que tipear.
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            La diferencia se nota cuando llega el cierre y los documentos ya están organizados.
          </p>
        </div>

        {/* Side by side comparison cards */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card: Tradicional */}
          <div className="bg-red-50/40 border border-red-200/80 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Transcripción Manual</h3>
                  <p className="text-xs text-red-700 font-semibold">El método lento y propenso a errores</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>10 a 15 minutos</strong> por cada factura con ítems detallados.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Tasa de error del 4% al 8%</strong> en dígitos, comas decimales y fechas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Cierres de mes caóticos y horas extra no productivas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Documentos perdidos en bandejas de entrada o fotos borrosas de WhatsApp.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-red-200/80 text-xs text-red-800 font-bold">
              Costo estimado: +$800 USD/mes por empleado en tiempo desperdiciado.
            </div>
          </div>

          {/* Card: Con DocumentAI */}
          <div className="bg-gradient-to-b from-[#e8f6f4]/80 to-white border-2 border-[#086b6d] rounded-2xl p-8 shadow-xl flex flex-col justify-between relative">
            <div className="absolute -top-3.5 right-6 bg-[#086b6d] text-[#ffd24d] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Recomendado
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#086b6d] text-white flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6 text-[#ffd24d]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Con DocumentAI</h3>
                  <p className="text-xs text-[#086b6d] font-bold">Automatización con Visión Artificial</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-800">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#086b6d] shrink-0 mt-0.5" />
                  <span><strong>Menos de 3 segundos</strong> por comprobante, procesados en paralelo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#086b6d] shrink-0 mt-0.5" />
                  <span><strong>99.4% de precisión</strong> comprobada con doble validación matemática.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#086b6d] shrink-0 mt-0.5" />
                  <span>Cierres contables en tiempo récord con un solo clic a Excel (.xlsx).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#086b6d] shrink-0 mt-0.5" />
                  <span>Soporta cualquier archivo: escaneos, capturas de móvil y PDFs nativos.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#086b6d]/30 text-xs text-[#056467] font-extrabold flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#086b6d]" />
              <span>Ahorro comprobado: 95% de reducción en tiempo de digitación.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
