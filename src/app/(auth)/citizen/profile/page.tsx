"use client";
import { ShieldCheck, User, AlertTriangle, Fingerprint, Activity } from "lucide-react";

export default function CitizenProfile() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-8 font-sans">Citizen Digital Identity</h1>
      
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 flex flex-col gap-6">
          <div className="bg-[#020810]/50 border border-cyan-900/40 rounded-xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center">
                <User className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Rahul Sharma</h2>
                <p className="text-slate-400 text-sm font-mono">FTID: RS-9281-XXXX</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-cyan-950/20 rounded-lg">
                <span className="text-sm text-slate-300">Financial Health Score</span>
                <span className="text-emerald-400 font-bold text-lg font-mono">785</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyan-950/20 rounded-lg">
                <span className="text-sm text-slate-300">Identity Verification</span>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-8">
          <div className="bg-[#020810]/50 border border-rose-900/40 rounded-xl p-6 backdrop-blur-md relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 p-4">
              <Activity className="w-6 h-6 text-rose-500 animate-pulse" />
            </div>
            <h3 className="text-rose-400 font-mono text-lg mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Scam Protection Center
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-rose-900/30 bg-rose-950/10 rounded-lg">
                <p className="text-rose-400 text-sm font-bold mb-1">Active Threat Level</p>
                <p className="text-slate-300 text-xs">Elevated phishing campaigns in your geographical cluster targeting digital wallets.</p>
              </div>
              <div className="p-4 border border-emerald-900/30 bg-emerald-950/10 rounded-lg">
                <p className="text-emerald-400 text-sm font-bold mb-1">Account Safety</p>
                <p className="text-slate-300 text-xs">No anomalous transactions detected in trailing 90 days. Bio-metric lock active.</p>
              </div>
            </div>

            <div className="border-t border-rose-900/20 pt-4">
              <h4 className="text-slate-300 text-sm font-medium mb-3">Recent Security Flags</h4>
              <div className="p-3 bg-rose-950/20 rounded-lg flex items-center justify-between border-l-2 border-rose-500">
                <div>
                  <p className="text-sm text-slate-200">Suspicious SMS Link Detected</p>
                  <p className="text-xs text-slate-500">Blocked by OS-level heuristic scanning. Do not click links from unknown numbers claiming to be Electricity Board.</p>
                </div>
                <span className="text-xs text-rose-400 font-mono">Today, 14:02</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
