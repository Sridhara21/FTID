"use client";

import { useState, useEffect } from "react";
import { Terminal, Activity, Code, ShieldCheck, Cpu, Box, CheckCircle2, Copy, Play, Send } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const apiTrafficData = [
  { time: '10:00', totalRequests: 4200, latencyMs: 45 },
  { time: '11:00', totalRequests: 5800, latencyMs: 52 },
  { time: '12:00', totalRequests: 8400, latencyMs: 65 },
  { time: '13:00', totalRequests: 9100, latencyMs: 68 },
  { time: '14:00', totalRequests: 7200, latencyMs: 55 },
  { time: '15:00', totalRequests: 8500, latencyMs: 58 },
];

interface Endpoint {
  method: "POST" | "GET";
  path: string;
  defaultPayload: string;
  mockResponse: string;
  status: string;
  latency: string;
}

const endpoints: Record<string, Endpoint> = {
  "/v2/uli/credit-score": {
    method: "POST",
    path: "/v2/uli/credit-score",
    defaultPayload: `{
  "consent_id": "CONSENT_901x_88",
  "applicant_pan": "HPGBT9246V",
  "loan_requested": 12000000
}`,
    status: "200 OK",
    latency: "52ms",
    mockResponse: `{
  "status": "SUCCESS",
  "uli_id": "ULI_SCORE_9921_A",
  "credit_rating": 840,
  "net_disposable_income_monthly": 1820000,
  "risk_assessment": "Low",
  "auto_approval_eligible": true,
  "sign_key_validated": "HSM_RBI_BOND_9f2a"
}`
  },
  "/v2/aa/consent-token": {
    method: "GET",
    path: "/v2/aa/consent-token",
    defaultPayload: `// No payload required for GET requests`,
    status: "401 UNAUTHORIZED",
    latency: "15ms",
    mockResponse: `{
  "error": "UNAUTHORIZED_ACCESS",
  "message": "Consent token expired or explicitly revoked by Citizen",
  "code": 40103,
  "timestamp": "2026-05-27T07:10:00Z"
}`
  },
  "/v2/erupi/voucher/create": {
    method: "POST",
    path: "/v2/erupi/voucher/create",
    defaultPayload: `{
  "receiver_aadhaar": "403393833964",
  "program_category": "PM-JAY Health",
  "amount_inr": 5000
}`,
    status: "201 CREATED",
    latency: "84ms",
    mockResponse: `{
  "status": "CREATED",
  "voucher_hash": "eRUPI_VCH_0128X_KPW",
  "ledger_block": 18921820,
  "expiration": "2026-12-31T23:59:59Z",
  "redemption_restrictions": [
    "CLINICS",
    "PHARMACIES",
    "EMERGENCY"
  ]
}`
  }
};

