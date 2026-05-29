const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false }
});

// Settings for Extreme Scale Test
const USERS_TO_SIMULATE = 5; // Keeping it to 5 to avoid Auth Rate Limits (30/hr)
const TRANSACTIONS_PER_USER = 10000; // 10,000 per user
const TOTAL_TRANSACTIONS = USERS_TO_SIMULATE * TRANSACTIONS_PER_USER;

// Simulators
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function getRandomTransactionDetails() {
  const rand = Math.random();
  if (rand < 0.6) {
    const items = [
      { amount: -15, desc: "Tapri Chai UPI", class: "Food" },
      { amount: -40, desc: "Auto Fare UPI", class: "Transport" },
      { amount: -120, desc: "Blinkit Groceries", class: "Shopping" },
      { amount: -20, desc: "Sutta/Snack", class: "Food" },
      { amount: -250, desc: "Zomato Delivery", class: "Food" }
    ];
    return items[Math.floor(Math.random() * items.length)];
  } else if (rand < 0.8) {
    const items = [
      { amount: -850, desc: "BESCOM Electricity", class: "Utilities" },
      { amount: -299, desc: "Jio Recharge", class: "Utilities" },
      { amount: -1200, desc: "Airtel Broadband", class: "Utilities" }
    ];
    return items[Math.floor(Math.random() * items.length)];
  } else if (rand < 0.95) {
    return { amount: -500 * (Math.floor(Math.random() * 5) + 1), desc: "P2P PhonePe Transfer", class: "Transfer" };
  } else {
    const items = [
      { amount: 300, desc: "LPG Subsidy DBT", class: "Income" },
      { amount: 2000, desc: "PM-KISAN Nidhi", class: "Income" },
      { amount: 45000, desc: "Salary Credit NEFT", class: "Income" }
    ];
    return items[Math.floor(Math.random() * items.length)];
  }
}

// Global Metrics
const metrics = {
  totalAttempted: 0,
  httpStatusDist: {},
  latencies: [],
  networkDrops: 0,
  successfulInserts: 0,
  startTime: 0,
  endTime: 0
};

async function insertTransactionREST(token, payload) {
  const start = performance.now();
  let status = 0;
  
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${token}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(payload)
    });
    
    status = response.status;
  } catch (err) {
    status = 503; // Network Drop / Timeout
  }

  const end = performance.now();
  const latency = end - start;
  
  return { status, latency };
}

async function simulateUserStream(uid, token, userIndex) {
  console.log(`[User ${userIndex}] Booted. Streaming ${TRANSACTIONS_PER_USER} transactions...`);
  
  for(let i = 0; i < TRANSACTIONS_PER_USER; i++) {
    metrics.totalAttempted++;
    
    // Simulate Network Latency + Think Time (Between 10ms and 500ms for high scale)
    const baseLatency = Math.floor(Math.random() * 490) + 10;
    await sleep(baseLatency);

    // Occasional massive Indian 3G Drop (1% chance to pause for 3 seconds)
    if (Math.random() < 0.01) {
      await sleep(3000);
    }

    // Packet drop simulation (1%)
    if (Math.random() < 0.01) {
      metrics.networkDrops++;
      metrics.httpStatusDist[503] = (metrics.httpStatusDist[503] || 0) + 1;
      continue;
    }

    const txn = getRandomTransactionDetails();
    const timestamp = new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)).toISOString();
    
    const payload = {
      citizenId: uid,
      amount: txn.amount,
      description: txn.desc,
      classification: txn.class,
      timestamp: timestamp,
      status: 'completed',
      originInstitution: txn.amount < 0 ? 'FTID Wallet' : 'External Node',
      destinationInstitution: txn.amount < 0 ? 'Merchant/Payee' : 'FTID Wallet',
      channel: 'UPI'
    };

    const result = await insertTransactionREST(token, payload);
    
    metrics.latencies.push(result.latency);
    metrics.httpStatusDist[result.status] = (metrics.httpStatusDist[result.status] || 0) + 1;
    
    if (result.status === 201) {
      metrics.successfulInserts++;
    }

    if ((i + 1) % 2500 === 0) {
      console.log(`[User ${userIndex}] Progress: ${i+1}/${TRANSACTIONS_PER_USER}`);
    }
  }
  
  console.log(`[User ${userIndex}] Completed.`);
}

