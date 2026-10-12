import React, { useState, useEffect } from 'react';
import { useFinance } from '../context/FinanceContext';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';
import { Plus, Minus, QrCode, Share2, Check, Copy } from 'lucide-react';

export default function RoommateFoodSplit() {
  const { profile, foodSplits, addFoodSplit } = useFinance();

  const [totalBill, setTotalBill] = useState('840');
  const [numPersons, setNumPersons] = useState(4);
  const [foodCategory, setFoodCategory] = useState('Swiggy');
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [qrUrl, setQrUrl] = useState('');

  const bill = parseFloat(totalBill) || 0;
  const perPerson = Math.round((bill / Math.max(1, numPersons)) * 100) / 100;
  const totalCollect = Math.round((perPerson * Math.max(0, numPersons - 1)) * 100) / 100;

  useEffect(() => {
    if (perPerson > 0) {
      const upi = `upi://pay?pa=${encodeURIComponent(profile.upiId)}&pn=${encodeURIComponent(profile.name)}&am=${perPerson}&cu=INR&tn=Food%20Split`;
      QRCode.toDataURL(upi, { width: 160, margin: 1, color: { dark: '#000000', light: '#ffffff' } })
        .then(url => setQrUrl(url))
        .catch(console.error);
    }
  }, [perPerson, profile.upiId, profile.name]);

  const copyWhatsApp = () => {
    const text = `Hey! ₹${perPerson} is your share for ${foodCategory} (₹${bill} split across ${numPersons}). UPI: ${profile.upiId}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    if (bill <= 0) return;
    addFoodSplit({
      title: `${foodCategory} Food Bill`,
      category: foodCategory,
      totalAmount: bill,
      totalPersons: numPersons,
      paidBy: 'You'
    });
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
  };

  const categories = ['Swiggy', 'Zomato', 'Canteen', 'Groceries'];

  return (
    <div className="space-y-4 max-w-sm mx-auto pb-4">
      
      {/* Category Pills */}
      <div className="flex justify-between p-1 rounded-2xl bg-[#1c1c1e]">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFoodCategory(cat)}
            className={`flex-1 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
              foodCategory === cat ? 'bg-[#30d158] text-black font-bold' : 'text-slate-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Apple Calculator Bill Input */}
      <div className="apple-card p-5 text-center space-y-2">
        <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Total Bill</span>
        <div className="flex items-center justify-center space-x-1 font-mono">
          <span className="text-3xl text-slate-400">₹</span>
          <input
            type="number"
            value={totalBill}
            onChange={(e) => setTotalBill(e.target.value)}
            className="w-36 text-center text-4xl font-extrabold text-white bg-transparent focus:outline-none"
            placeholder="0"
          />
        </div>

        {/* Stepper: Persons */}
        <div className="flex items-center justify-between pt-3 px-2">
          <button
            onClick={() => setNumPersons(Math.max(1, numPersons - 1))}
            className="w-9 h-9 rounded-full bg-[#2c2c2e] text-white flex items-center justify-center active:scale-95"
          >
            <Minus className="w-4 h-4" />
          </button>

          <span className="text-sm font-bold text-white font-mono">
            {numPersons} Persons
          </span>

          <button
            onClick={() => setNumPersons(numPersons + 1)}
            className="w-9 h-9 rounded-full bg-[#2c2c2e] text-white flex items-center justify-center active:scale-95"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hero Result */}
      <div className="apple-card p-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Each Pays</span>
          <div className="text-2xl font-black text-[#30d158] font-mono">₹{perPerson}</div>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Total to Collect</span>
          <div className="text-base font-bold text-white font-mono">₹{totalCollect}</div>
        </div>
      </div>

      {/* 2 Quick Apple Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setShowQR(!showQR)}
          className="py-3 apple-btn-secondary text-xs flex items-center justify-center space-x-1.5 font-semibold"
        >
          <QrCode className="w-4 h-4" />
          <span>{showQR ? 'Hide QR' : 'Show UPI QR'}</span>
        </button>

        <button
          onClick={copyWhatsApp}
          className="py-3 apple-btn-secondary text-xs flex items-center justify-center space-x-1.5 font-semibold"
        >
          {copied ? <Check className="w-4 h-4 text-[#30d158]" /> : <Share2 className="w-4 h-4" />}
          <span>{copied ? 'Copied!' : 'WhatsApp'}</span>
        </button>
      </div>

      {/* UPI QR Display (Collapsible) */}
      {showQR && (
        <div className="apple-card p-4 text-center space-y-2 animate-fadeIn">
          <div className="inline-block p-2 bg-white rounded-2xl">
            {qrUrl && <img src={qrUrl} alt="UPI QR" className="w-36 h-36 mx-auto" />}
          </div>
          <p className="text-[11px] text-slate-400 font-mono">Scan to pay ₹{perPerson} via UPI</p>
        </div>
      )}

      {/* Save Split Button */}
      <button
        onClick={handleSave}
        className="w-full py-3 apple-btn-primary text-xs font-bold"
      >
        Save Split
      </button>

    </div>
  );
}
