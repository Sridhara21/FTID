const http = require('http');

const routes = [
  '/',
  '/auditor',
  '/auditor/ledger',
  '/auditor/reconciliation',
  '/auditor/risk',
  '/auditor/trails',
  '/bank',
  '/bank/fraud',
  '/bank/network',
  '/bank/underwriting',
  '/business',
  '/business/cashflow',
  '/business/compliance',
  '/business/credit',
  '/business/invoices',
  '/business/supply-chain',
  '/business/vendors',
  '/citizen',
  '/citizen/ai-advisor',
  '/citizen/balance-sheet',
  '/citizen/consent',
  '/citizen/credit-score',
  '/citizen/portfolio',
  '/citizen/profile',
  '/citizen/subsidies',
  '/citizen/tax',
  '/citizen/wallet',
  '/credit-score',
  '/developer',
  '/developer/apis',
  '/developer/consent',
  '/developer/keys',
  '/developer/sandbox',
  '/developer/sdk',
  '/developer/verification',
  '/gateway',
  '/gateway/cbdc',
  '/gateway/compliance',
  '/gateway/transactions',
  '/gateway/velocity',
  '/government',
  '/government/gdp',
  '/government/informal-economy',
  '/government/policy',
  '/government/policy-simulator',
  '/government/revenue',
  '/government/stress',
  '/government/subsidies',
  '/government/tax',
  '/institution',
  '/institution/fraud',
  '/institution/risk',
  '/institution/underwriting',
  '/regulator',
  '/regulator/ews',
  '/regulator/fraud',
  '/regulator/graph',
  '/regulator/heatmap',
  '/regulator/national-dashboard',
  '/regulator/systemic-risk',
  '/regulator/trust'
];

async function warmup() {
  console.log('Warming up routes...');
  for (const route of routes) {
    await new Promise(resolve => {
      http.get(`http://localhost:3000${route}`, (res) => {
        res.on('data', () => {});
        res.on('end', () => {
          console.log(`Warmed up ${route}`);
          resolve();
        });
      }).on('error', (err) => {
        console.error(`Error warming up ${route}:`, err.message);
        resolve();
      });
    });
  }
  console.log('Warmup complete.');
}

warmup().catch(console.error);
