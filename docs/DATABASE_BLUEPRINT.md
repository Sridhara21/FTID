
# FTID — Database Blueprint & External Oversight

The FTID Sovereign Infrastructure uses **Google Firebase Firestore** as its live data layer. This document serves as a guide for regulatory oversight and technical auditing **outside the application environment**.

## 1. Direct Management Link
Authorized administrators can view and manage the raw transactional and identity records via the official Google Firebase Console:

**Live Firestore Console:**
[https://console.firebase.google.com/project/studio-124316649-8e317/firestore/data](https://console.firebase.google.com/project/studio-124316649-8e317/firestore/data)

*Note: Access requires authorized login to the associated project Google account.*

## 2. Core Collection Structure

| Collection Path | Entity Type | Description |
| :--- | :--- | :--- |
| `/citizens/{citizenId}` | **Citizen** | Individual sovereign identity nodes. Created upon user registration using PAN/Aadhaar keys. |
| `/transactions/{txnId}` | **Transaction** | Global immutable financial ledger showing CBDC (e-Rupee) flows between citizens and businesses. |
| `/platformAdmins/{adminId}` | **PlatformAdmin** | Regulatory authority nodes with system-wide audit privileges. |
| `/citizens/{citizenId}/investments/{id}` | **Investment** | Bonded assets (Stocks, Mutual Funds, Gold) linked to a citizen's FTID. |

## 3. Real-Time Identity Bonding
When a user signs up using a PAN from the Master Ledger (`docs/SOVEREIGN_LEDGER.md`), the system performs a "bonding" operation:
1.  **Identity Matching**: Queries the pre-seeded `sovereignRegistry`.
2.  **Node Activation**: Creates a new document in `/citizens` using the Firebase Auth UID.
3.  **Flow Ingestion**: Migrates the persona's historical transactions into the live ledger bonded to the new citizen ID.

This allows you to verify accuracy by checking if the Firestore record matches the expected JSON structure from the seed file.
