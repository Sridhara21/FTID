const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const pages = [
  { name: '00_Landing', url: 'http://localhost:3001/' },
  { name: '01_Citizen', url: 'http://localhost:3000/citizen' },
  { name: '02_Business', url: 'http://localhost:3000/business' },
  { name: '03_Gateway', url: 'http://localhost:3000/gateway' },
  { name: '04_Bank', url: 'http://localhost:3000/bank' },
  { name: '05_Institution', url: 'http://localhost:3000/institution' },
  { name: '06_Government', url: 'http://localhost:3000/government' },
  { name: '07_Regulator', url: 'http://localhost:3000/regulator' },
  { name: '08_Auditor', url: 'http://localhost:3000/auditor' },
  { name: '09_Developer', url: 'http://localhost:3000/developer' },
  { name: '10_Executive', url: 'http://localhost:3000/executive' }
];

(async () => {
  const dir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log('Launching browser to audit all pages...');
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1440, height: 900 }
  });

  const page = await browser.newPage();

  for (const item of pages) {
    console.log(`Checking ${item.name} at ${item.url}...`);
    try {
      await page.goto(item.url, { waitUntil: 'networkidle0', timeout: 15000 });
      // Extra sleep for animations/data
      await new Promise(r => setTimeout(r, 2000));
      
      const imgPath = path.join(dir, `${item.name}.png`);
      await page.screenshot({ path: imgPath });
      console.log(`Successfully verified and captured ${item.name} -> screenshots/${item.name}.png`);
    } catch (err) {
      console.error(`Error loading page ${item.name}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('Ecosystem verification and screenshot capture complete!');
})();
