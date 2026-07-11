export interface CountryConfig {
  id: string;
  name: string;
  flag: string;
  currency: string;
  regulator: string;
  central_bank: string;
  ministry_of_finance: string;
  tax_system: string;
  payment_networks: {
    primary: string;
    description: string;
  };
  digital_identity: string;
  open_finance_framework: string;
  financial_reporting_standard: string;
  compliance_framework: string;
  language: string;
  financial_year: string;
  economic_indicators: string[];
  aiProfile: {
    preferredProvider: string;
    fallbackProvider: string;
    offlineProvider: string;
    allowedProviders: string[];
    capabilities: Record<string, AICapabilityConfig>;
    policies: string[];
  };
}

export interface AICapabilityConfig {
  provider: string;
  mode: string;
  confidenceThreshold: number;
  offlineAllowed: boolean;
  humanReview: 'Mandatory' | 'Optional' | 'None';
}

export const COUNTRIES: Record<string, CountryConfig> = {
  IND: {
    id: "IND",
    name: "India (Reference)",
    flag: "🇮🇳",
    currency: "INR",
    regulator: "Securities and Exchange Board of India (SEBI)",
    central_bank: "Reserve Bank of India (RBI)",
    ministry_of_finance: "Ministry of Finance",
    tax_system: "GSTN",
    payment_networks: {
      primary: "UPI",
      description: "Real-Time Retail Payment Network"
    },
    digital_identity: "Aadhaar",
    open_finance_framework: "Account Aggregator (AA)",
    financial_reporting_standard: "Ind AS",
    compliance_framework: "PMLA / KYC Master Direction",
    language: "English / Hindi",
    financial_year: "April - March",
    economic_indicators: ["GDP Growth", "Inflation (CPI)", "MSME Credit Growth"],
    aiProfile: {
      preferredProvider: "sarvam-1",
      fallbackProvider: "gpt-4o",
      offlineProvider: "bharat-llm-1",
      allowedProviders: ["sarvam-1", "gpt-4o", "bharat-llm-1", "rule-engine-v1"],
      policies: ["Never leave country", "PII Masking", "Audit logging"],
      capabilities: {
        "CitizenAdvisor": { provider: "sarvam-1", mode: "LLM", confidenceThreshold: 0.85, offlineAllowed: true, humanReview: "Optional" },
        "FraudIntelligence": { provider: "rule-engine-v1", mode: "Deterministic", confidenceThreshold: 1.0, offlineAllowed: true, humanReview: "Mandatory" }
      }
    }
  },
  FRA: {
    id: "FRA",
    name: "France",
    flag: "🇫🇷",
    currency: "EUR",
    regulator: "Autorité des Marchés Financiers (AMF)",
    central_bank: "Banque de France",
    ministry_of_finance: "Ministry of Economics and Finance",
    tax_system: "DGFiP",
    payment_networks: {
      primary: "SEPA Instant",
      description: "European Real-Time Payment Network"
    },
    digital_identity: "FranceConnect",
    open_finance_framework: "PSD2 / DSP2",
    financial_reporting_standard: "IFRS",
    compliance_framework: "TRACFIN AML",
    language: "French",
    financial_year: "Jan - Dec",
    economic_indicators: ["GDP Growth", "Inflation (HICP)", "Employment Rate"],
    aiProfile: {
      preferredProvider: "mistral-large",
      fallbackProvider: "claude-3-opus",
      offlineProvider: "rule-engine-v1",
      allowedProviders: ["mistral-large", "claude-3-opus", "rule-engine-v1"],
      policies: ["GDPR Compliant", "PII Masking", "No cloud inference for sensitive data"],
      capabilities: {
        "CitizenAdvisor": { provider: "mistral-large", mode: "LLM", confidenceThreshold: 0.90, offlineAllowed: false, humanReview: "Optional" },
        "FraudIntelligence": { provider: "rule-engine-v1", mode: "Deterministic", confidenceThreshold: 1.0, offlineAllowed: true, humanReview: "Mandatory" }
      }
    }
  },
  SGP: {
    id: "SGP",
    name: "Singapore",
    flag: "🇸🇬",
    currency: "SGD",
    regulator: "Monetary Authority of Singapore (MAS)",
    central_bank: "Monetary Authority of Singapore (MAS)",
    ministry_of_finance: "Ministry of Finance",
    tax_system: "IRAS",
    payment_networks: {
      primary: "PayNow",
      description: "Real-Time Payment Network"
    },
    digital_identity: "Singpass",
    open_finance_framework: "SGFinDex",
    financial_reporting_standard: "SFRS(I)",
    compliance_framework: "MAS AML/CFT",
    language: "English",
    financial_year: "April - March",
    economic_indicators: ["GDP Growth", "Core Inflation", "Export Growth"],
    aiProfile: {
      preferredProvider: "claude-3-opus",
      fallbackProvider: "gpt-4o",
      offlineProvider: "rule-engine-v1",
      allowedProviders: ["claude-3-opus", "gpt-4o", "rule-engine-v1"],
      policies: ["MAS AI Governance Framework", "Audit logging"],
      capabilities: {
        "CitizenAdvisor": { provider: "claude-3-opus", mode: "LLM", confidenceThreshold: 0.88, offlineAllowed: false, humanReview: "Optional" },
        "FraudIntelligence": { provider: "rule-engine-v1", mode: "Deterministic", confidenceThreshold: 1.0, offlineAllowed: true, humanReview: "Mandatory" }
      }
    }
  },
  USA: {
    id: "USA",
    name: "United States",
    flag: "🇺🇸",
    currency: "USD",
    regulator: "Securities and Exchange Commission (SEC)",
    central_bank: "Federal Reserve",
    ministry_of_finance: "Department of the Treasury",
    tax_system: "IRS",
    payment_networks: {
      primary: "FedNow",
      description: "Instant Payment Service"
    },
    digital_identity: "Social Security / Real ID",
    open_finance_framework: "Dodd-Frank Section 1033",
    financial_reporting_standard: "US GAAP",
    compliance_framework: "FinCEN BSA/AML",
    language: "English",
    financial_year: "Oct - Sept",
    economic_indicators: ["GDP Growth", "Inflation (CPI)", "Unemployment Rate"],
    aiProfile: {
      preferredProvider: "gpt-4o",
      fallbackProvider: "claude-3-opus",
      offlineProvider: "rule-engine-v1",
      allowedProviders: ["gpt-4o", "claude-3-opus", "rule-engine-v1"],
      policies: ["FED AI Guidelines", "Audit logging"],
      capabilities: {
        "CitizenAdvisor": { provider: "gpt-4o", mode: "LLM", confidenceThreshold: 0.90, offlineAllowed: false, humanReview: "Optional" },
        "FraudIntelligence": { provider: "rule-engine-v1", mode: "Deterministic", confidenceThreshold: 1.0, offlineAllowed: true, humanReview: "Mandatory" }
      }
    }
  },
  EU: {
    id: "EU",
    name: "European Union",
    flag: "🇪🇺",
    currency: "EUR",
    regulator: "European Securities and Markets Authority (ESMA)",
    central_bank: "European Central Bank (ECB)",
    ministry_of_finance: "Eurogroup",
    tax_system: "VIES / National Tax Systems",
    payment_networks: {
      primary: "TIPS (TARGET Instant Payment Settlement)",
      description: "Pan-European Real-Time Settlement"
    },
    digital_identity: "eIDAS",
    open_finance_framework: "PSD2 / PSD3",
    financial_reporting_standard: "IFRS",
    compliance_framework: "AMLD6",
    language: "English / French / German",
    financial_year: "Jan - Dec",
    economic_indicators: ["Eurozone GDP", "HICP", "Eurozone Unemployment"],
    aiProfile: {
      preferredProvider: "mistral-large",
      fallbackProvider: "gpt-4o",
      offlineProvider: "rule-engine-v1",
      allowedProviders: ["mistral-large", "gpt-4o", "rule-engine-v1"],
      policies: ["AI Act Compliant", "Audit logging"],
      capabilities: {
        "CitizenAdvisor": { provider: "mistral-large", mode: "LLM", confidenceThreshold: 0.90, offlineAllowed: false, humanReview: "Optional" },
        "FraudIntelligence": { provider: "rule-engine-v1", mode: "Deterministic", confidenceThreshold: 1.0, offlineAllowed: true, humanReview: "Mandatory" }
      }
    }
  }
};
