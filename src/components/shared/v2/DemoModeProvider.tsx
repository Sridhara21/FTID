"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useCountry } from "@/components/CountryContext";
import { CountryConfig } from "@/config/countries";

export interface DemoStepInfo {
  step: number;
  label: string;
  route: string;
  inputReceived: string;
  intelligenceGenerated: string;
  decisionEnabled: string;
  outcomeCreated: string;
  talkingPoints: string[];
}

export const getDemoSteps = (country: CountryConfig): DemoStepInfo[] => [
  {
    step: 1,
    label: "Citizen Consent",
    route: "/citizen",
    inputReceived: `User ${country.digital_identity} + ${country.open_finance_framework} approval`,
    intelligenceGenerated: "Consent artifact validated, tokenizing bank statements",
    decisionEnabled: "Citizen grants credit-monitoring permission to Bank",
    outcomeCreated: "Secure data bridge established for MSME credit check",
    talkingPoints: [
      `Showcases user-controlled consent flow under ${country.name}'s framework.`,
      "Eliminates manual document submissions or bank log sharing.",
      "Ensures zero personal data is cached on FTID core nodes."
    ]
  },
  {
    step: 2,
    label: "Business Signals",
    route: "/business",
    inputReceived: `Verified ${country.tax_system} filings, invoice ledger, and bank transactions`,
    intelligenceGenerated: "Real-time Vendor Trust Score, Liquidity Runway, and Invoice Quality",
    decisionEnabled: "Business evaluates cashflow buffer to invest in CAPEX",
    outcomeCreated: "Calculated operational runway of 6.2 months verified",
    talkingPoints: [
      "Demonstrates live cashflow metrics instead of outdated balance sheets.",
      "Calculates Vendor Trust using verified supply chain networks.",
      `Proves invoice legitimacy against national ${country.tax_system} records.`
    ]
  },
  {
    step: 3,
    label: "Payment Gateway",
    route: "/gateway",
    inputReceived: `Aggregated live transaction packets across ${country.payment_networks.primary} networks`,
    intelligenceGenerated: "Settlement health, transaction packet throughput (TPS), and latency spikes",
    decisionEnabled: "Gateway flags node strain or routing delays",
    outcomeCreated: "Real-time clearings monitored at 8,500 transactions/sec",
    talkingPoints: [
      "Observes central transaction switch health in real-time.",
      "Monitors transaction latency and packet drops across all bank nodes.",
      "Identifies strain from macro-economic surges instantly."
    ]
  },
  {
    step: 4,
    label: "Bank Underwriting",
    route: "/bank",
    inputReceived: `Real-time ${country.tax_system} logs, ${country.payment_networks.primary} cash flow, and buyer trust inputs`,
    intelligenceGenerated: "Automated underwriting decision recommendations and risk grades",
    decisionEnabled: "Bank approves working capital loan or extends credit limit",
    outcomeCreated: "Loan approval recommendation calculated in less than 8 ms",
    talkingPoints: [
      "Shows instant auto-underwriting decisioning for MSMEs.",
      "Cites specific positive/negative contributors (Tax streaks, cash flows).",
      "Connects credit approvals to closed transaction loops."
    ]
  },
  {
    step: 5,
    label: "Government Policy",
    route: "/government",
    inputReceived: "Aggregate MSME activity indexes and tax revenue streams",
    intelligenceGenerated: "GDP Activity Proxy, Tax Compliance Index, and subsidy target accuracy",
    decisionEnabled: "Government adjusts interest subvention rate or injects liquidity",
    outcomeCreated: "Simulated policy impacts projected on GDP growth and inflation",
    talkingPoints: [
      "Evaluates overall economic health using live transaction networks.",
      "Features a Policy Simulator to test-run stimulus interventions.",
      "Tracks target precision for subsidy transfers to prevent leakage."
    ]
  },
  {
    step: 6,
    label: "Regulator Command",
    route: "/regulator",
    inputReceived: "Bank L1 reserves, net NPA reporting logs, and Early Warning signals",
    intelligenceGenerated: "Financial Stability Score, Systemic Concentration Risk, and EWS flags",
    decisionEnabled: "Regulator intervenes in liquidity gaps or pauses risk exposure",
    outcomeCreated: "Early Warning alerts generated for distressed banking nodes",
    talkingPoints: [
      `Presents macroprudential oversight dashboard for ${country.central_bank}.`,
      "Replaces 'surveillance' with Financial Stability Intelligence.",
      "Displays Early Warning System (EWS) monitoring institutional liquidity."
    ]
  },
  {
    step: 7,
    label: "Auditor Trail",
    route: "/auditor",
    inputReceived: "Cryptographic transaction hashes and zero-knowledge (ZK) proofs",
    intelligenceGenerated: "Reconciliation match accuracy and hidden liability indexes",
    decisionEnabled: "Auditor verifies ledger matching and flags statement anomalies",
    outcomeCreated: "ZK-proof verified audit trail recorded on the public registry",
    talkingPoints: [
      "Validates bank statements against tax filings using zero-knowledge proofs.",
      "Features a Merkle Proof Simulator to verify block validation.",
      "Eliminates retrospective manual audit sampling."
    ]
  },
  {
    step: 8,
    label: "Executive Showcase",
    route: "/executive",
    inputReceived: "Consolidated outcome data from all previous demo steps",
    intelligenceGenerated: "Aggregated metrics on fraud reduction, credit expansion, and inclusion",
    decisionEnabled: "Bank executives and policy makers assess ecosystem deployment viability",
    outcomeCreated: "Proof of institutional readiness and pilot roadmap validated",
    talkingPoints: [
      "Acts as the definitive conclusion of the SFII showcase journey.",
      "Answers the four core questions on fraud, lending, compliance, and inclusion.",
      "Showcases deployment readiness and sovereign compliance."
    ]
  }
];

