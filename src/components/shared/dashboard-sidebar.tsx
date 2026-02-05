
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
  Scale,
  BarChart,
  AlertTriangle,
  Briefcase,
  Lock,
  FileText
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
  { href: "/citizen", icon: LayoutGrid, label: "Control Center" },
  { href: "/citizen/profile", icon: User, label: "Identity Hub" },
  { href: "/citizen/consent", icon: Lock, label: "Consent Management" },
  { href: "/citizen/wallet", icon: Wallet, label: "CBDC Wallet" },
  { href: "/citizen/portfolio", icon: Briefcase, label: "Investments" },
  { href: "/citizen/credit-score", icon: HeartPulse, label: "Financial Health" },
  { href: "/citizen/tax", icon: FileText, label: "Tax & Compliance" },
  { href: "/citizen/subsidies", icon: HandCoins, label: "Subsidies & Welfare" },
  { href: "/citizen/balance-sheet", icon: Scale, label: "Personal Balance Sheet" },
];

const governmentNav = [
  { href: "/government", icon: LayoutGrid, label: "Dashboard" },
  { href: "/government/gdp", icon: Landmark, label: "GDP Tracking" },
  { href: "/government/revenue", icon: PieChart, label: "Revenue" },
  { href: "/government/subsidies", icon: ShieldCheck, label: "Subsidies" },
  { href: "/government/donations", icon: Vote, label: "Donations" },
  { href: "/government/state-performance", icon: BarChart, label: "State Performance" },
  { href: "/government/balance-sheet", icon: Scale, label: "National Balance Sheet" },
  { href: "/government/fraud-heatmaps", icon: AlertTriangle, label: "Fraud Heatmaps" },
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
                <p className="text-xs">FTID System Prototype</p>
              </div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </>
  );
}
