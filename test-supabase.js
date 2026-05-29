const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function testConnection() {
  console.log("Pinging Supabase...");
  const { data, error } = await supabase.from('citizens').select('id').limit(1);
  if (error) {
    console.error("Connection Failed:", error.message);
  } else {
    console.log("Connection Successful! Tables exist and are accessible.");
  }
}

testConnection();
