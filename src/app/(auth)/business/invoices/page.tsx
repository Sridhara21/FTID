"use client";
import { FileText, AlertOctagon, CheckCircle2 } from "lucide-react";

export default function InvoiceRiskIntelligence() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-2 font-sans">Invoice Risk Intelligence</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Automated fraud detection and anomaly scoring for B2B transactions.</p>

      <div className="bg-[#020810]/50 border border-blue-900/40 rounded-xl p-6 backdrop-blur-md mb-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-blue-900/40">
              <th className="py-3 text-xs text-slate-500 uppercase tracking-widest">Invoice ID</th>
              <th className="py-3 text-xs text-slate-500 uppercase tracking-widest">Vendor GSTIN</th>
              <th className="py-3 text-xs text-slate-500 uppercase tracking-widest">Amount</th>
              <th className="py-3 text-xs text-slate-500 uppercase tracking-widest">Anomaly Score</th>
              <th className="py-3 text-xs text-slate-500 uppercase tracking-widest">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-blue-900/20 hover:bg-blue-950/20 transition-colors">
              <td className="py-4 text-sm text-slate-300 font-mono">INV-2023-891</td>
              <td className="py-4 text-sm text-slate-300 font-mono">27AADCB2230M1Z2</td>
              <td className="py-4 text-sm text-slate-300 font-mono">₹1,24,500</td>
              <td className="py-4">
                <span className="px-2 py-1 bg-emerald-950/50 text-emerald-400 text-xs font-mono rounded">1.2 (Low)</span>
              </td>
              <td className="py-4"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></td>
            </tr>
            <tr className="border-b border-blue-900/20 hover:bg-blue-950/20 transition-colors bg-rose-950/10">
              <td className="py-4 text-sm text-slate-300 font-mono">INV-2023-892</td>
              <td className="py-4 text-sm text-slate-300 font-mono">07BBEPC4451N1Z5</td>
              <td className="py-4 text-sm text-slate-300 font-mono">₹8,90,000</td>
              <td className="py-4">
                <span className="px-2 py-1 bg-rose-950/50 text-rose-400 text-xs font-mono rounded border border-rose-900/50">89.4 (Critical)</span>
              </td>
              <td className="py-4 flex items-center gap-2">
                <AlertOctagon className="w-5 h-5 text-rose-500" />
                <span className="text-xs text-rose-400">GST Mismatch + Duplicate Value</span>
              </td>
            </tr>
            <tr className="border-b border-blue-900/20 hover:bg-blue-950/20 transition-colors">
              <td className="py-4 text-sm text-slate-300 font-mono">INV-2023-893</td>
              <td className="py-4 text-sm text-slate-300 font-mono">29AAACG4321P1Z1</td>
              <td className="py-4 text-sm text-slate-300 font-mono">₹45,200</td>
              <td className="py-4">
                <span className="px-2 py-1 bg-emerald-950/50 text-emerald-400 text-xs font-mono rounded">0.4 (Low)</span>
              </td>
              <td className="py-4"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
