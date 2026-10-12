import React from 'react';
import { useFinance } from '../context/FinanceContext';
import { 
  Smartphone, 
  Monitor, 
  Users, 
  UtensilsCrossed, 
  Bot, 
  Tag, 
  IndianRupee, 
  RotateCcw,
  Download,
  Info
} from 'lucide-react';

export default function Navbar({ onOpenAndroidInfo }) {
  const { 
    viewMode, 
    setViewMode, 
    activeTab, 
    setActiveTab,
    safeDailySpend,
    resetDemoData,
    profile
  } = useFinance();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070a13]/90 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => setActiveTab('intro')}
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center font-black text-slate-950 text-base shadow-sm">
              ₹
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-base tracking-tight text-white">
                  Rupee<span className="text-emerald-400">Nova</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Student Finance
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-normal">Hostel Room 204 • {profile.college.split('(')[0]}</p>
            </div>
          </div>

          {/* Clean Segmented Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1 bg-[#0d1424] p-1 rounded-xl border border-white/[0.06]">
            {[
              { id: 'intro', label: 'Why RupeeNova', icon: Info },
              { id: 'dashboard', label: 'Runway', icon: IndianRupee },
              { id: 'split', label: 'Room Split', icon: Users, badge: true },
              { id: 'mess', label: 'Mess vs Swiggy', icon: UtensilsCrossed },
              { id: 'agent', label: 'AI Advisor', icon: Bot },
              { id: 'perks', label: 'Perks', icon: Tag },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  {tab.badge && !isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center space-x-2">
            
            {/* Safe Daily Spend Pill */}
            <div className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 text-xs">
              <span className="text-slate-400 font-medium">Safe Daily:</span>
              <span className="font-bold text-emerald-400 font-mono">₹{safeDailySpend}</span>
            </div>

            {/* Android App Button */}
            <button
              onClick={onOpenAndroidInfo}
              title="Android App Details & APK"
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-white/[0.08] text-xs font-semibold text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Android App</span>
            </button>

            {/* View Mode Toggle: Desktop vs Mobile Preview */}
            <div className="flex items-center bg-[#0d1424] p-1 rounded-xl border border-white/[0.06]">
              <button
                onClick={() => setViewMode('desktop')}
                title="Desktop View"
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'desktop'
                    ? 'bg-white/[0.08] text-emerald-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                title="Mobile App Frame"
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'mobile'
                    ? 'bg-white/[0.08] text-emerald-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Demo Reset */}
            <button
              onClick={resetDemoData}
              title="Reset Data"
              className="p-1.5 text-slate-500 hover:text-slate-300 rounded-lg"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
