const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({});

function randomFloat(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CITIZEN_NAMES = ["Aarav Patel", "Ramesh Kumar", "Priya Singh", "Anjali Gupta", "Vikram Sharma", "Neha Desai", "Arjun Reddy", "Kavya Menon", "Sanjay Verma", "Meera Joshi", "Rohan Mehta", "Pooja Nair", "Karan Malhotra", "Riya Sen", "Amitabh Bose", "Deepa Rao", "Vivek Iyer", "Sneha Pillai", "Rahul Kapoor", "Divya Chauhan"];
const BUSINESS_NAMES = ["Balaji Textiles Ltd", "Reliance Innovators", "Tata Logistics", "Infosys Solutions", "Wipro Consulting", "Mahindra Auto Parts", "Adani Energy", "L&T Construction", "HDFC Ventures", "Bajaj Finance Services", "Sun Pharma R&D", "Maruti Suppliers", "Apollo Healthcare", "TCS Digital", "Birla Manufacturing"];
const BANK_NAMES = ["State Bank Node", "HDFC Network", "ICICI Core", "Axis Ledger", "Kotak Vault", "PNB Trust", "Bank of Baroda Sync", "IndusInd Gateway"];
const INST_NAMES = ["Muthoot Finance", "Bajaj Finserv", "Cholamandalam", "Shriram Transport"];

async function main() {
  console.log('Resetting Database...');
  await prisma.auditTrail.deleteMany();
  await prisma.alert.deleteMany();
  await prisma.loan.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.subsidy.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.wallet.deleteMany();
  await prisma.user.deleteMany();

  console.log('Seeding Highly Realistic Indian Financial Ecosystem...');

  // 1. Create Government and Regulator Nodes
  const rbi = await prisma.user.create({
    data: { id: 'rbi_hq', name: 'Reserve Bank of India', role: 'regulator', trustScore: 100.0, pan: 'RBIGOV001', wallets: { create: { walletType: 'CBDC', balance: 999999999.0 } } }
  });
  
  const govt = await prisma.user.create({
    data: { id: 'govt_hq', name: 'Ministry of Finance', role: 'government', trustScore: 100.0, pan: 'MOFGOV001', wallets: { create: { walletType: 'FIAT', balance: 500000000.0 } } }
  });

  const auditor = await prisma.user.create({
    data: { id: 'auditor_hq', name: 'CAG India', role: 'auditor', trustScore: 100.0, pan: 'CAGGOV001' }
  });

  // 2. Create Banks and Institutions
  const banks = [];
  for (let i = 0; i < BANK_NAMES.length; i++) {
    banks.push(await prisma.user.create({
      data: {
        id: `bank_${i}`,
        name: BANK_NAMES[i],
        role: 'bank',
        trustScore: randomFloat(85, 99),
        pan: `BNK${i}0000P`,
        wallets: { create: { walletType: 'FIAT', balance: randomFloat(5000000, 100000000) } }
      }
    }));
  }

  const insts = [];
  for (let i = 0; i < INST_NAMES.length; i++) {
    insts.push(await prisma.user.create({
      data: {
        id: `inst_${i}`,
        name: INST_NAMES[i],
        role: 'institution',
        trustScore: randomFloat(70, 95),
        pan: `INS${i}0000P`,
        wallets: { create: { walletType: 'FIAT', balance: randomFloat(1000000, 20000000) } }
      }
    }));
  }

  // 3. Create Businesses
  const businesses = [];
  for (let i = 0; i < BUSINESS_NAMES.length; i++) {
    const isShell = Math.random() > 0.85; // 15% chance of being a shell company
    businesses.push(await prisma.user.create({
      data: {
        id: `biz_${i}`,
        name: isShell ? `Shell Corp ${i}` : BUSINESS_NAMES[i],
        role: 'business',
        trustScore: isShell ? randomFloat(10, 40) : randomFloat(60, 95),
        pan: `BIZ${i}0000C`,
        wallets: { create: { walletType: 'FIAT', balance: isShell ? randomFloat(0, 1000) : randomFloat(100000, 5000000) } }
      }
    }));
  }

  // 4. Create Citizens
  const citizens = [];
  for (let i = 0; i < CITIZEN_NAMES.length; i++) {
    const isDefaulter = Math.random() > 0.9;
    citizens.push(await prisma.user.create({
      data: {
        id: `cit_${i}`,
        name: CITIZEN_NAMES[i],
        role: 'citizen',
        trustScore: isDefaulter ? randomFloat(20, 50) : randomFloat(55, 99),
        pan: `CIT${i}1111A`,
        aadhaar: `1234567890${i.toString().padStart(2, '0')}`,
        wallets: { create: { walletType: 'CBDC', balance: randomFloat(500, 50000) } }
      }
    }));
  }

  // 5. Generate Network Edges (Transactions, Loans, Subsidies, Invoices)

  // Subsidies from Govt to Citizens
  for (let i = 0; i < 15; i++) {
    const citizen = citizens[randomInt(0, citizens.length - 1)];
    await prisma.subsidy.create({
      data: {
        citizenId: citizen.id,
        scheme: ['PM-KISAN', 'PMAY', 'LPG Subsidy', 'Ayushman Bharat'][randomInt(0, 3)],
        amount: randomFloat(1000, 6000),
        status: 'DISBURSED'
      }
    });
  }

  // Loans from Banks to Businesses/Citizens
  for (let i = 0; i < 20; i++) {
    const isBiz = Math.random() > 0.5;
    const applicant = isBiz ? businesses[randomInt(0, businesses.length - 1)] : citizens[randomInt(0, citizens.length - 1)];
    await prisma.loan.create({
      data: {
        applicantId: applicant.id,
        loanAmount: isBiz ? randomFloat(100000, 5000000) : randomFloat(10000, 500000),
        trustScore: applicant.trustScore,
        approvalStatus: applicant.trustScore > 60 ? 'APPROVED' : 'REJECTED',
        defaultProbability: parseFloat(((100 - applicant.trustScore) / 100).toFixed(2))
      }
    });
  }

  // Invoices between Businesses
  for (let i = 0; i < 30; i++) {
    const vendor = businesses[randomInt(0, businesses.length - 1)];
    let buyer = businesses[randomInt(0, businesses.length - 1)];
    while (buyer.id === vendor.id) buyer = businesses[randomInt(0, businesses.length - 1)];
    
    const amount = randomFloat(5000, 500000);
    await prisma.invoice.create({
      data: {
        invoiceNumber: `INV-2024-${i}`,
        vendorId: vendor.id,
        businessId: buyer.id,
        amount: amount,
        gstAmount: amount * 0.18,
        riskScore: (vendor.trustScore < 50 || buyer.trustScore < 50) ? randomFloat(60, 95) : randomFloat(0, 20),
        status: Math.random() > 0.2 ? 'CLEARED' : 'PENDING'
      }
    });
  }

  // Transactions (The real meat for the graph)
  for (let i = 0; i < 100; i++) {
    const allEntities = [...citizens, ...businesses, ...banks, govt, rbi];
    const sender = allEntities[randomInt(0, allEntities.length - 1)];
    let receiver = allEntities[randomInt(0, allEntities.length - 1)];
    while (receiver.id === sender.id) receiver = allEntities[randomInt(0, allEntities.length - 1)];

    // If shell company is involved, create rapid high value tx
    const isSuspicious = sender.name.includes("Shell") || receiver.name.includes("Shell");
    
    await prisma.transaction.create({
      data: {
        senderId: sender.id,
        receiverId: receiver.id,
        amount: isSuspicious ? randomFloat(100000, 999999) : randomFloat(100, 20000),
        category: isSuspicious ? 'UNVERIFIED_TRANSFER' : ['PAYMENT', 'SALARY', 'FEE', 'PURCHASE'][randomInt(0, 3)],
        channel: ['UPI', 'NEFT', 'RTGS', 'CBDC'][randomInt(0, 3)],
        riskScore: isSuspicious ? randomFloat(80, 99) : randomFloat(1, 15),
        status: isSuspicious && Math.random() > 0.5 ? 'FLAGGED' : 'COMPLETED'
      }
    });
  }

  // Create Alerts
  await prisma.alert.createMany({
    data: [
      { source: 'TRANSACTION_GATEWAY', severity: 'CRITICAL', description: 'Layering pattern detected across 3 accounts.', affectedEntity: businesses.find(b => b.name.includes("Shell"))?.id || 'Unknown', status: 'ACTIVE' },
      { source: 'EWS', severity: 'HIGH', description: 'Sudden liquidity drop in cooperative sector.', affectedEntity: banks[0].id, status: 'ACTIVE' },
      { source: 'INVOICE_ENGINE', severity: 'MEDIUM', description: 'Duplicate GST invoice submitted by vendor.', affectedEntity: businesses[1].id, status: 'RESOLVED' }
    ]
  });

  console.log('Ecosystem Seeded Successfully with 150+ interdependent nodes and edges.');
}

main().catch(e => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
