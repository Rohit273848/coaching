import React from 'react';
import { Link } from 'react-router-dom';
import { updates } from '../../config/updates';
import { features } from '../../config/features';
import { Calendar, ArrowRight } from 'lucide-react';

export default function UpdatesEditorial({ onOpenEnquiry }) {
  if (!features.updates) return null;

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-3 sm:gap-4 text-left">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[10px] sm:text-xs font-black text-[#0F4C81] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
              NOTICES & ANNOUNCEMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B192C] tracking-tight">
              Latest Batch Announcements & Alerts
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Stay informed on upcoming batch start dates, scholarship test schedules, and free demo classes.
            </p>
          </div>

          <Link
            to="/updates"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-black text-[#0F4C81] hover:text-[#0A3357] bg-blue-50/80 sm:bg-transparent px-4 py-2.5 sm:p-0 rounded-xl group shrink-0 min-h-[44px] w-full sm:w-auto"
          >
            <span>All Updates & Notices</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#F59E0B]" />
          </Link>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
          {updates.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#0F4C81] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  {item.category}
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-black text-base sm:text-lg text-[#0B192C] group-hover:text-[#0F4C81] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <button
                    onClick={() => { if (onOpenEnquiry) onOpenEnquiry(item.title); }}
                    className="text-xs font-black text-[#0F4C81] hover:text-[#0A3357] flex items-center gap-1 min-h-[36px] items-center cursor-pointer"
                  >
                    <span>Book Demo for this Batch</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
