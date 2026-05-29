"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Bot, LayoutGrid, HeartPulse, Landmark, ShieldCheck, User, Wallet, Scale,
  FileText, HandCoins, ArrowRightLeft, Briefcase, Lock, Database, Target,
  Building2, PieChart, Network, Terminal, Settings, Activity, Layers, Receipt
} from "lucide-react";
import {
  SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

// --- Configuration for Portals ---
const PORTALS = {
  citizen: {
    title: "FTID",
    subtitle: "Citizen Node",
    headerIcon: Bot,
    headerColor: "text-cyan-400",
    headerBg: "bg-cyan-900/30",
    headerBorder: "border-cyan-500/20",
    sectionTitle: "Identity Portal",
    menuColor: "text-cyan-400",
    menuActiveBg: "bg-cyan-900/30",
    menuActiveBorder: "border-cyan-500",
    navItems: [
      { href: "/citizen", icon: LayoutGrid, label: "Control Center" },
      { href: "/citizen/profile", icon: User, label: "Identity Hub" },
      { href: "/citizen/consent", icon: Lock, label: "Consent Management" },
      { href: "/citizen/wallet", icon: Wallet, label: "CBDC Wallet" },
      { href: "/citizen/portfolio", icon: Briefcase, label: "Investments" },
      { href: "/citizen/credit-score", icon: HeartPulse, label: "Financial Health" },
      { href: "/citizen/tax", icon: FileText, label: "Tax & Compliance" }
    ]
  },
  business: {
    title: "FTID",
    subtitle: "Enterprise Node",
    headerIcon: Building2,
    headerColor: "text-emerald-400",
    headerBg: "bg-emerald-900/30",
    headerBorder: "border-emerald-500/20",
    sectionTitle: "Corporate Portal",
    menuColor: "text-emerald-400",
    menuActiveBg: "bg-emerald-900/30",
    menuActiveBorder: "border-emerald-500",
    navItems: [
      { href: "/business", icon: LayoutGrid, label: "Enterprise Command" },
      { href: "/business/invoices", icon: Receipt, label: "Smart Invoices" },
      { href: "/business/compliance", icon: ShieldCheck, label: "Real-Time Compliance" },
      { href: "/business/vendors", icon: Network, label: "Vendor Trust Network" },
      { href: "/business/credit", icon: Target, label: "Credit Readiness" }
    ]
  },
  bank: {
    title: "FTID",
    subtitle: "Institutional Node",
    headerIcon: Landmark,
    headerColor: "text-blue-400",
    headerBg: "bg-blue-900/30",
    headerBorder: "border-blue-500/20",
    sectionTitle: "Banking Portal",
    menuColor: "text-blue-400",
    menuActiveBg: "bg-blue-900/30",
    menuActiveBorder: "border-blue-500",
    navItems: [
      { href: "/bank", icon: LayoutGrid, label: "Risk Command" },
      { href: "/bank/underwriting", icon: FileText, label: "SME Underwriting" },
      { href: "/bank/fraud", icon: AlertTriangle, label: "Fraud Intelligence" },
      { href: "/bank/network", icon: Network, label: "Network Analysis" }
    ]
  },
  government: {
    title: "FTID",
    subtitle: "Gov. Infrastructure",
    headerIcon: Scale,
    headerColor: "text-amber-400",
    headerBg: "bg-amber-900/30",
    headerBorder: "border-amber-500/20",
    sectionTitle: "Gov Portal",
    menuColor: "text-amber-400",
    menuActiveBg: "bg-amber-900/30",
    menuActiveBorder: "border-amber-500",
    navItems: [
      { href: "/government", icon: LayoutGrid, label: "Economic Monitor" },
      { href: "/government/tax", icon: Database, label: "Tax Intelligence" },
      { href: "/government/stress", icon: Activity, label: "Stress Detection" },
      { href: "/government/policy", icon: HandCoins, label: "Policy Analytics" },
      { href: "/government/departments", icon: Building2, label: "Departmental Funds" }
    ]
  },
  regulator: {
    title: "FTID",
    subtitle: "RBI Core Command",
    headerIcon: ShieldCheck,
    headerColor: "text-rose-400",
    headerBg: "bg-rose-900/30",
    headerBorder: "border-rose-500/20",
    sectionTitle: "Regulator Portal",
    menuColor: "text-rose-400",
    menuActiveBg: "bg-rose-900/30",
    menuActiveBorder: "border-rose-500",
    navItems: [
      { href: "/regulator", icon: LayoutGrid, label: "Stability Engine" },
      { href: "/regulator/fraud", icon: AlertTriangle, label: "Systemic Fraud" },
      { href: "/regulator/heatmap", icon: PieChart, label: "Compliance Heatmap" },
      { href: "/regulator/trust", icon: Layers, label: "Digital Trust Index" }
    ]
  },
  auditor: {
    title: "FTID",
    subtitle: "Audit Network",
    headerIcon: FileText,
    headerColor: "text-indigo-400",
    headerBg: "bg-indigo-900/30",
    headerBorder: "border-indigo-500/20",
    sectionTitle: "Audit Portal",
    menuColor: "text-indigo-400",
    menuActiveBg: "bg-indigo-900/30",
    menuActiveBorder: "border-indigo-500",
    navItems: [
      { href: "/auditor", icon: LayoutGrid, label: "Audit Intelligence" },
      { href: "/auditor/reconciliation", icon: ArrowRightLeft, label: "Smart Recon" },
      { href: "/auditor/trails", icon: Database, label: "Automated Trails" },
      { href: "/auditor/risk", icon: Target, label: "Risk Scoring" }
    ]
  },
  developer: {
    title: "FTID",
    subtitle: "API Core",
    headerIcon: Terminal,
    headerColor: "text-purple-400",
    headerBg: "bg-purple-900/30",
    headerBorder: "border-purple-500/20",
    sectionTitle: "Dev Portal",
    menuColor: "text-purple-400",
    menuActiveBg: "bg-purple-900/30",
    menuActiveBorder: "border-purple-500",
    navItems: [
      { href: "/developer", icon: Terminal, label: "API Dashboard" },
      { href: "/developer/keys", icon: Lock, label: "Secure Keys" },
      { href: "/developer/verification", icon: ShieldCheck, label: "Verification APIs" },
      { href: "/developer/consent", icon: Database, label: "Consent Infrastructure" }
    ]
  },
  gateway: {
    title: "FTID",
    subtitle: "Gateway Node",
    headerIcon: ArrowRightLeft,
    headerColor: "text-sky-400",
    headerBg: "bg-sky-900/30",
    headerBorder: "border-sky-500/20",
    sectionTitle: "Gateway Portal",
    menuColor: "text-sky-400",
    menuActiveBg: "bg-sky-900/30",
    menuActiveBorder: "border-sky-500",
    navItems: [
      { href: "/gateway", icon: LayoutGrid, label: "Gateway Command" },
      { href: "/gateway/transactions", icon: Activity, label: "Live Settlements" },
      { href: "/gateway/compliance", icon: ShieldCheck, label: "Rule Enforcer" }
    ]
  }
};

function AlertTriangle(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function DashboardSidebar() {
  const pathname = usePathname();
  
  // Determine context based on the root path
  const currentContext = pathname.split('/')[1] || 'citizen';
  // Use config or default to citizen
  const config = PORTALS[currentContext as keyof typeof PORTALS] || PORTALS.citizen;

  return (
    <>
      <SidebarHeader className={`border-b border-white/5 pb-4 mb-2`}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5 px-2">
            <div className={`p-1.5 ${config.headerBg} rounded border ${config.headerBorder}`}>
              <config.headerIcon className={`h-5 w-5 ${config.headerColor}`} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-black tracking-tight text-white uppercase">
                {config.title}
              </h2>
              <span className={`text-[10px] font-medium uppercase tracking-widest leading-none ${config.headerColor}`}>
                {config.subtitle}
              </span>
            </div>
          </div>
          <div className="px-2">
            <Link href="/">
              <Button variant="outline" className="w-full justify-start text-[10px] font-bold tracking-widest uppercase border-slate-800 bg-[#0a1520] hover:bg-slate-800 text-slate-400 hover:text-white">
                 <ArrowRightLeft className="h-3 w-3 mr-2" />
                 Switch Node
              </Button>
            </Link>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <div className="px-2 mb-3 mt-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            {config.sectionTitle}
          </p>
        </div>
        <SidebarMenu className="gap-0.5">
          {config.navItems.map((item) => {
            // Check exact or sub-route match
            const isActive = pathname === item.href || (item.href !== `/${currentContext}` && pathname.startsWith(item.href));
            
            return (
              <SidebarMenuItem key={item.label}>
                <Link href={item.href} passHref>
                  <SidebarMenuButton
                    isActive={isActive}
                    className={cn(
                      "justify-start h-9 transition-all duration-200 px-3",
                      isActive 
                        ? `${config.menuActiveBg} text-white border-l-2 ${config.menuActiveBorder} rounded-none` 
                        : "hover:bg-white/5 text-slate-400 hover:text-slate-200"
                    )}
                  >
                    <item.icon className={cn("h-4 w-4 shrink-0", isActive ? config.menuColor : "text-slate-500")} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-white/5 p-4">
        <div className="rounded-md border bg-[#0a1520] border-slate-800 p-3">
          <div className="flex items-center gap-3">
            <Settings className="h-5 w-5 text-slate-500" />
            <div className="flex flex-col">
              <p className="text-xs font-bold leading-none text-slate-200">System Logs</p>
              <p className="text-[10px] text-emerald-500 mt-1 uppercase tracking-wider font-bold">• Secure Connection</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </>
  );
}
