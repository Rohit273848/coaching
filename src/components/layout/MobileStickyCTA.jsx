import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { institute } from '../../config/institute';

export default function MobileStickyCTA({ onOpenEnquiry }) {
  return (
    <div 
      className="lg:hidden fixed left-2.5 right-2.5 z-40"
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
          background: 'rgba(15, 32, 56, 0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 10px 30px -4px rgba(0, 0, 0, 0.32), 0 4px 12px rgba(0, 0, 0, 0.18)',
        }}
      >
        <div className="flex items-center justify-between gap-1">
          
          {/* Action 1: Call - Secondary Clean Glass Link */}
          <a
            href={`tel:${institute.contact.phonePrimary}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10 active:scale-[0.97] transition-all min-h-[46px] select-none"
            aria-label={`Call the academy at ${institute.contact.phonePrimary}`}
          >
            <Phone className="w-4 h-4 text-slate-300 shrink-0" />
            <span className="text-[13px] font-semibold text-slate-100 tracking-tight whitespace-nowrap">
              Call
            </span>
          </a>

          {/* Hairline Divider */}
          <div className="h-5 w-[1px] bg-white/10 shrink-0" />

          {/* Action 2: WhatsApp - Option B Dark Glass with Crisp Green Accent Icon */}
          <a
            href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10 active:scale-[0.97] transition-all min-h-[46px] select-none"
            aria-label="Chat on WhatsApp with academic counselor"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-[13px] font-semibold text-slate-100 tracking-tight whitespace-nowrap">
              WhatsApp
            </span>
          </a>

          {/* Hairline Divider */}
          <div className="h-5 w-[1px] bg-white/10 shrink-0" />

          {/* Action 3: Enquire - Primary Institute Red Conversion Action */}
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Mobile Sticky CTA')}
            className="flex-[1.15] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#8B1E26] hover:bg-[#72181F] active:bg-[#5C1319] active:scale-[0.97] text-white shadow-md transition-all min-h-[46px] select-none cursor-pointer"
            style={{
              boxShadow: '0 2px 10px rgba(139, 30, 38, 0.40)',
            }}
            aria-label="Book free academic counselling enquiry"
          >
            <span className="text-[13px] font-extrabold text-white tracking-tight whitespace-nowrap">
              Enquire
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
          </button>

        </div>
      </div>
    </div>
  );
}
