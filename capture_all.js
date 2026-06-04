const puppeteer = require('puppeteer-core');
const fs = require('fs');
const PDFDocument = require('pdfkit');

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

async function generatePDF() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: "new",
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  
  if (!fs.existsSync('./all_screenshots')) {
    fs.mkdirSync('./all_screenshots');
  }

  const pdfDoc = new PDFDocument({ autoFirstPage: false });
  const pdfStream = fs.createWriteStream('FTID_V5_Full_Ecosystem_72Pages.pdf');
  pdfDoc.pipe(pdfStream);

  // Capture Landing Page specially from localhost:3001
  console.log('Capturing Landing Page from localhost:3001...');
  try {
    await page.goto('http://localhost:3001', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await new Promise(r => setTimeout(r, 4000));
    const landingPath = './all_screenshots/Landing.png';
    await page.screenshot({ path: landingPath, fullPage: true });
    
    // Add to PDF
    const dimensions = await page.evaluate(() => {
        return { width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight };
    });
    let pdfWidth = 1920;
    let pdfHeight = dimensions.height;
    pdfDoc.addPage({ size: [pdfWidth, pdfHeight] });
    pdfDoc.image(landingPath, 0, 0, { width: pdfWidth });
    console.log('Saved Landing Page');
  } catch (err) {
    console.error('Error capturing Landing page:', err.message);
  }

  // Capture all FTID routes from localhost:3000
  for (const route of routes) {
    let name = route === '/' ? 'Home' : route.substring(1).replace(/\//g, '_');
    console.log(`Capturing ${name} (${route})...`);
    
    try {
      await page.goto(`http://localhost:3000${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
      // Wait for animations and data to load
      await new Promise(r => setTimeout(r, 3000));
      
      const imgPath = `./all_screenshots/${name}.png`;
      await page.screenshot({ path: imgPath, fullPage: true });
      
      const dimensions = await page.evaluate(() => {
          return { width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight };
      });
      let pdfWidth = 1920;
      let pdfHeight = dimensions.height;
      pdfDoc.addPage({ size: [pdfWidth, pdfHeight] });
      pdfDoc.image(imgPath, 0, 0, { width: pdfWidth });
      
      console.log(`Saved ${name}`);
    } catch (err) {
      console.error(`Error capturing ${name}:`, err.message);
    }
  }

  await browser.close();
  pdfDoc.end();

  pdfStream.on('finish', () => {
    console.log('PDF Generated: FTID_V5_Full_Ecosystem_72Pages.pdf');
  });
}

generatePDF().catch(console.error);
