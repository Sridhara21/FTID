import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, role: true, trustScore: true }
    });

    const transactions = await prisma.transaction.findMany({
      select: { senderId: true, receiverId: true, amount: true, riskScore: true, category: true }
    });
    
    const loans = await prisma.loan.findMany({
      select: { applicantId: true, loanAmount: true, approvalStatus: true }
    });

    // In a real scenario, loans need a sender (the bank). In our schema, we only stored the applicant. 
    // For visualization, we'll connect loans to RBI or Govt if no bank is specified, or just map transactions.
    
    // Subsidies
    const subsidies = await prisma.subsidy.findMany({
      select: { citizenId: true, amount: true, scheme: true }
    });

    const govtId = users.find(u => u.role === 'government')?.id || 'govt_hq';

    const nodes = users.map(u => ({
      id: u.id,
      name: u.name,
      group: u.role,
      val: u.trustScore / 10
    }));

    const links: any[] = [];

    transactions.forEach(t => {
      links.push({
        source: t.senderId,
        target: t.receiverId,
        type: 'transaction',
        value: t.amount / 1000,
        risk: t.riskScore
      });
    });

    subsidies.forEach(s => {
      links.push({
        source: govtId,
        target: s.citizenId,
        type: 'subsidy',
        value: s.amount / 1000,
        risk: 0
      });
    });

    return NextResponse.json({ nodes, links });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch graph data' }, { status: 500 });
  }
}
