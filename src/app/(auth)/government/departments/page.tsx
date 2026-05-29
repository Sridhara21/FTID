"use client";

import { useState } from "react";
import { Landmark, TrendingUp, HandCoins, Send, CheckCircle2, UserCheck, ShieldCheck, Database, Terminal as TerminalIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Ministry {
  id: string;
  name: string;
  available: number; // in Cr
  disbursed: number; // in Cr
  activePrograms: string[];
}

const initialMinistries: Ministry[] = [
  { id: "MIN_FIN", name: "Ministry of Finance", available: 24000, disbursed: 15200, activePrograms: ["GST State net settlement", "Special Treasury Allocation"] },
  { id: "MIN_AGRI", name: "Ministry of Agriculture", available: 12000, disbursed: 8500, activePrograms: ["PM-KISAN Fertilizer Subsidy", "Agri Loan Interest Subvention"] },
  { id: "MIN_HEALTH", name: "Ministry of Health", available: 8500, disbursed: 4200, activePrograms: ["PM-JAY Tertiary Health Grants", "Primary Clinic Upgrades"] },
  { id: "MIN_MSME", name: "Ministry of MSME", available: 9000, disbursed: 6100, activePrograms: ["Credit Guarantee Scheme (CGTMSE)", "Udyam Digital Uplift Grant"] },
];

const citizenPersonas = [
  { name: "Prithviraj Chauhan", pan: "HPGBT9246V", aadhaar: "403393833964" },
  { name: "Savitri Devi Kumari", pan: "CPLDH2769D", aadhaar: "390892054116" },
  { name: "Siya Nair", pan: "OIHWR0555Z", aadhaar: "656600409173" },
  { name: "Ramesh Malhotra", pan: "ZPYYZ2723K", aadhaar: "763530455618" },
];

export default function GovernmentDepartments() {
  const [ministries, setMinistries] = useState<Ministry[]>(initialMinistries);
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  // Form states
  const [citizenIdx, setCitizenIdx] = useState(0);
  const [voucherType, setVoucherType] = useState("Fertilizer Subsidy");
  const [amountCr, setAmountCr] = useState(500); // in Cr or Lakhs, let's say ₹ (Rupees) for citizens
  const [amountRs, setAmountRs] = useState(5000); // actual amount in Rs for e-RUPI
  const [logs, setLogs] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const activeMinistry = ministries[activeTabIdx];

  const handleDisburse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (amountRs <= 0) return;

    setIsProcessing(true);
    setLogs([]);
    const citizen = citizenPersonas[citizenIdx];
    const disbursementCr = amountRs / 10000000; // convert to Cr for budget tracking

    const steps = [
      `[INGEST] Resolving recipient credentials for ${citizen.name}...`,
      `[VERIFY] Verifying Aadhaar link (SHA-256: ${citizen.aadhaar.substring(0, 4)}***) and PAN: ${citizen.pan}`,
      `[BUDGET] Checking allocation limits on ${activeMinistry.name}...`,
      `[HSM] Requesting RBI HSM voucher authorization token...`,
      `[SIGN] Voucher signed. Program code: [e-RUPI::${voucherType.toUpperCase()}]`,
      `[SUCCESS] e-RUPI token sent directly to Citizen's Enclave. ID: VCH_${Math.random().toString(36).substring(2, 8).toUpperCase()}`
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(r => setTimeout(r, 150 + Math.random() * 150));
      setLogs(prev => [...prev, steps[i]]);
    }

    // Deduct available, add to disbursed
    setMinistries(prev => prev.map((m, idx) => {
      if (idx === activeTabIdx) {
        return {
          ...m,
          available: m.available - disbursementCr,
          disbursed: m.disbursed + disbursementCr
        };
      }
      return m;
    }));

    setIsProcessing(false);
  };

  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Landmark className="h-8 w-8 text-amber-400" />
              Ministry Fund Command
          </h1>
          <p className="text-amber-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            REAL-TIME DEPARTMENTAL ALLOCATIONS & DBT DISBURSEMENT
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-amber-900/50 rounded-full">
            <Database className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">DBT Enclave: Active</span>
        </div>
      </div>

      {/* Selector Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-amber-900/20 pb-4">
        {ministries.map((m, idx) => (
          <button
            key={m.id}
            onClick={() => { setActiveTabIdx(idx); setLogs([]); }}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors border ${
              idx === activeTabIdx
                ? "bg-amber-600 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                : "bg-[#0a1520] border-amber-900/30 text-slate-400 hover:text-white"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Ministry metrics & utilization */}
        <Card className="lg:col-span-6 bg-[#0a1520] border-amber-900/30">
          <CardHeader>
            <CardTitle className="text-base text-white">{activeMinistry.name} Balance Sheet</CardTitle>
            <p className="text-xs text-amber-100/50">Current financial year budget statistics.</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#020810] border border-amber-900/30 rounded-lg">
                <span className="text-[10px] text-amber-500/60 uppercase tracking-widest block">Available Reserves</span>
                <p className="text-2xl font-bold text-white tracking-tighter mt-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  ₹{activeMinistry.available.toFixed(4)} Cr
                </p>
              </div>

              <div className="p-4 bg-[#020810] border border-emerald-950/40 rounded-lg">
                <span className="text-[10px] text-emerald-500/60 uppercase tracking-widest block">Disbursed Funds</span>
                <p className="text-2xl font-bold text-emerald-400 tracking-tighter mt-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  ₹{activeMinistry.disbursed.toFixed(4)} Cr
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-xs font-bold text-amber-100/70 mb-2 uppercase">
                <span>Budget Utilisation</span>
                <span style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {Math.round((activeMinistry.disbursed / (activeMinistry.available + activeMinistry.disbursed)) * 100)}%
                </span>
              </div>
              <div className="w-full bg-[#020810] h-2.5 rounded-full overflow-hidden border border-amber-900/30">
                <div 
                  className="bg-amber-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${(activeMinistry.disbursed / (activeMinistry.available + activeMinistry.disbursed)) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Active Programs list */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60 mb-2.5">Active Fund Netting Vectors</h4>
              <div className="space-y-2">
                {activeMinistry.activePrograms.map(p => (
                  <div key={p} className="p-3 bg-[#020810] border border-amber-900/20 rounded-lg text-xs flex items-center justify-between">
                    <span className="text-white font-bold">{p}</span>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-900/40 px-1.5 py-0.5 rounded">Active</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* e-RUPI Voucher Disburser */}
        <Card className="lg:col-span-6 bg-[#0a1520] border-amber-900/30">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
              <HandCoins className="h-4 w-4 text-amber-500/70" /> Dispatch Programmable e-RUPI Voucher
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleDisburse} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold text-amber-500/60 mb-2">Recipient Citizen</label>
                <select
                  value={citizenIdx}
                  onChange={(e) => setCitizenIdx(Number(e.target.value))}
                  className="w-full bg-[#020810] border border-amber-900/50 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  {citizenPersonas.map((c, idx) => (
                    <option key={c.pan} value={idx}>
                      {c.name} (Aadhaar: {c.aadhaar.substring(0,4)}...)
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-amber-500/60 mb-2">Voucher Purpose</label>
                  <select
                    value={voucherType}
                    onChange={(e) => setVoucherType(e.target.value)}
                    className="w-full bg-[#020810] border border-amber-900/50 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Fertilizer Subsidy">Fertilizer Voucher</option>
                    <option value="Health Grant">Health Clinic Grant</option>
                    <option value="LPG Subsidy">LPG Subsidy Voucher</option>
                    <option value="MSME Uplift">MSME Uplift Voucher</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-amber-500/60 mb-2">Disbursement Amount (₹)</label>
                  <input 
                    type="number"
                    value={amountRs}
                    onChange={(e) => setAmountRs(Number(e.target.value))}
                    className="w-full bg-[#020810] border border-amber-900/50 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    min="1"
                    max="100000"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:bg-amber-900/30 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                <Send className="h-4 w-4" /> {isProcessing ? "Executing ledger transaction..." : "Issue Smart e-RUPI Token"}
              </button>
            </form>

            {/* Trace logs */}
            {logs.length > 0 && (
              <div className="border-t border-amber-900/20 pt-4">
                <div className="bg-[#020810] border border-amber-900/50 rounded-lg p-3 font-mono text-[9px] text-cyan-400/90 h-[90px] overflow-y-auto custom-scrollbar flex flex-col gap-0.5">
                  {logs.map((log, index) => (
                    <div key={index} className="leading-relaxed">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
