import React from 'react';
import { institute } from '../../config/institute';
import { GraduationCap, ArrowRight, MapPin, MessageCircle, Star } from 'lucide-react';

export default function FinalCTA({ onOpenEnquiry }) {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#0B192C] text-white text-center border-b border-slate-800 relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,76,129,0.5)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 relative z-10 space-y-4 sm:space-y-6">
        
        {/* Brand Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 text-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto border border-white/20 shadow-xl">
          <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        {/* Messaging */}
        <div className="space-y-2 sm:space-y-3">
          <span className="text-[10px] sm:text-xs font-black text-[#F59E0B] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700 inline-block">
            START YOUR SUCCESS JOURNEY
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Book Your Free Demo Class Today
          </h2>
          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Chhatrapati Sambhajinagar's premier coaching institute for IIT-JEE, NEET, and School Foundation. Experience our air-conditioned smart classrooms, expert faculty teaching, and small batch learning environment.
          </p>
        </div>

        {/* Conversion Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4">
          <button
            onClick={() => { if (onOpenEnquiry) onOpenEnquiry('Final CTA Book Free Demo'); }}
            className="w-full sm:w-auto bg-[#F59E0B] hover:bg-[#D97706] active:scale-[0.98] text-[#0B192C] font-black px-8 py-3.5 sm:py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm min-h-[48px] sm:min-h-[50px] cursor-pointer"
          >
            <span>Book Free Demo Class</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold px-6 py-3.5 sm:py-4 rounded-xl border border-emerald-500/30 transition-colors text-xs sm:text-sm flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[50px]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Enquiry (+91 88620 15626)</span>
          </a>
        </div>

        {/* Center note */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-[10.5px] sm:text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
            <span>1st Floor, Shrinath Complex, New Usmanpura, Aurangabad</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
            <span>4.8 ★ Google Rating (370+ Reviews)</span>
          </span>
        </div>

      </div>
    </section>
  );
}
