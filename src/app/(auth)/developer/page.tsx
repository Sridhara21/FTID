"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Terminal, Key, BookOpen, Webhook, Blocks, Copy, CheckCircle2, 
  ChevronRight, Lock, Puzzle, Play, RefreshCw, Send, Activity, Settings
} from "lucide-react";
import { useScenario } from "@/components/ScenarioContext";
import { InstitutionalReadinessBanner } from "@/components/shared/v2/InstitutionalReadinessBanner";
import { ConnectivityIndicator } from "@/components/shared/v2/ConnectivityIndicator";

export default function DeveloperMainPage() {
  const { scenario } = useScenario();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("api");
  
  // API Explorer State
  const [selectedEndpoint, setSelectedEndpoint] = useState("underwrite");
  const [requestBody, setRequestBody] = useState(
    JSON.stringify({
      entity_id: "UIN-99482-B",
      amount: 500000000,
      consent_token: "aa_tok_8f92j"
    }, null, 2)
  );
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [apiLoading, setApiLoading] = useState(false);

  // Webhook Simulator State
  const [webhookEvent, setWebhookEvent] = useState("consent.granted");
  const [webhookLogs, setWebhookLogs] = useState<Array<{
    event: string;
    time: string;
    status: string;
    payload: string;
  }>>([
    { 
      event: "consent.granted", 
      time: "2 mins ago", 
      status: "200 OK", 
      payload: JSON.stringify({ event: "consent.granted", data: { consent_id: "con_88fa7b2a9e102", status: "active" } }, null, 2) 
    },
    { 
      event: "underwriting.completed", 
      time: "15 mins ago", 
      status: "200 OK", 
      payload: JSON.stringify({ event: "underwriting.completed", data: { request_id: "und_771a3", decision: "Approved" } }, null, 2) 
    }
  ]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runApiRequest = () => {
    setApiLoading(true);
    setApiResponse(null);
    
    setTimeout(() => {
      setApiLoading(false);
      try {
        const parsed = JSON.parse(requestBody);
        if (selectedEndpoint === "underwrite") {
          setApiResponse(JSON.stringify({
            status: "success",
            request_id: "und_" + Math.random().toString(36).substr(2, 9),
            data: {
              entity_id: parsed.entity_id || "UIN-99482-B",
              underwriting_decision: scenario.activeEvent === "MSME_DEFAULT_SPIKE" ? "Declined" : "Approved",
              calculated_score: scenario.activeEvent === "MSME_DEFAULT_SPIKE" ? 58 : 88.4,
              max_safe_exposure: parsed.amount ? Math.floor(parsed.amount * 0.9) : 450000000,
              interest_rate_prime: scenario.activeEvent === "ECONOMIC_SLOWDOWN" ? "12.50%" : "8.75%",
              verification_sources: ["Account Aggregator", "GSTN API", "TReDS Platform"]
            }
          }, null, 2));
        } else {
          setApiResponse(JSON.stringify({
            status: "success",
            consent_request_id: "con_" + Math.random().toString(36).substr(2, 9),
            consent_flow_url: "https://consent.ftid.gov.in/approve/con_f8f81a",
            expires_at: new Date(Date.now() + 86400000 * 30).toISOString()
          }, null, 2));
        }
      } catch (err) {
        setApiResponse(JSON.stringify({
          error: "Invalid JSON format",
          message: (err as Error).message
        }, null, 2));
      }
    }, 800);
  };

  const triggerTestWebhook = () => {
    const newLog = {
      event: webhookEvent,
      time: "Just now",
      status: "200 OK",
      payload: JSON.stringify({
        id: "evt_" + Math.random().toString(36).substr(2, 9),
        object: "event",
        type: webhookEvent,
        created: Math.floor(Date.now() / 1000),
        data: webhookEvent === "consent.granted" ? {
          consent_id: "con_88fa7b2a9e102",
          entity_id: "UIN-99482-B",
          status: "active"
        } : {
          request_id: "und_771a3",
          decision: scenario.activeEvent === "MSME_DEFAULT_SPIKE" ? "Declined" : "Approved",
          systemic_event_active: scenario.activeEvent
        }
      }, null, 2)
    };
    setWebhookLogs(prev => [newLog, ...prev]);
  };

  return (
    <div className="space-y-6">
      
      {/* Institutional Readiness Header */}
      <InstitutionalReadinessBanner
        portalName="Developer Portal"
        purpose="How do client applications integrate with FTID consent and underwriting API layers?"
        dataSources={["Developer Sandbox", "Mock Switch API", "Consent SDK libraries"]}
        intelligenceGenerated={["Interactive JSON responses", "Simulated webhook event packets"]}
        decisionEnabled="Developer integrates SDKs, copies API keys, and validates webhook event listener logic"
        legacyProcess="Developers rely on slow offline staging setups, static PDF API sheets, and manual testing, delaying integrations by months."
        ftidProcess="Developers access a Stripe-style live sandbox explorer, test API requests, and fire simulated webhooks in real-time."
      />

      {/* Connectivity Indicator */}
      <ConnectivityIndicator
        upstream={["Developer Sandbox Keys"]}
        downstream={["Citizen Consent Gateway", "Bank Underwriting Router"]}
      />

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
              DEVELOPER ENVIRONMENT
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">API & Integration Hub</h1>
        </div>
        <div className="flex items-center gap-3 bg-slate-900 p-2 rounded-lg border border-slate-800">
           <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs font-bold border border-emerald-500/30">
             <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
             Sandbox Active
           </div>
        </div>
      </header>

      {/* Two-Column Stripe Docs Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-2 border-r border-slate-800/50 pr-4">
          {[
            { id: 'api', icon: Terminal, label: 'REST APIs & Runner' },
            { id: 'webhooks', icon: Webhook, label: 'Webhook Simulator' },
            { id: 'sdks', icon: Blocks, label: 'Client SDKs' },
            { id: 'integrations', icon: Puzzle, label: 'Sandbox Connectors' },
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

        {/* Console / Explorer Area */}
        <div className="lg:col-span-3 space-y-8">
          
          {activeTab === 'api' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Terminal className="text-cyan-400" /> API Explorer
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Select an endpoint, customize the payload, and dispatch live mock requests directly from the dashboard.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Request Config */}
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <label className="text-xs uppercase font-bold text-slate-400 block mb-2 font-mono">Select Endpoint</label>
                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          setSelectedEndpoint("underwrite");
                          setRequestBody(JSON.stringify({ entity_id: "UIN-99482-B", amount: 500000000, consent_token: "aa_tok_8f92j" }, null, 2));
                        }}
                        className={`w-full text-left p-3 rounded-lg border font-mono text-xs transition-all flex justify-between items-center ${
                          selectedEndpoint === "underwrite" 
                            ? "bg-cyan-950/20 border-cyan-500/50 text-white" 
                            : "bg-[#050c14] border-slate-800 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <span>POST /v1/underwrite/request</span>
                      </button>
                      <button
                        onClick={() => {
                          setSelectedEndpoint("consent");
                          setRequestBody(JSON.stringify({ entity_id: "UIN-99482-B", data_types: ["gst", "bank_statement"], purpose: "MSME_LENDING" }, null, 2));
                        }}
                        className={`w-full text-left p-3 rounded-lg border font-mono text-xs transition-all flex justify-between items-center ${
                          selectedEndpoint === "consent" 
                            ? "bg-cyan-950/20 border-cyan-500/50 text-white" 
                            : "bg-[#050c14] border-slate-800 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <span>POST /v1/consent/request</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase font-bold text-slate-400 block mb-2 font-mono">Request Body</label>
                    <textarea
                      value={requestBody}
                      onChange={(e) => setRequestBody(e.target.value)}
                      rows={5}
                      className="w-full bg-[#050c14] border border-slate-800 rounded-lg p-3 text-xs font-mono text-cyan-400 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <button
                    onClick={runApiRequest}
                    disabled={apiLoading}
                    className="w-full py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs rounded transition-all flex justify-center items-center gap-2"
                  >
                    {apiLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                    Send Sandbox Request
                  </button>
                </div>

                {/* Console Output */}
                <div className="lg:col-span-7 flex flex-col bg-[#0b1120] border border-slate-800 rounded-xl overflow-hidden min-h-[320px]">
                  <div className="flex items-center justify-between px-4 py-2 bg-[#0f172a] border-b border-slate-800">
                    <span className="text-xs font-mono text-slate-300 font-bold">Terminal Response</span>
                    <button 
                      onClick={() => handleCopy(apiResponse || requestBody)} 
                      className="text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                    >
                      {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      Copy
                    </button>
                  </div>
                  <div className="p-4 flex-grow font-mono text-xs text-slate-300 overflow-y-auto">
                    {apiLoading && (
                      <div className="h-full flex items-center justify-center text-slate-500">
                        <RefreshCw className="w-5 h-5 animate-spin mr-2" /> Connecting...
                      </div>
                    )}
                    {!apiLoading && !apiResponse && (
                      <div className="h-full flex flex-col items-center justify-center text-slate-500 py-10 font-sans">
                        <Terminal className="w-8 h-8 mb-2 opacity-30 text-cyan-400" /> Click 'Send Sandbox Request' to run.
                      </div>
                    )}
                    {!apiLoading && apiResponse && (
                      <pre className="text-emerald-400 leading-normal">{apiResponse}</pre>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'webhooks' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Webhook className="text-cyan-400" /> Webhook Simulator
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Simulate live events triggered by user consent approvals or macro default spikes.
                </p>
              </div>

              <div className="bg-[#0a1520] border border-cyan-900/30 p-6 rounded-xl space-y-4">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                  <div className="w-full md:w-1/2">
                    <label className="text-xs uppercase font-bold text-slate-400 block mb-2 font-mono font-bold">Event Trigger Type</label>
                    <select 
                      value={webhookEvent}
                      onChange={(e) => setWebhookEvent(e.target.value)}
                      className="w-full bg-[#050c14] border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    >
                      <option value="consent.granted">consent.granted</option>
                      <option value="underwriting.completed">underwriting.completed</option>
                      <option value="system.default_spike">system.default_spike</option>
                    </select>
                  </div>
                  <button 
                    onClick={triggerTestWebhook}
                    className="w-full md:w-auto px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs rounded transition-all flex items-center justify-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5" /> Fire Webhook Event
                  </button>
                </div>

                <div className="border-t border-slate-800/80 pt-6">
                  <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-4">Simulated Logs</h3>
                  <div className="space-y-3">
                    {webhookLogs.map((log, idx) => (
                      <div key={idx} className="bg-[#050c14] border border-slate-800 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between p-3 bg-slate-900/50 border-b border-slate-800">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded font-mono font-bold">{log.event}</span>
                            <span className="text-[10px] text-slate-500">{log.time}</span>
                          </div>
                          <span className="text-xs font-bold text-emerald-400">{log.status}</span>
                        </div>
                        <pre className="p-3 text-[10px] font-mono text-cyan-400 bg-slate-950/20 overflow-x-auto leading-relaxed">{log.payload}</pre>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sdks' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Blocks className="text-cyan-400" /> Client SDKs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Node.js", "Python", "Go", "Java"].map((sdk) => (
                  <div key={sdk} className="p-4 bg-[#0a1520] border border-cyan-900/30 rounded-xl flex justify-between items-center text-xs">
                    <div>
                      <h4 className="font-bold text-white text-sm">{sdk} Library</h4>
                      <p className="text-xs text-slate-400 mt-1">v2.1.0 • Verified</p>
                    </div>
                    <button className="px-3 py-1 bg-slate-900 border border-slate-800 text-xs font-bold rounded text-slate-300 hover:text-white transition-colors">
                      Install
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Puzzle className="text-cyan-400" /> Verified Sandbox Connectors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-[#05101a] border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group">
                  <CardContent className="p-6 text-xs">
                    <h3 className="text-sm font-bold text-white mb-2">Setu AA Sandbox</h3>
                    <p className="text-slate-400 leading-normal mb-4">
                      Mock bank statements flow via the Account Aggregator network.
                    </p>
                    <button className="w-full py-1.5 bg-slate-800 text-white rounded text-xs font-bold transition-colors">
                      Configure
                    </button>
                  </CardContent>
                </Card>
                <Card className="bg-[#05101a] border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group">
                  <CardContent className="p-6 text-xs">
                    <h3 className="text-sm font-bold text-white mb-2">Decentro KYC Sandbox</h3>
                    <p className="text-slate-400 leading-normal mb-4">
                      Pre-configured CKYC and virtual accounts verification endpoint.
                    </p>
                    <button className="w-full py-1.5 bg-slate-800 text-white rounded text-xs font-bold transition-colors">
                      Configure
                    </button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}