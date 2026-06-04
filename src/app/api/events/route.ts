import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  let responseStream = new TransformStream();
  const writer = responseStream.writable.getWriter();
  const encoder = new TextEncoder();

  // Keep the connection alive
  writer.write(encoder.encode('retry: 5000\\n\\n'));

  // A simulated event loop representing national interconnected events
  const interval = setInterval(() => {
    const events = [
      {
        type: 'SUBSIDY_RELEASED',
        entity: 'GOVERNMENT',
        msg: 'PM-KISAN Batch processing completed. ₹4,500Cr released.',
        impact: ['Citizen Wallet', 'Gateway Transactions', 'Business Revenue', 'GDP Tracker', 'Regulator Stability Metrics'],
        risk: 'LOW'
      },
      {
        type: 'LOAN_APPROVED',
        entity: 'BANK',
        msg: 'SME Loan #902 approved for Balaji Textiles Ltd.',
        impact: ['Business Cashflow', 'Institution Risk', 'Regulator Exposure', 'Auditor Ledger'],
        risk: 'MEDIUM'
      },
      {
        type: 'FRAUD_DETECTED',
        entity: 'BANK',
        msg: 'Synthetic identity ring detected across 14 rural accounts.',
        impact: ['Regulator EWS', 'Auditor Investigation', 'Trust Scores'],
        risk: 'CRITICAL'
      },
      {
        type: 'TAX_FILED',
        entity: 'BUSINESS',
        msg: 'GST filed by Reliance Innovators. ₹1.2Cr matched.',
        impact: ['Business Compliance', 'Government Tax', 'GDP Tracker'],
        risk: 'LOW'
      },
      {
        type: 'COMPLIANCE_VIOLATION',
        entity: 'REGULATOR',
        msg: 'Liquidity Coverage Ratio breach detected in Cooperative Node 12.',
        impact: ['Regulator EWS', 'Bank Executive Control', 'Auditor Targets'],
        risk: 'HIGH'
      }
    ];
    
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    const data = `data: ${JSON.stringify(randomEvent)}\\n\\n`;
    writer.write(encoder.encode(data)).catch(() => clearInterval(interval));
  }, 4000);

  const req = new Request('http://localhost');
  req.signal.addEventListener('abort', () => {
    clearInterval(interval);
    writer.close();
  });

  return new NextResponse(responseStream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
