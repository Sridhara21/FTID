import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const businessId = searchParams.get('businessId');

    const business = businessId ? 
      await prisma.user.findUnique({ where: { id: businessId }, include: { wallets: true } }) :
      await prisma.user.findFirst({ where: { role: 'business' }, include: { wallets: true } });

    if (!business) return NextResponse.json({ error: 'No business found' }, { status: 404 });

    const invoices = await prisma.invoice.findMany({
      where: { OR: [{ businessId: business.id }, { vendorId: business.id }] }
    });

    const transactions = await prisma.transaction.findMany({
      where: { OR: [{ senderId: business.id }, { receiverId: business.id }] }
    });

    const cashIn = transactions.filter(t => t.receiverId === business.id).reduce((sum, t) => sum + t.amount, 0);
    const cashOut = transactions.filter(t => t.senderId === business.id).reduce((sum, t) => sum + t.amount, 0);
    const gstPaid = invoices.filter(i => i.businessId === business.id && i.status === 'CLEARED').reduce((sum, i) => sum + i.gstAmount, 0);

    const invoiceReliability = Math.min(100, (invoices.filter(i => i.status === 'CLEARED').length / Math.max(1, invoices.length)) * 100);
    
    // ML Score proxy
    const approvalProbability = Math.max(0, Math.min(100, business.trustScore + (cashIn > cashOut ? 10 : -20)));
    const riskGrade = approvalProbability > 80 ? 'A' : approvalProbability > 60 ? 'B' : approvalProbability > 40 ? 'C' : 'D';

    return NextResponse.json({
      businessName: business.name,
      pan: business.pan,
      trustScore: business.trustScore,
      cashflow: { in: cashIn, out: cashOut },
      gstBehaviour: gstPaid,
      invoiceReliability: Math.round(invoiceReliability),
      approvalProbability: Math.round(approvalProbability),
      riskGrade: riskGrade,
      creditLimit: riskGrade === 'A' ? 5000000 : riskGrade === 'B' ? 1000000 : 0
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed analysis' }, { status: 500 });
  }
}
