const fs = require('fs');
const path = require('path');

const TARGET_DIR = path.join(__dirname, 'src');

const replacements = [
    [/Quantum Net Worth/gi, 'Live Net Worth'],
    [/Quantum Wealth/gi, 'Live Wealth'],
    [/Sovereign Trust Rating/gi, 'Financial Health Score'],
    [/Trust Rating/gi, 'Health Score'],
    [/Algorithmic Trust Vectors/gi, 'Key Health Factors'],
    [/Algorithmic Trust Vector/gi, 'Health Factor'],
    [/Trust Vectors/gi, 'Health Factors'],
    [/Institutional Ledger/gi, 'Financial Overview'],
    [/Spatial AI Advisor/gi, 'AI Financial Advisor'],
    [/Decentralized Oracles/gi, 'Verified Data Sources'],
    [/Decentralized Oracle/gi, 'Verified Data Source'],
    [/Compliance Feed/gi, 'Activity & Permissions'],
    [/One-Click Settlement/gi, 'Pay Estimated Tax'],
    [/Algorithmic Generational Transfer/gi, 'Smart Estate Planning'],
    [/Global Routing Map/gi, 'International Transactions'],
    [/Sovereign Card/gi, 'Wealth Card'],
    [/Bleed Scanner/gi, 'Subscription Optimizer'],
    [/System Health:/gi, 'Financial Health:'],
];

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    const original = content;

    for (const [regex, replacement] of replacements) {
        content = content.replace(regex, replacement);
    }

    if (content !== original) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log("Updated terms in", filepath);
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
console.log("Terminology update complete.");
