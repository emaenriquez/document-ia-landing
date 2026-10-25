import React from 'react';
import { UploadCloud, Cpu, FileSpreadsheet, ArrowRight, Check } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import useStaggerReveal from '../hooks/useStaggerReveal';

const STEPS = [
  {
    step: '01',
    title: 'Sube tus documentos',
    description: 'Carga PDFs, fotos o tickets, uno por uno o en lote. También puedes incluir archivos de varias páginas',
    icon: UploadCloud,
    details: ['PDF','JPG','PNG']
  },
  {
    step: '02',
    title: 'La IA organiza los datos',
    description: 'DocumentAI detecta proveedores, fechas, impuestos y renglones, y comprueba que los importes coincidan.',
    icon: Cpu,
    details: ['Extracción', 'validación automática']
  },
  {
    step: '03',
    title: 'Exporta y sigue trabajando',
    description: 'Revisa la información y descarga una planilla ordenada para Excel, Google Sheets o tu sistema contable.',
    icon: FileSpreadsheet,
    details: ['Excel','CSV']
  }
];

export default function Workflow() {
  const headerRef = useScrollReveal();
  const [gridRef, visibleCount] = useStaggerReveal(STEPS.length, { staggerMs: 150 });
  const bannerRef = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            De documentos desordenados a planillas limpias en 3 pasos
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Olvídate de transcribir números a mano durante los cierres mensuales.
          </p>
        </div>

        {/* Steps Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className={`relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between ${idx < visibleCount ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#086b6d]/30 font-mono">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#e8f6f4] text-[#086b6d] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <Check className="w-3.5 h-3.5 text-[#086b6d]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div ref={bannerRef} className="mt-16 bg-[#086b6d] rounded-2xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">¿Tienes un lote de facturas para probar?</h3>
            <p className="text-teal-100 text-sm mt-1">Configuramos tu prueba gratuita con los formatos de tu empresa.</p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#f7c948] hover:bg-[#eab308] text-slate-950 font-bold text-sm shadow-md transition-all active:scale-95 shrink-0"
          >
            <span>Probar Gratis Ahora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
