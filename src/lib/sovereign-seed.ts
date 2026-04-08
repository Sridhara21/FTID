
/**
 * @fileOverview Sovereign Seed Registry for Prototype Personas.
 * This file contains the master list of 100 personas for the FTID prototype.
 */

export interface SeedPersona {
  fullName: string;
  pan: string;
  aadhaar: string;
  email: string;
  persona: string;
  tier: string;
  creditScore: number;
  incomeAnnual: number;
  flowHistory: number[];
  transactions: any[];
  investments: any[];
  bankAccounts: any[];
  spendingBreakdown?: Record<string, number>;
  liabilities?: any[];
  welfare?: any[];
}

const generateSeedData = (): SeedPersona[] => {
  const users = [
    { name: "Ananya Iyer", pan: "PNGND1694Z", aadhaar: "419679142020", persona: "Salaried IT Professional", tier: "Tier1", score: 539, income: 1759794 },
    { name: "Prithviraj Chauhan", pan: "HPGBT9246V", aadhaar: "403393833964", persona: "Sales Executive", tier: "Tier2", score: 528, income: 673738 },
    { name: "Savitri Devi Kumari", pan: "CPLDH2769D", aadhaar: "390892054116", persona: "SHG Member", tier: "Tier3_Rural", score: 322, income: 138235 },
    { name: "Siya Nair", pan: "OIHWR0555Z", aadhaar: "656600409173", persona: "Freelance Designer", tier: "Tier1", score: 563, income: 577282 },
    { name: "Ramesh Malhotra", pan: "ZPYYZ2723K", aadhaar: "763530455618", persona: "Small Business Owner", tier: "Tier2", score: 536, income: 986555 },
    { name: "Venkataramaiah Goud", pan: "QDQLD9872Q", aadhaar: "824964696326", persona: "Farmer", tier: "Tier3_Rural", score: 359, income: 216270 },
    { name: "Raju Kumar Sahu", pan: "SAALG3572S", aadhaar: "682830706083", persona: "Auto Driver", tier: "Tier3_Rural", score: 374, income: 230113 },
    { name: "Usha Srivastava", pan: "MTGSV0528H", aadhaar: "405107368262", persona: "School Teacher", tier: "Tier2", score: 707, income: 504130 },
    { name: "Anil Mishra", pan: "YZRPV5598V", aadhaar: "564742052996", persona: "Sales Executive", tier: "Tier2", score: 574, income: 405270 },
    { name: "Priya Ramachandran", pan: "PGWKH8991G", aadhaar: "877381229877", persona: "IT Lead", tier: "Tier1", score: 800, income: 1517778 },
    { name: "Vikas Bhat", pan: "SEHMW8576X", aadhaar: "611425015377", persona: "Sales Manager", tier: "Tier2", score: 625, income: 517231 },
    { name: "Sudhir Naik", pan: "IPVAD5980F", aadhaar: "315630676378", persona: "Retail Sales", tier: "Tier2", score: 497, income: 335579 },
    { name: "Nitin Joshi", pan: "MWOCP5245R", aadhaar: "256444374528", persona: "Logistics Exec", tier: "Tier2", score: 605, income: 387854 },
    { name: "Ramakrishna Das", pan: "SVDCT6187T", aadhaar: "430361114970", persona: "Auto Driver", tier: "Tier3_Rural", score: 344, income: 273693 },
    { name: "Kanchana Devi", pan: "EWJBK1424A", aadhaar: "881848325324", persona: "Artisan", tier: "Tier3_Rural", score: 412, income: 82766 },
    { name: "Rehan Ali", pan: "RCWXH9109R", aadhaar: "696694218888", persona: "UI Designer", tier: "Tier1", score: 578, income: 618381 },
    { name: "Manjula Rao", pan: "CWNYS1216A", aadhaar: "575242550217", persona: "Govt Teacher", tier: "Tier2", score: 588, income: 445279 },
    { name: "Anita Kumari Jha", pan: "COEMV9320A", aadhaar: "302271992838", persona: "Private Teacher", tier: "Tier2", score: 600, income: 491168 },
    { name: "Bharat Rana", pan: "KGFCF2899Q", aadhaar: "725856894957", persona: "Traders Hub", tier: "Tier2", score: 670, income: 751451 },
    { name: "Rukminibai Gaikwad", pan: "TVCNO3995I", aadhaar: "941239166514", persona: "Textile Worker", tier: "Tier3_Rural", score: 212, income: 164526 },
    { name: "Santosh Paswan", pan: "IZYTB2625A", aadhaar: "444839204198", persona: "Delivery Agent", tier: "Tier3_Rural", score: 410, income: 213300 },
    { name: "Divya Menon", pan: "SEMWM4819F", aadhaar: "656609084591", persona: "Fullstack Dev", tier: "Tier1", score: 795, income: 2616396 },
    { name: "Laxmibai Patil", pan: "DUWPD8582E", aadhaar: "890864186586", persona: "Rural SHG", tier: "Tier3_Rural", score: 376, income: 121636 },
    { name: "Aruna Desai", pan: "ZAVEO1106T", aadhaar: "390908056298", persona: "Principal", tier: "Tier2", score: 686, income: 612190 },
    { name: "Bijay Nayak", pan: "AYTQH0355F", aadhaar: "718711835978", persona: "Taxi Fleet", tier: "Tier3_Rural", score: 383, income: 205682 },
    { name: "Vikram Gupta", pan: "SNUCK2089G", aadhaar: "502613451445", persona: "Merchant", tier: "Tier2", score: 653, income: 1017150 },
    { name: "Arjun Reddy V.", pan: "JZJUK4104E", aadhaar: "587351411689", persona: "Field Sales", tier: "Tier2", score: 522, income: 349982 },
    { name: "Santosh Sharma", pan: "AUEQO8159W", aadhaar: "982421475383", persona: "Small Shop", tier: "Tier2", score: 669, income: 1078550 },
    { name: "Sushma Singh C.", pan: "DERJL1822Q", aadhaar: "237530602055", persona: "Senior Teacher", tier: "Tier2", score: 547, income: 658059 },
    { name: "Hanumanthu Reddy", pan: "WYKUC4197W", aadhaar: "308912674703", persona: "Dairy Farmer", tier: "Tier3_Rural", score: 310, income: 170408 },
    { name: "Bhagyalakshmi Rao", pan: "RPVHB9633Y", aadhaar: "682817834954", persona: "SHG Leader", tier: "Tier3_Rural", score: 322, income: 210885 },
    { name: "Tanya Malhotra", pan: "OAOJU5831J", aadhaar: "847775201590", persona: "Brand Designer", tier: "Tier1", score: 657, income: 481445 },
    { name: "Prakash Yadav", pan: "OQRLD1410T", aadhaar: "867756491051", persona: "Auto Logistics", tier: "Tier3_Rural", score: 446, income: 285101 },
    { name: "Supriya Ghosh", pan: "OIGRL2489L", aadhaar: "547075753829", persona: "English Teacher", tier: "Tier2", score: 717, income: 395973 },
    { name: "Jagdish Patel", pan: "AQNTU1443S", aadhaar: "617096774569", persona: "Agri-Business", tier: "Tier3_Rural", score: 442, income: 129913 },
    { name: "Ramswaroop Yadav", pan: "EVDYR8887Z", aadhaar: "816149677768", persona: "Farmer", tier: "Tier3_Rural", score: 318, income: 227820 },
    { name: "Balu Reddy N.", pan: "WSFVR2270O", aadhaar: "892598759284", persona: "Cab Captain", tier: "Tier3_Rural", score: 456, income: 229906 },
    { name: "Naresh Agarwal", pan: "SZHCW9980Q", aadhaar: "590720335559", persona: "Hardware Store", tier: "Tier2", score: 666, income: 515349 },
    { name: "Arjun Krishnaswamy", pan: "EASPF4516D", aadhaar: "342941963854", persona: "Cloud Engineer", tier: "Tier1", score: 698, income: 1951474 },
    { name: "Pradeep Kapoor", pan: "IVGIK9957A", aadhaar: "321652745148", persona: "Garment Biz", tier: "Tier2", score: 631, income: 687647 },
    { name: "Rohan Malhotra", pan: "HNLHM4097F", aadhaar: "287817149189", persona: "Systems Analyst", tier: "Tier1", score: 855, income: 2407896 },
    { name: "Siddharth Rao", pan: "JQLGJ8983L", aadhaar: "854695741319", persona: "Cyber Architect", tier: "Tier1", score: 630, income: 1941944 },
    { name: "Pushpabai Deore", pan: "PCGTD6271M", aadhaar: "899244570225", persona: "Craftswoman", tier: "Tier3_Rural", score: 316, income: 202002 },
    { name: "Deepa Nair", pan: "BOKNM0242O", aadhaar: "892674702572", persona: "TGT Teacher", tier: "Tier2", score: 580, income: 391144 },
    { name: "Mahesh Jain", pan: "KENIN7169V", aadhaar: "434801751738", persona: "Stationery Biz", tier: "Tier2", score: 652, income: 459196 },
    { name: "Suresh Chandra G.", pan: "DGTZA4170F", aadhaar: "560773562060", persona: "Kirana Hub", tier: "Tier2", score: 648, income: 493459 },
    { name: "Kabir Sharma", pan: "YXPCB3637N", aadhaar: "994860898295", persona: "Logo Designer", tier: "Tier1", score: 551, income: 986833 },
    { name: "Karthik Subramanian", pan: "BCOJL6703N", aadhaar: "873119514064", persona: "DevOps Engineer", tier: "Tier1", score: 608, income: 1910460 },
    { name: "Tulsiram Sahu", pan: "UQMOJ7598W", aadhaar: "880984703793", persona: "Crops Farmer", tier: "Tier3_Rural", score: 411, income: 355146 },
    { name: "Abdul Salam Malik", pan: "NDPIA0048T", aadhaar: "761641486702", persona: "Transport Pilot", tier: "Tier3_Rural", score: 496, income: 220425 },
    { name: "Vinod Singhal", pan: "LSZBE1868K", aadhaar: "230970494159", persona: "Retailer", tier: "Tier2", score: 638, income: 458558 },
    { name: "Swathi Krishnan", pan: "FPIAI1326J", aadhaar: "344202289157", persona: "Sr. Architect", tier: "Tier1", score: 677, income: 2522505 },
    { name: "Santosh Nair", pan: "LZISA6096J", aadhaar: "396177203534", persona: "Medical Rep", tier: "Tier2", score: 612, income: 516936 },
    { name: "Meghna Pillai", pan: "APVHT7025R", aadhaar: "700886394103", persona: "Lead Dev", tier: "Tier1", score: 671, income: 1851184 },
    { name: "Phulwati Yadav", pan: "PYEPH5826Q", aadhaar: "958778349458", persona: "SHG Member", tier: "Tier3_Rural", score: 377, income: 84852 },
    { name: "Vimala Singh", pan: "OQXUI5914W", aadhaar: "975924093314", persona: "SHG Artisan", tier: "Tier3_Rural", score: 399, income: 139957 },
    { name: "Hemant Soni", pan: "OJNZP0608U", aadhaar: "877653033579", persona: "Small Biz", tier: "Tier2", score: 670, income: 443894 },
    { name: "Gajanan Bhosale", pan: "XUFNS9778F", aadhaar: "618160653773", persona: "Field Farmer", tier: "Tier3_Rural", score: 421, income: 201297 },
    { name: "Ajay Srivastava", pan: "RLMBZ6794A", aadhaar: "997651463266", persona: "Area Manager", tier: "Tier2", score: 641, income: 356949 },
    { name: "Ravi Shankar D.", pan: "VVOXZ3468W", aadhaar: "203844322008", persona: "Sales Officer", tier: "Tier2", score: 515, income: 529968 },
    { name: "Shilpa Verma", pan: "GZAOQ6209R", aadhaar: "309337706458", persona: "Science Teacher", tier: "Tier2", score: 611, income: 646714 },
    { name: "Mihir Joshi", pan: "XXQVW7386Y", aadhaar: "557066379615", persona: "Visual Artist", tier: "Tier1", score: 579, income: 1231144 },
    { name: "Navya Menon", pan: "JKARO8788M", aadhaar: "260471956159", persona: "UX Researcher", tier: "Tier1", score: 726, income: 1099180 },
    { name: "Bhagwandas K.", pan: "SYYWC1770W", aadhaar: "619648414715", persona: "Cotton Farmer", tier: "Tier3_Rural", score: 498, income: 218974 },
    { name: "Vivek Sinha", pan: "QFXYU1794O", aadhaar: "653866465738", persona: "Solution Head", tier: "Tier1", score: 780, income: 2731548 },
    { name: "Snehal Joshi", pan: "NQZNK7678X", aadhaar: "725926571711", persona: "Module Lead", tier: "Tier1", score: 680, income: 1454135 },
    { name: "Kishore Jalan", pan: "QZEDI8596F", aadhaar: "945899696377", persona: "Fab Biz", tier: "Tier2", score: 746, income: 710908 },
    { name: "Harish Sharma", pan: "EKQQI0328F", aadhaar: "326348178057", persona: "Sales Exec", tier: "Tier2", score: 666, income: 332059 },
    { name: "Saroja Devi", pan: "BQJZO7117F", aadhaar: "333316631905", persona: "Sr. Teacher", tier: "Tier2", score: 650, income: 618059 },
    { name: "Aarav Singh", pan: "RLNGT5847J", aadhaar: "782203663736", persona: "Illustrator", tier: "Tier1", score: 634, income: 762791 },
    { name: "Devchand Jat", pan: "MXOWH4984R", aadhaar: "362259529067", persona: "Grain Farmer", tier: "Tier3_Rural", score: 296, income: 184538 },
    { name: "Satish Patil", pan: "OSJZD4010U", aadhaar: "286856721845", persona: "Zonal Sales", tier: "Tier2", score: 491, income: 657798 },
    { name: "Mohammed I. S.", pan: "WXJAR5553G", aadhaar: "341173419676", persona: "Heavy Driver", tier: "Tier3_Rural", score: 590, income: 283572 },
    { name: "Ramchandra Lodhi", pan: "OGFKF9218X", aadhaar: "591475164961", persona: "Farmer Lead", tier: "Tier3_Rural", score: 289, income: 258182 },
    { name: "Keya Ghosh", pan: "CLNFZ4016Y", aadhaar: "662107665217", persona: "Concept Artist", tier: "Tier1", score: 531, income: 530307 },
    { name: "Dinesh Verma", pan: "XZXOH6770B", aadhaar: "265894156197", persona: "Cargo Driver", tier: "Tier3_Rural", score: 579, income: 303630 },
    { name: "Shankar Tiwari", pan: "UKUAC4019Y", aadhaar: "521771560108", persona: "Fleet Operator", tier: "Tier3_Rural", score: 494, income: 194937 },
    { name: "Shivraj Patil", pan: "MJYCF9001P", aadhaar: "845075467798", persona: "Sugar Farmer", tier: "Tier3_Rural", score: 380, income: 143125 },
    { name: "Kamala Bai T.", pan: "ZBPHM7435O", aadhaar: "972462721536", persona: "SHG Craft", tier: "Tier3_Rural", score: 304, income: 194198 },
    { name: "Bharat S. D.", pan: "LNWWS2425A", aadhaar: "503337334110", persona: "Soil Expert Farmer", tier: "Tier3_Rural", score: 509, income: 148278 },
    { name: "Dev Pillai", pan: "BDLIX3508N", aadhaar: "924968628019", persona: "UX Designer", tier: "Tier1", score: 619, income: 1230903 },
    { name: "Annapurna Das", pan: "TEYFK0736R", aadhaar: "572323141869", persona: "SHG Support", tier: "Tier3_Rural", score: 350, income: 171646 },
    { name: "Poornima Joshi", pan: "QJLNI9569I", aadhaar: "363177348543", persona: "Math Teacher", tier: "Tier2", score: 482, income: 563949 },
    { name: "Venkatesh Naidu", pan: "ADTRW4100F", aadhaar: "665083517267", persona: "Auto Pilot", tier: "Tier3_Rural", score: 385, income: 290679 },
    { name: "Meenakshi S.", pan: "JAXGL2113S", aadhaar: "901983617969", persona: "Rural Craft", tier: "Tier3_Rural", score: 397, income: 84331 },
    { name: "Manish K. T.", pan: "MDITY0373I", aadhaar: "534148992501", persona: "Sales Officer", tier: "Tier2", score: 693, income: 642414 },
    { name: "Padmaja Menon", pan: "AISHL3181G", aadhaar: "539767709540", persona: "Arts Teacher", tier: "Tier2", score: 556, income: 373241 },
    { name: "Ajay Kumar Bind", pan: "EXRAN1313W", aadhaar: "651093108098", persona: "Transport Exec", tier: "Tier3_Rural", score: 356, income: 258965 },
    { name: "Narasimhaiah R.", pan: "PXPJO7387Y", aadhaar: "375300710126", persona: "Pulse Farmer", tier: "Tier3_Rural", score: 441, income: 242687 },
    { name: "Arvind Batra", pan: "IXELX2344I", aadhaar: "352793936405", persona: "Grocery Hub", tier: "Tier2", score: 660, income: 455628 },
    { name: "Kailash Meena", pan: "OEVUY6535O", aadhaar: "993579419504", persona: "Wheat Farmer", tier: "Tier3_Rural", score: 496, income: 178950 },
    { name: "Vasantha Lakshmi", pan: "EMCSB0929M", aadhaar: "998169705297", persona: "Primary Teacher", tier: "Tier2", score: 509, income: 325634 },
    { name: "Feroz Ahmed K.", pan: "ZWLFT5789Z", aadhaar: "517001840121", persona: "Logistics Captain", tier: "Tier3_Rural", score: 460, income: 224583 },
    { name: "Arati Mukherji", pan: "ARMBX1122K", aadhaar: "112233445566", persona: "Web Architect", tier: "Tier1", score: 710, income: 1850000 },
    { name: "Gopal Krishna", pan: "GKPKX3344L", aadhaar: "223344556677", persona: "Dairy Biz", tier: "Tier3_Rural", score: 420, income: 310000 },
    { name: "Sunita Reddy", pan: "SNTRX5566M", aadhaar: "334455667788", persona: "Social Worker", tier: "Tier2", score: 590, income: 420000 },
    { name: "Irfan Pathan", pan: "IRFPX7788N", aadhaar: "445566778899", persona: "Delivery Lead", tier: "Tier3_Rural", score: 480, income: 295000 },
    { name: "Leela Samson", pan: "LELSX9900O", aadhaar: "556677889900", persona: "Dance Teacher", tier: "Tier2", score: 610, income: 510000 },
    { name: "Vikram Seth", pan: "VKSRX1133P", aadhaar: "667788990011", persona: "Consultant", tier: "Tier1", score: 740, income: 2100000 },
    { name: "Fatima Bi", pan: "FTMBX2244Q", aadhaar: "778899001122", persona: "SHG Leader", tier: "Tier3_Rural", score: 395, income: 185000 }
  ];

  return users.map(u => ({
    fullName: u.name,
    pan: u.pan,
    aadhaar: u.aadhaar,
    email: u.name.toLowerCase().replace(/\s+/g, '.') + "@ftid.in",
    persona: u.persona,
    tier: u.tier,
    creditScore: u.score,
    incomeAnnual: u.income,
    flowHistory: [u.score + 50, u.score + 40, u.score + 25, u.score + 10, u.score + 5, u.score],
    bankAccounts: [{ bank: "Institutional Node", balance: u.income / 12 }],
    transactions: [
      { date: "2026-03-01", desc: "Institutional Settlement", amount: u.income / 12, class: "Income", channel: "FTID Core" },
      { date: "2026-03-05", desc: "Essential Flow", amount: -(u.income / 40), class: "Essential", channel: "Direct Route" },
      { date: "2026-03-12", desc: "Regulatory Deduct", amount: -(u.income / 100), class: "Tax", channel: "ITD Node" }
    ],
    investments: [
      { name: "Sovereign Bond", type: "Bond", value: u.income / 4, taxClass: "Exempt" }
    ],
    spendingBreakdown: { "Essential": u.income / 20, "Lifestyle": u.income / 50, "Investments": u.income / 15 }
  }));
};

export const sovereignRegistry: SeedPersona[] = generateSeedData();

export const getPersonaByKeys = (pan: string, aadhaar: string): SeedPersona | null => {
  const panInput = pan?.toUpperCase().trim();
  const aadhaarInput = aadhaar?.replace(/[-\s]/g, '').trim();
  
  return sovereignRegistry.find(p => 
    (panInput && p.pan.toUpperCase() === panInput) || 
    (aadhaarInput && p.aadhaar === aadhaarInput)
  ) || null;
};
