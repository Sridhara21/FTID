const fs = require('fs');
const path = require('path');
const dir = 'src/components/shared/v2';
fs.readdirSync(dir).forEach(file => {
  const p = path.join(dir, file);
  if (p.endsWith('.tsx')) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/\\`/g, '`').replace(/\\\$/g, '$');
    fs.writeFileSync(p, content);
  }
});
console.log("Fixed files");
