
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Bot,
  Building,
  LayoutGrid,
  HeartPulse,
  Landmark,
  PieChart,
  ShieldCheck,
  User,
  Vote,
  Wallet,
  Scale,
  BarChart,
  AlertTriangle,
  Briefcase,
  Lock,
  FileText,
  HandCoins,
  ArrowRightLeft
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
  const router = useRouter();
  const isGovernment = pathname.startsWith("/government");
  const navItems = isGovernment ? governmentNav : citizenNav;
  const userRole = isGovernment ? "Government" : "Citizen";

  const togglePortal = () => {
    const target = isGovernment ? "/citizen" : "/government";
    router.push(target);
  };

  return (
    <>
      <SidebarHeader className="border-b border-sidebar-border/50 pb-4 mb-2">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5 px-2">
            <div className="p-1.5 bg-primary/10 rounded border border-primary/20">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-bold tracking-tight text-sidebar-foreground">
                FTID
              </h2>
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest leading-none">
                System Core
              </span>
            </div>
          </div>
          
          <div className="px-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={togglePortal}
              className="w-full justify-start gap-2 h-8 text-[10px] font-bold uppercase tracking-wider bg-primary/5 hover:bg-primary/10 border-primary/20 text-primary transition-all active:scale-95"
            >
              <ArrowRightLeft className="h-3 w-3" />
              Switch to {isGovernment ? "Citizen" : "Government"}
            </Button>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <div className="px-2 mb-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
            {userRole} Portal
          </p>
        </div>
        <SidebarMenu className="gap-0.5">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  className={cn(
                    "justify-start h-9 transition-all duration-200 px-3",
                    pathname === item.href 
                      ? "bg-primary/10 text-primary border-r-2 border-primary rounded-none" 
                      : "hover:bg-secondary/50"
                  )}
                >
                  <item.icon className={cn("h-4 w-4 shrink-0", pathname === item.href ? "text-primary" : "text-muted-foreground")} />
                  <span className="text-sm font-medium">{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border/50 p-4">
        <div className="rounded-md border bg-secondary/30 border-border/50 p-3">
          <div className="flex items-center gap-3">
            {isGovernment ? (
              <Building className="h-5 w-5 text-muted-foreground" />
            ) : (
              <User className="h-5 w-5 text-muted-foreground" />
            )}
            <div className="flex flex-col">
              <p className="text-xs font-bold leading-none">{userRole} User</p>
              <p className="text-[10px] text-muted-foreground mt-1">Authorized Access</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </>
  );
}
