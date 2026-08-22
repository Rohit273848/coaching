import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { institute } from '../../config/institute';

export default function MobileStickyCTA({ onOpenEnquiry }) {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 bg-[#0F2038] border-t border-slate-800 text-white z-40 p-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        {/* Call Action */}
        <a
          href={`tel:${institute.contact.phonePrimary}`}
          className="flex flex-col items-center justify-center py-1.5 bg-slate-800/80 hover:bg-slate-800 rounded-md font-semibold transition-colors"
        >
          <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span>Call Desk</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-md font-semibold transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-white mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Enquiry Action */}
        <button
          onClick={() => onOpenEnquiry && onOpenEnquiry('Mobile Sticky CTA')}
          className="flex flex-col items-center justify-center py-1.5 bg-[#8B1E26] hover:bg-[#6D171E] text-white rounded-md font-bold transition-colors"
        >
          <FileText className="w-4 h-4 text-[#D4AF37] mb-0.5" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
}
