import React from 'react';
import { Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { institute } from '../../config/institute';

export default function MobileStickyCTA({ onOpenEnquiry, hidden = false }) {
  // Completely hide when mobile menu drawer or enquiry modal is open
  if (hidden) return null;

  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="lg:hidden fixed inset-x-0 bottom-0 z-40 pointer-events-none pb-[max(10px,env(safe-area-inset-bottom,10px))] px-3 mb-1 flex justify-center"
    >
      {/* Floating Pill Container */}
      <div 
        className="w-full max-w-[420px] p-1 rounded-2xl pointer-events-auto transition-all duration-200 shadow-[0_8px_30px_rgba(0,0,0,0.38)]"
        style={{
          background: 'rgba(11, 25, 44, 0.97)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <div className="flex items-center justify-between gap-1">
          
          {/* Action 1: Call (Secondary) */}
          <a
            href={`tel:${institute.contact.phonePrimary}`}
            className="flex-1 flex items-center justify-center gap-1.5 h-11 px-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10 active:scale-[0.97] transition-all select-none"
            aria-label={`Call Admissions: ${institute.contact.phonePrimary}`}
          >
            <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <span className="text-[12px] xs:text-[13px] font-bold text-slate-100 tracking-tight whitespace-nowrap">
              Call
            </span>
          </a>

          {/* Vertical Hairline Divider */}
          <div className="h-4 w-[1px] bg-slate-700/70 shrink-0" />

          {/* Action 2: WhatsApp (Secondary) */}
          <a
            href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.1] flex items-center justify-center gap-1.5 h-11 px-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10 active:scale-[0.97] transition-all select-none"
            aria-label="Chat on WhatsApp with PERL Education"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-[12px] xs:text-[13px] font-bold text-slate-100 tracking-tight whitespace-nowrap">
              WhatsApp
            </span>
          </a>

          {/* Vertical Hairline Divider */}
          <div className="h-4 w-[1px] bg-slate-700/70 shrink-0" />

          {/* Action 3: Free Demo (Primary CTA - Dominant) */}
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Mobile Sticky Free Demo CTA')}
            className="flex-[1.4] flex items-center justify-center gap-1.5 h-11 px-2.5 xs:px-3.5 rounded-xl bg-gradient-to-r from-[#0F4C81] via-[#0D4474] to-[#0284C7] hover:from-[#0A3357] hover:to-[#0369A1] active:scale-[0.97] text-white shadow-md transition-all select-none cursor-pointer border border-blue-400/20"
            style={{
              boxShadow: '0 2px 10px rgba(15, 76, 129, 0.45)',
            }}
            aria-label="Book a Free Demo Class"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
            <span className="text-[12px] xs:text-[13px] font-black text-white tracking-tight whitespace-nowrap">
              Free Demo
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-white/85 shrink-0" />
          </button>

        </div>
      </div>
    </aside>
  );
}
