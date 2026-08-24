import React from 'react';
import { Phone, Sparkles, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { institute } from '../../config/institute';
import { features } from '../../config/features';

export default function TopBar({ onOpenEnquiry }) {
  if (!features.topAnnouncementBar || !institute.announcement?.enabled) return null;

  // Repeated items for smooth seamless continuous marquee scroller
  const marqueeItems = [
    institute.announcement.text,
    institute.announcement.phoneText,
    "Admission Open for Offline & Online Batches",
    "MCAER PG-CET 2026 Special Batch",
    institute.announcement.text,
    institute.announcement.phoneText,
    "Admission Open for Offline & Online Batches",
    "MCAER PG-CET 2026 Special Batch"
  ];

  return (
    <div className="bg-[#1D2B53] text-white text-xs py-2 px-2 border-b border-[#283868] relative z-30 overflow-hidden">
      <div className="flex items-center justify-between gap-4 max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Left: Animated Infinite Ticker Scroller */}
        <div className="flex items-center gap-2 overflow-hidden flex-1 relative">
          <div className="bg-[#F8B81F] text-[#1D2B53] text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shrink-0 z-10 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#1D2B53]" />
            <span>UPDATE</span>
          </div>

          <div className="overflow-hidden whitespace-nowrap w-full relative">
            <div className="animate-marquee flex items-center gap-8 text-[11px] sm:text-xs font-medium text-slate-200">
              {marqueeItems.map((item, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="text-[#F8B81F]">★</span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Phone & Location Direct Shortcut */}
        <div className="hidden md:flex items-center gap-4 text-slate-300 shrink-0 text-xs font-medium">
          <div className="flex items-center gap-1 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#F8B81F]" />
            <span className="truncate">Paithan Gate, Sambhajinagar</span>
          </div>

          <a 
            href={`tel:${institute.contact.phonePrimary}`} 
            className="flex items-center gap-1 text-[#F8B81F] hover:text-white font-bold transition-colors"
            aria-label={`Call ${institute.contact.phonePrimary}`}
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>{institute.contact.phonePrimary}</span>
          </a>

          <a 
            href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
