"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { COUNTRIES, CountryConfig } from "@/config/countries";

interface CountryContextType {
  country: CountryConfig;
  setCountry: (countryId: string) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: ReactNode }) {
  // India is the Reference Deployment and Default Config
  const [currentCountryId, setCurrentCountryId] = useState<string>("IND");

  const setCountry = (countryId: string) => {
    if (COUNTRIES[countryId]) {
      setCurrentCountryId(countryId);
    }
  };

  const currentCountry = COUNTRIES[currentCountryId] || COUNTRIES["IND"];

  return (
    <CountryContext.Provider value={{ country: currentCountry, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
}
