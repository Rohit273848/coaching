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
            className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#0F2038] transition-colors"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-2.5">
                <HelpCircle className="w-5 h-5 text-[#8B1E26] shrink-0" />
                <span>{item.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#8B1E26]' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in-50">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
