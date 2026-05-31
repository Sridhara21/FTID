import { NextResponse } from 'next/server';
import { eventBus } from '@/lib/eventBus';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { eventType, payload } = body;

    if (!eventType) {
      return NextResponse.json({ success: false, error: 'eventType is required' }, { status: 400 });
    }

    // Emit the event to our global Event Bus (which processes via Prisma)
    eventBus.emit(eventType, payload);

    return NextResponse.json({ 
      success: true, 
      message: `Event ${eventType} dispatched successfully. Processing in background...` 
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
