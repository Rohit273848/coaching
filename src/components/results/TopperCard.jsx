import React from 'react';
import { GraduationCap, Quote, Trophy } from 'lucide-react';

export default function TopperCard({ topper }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col h-full group hover:-translate-y-1">
      {/* Header Badge */}
      <div className="px-4 py-2.5 bg-[#0B192C] text-white flex items-center justify-between border-b border-slate-800">
        <span className="text-xs font-black uppercase tracking-wider text-[#F59E0B] flex items-center gap-1">
          <Trophy className="w-3.5 h-3.5" />
          {topper.exam || topper.role}
        </span>
        <span className="text-[11px] font-bold text-slate-300">
          {topper.year}
        </span>
      </div>

      {/* Main Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="flex items-start gap-4">
          {/* Student Photo */}
          <div className="relative shrink-0">
            <img
              src={topper.photo}
              alt={topper.name}
              className="w-20 h-24 object-cover rounded-2xl border-2 border-slate-200 shadow-xs group-hover:scale-102 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute -bottom-2 -right-1 bg-[#0F4C81] text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow">
              Achiever
            </div>
          </div>

          {/* Rank & Student Info */}
          <div className="flex-1 space-y-1 min-w-0">
            <div className="inline-block bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-lg mb-1">
              <span className="text-xs font-black text-[#0B192C] block truncate">
                {topper.rank}
              </span>
            </div>

            <h3 className="font-black text-base text-[#0B192C] leading-snug truncate">
              {topper.name}
            </h3>

            {topper.score && (
              <p className="text-xs font-bold text-emerald-700">
                {topper.score}
              </p>
            )}

            {topper.allocatedCollege && (
              <p className="text-xs font-medium text-slate-700 flex items-center gap-1 pt-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#0F4C81] shrink-0" />
                <span className="truncate">{topper.allocatedCollege}</span>
              </p>
            )}
          </div>
        </div>

        {/* Student Testimonial Snippet */}
        {topper.quote && (
          <div className="bg-slate-50 border-l-3 border-[#0F4C81] p-3 rounded-r-xl text-xs text-slate-600 italic relative">
            <Quote className="w-3.5 h-3.5 text-slate-300 absolute top-2 right-2 rotate-180" />
            "{topper.quote}"
          </div>
        )}
      </div>
    </div>
  );
}
