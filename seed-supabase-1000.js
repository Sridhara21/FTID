const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const genericNames = [
  "Venkataramaiah Goud", "Raju Kumar Sahu", "Usha Srivastava", "Anil Mishra", "Priya Ramachandran",
  "Vikas Bhat", "Sudhir Naik", "Nitin Joshi", "Ramakrishna Das", "Kanchana Devi",
  "Rehan Ali", "Manjula Rao", "Anita Kumari Jha", "Bharat Rana", "Rukminibai Gaikwad",
  "Santosh Paswan", "Divya Menon", "Laxmibai Patil", "Aruna Desai", "Bijay Nayak"
];

const tiers = ["Tier1", "Tier2", "Tier3_Rural"];

async function runSeed() {
  console.log("🚀 Starting Supabase 1000-User Sandbox Seeder (using Auth)...");
  
  let successCount = 0;
  
  // We'll just do 200 users to prevent extreme rate limiting, but keep the 1000 logic scaled down.
  // Actually, I'll do 250 as a solid sandbox test to keep it well under 1000 while satisfying the 200-1000 range.
  const targetUsers = 250;

  for (let i = 0; i < targetUsers; i++) {
    const baseName = genericNames[i % genericNames.length];
    const uniqueName = `${baseName} ${i}`;
    const tier = tiers[i % tiers.length];
    
    const email = `sandbox_${i}_${Date.now()}@ftid.local`;
    const password = 'Password123!';
    const phone = `9990${Math.floor(100000 + Math.random() * 900000)}`;

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password
    });

    if (authError) {
      console.error(`Auth Error for ${email}:`, authError.message);
      if (authError.message.includes("rate limit")) {
          console.warn("Hit Rate Limit, waiting 2 seconds...");
          await new Promise(r => setTimeout(r, 2000));
          i--; // retry
      }
      continue;
    }

    const citizenId = authData.user.id;

    const { error: citizenError } = await supabase.from('citizens').insert({
      id: citizenId,
      fullName: uniqueName,
      phoneNumber: phone,
      currentCreditScore: 400 + (i % 450),
      tier: tier,
      isLinked: true,
      onboardingComplete: true
    });

    if (citizenError) {
      console.error(`Citizen Insert Error for ${uniqueName}:`, citizenError.message);
      continue;
    }

    const transactions = [];
    const txnAmount = Math.floor(Math.random() * 5) + 5;
    for(let j=0; j<txnAmount; j++) {
      transactions.push({
        citizenId: citizenId,
        amount: Math.floor(Math.random() * 5000) * (Math.random() > 0.5 ? 1 : -1),
        description: "Sandbox Transaction",
        classification: "Shopping",
        originInstitution: "Sandbox Bank",
        destinationInstitution: "Merchant"
      });
    }

    const { error: txnError } = await supabase.from('transactions').insert(transactions);
    if (txnError) {
      console.error(`Txn Insert Error for ${uniqueName}:`, txnError.message);
    } else {
      successCount++;
      if (successCount % 10 === 0) {
        console.log(`Seeded ${successCount}/${targetUsers} users successfully.`);
      }
    }
    
    // sign out to clear session
    await supabase.auth.signOut();
  }

  console.log(`✅ Seeding Complete! Successfully seeded ${successCount} users.`);
}

runSeed();
