export const INITIAL_STUDENT_PROFILE = {
  name: "Bharath",
  college: "National Institute of Technology (NIT)",
  course: "B.Tech Computer Science (3rd Year)",
  hostelRoom: "B-Block, Room 204",
  monthlyAllowance: 10000, // Monthly pocket money from parents/stipend
  currentBalance: 3450,
  daysLeftInCycle: 14,
  upiId: "bharath@okhdfcbank",
  hostelMessPlan: {
    monthlyFee: 3800,
    mealsPerMonth: 60, // 2 main meals/day (Lunch + Dinner)
    costPerMeal: 63.33,
    skippedMealsCount: 9,
    outsideFoodSpentOnSkippedDays: 2450
  }
};

export const INITIAL_ROOMMATES = [
  { id: "1", name: "Rohan K.", roomNo: "204", upi: "rohan204@ybl", phone: "+919876543210", avatar: "👨‍💻", pendingBalance: 180 },
  { id: "2", name: "Aakash V.", roomNo: "204", upi: "aakash.v@paytm", phone: "+919812345678", avatar: "🎮", pendingBalance: -250 },
  { id: "3", name: "Vikram S.", roomNo: "204", upi: "vikram_s@oksbi", phone: "+919765432109", avatar: "🏏", pendingBalance: 0 },
  { id: "4", name: "Kunal M.", roomNo: "205", upi: "kunal_m@ibl", phone: "+919834567890", avatar: "🎧", pendingBalance: 120 }
];

export const INITIAL_FOOD_SPLITS = [
  {
    id: "split-1",
    title: "Midnight Biryani Order (Meghana Foods)",
    category: "Swiggy",
    totalAmount: 960,
    totalPersons: 4,
    perPersonAmount: 240,
    paidBy: "You",
    date: "Yesterday, 11:45 PM",
    participants: ["You", "Rohan K.", "Aakash V.", "Vikram S."],
    settledCount: 2,
    status: "Partially Settled"
  },
  {
    id: "split-2",
    title: "Hostel Maggi (12-pack) & Real Juice bulk",
    category: "Groceries",
    totalAmount: 480,
    totalPersons: 4,
    perPersonAmount: 120,
    paidBy: "Rohan K.",
    date: "3 days ago",
    participants: ["You", "Rohan K.", "Aakash V.", "Vikram S."],
    settledCount: 4,
    status: "Settled"
  },
  {
    id: "split-3",
    title: "Campus Canteen Chai & Samosa Combo",
    category: "Canteen",
    totalAmount: 150,
    totalPersons: 3,
    perPersonAmount: 50,
    paidBy: "You",
    date: "4 days ago",
    participants: ["You", "Aakash V.", "Kunal M."],
    settledCount: 2,
    status: "Partially Settled"
  }
];

export const INITIAL_RECENT_TRANSACTIONS = [
  { id: "tx-1", title: "Zomato - Shawarma & Coke", category: "Food Delivery", amount: -280, date: "Today", messSkipped: true },
  { id: "tx-2", title: "Campus Canteen Snacks", category: "Campus", amount: -45, date: "Today", messSkipped: false },
  { id: "tx-3", title: "Rohan settled Biryani via GPay", category: "UPI Received", amount: 240, date: "Yesterday", isCredit: true },
  { id: "tx-4", title: "Lab Record Printout & Xerox", category: "Academics", amount: -120, date: "2 days ago", messSkipped: false },
  { id: "tx-5", title: "Swiggy - Butter Chicken + Naan", category: "Food Delivery", amount: -380, date: "3 days ago", messSkipped: true },
  { id: "tx-6", title: "Hostel Laundry Share", category: "Utility", amount: -90, date: "4 days ago", messSkipped: false },
];

