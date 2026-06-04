const puppeteer = require('puppeteer');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const routes = [
  { url: 'http://localhost:3001/', name: 'landing' },
  { url: 'http://localhost:3000/', name: 'home' },
  { url: 'http://localhost:3000/auditor', name: 'auditor' },
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

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const images = [];

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const url = typeof route === 'string' ? `http://localhost:3000${route}` : route.url;
    console.log(`Taking screenshot for ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 90000 });
      await new Promise(r => setTimeout(r, 1000)); // wait for fade-in animations to finish
      const imgPath = path.join(__dirname, `screenshot_${i}.png`);
      await page.screenshot({ path: imgPath, fullPage: true });
      images.push(imgPath);
    } catch(err) {
      console.log(`Failed to screenshot ${url}: ${err.message}`);
    }
  }

  await browser.close();

  console.log('Generating PDF...');
  const doc = new PDFDocument({ autoFirstPage: false });
  const outPath = path.join(__dirname, 'FTID_V6_Showcase_Edition.pdf');
  
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  for (let imgPath of images) {
    if (fs.existsSync(imgPath)) {
      const img = doc.openImage(imgPath);
      doc.addPage({ size: [img.width, img.height] });
      doc.image(imgPath, 0, 0);
    }
  }

  doc.end();

  stream.on('finish', () => {
    console.log('PDF generated successfully at FTID_V6_Showcase_Edition.pdf!');
    // Cleanup images
    console.log('Cleaning up temporary images...');
    for (let imgPath of images) {
      if (fs.existsSync(imgPath)) {
        fs.unlinkSync(imgPath);
      }
    }
    console.log('Done.');
  });
})();
