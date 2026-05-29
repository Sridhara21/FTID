"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Transaction {
  id: string;
  amount: number;
  type: "IN" | "OUT";
  entity: string;
  status: "SETTLED" | "PENDING" | "FLAGGED";
  timestamp: string;
}

const mockEntities = [
  "NHAI FASTag Settlement", "HDFC Nodal", "SBI Wholesale", "NPCI UPI Core", 
  "GSTIN Sub-ledger", "UIDAI Auth Node", "CBDC Interledger", "MSME Vendor Node"
];

export function LiveTransactionStream({ className = "" }: { className?: string }) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Initial load
    const initial = Array.from({ length: 5 }).map(() => generateTx());
    setTransactions(initial);

    // Stream new transactions
    const interval = setInterval(() => {
      setTransactions(prev => [generateTx(), ...prev].slice(0, 5));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const generateTx = (): Transaction => {
    const isOut = Math.random() > 0.5;
    const isFlagged = Math.random() > 0.85;
    return {
      id: Math.random().toString(36).substring(2, 10).toUpperCase(),
      amount: Math.floor(Math.random() * 5000000),
      type: isOut ? "OUT" : "IN",
      entity: mockEntities[Math.floor(Math.random() * mockEntities.length)],
      status: isFlagged ? "FLAGGED" : "SETTLED",
      timestamp: new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" })
    };
  };

  const getStatusColor = (status: string) => {
    if (status === "SETTLED") return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
    if (status === "FLAGGED") return "text-rose-500 bg-rose-500/10 border-rose-500/20 animate-pulse";
    return "text-amber-500 bg-amber-500/10 border-amber-500/20";
  };

  return (
    <Card className={`bg-[#0a1520] border-cyan-900/30 ${className}`}>
      <CardHeader className="pb-3 border-b border-cyan-900/30">
        <CardTitle className="text-xs font-bold uppercase tracking-widest text-white flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-cyan-400 animate-pulse" />
            Live Telemetry Stream
          </span>
          <span className="text-[9px] text-cyan-500/50">NODE_SYNC: OK</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col">
          {transactions.map((tx, i) => (
            <div 
              key={tx.id} 
              className={`p-3 flex items-center justify-between border-b border-cyan-900/10 transition-all duration-500 ${i === 0 ? 'bg-cyan-900/5' : 'bg-transparent'}`}
            >
              <div className="flex items-center gap-3 w-1/3">
                <div className={`p-1.5 rounded-md ${tx.type === 'IN' ? 'bg-emerald-500/10' : 'bg-cyan-500/10'}`}>
                  {tx.type === "IN" ? 
                    <ArrowDownRight className="h-4 w-4 text-emerald-400" /> : 
                    <ArrowUpRight className="h-4 w-4 text-cyan-400" />
                  }
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-200 truncate">{tx.entity}</p>
                  <p className="text-[9px] font-mono text-slate-500">TXN:{tx.id}</p>
                </div>
              </div>

              <div className="w-1/3 text-right pr-4">
                <p className={`text-sm font-bold font-mono ${tx.type === 'IN' ? 'text-emerald-400' : 'text-slate-200'}`}>
                  {tx.type === "IN" ? "+" : "-"}₹{(tx.amount / 100000).toFixed(2)}Cr
                </p>
                <p className="text-[9px] font-mono text-slate-500">{tx.timestamp}</p>
              </div>

              <div className="w-1/4 flex justify-end">
                <span className={`px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest border ${getStatusColor(tx.status)}`}>
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
