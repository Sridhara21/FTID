import { NextResponse } from 'next/server';
import { prisma } from '@/lib/eventBus';

export async function GET() {
  try {
    // 1. Fetch all users for nodes
    const users = await prisma.user.findMany({
      select: { id: true, name: true, role: true, trustScore: true }
    });

    // 2. Fetch all transactions for links
    const transactions = await prisma.transaction.findMany({
      select: { senderId: true, receiverId: true, amount: true, riskScore: true }
    });

    const nodes = users.map(user => {
      // Determine color and size based on role and trust score
      let color = "#22d3ee"; // default cyan
      let val = 10;
      
      if (user.role === 'bank') { color = "#3b82f6"; val = 20; }
      if (user.role === 'business') { color = "#10b981"; val = 15; }
      if (user.role === 'citizen') { color = "#a855f7"; val = 8; }
      if (user.trustScore < 40) { color = "#ef4444"; } // red for low trust

      return {
        id: user.id,
        name: user.name,
        role: user.role,
        trustScore: user.trustScore,
        val,
        color
      };
    });

    const links = transactions.map((t, idx) => ({
      source: t.senderId,
      target: t.receiverId,
      value: t.amount,
      risk: t.riskScore
    }));

    return NextResponse.json({
      success: true,
      data: {
        nodes,
        links
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
