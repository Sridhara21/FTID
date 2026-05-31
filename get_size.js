const fs = require('fs');
const path = require('path');

function getDirSize(dirPath) {
    let size = 0;
    const files = fs.readdirSync(dirPath);

    for (let i = 0; i < files.length; i++) {
        const filePath = path.join(dirPath, files[i]);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            if (!filePath.includes('node_modules') && !filePath.includes('.git') && !filePath.includes('.next')) {
                size += getDirSize(filePath);
            }
        } else {
            if (!filePath.includes('node_modules') && !filePath.includes('.git') && !filePath.includes('.next')) {
                size += stats.size;
            }
        }
    }

    return size;
}

const totalSize = getDirSize(__dirname);
console.log(`Source Code Size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
