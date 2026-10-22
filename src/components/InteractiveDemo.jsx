import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Sparkles, 
  Download, 
  Upload, 
  Check, 
  RefreshCw, 
  Calendar, 
  Building2, 
  Hash, 
  CreditCard, 
  DollarSign, 
  Layers, 
  ChevronRight, 
  ChevronDown, 
  AlertCircle 
} from 'lucide-react';

const SAMPLE_DOCUMENTS = [
  {
    id: 'forgeworks',
    name: 'ForgeWorks Manufacturing (FW-INV1025)',
    supplier: 'ForgeWorks Manufacturing',
    invoiceNumber: 'FW-INV1025',
    invoiceDate: 'Jul 1, 2025',
    dueDate: 'Jul 16, 2025',
    paymentTerms: 'Net 15',
    currency: 'USD',
    subtotal: 8660.00,
    tax: 888.00,
    total: 9548.00,
    lines: [
      { id: 1, desc: 'Raw Material Procurement - Review and reconcile supplier invoices', glAccount: '5100', unitPrice: 150, qty: 20, amount: 3000 },
      { id: 2, desc: 'Process and verify supplier invoices for raw materials', glAccount: '5150', unitPrice: 320, qty: 8, amount: 2560 },
      { id: 3, desc: 'Production Line Maintenance & Setup verification', glAccount: '5200', unitPrice: 260, qty: 12, amount: 3120 },
    ]
  },
  {
    id: 'techlogistics',
    name: 'TechLogistics Global (TL-89420)',
    supplier: 'TechLogistics Global',
    invoiceNumber: 'TL-89420',
    invoiceDate: 'Ago 12, 2025',
    dueDate: 'Ago 27, 2025',
    paymentTerms: 'Net 15',
    currency: 'USD',
    subtotal: 4200.00,
    tax: 420.00,
    total: 4620.00,
    lines: [
      { id: 1, desc: 'Flete internacional aéreo de componentes', glAccount: '6100', unitPrice: 2100, qty: 1, amount: 2100 },
      { id: 2, desc: 'Despacho aduanero y aranceles de importación', glAccount: '6120', unitPrice: 1050, qty: 2, amount: 2100 },
    ]
  },
  {
    id: 'cloudservice',
    name: 'CloudScale Systems (CS-771)',
    supplier: 'CloudScale Systems Inc.',
    invoiceNumber: 'CS-771',
    invoiceDate: 'Sep 05, 2025',
    dueDate: 'Sep 05, 2025',
    paymentTerms: 'Due on receipt',
    currency: 'USD',
    subtotal: 1850.00,
    tax: 185.00,
    total: 2035.00,
    lines: [
      { id: 1, desc: 'Servidores dedicados GPU cluster computacional', glAccount: '7020', unitPrice: 1400, qty: 1, amount: 1400 },
      { id: 2, desc: 'Almacenamiento NVMe de alto rendimiento 20TB', glAccount: '7025', unitPrice: 450, qty: 1, amount: 450 },
    ]
  }
];

