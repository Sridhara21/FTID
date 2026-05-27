const fs = require('fs');

const primaryPersonas = [
  {
    fullName: "Ananya Iyer",
    pan: "PNGND1694Z",
    aadhaar: "419679142020",
    phoneNumber: "9876543210",
    persona: "Salaried IT Prof.",
    tier: "Tier1",
    creditScore: 785
  },
  {
    fullName: "Prithviraj Chauhan",
    pan: "HPGBT9246V",
    aadhaar: "403393833964",
    phoneNumber: "9876543211",
    persona: "Sales Executive",
    tier: "Tier2",
    creditScore: 640
  },
  {
    fullName: "Savitri Devi Kumari",
    pan: "CPLDH2769D",
    aadhaar: "390892054116",
    phoneNumber: "9876543212",
    persona: "SHG Member",
    tier: "Tier3_Rural",
    creditScore: 450
  }
];

const genericNames = [
  "Venkataramaiah Goud", "Raju Kumar Sahu", "Usha Srivastava", "Anil Mishra", "Priya Ramachandran",
  "Vikas Bhat", "Sudhir Naik", "Nitin Joshi", "Ramakrishna Das", "Kanchana Devi",
  "Rehan Ali", "Manjula Rao", "Anita Kumari Jha", "Bharat Rana", "Rukminibai Gaikwad",
  "Santosh Paswan", "Divya Menon", "Laxmibai Patil", "Aruna Desai", "Bijay Nayak",
  "Vikram Gupta", "Arjun Reddy", "Sushma Singh", "Hanumanthu Reddy", "Bhagyalakshmi Rao",
  "Tanya Malhotra", "Prakash Yadav", "Jagdish Patel", "Arjun Krishnaswamy", "Pradeep Kapoor",
  "Rohan Malhotra", "Siddharth Rao", "Deepa Nair", "Mahesh Jain", "Kabir Sharma",
  "Karthik Subramanian", "Tulsiram Sahu", "Abdul Salam Malik", "Vinod Singhal", "Swathi Krishnan",
  "Santosh Nair", "Meghna Pillai", "Phulwati Yadav", "Vimala Singh", "Hemant Soni",
  "Ajay Srivastava", "Ravi Shankar Dubey", "Shilpa Verma", "Mihir Joshi", "Navya Menon",
  "Vivek Sinha", "Snehal Joshi", "Kishore Jalan", "Harish Sharma", "Saroja Devi",
  "Aarav Singh", "Satish Patil", "Ramchandra Lodhi", "Keya Ghosh", "Dinesh Verma",
  "Shankar Tiwari", "Shivraj Patil", "Kamala Bai Thakur", "Bharat Singh", "Dev Pillai",
  "Annapurna Das", "Poornima Joshi", "Venkatesh Naidu", "Meenakshi Sundaram", "Manish Kumar",
  "Padmaja Menon", "Ajay Kumar Bind", "Narasimhaiah Reddy", "Arvind Batra", "Kailash Meena",
  "Vasantha Lakshmi", "Feroz Ahmed Khan", "Gaurav Sen", "Ishita Sharma", "Kiran Deshmukh",
  "Maya Deshpande", "Sunil Gavaskar", "Kapil Dev", "Sachin Tendulkar", "Rahul Dravid",
  "Virat Kohli", "Rohit Sharma", "MS Dhoni", "Jasprit Bumrah", "Hardik Pandya",
  "Shubman Gill", "Rishabh Pant", "Ravindra Jadeja", "KL Rahul", "Shreyas Iyer",
  "Mohammed Shami", "Suryakumar Yadav", "Kuldeep Yadav", "Axar Patel", "Arshdeep Singh"
];

const personaTypes = ["Farmer", "Auto Driver", "Teacher", "Logistics Lead", "Healthcare Worker", "Rural Artisan", "Urban Tech Lead", "Gig Economy Partner"];
const tiers = ["Tier1", "Tier2", "Tier3_Rural"];

let allPersons = [...primaryPersonas];

genericNames.forEach((name, i) => {
  if (allPersons.length >= 100) return;
  const tier = tiers[i % tiers.length];
  const score = 400 + (i * 5) % 450;
  const phonePrefix = ["98", "99", "88", "77", "91"][i % 5];
  const phoneSuffix = 10000000 + (i * 78423) % 89999999;
  
  let personaObj = {
    fullName: name,
    pan: "ABCDE" + (1040 + i) + "F",
    aadhaar: "99990000" + (1040 + i),
    phoneNumber: "" + phonePrefix + phoneSuffix,
    persona: personaTypes[i % personaTypes.length],
    tier: tier,
    creditScore: score,
  };
  allPersons.push(personaObj);
});

// CREATE CSV
let csvData = "FullName,PAN_Number,Aadhaar_ID,Phone_Number,Password_Required,Persona,Tier,CreditScore\n";

allPersons.forEach(p => {
  csvData += "\"" + p.fullName + "\",\"" + p.pan + "\",\"" + p.aadhaar + "\",\"" + p.phoneNumber + "\",\"(Set by You during login)\",\"" + p.persona + "\",\"" + p.tier + "\"," + p.creditScore + "\n";
});

fs.writeFileSync('C:\\Users\\user\\3D Objects\\New folder\\FTID\\Persona_Registration_Credentials.csv', csvData);
console.log("CSV Exported successfully!");
