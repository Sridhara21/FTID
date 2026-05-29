"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, CreditCard, PiggyBank, ArrowRight, Wallet } from "lucide-react";
import Link from "next/link";

export function AccountsSummary({ totalBalance }: { totalBalance: number }) {
  return (
    <Card className="glass-panel">
      <CardHeader className="pb-4 border-b border-cyan-500/20">
        <CardTitle className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center justify-between">
          <span>Accounts & Deposits</span>
          <Link href="/citizen/portfolio" className="flex items-center text-[10px] text-cyan-300 hover:text-cyan-100 transition-colors">
            View All <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-cyan-500/10">
          
          <div className="p-4 flex items-center justify-between hover:bg-cyan-900/10 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-950 rounded-lg border border-cyan-500/20">
                <Landmark className="h-4 w-4 text-cyan-300" />
              </div>
              <div>
                <p className="text-xs font-semibold text-cyan-100">Savings Account</p>
                <p className="text-[10px] text-cyan-500 font-mono mt-0.5">XX4092</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold font-mono text-cyan-50">₹{(totalBalance || 45200).toLocaleString('en-IN')}</p>
              <p className="text-[10px] text-emerald-400 font-semibold tracking-wide">Available</p>
            </div>
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-cyan-900/10 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-950 rounded-lg border border-purple-500/20">
                <CreditCard className="h-4 w-4 text-purple-300" />
              </div>
              <div>
                <p className="text-xs font-semibold text-purple-100">FTID Credit Card</p>
                <p className="text-[10px] text-purple-500 font-mono mt-0.5">XX1104</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold font-mono text-purple-100">₹12,450</p>
              <p className="text-[10px] text-rose-400 font-semibold tracking-wide">Outstanding</p>
            </div>
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-cyan-900/10 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-950 rounded-lg border border-emerald-500/20">
                <PiggyBank className="h-4 w-4 text-emerald-300" />
              </div>
              <div>
                <p className="text-xs font-semibold text-emerald-100">Fixed Deposit</p>
                <p className="text-[10px] text-emerald-500 font-mono mt-0.5">Maturity: 2027</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold font-mono text-emerald-100">₹1,50,000</p>
              <p className="text-[10px] text-emerald-400 font-semibold tracking-wide">@ 7.1% p.a.</p>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
