import React from 'react';
import { useFinance } from '../context/FinanceContext';
import { AlertTriangle, Coffee, ShieldAlert, Sparkles, X, MapPin } from 'lucide-react';

export default function EmergencyChaiMode() {
  const { emergencyMode, setEmergencyMode, safeDailySpend, profile } = useFinance();

  if (!emergencyMode) return null;

  return (
    <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-200 relative overflow-hidden animate-pulse-slow">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl shrink-0">
            ☕
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/30 text-amber-300 border border-amber-500/50">
                CRITICAL LOW BALANCE DETECTED
              </span>
              <span className="text-xs text-amber-300 font-semibold">Chai-Maggi Emergency Mode Active</span>
            </div>
            <h3 className="text-base font-bold text-white mt-1">
              Survival Protocol: ₹{profile.currentBalance} left for {profile.daysLeftInCycle} days (₹{safeDailySpend}/day)
            </h3>
          </div>
        </div>

        <button
          onClick={() => setEmergencyMode(false)}
          className="p-1 rounded-lg hover:bg-amber-500/20 text-amber-300 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs">
        <div className="p-3 rounded-xl bg-slate-950/60 border border-amber-500/30">
          <span className="text-amber-400 font-bold block mb-1">🛑 Non-Essential Spending Frozen</span>
          <p className="text-slate-300 text-[11px]">
            Swiggy/Zomato, club parties, and Amazon impulse buys are locked in simulation mode.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/60 border border-amber-500/30">
          <span className="text-amber-400 font-bold block mb-1">🍲 100% Mess Mandate</span>
          <p className="text-slate-300 text-[11px]">
            You have already paid for hostel mess meals. Eat 100% of lunch & dinner at mess to prevent zero balance.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/60 border border-amber-500/30">
          <span className="text-amber-400 font-bold block mb-1">⚡ Quick Cash Recovery</span>
          <p className="text-slate-300 text-[11px]">
            Send WhatsApp nudges on pending roommate food splits to recover owed funds immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
