import React from 'react';
import { updates } from '../config/updates';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Updates({ onOpenEnquiry }) {
  return (
    <div className="py-6 sm:py-12 bg-[#F8F7F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="bg-[#0F2038] text-white p-6 sm:p-10 rounded-2xl shadow-xl space-y-2.5 border border-slate-800">
          <span className="text-[10px] sm:text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700 inline-block">
            ANNOUNCEMENTS & NEWS
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Latest Batch & Exam Notifications
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-normal">
            Stay updated with new batch commencement dates, SAT scholarship test schedules, and competitive examination alerts.
          </p>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {updates.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-16/10 sm:aspect-16/9 bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-[#8B1E26] text-white text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#8B1E26]" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(item.title)}
                  className="w-full bg-stone-100 hover:bg-stone-200 active:scale-[0.98] text-slate-900 font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  <span>Enquire Regarding Announcement</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8B1E26]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
