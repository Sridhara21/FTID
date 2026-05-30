import { NextResponse } from 'next/server';

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
