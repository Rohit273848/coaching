import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-saarthi hover:border-blue-200"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-black text-[#1D2B53] text-sm sm:text-base hover:text-[#1E4FA8] transition-colors min-h-[52px] cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E4FA8] shrink-0" />
                <span className="leading-snug">{item.question}</span>
              </span>
              <ChevronDown
                className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#1E4FA8]' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in-50 font-normal">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