interface DemoModeContextType {
  activeStep: number;
  currentStepInfo: DemoStepInfo;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  skipToStep: (step: number) => void;
  isDemoActive: boolean;
  setIsDemoActive: (active: boolean) => void;
}

const DemoModeContext = createContext<DemoModeContextType | undefined>(undefined);

export function DemoModeProvider({ children }: { children: ReactNode }) {
  const [activeStep, setActiveStep] = useState(1);
  const [isDemoActive, setIsDemoActive] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const { country } = useCountry();
  const demoSteps = useMemo(() => getDemoSteps(country), [country]);

  // Keep active step in sync with URL pathname
  useEffect(() => {
    const matchedStep = demoSteps.find(s => pathname.startsWith(s.route));
    if (matchedStep) {
      setActiveStep(matchedStep.step);
    }
  }, [pathname, demoSteps]);

  const currentStepInfo = demoSteps[activeStep - 1] || demoSteps[0];

  const goToNextStep = () => {
    if (activeStep < demoSteps.length) {
      const nextStep = activeStep + 1;
      setActiveStep(nextStep);
      router.push(demoSteps[nextStep - 1].route);
    }
  };

  const goToPrevStep = () => {
    if (activeStep > 1) {
      const prevStep = activeStep - 1;
      setActiveStep(prevStep);
      router.push(demoSteps[prevStep - 1].route);
    }
  };

  const skipToStep = (step: number) => {
    if (step >= 1 && step <= demoSteps.length) {
      setActiveStep(step);
      router.push(demoSteps[step - 1].route);
    }
  };

  return (
    <DemoModeContext.Provider value={{
      activeStep,
      currentStepInfo,
      goToNextStep,
      goToPrevStep,
      skipToStep,
      isDemoActive,
      setIsDemoActive
    }}>
      {children}
    </DemoModeContext.Provider>
  );
}

export function useDemoMode() {
  const context = useContext(DemoModeContext);
  if (context === undefined) {
    throw new Error("useDemoMode must be used within a DemoModeProvider");
  }
  return context;
}
