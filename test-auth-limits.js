const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

async function checkLimits() {
  let success = 0;
  for(let i=0; i<35; i++) {
    const { data, error } = await supabase.auth.signUp({
      email: `limit_test_${Date.now()}_${i}@ftid.local`,
      password: 'SecurePassword123!'
    });
    if (error) {
      console.log(`Failed at ${i}:`, error.message);
      break;
    } else {
      success++;
    }
  }
  console.log(`Successful signups: ${success}`);
}
checkLimits();
