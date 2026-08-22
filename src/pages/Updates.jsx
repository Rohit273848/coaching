import React from 'react';
import { Link } from 'react-router-dom';
import { updates } from '../config/updates';
import { Bell, Calendar, ArrowRight } from 'lucide-react';

export default function Updates({ onOpenEnquiry }) {
  return (
    <div className="py-12 bg-[#FBFBFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-[#0F2038] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-3 border border-slate-800">
          <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            ANNOUNCEMENTS & NEWS
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Latest Batch & Exam Notifications
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            Stay updated with new batch commencement dates, SAT scholarship test schedules, and competitive examination alerts.
          </p>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {updates.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#8B1E26] text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-[#8B1E26]" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(item.title)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
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
