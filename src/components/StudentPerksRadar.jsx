import React from 'react';
import { VERIFIED_STUDENT_PERKS } from '../data/initialData';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export default function StudentPerksRadar() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="pb-2 border-b border-white/[0.06] flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Verified Indian Student Perks
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Curated student discounts for tech, food, and entertainment in India
          </p>
        </div>
        <span className="text-xs font-bold text-emerald-400 font-mono">
          Save ₹24,500+/yr
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {VERIFIED_STUDENT_PERKS.map((perk) => (
          <div key={perk.id} className="fin-card p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {perk.category}
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  {perk.savings}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white">{perk.title}</h3>

              <div className="flex items-baseline space-x-2 mt-1.5 font-mono">
                <span className="text-xs line-through text-slate-500">{perk.regularPrice}</span>
                <span className="text-sm font-bold text-white">{perk.studentPrice}</span>
              </div>

              <p className="mt-3 p-2 rounded-xl bg-[#090e1a] border border-white/[0.05] text-[11px] text-slate-400 leading-relaxed">
                {perk.howToClaim}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-400 flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>{perk.badge}</span>
              </span>

              <a
                href={perk.url}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center space-x-1"
              >
                <span>Claim</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
