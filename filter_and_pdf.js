const fs = require('fs');
const crypto = require('crypto');
const PDFDocument = require('pdfkit');
const path = require('path');

const dir = './all_screenshots';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

const hashes = new Set();
const keepFiles = [];

for (const file of files) {
  const filePath = path.join(dir, file);
  const stats = fs.statSync(filePath);
  
  // Remove low quality pics (< 50KB)
  if (stats.size < 50000) {
    console.log(`Removing low quality: ${file} (${stats.size} bytes)`);
    fs.unlinkSync(filePath);
    continue;
  }
  
  // Remove duplicates
  const buffer = fs.readFileSync(filePath);
  const hash = crypto.createHash('md5').update(buffer).digest('hex');
  
  if (hashes.has(hash)) {
    console.log(`Removing duplicate: ${file}`);
    fs.unlinkSync(filePath);
  } else {
    hashes.add(hash);
    keepFiles.push(filePath);
  }
}

console.log(`Kept ${keepFiles.length} high quality, unique screenshots.`);

// Regenerate PDF
const pdfDoc = new PDFDocument({ autoFirstPage: false });
const pdfStream = fs.createWriteStream('FTID_V5_Filtered_Ecosystem.pdf');
pdfDoc.pipe(pdfStream);

for (const imgPath of keepFiles) {
  pdfDoc.addPage({ size: [1920, 1080] });
  pdfDoc.image(imgPath, 0, 0, { width: 1920 });
}

pdfDoc.end();

pdfStream.on('finish', () => {
  console.log('Filtered PDF Generated: FTID_V5_Filtered_Ecosystem.pdf');
});
