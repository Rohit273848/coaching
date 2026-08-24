import React from 'react';
import { Smartphone, CheckCircle2, Star, Laptop } from 'lucide-react';
import { institute } from '../../config/institute';

export default function MobileAppBanner({ onOpenEnquiry }) {
  return (
    <section className="py-10 sm:py-16 bg-gradient-to-r from-[#0B192C] via-[#0F4C81] to-[#0A3357] text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background Graphic Accents */}
      <div className="absolute -right-16 -top-16 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left: Headline & Bullets */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-5 text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              <Laptop className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase text-white">
                HYBRID / DIGITAL TECH INTEGRATION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              {institute.app.name} <br className="hidden sm:inline" />
              <span className="text-[#F59E0B]">{institute.app.tagline}</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl font-normal">
              {institute.app.description}
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-100 max-w-lg text-left pt-0.5">
              <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Daily Practice Quizzes & Flashcards</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>NTA Pattern Online Mock Tests</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>24/7 Recorded Lectures for Revision</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Digital Notes & High-Volume Q-Bank</span>
              </div>
            </div>

            {/* Action Download Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2.5 sm:gap-3">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Digital App Demo Request')}
                className="w-full sm:w-auto bg-[#F59E0B] hover:bg-[#D97706] active:scale-95 text-[#0B192C] font-black px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm min-h-[48px] cursor-pointer"
              >
                <span>Request Free Demo & App Access</span>
              </button>

              <a
                href={`tel:${institute.contact.phonePrimary}`}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold px-5 py-3.5 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm min-h-[48px]"
              >
                <span>Call Admissions: {institute.contact.phonePrimary}</span>
              </a>
            </div>

          </div>

          {/* Right: Mockup Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-xs sm:max-w-sm w-full bg-white/10 backdrop-blur-md rounded-3xl p-5 border border-white/20 shadow-2xl space-y-4 text-center">
              
              <div className="w-14 h-14 rounded-2xl bg-[#0F4C81] text-white flex items-center justify-center mx-auto shadow-md border border-white/30">
                <Smartphone className="w-7 h-7 text-[#F59E0B]" />
              </div>

              <div>
                <h3 className="text-lg font-black text-white">{institute.app.name}</h3>
                <div className="flex items-center justify-center gap-1 text-amber-300 text-xs mt-1">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span className="text-white font-bold ml-1">4.8★ Google Rated</span>
                </div>
              </div>

              <p className="text-xs text-slate-200">
                Small batch size classroom learning combined with 24/7 digital test analytics for IIT-JEE, NEET & Foundation.
              </p>

              <div className="bg-[#0B192C]/90 p-3.5 rounded-2xl border border-white/10 text-left text-xs space-y-1.5">
                <div className="flex items-center justify-between text-slate-300 text-[11px]">
                  <span>Today's Daily Practice Drill:</span>
                  <span className="text-emerald-400 font-bold">Physics & Chemistry</span>
                </div>
                <div className="font-bold text-white">Rotational Dynamics & Chemical Bonding</div>
                <div className="text-[10px] text-[#F59E0B]">Smart Board Notes Synchronized</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
