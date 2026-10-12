import React from 'react';
import { useFinance } from '../context/FinanceContext';
import { Users, Flame, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const { 
    profile, 
    safeDailySpend, 
    totalMessArbitrageLoss, 
    transactions, 
    setActiveTab 
  } = useFinance();

  const allowanceUsedPercent = Math.min(
    100,
    Math.round(((profile.monthlyAllowance - profile.currentBalance) / profile.monthlyAllowance) * 100)
  );

  return (
    <div className="space-y-4 max-w-sm mx-auto pb-4">
      
      {/* Apple Wallet Style Hero Card */}
      <div className="apple-card p-5 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Monthly Allowance</span>
          <span>{profile.daysLeftInCycle} days left</span>
        </div>

        <div>
          <div className="text-4xl font-extrabold text-white font-mono tracking-tight">
            ₹{profile.currentBalance.toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            of ₹{profile.monthlyAllowance.toLocaleString('en-IN')} pocket money
          </div>
        </div>

        {/* Safe Daily Spend Pill */}
        <div className="p-3 rounded-xl bg-[#2c2c2e] flex items-center justify-between">
          <span className="text-xs text-slate-300 font-medium">Safe Daily Spend</span>
          <span className="text-lg font-bold text-emerald-400 font-mono">₹{safeDailySpend}<span className="text-xs font-normal text-slate-400">/day</span></span>
        </div>

        {/* Minimal Progress Line */}
        <div className="space-y-1 pt-1">
          <div className="w-full bg-[#2c2c2e] h-1.5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${allowanceUsedPercent}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>{allowanceUsedPercent}% spent</span>
            <span>{profile.daysLeftInCycle} days remaining</span>
          </div>
        </div>
      </div>

      {/* Two Apple Action Rows */}
      <div className="space-y-2">
        
        <div 
          onClick={() => setActiveTab('split')}
          className="apple-card p-4 flex items-center justify-between cursor-pointer active:bg-[#2c2c2e] transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Room Food Split</div>
              <div className="text-[11px] text-slate-400">Split bills by room persons via UPI</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500" />
        </div>

        <div 
          onClick={() => setActiveTab('mess')}
          className="apple-card p-4 flex items-center justify-between cursor-pointer active:bg-[#2c2c2e] transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Mess vs. Food Waste</div>
              <div className="text-[11px] text-slate-400">₹{totalMessArbitrageLoss} spent on skipped meals</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500" />
        </div>

      </div>

      {/* Recent Transactions */}
      <div className="apple-card p-4 space-y-2.5">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Recent Activity
        </div>

        <div className="divide-y divide-white/[0.06]">
          {transactions.slice(0, 3).map((tx) => (
            <div key={tx.id} className="py-2.5 flex items-center justify-between text-xs">
              <div>
                <div className="font-semibold text-white">{tx.title}</div>
                <div className="text-[10px] text-slate-500">{tx.date}</div>
              </div>
              <div className={`font-mono font-bold ${tx.isCredit ? 'text-emerald-400' : 'text-slate-300'}`}>
                {tx.isCredit ? `+₹${tx.amount}` : `-₹${Math.abs(tx.amount)}`}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
