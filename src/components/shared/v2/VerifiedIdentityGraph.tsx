import { ShieldCheck, Fingerprint } from "lucide-react";

export function VerifiedIdentityGraph({ sections }: { sections: string[] }) {
  return (
    <div className="bg-[#05101a] border border-cyan-900/30 rounded-xl p-6 flex flex-col items-center text-center space-y-6 h-full">
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full"></div>
        <div className="h-24 w-24 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-[#020810] relative z-10">
           <Fingerprint className="h-10 w-10 text-emerald-400" />
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-white tracking-tight">Identity Nexus</h3>
        <p className="text-xs text-emerald-400 font-mono mt-2 flex items-center justify-center gap-1">
          <ShieldCheck className="h-3 w-3" /> VERIFIED TRUST LEVEL 4
        </p>
      </div>
      
      <div className="w-full space-y-2 mt-4 text-left">
        {sections.slice(0, 5).map((sec, i) => (
          <div key={i} className="flex justify-between items-center p-2 rounded bg-cyan-900/10 border border-cyan-900/20">
             <span className="text-xs text-slate-400 uppercase tracking-wider">{sec}</span>
             <ShieldCheck className="h-4 w-4 text-emerald-500/70" />
          </div>
        ))}
      </div>
    </div>
  );
}
