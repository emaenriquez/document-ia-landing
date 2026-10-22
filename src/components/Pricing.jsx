import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    badge: 'Prueba Gratuita',
    price: '$0',
    frequency: 'para siempre',
    description: 'Ideal para profesionales independientes y pequeñas pruebas de concepto.',
    features: [
      '50 documentos procesados al mes',
      'Exportación a Excel (.xlsx) y CSV',
      'Extracción de cabecera y totales',
      'Soporte estándar por correo'
    ],
    buttonText: 'Empezar Gratis',
    buttonClass: 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-50',
    popular: false
  },
  {
    name: 'Pro',
    badge: 'Más Elegido',
    price: '$29',
    frequency: '/ mes',
    description: 'Para estudios contables, pymes y equipos financieros que procesan lotes frecuentes.',
    features: [
      '1.000 documentos al mes incluidos',
      'Extracción completa de tablas (línea por línea)',
      'Plantillas y mapeo de columnas personalizado',
      'Validación matemática automática',
      'Soporte prioritario y procesamiento ultra rápido'
    ],
    buttonText: 'Comenzar Prueba Pro',
    buttonClass: 'bg-[#086b6d] hover:bg-[#056467] text-white shadow-lg shadow-[#086b6d]/30',
    popular: true
  },
  {
    name: 'Empresas',
    badge: 'Volumen y API',
    price: 'A medida',
    frequency: '',
    description: 'Para compañías con grandes volúmenes de comprobantes e integración con ERPs.',
    features: [
      'Volumen ilimitado o por paquete corporativo',
      'Acceso a API REST para integración directa',
      'Conexión nativa con SAP, NetSuite o Xero',
      'SLA de disponibilidad del 99.9% y gestor de cuenta'
    ],
    buttonText: 'Contactar a Ventas',
    buttonClass: 'bg-slate-900 hover:bg-slate-800 text-white',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8f6f4] text-[#086b6d] text-xs font-bold uppercase tracking-wider mb-3">
            Planes Transparentes
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Comienza gratis, escala cuando ahorres tiempo
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Sin cargos ocultos ni sorpresas. Cancela en cualquier momento.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-8 border flex flex-col justify-between transition-all ${
                plan.popular 
                  ? 'border-2 border-[#086b6d] shadow-xl scale-105 z-10' 
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#086b6d] text-[#ffd24d] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Más Popular</span>
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-[#086b6d] uppercase tracking-wider">{plan.name}</span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">{plan.badge}</span>
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">{plan.price}</span>
                  <span className="text-sm font-medium text-slate-500">{plan.frequency}</span>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-slate-100 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                      <Check className="w-4 h-4 text-[#086b6d] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#demo"
                className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95 ${plan.buttonClass}`}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
