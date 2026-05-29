"use client";

import { Send, QrCode, Receipt, Smartphone, PlusCircle, CreditCard, PiggyBank, Briefcase } from "lucide-react";
import Link from "next/link";

const actions = [
  { href: "/citizen/wallet", icon: Send, label: "Transfer" },
  { href: "/citizen/scan", icon: QrCode, label: "Scan & Pay" },
  { href: "/citizen/bills", icon: Receipt, label: "Pay Bills" },
  { href: "/citizen/recharge", icon: Smartphone, label: "Recharge" },
  { href: "/citizen/cards", icon: CreditCard, label: "Cards" },
  { href: "/citizen/fd", icon: PiggyBank, label: "Deposits" },
  { href: "/citizen/portfolio", icon: Briefcase, label: "Invest" },
  { href: "/citizen/more", icon: PlusCircle, label: "More" },
];

export function BankingQuickActions() {
  return (
    <div className="glass-panel p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Quick Actions</h2>
      </div>
      <div className="grid grid-cols-4 gap-y-6 gap-x-4">
        {actions.map((action, i) => (
          <Link key={i} href={action.href} className="group flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-[#05161e] border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-400/50 transition-all shadow-[inset_0_0_15px_rgba(0,255,255,0.05)]">
              <action.icon className="h-5 w-5 text-cyan-300 group-hover:text-cyan-100 transition-colors" />
            </div>
            <span className="text-[10px] font-medium text-cyan-100/70 text-center tracking-wide group-hover:text-cyan-100">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
