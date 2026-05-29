const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function runBenchmark() {
  console.log("📊 Starting FTID Supabase Load Test Benchmark...");
  
  // Phase 1: Sign in with the first sandbox user we created to get auth context.
  // Wait, if we don't have the password, we can't test RLS reads. But wait, `test-supabase.js` did read `citizens` anonymously. Let's see if we can read anonymously or if we need to sign in.
  // Let's try querying transactions anonymously first. If it fails, we will skip it and measure raw citizens query.
  
  console.time("Fetch 100 Citizens");
  const { data: citizens, error: citizenError } = await supabase.from('citizens').select('id, fullName, currentCreditScore').limit(100);
  console.timeEnd("Fetch 100 Citizens");

  if (citizenError) {
    console.error("Failed to fetch citizens (RLS block):", citizenError.message);
  } else {
    console.log(`Successfully fetched ${citizens.length} citizens anonymously.`);
  }

  // Phase 2: Concurrent queries
  console.log("Initiating Concurrent Load Test (Fetching 50 citizens individually)...");
  
  const start = performance.now();
  const promises = [];
  for(let i=0; i<50; i++) {
     promises.push(
       supabase.from('citizens').select('*').limit(1)
     );
  }
  
  await Promise.all(promises);
  const end = performance.now();
  
  const totalTime = end - start;
  console.log(`✅ Completed 50 concurrent requests in ${totalTime.toFixed(2)}ms`);
  console.log(`⏱️ Average latency per parallel request: ${(totalTime / 50).toFixed(2)}ms`);
}

runBenchmark();
