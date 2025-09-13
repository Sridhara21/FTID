import { CreditCard, Landmark, PiggyBank, Receipt, HandCoins, ShieldCheck, Fuel, Utensils, Wheat, HeartPulse, Building } from "lucide-react";

export const transactions = [
  {
    id: "txn_1",
    description: "Grocery Store",
    amount: -5000,
    date: "2024-07-20",
    icon: Receipt,
  },
  {
    id: "txn_2",
    description: "Salary Deposit",
    amount: 50000,
    date: "2024-07-19",
    icon: Landmark,
  },
  {
    id: "txn_3",
    description: "Utility Bill",
    amount: -8000,
    date: "2024-07-18",
    icon: CreditCard,
  },
  {
    id: "txn_4",
    description: "Savings Transfer",
    amount: -10000,
    date: "2024-07-17",
    icon: PiggyBank,
  },
];

export const incomeExpenseData = [
  { name: "Jan", income: 50000, expense: 30000 },
  { name: "Feb", income: 52000, expense: 32000 },
  { name: "Mar", income: 55000, expense: 35000 },
  { name: "Apr", income: 53000, expense: 38000 },
  { name: "May", income: 58000, expense: 34000 },
  { name: "Jun", income: 60000, expense: 40000 },
];

export const creditScoreTips = [
  "Pay your bills on time, every time.",
  "Keep your credit utilization ratio low.",
  "Avoid opening multiple new credit accounts at once.",
  "Regularly check your credit report for errors.",
];

export const subsidies = [
  { id: "sub_1", name: "Food Subsidy (NFSA)", status: "Active", amount: 1500, icon: Utensils },
  { id: "sub_2", name: "Health Insurance (PM-JAY)", status: "Active", amount: 416, icon: HeartPulse },
  { id: "sub_3", name: "LPG Subsidy (Ujjwala)", status: "Expired", amount: 200, icon: Fuel },
  { id: "sub_4", name: "Housing Subsidy (PMAY)", status: "Active", amount: 22000, icon: Building },
  { id: "sub_5", name: "Fertilizer Subsidy (PM-PRANAM)", status: "Active", amount: 1200, icon: Wheat },
];

export const gdpData = [
  { year: "2020", gdp: 250 },
  { year: "2021", gdp: 275 },
  { year: "2022", gdp: 305 },
  { year: "2023", gdp: 340 },
  { year: "2024", gdp: 375 },
  { year: "2025", gdp: 410 },
  { year: "2026", gdp: 450 },
];

export const revenueData = [
    { name: 'Income Tax', value: 22, fill: 'var(--color-income)' },
    { name: 'Corporate Tax', value: 13, fill: 'var(--color-corporate)' },
    { name: 'GST', value: 20, fill: 'var(--color-gst)' },
    { name: 'Customs', value: 5, fill: 'var(--color-customs)' },
    { name: 'Other', value: 4, fill: 'var(--color-other)' },
];

export const subsidyDistributionData = [
    { name: 'Food', value: 206800, fill: 'var(--color-chart-1)' },
    { name: 'Fertilizer', value: 164000, fill: 'var(--color-chart-2)' },
    { name: 'Fuel', value: 11920, fill: 'var(--color-chart-3)' },
    { name: 'Healthcare', value: 90658, fill: 'var(--color-chart-4)' },
    { name: 'Other', value: 30000, fill: 'var(--color-chart-5)' },
];

export const donationData = [
  { id: "don_1", election: "Lok Sabha 2024", donor: "MegaCorp Industries", amount: 12500000, party: "National Party" },
  { id: "don_2", election: "State Assembly 2024", donor: "Global Tech Solutions", amount: 6200000, party: "Regional Party" },
  { id: "don_3", election: "Lok Sabha 2024", donor: "Innovate India LLC", amount: 20000000, party: "Regional Party" },
  { id: "don_4", election: "Municipal Elections", donor: "Local Business Group", amount: 400000, party: "Independent" },
  { id: "don_5", election: "Lok Sabha 2024", donor: "Public Crowdfunding", amount: 41000000, party: "National Party" },
];

export const dummyFtidData = JSON.stringify([
  {"transaction_id":"a1b2c3d4","timestamp":"2023-10-26T10:00:00Z","amount":12500.50,"currency":"INR","merchant_name":"SuperBazaar","merchant_category":"Groceries","location":{"latitude":19.0760,"longitude":72.8777}},
  {"transaction_id":"e5f6g7h8","timestamp":"2023-10-26T12:30:00Z","amount":2100.00,"currency":"INR","merchant_name":"Chai Point","merchant_category":"Food & Drink","location":{"latitude":19.0765,"longitude":72.8780}},
  {"transaction_id":"i9j0k1l2","timestamp":"2023-10-26T15:45:00Z","amount":41500.00,"currency":"INR","merchant_name":"Digital World","merchant_category":"Electronics","location":{"latitude":19.0780,"longitude":72.8800}}
], null, 2);