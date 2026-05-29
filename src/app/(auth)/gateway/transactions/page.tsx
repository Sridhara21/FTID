"use client";

import { useState } from "react";
import { ArrowRightLeft, ShieldCheck, Database, Search, ShieldAlert, XCircle, CheckCircle2, Lock, Terminal as TerminalIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface TxRecord {
  id: string;
  sender: string;
  receiver: string;
  amount: string;
  type: string;
  status: "Settled" | "Pending" | "Escrow Locked";
  reason?: string;
}

const initialTxns: TxRecord[] = [
  { id: "TX_UPI_9901", sender: "Karan Sharma", receiver: "Divya Gupta", amount: "₹4,50,000", type: "UPI Peer-to-Peer", status: "Pending", reason: "Potential Micro-Splitting Loop" },
  { id: "TX_CBDC_3902", sender: "Ramesh Malhotra", receiver: "Apex Trade Corp", amount: "₹1,20,00,000", type: "CBDC Wholesale", status: "Settled" },
  { id: "TX_UPI_1042", sender: "Savitri Devi Kumari", receiver: "Pooja Kirana Store", amount: "₹3,500", type: "UPI Merchant", status: "Settled" },
  { id: "TX_REM_0912", sender: "Shell Global Inc", receiver: "Offshore Exporter Ltd", amount: "₹45,00,000", type: "Cross-Border Remit", status: "Pending", reason: "LRS Limit Breach Alert" },
  { id: "TX_CBDC_9921", sender: "Organic Farms Co", receiver: "Fertilizer Retailer", amount: "₹80,000", type: "Programmable e-RUPI", status: "Settled" }
];

export default function GatewayTransactions() {
  const [txns, setTxns] = useState<TxRecord[]>(initialTxns);
  const [search, setSearch] = useState("");
  const [smartHoldCount, setSmartHoldCount] = useState(12);
  const [logs, setLogs] = useState<string[]>([]);

  const handleApplyHold = (txId: string) => {
    setTxns(prev => prev.map(t => {
      if (t.id === txId && t.status !== "Escrow Locked") {
        setSmartHoldCount(c => c + 1);
        setLogs(l => [
          ...l,
          `[HOLD] Applied Smart-Hold on transaction ${t.id} for ${t.amount}...`,
          `[VAULT] Funds successfully locked in Escrow Vault: ESCROW_GW_${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
          `[REGISTRY] Flag sent to RBI early warning node.`
        ]);
        return { ...t, status: "Escrow Locked" };
      }
      return t;
    }));
  };

  const filteredTxns = txns.filter(t => 
    t.id.toLowerCase().includes(search.toLowerCase()) ||
    t.sender.toLowerCase().includes(search.toLowerCase()) ||
    t.receiver.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <ArrowRightLeft className="h-8 w-8 text-sky-400" />
              Live Gateway Settlements
          </h1>
          <p className="text-sky-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            REAL-TIME SOVEREIGN TRANSFERS & HOLD LEDGER
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-sky-900/50 rounded-full">
            <Database className="h-4 w-4 text-sky-400/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400/60">Ledger Sync: Synchronized</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-[#0a1520] border-sky-900/30">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-sky-500/60 mb-1">Escrow Safeguard Holds</p>
              <p className="text-3xl font-bold text-white tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {smartHoldCount}
              </p>
            </div>
            <div className="p-3 bg-sky-900/20 rounded-xl border border-sky-900/50">
              <Lock className="h-5 w-5 text-sky-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-rose-900/30">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-rose-500/60 mb-1">Flagged Violations</p>
              <p className="text-3xl font-bold text-rose-400 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>
                2
              </p>
            </div>
            <div className="p-3 bg-rose-900/20 rounded-xl border border-rose-900/50">
              <ShieldAlert className="h-5 w-5 text-rose-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Ledger Table */}
      <Card className="bg-[#0a1520] border-sky-900/30">
        <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4">
          <div>
            <CardTitle className="text-base text-white">National Highway Ledger</CardTitle>
            <p className="text-xs text-sky-100/50">Real-time routing logs of high-value sovereign assets.</p>
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-sky-500/60" />
            <input 
              type="text" 
              placeholder="Search Ledger (TxID, Name)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 w-full bg-[#020810] border border-sky-900/50 rounded-lg text-xs text-white placeholder-sky-950 focus:outline-none focus:border-sky-400"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-sky-900/40 text-sky-500/60 font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">TX ID</th>
                  <th className="py-3 px-4">Sender</th>
                  <th className="py-3 px-4">Receiver</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Containment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-900/20 font-medium">
                {filteredTxns.map((t) => (
                  <tr key={t.id} className="hover:bg-sky-950/20 transition-colors">
                    <td className="py-3 px-4 font-mono text-sky-300">{t.id}</td>
                    <td className="py-3 px-4 text-white">{t.sender}</td>
                    <td className="py-3 px-4 text-white">{t.receiver}</td>
                    <td className="py-3 px-4 text-white" style={{ fontVariantNumeric: 'tabular-nums' }}>{t.amount}</td>
                    <td className="py-3 px-4 text-sky-100/50">{t.type}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        t.status === "Settled"
                          ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/30"
                          : t.status === "Pending"
                          ? "bg-amber-950/40 text-amber-400 border border-amber-900/30"
                          : "bg-rose-950/40 text-rose-400 border border-rose-900/30"
                      }`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      {t.status === "Pending" ? (
                        <button 
                          onClick={() => handleApplyHold(t.id)}
                          className="px-2 py-1 bg-rose-600/20 hover:bg-rose-600 border border-rose-500/30 text-rose-400 hover:text-white font-bold text-[9px] uppercase tracking-wider rounded transition-colors"
                        >
                          Smart-Hold
                        </button>
                      ) : t.status === "Escrow Locked" ? (
                        <span className="text-[10px] text-rose-400 font-mono flex items-center justify-end gap-1 font-bold">
                          <XCircle className="h-3.5 w-3.5" /> Escrowed
                        </span>
                      ) : (
                        <span className="text-[10px] text-emerald-400 font-mono flex items-center justify-end gap-1 font-bold">
                          <CheckCircle2 className="h-3.5 w-3.5" /> net OK
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Log view */}
      {logs.length > 0 && (
        <Card className="bg-[#0a1520] border-sky-900/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-sky-500/60 flex items-center gap-2">
              <TerminalIcon className="h-4 w-4" /> Safeguard Vault Operations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-[#020810] border border-sky-900/50 rounded-lg p-4 font-mono text-[10px] text-cyan-400/90 h-[100px] overflow-y-auto custom-scrollbar flex flex-col gap-1">
              {logs.map((log, index) => (
                <div key={index} className="leading-relaxed">
                  {log}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
