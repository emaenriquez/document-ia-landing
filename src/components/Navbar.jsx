import React from 'react';
import { ChevronDown, ArrowDown } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="w-full py-4 px-6 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-40">
      {/* Brand */}
      <a href="#" className="flex items-center gap-2.5 group">
        <div className="w-9 h-9 rounded-xl bg-[#086b6d] text-white flex items-center justify-center shadow-sm shadow-[#086b6d]/30 group-hover:scale-105 transition-transform">
          <span className="font-extrabold text-lg text-[#f7c948]">D</span>
        </div>
        <span className="text-lg font-black tracking-tight text-slate-900 group-hover:text-[#086b6d] transition-colors">
          DocumentAI
        </span>
      </a>

      {/* Flecha animada que indica scroll hacia abajo */}
      <a
        href="#features"
        aria-label="Desplazarse hacia abajo"
        className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f6f4] hover:bg-[#086b6d] text-[#086b6d] hover:text-white border border-[#086b6d]/20 transition-all duration-300 shadow-xs hover:shadow-md active:scale-95"
      >
        <span className="text-xs font-bold tracking-tight">Ver contenido</span>
        
        {/* Animated Arrow Icon */}
        <div className="relative flex items-center justify-center">
          <ChevronDown className="w-4 h-4 animate-bounce text-current" />
          <span className="absolute -inset-1 rounded-full bg-[#086b6d]/20 animate-ping pointer-events-none opacity-40 group-hover:opacity-0" />
        </div>
      </a>
    </div>
  );
}