export default function DeveloperVerification() {
  const [selectedEndpoint, setSelectedEndpoint] = useState("/v2/uli/credit-score");
  const [payload, setPayload] = useState(endpoints["/v2/uli/credit-score"].defaultPayload);
  const [response, setResponse] = useState("");
  const [resStatus, setResStatus] = useState("");
  const [resLatency, setResLatency] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPayload(endpoints[selectedEndpoint].defaultPayload);
    setResponse("");
    setResStatus("");
    setResLatency("");
  }, [selectedEndpoint]);

  const handleSendRequest = async () => {
    setIsSending(true);
    await new Promise(r => setTimeout(r, 400 + Math.random() * 400));
    setResponse(endpoints[selectedEndpoint].mockResponse);
    setResStatus(endpoints[selectedEndpoint].status);
    setResLatency(endpoints[selectedEndpoint].latency);
    setIsSending(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Terminal className="h-8 w-8 text-purple-400" />
              FinTech API Sandbox (v2.4)
          </h1>
          <p className="text-purple-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            INDIA STACK 2.0 • E-KYC / ULI / AA ENDPOINTS
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-emerald-900/50 rounded-full">
            <CheckCircle2 className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">Environment: Staging (Active)</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-purple-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500/60 mb-2">Total API Calls (24h)</p>
                      <p className="text-4xl font-bold text-white mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>142K</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <Activity className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">WITHIN TIER LIMITS</span>
                      </div>
                  </div>
                  <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-900/50">
                      <Activity className="h-5 w-5 text-purple-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-purple-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500/60 mb-2">Average P99 Latency</p>
                      <p className="text-4xl font-bold text-purple-400 mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>54ms</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-purple-400">
                          <Cpu className="h-3 w-3" /> <span className="text-purple-500/40 ml-1">OPTIMIZED ROUTING</span>
                      </div>
                  </div>
                  <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-900/50">
                      <Cpu className="h-5 w-5 text-purple-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-purple-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500/60 mb-2">Success Rate</p>
                      <p className="text-4xl font-bold text-emerald-400 mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>99.9%</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <ShieldCheck className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">NO DROPPED PACKETS</span>
                      </div>
                  </div>
                  <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-900/50">
                      <ShieldCheck className="h-5 w-5 text-purple-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-6 bg-[#0a1520] border-purple-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <Activity className="h-5 w-5 text-purple-500/70" /> API Traffic & Latency Metrics
                    </CardTitle>
                    <p className="text-xs text-purple-100/50">Simulated volume across e-KYC, ULI credit pulls, and CBDC transactions.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={apiTrafficData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4c1d95" vertical={false} />
                        <XAxis dataKey="time" stroke="#a855f7" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis yAxisId="left" stroke="#a855f7" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} />
                        <YAxis yAxisId="right" orientation="right" stroke="#f472b6" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}ms`} />
                        <Tooltip cursor={{stroke: '#4c1d95'}} contentStyle={{backgroundColor: '#020810', borderColor: '#4c1d95'}} />
                        <Line yAxisId="left" type="monotone" dataKey="totalRequests" name="Req/Hr" stroke="#a855f7" strokeWidth={3} dot={false} />
                        <Line yAxisId="right" type="monotone" dataKey="latencyMs" name="Latency" stroke="#f472b6" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Sandbox interactive testing panel */}
          <Card className="lg:col-span-6 bg-[#0a1520] border-purple-900/30 flex flex-col justify-between">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                <Code className="h-4 w-4 text-purple-500/70" /> API Request Console
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-purple-500/60 mb-2">Endpoint Method</label>
                  <select
                    value={selectedEndpoint}
                    onChange={(e) => setSelectedEndpoint(e.target.value)}
                    className="w-full bg-[#020810] border border-purple-900/50 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="/v2/uli/credit-score">POST /v2/uli/credit-score</option>
                    <option value="/v2/aa/consent-token">GET /v2/aa/consent-token</option>
                    <option value="/v2/erupi/voucher/create">POST /v2/erupi/voucher/create</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button 
                    onClick={handleSendRequest}
                    disabled={isSending}
                    className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-900/30 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="h-3.5 w-3.5" /> {isSending ? "Executing call..." : "Send Sandbox Request"}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-purple-500/60 mb-2">Request Payload</label>
                <textarea
                  value={payload}
                  onChange={(e) => setPayload(e.target.value)}
                  className="w-full bg-[#020810] border border-purple-900/50 rounded-lg p-3 font-mono text-xs text-purple-300 h-28 focus:outline-none focus:border-purple-400 custom-scrollbar resize-none"
                />
              </div>
            </CardContent>
          </Card>
      </div>

      {/* Response Terminal */}
      {(resStatus || isSending) && (
        <Card className="bg-[#0a1520] border-purple-900/30 mt-2">
          <CardHeader className="flex flex-row justify-between items-center pb-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-500/60">Response Enclave</span>
              {resStatus && (
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                  resStatus.startsWith("2") ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/30" : "bg-rose-950/40 text-rose-400 border border-rose-900/30"
                }`}>
                  Status: {resStatus} ({resLatency})
                </span>
              )}
            </div>
            {response && (
              <button 
                onClick={handleCopy}
                className="flex items-center gap-1 text-[10px] uppercase font-bold text-purple-400 hover:text-white transition-colors"
              >
                <Copy className="h-3.5 w-3.5" /> {copied ? "Copied!" : "Copy Response"}
              </button>
            )}
          </CardHeader>
          <CardContent>
            {isSending ? (
              <div className="h-32 flex flex-col items-center justify-center gap-2">
                <Activity className="h-6 w-6 text-purple-500 animate-spin" />
                <span className="text-[10px] font-mono text-purple-400/50 tracking-widest uppercase">Waiting for staging response...</span>
              </div>
            ) : (
              <pre className="bg-[#020810] border border-purple-900/50 rounded-lg p-4 font-mono text-[11px] text-emerald-400/90 overflow-x-auto max-h-56 custom-scrollbar">
                {response}
              </pre>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
