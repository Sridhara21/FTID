import { NextResponse } from 'next/server';
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