export default function InteractiveDemo() {
  const [activeDocIndex, setActiveDocIndex] = useState(0);
  const [docData, setDocData] = useState(SAMPLE_DOCUMENTS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [activeTab, setActiveTab] = useState('summary'); // 'summary' | 'lines' | 'coding'

  const handleSelectDoc = (index) => {
    setActiveDocIndex(index);
    setIsScanning(true);
    setTimeout(() => {
      setDocData(SAMPLE_DOCUMENTS[index]);
      setIsScanning(false);
    }, 600);
  };

  const handleFieldChange = (field, value) => {
    setDocData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleExportExcel = () => {
    setToastMessage(`✓ Archivo Excel generado: ${docData.invoiceNumber}_DocumentAI.xlsx descargado`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <section id="demo" className="py-20 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8f6f4] text-[#086b6d] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#f7c948]" />
            Prueba Interactiva
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Experimenta el OCR con Visión en Tiempo Real
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Selecciona una factura de ejemplo o edita los campos extraídos. Observa cómo la IA 
            valida cálculos y prepara la tabla para exportar a Excel.
          </p>

          {/* Sample Switcher Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {SAMPLE_DOCUMENTS.map((doc, idx) => (
              <button
                key={doc.id}
                onClick={() => handleSelectDoc(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  activeDocIndex === idx
                    ? 'bg-[#086b6d] text-white border-[#086b6d] shadow-md shadow-[#086b6d]/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {doc.name}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Interface Container (Designed like the tablet mockup) */}
        <div className="bg-[#182a35] rounded-3xl p-3 sm:p-5 shadow-2xl border border-slate-700">
          
          {/* Tablet internal shell */}
          <div className="bg-[#edf1f4] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
            
            {/* Left Column: Document View Simulation (col-span-7) */}
            <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 bg-white">
              
              {/* Document top toolbar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg bg-[#e8f6f4] text-[#086b6d] border border-[#086b6d]/20">
                    {docData.invoiceNumber}
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Escaneado con IA · 300 DPI</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleSelectDoc(activeDocIndex)}
                    className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 text-xs font-semibold flex items-center gap-1"
                    title="Re-escanear"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin text-[#086b6d]' : ''}`} />
                    <span className="hidden sm:inline">Volver a procesar</span>
                  </button>
                </div>
              </div>

              {/* Invoice Paper Canvas */}
              <div className="relative my-4 p-6 sm:p-8 bg-white border border-slate-200 rounded-xl shadow-md min-h-[420px] flex flex-col justify-between overflow-hidden">
                
                {/* Visual scan laser line animation during scanning */}
                {isScanning && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#f7c948] to-transparent shadow-[0_0_15px_#f7c948] animate-bounce z-20" />
                )}

                <div>
                  {/* Invoice Header */}
                  <div className="flex justify-between items-start border-b-2 border-[#086b6d] pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#086b6d] text-white flex items-center justify-center font-black text-sm">
                          {docData.supplier.charAt(0)}
                        </div>
                        <h3 className="font-extrabold text-base sm:text-lg text-slate-900">{docData.supplier}</h3>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">4820 Industrial Park Rd, Columbus, OH</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-slate-800 tracking-wider">INVOICE</span>
                      <p className="text-xs font-semibold text-slate-600 mt-1"># {docData.invoiceNumber}</p>
                      <p className="text-xs text-slate-500">Fecha: {docData.invoiceDate}</p>
                    </div>
                  </div>

                  {/* Status Banner */}
                  <div className="my-4 p-2.5 rounded-lg bg-[#056467] text-white flex justify-between items-center text-xs font-semibold">
                    <span>Estado de Pago: {docData.paymentTerms}</span>
                    <span className="font-bold text-[#ffd24d]">Total a pagar: ${docData.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>

                  {/* Line Items Mock Table */}
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                          <th className="py-2">Descripción del Ítem</th>
                          <th className="py-2 text-center">GL</th>
                          <th className="py-2 text-right">Unitario</th>
                          <th className="py-2 text-center">Cant.</th>
                          <th className="py-2 text-right">Monto</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {docData.lines.map((item) => (
                          <tr key={item.id} className="hover:bg-[#e8f6f4]/40 transition-colors">
                            <td className="py-2.5 font-medium text-slate-800">{item.desc}</td>
                            <td className="py-2.5 text-center text-slate-500 font-mono">{item.glAccount}</td>
                            <td className="py-2.5 text-right text-slate-600">${item.unitPrice.toFixed(2)}</td>
                            <td className="py-2.5 text-center text-slate-600">{item.qty}</td>
                            <td className="py-2.5 text-right font-bold text-slate-800">${item.amount.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Subtotals & Totals */}
                <div className="border-t border-slate-200 pt-3 mt-4 text-xs flex justify-end">
                  <div className="w-48 space-y-1">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal:</span>
                      <span>${docData.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Impuestos (10%):</span>
                      <span>${docData.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-extrabold text-sm text-[#086b6d] border-t border-slate-200 pt-1">
                      <span>Total:</span>
                      <span>${docData.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom helper prompt */}
              <div className="p-3 bg-[#e8f6f4] rounded-xl border border-[#086b6d]/20 flex items-center justify-between text-xs text-[#056467]">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Sparkles className="w-4 h-4 text-[#086b6d]" />
                  Campos detectados automáticamente por el modelo de visión.
                </span>
                <span className="font-bold">100% Confianza</span>
              </div>
            </div>

            {/* Right Column: AI Fields Captured Form & Excel Sync (col-span-5) */}
            <div className="lg:col-span-5 p-4 sm:p-6 bg-[#f8fafc] flex flex-col justify-between">
              <div>
                {/* Header Title with AI badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <h4 className="font-black text-lg text-slate-900 tracking-tight flex items-center gap-2">
                    <span>Campos Extraídos</span>
                  </h4>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f7c948] text-slate-950 text-xs font-black shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                    <span>✦ AI Extracted</span>
                  </div>
                </div>

                {/* Navigation Subtabs (Summary, Lines, Coding) matching mockup */}
                <div className="flex items-center gap-4 mt-3 border-b border-slate-200 text-xs font-bold pb-2">
                  <button 
                    onClick={() => setActiveTab('summary')}
                    className={`pb-1 transition-all ${activeTab === 'summary' ? 'text-[#086b6d] border-b-2 border-[#086b6d]' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Cabecera (Header)
                  </button>
                  <button 
                    onClick={() => setActiveTab('lines')}
                    className={`pb-1 transition-all ${activeTab === 'lines' ? 'text-[#086b6d] border-b-2 border-[#086b6d]' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Ítems ({docData.lines.length})
                  </button>
                  <button 
                    onClick={() => setActiveTab('coding')}
                    className={`pb-1 transition-all ${activeTab === 'coding' ? 'text-[#086b6d] border-b-2 border-[#086b6d]' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Planillas Excel
                  </button>
                </div>

                {/* Form Fields List */}
                <div className="mt-4 space-y-3.5">
                  {activeTab === 'summary' && (
                    <>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-[#086b6d]" /> Proveedor (Supplier)
                        </label>
                        <input
                          type="text"
                          value={docData.supplier}
                          onChange={(e) => handleFieldChange('supplier', e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#086b6d]/30 focus:border-[#086b6d]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1 flex items-center gap-1">
                            <Hash className="w-3.5 h-3.5 text-[#086b6d]" /> Nº Factura
                          </label>
                          <input
                            type="text"
                            value={docData.invoiceNumber}
                            onChange={(e) => handleFieldChange('invoiceNumber', e.target.value)}
                            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#086b6d]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1 flex items-center gap-1">
                            <CreditCard className="w-3.5 h-3.5 text-[#086b6d]" /> Términos
                          </label>
                          <input
                            type="text"
                            value={docData.paymentTerms}
                            onChange={(e) => handleFieldChange('paymentTerms', e.target.value)}
                            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#086b6d]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#086b6d]" /> Fecha Emisión
                          </label>
                          <input
                            type="text"
                            value={docData.invoiceDate}
                            onChange={(e) => handleFieldChange('invoiceDate', e.target.value)}
                            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#086b6d]" /> Fecha Vencimiento
                          </label>
                          <input
                            type="text"
                            value={docData.dueDate}
                            onChange={(e) => handleFieldChange('dueDate', e.target.value)}
                            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 'lines' && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-600">Líneas de Detalle Detectadas:</div>
                      {docData.lines.map((line, idx) => (
                        <div key={line.id} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs">
                          <div className="font-bold text-slate-800 mb-1">#{idx + 1} {line.desc}</div>
                          <div className="flex justify-between text-slate-500 font-medium">
                            <span>GL: {line.glAccount}</span>
                            <span>{line.qty} un × ${line.unitPrice}</span>
                            <span className="font-bold text-[#086b6d]">${line.amount.toFixed(2)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'coding' && (
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-2">
                      <div className="font-bold text-slate-800">Formato de Exportación a Excel:</div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 font-mono text-[11px] text-slate-600">
                        A: Fecha | B: Factura | C: Proveedor | D: Ítem | E: Cant | F: Total
                      </div>
                      <p className="text-slate-500">
                        Cada documento procesado se apila en una fila normalizada con fórmulas de suma automática.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Total & Action Footer */}
              <div className="pt-4 border-t border-slate-200 mt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Monto Total Detectado</span>
                  <span className="text-2xl font-black text-[#086b6d]">
                    ${docData.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleExportExcel}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#086b6d] hover:bg-[#056467] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#086b6d]/20 transition-all active:scale-95"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-[#f7c948]" />
                    <span>Descargar en Excel (.xlsx)</span>
                  </button>
                  <button
                    onClick={() => setToastMessage('✓ Vista previa de datos copiada al portapapeles')}
                    className="px-3 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold border border-slate-300 transition-colors"
                  >
                    Copiar CSV
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Interactive Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#182a35] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-in fade-in slide-in-from-bottom-3">
            <div className="w-7 h-7 rounded-full bg-[#086b6d] text-white flex items-center justify-center font-bold text-xs">
              <Check className="w-4 h-4 text-[#f7c948]" />
            </div>
            <span className="text-sm font-semibold">{toastMessage}</span>
          </div>
        )}

      </div>
    </section>
  );
}
