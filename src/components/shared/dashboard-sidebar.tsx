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
  LineChart,
  Scale
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
  { href: "/citizen/wallet", icon: Wallet, label: "Digital E-Rupee Wallet" },
  { href: "/citizen/ai-advisor", icon: Bot, label: "AI Financial Advisor" },
  { href: "/citizen/credit-score", icon: HeartPulse, label: "Financial Health Score" },
  { href: "/citizen/tax", icon: Receipt, label: "Tax Calculator" },
  { href: "/citizen/subsidies", icon: HandCoins, label: "Subsidies" },
  { href: "/citizen/balance-sheet", icon: Scale, label: "Personal Balance Sheet" },
];

const governmentNav = [
  { href: "/government", icon: LayoutGrid, label: "Dashboard" },
  { href: "/government/gdp", icon: Landmark, label: "GDP Tracking" },
  { href: "/government/revenue", icon: PieChart, label: "Revenue" },
  { href: "/government/fraud-heatmaps", icon: Map, label: "Fraud Heatmaps" },
  { href: "/government/subsidies", icon: ShieldCheck, label: "Subsidies" },
  { href: "/government/donations", icon: Vote, label: "Donations" },
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
          <div className="p-1.5 bg-sidebar-primary rounded-lg">
            <Bot className="h-6 w-6 text-sidebar-primary-foreground" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-sidebar-foreground">
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
          <div className="rounded-lg border bg-sidebar-accent border-sidebar-border p-4 text-sidebar-accent-foreground">
             <div className="flex items-center gap-3">
              {isGovernment ? <Building className="h-8 w-8" /> : <User className="h-8 w-8" />}
              <div>
                <p className="text-sm font-medium">{userRole} Portal</p>
                <p className="text-xs">Beta Version</p>
              </div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </>
  );
}
