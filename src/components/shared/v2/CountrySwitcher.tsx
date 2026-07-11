"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCountry } from "@/components/CountryContext";
import { COUNTRIES } from "@/config/countries";
import { ChevronDown, Globe } from "lucide-react";

export function CountrySwitcher() {
  const { country, setCountry } = useCountry();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-700 rounded-md transition-colors outline-none focus:ring-1 focus:ring-slate-500 text-sm text-slate-200">
        <Globe className="w-4 h-4 text-emerald-500" />
        <span className="font-medium mr-1">{country.flag} {country.name}</span>
        <ChevronDown className="w-3 h-3 text-slate-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-slate-900 border-slate-800">
        <div className="px-2 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          Sovereign Deployment
        </div>
        {Object.values(COUNTRIES).map((c) => (
          <DropdownMenuItem
            key={c.id}
            onClick={() => setCountry(c.id)}
            className={`cursor-pointer focus:bg-slate-800 ${
              country.id === c.id ? "bg-slate-800 text-emerald-400" : "text-slate-300"
            }`}
          >
            <span className="mr-2 text-lg">{c.flag}</span>
            {c.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
