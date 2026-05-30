"use client";
import { Network, MapPin, Building } from "lucide-react";

export default function LendingExposureMap() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-2 font-sans">Lending Exposure Map</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Industrial and geographic concentration of institutional risk.</p>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-[#020810]/50 border border-indigo-900/40 rounded-xl p-6 backdrop-blur-md h-[500px] flex items-center justify-center relative overflow-hidden">
           {/* Abstract Geographic/Network Map */}
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-[#020810] to-[#020810]"></div>
           <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute">
             <circle cx="250" cy="250" r="150" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4,4" />
             <circle cx="250" cy="250" r="100" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
             
             {/* High Concentration Nodes */}
             <circle cx="250" cy="250" r="40" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" strokeWidth="2" className="animate-pulse" />
             <circle cx="320" cy="180" r="25" fill="rgba(239,68,68,0.3)" stroke="#ef4444" strokeWidth="2" />
             <circle cx="150" cy="300" r="30" fill="rgba(56,189,248,0.3)" stroke="#38bdf8" strokeWidth="2" />
             
             <path d="M250,250 L320,180" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
             <path d="M250,250 L150,300" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
           </svg>
           <div className="absolute bottom-4 left-4 p-3 bg-black/50 border border-white/10 rounded backdrop-blur text-xs">
             <div className="flex items-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-purple-500"></span> Real Estate (Core)</div>
             <div className="flex items-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-red-500"></span> Textiles (High Risk)</div>
             <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-sky-500"></span> Tech MSME (Stable)</div>
           </div>
        </div>

        <div className="col-span-4 flex flex-col gap-4">
          <div className="bg-[#020810]/50 border border-indigo-900/40 rounded-xl p-6 backdrop-blur-md flex-1">
            <h3 className="text-indigo-400 font-mono text-sm mb-4 border-b border-indigo-900/40 pb-2">Geographic Concentration</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1"><span>Maharashtra</span><span>42%</span></div>
                <div className="w-full bg-indigo-950 rounded-full h-1.5"><div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '42%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1"><span>Karnataka</span><span>28%</span></div>
                <div className="w-full bg-indigo-950 rounded-full h-1.5"><div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '28%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-rose-300 mb-1"><span>Gujarat (Stressed)</span><span>18%</span></div>
                <div className="w-full bg-rose-950 rounded-full h-1.5"><div className="bg-rose-500 h-1.5 rounded-full" style={{width: '18%'}}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
