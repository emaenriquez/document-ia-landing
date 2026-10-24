import React from 'react';
import { 
  ScanLine, 
  TableProperties, 
  Layers, 
  Calculator, 
  FolderSync, 
  FileSpreadsheet, 
  CheckCircle2 
} from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import useStaggerReveal from '../hooks/useStaggerReveal';

const FEATURES = [
  {
    icon: TableProperties,
    badge: 'Sin desajustes',
    title: 'Tablas completas, fila por fila',
    description: 'Reconoce productos, cantidades, precios, códigos y descripciones aunque la tabla venga desalineada.',
    highlight: 'Convierte hasta 50 líneas de factura en filas estructuradas de Excel.'
  },
  {
    icon: ScanLine,
    badge: 'Lee PDFs, fotos y tickets',
    title: 'Lee PDFs, fotos y tickets',
    description:'Procesa documentos escaneados, fotos del teléfono y tickets con texto tenue o condiciones de luz difíciles.',
    highlight: 'Pre-procesamiento con contraste inteligente antes de la lectura.'
  },
  {
    icon: Calculator,
    badge: 'Cero Errores',
    title: 'Columnas y plantillas propias',
    description: 'Elige qué campos necesitas y adapta cada salida a tu sistema contable, ERP o forma de trabajar.',
    highlight: 'Auditoría automática contra facturas erróneas o duplicadas.'
  },
  {
    icon: Layers,
    badge: 'Personalizable',
    title: 'Plantillas y Mapeo de Columnas',
    description: 'Configura qué campos deseas para cada tipo de comprobante. Asigna nombres de columnas para que encaje directo en tu sistema contable o ERP.',
    highlight: 'Compatibilidad directa con SAP, QuickBooks, Xero y Excel.'
  },
  {
    icon: FolderSync,
    badge: 'Ahorro de Tiempo',
    title: 'Procesa muchos comprobantes juntos',
    description: 'Carga varios archivos a la vez y reúne los datos del período en un solo libro de Excel.',
    highlight: 'Ahorra más de 20 horas mensuales de carga manual por persona.'
  },
  {
    icon: FileSpreadsheet,
    badge: '100% Nativo',
    title: 'Excel que puedes usar enseguida',
    description: 'Descarga hojas con fechas, importes y columnas organizadas; también puedes exportar a CSV.',
    highlight: 'Descargas en formato .XLSX, CSV o integración API directa.'
  }
];

export default function Features() {
  const headerRef = useScrollReveal();
  const [gridRef, visibleCount] = useStaggerReveal(FEATURES.length, { staggerMs: 120 });

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Todo lo importante de tus documentos, en el lugar correcto.
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Pasa menos tiempo copiando datos y más tiempo revisando información que ya llega clara, estructurada y lista para tu equipo.
          </p>
        </div>

        {/* Feature Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div 
                key={index}
                className={`group relative bg-[#f8fafc] hover:bg-white p-8 rounded-2xl border border-slate-200/90 hover:border-[#086b6d]/40 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between ${index < visibleCount ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#e8f6f4] group-hover:bg-[#086b6d] text-[#086b6d] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    {/* <span className="text-[11px] font-bold uppercase tracking-wider text-[#086b6d] bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                      {feat.badge}
                    </span> */}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#086b6d] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {feat.description}
                  </p>
                </div>

                {/* <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#086b6d] shrink-0" />
                  <span>{feat.highlight}</span>
                </div> */}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
