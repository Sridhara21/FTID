"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TerminalSquare, ArrowRight, Activity, Play, CheckCircle2, Code2, DatabaseZap } from "lucide-react";

export default function DeveloperSandboxPage() {
  const [tested, setTested] = useState(false);

  const handleTest = () => {
    setTested(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'SANDBOX_API_FIRED',
        entity: 'FINTECH_DEVELOPER',
        msg: 'Successfully executed mock e-KYC (Aadhaar) auth request in the Developer Sandbox.',
        impact: ['Sandbox Telemetry'],
        risk: 'LOW'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-purple-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <TerminalSquare className="h-3 w-3" />
            DEVELOPER PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">API Sandbox</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Does our application correctly handle the e-KYC API response?"</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sandbox Editor */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Live Request Builder: POST /v2/kyc/auth
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 p-0">
              <div className="bg-[#0d1520] p-4 font-mono text-sm overflow-x-auto">
                <div className="text-slate-500 mb-2">{'// Request Headers'}</div>
                <div className="text-emerald-400">Authorization: <span className="text-emerald-200">Bearer sandbox_sk_9921...</span></div>
                <div className="text-emerald-400 mb-4">Content-Type: <span className="text-emerald-200">application/json</span></div>
                
                <div className="text-slate-500 mb-2">{'// Request Body'}</div>
                <div className="text-blue-400">{'{'}</div>
                <div className="pl-4 text-blue-300">"uid_token": <span className="text-amber-300">"mock_uid_12345"</span>,</div>
                <div className="pl-4 text-blue-300">"consent_artifacts": <span className="text-amber-300">"Y"</span></div>
                <div className="text-blue-400">{'}'}</div>
              </div>
              
              {tested && (
                <div className="border-t border-slate-800 bg-[#05101a] p-4 font-mono text-sm animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-emerald-950 text-emerald-500 text-[10px] uppercase font-bold rounded">200 OK</span>
                    <span className="text-slate-500 text-xs">Response time: 42ms</span>
                  </div>
                  <div className="text-slate-400">
                    <span className="text-purple-400">"status"</span>: <span className="text-amber-300">"SUCCESS"</span>,<br/>
                    <span className="text-purple-400">"kyc_data"</span>: {'{'} <span className="text-amber-300">"name"</span>: <span className="text-amber-300">"Mock User"</span>, <span className="text-amber-300">"dob"</span>: <span className="text-amber-300">"1990-01-01"</span> {'}'}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-purple-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2">
                <Play className="h-4 w-4" />
                Simulation Control
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">The request payload is correctly structured for the IndiaStack e-KYC v2 endpoint. Synthetic data will be returned.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Fire the Sandbox Request to verify your application's JSON parsing logic against a 200 OK response.</p>
              </div>

              {!tested ? (
                <button onClick={handleTest} className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                  Fire Request <DatabaseZap className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Passed 200 OK
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}