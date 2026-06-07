"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Key, BookOpen, Webhook, Blocks, Copy, CheckCircle2, ChevronRight, Lock, Puzzle } from "lucide-react";

export default function DeveloperMainPage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("api");

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                DEVELOPER ENVIRONMENT
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">API & Integration Hub</h1>
            <p className="text-sm text-slate-400 mt-2">
              Build and scale sovereign financial applications on the FTID protocol.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-slate-900 p-2 rounded-lg border border-slate-800">
             <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs font-bold border border-emerald-500/30">
               <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
               Sandbox Active
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* SIDEBAR NAVIGATION */}
          <div className="lg:col-span-1 space-y-2 border-r border-slate-800/50 pr-4">
            {[
              { id: 'api', icon: Terminal, label: 'REST APIs' },
              { id: 'keys', icon: Key, label: 'API Keys & Auth' },
              { id: 'webhooks', icon: Webhook, label: 'Webhooks' },
              { id: 'sdks', icon: Blocks, label: 'Client SDKs' },
              { id: 'integrations', icon: Puzzle, label: 'Verified Integrations' },
              { id: 'docs', icon: BookOpen, label: 'Core Concepts' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-900/50' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-3 space-y-8">
            
            {activeTab === 'api' && (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Create Underwriting Request</h2>
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded border border-indigo-500/30">POST /v1/underwrite/request</span>
                </div>
                
                <p className="text-slate-400">
                  Initiate a real-time risk assessment utilizing O(1) state propagation across the FTID ledger. This endpoint computes the risk dynamically incorporating GST, tax, and CIBIL equivalents.
                </p>

                <div className="grid lg:grid-cols-2 gap-6 mt-6">
                  {/* Request Parameters */}
                  <div className="space-y-4">
                     <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Parameters</h3>
                     <div className="space-y-3">
                        <div className="flex justify-between items-start border-b border-slate-800/50 pb-3">
                          <div>
                            <div className="text-cyan-400 font-mono text-sm">entity_id</div>
                            <div className="text-xs text-slate-500 mt-1">String • Required</div>
                          </div>
                          <div className="text-slate-400 text-sm max-w-[200px] text-right">The universal sovereign ID of the business.</div>
                        </div>
                        <div className="flex justify-between items-start border-b border-slate-800/50 pb-3">
                          <div>
                            <div className="text-cyan-400 font-mono text-sm">amount</div>
                            <div className="text-xs text-slate-500 mt-1">Integer • Required</div>
                          </div>
                          <div className="text-slate-400 text-sm max-w-[200px] text-right">Requested credit limit in INR (paise).</div>
                        </div>
                     </div>

                     <h3 className="text-sm font-bold text-white uppercase tracking-wider mt-8 mb-4 border-b border-slate-800 pb-2">Authentication</h3>
                     <Card className="bg-[#050c14] border-emerald-900/30 border-dashed">
                       <CardContent className="p-4 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                           <Lock className="w-4 h-4 text-emerald-400" />
                           <span className="text-sm font-mono text-emerald-400">sk_test_51Nx...89vQ</span>
                         </div>
                         <span className="text-[10px] uppercase bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Sandbox Key</span>
                       </CardContent>
                     </Card>
                  </div>

                  {/* Code Snippet */}
                  <div className="bg-[#0b1120] rounded-xl border border-slate-800 overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between px-4 py-2 bg-[#0f172a] border-b border-slate-800">
                      <div className="flex items-center gap-4 text-xs font-mono">
                        <button className="text-white border-b border-white pb-1">cURL</button>
                        <button className="text-slate-500 hover:text-slate-300 pb-1">Node.js</button>
                        <button className="text-slate-500 hover:text-slate-300 pb-1">Python</button>
                      </div>
                      <button onClick={handleCopy} className="text-slate-400 hover:text-white transition-colors">
                        {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="p-4 font-mono text-sm overflow-x-auto text-slate-300">
                      <span className="text-pink-400">curl</span> -X POST https://api.ftid.gov.in/v1/underwrite/request \<br/>
                      &nbsp;&nbsp;-H <span className="text-yellow-300">"Authorization: Bearer sk_test_51Nx..."</span> \<br/>
                      &nbsp;&nbsp;-H <span className="text-yellow-300">"Content-Type: application/json"</span> \<br/>
                      &nbsp;&nbsp;-d <span className="text-green-400">'{'{'}'</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"entity_id"</span>: <span className="text-yellow-300">"UIN-99482-B"</span>,<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"amount"</span>: <span className="text-purple-400">500000000</span>,<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"consent_token"</span>: <span className="text-yellow-300">"aa_tok_8f92j"</span><br/>
                      &nbsp;&nbsp;<span className="text-green-400">'{'}'}'</span>
                    </div>
                    <div className="mt-auto border-t border-slate-800 bg-[#0f172a] p-4 font-mono text-xs">
                      <div className="text-emerald-400 mb-2">// Response (200 OK)</div>
                      <div className="text-slate-400">
                        {'{'}<br/>
                        &nbsp;&nbsp;"status": "approved",<br/>
                        &nbsp;&nbsp;"deterministic_trust_score": 88.4,<br/>
                        &nbsp;&nbsp;"max_safe_exposure": 850000000,<br/>
                        &nbsp;&nbsp;"settlement_eta": "instant"<br/>
                        {'}'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Webhook Events Simulator */}
                <div className="mt-12 border-t border-slate-800/50 pt-8">
                   <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Webhook className="w-5 h-5 text-cyan-400" /> Recent Webhook Deliveries</h3>
                   <div className="bg-[#050c14] border border-slate-800 rounded-lg divide-y divide-slate-800">
                     {[
                       { event: "consent.granted", time: "2 mins ago", status: "200 OK", statusColor: "text-emerald-400" },
                       { event: "underwriting.completed", time: "15 mins ago", status: "200 OK", statusColor: "text-emerald-400" },
                       { event: "policy.rate_update", time: "1 hour ago", status: "503 Error", statusColor: "text-rose-400" },
                     ].map((wh, idx) => (
                       <div key={idx} className="flex items-center justify-between p-4 hover:bg-slate-900/50 cursor-pointer transition-colors">
                         <div className="flex items-center gap-4">
                           <div className="px-2 py-1 bg-slate-800 rounded text-xs font-mono text-slate-300">{wh.event}</div>
                           <div className="text-xs text-slate-500">{wh.time}</div>
                         </div>
                         <div className="flex items-center gap-3">
                           <span className={`text-xs font-bold ${wh.statusColor}`}>{wh.status}</span>
                           <ChevronRight className="w-4 h-4 text-slate-600" />
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
              </>
            )}

            {activeTab === 'integrations' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">Verified Integrations</h2>
                  <p className="text-slate-400 mt-2 max-w-2xl">
                    Connect FTID with India's leading fintech infrastructure providers to accelerate your build. 
                    These sandbox environments are pre-configured for O(1) state bridging.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Setu Mock */}
                  <Card className="bg-[#05101a] border-slate-800 hover:border-cyan-500/50 transition-colors cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-xl text-white group-hover:scale-110 transition-transform">
                          S
                        </div>
                        <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase rounded border border-emerald-500/20">
                          Account Aggregator
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">Setu AA Sandbox</h3>
                      <p className="text-sm text-slate-400 mb-6">
                        Mock multi-bank financial data retrieval via the Account Aggregator framework. Fully compliant with RBI guidelines.
                      </p>
                      <button className="w-full py-2 bg-slate-800 group-hover:bg-cyan-600 text-white rounded text-sm font-bold transition-colors flex justify-center items-center gap-2">
                        Configure Connection <ChevronRight className="w-4 h-4" />
                      </button>
                    </CardContent>
                  </Card>

                  {/* Decentro Mock */}
                  <Card className="bg-[#05101a] border-slate-800 hover:border-cyan-500/50 transition-colors cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-xl text-white group-hover:scale-110 transition-transform">
                          D
                        </div>
                        <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase rounded border border-cyan-500/20">
                          KYC & Banking
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">Decentro Gateway</h3>
                      <p className="text-sm text-slate-400 mb-6">
                        Seamlessly link CKYC, PAN verification, and automated virtual accounts for instant disbursement testing.
                      </p>
                      <button className="w-full py-2 bg-slate-800 group-hover:bg-cyan-600 text-white rounded text-sm font-bold transition-colors flex justify-center items-center gap-2">
                        Configure Connection <ChevronRight className="w-4 h-4" />
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab !== 'api' && activeTab !== 'integrations' && (
              <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                <Puzzle className="w-12 h-12 mb-4 opacity-20" />
                <p>Select REST APIs or Verified Integrations.</p>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}