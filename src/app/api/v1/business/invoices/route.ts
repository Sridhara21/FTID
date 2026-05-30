import { NextResponse } from 'next/server';

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
