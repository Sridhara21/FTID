"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/shared/dashboard-sidebar";
import { DynamicHeader } from "@/components/shared/dynamic-header";
import { MobileNav } from "@/components/shared/mobile-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoading) return;
    
    if (!role) {
      router.push("/login");
      return;
    }

    // Role-Based Access Control logic
    const pathRoot = pathname.split('/')[1];
    
    // Regulator can see everything
    if (role === "regulator") return;

    // Normal roles can only see their own portal
    if (pathRoot !== role && pathRoot !== "") {
      router.push(`/${role}`);
    }
  }, [role, isLoading, pathname, router]);

  if (isLoading || !role) {
    return <div className="min-h-screen bg-[#020810] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin"></div>
    </div>;
  }

  // Ensure normal roles can't see other options in the sidebar
  // This will be handled inside DashboardSidebar by looking at the role!

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
