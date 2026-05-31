const fs = require('fs');
const path = require('path');

const API_ROUTES = {
  'src/app/api/v1/government/policy/route.ts': `import { NextResponse } from 'next/server';
import { simulatePolicy, PolicyInputs } from '@/lib/engines';

export async function POST(req: Request) {
  try {
    const body: PolicyInputs = await req.json();
    
    // Artificial delay to simulate complex econometric calculation
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const results = simulatePolicy(body);
    
    return NextResponse.json({ success: true, data: results });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
  }
}
`,

  'src/app/api/v1/institution/underwriting/route.ts': `import { NextResponse } from 'next/server';
import { runUnderwriting, UnderwritingInputs } from '@/lib/engines';

export async function POST(req: Request) {
  try {
    const body: UnderwritingInputs = await req.json();
    
    // Artificial delay to simulate risk modeling
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const results = runUnderwriting(body);
    
    return NextResponse.json({ success: true, data: results });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
  }
}
`,

  'src/app/api/v1/regulator/ews/route.ts': `import { NextResponse } from 'next/server';

export async function GET() {
  // Artificial delay for loading states
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  return NextResponse.json({
    success: true,
    data: {
      alerts: [
        {
          id: 'EWS-884',
          type: 'MSME Liquidity Stress',
          severity: 'CRITICAL',
          confidence: 94.2,
          region: 'Maharashtra (Pune Belt)',
          sector: 'Auto Components',
          action: 'Inject targeted working capital via SIDBI within 72 hrs',
          description: 'Delayed payments from Tier-1 OEMs causing cascading defaults in Tier-3 suppliers.'
        },
        {
          id: 'EWS-885',
          type: 'Fraud Outbreak Probability',
          severity: 'HIGH',
          confidence: 88.5,
          region: 'Cross-Border',
          sector: 'Textile Export',
          action: 'Freeze suspicious invoice discounting clusters',
          description: 'Circular trading detected between 14 newly registered GST entities sharing IP addresses.'
        }
      ]
    }
  });
}
`,

  'src/app/api/v1/business/invoices/route.ts': `import { NextResponse } from 'next/server';

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return NextResponse.json({
    success: true,
    data: {
      invoices: [
        {
          id: 'INV-2034',
          vendor: 'Apex Solutions Ltd',
          value: 4500000,
          date: '2026-05-28',
          riskScore: 78,
          status: 'Flagged',
          aiSummary: 'Invoice INV-2034 flagged due to 4.8x increase from historical average and vendor risk score of 78 (Possible GST Mismatch).'
        },
        {
          id: 'INV-2035',
          vendor: 'Global Trading Co',
          value: 120000,
          date: '2026-05-29',
          riskScore: 12,
          status: 'Cleared',
          aiSummary: 'Invoice clears all behavioral and compliance checks.'
        }
      ]
    }
  });
}
`
};

for (const [filePath, content] of Object.entries(API_ROUTES)) {
  const fullPath = path.join(__dirname, '..', filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log("Created API route: " + filePath);
}
