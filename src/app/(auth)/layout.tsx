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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <DashboardSidebar />
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="w-full flex-1">
            <FtidStatusLayer />
          </div>
          <div className="flex items-center gap-4 md:ml-auto md:gap-4 lg:gap-6">
            <form className="ml-auto flex-1 sm:flex-initial hidden md:block">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search FTID Intelligence..."
                  className="pl-8 h-9 text-xs sm:w-[250px] lg:w-[300px] border-border/50 bg-secondary/20"
                />
              </div>
            </form>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 border border-border/30 bg-secondary/10">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
              <UserNav />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl w-full">
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