function calculatePercentile(arr, p) {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const pos = (sorted.length - 1) * p;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
    return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
    return sorted[base];
  }
}

async function runScaleTest() {
  console.log("🚀 INITIATING EXTENDED HIGH-SCALE INDIAN INFRASTRUCTURE TEST 🚀");
  console.log(`Target: ${TOTAL_TRANSACTIONS} Transactions across ${USERS_TO_SIMULATE} independent raw HTTP streams.`);
  
  const userCredentials = [];
  
  // Create Authenticated Users and gather pure JWTs for isolated sessions
  for(let i=0; i<USERS_TO_SIMULATE; i++) {
    const email = `scale_sim_${i}_${Date.now()}@ftid.local`;
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email, password: 'SecurePassword123!'
    });
    
    if (authError || !authData.session) {
      console.error(`Auth Error for ${email}: ${authError?.message || 'No Session'}`);
      continue;
    }
    
    const uid = authData.user.id;
    const token = authData.session.access_token;
    
    userCredentials.push({ uid, token });
    
    // Seed Citizen Row
    await insertTransactionREST(token, {
      citizenId: uid, amount: 0, description: "Init", classification: "System", channel: "System", originInstitution: "System", destinationInstitution: "System"
    }); // Just to verify token works, actually let's use supabase client for Citizen insert
    
    await supabase.from('citizens').insert({
      id: uid,
      fullName: `Scale Citizen ${i}`,
      phoneNumber: `7770${Math.floor(100000 + Math.random() * 900000)}`,
      currentCreditScore: Math.floor(Math.random() * 400) + 400,
      tier: 'Tier2',
      isLinked: true
    });
  }
  
  console.log(`Bootstrapped ${userCredentials.length} users with isolated JWT tokens.`);
  console.log(`Commencing massive 50,000 transaction load over extended duration...`);
  
  metrics.startTime = performance.now();
  
  const promises = userCredentials.map((cred, index) => simulateUserStream(cred.uid, cred.token, index + 1));
  await Promise.all(promises);
  
  metrics.endTime = performance.now();
  const totalSecs = (metrics.endTime - metrics.startTime) / 1000;
  
  console.log("\n=======================================================");
  console.log("📊 EXTENDED SCALE TEST COMPLETE: RAW METRICS 📊");
  console.log("=======================================================");
  console.log(`Total Target:         ${TOTAL_TRANSACTIONS}`);
  console.log(`Total Attempted:      ${metrics.totalAttempted}`);
  console.log(`Total Time:           ${totalSecs.toFixed(2)} seconds`);
  console.log(`Throughput (API):     ${(metrics.totalAttempted / totalSecs).toFixed(2)} req/sec`);
  
  console.log("\n📡 HTTP Status Code Distribution:");
  for (const [code, count] of Object.entries(metrics.httpStatusDist)) {
    console.log(`   [${code}]: ${count}`);
  }
  
  console.log(`\n✅ Successful RLS DB Inserts (HTTP 201): ${metrics.successfulInserts}`);
  console.log(`🚫 Simulated Network Drops (503): ${metrics.networkDrops}`);
  
  console.log("\n⚡ API Latency Percentiles (Real Supabase REST response times):");
  console.log(`   Mean Latency: ${(metrics.latencies.reduce((a, b) => a + b, 0) / metrics.latencies.length).toFixed(2)} ms`);
  console.log(`   P50 (Median): ${calculatePercentile(metrics.latencies, 0.5).toFixed(2)} ms`);
  console.log(`   P90:          ${calculatePercentile(metrics.latencies, 0.90).toFixed(2)} ms`);
  console.log(`   P99:          ${calculatePercentile(metrics.latencies, 0.99).toFixed(2)} ms`);
  console.log("=======================================================");
  
}

runScaleTest();
