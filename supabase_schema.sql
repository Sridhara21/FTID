-- Supabase Schema for FTID Citizen App

-- 1. Create the Citizens Table
CREATE TABLE public.citizens (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    "fullName" TEXT,
    "phoneNumber" TEXT UNIQUE,
    pan JSONB,
    aadhaar JSONB,
    "currentCreditScore" INTEGER,
    tier TEXT,
    "isLinked" BOOLEAN DEFAULT true,
    "registrationDate" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "onboardingComplete" BOOLEAN DEFAULT true
);

-- 2. Create the Transactions Table
CREATE TABLE public.transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "citizenId" UUID REFERENCES public.citizens(id) ON DELETE CASCADE,
    amount NUMERIC NOT NULL,
    description TEXT,
    classification TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status TEXT DEFAULT 'completed',
    "originInstitution" TEXT,
    "destinationInstitution" TEXT,
    channel TEXT
);

-- 3. Set Up Row Level Security (RLS)
ALTER TABLE public.citizens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Allow users to read and update their own citizen record
CREATE POLICY "Users can view own profile" 
    ON public.citizens FOR SELECT 
    USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
    ON public.citizens FOR UPDATE 
    USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" 
    ON public.citizens FOR INSERT 
    WITH CHECK (auth.uid() = id);

-- Allow users to read and insert their own transactions
CREATE POLICY "Users can view own transactions" 
    ON public.transactions FOR SELECT 
    USING (auth.uid() = "citizenId");

CREATE POLICY "Users can insert own transactions" 
    ON public.transactions FOR INSERT 
    WITH CHECK (auth.uid() = "citizenId");
