"use client";

import { Home, Repeat, Send, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/citizen", icon: Home, label: "Home" },
    { href: "/citizen/wallet", icon: Send, label: "Transfer" },
    { href: "/citizen/statements", icon: Repeat, label: "Statements" },
    { href: "/citizen/services", icon: MoreHorizontal, label: "Services" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-panel border-t border-cyan-500/20 md:hidden pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center justify-center w-full h-full gap-1">
              <item.icon className={`h-5 w-5 transition-colors ${isActive ? "text-cyan-400" : "text-cyan-600"}`} />
              <span className={`text-[9px] font-bold tracking-widest uppercase transition-colors ${isActive ? "text-cyan-300" : "text-cyan-700"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
