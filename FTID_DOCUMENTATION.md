# FTID (RegTech Edition) - System Instructions & Architecture

## Core Idea
**FTID** (Financial Transparency and Identification) is an RBI-grade RegTech platform designed to provide a unified financial control and intelligence flow system. It connects Citizens, Government Departments, and Central Regulators into a single, cohesive, highly secure ecosystem.

The core mission is to eradicate financial friction and opacity by providing:
1. **Citizens** with absolute transparency over their taxes, subsidies, and flow scores.
2. **Government** with real-time tax revenue intelligence and automated, targeted subsidy disbursement mechanisms.
3. **Regulators (RBI/Central Banks)** with God's-eye views over systemic liquidity, fraud heatmaps, and AML (Anti-Money Laundering) compliance.

## Application Contents & Structure

The FTID ecosystem is divided into multiple primary portals:

### 1. Citizen Portal (`/citizen`)
The dashboard for everyday users to manage their financial identity.

### 2. Government Portal (`/government`)
The macro-level interface for state and federal departments.

### 3. Regulator Portal (`/regulator`)
The compliance and oversight hub for central banking authorities.

### 4. Gateway Portal (`/gateway`)
The payment settlement layer.

### 5. Developer Portal (`/developer`)
The API management and sandbox layer.

### 6. Auditor Portal (`/auditor`)
Independent audit trailing.

### 7. Bank Portal (`/bank`)
Underwriting and node connectivity layer.

## Developer Instructions & Execution
The application utilizes a local Firebase mock (`src/local/store.ts`) to simulate dynamic real-time data flow without requiring an active backend connection. All simulated transactions and state updates should write to this store so the changes reflect across all connected UI components.
