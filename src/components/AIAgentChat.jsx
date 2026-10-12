import React, { useState, useRef, useEffect } from 'react';
import { useFinance } from '../context/FinanceContext';
import { Send, Sparkles } from 'lucide-react';

export default function AIAgentChat() {
  const { profile, safeDailySpend } = useFinance();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: `Hey ${profile.name}! You have ₹${profile.currentBalance} left (Safe: ₹${safeDailySpend}/day). Ask me before spending.`
    }
  ]);

  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text = input) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const match = text.match(/₹?\s?(\d+)/);
      const cost = match ? parseInt(match[1], 10) : 0;
      let reply = "I can simulate any expense. Try typing an amount like ₹450.";

      if (cost > 0) {
        const remaining = profile.currentBalance - cost;
        const newDaily = Math.max(0, Math.floor(remaining / (profile.daysLeftInCycle || 14)));
        if (remaining < 500) {
          reply = `⚠️ Tight margin: Spending ₹${cost} drops your daily allowance from ₹${safeDailySpend}/d to ₹${newDaily}/d. Consider splitting with roomies!`;
        } else {
          reply = `✅ Feasible: Daily allowance adjusts from ₹${safeDailySpend}/d to ₹${newDaily}/d. Safe within your month-end runway.`;
        }
      } else if (text.toLowerCase().includes('textbook')) {
        reply = "Check your department library or borrow senior xerox copies (saves 70%).";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'agent', text: reply }]);
    }, 300);
  };

  const chips = ["Can I spend ₹380 on pizza?", "Can I afford ₹1,500 shoes?", "Textbook advice"];

  return (
    <div className="flex flex-col h-[520px] max-w-sm mx-auto apple-card overflow-hidden">
      
      {/* Header */}
      <div className="p-3 border-b border-white/[0.06] text-center bg-[#1c1c1e]">
        <span className="text-xs font-bold text-white">RupeeNova Advisor</span>
        <span className="text-[10px] text-slate-400 block font-mono">Safe Spend: ₹{safeDailySpend}/day</span>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2.5">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[82%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-[#30d158] text-black font-semibold rounded-br-none'
                  : 'bg-[#2c2c2e] text-white rounded-bl-none'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Quick Chips */}
      <div className="p-2 border-t border-white/[0.06] flex gap-1.5 overflow-x-auto no-scrollbar">
        {chips.map((c, i) => (
          <button
            key={i}
            onClick={() => handleSend(c)}
            className="px-2.5 py-1 rounded-full bg-[#2c2c2e] text-[10px] text-slate-300 shrink-0"
          >
            {c}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="p-2.5 bg-[#1c1c1e] border-t border-white/[0.06] flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Can I afford ₹450 dinner?"
          className="flex-1 px-3 py-2 rounded-full bg-[#2c2c2e] text-xs text-white focus:outline-none"
        />
        <button
          onClick={() => handleSend()}
          className="w-8 h-8 rounded-full bg-[#30d158] text-black flex items-center justify-center font-bold"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
