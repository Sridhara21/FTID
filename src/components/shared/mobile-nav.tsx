"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutGrid, Wallet, Briefcase, FileText, User, Receipt, ShieldCheck,
  Target, Network, Database, Activity, HandCoins, AlertTriangle, PieChart,
  Layers, ArrowRightLeft, Terminal, Lock
} from "lucide-react";

const PORTAL_NAVS = {
  citizen: {
    color: "text-cyan-400",
    bg: "bg-cyan-900/30",
    border: "border-cyan-500/20",
    glow: "bg-cyan-400/20",
    items: [
      { href: "/citizen", icon: LayoutGrid, label: "Home" },
      { href: "/citizen/wallet", icon: Wallet, label: "Wallet" },
      { href: "/citizen/consent", icon: Lock, label: "Consent" },
      { href: "/citizen/profile", icon: User, label: "Profile" }
    ]
  },
  business: {
    color: "text-emerald-400",
    bg: "bg-emerald-900/30",
    border: "border-emerald-500/20",
    glow: "bg-emerald-400/20",
    items: [
      { href: "/business", icon: LayoutGrid, label: "Command" },
      { href: "/business/invoices", icon: Receipt, label: "Invoices" },
      { href: "/business/compliance", icon: ShieldCheck, label: "Compliant" },
      { href: "/business/credit", icon: Target, label: "Credit" }
    ]
  },
  bank: {
    color: "text-blue-400",
    bg: "bg-blue-900/30",
    border: "border-blue-500/20",
    glow: "bg-blue-400/20",
    items: [
      { href: "/bank", icon: LayoutGrid, label: "Risk" },
      { href: "/bank/underwriting", icon: FileText, label: "Loans" },
      { href: "/bank/fraud", icon: AlertTriangle, label: "Fraud" },
      { href: "/bank/network", icon: Network, label: "Network" }
    ]
  },
  government: {
    color: "text-amber-400",
    bg: "bg-amber-900/30",
    border: "border-amber-500/20",
    glow: "bg-amber-400/20",
    items: [
      { href: "/government", icon: LayoutGrid, label: "Economy" },
      { href: "/government/tax", icon: Database, label: "Tax" },
      { href: "/government/policy", icon: HandCoins, label: "Policy" }
    ]
  },
  regulator: {
    color: "text-rose-400",
    bg: "bg-rose-900/30",
    border: "border-rose-500/20",
    glow: "bg-rose-400/20",
    items: [
      { href: "/regulator", icon: LayoutGrid, label: "Stability" },
      { href: "/regulator/fraud", icon: AlertTriangle, label: "NFR" },
      { href: "/regulator/heatmap", icon: PieChart, label: "Stress" }
    ]
  },
  auditor: {
    color: "text-indigo-400",
    bg: "bg-indigo-900/30",
    border: "border-indigo-500/20",
    glow: "bg-indigo-400/20",
    items: [
      { href: "/auditor", icon: LayoutGrid, label: "Audit" },
      { href: "/auditor/reconciliation", icon: ArrowRightLeft, label: "Recon" },
      { href: "/auditor/risk", icon: Target, label: "Risk" }
    ]
  },
  developer: {
    color: "text-purple-400",
    bg: "bg-purple-900/30",
    border: "border-purple-500/20",
    glow: "bg-purple-400/20",
    items: [
      { href: "/developer", icon: Terminal, label: "API" },
      { href: "/developer/verification", icon: ShieldCheck, label: "Sandbox" },
      { href: "/developer/keys", icon: Lock, label: "Keys" }
    ]
  },
  gateway: {
    color: "text-sky-400",
    bg: "bg-sky-900/30",
    border: "border-sky-500/20",
    glow: "bg-sky-400/20",
    items: [
      { href: "/gateway", icon: LayoutGrid, label: "Command" },
      { href: "/gateway/transactions", icon: Activity, label: "Live" },
      { href: "/gateway/compliance", icon: ShieldCheck, label: "Rules" }
    ]
  }
};

export function MobileNav() {
  const pathname = usePathname();
  const currentContext = pathname.split('/')[1] || 'citizen';
  const config = PORTAL_NAVS[currentContext as keyof typeof PORTAL_NAVS] || PORTAL_NAVS.citizen;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2 pointer-events-none">
      <nav className={`w-full rounded-3xl border ${config.border} shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl bg-[#0a1520]/80 pointer-events-auto flex items-center justify-around p-3 relative overflow-hidden`}>
        {/* Subtle glow underneath */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>

        {config.items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center gap-1 min-w-[60px] py-1 transition-all duration-300",
                isActive ? "text-white" : "text-slate-500 hover:text-slate-300"
              )}
            >
              <div className="relative">
                <item.icon className={cn("h-5 w-5 transition-transform duration-300", isActive ? `${config.color} scale-110` : "")} />
                {isActive && (
                  <div className={`absolute inset-0 ${config.glow} blur-md rounded-full scale-150 z-[-1]`}></div>
                )}
              </div>
              <span className={cn(
                "text-[9px] font-bold uppercase tracking-widest transition-all duration-300 mt-1",
                isActive ? `opacity-100 ${config.color}` : "opacity-0 translate-y-1"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
