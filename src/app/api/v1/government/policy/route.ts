import { NextResponse } from 'next/server';
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
