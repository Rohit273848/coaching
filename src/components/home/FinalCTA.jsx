import React from 'react';
import { institute } from '../../config/institute';
import { GraduationCap, Phone, ArrowRight, ShieldCheck, MapPin, MessageCircle } from 'lucide-react';

export default function FinalCTA({ onOpenEnquiry }) {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#1D2B53] text-white text-center border-b border-slate-800 relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,79,168,0.4)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Brand Icon */}
        <div className="w-14 h-14 bg-white/10 text-[#F8B81F] rounded-2xl flex items-center justify-center mx-auto border border-white/20 shadow-xl">
          <GraduationCap className="w-8 h-8" />
        </div>

        {/* Messaging */}
        <div className="space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-black text-[#F8B81F] uppercase tracking-widest bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700 inline-block">
            START YOUR PREPARATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready To Start Your Free Trial Today ?
          </h2>
          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            छत्रपती संभाजीनगरमधील अग्रगण्य बँकिंग व MCAER क्लास. Speak with our master mentors, attend a free demo lecture, and begin your journey toward a secure government job.
          </p>
        </div>

        {/* Conversion Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Final CTA Get Started')}
            className="w-full sm:w-auto bg-[#F8B81F] hover:bg-[#E5A40F] active:scale-[0.98] text-[#1D2B53] font-black px-8 py-3.5 sm:py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 text-sm min-h-[50px] cursor-pointer"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${institute.contact.phonePrimary}`}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-bold px-7 py-3.5 sm:py-4 rounded-xl border border-white/20 transition-colors text-sm flex items-center justify-center gap-2 min-h-[50px]"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Contact Now (+91 86949 47070)</span>
          </a>
        </div>

        {/* Center note */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#F8B81F] shrink-0" />
            <span>Paithan Gate, Nutan Colony, Sambhajinagar</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Daily Doubt Solving & Free Library Access</span>
          </span>
        </div>

      </div>
    </section>
  );
}
