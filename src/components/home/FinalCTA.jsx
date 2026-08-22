import React from 'react';
import { institute } from '../../config/institute';
import { GraduationCap, Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function FinalCTA({ onOpenEnquiry }) {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#0F2038] text-white text-center border-b border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-grid opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Brand Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 text-[#D4AF37] rounded-2xl flex items-center justify-center mx-auto border border-white/20 shadow-lg">
          <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        {/* Messaging */}
        <div className="space-y-2 sm:space-y-3">
          <span className="text-[10px] sm:text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800/80 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-slate-700 inline-block">
            ACADEMIC ADVISORY DESK
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-tight">
            The Right Preparation Starts With The Right Plan.
          </h2>
          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Speak with our senior academic counselor to assess your current syllabus standing, select the right batch, and formulate a realistic rank roadmap.
          </p>
        </div>

        {/* Conversion Action Buttons (Stacked full-width on mobile) */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Final Counselling Section')}
            className="w-full sm:w-auto bg-[#8B1E26] hover:bg-[#6D171E] active:scale-[0.98] text-white font-extrabold px-8 py-3.5 sm:py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 text-sm min-h-[48px]"
          >
            <span>Book Free Counselling</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </button>

          <a
            href={`tel:${institute.contact.phonePrimary}`}
            className="w-full sm:w-auto bg-slate-800/90 hover:bg-slate-800 active:scale-[0.98] text-white font-bold px-7 py-3.5 sm:py-4 rounded-xl border border-slate-700 transition-colors text-sm flex items-center justify-center gap-2 min-h-[48px]"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call Admissions Desk</span>
          </a>
        </div>

        {/* Center note */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-[11px] sm:text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>Samarth Nagar Center • Chhatrapati Sambhajinagar</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>1-on-1 Mentorship With IITians</span>
          </span>
        </div>

      </div>
    </section>
  );
}
