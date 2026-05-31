const http = require('http');

// Maximize socket pooling for high concurrency
http.globalAgent.maxSockets = 5000;

const duration = 25 * 60 * 1000; // 25 minutes
const startTime = Date.now();
let requestCount = 0;
let errorCount = 0;

const payload = JSON.stringify({
  eventType: "SUBSIDY_RECEIVED",
  payload: {
    citizenId: "citizen_id_123",
    amount: Math.floor(Math.random() * 5000) + 1000,
    scheme: "INDIA_SCALE_TEST"
  }
});

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/events',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload)
  }
};

function sendRequest() {
  if (Date.now() - startTime > duration) {
    console.log(`India-Scale Stress test complete! Total Requests: ${requestCount}, Errors: ${errorCount}`);
    process.exit(0);
  }

  const req = http.request(options, (res) => {
    res.on('data', () => {}); // Consume response data
    res.on('end', () => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        requestCount++;
      } else {
        errorCount++;
      }
      // Log progress every 1000 requests
      if ((requestCount + errorCount) % 1000 === 0) {
        console.log(`[${Math.floor((Date.now() - startTime) / 1000)}s] Requests: ${requestCount}, Errors: ${errorCount}`);
      }
      // Keep load high
      setImmediate(sendRequest);
    });
  });

  req.on('error', (e) => {
    errorCount++;
    if ((requestCount + errorCount) % 1000 === 0) {
      console.log(`[${Math.floor((Date.now() - startTime) / 1000)}s] Requests: ${requestCount}, Errors: ${errorCount}`);
    }
    setImmediate(sendRequest);
  });

  req.write(payload);
  req.end();
}

console.log('Starting 25-minute INDIA-SCALE stress test on /api/events (Port 3001)...');
console.log('Launching 1,000 concurrent threads...');

// Start 1000 concurrent loops for "India level" load
for (let i = 0; i < 1000; i++) {
  sendRequest();
}
