import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { institute } from '../../config/institute';
import { features } from '../../config/features';

export default function TopBar({ onOpenEnquiry }) {
  if (!features.topAnnouncementBar || !institute.announcement?.enabled) return null;

  return (
    <div className="bg-[#0B1526] text-white text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Announcement Ticker */}
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="bg-[#8B1E26] text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase flex items-center gap-1 shrink-0">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            {institute.announcement.badge}
          </span>
          <span className="truncate text-slate-300 font-medium">
            {institute.announcement.text}
          </span>
          <button 
            onClick={() => onOpenEnquiry && onOpenEnquiry('SAT Scholarship Test')}
            className="hidden sm:inline-flex items-center gap-1 text-[#D4AF37] font-semibold hover:underline shrink-0 ml-1"
          >
            {institute.announcement.ctaText}
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Right: Quick Location & Direct Contact */}
        <div className="flex items-center gap-4 text-slate-300 shrink-0">
          <div className="hidden lg:flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{institute.location.city}, {institute.location.state}</span>
          </div>

          <a 
            href={`tel:${institute.contact.phonePrimary}`} 
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold">{institute.contact.phonePrimary}</span>
          </a>

          <a 
            href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-500/20" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
