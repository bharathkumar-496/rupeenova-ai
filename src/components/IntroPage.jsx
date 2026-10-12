import React from 'react';
import { useFinance } from '../context/FinanceContext';
import { 
  ArrowRight, 
  Users, 
  Flame, 
  Clock, 
  ShieldCheck
} from 'lucide-react';

export default function IntroPage() {
  const { setActiveTab } = useFinance();

  const features = [
    {
      icon: Clock,
      color: "bg-blue-500",
      title: "Daily Runway",
      desc: "Know your exact safe daily spend so your allowance lasts all month."
    },
    {
      icon: Users,
      color: "bg-emerald-500",
      title: "Room Food Split",
      desc: "Split Swiggy or canteen bills with roomies using dynamic UPI QR codes."
    },
    {
      icon: Flame,
      color: "bg-orange-500",
      title: "Mess vs. Food Radar",
      desc: "Track money wasted when skipping prepaid hostel mess meals."
    }
  ];

  return (
    <div className="flex flex-col justify-between min-h-[70vh] py-4 max-w-sm mx-auto text-left">
      
      {/* Apple Header */}
      <div className="space-y-3 pt-6">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-extrabold text-2xl shadow-lg shadow-emerald-500/20">
          ₹
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
          Finance. <br />
          <span className="text-slate-400">Made for campus.</span>
        </h1>
        <p className="text-xs text-slate-400">
          Built for monthly pocket money, hostel messes, and roommate food splits.
        </p>
      </div>

      {/* Apple Feature List */}
      <div className="space-y-4 my-8">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-start space-x-3.5">
              <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Apple Action Button */}
      <div className="space-y-3 pt-4">
        <button
          onClick={() => setActiveTab('dashboard')}
          className="w-full py-3.5 apple-btn-primary text-sm flex items-center justify-center space-x-2 font-bold"
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>100% Free • Private • No Ads</span>
        </div>
      </div>

    </div>
  );
}
