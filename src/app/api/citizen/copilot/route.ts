import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // For demo purposes, we fetch the first citizen
    const citizen = await prisma.user.findFirst({
      where: { role: 'citizen' },
      include: {
        wallets: true,
        loans: true,
        subsidies: true
      }
    });

    if (!citizen) return NextResponse.json({ error: 'No citizen found' }, { status: 404 });

    const totalBalance = citizen.wallets.reduce((acc, w) => acc + w.balance, 0);
    const totalDebt = citizen.loans.reduce((acc, l) => acc + l.loanAmount, 0);

    return NextResponse.json({
      name: citizen.name,
      trustScore: citizen.trustScore,
      netWorth: totalBalance - totalDebt,
      totalAssets: totalBalance,
      totalDebt: totalDebt,
      subsidies: citizen.subsidies.map(s => s.scheme)
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
