"use client";

import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserNav } from "@/components/shared/user-nav";

const PORTALS = {
  citizen: {
    bgTheme: "bg-[#05101a]/80",
    borderTheme: "border-cyan-900/30",
    textMuted: "text-cyan-500/50",
    textAccent: "text-cyan-400/80",
    textPrimary: "text-cyan-100",
    searchBorder: "border-cyan-900/50",
    searchFocus: "focus-visible:ring-cyan-500/20",
    buttonHover: "hover:bg-cyan-900/30",
    statusBadgeBg: "bg-emerald-500/10",
    statusBadgeText: "text-emerald-400",
    statusBadgeIcon: "text-emerald-500",
    placeholder: "Search FTID Intelligence...",
    idLabel: "FTID: 2398-6501-4775",
    idIcon: "👤",
    statusLabel: "FLOW: VERIFIED"
  },
  business: {
    bgTheme: "bg-[#05101a]/80",
    borderTheme: "border-emerald-900/30",
    textMuted: "text-emerald-500/50",
    textAccent: "text-emerald-400/80",
    textPrimary: "text-emerald-100",
    searchBorder: "border-emerald-900/50",
    searchFocus: "focus-visible:ring-emerald-500/20",
    buttonHover: "hover:bg-emerald-900/30",
    statusBadgeBg: "bg-emerald-500/10",
    statusBadgeText: "text-emerald-400",
    statusBadgeIcon: "text-emerald-500",
    placeholder: "Search Enterprise Data...",
    idLabel: "CORP: TECHCORP-IN",
    idIcon: "🏢",
    statusLabel: "COMPLIANT"
  },
  bank: {
    bgTheme: "bg-[#05101a]/80",
    borderTheme: "border-blue-900/30",
    textMuted: "text-blue-500/50",
    textAccent: "text-blue-400/80",
    textPrimary: "text-blue-100",
    searchBorder: "border-blue-900/50",
    searchFocus: "focus-visible:ring-blue-500/20",
    buttonHover: "hover:bg-blue-900/30",
    statusBadgeBg: "bg-blue-500/10",
    statusBadgeText: "text-blue-400",
    statusBadgeIcon: "text-blue-500",
    placeholder: "Search Institutional Risk...",
    idLabel: "NODE: HDFC-01",
    idIcon: "🏦",
    statusLabel: "HEALTHY"
  },
  government: {
    bgTheme: "bg-[#05101a]/80",
    borderTheme: "border-amber-900/30",
    textMuted: "text-amber-500/50",
    textAccent: "text-amber-400/80",
    textPrimary: "text-amber-100",
    searchBorder: "border-amber-900/50",
    searchFocus: "focus-visible:ring-amber-500/20",
    buttonHover: "hover:bg-amber-900/30",
    statusBadgeBg: "bg-amber-500/10",
    statusBadgeText: "text-amber-400",
    statusBadgeIcon: "text-amber-500",
    placeholder: "Search Tax & Policy...",
    idLabel: "DEPT: MOF-IN",
    idIcon: "🏛️",
    statusLabel: "LIVE SYNC"
  },
  regulator: {
    bgTheme: "bg-[#05101a]/80",
    borderTheme: "border-rose-900/30",
    textMuted: "text-rose-500/50",
    textAccent: "text-rose-400/80",
    textPrimary: "text-rose-100",
    searchBorder: "border-rose-900/50",
    searchFocus: "focus-visible:ring-rose-500/20",
    buttonHover: "hover:bg-rose-900/30",
    statusBadgeBg: "bg-rose-500/10",
    statusBadgeText: "text-rose-400",
    statusBadgeIcon: "text-rose-500",
    placeholder: "Search National Threat Intel...",
    idLabel: "AUTH: RBI-CORE",
    idIcon: "🛡️",
    statusLabel: "MONITORING"
  },
  auditor: {
    bgTheme: "bg-[#05101a]/80",
    borderTheme: "border-indigo-900/30",
    textMuted: "text-indigo-500/50",
    textAccent: "text-indigo-400/80",
    textPrimary: "text-indigo-100",
    searchBorder: "border-indigo-900/50",
    searchFocus: "focus-visible:ring-indigo-500/20",
    buttonHover: "hover:bg-indigo-900/30",
    statusBadgeBg: "bg-emerald-500/10",
    statusBadgeText: "text-emerald-400",
    statusBadgeIcon: "text-emerald-500",
    placeholder: "Search Audit Trails...",
    idLabel: "FIRM: BIG4-IN",
    idIcon: "📋",
    statusLabel: "AUDIT ACTIVE"
  },
  developer: {
    bgTheme: "bg-[#05101a]/80",
    borderTheme: "border-purple-900/30",
    textMuted: "text-purple-500/50",
    textAccent: "text-purple-400/80",
    textPrimary: "text-purple-100",
    searchBorder: "border-purple-900/50",
    searchFocus: "focus-visible:ring-purple-500/20",
    buttonHover: "hover:bg-purple-900/30",
    statusBadgeBg: "bg-emerald-500/10",
    statusBadgeText: "text-emerald-400",
    statusBadgeIcon: "text-emerald-500",
    placeholder: "Search APIs & Logs...",
    idLabel: "DEV: FINTECH-X",
    idIcon: "💻",
    statusLabel: "SANDBOX MODE"
  }
};