export const VERIFIED_STUDENT_PERKS = [
  {
    id: "perk-1",
    title: "Spotify Premium Student",
    regularPrice: "₹119/mo",
    studentPrice: "₹59/mo",
    savings: "50% OFF",
    category: "Entertainment",
    badge: "Verified Instant",
    howToClaim: "Use your .edu or college student ID card on Spotify Student Portal",
    url: "https://www.spotify.com/in-en/student/"
  },
  {
    id: "perk-2",
    title: "Amazon Prime Youth Offer",
    regularPrice: "₹1,499/yr",
    studentPrice: "₹749/yr (Cashback)",
    savings: "50% CASHBACK",
    category: "Shopping & Video",
    badge: "Age 18-24 Special",
    howToClaim: "Verify age with Aadhaar/College ID in Amazon app to get instant ₹750 cashback voucher",
    url: "https://www.amazon.in/prime"
  },
  {
    id: "perk-3",
    title: "GitHub Student Developer Pack",
    regularPrice: "₹1,20,000+ value",
    studentPrice: "100% FREE",
    savings: "FREE CLOUD & TOOLS",
    category: "Tech & Coding",
    badge: "Top Pick for Engineers",
    howToClaim: "Free JetBrains All Products, Free .me domain from Namecheap, GitHub Copilot free, Canva Pro free!",
    url: "https://education.github.com/pack"
  },
  {
    id: "perk-4",
    title: "Apple Education Store Discount",
    regularPrice: "MRP Standard",
    studentPrice: "Up to ₹10,000 OFF + Free AirPods",
    savings: "SAVE ₹10k+",
    category: "Hardware",
    badge: "Back to School",
    howToClaim: "Verify via UNiDAYS with your college email ID before buying Mac or iPad",
    url: "https://www.apple.com/in-edu/store"
  },
  {
    id: "perk-5",
    title: "IRCTC / State Metro Student Pass",
    regularPrice: "Full Transit Fare",
    studentPrice: "33% to 50% Concession",
    savings: "50% COMMUTE SAVINGS",
    category: "Travel",
    badge: "Govt Subsidized",
    howToClaim: "Get student concession certificate signed by College Dean / Principal and submit at Railway / Metro counter",
    url: "https://www.irctc.co.in"
  },
  {
    id: "perk-6",
    title: "YouTube Premium Student",
    regularPrice: "₹129/mo",
    studentPrice: "₹79/mo",
    savings: "₹50/mo OFF",
    category: "Entertainment",
    badge: "Ad-Free & Music",
    howToClaim: "Annual student verification via SheerID",
    url: "https://www.youtube.com/premium/student"
  }
];

export const JUDGE_COMPARISON_MATRIX = [
  {
    feature: "Student Runway & Daily Safe-Spend",
    rupeeNova: "Yes (Live daily burn rate till next pocket money/scholarship)",
    splitwise: "No (Only a ledger)",
    walnut: "No (Monthly salary focus)",
    credMint: "No (Credit card & loan focus)"
  },
  {
    feature: "Roommate Food Quick Split & 1-Tap UPI",
    rupeeNova: "Yes (Enter food total, select room persons, dynamic UPI QR + WhatsApp nudge)",
    splitwise: "Complex setup, requires all to install app, no instant QR",
    walnut: "No split engine",
    credMint: "No peer split"
  },
  {
    feature: "Hostel Mess vs. Swiggy Waste Radar",
    rupeeNova: "Yes (Shows ₹ wasted by skipping prepaid hostel mess)",
    splitwise: "No",
    walnut: "No",
    credMint: "No"
  },
  {
    feature: "Pre-Purchase 'Can I Afford This?' AI Agent",
    rupeeNova: "Yes (Instant simulation: impact on daily survival fund & trade-offs)",
    splitwise: "No",
    walnut: "No (Only retrospective past SMS analysis)",
    credMint: "No (Tries to push loans)"
  },
  {
    feature: "Emergency 'Chai-Maggi' Survival Mode",
    rupeeNova: "Yes (Campus free events, ₹20 canteen hacks, freeze triggers)",
    splitwise: "No",
    walnut: "No",
    credMint: "No"
  },
  {
    feature: "Indian Student Perks & Perks Arbitrage",
    rupeeNova: "Yes (Curated ₹59 Spotify, 50% Prime, GitHub Dev Pack, Apple UNiDAYS)",
    splitwise: "No",
    walnut: "No",
    credMint: "Only credit card reward points"
  }
];
