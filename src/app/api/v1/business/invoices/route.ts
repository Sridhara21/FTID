import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const business = await prisma.user.findFirst({ where: { role: 'business' } });
    if (!business) return NextResponse.json({ error: 'No business' }, { status: 404 });

    const invoices = await prisma.invoice.findMany({
      where: { businessId: business.id },
      include: { vendor: { select: { name: true, trustScore: true, pan: true } } },
      take: 10
    });

    const enriched = invoices.map(inv => {
      const forgeryProb = Math.random() * (100 - inv.vendor.trustScore);
      const duplicateRisk = Math.random() > 0.8;
      
      return {
        id: inv.id,
        amount: inv.amount,
        gstAmount: inv.gstAmount,
        status: inv.status,
        date: inv.createdAt,
        vendorName: inv.vendor.name,
        vendorPan: inv.vendor.pan,
        forgeryProbability: Math.min(99, Math.round(forgeryProb)),
        duplicateDetection: duplicateRisk,
        gstMatched: inv.status === 'CLEARED'
      };
    });

    return NextResponse.json({ invoices: enriched });
  } catch (err) {
    return NextResponse.json({ error: 'Failed invoice fetch' }, { status: 500 });
  }
}
