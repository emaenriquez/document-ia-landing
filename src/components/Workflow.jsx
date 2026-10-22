import React from 'react';
import { UploadCloud, Cpu, FileSpreadsheet, ArrowRight, Check } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Carga tus facturas o imágenes',
    description: 'Arrastra archivos individuales o carpetas con 100+ comprobantes en formato PDF, fotos de recibos o tickets escaneados.',
    icon: UploadCloud,
    details: ['Soporta PDF multipágina', 'Fotos desde el celular (JPG/PNG)', 'Detección automática de orientación']
  },
  {
    step: '02',
    title: 'Lectura con Visión e IA en 2 segundos',
    description: 'Los algoritmos de visión de DocumentAI identifican el proveedor, número, fechas, impuestos y cada ítem de la tabla.',
    icon: Cpu,
    details: ['Normalización de fechas y monedas', 'Comprobación cruzada de totales', 'Alertas si falta algún dato crítico']
  },
  {
    step: '03',
    title: 'Descarga tu Excel consolidado',
    description: 'Obtén una hoja de cálculo perfectamente formateada con columnas alineadas y fórmulas de suma listas para tu contabilidad.',
    icon: FileSpreadsheet,
    details: ['Compatible con Microsoft Excel y Google Sheets', 'Opción de exportar a CSV o JSON', 'Listo para importar en tu ERP']
  }
];

export default function Workflow() {
  return (
    <section id="how-it-works" className="py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            De documentos desordenados a planillas limpias en 3 pasos
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Olvídate de transcribir números a mano durante los cierres mensuales.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
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
        <div className="mt-16 bg-[#086b6d] rounded-2xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
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
