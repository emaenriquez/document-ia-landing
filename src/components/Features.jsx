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

const FEATURES = [
  {
    icon: TableProperties,
    badge: 'Sin desajustes',
    title: 'Extracción de Tablas Complejas',
    description: 'Detecta automáticamente múltiples filas, columnas desalineadas, descripciones largas, códigos SKU y precios unitarios sin romper la cuadrícula.',
    highlight: 'Convierte hasta 50 líneas de factura en filas estructuradas de Excel.'
  },
  {
    icon: ScanLine,
    badge: 'Visión Robusta',
    title: 'OCR para Documentos Reales',
    description: 'Capacidad para leer fotos tomadas con el teléfono celular con sombras, tickets térmicos desvanecidos y PDFs escaneados de baja resolución.',
    highlight: 'Pre-procesamiento con contraste inteligente antes de la lectura.'
  },
  {
    icon: Calculator,
    badge: 'Cero Errores',
    title: 'Validación Matemática en Vivo',
    description: 'La IA comprueba que la suma de subtotales más tasas e impuestos coincida con el total general. Si algo difiere, te avisa antes de exportar.',
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
    title: 'Procesamiento Masivo por Lotes',
    description: 'Arrastra carpetas enteras de comprobantes del mes. El sistema los procesa en paralelo y los consolida todos en un solo libro de Excel.',
    highlight: 'Ahorra más de 20 horas mensuales de carga manual por persona.'
  },
  {
    icon: FileSpreadsheet,
    badge: '100% Nativo',
    title: 'Fórmulas y Formato Excel Listo',
    description: 'Los archivos generados incluyen formato de moneda, fechas estándar y fórmulas reales de suma, listos para enviar a la gerencia o contador.',
    highlight: 'Descargas en formato .XLSX, CSV o integración API directa.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Diseñado para erradicar el trabajo manual con documentos
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            No es un OCR genérico: es una solución especializada en facturas, recibos y comprobantes fiscales con salida directa a Excel.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div 
                key={index}
                className="group relative bg-[#f8fafc] hover:bg-white p-8 rounded-2xl border border-slate-200/90 hover:border-[#086b6d]/40 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#e8f6f4] group-hover:bg-[#086b6d] text-[#086b6d] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#086b6d] bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#086b6d] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#086b6d] shrink-0" />
                  <span>{feat.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
