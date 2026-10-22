import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#182a35] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#086b6d] text-white flex items-center justify-center font-black">
                <span className="text-[#f7c948]">D</span>
              </div>
              <span className="text-xl font-black text-white tracking-tight">DocumentAI</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              La plataforma de visión inteligente que transforma comprobantes, facturas y recibos en hojas de cálculo limpias con fórmulas.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Cifrado bancario AES-256</span>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Producto</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#contacto" className="hover:text-white transition-colors">Solicitar Prueba Gratis</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Extracción de Tablas</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Plantillas de Mapeo</a></li>
              {/* <li><a href="#pricing" className="hover:text-white transition-colors">Precios y Planes</a></li> */}
            </ul>
          </div>

          {/* Formats */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Integraciones</h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="text-slate-300">Microsoft Excel (.xlsx)</span></li>
              <li><span className="text-slate-300">Google Sheets</span></li>
              <li><span className="text-slate-300">QuickBooks Online</span></li>
              <li><span className="text-slate-300">Exportación CSV / JSON</span></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Seguridad & Legal</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cumplimiento GDPR</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>© 2026 DocumentAI Technologies Inc. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-slate-500">
            Desarrollado para máxima precisión y velocidad en flujos contables.
          </p>
        </div>
      </div>
    </footer>
  );
}
