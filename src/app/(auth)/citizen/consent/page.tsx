"use client";

import { useState } from "react";
import { Lock, FileText, CheckCircle2, XCircle, Clock, ShieldCheck, Database, Activity, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const consentUsageData = [
  { name: 'Mon', queries: 4 },
  { name: 'Tue', queries: 7 },
  { name: 'Wed', queries: 2 },
  { name: 'Thu', queries: 12 },
  { name: 'Fri', queries: 5 },
  { name: 'Sat', queries: 1 },
  { name: 'Sun', queries: 3 },
];

interface ConsentItem {
  id: string;
  name: string;
  scope: string;
  expiry: string;
  status: "Active" | "Revoked";
}

const initialConsents: ConsentItem[] = [
  { id: "c_1", name: "HDFC Bank Underwriting", scope: "Checking Account History, GST Data", expiry: "Auto-expires in 4 Days (One-time fetch)", status: "Active" },
  { id: "c_2", name: "Zerodha Wealth AI", scope: "Mutual Fund Holdings (CAMS)", expiry: "Recurring (Monthly) • Expires Dec 2027", status: "Active" },
  { id: "c_3", name: "TaxSaver Pro App", scope: "Form 16, Income Tax Returns (Past 2 Yrs)", expiry: "Recurring (Yearly) • Expires Mar 2029", status: "Active" },
];

export default function CitizenConsent() {
  const [consents, setConsents] = useState<ConsentItem[]>(initialConsents);
  const [auditLogs, setAuditLogs] = useState<Array<{ id: string, name: string, hash: string, action: string, time: string }>>([
    { id: "LOG_89", name: "SpendWise AI", hash: "SHA256_82f1b9x...", action: "AUTHORIZED", time: "2 days ago" }
  ]);
  const [activeCount, setActiveCount] = useState(8);
  const [revokedCount, setRevokedCount] = useState(12);

  const handleRevoke = (id: string, name: string) => {
    setConsents((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "Revoked" } : item))
    );
    
    // Update metrics
    setActiveCount((prev) => Math.max(0, prev - 1));
    setRevokedCount((prev) => prev + 1);

    // Add Audit Log
    const newLog = {
      id: `LOG_${Math.floor(Math.random() * 900) + 100}`,
      name: name,
      hash: `SHA256_${Math.random().toString(36).substring(2, 10).toUpperCase()}...`,
      action: "REVOKED",
      time: "Just Now"
    };
    setAuditLogs((prev) => [newLog, ...prev]);
  };

  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Lock className="h-8 w-8 text-cyan-400" />
              Account Aggregator (AA) Consent
          </h1>
          <p className="text-cyan-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            GRANULAR REVOCATION • AUTO-EXPIRING TOKENS
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-emerald-900/50 rounded-full">
            <ShieldCheck className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">AA Framework: Active</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60 mb-2">Active Data Consents</p>
                      <p className="text-4xl font-bold text-white mb-3">{activeCount}</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" /> <span className="text-cyan-500/40 ml-1">RECURRING & ONE-TIME</span>
                      </div>
                  </div>
                  <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-900/50">
                      <Lock className="h-5 w-5 text-cyan-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60 mb-2">Data Fetches (Last 7 Days)</p>
                      <p className="text-4xl font-bold text-cyan-400 mb-3">34</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <Activity className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">ALL AUTHORIZED</span>
                      </div>
                  </div>
                  <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-900/50">
                      <RefreshCw className="h-5 w-5 text-cyan-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60 mb-2">Revoked Consents</p>
                      <p className="text-4xl font-bold text-rose-400 mb-3">{revokedCount}</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-rose-400">
                          <XCircle className="h-3 w-3" /> <span className="text-rose-500/40 ml-1">PAST 30 DAYS</span>
                      </div>
                  </div>
                  <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-900/50">
                      <ShieldCheck className="h-5 w-5 text-cyan-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-8 bg-[#0a1520] border-cyan-900/30 h-[400px] flex flex-col">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <FileText className="h-4 w-4 text-cyan-500/70" /> Active FIU (Financial Information User) Consents
                </CardTitle>
                <p className="text-xs text-cyan-100/50 mt-1">Manage which institutions have access to your data streams.</p>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4 pt-4">
                {consents.map((item) => (
                    <div
                      key={item.id}
                      className={`flex flex-col gap-3 p-4 bg-[#020810] border rounded-lg border-l-2 transition-opacity duration-300 ${
                        item.status === "Revoked"
                        ? "border-rose-900/20 border-l-rose-950 opacity-40"
                        : "border-cyan-900/30 border-l-cyan-500"
                      }`}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-sm font-bold text-white">{item.name}</span>
                                <span className={`text-[10px] uppercase tracking-widest ml-3 font-bold px-2 py-0.5 rounded ${
                                    item.status === "Active" ? "text-cyan-500 bg-cyan-500/10" : "text-rose-500 bg-rose-500/10"
                                }`}>
                                    {item.status}
                                </span>
                            </div>
                            {item.status === "Active" && (
                                <button
                                    onClick={() => handleRevoke(item.id, item.name)}
                                    className="px-3 py-1 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 text-[9px] font-bold uppercase tracking-widest rounded transition-colors"
                                >
                                    Revoke
                                </button>
                            )}
                        </div>
                        <div className="text-xs text-cyan-100/60">
                            <p><strong>Scope:</strong> {item.scope}</p>
                            <p className="flex items-center gap-1 mt-1 text-cyan-500/60 text-[10px] uppercase font-bold tracking-widest">
                                <Clock className="h-3 w-3" /> {item.expiry}
                            </p>
                        </div>
                    </div>
                ))}
            </CardContent>
          </Card>

          <div className="lg:col-span-4 flex flex-col gap-6">
              <Card className="bg-[#0a1520] border-cyan-900/30 h-[180px]">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                        <Activity className="h-4 w-4 text-cyan-500/70" /> Consent Usage Traffic
                    </CardTitle>
                </CardHeader>
                <CardContent className="h-[100px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={consentUsageData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#164e63" vertical={false} />
                            <XAxis dataKey="name" stroke="#0891b2" fontSize={10} tickLine={false} axisLine={false} />
                            <YAxis stroke="#0891b2" fontSize={10} tickLine={false} axisLine={false} />
                            <Tooltip cursor={{fill: '#164e63', opacity: 0.4}} contentStyle={{backgroundColor: '#020810', borderColor: '#164e63', fontSize: '12px'}} />
                            <Bar dataKey="queries" fill="#06b6d4" radius={[2, 2, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30 h-[195px] flex flex-col">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                        <Database className="h-4 w-4 text-cyan-500/70" /> Consent Cryptographic Audit Log
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto space-y-2.5 custom-scrollbar text-[10px] font-mono">
                    {auditLogs.map((log) => (
                        <div key={log.id} className="flex justify-between items-center p-2 border-b border-cyan-900/20 bg-black/20 rounded">
                            <div className="flex flex-col">
                                <span className="text-slate-300 font-bold">{log.name}</span>
                                <span className={`text-[8px] uppercase font-bold tracking-widest mt-0.5 ${
                                    log.action === "REVOKED" ? "text-rose-400" : "text-cyan-400"
                                }`}>
                                    {log.action} • {log.hash}
                                </span>
                            </div>
                            <span className="text-cyan-500/50">{log.time}</span>
                        </div>
                    ))}
                </CardContent>
              </Card>
          </div>
      </div>
    </div>
  );
}

