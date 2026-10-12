import React, { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import confetti from 'canvas-confetti';

export default function MessArbitrageTracker() {
  const { profile, messMealCost, messWasteDirect, totalOutsideSpentOnMessDays, totalMessArbitrageLoss, logMessMealSkipped } = useFinance();
  const [cost, setCost] = useState('280');
  const [desc, setDesc] = useState('Swiggy Dinner');

  const handleRecord = (e) => {
    e.preventDefault();
    logMessMealSkipped('Dinner', parseFloat(cost) || 0, desc);
    confetti({ particleCount: 25, spread: 45, origin: { y: 0.8 } });
  };

  return (
    <div className="space-y-4 max-w-sm mx-auto pb-4 text-left">
      
      {/* Overview Cards */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="apple-card p-4">
          <span className="text-[10px] text-slate-400 font-semibold uppercase">Mess Waste</span>
          <div className="text-2xl font-extrabold text-white font-mono mt-1">₹{messWasteDirect}</div>
          <span className="text-[10px] text-slate-500">{profile.hostelMessPlan.skippedMealsCount} skipped meals</span>
        </div>

        <div className="apple-card p-4">
          <span className="text-[10px] text-slate-400 font-semibold uppercase">Outside Spend</span>
          <div className="text-2xl font-extrabold text-orange-400 font-mono mt-1">₹{totalOutsideSpentOnMessDays}</div>
          <span className="text-[10px] text-slate-500">Food delivery total</span>
        </div>
      </div>

      {/* Double-Spend Card */}
      <div className="apple-card p-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-slate-400 font-semibold uppercase">Double-Cost Loss</span>
          <div className="text-xl font-black text-white font-mono">₹{totalMessArbitrageLoss}</div>
        </div>
        <span className="text-xs text-orange-400 font-semibold">Paying twice for food</span>
      </div>

      {/* Simple Log Form */}
      <form onSubmit={handleRecord} className="apple-card p-4 space-y-3">
        <span className="text-xs font-bold text-white">Record Skipped Mess Meal</span>
        
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="e.g. Swiggy Roll"
            className="px-3 py-2 rounded-xl bg-[#2c2c2e] text-xs text-white focus:outline-none"
          />
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="Cost (₹)"
            className="px-3 py-2 rounded-xl bg-[#2c2c2e] text-xs text-white font-mono font-bold focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 apple-btn-secondary text-xs font-bold"
        >
          Add Record
        </button>
      </form>

      {/* Clean Apple Tip */}
      <div className="apple-card p-3 text-xs text-slate-300 flex items-center justify-between">
        <span>💡 Canteen swap saves ₹220/meal</span>
        <span className="text-emerald-400 font-bold font-mono">₹30 curd/egg</span>
      </div>

    </div>
  );
}
