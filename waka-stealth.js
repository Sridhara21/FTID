const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

const wakaCli = path.join(os.homedir(), '.wakatime', 'wakatime-cli-windows-amd64.exe');
const projectName = "FTID_Citizen";
const plugin = "vscode/1.90.0 vscode-wakatime/24.1.0";

// A list of realistic files to simulate jumping between components and logic
const targetFiles = [
  'src/app/page.tsx',
  'src/app/layout.tsx',
  'src/app/globals.css',
  'src/local/store.ts',
  'src/local/auth.ts',
  'src/components/shared/dashboard-sidebar.tsx',
  'src/app/(auth)/regulator/fraud/page.tsx'
];

console.log(`\n🕵️ Starting Stealth WakaTime Keep-Alive Daemon...`);
console.log(`Mimicking human developer activity for: ${projectName}`);
console.log(`Press Ctrl+C to stop.\n`);

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Keep track of the current "active" file so a human doesn't jump files every 30 seconds
let currentFile = targetFiles[0];
let fileFocusRemaining = randomInt(2, 6); // Stay on a file for 2-6 heartbeats

function sendHeartbeat() {
  fileFocusRemaining--;
  if (fileFocusRemaining <= 0) {
    // Switch to a new file to simulate opening a different tab
    currentFile = targetFiles[randomInt(0, targetFiles.length - 1)];
    fileFocusRemaining = randomInt(2, 6);
    console.log(`\n[Human Simulation] Switched focus to tab -> ${path.basename(currentFile)}`);
  }

  const targetPath = path.resolve(process.cwd(), currentFile);
  
  // Humans don't save every 10 seconds. They code, then save. 
  // 35% chance to be a file save. 65% chance to just be a cursor movement/typing heartbeat.
  const isSaveEvent = Math.random() < 0.35;

  const args = [
    '--entity', targetPath,
    '--project', projectName,
    '--plugin', plugin,
    '--category', 'coding',
  ];

  if (isSaveEvent) {
    args.push('--write');
  }

  const child = spawn(wakaCli, args, { stdio: 'ignore' });
  
  child.on('close', (code) => {
    const timestamp = new Date().toLocaleTimeString();
    if (code === 0) {
      console.log(`[${timestamp}] ⚡ Heartbeat: ${path.basename(currentFile)} | Type: ${isSaveEvent ? '💾 SAVE' : '⌨️ TYPING'}`);
    } else {
      console.log(`[${timestamp}] ❌ Heartbeat failed (code ${code})`);
    }
  });

  // Calculate the next human-like interval. 
  // Wakatime times out after 120s of inactivity.
  // We want to trigger between 45s and 105s to keep it perfectly active but randomized.
  // Occasional "fast" bursts (15-30s) to simulate fast typing.
  let nextIntervalSeconds;
  if (Math.random() < 0.15) {
    nextIntervalSeconds = randomInt(15, 30); // Burst of activity
  } else {
    nextIntervalSeconds = randomInt(50, 110); // Normal pacing
  }

  setTimeout(sendHeartbeat, nextIntervalSeconds * 1000);
}

// Start the loop
sendHeartbeat();
