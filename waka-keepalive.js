const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

const wakaCli = path.join(os.homedir(), '.wakatime', 'wakatime-cli-windows-amd64.exe');
const targetFile1 = path.resolve('c:/Users/user/3D Objects/New folder/FTID/src/app/globals.css'); 
const targetFile2 = path.resolve('c:/Users/user/3D Objects/New folder/FTID_Citizen/src/app/globals.css'); 
const plugin = "vscode/1.85.0 vscode-wakatime/24.0.0";

console.log(`Starting WakaTime keep-alive daemon for both projects...`);
console.log(`Press Ctrl+C to stop.`);

let currentFile = targetFile1;

function sendHeartbeat(isWrite = false) {
  const args = [
    '--entity', currentFile,
    '--plugin', plugin,
    '--category', 'coding'
  ];
  if (isWrite) {
    args.push('--write');
  }

  const child = spawn(wakaCli, args);
  
  child.on('error', (err) => {
    console.error(`\nFailed to start wakatime-cli: ${err.message}`);
  });

  child.on('close', (code) => {
    if (code === 0) {
      process.stdout.write(currentFile === targetFile1 ? '1' : '2'); 
    }
  });

  // Toggle file for next heartbeat to cover both projects
  currentFile = (currentFile === targetFile1) ? targetFile2 : targetFile1;
}

// Initial heartbeat
sendHeartbeat(true);
sendHeartbeat(true); // Send for both immediately

// Loop every 30 seconds
setInterval(() => {
  // 20% chance to simulate a file save (write)
  const isWrite = Math.random() > 0.8;
  sendHeartbeat(isWrite);
}, 30 * 1000);
