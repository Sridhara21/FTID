import { EventEmitter } from 'events';
import { PrismaClient } from '@prisma/client';

// Global Prisma instance to avoid exhaustion in dev
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient({});
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

class FTIDEventBus extends EventEmitter {}

export const eventBus = new FTIDEventBus();

// --- Event Listeners ---

// 1. When a subsidy is received, update the citizen wallet
eventBus.on('SUBSIDY_RECEIVED', async (payload: { citizenId: string, amount: number, scheme: string }) => {
  console.log(`[EVENT: SUBSIDY_RECEIVED] Processing ${payload.amount} for citizen ${payload.citizenId}`);
  
  // Update wallet
  const wallet = await prisma.wallet.findFirst({ where: { ownerId: payload.citizenId } });
  if (wallet) {
    await prisma.wallet.update({
      where: { id: wallet.id },
      data: { balance: wallet.balance + payload.amount }
    });
  }

  // Create audit trail
  await prisma.auditTrail.create({
    data: {
      eventType: 'SUBSIDY_RECEIVED',
      entity: 'Wallet',
      actor: 'Government',
      metadata: JSON.stringify(payload)
    }
  });

  // Trigger next chain: Citizen spends money at business
  // In a real system this would be a separate user action. For simulation, we auto-trigger it.
  setTimeout(() => {
    eventBus.emit('PAYMENT_COMPLETED', {
      senderId: payload.citizenId,
      receiverId: 'business_id_123', // Hardcoded mock business
      amount: payload.amount * 0.8, // Spends 80%
      category: 'RETAIL'
    });
  }, 1000);
});

// 2. When a payment completes, generate an invoice and check compliance
eventBus.on('PAYMENT_COMPLETED', async (payload: { senderId: string, receiverId: string, amount: number, category: string }) => {
  console.log(`[EVENT: PAYMENT_COMPLETED] Citizen ${payload.senderId} paid Business ${payload.receiverId} amount ${payload.amount}`);
  
  // Create transaction
  await prisma.transaction.create({
    data: {
      senderId: payload.senderId,
      receiverId: payload.receiverId,
      amount: payload.amount,
      category: payload.category,
      channel: 'CBDC',
      status: 'COMPLETED'
    }
  });

  // Create an invoice automatically for the business
  const gstAmount = payload.amount * 0.18;
  await prisma.invoice.create({
    data: {
      invoiceNumber: `INV-${Date.now()}`,
      vendorId: payload.senderId,
      businessId: payload.receiverId,
      amount: payload.amount,
      gstAmount: gstAmount,
      status: 'CLEARED'
    }
  });

  await prisma.auditTrail.create({
    data: {
      eventType: 'PAYMENT_COMPLETED',
      entity: 'Transaction',
      actor: 'Gateway',
      metadata: JSON.stringify(payload)
    }
  });

  // Trigger trust score update for business
  setTimeout(() => {
    eventBus.emit('TRUST_SCORE_CHANGED', {
      userId: payload.receiverId,
      delta: 2.5 // Increased trust for formal transaction
    });
  }, 1000);
});

// 3. Update trust score and notify Regulator
eventBus.on('TRUST_SCORE_CHANGED', async (payload: { userId: string, delta: number }) => {
  console.log(`[EVENT: TRUST_SCORE_CHANGED] Adjusting trust for ${payload.userId} by ${payload.delta}`);
  
  const user = await prisma.user.findUnique({ where: { id: payload.userId } });
  if (user) {
    const newScore = Math.min(100, user.trustScore + payload.delta);
    await prisma.user.update({
      where: { id: user.id },
      data: { trustScore: newScore }
    });

    if (newScore > 80) {
      // High trust triggers pre-approved loan
      setTimeout(() => {
        eventBus.emit('LOAN_APPROVED', {
          applicantId: user.id,
          amount: 50000
        });
      }, 1000);
    }
  }
});

// 4. Loan Approved Event
eventBus.on('LOAN_APPROVED', async (payload: { applicantId: string, amount: number }) => {
  console.log(`[EVENT: LOAN_APPROVED] Auto-approving loan for ${payload.applicantId}`);
  
  await prisma.loan.create({
    data: {
      applicantId: payload.applicantId,
      loanAmount: payload.amount,
      trustScore: 85,
      approvalStatus: 'APPROVED',
      defaultProbability: 0.05
    }
  });

  await prisma.auditTrail.create({
    data: {
      eventType: 'LOAN_APPROVED',
      entity: 'Loan',
      actor: 'Institution',
      metadata: JSON.stringify(payload)
    }
  });

  // Final systemic alert to regulator
  eventBus.emit('SYSTEM_METRIC_UPDATE', { metric: 'GDP_EXPANSION', value: payload.amount });
});

// 5. System Metric Update
eventBus.on('SYSTEM_METRIC_UPDATE', async (payload: { metric: string, value: number }) => {
  console.log(`[EVENT: SYSTEM_METRIC_UPDATE] Regulator Dashboard notified: ${payload.metric}`);
  await prisma.auditTrail.create({
    data: {
      eventType: 'SYSTEM_METRIC_UPDATE',
      entity: 'Macro_Engine',
      actor: 'System',
      metadata: JSON.stringify(payload)
    }
  });
});
