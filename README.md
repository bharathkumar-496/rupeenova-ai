# 💸 RupeeNova AI

> **Personal Finance Advisor & Micro-Economics Operating System for Indian College Students**

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-brightgreen?logo=vercel&logoColor=white)](https://rupeenova-ai.vercel.app)
[![React 18](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Capacitor Android](https://img.shields.io/badge/Capacitor-Android%20Native-3ddc84?logo=android&logoColor=white)](https://capacitorjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌐 Live Application
* **Production Web & PWA**: [https://rupeenova-ai.vercel.app](https://rupeenova-ai.vercel.app)
* **Author**: [@bharathkumar-496](https://github.com/bharathkumar-496)

---

## 🎯 The Problem

Traditional personal finance apps (Mint, Splitwise, Walnut, YNAB) were designed for salaried 9-to-5 corporate employees with predictable monthly incomes, credit cards, and mortgages. They fail Indian university students in three fundamental ways:

1. **Lump Sum Allowance vs. Monthly Salary**: Students manage semester lump sums (scholarships, educational loans) or monthly parent allowances. Traditional apps don't calculate a dynamic *daily survival burn rate*.
2. **Hidden Food Waste (Mess vs. Delivery)**: Hostelites pay ₹3,500–₹4,500/month upfront for mandatory mess food, yet spend ₹2,500+ on Swiggy/Zomato when skipping meals, effectively double-paying for food.
3. **Friction in Peer Bill Splitting**: Splitwise forces every roommate to create an account and install heavy apps. Students just want to enter a Swiggy bill, pick 4 roomies, and get an instant UPI QR code and WhatsApp reminder.

---

## ✨ Key Standout Features

### 1. ⏱️ Daily Safe-Spend Runway Clock
* Dynamically calculates your safe disposable daily allowance based on the exact days remaining until the next pocket money deposit or scholarship.
* Prevents the common *"broke by the 20th"* cash crunch.

### 2. 🍕 Roommate Food Split & Dynamic Indian UPI QR Engine
* Quick-split food delivery orders (Swiggy, Zomato, Canteen, Groceries) by number of room persons.
* **Instant UPI QR Generation**: Generates real-time NPCI-compliant payment QR codes (`upi://pay?pa=...&am=...&cu=INR`) scannable with Google Pay, PhonePe, Paytm, and BHIM.
* **1-Tap WhatsApp Reminder Generator**: Generates polite or friendly hostel reminder texts with 1-click clipboard copy.

### 3. 🔥 Hostel Mess vs. Swiggy Waste Radar
* Quantifies unrecovered prepaid mess meal costs (at ₹63.33/meal) when skipping meals for food delivery.
* Recommends high-ROI "Hostel Hybrid Canteen Swaps" (e.g., eat mess rice/dal + buy a ₹30 canteen omelette instead of ordering a ₹280 Swiggy biryani, saving ₹250/meal).

### 4. 🤖 Pre-Purchase "Can I Afford This?" AI Advisor
* Proactive simulation agent that evaluates trade-offs before a purchase:
  > *"If you order this ₹380 pizza tonight, your daily budget drops from ₹246/day to ₹180/day for the next 12 days."*
* Suggests student-specific hacks, book-bank alternatives, and survival plans.

### 5. 🍏 Apple-Inspired Minimalist Design
* Clean OLED black (`#000000`) canvas with iOS squircle cards (`#1c1c1e`).
* Zero sentence clutter or reading fatigue — focused on bold typography, micro-labels, and fluid touch physics.
* Locked vertical scrolling to eliminate all horizontal shift on mobile screens.

### 6. 📱 Proprietary Standalone Android App
* Installable as a progressive web app (PWA) with high-res launcher icons directly from Chrome.
* Native Android Studio project generated and synced via Capacitor (`android/` with `com.studentfinance.rupeenova`, `AndroidManifest.xml`, Gradle build system).

---

## 🛠️ Tech Stack

* **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons, Canvas Confetti
* **Android Native Runtime**: Capacitor 8, Android SDK
* **Payment Protocols**: Dynamic UPI QR encoding (`qrcode`), WhatsApp deep linking
* **Deployment**: Vercel Serverless Edge, SPA URL Rewrites

---

## 🚀 Getting Started

### Prerequisites
* Node.js 18+
* npm or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bharathkumar-496/rupeenova-ai.git
   cd rupeenova-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Sync with Android Studio**:
   ```bash
   npx cap sync android
   npx cap open android
   ```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
