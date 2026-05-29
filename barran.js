const { spawn } = require('child_process');
const path = require('path');
const os = require('os');
const fs = require('fs');

const wakaCli = path.join(os.homedir(), '.wakatime', 'wakatime-cli-windows-amd64.exe');
const project1 = path.resolve('c:/Users/user/3D Objects/New folder/FTID'); 
const project2 = path.resolve('c:/Users/user/3D Objects/New folder/FTID_Citizen'); 
const plugin = "vscode/1.85.0 vscode-wakatime/24.0.0";

// A recursive function to get all actual code files in a project
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.existsSync(dirPath) ? fs.readdirSync(dirPath) : [];
  arrayOfFiles = arrayOfFiles || [];
  
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
      }
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.md')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });
  return arrayOfFiles;
}

const allFiles1 = getAllFiles(project1);
const allFiles2 = getAllFiles(project2);
let currentFilesPool = [...allFiles1]; // Start with project 1

console.log(`[ADVANCED WAKATIMER] Engine Initiated.`);
console.log(`- Loaded ${allFiles1.length} files from Project 1`);
console.log(`- Loaded ${allFiles2.length} files from Project 2`);
console.log(`Commencing realistic developer simulation. Evasion mode: ON.`);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sendHeartbeat(file, isWrite, lineno, cursorpos) {
  const args = [
    '--entity', file,
    '--plugin', plugin,
    '--category', 'coding',
    '--lineno', lineno.toString(),
    '--cursorpos', cursorpos.toString()
  ];
  if (isWrite) {
    args.push('--write');
  }

  const child = spawn(wakaCli, args);
  child.on('error', (err) => { /* ignore */ });
  child.on('close', (code) => {
    if (code === 0) process.stdout.write(isWrite ? 'W' : '.'); 
  });
}

function runSimulationLoop() {
  // Randomly select a file to "work on"
  if (currentFilesPool.length === 0) currentFilesPool = [...allFiles1, ...allFiles2];
  const activeFile = currentFilesPool[getRandomInt(0, currentFilesPool.length - 1)];
  
  // Randomize some fake file metadata
  let lines = 100;
  try { lines = fs.readFileSync(activeFile, 'utf-8').split('\\n').length; } catch(e) {}
  
  let currentLine = getRandomInt(1, Math.max(1, lines));
  let cursor = getRandomInt(0, 50);

  // Decide how many actions we will do in this "burst" of coding
  const actionsInBurst = getRandomInt(2, 8);
  let actionsCompleted = 0;

  function doAction() {
    if (actionsCompleted >= actionsInBurst) {
      // Finished burst, schedule next burst and maybe take a break
      let delayToNextBurst = getRandomInt(15000, 45000); // 15 to 45 seconds

      // 10% chance to take a "coffee break" or reading break (2 to 5 minutes)
      if (Math.random() > 0.90) {
        delayToNextBurst = getRandomInt(120000, 300000);
        console.log(`\\n[SIM] Taking a developer break for ${Math.floor(delayToNextBurst/1000)}s...`);
        // Swap project focus maybe?
        if (Math.random() > 0.5) currentFilesPool = (currentFilesPool === allFiles1) ? allFiles2 : allFiles1;
      }

      setTimeout(runSimulationLoop, delayToNextBurst);
      return;
    }

    // Simulate typing: move cursor forward, maybe write
    currentLine += getRandomInt(0, 2); 
    cursor += getRandomInt(-10, 20);
    if (cursor < 0) cursor = 0;

    const isWrite = Math.random() > 0.6; // 40% chance it's a save/write
    sendHeartbeat(activeFile, isWrite, currentLine, cursor);

    actionsCompleted++;
    // Small delay between actions in the same burst (1 to 5 seconds)
    setTimeout(doAction, getRandomInt(1000, 5000));
  }

  // Start the burst
  doAction();
}

// Start simulation
runSimulationLoop();
