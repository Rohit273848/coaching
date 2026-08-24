import React from 'react';
import { Phone, Sparkles, MessageCircle, MapPin, Star } from 'lucide-react';
import { institute } from '../../config/institute';
import { features } from '../../config/features';

export default function TopBar({ onOpenEnquiry }) {
  if (!features.topAnnouncementBar || !institute.announcement?.enabled) return null;

  // Repeated items for smooth continuous marquee scroller
  const marqueeItems = [
    institute.announcement.text,
    "⭐ 4.8 / 5.0 Google Rated Coaching in Aurangabad (370+ Reviews)",
    "Small Batch Sizes • AC Smart Classrooms with Digital Boards",
    "Physics • Chemistry • Mathematics • Biology (PCMB)",
    "IIT-JEE (Mains & Advanced) • NEET (UG) • Foundation (Class 8th-10th)",
    institute.announcement.phoneText
  ];

  return (
    <div className="bg-[#0B192C] text-white text-xs py-2 px-2 border-b border-slate-800 relative z-30 overflow-hidden">
      <div className="flex items-center justify-between gap-4 max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Left: Animated Infinite Ticker Scroller */}
        <div className="flex items-center gap-2 overflow-hidden flex-1 relative">
          <div className="bg-[#F59E0B] text-[#0B192C] text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shrink-0 z-10 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#0B192C]" />
            <span>ADMISSIONS</span>
          </div>

          <div className="overflow-hidden whitespace-nowrap w-full relative">
            <div className="animate-marquee flex items-center gap-8 text-[11px] sm:text-xs font-medium text-slate-200">
              {marqueeItems.map((item, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="text-[#F59E0B]">✦</span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Phone & Location Direct Shortcut */}
        <div className="hidden md:flex items-center gap-4 text-slate-300 shrink-0 text-xs font-medium">
          <div className="flex items-center gap-1 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="truncate">New Usmanpura, Aurangabad</span>
          </div>

          <a 
            href={`tel:${institute.contact.phonePrimary}`} 
            className="flex items-center gap-1 text-[#F59E0B] hover:text-white font-bold transition-colors"
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
