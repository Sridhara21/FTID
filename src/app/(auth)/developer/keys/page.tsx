"use client";

import { useState } from "react";
import { Lock, ShieldCheck, CheckCircle2, Activity, ShieldAlert, Key, Copy, RefreshCw, Plus, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const keyUsageData = [
  { day: 'Mon', prodKey: 42000, testKey: 15000 },
  { day: 'Tue', prodKey: 45000, testKey: 12000 },
  { day: 'Wed', prodKey: 48000, testKey: 18000 },
  { day: 'Thu', prodKey: 41000, testKey: 22000 },
  { day: 'Fri', prodKey: 52000, testKey: 25000 },
  { day: 'Sat', prodKey: 38000, testKey: 30000 },
  { day: 'Sun', prodKey: 30000, testKey: 28000 },
];

interface ApiKey {
  id: string;
  name: string;
  env: "Production" | "Staging";
  key: string;
  scopes: string[];
  active: boolean;
}

const initialKeys: ApiKey[] = [
  { id: "key_01", name: "Production - Alpha", env: "Production", key: "sk_live_58c2a419df2341ba9f2a", scopes: ["identity:read", "uli:underwrite"], active: true },
  { id: "key_02", name: "Staging Sandbox", env: "Staging", key: "sk_test_1092fb38192a83141b4x", scopes: ["identity:read", "identity:write", "erupi:disburse"], active: true }
];

export default function DeveloperKeys() {
  const [keys, setKeys] = useState<ApiKey[]>(initialKeys);
  
  // Generator states
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyEnv, setNewKeyEnv] = useState<"Production" | "Staging">("Staging");
  const [selectedScopes, setSelectedScopes] = useState<string[]>(["identity:read"]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const handleScopeToggle = (scope: string) => {
    setSelectedScopes(prev => 
      prev.includes(scope) ? prev.filter(s => s !== scope) : [...prev, scope]
    );
  };

  const handleGenerateKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyName || selectedScopes.length === 0) return;

    const randomHex = Array.from({length: 20}, () => Math.floor(Math.random()*16).toString(16)).join('');
    const keyPrefix = newKeyEnv === "Production" ? "sk_live_" : "sk_test_";
    const generatedKey = `${keyPrefix}${randomHex}`;

    const newKey: ApiKey = {
      id: `key_0${keys.length + 1}`,
      name: newKeyName,
      env: newKeyEnv,
      key: generatedKey,
      scopes: [...selectedScopes],
      active: true
    };

    setKeys(prev => [...prev, newKey]);
    setLogs(l => [
      ...l,
      `[VAULT] Requesting HSM asymmetric key pair generation...`,
      `[VAULT] Registering key metadata: Env=[${newKeyEnv}], Scopes=[${selectedScopes.join(', ')}]`,
      `[SUCCESS] Generated secure API token. Appended to vault database.`
    ]);

    setNewKeyName("");
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Lock className="h-8 w-8 text-purple-400" />
              Secure Key Management
          </h1>
          <p className="text-purple-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            HSM INTEGRATION • ROTATION LOGS • QUOTA LIMITS
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-emerald-900/50 rounded-full">
            <ShieldCheck className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">Vault: Locked & Secure</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-purple-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500/60 mb-2">Active API Keys</p>
                      <p className="text-4xl font-bold text-white mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        {keys.length}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" /> <span className="text-purple-500/40 ml-1">STAGING & PROD VAULT</span>
                      </div>
                  </div>
                  <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-900/50">
                      <Key className="h-5 w-5 text-purple-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-purple-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500/60 mb-2">Next Auto-Rotation</p>
                      <p className="text-4xl font-bold text-purple-400 mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>14<span className="text-xl text-purple-500/50"> Days</span></p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-purple-400">
                          <RefreshCw className="h-3 w-3" /> <span className="text-purple-500/40 ml-1">VIA SMART CONTRACT</span>
                      </div>
                  </div>
                  <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-900/50">
                      <RefreshCw className="h-5 w-5 text-purple-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-purple-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500/60 mb-2">Security Incidents</p>
                      <p className="text-4xl font-bold text-emerald-400 mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>0</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <ShieldCheck className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">NO LEAKS DETECTED</span>
                      </div>
                  </div>
                  <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-900/50">
                      <ShieldAlert className="h-5 w-5 text-purple-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-8 bg-[#0a1520] border-purple-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <Activity className="h-5 w-5 text-purple-500/70" /> Key Utilization Traffic
                    </CardTitle>
                    <p className="text-xs text-purple-100/50">Volume of requests authenticated by Production vs Staging tokens.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={keyUsageData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorTest" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4c1d95" vertical={false} />
                        <XAxis dataKey="day" stroke="#a855f7" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#a855f7" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} />
                        <Tooltip cursor={{stroke: '#4c1d95'}} contentStyle={{backgroundColor: '#020810', borderColor: '#4c1d95'}} />
                        <Area type="monotone" dataKey="prodKey" name="Prod Token Uses" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#colorProd)" />
                        <Area type="monotone" dataKey="testKey" name="Test Token Uses" stroke="#ec4899" strokeWidth={2} fillOpacity={1} fill="url(#colorTest)" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Token Vault List */}
          <Card className="lg:col-span-4 bg-[#0a1520] border-purple-900/30">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Key className="h-4 w-4 text-purple-500/70" /> Key Vault
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
              {keys.map((key) => (
                <div key={key.id} className="flex flex-col gap-2 p-3 bg-[#020810] border border-purple-900/30 border-l-2 border-l-emerald-500 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white">{key.name}</span>
                    <span className={`text-[8px] uppercase font-bold px-1 py-0.5 rounded ${
                      key.env === "Production" ? "bg-purple-950/60 text-purple-300 border border-purple-900/50" : "bg-pink-950/60 text-pink-300 border border-pink-900/50"
                    }`}>{key.env}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1 p-2 bg-black/40 rounded border border-purple-900/50">
                    <span className="text-[10px] font-mono text-purple-300 tracking-widest">
                      {key.key.substring(0, 8)}...{key.key.substring(key.key.length - 4)}
                    </span>
                    <button 
                      onClick={() => handleCopy(key.id, key.key)}
                      className="text-purple-500 hover:text-white transition-colors"
                    >
                      {copiedId === key.id ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                  <p className="text-[9px] font-mono text-purple-400/50 mt-0.5">Scopes: {key.scopes.join(", ")}</p>
                </div>
              ))}
            </CardContent>
          </Card>
      </div>

      {/* Generator & Console Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
        <Card className="lg:col-span-6 bg-[#0a1520] border-purple-900/30">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
              <Plus className="h-4 w-4 text-purple-500" /> Generate API Secret Token
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGenerateKey} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold text-purple-500/60 mb-2">Key Label / Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Production - Analytics Node"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  className="w-full bg-[#020810] border border-purple-900/50 rounded-lg p-2.5 text-xs text-white placeholder-purple-950 focus:outline-none focus:border-purple-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-purple-500/60 mb-2">Key Environment</label>
                  <select
                    value={newKeyEnv}
                    onChange={(e) => setNewKeyEnv(e.target.value as "Production" | "Staging")}
                    className="w-full bg-[#020810] border border-purple-900/50 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="Staging">Staging (Testnet)</option>
                    <option value="Production">Production (Mainnet)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-purple-500/60 mb-2">Select Key Scopes</label>
                  <div className="space-y-2 mt-1">
                    {["identity:read", "identity:write", "uli:underwrite", "erupi:disburse"].map((scope) => (
                      <label key={scope} className="flex items-center gap-2 text-xs text-purple-300 font-mono">
                        <input 
                          type="checkbox"
                          checked={selectedScopes.includes(scope)}
                          onChange={() => handleScopeToggle(scope)}
                          className="rounded border-purple-900 bg-[#020810] text-purple-600 focus:ring-0 focus:ring-offset-0"
                        />
                        {scope}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              >
                <Plus className="h-4 w-4" /> Provision New API Token
              </button>
            </form>
          </CardContent>
        </Card>

        {/* HSM rotation logs */}
        <Card className="lg:col-span-6 bg-[#0a1520] border-purple-900/30 flex flex-col justify-between">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-purple-500/60 flex items-center gap-2">
              <RefreshCw className="h-4 w-4" /> HSM Cryptographic Audit Logs
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <div className="bg-[#020810] border border-purple-900/50 rounded-lg p-3 font-mono text-[9px] text-cyan-400/90 h-[150px] overflow-y-auto custom-scrollbar flex flex-col gap-0.5">
              {logs.length === 0 ? (
                <span className="text-purple-500/40 italic text-center block mt-10">Vault idle. Waiting for cryptographic instructions...</span>
              ) : (
                logs.map((l, i) => <div key={i}>{l}</div>)
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
