import React from 'react';
import { X, Smartphone, Download, Terminal, CheckCircle2, QrCode, ExternalLink } from 'lucide-react';

export default function AndroidAppModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0d1424] border border-white/10 w-full max-w-xl rounded-3xl p-6 sm:p-7 shadow-2xl relative text-slate-100">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Android App Package Ready</h2>
            <p className="text-xs text-slate-400 font-mono">com.studentfinance.rupeenova</p>
          </div>
        </div>

        {/* 2 Ways to Run on Android */}
        <div className="space-y-4 text-xs">
          
          {/* Method 1: Instant Install on Android Phone via Chrome */}
          <div className="p-4 rounded-2xl bg-[#080d1a] border border-white/[0.07]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-emerald-400 flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Method 1: Instant Install on Your Android Phone</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                Fastest (No PC needed)
              </span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
              <li>Connect your Android phone to the same Wi-Fi as this Mac.</li>
              <li>Open Chrome on your Android phone and visit: <strong className="text-white font-mono">http://192.168.29.80:5173</strong></li>
              <li>Tap the 3 dots (⋮) in Chrome and select <strong>"Add to Home screen"</strong> or <strong>"Install app"</strong>.</li>
              <li>RupeeNova will install with its app icon and launch full-screen with zero browser address bar!</li>
            </ol>
          </div>

          {/* Method 2: Native Android Studio / Gradle Project */}
          <div className="p-4 rounded-2xl bg-[#080d1a] border border-white/[0.07]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-white flex items-center space-x-1.5">
                <Terminal className="w-4 h-4 text-teal-400" />
                <span>Method 2: Native Android Studio & APK Build</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                Capacitor Native
              </span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed mb-2">
              A full native Android project has been generated in your codebase directory with <code className="text-emerald-400">AndroidManifest.xml</code>, Gradle build files, and Java wrapper.
            </p>
            <div className="p-2.5 rounded-xl bg-black/60 font-mono text-[10px] text-slate-300 border border-white/5 space-y-1">
              <div className="text-slate-500"># Project path:</div>
              <div className="text-teal-300 select-all">/Users/bharathkumar/.gemini/antigravity/scratch/rupeenova-ai/android</div>
              <div className="text-slate-500 pt-1"># Open in Android Studio:</div>
              <div className="text-teal-300 select-all">npx cap open android</div>
              <div className="text-slate-500 pt-1"># Build debug APK:</div>
              <div className="text-teal-300 select-all">cd android && ./gradlew assembleDebug</div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
}
