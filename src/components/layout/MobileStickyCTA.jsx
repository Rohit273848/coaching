import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { institute } from '../../config/institute';

export default function MobileStickyCTA({ onOpenEnquiry, hidden = false }) {
  // Completely hide when mobile menu drawer or enquiry modal is open
  if (hidden) return null;

  return (
    <div 
      className="lg:hidden fixed left-2.5 right-2.5 z-30 transition-opacity duration-200 pointer-events-auto"
      style={{
        bottom: 'max(12px, env(safe-area-inset-bottom, 12px))',
        maxWidth: 520,
        margin: '0 auto',
      }}
    >
      {/* Floating Glass Container */}
      <div 
        className="p-1.5 rounded-[16px] transition-all duration-200"
        style={{
          background: 'rgba(29, 43, 83, 0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(248, 184, 31, 0.25)',
          boxShadow: '0 10px 30px -4px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="flex items-center justify-between gap-1">
          
          {/* Action 1: Call */}
          <a
            href={`tel:${institute.contact.phonePrimary}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10 active:scale-[0.97] transition-all min-h-[46px] select-none"
            aria-label={`Call Saarthi Education at ${institute.contact.phonePrimary}`}
          >
            <Phone className="w-4 h-4 text-[#F8B81F] shrink-0" />
            <span className="text-[13px] font-bold text-slate-100 tracking-tight whitespace-nowrap">
              Call Now
            </span>
          </a>

          {/* Hairline Divider */}
          <div className="h-5 w-[1px] bg-white/10 shrink-0" />

          {/* Action 2: WhatsApp */}
          <a
            href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10 active:scale-[0.97] transition-all min-h-[46px] select-none"
            aria-label="Chat on WhatsApp with counselor"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-[13px] font-bold text-slate-100 tracking-tight whitespace-nowrap">
              WhatsApp
            </span>
          </a>

          {/* Hairline Divider */}
          <div className="h-5 w-[1px] bg-white/10 shrink-0" />

          {/* Action 3: Enquire */}
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Mobile Sticky CTA')}
            className="flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1E4FA8] hover:bg-[#163E85] active:bg-[#0F2F6E] active:scale-[0.97] text-white shadow-md transition-all min-h-[46px] select-none cursor-pointer"
            style={{
              boxShadow: '0 2px 10px rgba(30, 79, 168, 0.40)',
            }}
            aria-label="Enquire now"
          >
            <span className="text-[13px] font-black text-white tracking-tight whitespace-nowrap">
              Enquiry Now
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F8B81F] shrink-0" />
          </button>

        </div>
      </div>
    </div>
  );
}
