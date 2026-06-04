"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, ArrowRight, Server, ShieldCheck, Key, CheckCircle2, AlertTriangle, Workflow, TerminalSquare } from "lucide-react";

export default function DeveloperApisPage() {
  const [requested, setRequested] = useState(false);

  const handleRequest = () => {
    setRequested(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'PROD_ACCESS_REQUESTED',
        entity: 'FINTECH_DEVELOPER',
        msg: 'Production access requested for Account Aggregator (FIP/FIU) APIs. Compliance review initiated.',
        impact: ['RBI Compliance Node', 'Developer Sandbox'],
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
          <h1 className="text-3xl font-black text-white tracking-tight">API Gateway & Integrations</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Is our Account Aggregator integration ready to migrate from Sandbox to Production?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">Sandbox API Status</div>
            <div className="text-2xl font-black text-white">99.9%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Integrations */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Workflow className="h-4 w-4" />
                Active IndiaStack Integrations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex justify-between items-center">
                <div>
                  <div className="text-white font-bold mb-1 flex items-center gap-2">e-KYC (Aadhaar XML)</div>
                  <div className="text-xs text-slate-400 flex items-center gap-4">
                    <span>Calls (24h): 14,202</span>
                    <span>Errors: 0.02%</span>
                  </div>
                </div>
                <div className="text-right flex items-center gap-3">
                  <div className="px-2 py-1 bg-emerald-950 text-emerald-500 text-[10px] uppercase font-bold tracking-widest rounded border border-emerald-900/50 flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Production</div>
                  <ArrowRight className="h-4 w-4 text-slate-600" />
                </div>
              </div>

              <div className="p-4 bg-purple-950/20 rounded-lg border border-purple-900/50 flex justify-between items-center relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
                <div>
                  <div className="text-purple-400 font-bold mb-1 flex items-center gap-2">Account Aggregator (FIU)</div>
                  <div className="text-xs text-purple-400/70 flex items-center gap-4">
                    <span>Calls (24h): 450 (Sandbox)</span>
                    <span>Test Suite: 100% Passed</span>
                  </div>
                </div>
                <div className="text-right flex items-center gap-3">
                  <div className="px-2 py-1 bg-amber-950 text-amber-500 text-[10px] uppercase font-bold tracking-widest rounded border border-amber-900/50 flex items-center gap-1"><AlertTriangle className="h-3 w-3" /> Sandbox</div>
                  <ArrowRight className="h-4 w-4 text-purple-500" />
                </div>
              </div>

              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex justify-between items-center opacity-50">
                <div>
                  <div className="text-white font-bold mb-1 flex items-center gap-2">UPI Autopay (Mandates)</div>
                  <div className="text-xs text-slate-400 flex items-center gap-4">
                    <span>Not Configured</span>
                  </div>
                </div>
                <div className="text-right flex items-center gap-3">
                  <div className="px-2 py-1 bg-slate-800 text-slate-400 text-[10px] uppercase font-bold tracking-widest rounded border border-slate-700">Inactive</div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-purple-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Production Deployment
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Status</p>
                <p className="text-sm text-slate-300">Account Aggregator integration has passed all 42 automated Sandbox test cases. InfoSec audit certificate uploaded.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Request RBI Sahamati Node verification to migrate Account Aggregator API keys to Production.</p>
              </div>

              {!requested ? (
                <button onClick={handleRequest} className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                  Request Prod Access <Key className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Request Under Review
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}