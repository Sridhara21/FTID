"use client";

import { createContext, useContext, ReactNode } from "react";
import { SessionProvider, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return {
    role: "regulator", // Hardcoded to regulator for unrestricted demonstration access
    logout: async () => {
      await signOut({ redirect: false });
      router.push("/login");
    },
    isAuthenticated: true,
    isLoading: false,
  };
}
