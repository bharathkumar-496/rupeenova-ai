import React, { useState } from 'react';
import { useFinance } from './context/FinanceContext';
import IntroPage from './components/IntroPage';
import Dashboard from './components/Dashboard';
import RoommateFoodSplit from './components/RoommateFoodSplit';
import MessArbitrageTracker from './components/MessArbitrageTracker';
import AIAgentChat from './components/AIAgentChat';
import AndroidAppModal from './components/AndroidAppModal';
import { 
  Users, 
  UtensilsCrossed, 
  Bot, 
  IndianRupee, 
  Info, 
  Download 
} from 'lucide-react';

export default function App() {
  const { activeTab, setActiveTab } = useFinance();
  const [isAndroidModalOpen, setIsAndroidModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'intro': return <IntroPage />;
      case 'dashboard': return <Dashboard />;
      case 'split': return <RoommateFoodSplit />;
      case 'mess': return <MessArbitrageTracker />;
      case 'agent': return <AIAgentChat />;
      default: return <IntroPage />;
    }
  };

  const navItems = [
    { id: 'intro', label: 'Why Us', icon: Info },
    { id: 'dashboard', label: 'Runway', icon: IndianRupee },
    { id: 'split', label: 'Room Split', icon: Users, badge: true },
    { id: 'mess', label: 'Mess', icon: UtensilsCrossed },
    { id: 'agent', label: 'Advisor', icon: Bot },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start overflow-x-hidden w-full select-none">
      
      {/* Real Native Android App Layout */}
      <div className="w-full max-w-md min-h-screen bg-black flex flex-col relative overflow-x-hidden">
        
        {/* Real Android App Bar (No Fake Status Bar!) */}
        <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-white/[0.08]">
          <div 
            onClick={() => setActiveTab('intro')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-xl bg-[#30d158] flex items-center justify-center font-black text-black text-sm shadow-sm">
              ₹
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white">
                Rupee<span className="text-[#30d158]">Nova</span>
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsAndroidModalOpen(true)}
            className="text-xs font-semibold text-slate-300 hover:text-white flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#1c1c1e] border border-white/[0.08]"
          >
            <Download className="w-3.5 h-3.5 text-[#30d158]" />
            <span>Android Project</span>
          </button>
        </header>

        {/* Real App Scrollable Content */}
        <main className="flex-1 w-full px-4 pt-3 pb-20 overflow-y-auto overflow-x-hidden touch-pan-y">
          {renderContent()}
        </main>

        {/* Real Native Bottom Navigation Bar (Fixed) */}
        <nav className="fixed bottom-0 max-w-md w-full bg-black/95 backdrop-blur-xl border-t border-white/[0.08] px-2 py-2 flex items-center justify-around z-50">
          {navItems.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center justify-center py-1 transition-all ${
                  active ? 'text-[#30d158]' : 'text-slate-500 hover:text-slate-400'
                }`}
              >
                <div className="relative">
                  <Icon className="w-5 h-5 mb-0.5" />
                  {tab.badge && !active && (
                    <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-[#30d158]"></span>
                  )}
                </div>
                <span className="text-[10px] font-semibold tracking-tight">{tab.label}</span>
              </button>
            );
          })}
        </nav>

      </div>

      {/* Android Project & Install Modal */}
      <AndroidAppModal 
        isOpen={isAndroidModalOpen} 
        onClose={() => setIsAndroidModalOpen(false)} 
      />

    </div>
  );
}