export function DynamicHeader() {
  const pathname = usePathname();
  const currentContext = pathname.split('/')[1] || 'citizen';
  const config = PORTALS[currentContext as keyof typeof PORTALS] || PORTALS.citizen;

  return (
    <>
      <header className={`hidden md:flex sticky top-0 z-40 h-16 items-center gap-4 border-b ${config.borderTheme} ${config.bgTheme} px-6 backdrop-blur-md`}>
        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 text-xs font-medium tracking-widest ${config.textAccent} uppercase`}>
            <span className={config.textMuted}>{config.idIcon}</span> {config.idLabel}
          </div>
          <div className={`flex items-center gap-2 text-xs font-bold tracking-widest ${config.statusBadgeText} uppercase ${config.statusBadgeBg} px-3 py-1 rounded-full`}>
            <span className={config.statusBadgeIcon}>✓</span> {config.statusLabel}
          </div>
          <div className={`flex items-center gap-2 text-[10px] font-medium tracking-widest ${config.textMuted} uppercase`}>
            <span className={config.textMuted}>⏱</span> LAST_SYNC: 2 MINUTES AGO
          </div>
        </div>
        <div className="flex items-center gap-6 ml-auto">
          <form className="flex-1">
            <div className="relative">
              <Search className={`absolute left-3 top-2.5 h-4 w-4 ${config.textMuted}`} />
              <Input
                type="search"
                placeholder={config.placeholder}
                className={`pl-9 h-9 text-xs w-[300px] ${config.searchBorder} bg-[#0a1520] ${config.textPrimary} placeholder:${config.textMuted} rounded-full ${config.searchFocus}`}
              />
            </div>
          </form>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className={`rounded-full h-10 w-10 border ${config.searchBorder} bg-[#0a1520] ${config.textAccent} ${config.buttonHover}`}>
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <UserNav />
          </div>
        </div>
      </header>
      
      {/* Mobile top status layer */}
      <div className={`md:hidden sticky top-0 z-40 px-4 py-3 ${config.bgTheme} backdrop-blur-md border-b ${config.borderTheme} flex items-center justify-between`}>
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1.5 text-[10px] font-bold tracking-widest ${config.textAccent} uppercase`}>
              <span className={config.textMuted}>{config.idIcon}</span> {config.idLabel}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1 text-[9px] font-bold tracking-widest ${config.statusBadgeText} uppercase ${config.statusBadgeBg} px-2 py-0.5 rounded-full`}>
              <span className={config.statusBadgeIcon}>✓</span> {config.statusLabel}
            </div>
            <UserNav />
          </div>
      </div>
    </>
  );
}
