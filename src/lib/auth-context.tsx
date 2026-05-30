"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Role = "citizen" | "business" | "bank" | "institution" | "auditor" | "government" | "regulator" | "developer" | null;

interface AuthContextType {
  role: Role;
  login: (role: Role) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedRole = localStorage.getItem("ftid_role") as Role;
    if (savedRole) {
      setRole(savedRole);
    }
    setIsLoading(false);
  }, []);

  const login = (newRole: Role) => {
    localStorage.setItem("ftid_role", newRole as string);
    setRole(newRole);
    if (newRole === "regulator") {
      router.push("/regulator/national-dashboard");
    } else {
      router.push(`/${newRole}`);
    }
  };

  const logout = () => {
    localStorage.removeItem("ftid_role");
    setRole(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ role, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
