import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { institute } from '../../config/institute';
import { features } from '../../config/features';

export default function TopBar({ onOpenEnquiry }) {
  if (!features.topAnnouncementBar || !institute.announcement?.enabled) return null;

  return (
    <div className="bg-[#0B1526] text-white text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-slate-800 relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Announcement Ticker */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden min-w-0">
          <span className="bg-[#8B1E26] text-white text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded tracking-wider uppercase flex items-center gap-1 shrink-0">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" />
            <span className="hidden xs:inline">ADMISSIONS OPEN</span>
            <span className="xs:hidden">2026-27</span>
          </span>
          <span className="truncate text-slate-300 font-medium text-[11px] sm:text-xs">
            {institute.announcement.text}
          </span>
          <button 
            onClick={() => onOpenEnquiry && onOpenEnquiry('SAT Scholarship Test')}
            className="hidden md:inline-flex items-center gap-1 text-[#D4AF37] font-bold hover:underline shrink-0 ml-1 text-xs"
          >
            {institute.announcement.ctaText}
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Right: Direct Phone Shortcut on Mobile + Full info on Desktop */}
        <div className="flex items-center gap-3 text-slate-300 shrink-0">
          <div className="hidden lg:flex items-center gap-1 text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{institute.location.city}, {institute.location.state}</span>
          </div>

          <a 
            href={`tel:${institute.contact.phonePrimary}`} 
            className="flex items-center gap-1 hover:text-white transition-colors text-[11px] sm:text-xs min-h-[36px] sm:min-h-auto items-center"
            aria-label={`Call ${institute.contact.phonePrimary}`}
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="font-bold hidden sm:inline">{institute.contact.phonePrimary}</span>
            <span className="font-bold sm:hidden text-emerald-400">Call</span>
          </a>

          <a 
            href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors text-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-500/20" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
