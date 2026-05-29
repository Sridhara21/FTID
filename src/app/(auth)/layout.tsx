import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { UserNav } from "@/components/shared/user-nav";
import { DashboardSidebar } from "@/components/shared/dashboard-sidebar";
import { FtidStatusLayer } from "@/components/shared/ftid-status-layer";
import { MobileNav } from "@/components/shared/mobile-nav";
import { DynamicHeader } from "@/components/shared/dynamic-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar className="hidden md:flex">
        <DashboardSidebar />
      </Sidebar>
      <SidebarInset className="flex flex-col bg-[#020810]">
        <DynamicHeader />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-32 md:pb-8">
          <div className="mx-auto max-w-[1400px] w-full">
            {children}
          </div>
        </main>
        
        <MobileNav />
      </SidebarInset>
    </SidebarProvider>
  );
}
