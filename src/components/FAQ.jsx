import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const FAQS = [
  {
    q: '¿Qué formatos de archivo puedo subir?',
    a: 'Puedes subir archivos PDF (tanto digitales como escaneados), imágenes en formato JPG, JPEG, PNG y documentos de hojas de cálculo CSV para enriquecer datos.'
  },
  {
    q: '¿Cómo funciona la extracción de tablas con múltiples filas?',
    a: 'A diferencia de los OCRs tradicionales que leen texto lineal, DocumentAI utiliza un modelo de visión espacial que detecta las celdas, filas y columnas de la tabla de la factura, asociando descripción, cantidad, precio unitario y total para cada ítem.'
  },
  {
    q: '¿Es compatible con mi versión de Microsoft Excel y Google Sheets?',
    a: 'Sí. El archivo exportado es un formato estándar .XLSX con tipos de datos correctos (números como números reales con formato de moneda, fechas como fechas y fórmulas de suma). Se abre perfectamente en Excel 2016+, Office 365, Google Sheets y LibreOffice.'
  },
  {
    q: '¿Qué tan seguros están mis datos y documentos fiscales?',
    a: 'Utilizamos cifrado en tránsito (TLS 1.3) y en reposo (AES-256). Tus documentos son procesados en entornos aislados y nunca se utilizan para entrenar modelos públicos de terceros.'
  },
  {
    q: '¿Puedo personalizar las columnas del Excel resultante?',
    a: 'Totalmente. Con nuestro constructor de plantillas puedes elegir qué campos extraer (por ejemplo: agregar "Centro de Costos" o renombrar "Supplier" a "Razón Social Proveedor") para que encaje directo en tu flujo de trabajo.'
  }
];

export default function FAQ() {
  const sectionRef = useScrollReveal();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Respuestas a tus dudas más comunes
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#086b6d] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
