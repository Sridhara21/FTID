import { ShieldAlert, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="p-4 bg-rose-900/10 rounded-full border border-rose-500/30 mb-6 shadow-[0_0_30px_rgba(244,63,94,0.1)]">
        <ShieldAlert className="h-12 w-12 text-rose-500" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">System Module Locked</h2>
      <p className="text-slate-400 max-w-md mx-auto mb-8 text-sm">
        This specific sub-module is currently locked under Phase 2 of the National Financial Intelligence Infrastructure rollout.
      </p>
      <Link 
        href="/"
        className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg transition-colors text-xs font-bold uppercase tracking-widest"
      >
        <ArrowLeft className="h-4 w-4" /> Return to Main Node
      </Link>
    </div>
  );
}
