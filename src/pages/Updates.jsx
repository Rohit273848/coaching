import React from 'react';
import { updates } from '../config/updates';
import { Calendar, ArrowRight, Bell } from 'lucide-react';

export default function Updates({ onOpenEnquiry }) {
  return (
    <div className="py-6 sm:py-12 bg-[#F8F9FC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="bg-[#1D2B53] text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-2.5 border border-[#283C6E]">
          <span className="text-[11px] sm:text-xs font-black text-[#F8B81F] uppercase tracking-widest bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700 inline-block">
            ANNOUNCEMENTS & NEWS
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Latest Batch & Exam Notifications
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl font-normal">
            Stay updated with new batch commencement dates, Banking notification alerts, and MCAER PG-CET announcements.
          </p>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {updates.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-saarthi hover:shadow-saarthi-lg transition-all flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="relative aspect-16/10 sm:aspect-16/9 bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#1E4FA8] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#F8941F]" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-black text-base sm:text-lg text-[#1D2B53] leading-snug group-hover:text-[#1E4FA8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(item.title)}
                  className="w-full bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-900 font-black text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 min-h-[44px] cursor-pointer"
                >
                  <span>Enquire Regarding Notice</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1E4FA8]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
