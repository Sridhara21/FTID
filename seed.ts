import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Database...');

  const citizen = await prisma.user.upsert({
    where: { pan: 'CITIZEN123' },
    update: {},
    create: {
      id: 'citizen_id_123',
      name: 'Ramesh Kumar',
      role: 'citizen',
      pan: 'CITIZEN123',
      aadhaar: '123456789012',
      trustScore: 50.0,
      wallets: {
        create: {
          walletType: 'CBDC',
          balance: 1000.0
        }
      }
    }
  });

  const business = await prisma.user.upsert({
    where: { pan: 'CORP456' },
    update: {},
    create: {
      id: 'business_id_123',
      name: 'Balaji Textiles Ltd',
      role: 'business',
      pan: 'CORP456',
      trustScore: 75.0,
      wallets: {
        create: {
          walletType: 'FIAT',
          balance: 50000.0
        }
      }
    }
  });

  const bank = await prisma.user.upsert({
    where: { pan: 'BANK789' },
    update: {},
    create: {
      id: 'bank_id_123',
      name: 'State Bank Node',
      role: 'bank',
      pan: 'BANK789',
      trustScore: 99.0
    }
  });

  console.log('Database seeded successfully!', { citizen, business, bank });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
