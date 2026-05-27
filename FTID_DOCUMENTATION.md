# FTID (RegTech Edition) - System Instructions & Architecture

## Core Idea
**FTID** (Financial Transparency and Identification) is an RBI-grade RegTech platform designed to provide a unified financial control and intelligence flow system. It connects Citizens, Government Departments, and Central Regulators into a single, cohesive, highly secure ecosystem.

The core mission is to eradicate financial friction and opacity by providing:
1. **Citizens** with absolute transparency over their taxes, subsidies, and flow scores.
2. **Government** with real-time tax revenue intelligence and automated, targeted subsidy disbursement mechanisms.
3. **Regulators (RBI/Central Banks)** with God's-eye views over systemic liquidity, fraud heatmaps, and AML (Anti-Money Laundering) compliance.

## Application Contents & Structure

The FTID ecosystem is divided into three primary portals:

### 1. Citizen Portal (`/citizen`)
The dashboard for everyday users to manage their financial identity.
- **Flow Score:** A next-generation credit scoring system based on real-time cash flow and transaction behavior, not just static loan history.
- **Wallet & CBDC Transfers:** An interface for secure e-Rupee transactions.
- **Consent Hub:** A centralized dashboard where citizens can revoke or grant access to their data to 3rd party institutions.
- **Tax & Subsidies:** Automated tax calculations and Direct Benefit Transfer (DBT) receipts.

### 2. Government Portal (`/government`)
The macro-level interface for state and federal departments.
- **Registry & State Performance:** Monitor regional GDP impacts and tax collection metrics.
- **Revenue & Subsidies:** Manage the outgoing flow of government aid and incoming tax streams.
- **Fraud Heatmaps:** AI-driven maps highlighting areas with suspicious transactional velocity or non-compliance.

### 3. Regulator Portal (`/regulator`)
The compliance and oversight hub for central banking authorities.
- **Liquidity Tracking:** Monitor the balance sheets of connected institutions.
- **AML/Compliance Alerts:** A real-time feed of Suspicious Activity Reports (SARs) triggered by the ecosystem's AI.
- **Policy Simulation:** Tools to adjust interest rates or liquidity requirements and forecast their impact on the economy.

## Developer Instructions & Execution

### State Management
The application utilizes a local Firebase mock (`src/local/store.ts`) to simulate dynamic real-time data flow without requiring an active backend connection. All simulated transactions and state updates (e.g., triggering a fraud alert) should write to this store so the changes reflect across all connected UI components.

### UI / Aesthetics
- The system must adhere to **RBI-grade premium aesthetics**: Dark mode defaults, glassmorphism, precise data-dense tables, and distinct institutional typography.
- Use `lucide-react` for iconography.
- Use `recharts` for dynamic data visualizations.

### Running the Project
```bash
# Start the development server
npm run dev
# Note: Defaults to port 3000, or 3002 if other instances are running.
```
