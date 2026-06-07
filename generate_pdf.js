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
  let browser;
  let images = [];
  try {
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      const url = typeof route === 'string' ? `http://localhost:3000${route}` : route.url;
      console.log(`Taking screenshot for ${url}...`);
      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
        await new Promise(r => setTimeout(r, 1000)); // wait for fade-in animations to finish
        const imgPath = path.join(__dirname, `screenshot_${i}.png`);
        await page.screenshot({ path: imgPath, fullPage: true });
        images.push(imgPath);
      } catch (err) {
        console.error(`Failed to screenshot ${url}: ${err.message}`);
      }
    }
  } catch (error) {
    console.error('Fatal error during Puppeteer execution:', error);
  } finally {
    if (browser) {
      try {
        await browser.close();
      } catch (closeErr) {
        console.error('Error closing browser:', closeErr);
      }
    }
  }

  if (images.length === 0) {
    console.error('No screenshots were taken. Aborting PDF generation.');
    return;
  }

  console.log('Generating PDF...');
  try {
    const doc = new PDFDocument({ autoFirstPage: false });
    const outPath = path.join(__dirname, 'FTID_V8_Showcase_Edition.pdf');
    
    const stream = fs.createWriteStream(outPath);
    
    stream.on('error', (err) => {
      console.error('Error writing PDF stream:', err);
      cleanupImages(images);
    });

    stream.on('finish', () => {
      console.log('PDF generated successfully at FTID_V8_Showcase_Edition.pdf!');
      cleanupImages(images);
      console.log('Done.');
    });

    doc.pipe(stream);

    for (let imgPath of images) {
      if (fs.existsSync(imgPath)) {
        try {
          const img = doc.openImage(imgPath);
          doc.addPage({ size: [img.width, img.height] });
          doc.image(imgPath, 0, 0);
        } catch (imgErr) {
          console.error(`Failed to add image ${imgPath} to PDF:`, imgErr);
        }
      }
    }

    doc.end();
  } catch (pdfErr) {
    console.error('Error during PDF generation:', pdfErr);
    cleanupImages(images);
  }
})();

function cleanupImages(images) {
  console.log('Cleaning up temporary images...');
  for (let imgPath of images) {
    if (fs.existsSync(imgPath)) {
      try {
        fs.unlinkSync(imgPath);
      } catch (err) {
        console.error(`Failed to delete temporary image ${imgPath}:`, err);
      }
    }
  }
}
