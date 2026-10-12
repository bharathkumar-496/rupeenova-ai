import React from 'react';
import { JUDGE_COMPARISON_MATRIX } from '../data/initialData';
import { Trophy, Check, X, Sparkles } from 'lucide-react';

export default function JudgePitchModal() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Hero Pitch */}
      <div className="fin-card p-6 sm:p-8 bg-gradient-to-b from-[#111b30] to-[#0d1424] border-white/10">
        <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Trophy className="w-4 h-4" />
          <span>Competition Defense & Market Differentiation</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          "It is already available in the market.<br className="hidden sm:inline" />
          <span className="text-amber-400">Why should we use your app?"</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Mint, Splitwise, Walnut, and CRED were engineered for salaried corporate employees with monthly paychecks, credit cards, and mortgages. They fail college students in fundamental ways:
        </p>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="fin-card p-5">
          <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">Pillar 1</div>
          <h3 className="text-sm font-bold text-white mb-1.5">Runway vs Monthly Salary</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Existing apps assume monthly paychecks. Students receive fixed pocket money or semester allowances that dwindle. We give a live <strong>Safe Daily Spend Clock</strong>.
          </p>
        </div>

        <div className="fin-card p-5">
          <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">Pillar 2</div>
          <h3 className="text-sm font-bold text-white mb-1.5">Frictionless Room Food Split</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Splitwise requires everyone to download an app and create accounts. RupeeNova lets one student enter the bill and generates a <strong>live UPI QR + WhatsApp nudge</strong> in 3 seconds.
          </p>
        </div>

        <div className="fin-card p-5">
          <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">Pillar 3</div>
          <h3 className="text-sm font-bold text-white mb-1.5">Hostel Mess Arbitrage</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Students pre-pay ₹3,800/month for hostel mess meals, yet spend ₹2,500 on Swiggy. No financial app in the world accounts for prepaid institutional assets. We turn invisible waste into visible savings.
          </p>
        </div>
      </div>

      {/* Competitive Matrix Table */}
      <div className="fin-card p-6 overflow-hidden">
        <h2 className="text-sm font-bold text-white mb-4">Competitive Comparison Matrix</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-3">Feature</th>
                <th className="py-3 px-3 text-emerald-400 bg-emerald-500/[0.05] font-bold">RupeeNova AI (Ours)</th>
                <th className="py-3 px-3 text-slate-400">Splitwise</th>
                <th className="py-3 px-3 text-slate-400">Walnut</th>
                <th className="py-3 px-3 text-slate-400">CRED / Mint</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05]">
              {JUDGE_COMPARISON_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02]">
                  <td className="py-3 px-3 font-semibold text-white">{row.feature}</td>
                  <td className="py-3 px-3 bg-emerald-500/[0.03] text-emerald-300 font-medium">
                    <div className="flex items-start space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{row.rupeeNova}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-slate-400">
                    <div className="flex items-start space-x-1.5">
                      <X className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" />
                      <span>{row.splitwise}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-slate-400">
                    <div className="flex items-start space-x-1.5">
                      <X className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" />
                      <span>{row.walnut}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-slate-400">
                    <div className="flex items-start space-x-1.5">
                      <X className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" />
                      <span>{row.credMint}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Presenter Pitch Script */}
      <div className="fin-card p-5 border-amber-500/20 bg-amber-500/[0.03]">
        <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Your 30-Second Answer Script to the Judges</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed italic">
          "Existing financial apps were created for salaried adults with predictable incomes and credit cards. College students have completely different micro-economics: irregular pocket money, prepaid hostel mess fees, and peer food splits. Existing apps only tell you what you spent after the money is gone. RupeeNova gives students a live Safe Daily Spend burn clock, an AI reality simulator before buying, a 1-tap UPI roommate food split for hostelites, and an arbitrage engine that stops students from double-paying for food when hostel mess fees are already paid upfront."
        </p>
      </div>

    </div>
  );
}
