const fs = require('fs');
const path = require('path');

const TARGET_DIR = path.join(__dirname, 'src');

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    const original = content;

    // 1. Backgrounds
    content = content.replace(/bg-\[#02010a\]/g, 'bg-slate-50');
    content = content.replace(/bg-black/g, 'bg-slate-50');
    
    // 2. Text colors
    content = content.replace(/text-white\/([0-9]+)/g, 'text-slate-900/$1');
    content = content.replace(/text-white/g, 'text-slate-900');
    content = content.replace(/text-black/g, 'text-white'); // for inverted buttons
    
    // 3. Glass backgrounds (milky)
    content = content.replace(/bg-white\/5 /g, 'bg-white/60 ');
    content = content.replace(/bg-white\/5"/g, 'bg-white/60"');
    content = content.replace(/bg-white\/10/g, 'bg-white/70');
    content = content.replace(/bg-white\/20/g, 'bg-white/80');
    content = content.replace(/bg-white\/30/g, 'bg-white/90');

    // 4. Glass borders
    content = content.replace(/border-white\/5 /g, 'border-white/40 ');
    content = content.replace(/border-white\/5"/g, 'border-white/40"');
    content = content.replace(/border-white\/10/g, 'border-white/50');
    content = content.replace(/border-white\/20/g, 'border-white/60');

    // 5. Accent text colors (make them darker for light theme)
    content = content.replace(/text-emerald-300/g, 'text-emerald-700');
    content = content.replace(/text-emerald-400/g, 'text-emerald-700');
    content = content.replace(/text-rose-300/g, 'text-rose-700');
    content = content.replace(/text-rose-400/g, 'text-rose-700');
    content = content.replace(/text-cyan-300/g, 'text-cyan-700');
    content = content.replace(/text-cyan-400/g, 'text-cyan-700');
    content = content.replace(/text-blue-300/g, 'text-blue-700');
    content = content.replace(/text-purple-300/g, 'text-purple-700');
    content = content.replace(/text-purple-400/g, 'text-purple-700');
    content = content.replace(/text-pink-400/g, 'text-pink-700');
    
    // 6. Drop shadows (remove or minimize drop-shadow on dark text)
    content = content.replace(/drop-shadow-\[.*?\]/g, '');
    content = content.replace(/drop-shadow-lg/g, 'drop-shadow-sm');
    content = content.replace(/drop-shadow-md/g, '');

    // 7. Ambient orbs colors (make them pastel)
    content = content.replace(/bg-purple-600\/20/g, 'bg-purple-300/40');
    content = content.replace(/bg-blue-600\/20/g, 'bg-blue-300/40');
    content = content.replace(/bg-pink-600\/10/g, 'bg-pink-300/40');
    content = content.replace(/bg-cyan-600\/10/g, 'bg-cyan-300/40');
    content = content.replace(/bg-indigo-600\/20/g, 'bg-indigo-300/40');
    content = content.replace(/bg-indigo-600\/10/g, 'bg-indigo-300/40');
    
    // 8. Accent background hues
    content = content.replace(/bg-emerald-500\/20/g, 'bg-emerald-100');
    content = content.replace(/bg-emerald-500\/10/g, 'bg-emerald-50/50');
    content = content.replace(/border-emerald-500\/30/g, 'border-emerald-200');
    content = content.replace(/border-emerald-500\/20/g, 'border-emerald-200');

    content = content.replace(/bg-rose-500\/20/g, 'bg-rose-100');
    content = content.replace(/bg-rose-500\/10/g, 'bg-rose-50/50');
    content = content.replace(/border-rose-500\/30/g, 'border-rose-200');

    if (content !== original) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log("Updated", filepath);
    }
}

function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            walk(file);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                processFile(file);
            }
        }
    });
}

walk(TARGET_DIR);
console.log("Theme update complete.");
