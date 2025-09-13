"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Bot,
  Building,
  CircleGauge,
  HandCoins,
  HeartPulse,
  Landmark,
  LayoutGrid,
  Map,
  PieChart,
  Receipt,
  ShieldCheck,
  User,
  Vote,
  Wallet,
} from "lucide-react";
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const citizenNav = [
  { href: "/citizen", icon: LayoutGrid, label: "Dashboard" },
  { href: "/citizen#ftid-wallet", icon: Wallet, label: "FTID Wallet" },
  { href: "/citizen#ai-advisor", icon: Bot, label: "AI Advisor" },
  { href: "/citizen#credit-score", icon: CircleGauge, label: "Credit Score" },
  { href: "/citizen#auto-tax", icon: Receipt, label: "Auto-Tax" },
  { href: "/citizen#subsidies", icon: HandCoins, label: "Subsidies" },
];

const governmentNav = [
  { href: "/government", icon: LayoutGrid, label: "Dashboard" },
  { href: "#", icon: Landmark, label: "GDP Tracking" },
  { href: "#", icon: PieChart, label: "Revenue" },
  { href: "#", icon: Map, label: "Fraud Heatmaps" },
  { href: "#", icon: ShieldCheck, label: "Subsidies" },
  { href: "#", icon: Vote, label: "Donations" },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const isGovernment = pathname.startsWith("/government");
  const navItems = isGovernment ? governmentNav : citizenNav;
  const userRole = isGovernment ? "Government" : "Citizen";

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/10 rounded-lg border border-primary/20">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            FTID Vision
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  className="justify-start"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2">
          <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
             <div className="flex items-center gap-3">
              {isGovernment ? <Building className="h-8 w-8 text-muted-foreground" /> : <User className="h-8 w-8 text-muted-foreground" />}
              <div>
                <p className="text-sm font-medium">{userRole} Portal</p>
                <p className="text-xs text-muted-foreground">Beta Version</p>
              </div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </>
  );
}
