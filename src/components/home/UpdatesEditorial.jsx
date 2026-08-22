import React from 'react';
import { Link } from 'react-router-dom';
import { updates } from '../../config/updates';
import { features } from '../../config/features';
import { Calendar, ArrowRight } from 'lucide-react';

export default function UpdatesEditorial({ onOpenEnquiry }) {
  if (!features.updates) return null;

  const featured = updates[0];
  const secondary = updates.slice(1, 3);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F8F7F4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[10px] sm:text-xs font-extrabold text-[#8B1E26] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
              ACADEMIC DISPATCHES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2038] tracking-tight">
              Latest Announcements & Notifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Stay informed on batch commencement dates, scholarship tests, and examination alerts.
            </p>
          </div>

          <Link
            to="/updates"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#8B1E26] hover:text-[#6D171E] group shrink-0 min-h-[44px] items-center"
          >
            <span>All Announcements</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Featured Article */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-300/80 overflow-hidden shadow-sm flex flex-col justify-between group">
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-slate-900 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 bg-[#8B1E26] text-white text-[9px] sm:text-[10px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider">
                FEATURED • {featured.category}
              </span>
            </div>

            <div className="p-5 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#8B1E26]" />
                  <span>{featured.date}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-extrabold text-[#0F2038] tracking-tight leading-snug">
                  {featured.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {featured.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(featured.title)}
                  className="text-xs font-extrabold text-[#8B1E26] hover:text-[#6D171E] flex items-center gap-1.5 min-h-[44px]"
                >
                  <span>Enquire Regarding This Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 2 Compact Dispatches */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {secondary.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-stone-300/80 p-4 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-2.5"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#0F2038] bg-stone-100 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-sm sm:text-base text-[#0F2038] leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-stone-100">
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry(item.title)}
                    className="text-xs font-bold text-[#8B1E26] hover:underline flex items-center gap-1 min-h-[36px]"
                  >
                    <span>Read Details & Register</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
