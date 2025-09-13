import { CreditCard, Landmark, PiggyBank, Receipt, HandCoins, ShieldCheck } from "lucide-react";

export const transactions = [
  {
    id: "txn_1",
    description: "Grocery Store",
    amount: -75.6,
    date: "2024-07-20",
    icon: Receipt,
  },
  {
    id: "txn_2",
    description: "Salary Deposit",
    amount: 3200.0,
    date: "2024-07-19",
    icon: Landmark,
  },
  {
    id: "txn_3",
    description: "Utility Bill",
    amount: -120.0,
    date: "2024-07-18",
    icon: CreditCard,
  },
  {
    id: "txn_4",
    description: "Savings Transfer",
    amount: -500.0,
    date: "2024-07-17",
    icon: PiggyBank,
  },
];

export const incomeExpenseData = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 5000, expense: 6800 },
  { name: "Apr", income: 2780, expense: 3908 },
  { name: "May", income: 1890, expense: 4800 },
  { name: "Jun", income: 2390, expense: 3800 },
];

export const creditScoreTips = [
  "Pay your bills on time, every time.",
  "Keep your credit card balances low.",
  "Avoid opening multiple new accounts at once.",
  "Check your credit report for errors.",
];

export const subsidies = [
  { id: "sub_1", name: "Housing Subsidy", status: "Active", amount: 250, icon: HandCoins },
  { id: "sub_2", name: "Healthcare Plan", status: "Active", amount: 150, icon: ShieldCheck },
  { id: "sub_3", name: "Education Grant", status: "Pending", amount: 1000, icon: HandCoins },
];

export const gdpData = [
  { year: "2018", gdp: 20.5 },
  { year: "2019", gdp: 21.4 },
  { year: "2020", gdp: 20.9 },
  { year: "2021", gdp: 23.3 },
  { year: "2022", gdp: 25.0 },
  { year: "2023", gdp: 26.1 },
  { year: "2024", gdp: 27.2 },
];

export const revenueData = [
    { name: 'Income Tax', value: 400, fill: 'var(--color-income)' },
    { name: 'Corporate Tax', value: 300, fill: 'var(--color-corporate)' },
    { name: 'VAT', value: 200, fill: 'var(--color-vat)' },
    { name: 'Customs', value: 278, fill: 'var(--color-customs)' },
    { name: 'Other', value: 189, fill: 'var(--color-other)' },
];

export const subsidyDistributionData = [
    { name: 'Healthcare', value: 45, fill: 'var(--color-healthcare)' },
    { name: 'Housing', value: 25, fill: 'var(--color-housing)' },
    { name: 'Education', value: 15, fill: 'var(--color-education)' },
    { name: 'Agriculture', value: 10, fill: 'var(--color-agriculture)' },
    { name: 'Other', value: 5, fill: 'var(--color-other)' },
];

export const donationData = [
  { id: "don_1", election: "Presidential 2024", donor: "MegaCorp Inc.", amount: 150000, party: "Blue Party" },
  { id: "don_2", election: "Senate 2024", donor: "Global Solutions", amount: 75000, party: "Red Party" },
  { id: "don_3", election: "Presidential 2024", donor: "Innovate LLC", amount: 250000, party: "Red Party" },
  { id: "don_4", election: "Mayoral Race", donor: "Local Biz Co.", amount: 5000, party: "Independent" },
  { id: "don_5", election: "Presidential 2024", donor: "Citizen Donations", amount: 500000, party: "Blue Party" },
];

export const dummyFtidData = JSON.stringify([
  {"transaction_id":"a1b2c3d4","timestamp":"2023-10-26T10:00:00Z","amount":150.75,"currency":"USD","merchant_name":"SuperMart","merchant_category":"Groceries","location":{"latitude":34.0522,"longitude":-118.2437}},
  {"transaction_id":"e5f6g7h8","timestamp":"2023-10-26T12:30:00Z","amount":25.50,"currency":"USD","merchant_name":"CoffeeHouse","merchant_category":"Food & Drink","location":{"latitude":34.0530,"longitude":-118.2445}},
  {"transaction_id":"i9j0k1l2","timestamp":"2023-10-26T15:45:00Z","amount":500.00,"currency":"USD","merchant_name":"TechStore","merchant_category":"Electronics","location":{"latitude":34.0550,"longitude":-118.2460}}
], null, 2);
