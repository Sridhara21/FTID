const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const pagesToCapture = [
  { name: 'FTID_Landing', url: 'http://localhost:3001/' },
  { name: 'Citizen_Wallet', url: 'http://localhost:3000/citizen/balance-sheet' },
  { name: 'Bank_Underwriting', url: 'http://localhost:3000/bank/underwriting' },
  { name: 'RBI_EWS', url: 'http://localhost:3000/regulator/ews' },
  { name: 'Gov_Simulator', url: 'http://localhost:3000/government/policy-simulator' },
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080 });

  const doc = new PDFDocument({ autoFirstPage: false });
  doc.pipe(fs.createWriteStream('FTID_V5_Sovereign_OS_Release.pdf'));

  for (const p of pagesToCapture) {
    console.log(`Capturing ${p.name}...`);
    await page.goto(p.url, { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 2000));
    const imgPath = `${p.name}.png`;
    await page.screenshot({ path: imgPath, fullPage: true });
    console.log(`Saved ${imgPath}`);
    
    const img = doc.openImage(imgPath);
    doc.addPage({ size: [img.width, img.height] });
    doc.image(imgPath, 0, 0);
  }

  doc.end();
  await browser.close();
  console.log('PDF Generated: FTID_V5_Sovereign_OS_Release.pdf');
})();
