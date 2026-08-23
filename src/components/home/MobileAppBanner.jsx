import React from 'react';
import { Smartphone, Download, Play, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { institute } from '../../config/institute';

export default function MobileAppBanner({ onOpenEnquiry }) {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-[#1D2B53] via-[#1E4FA8] to-[#163E85] text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background Graphic Accents */}
      <div className="absolute -right-16 -top-16 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-[#F8B81F]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Headline & Bullets */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              <Smartphone className="w-3.5 h-3.5 text-[#F8B81F]" />
              <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-white">
                LEARN ANYWHERE, ANYTIME
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Take Saarthi Education App <br className="hidden sm:inline" />
              <span className="text-[#F8B81F]">Wherever You Go</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Study material, test series, live lectures, and doubt support — now in your pocket. Download the Saarthi Education app and keep your preparation on track, anytime, anywhere.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-100 max-w-lg mx-auto lg:mx-0 text-left pt-1">
              <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F8B81F] shrink-0" />
                <span>Live & Recorded Video Lectures</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F8B81F] shrink-0" />
                <span>Full-Length Online Test Series</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F8B81F] shrink-0" />
                <span>Chapter-wise e-Notes & PDFs</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F8B81F] shrink-0" />
                <span>Instant Doubt Clearing Forum</span>
              </div>
            </div>

            {/* Action Download Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={institute.app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#F8B81F] hover:bg-[#E5A40F] active:scale-95 text-[#1D2B53] font-black px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm min-h-[48px]"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Get App on Google Play</span>
              </a>

              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Mobile App Consultation')}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold px-5 py-3.5 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm min-h-[48px]"
              >
                <span>Request App Access Demo</span>
              </button>
            </div>

          </div>

          {/* Right: Mockup / Illustration Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-xs sm:max-w-sm w-full bg-white/10 backdrop-blur-md rounded-3xl p-5 border border-white/20 shadow-2xl space-y-4 text-center">
              
              <div className="w-14 h-14 rounded-2xl bg-[#1E4FA8] text-white flex items-center justify-center mx-auto shadow-md border border-white/30">
                <Smartphone className="w-7 h-7 text-[#F8B81F]" />
              </div>

              <div>
                <h3 className="text-lg font-black text-white">{institute.app.name}</h3>
                <div className="flex items-center justify-center gap-1 text-amber-300 text-xs mt-1">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span className="text-white font-bold ml-1">4.8 (10K+ Downloads)</span>
                </div>
              </div>

              <p className="text-xs text-slate-200">
                Join 25,000+ students preparing smartly for Banking & MCAER exams with daily live practice.
              </p>

              <div className="bg-[#1D2B53]/80 p-3 rounded-xl border border-white/10 text-left text-xs space-y-1">
                <div className="flex items-center justify-between text-slate-300 text-[11px]">
                  <span>Next Live Session:</span>
                  <span className="text-emerald-400 font-bold">11:00 AM Today</span>
                </div>
                <div className="font-bold text-white">Banking Quant & Data Interpretation</div>
                <div className="text-[10px] text-[#F8B81F]">By Mr. Rahul Misal Sir</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
