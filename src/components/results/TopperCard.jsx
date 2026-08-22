import React from 'react';
import { Award, GraduationCap, Quote } from 'lucide-react';

export default function TopperCard({ topper }) {
  const isTopRank = topper.rank.includes('AIR 4') || topper.rank.includes('AIR 1') || topper.rank.includes('99.9');

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
      {/* Header Badge */}
      <div className={`px-4 py-2.5 flex items-center justify-between border-b ${
        isTopRank ? 'bg-[#0F2038] text-white border-slate-800' : 'bg-slate-50 text-slate-800 border-slate-200'
      }`}>
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1">
          <Award className="w-3.5 h-3.5" />
          {topper.exam} {topper.year}
        </span>
        <span className="text-[11px] font-semibold opacity-80">
          {topper.courseJoined}
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
              className="w-20 h-24 object-cover rounded-lg border-2 border-slate-200 shadow-xs group-hover:scale-102 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute -bottom-2 -right-1 bg-[#8B1E26] text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
              {topper.year}
            </div>
          </div>

          {/* Rank & Student Info */}
          <div className="flex-1 space-y-1">
            {/* AIR Rank Display */}
            <div className="inline-block bg-amber-50 border border-amber-200 px-3 py-1 rounded-md mb-1">
              <span className="text-2xl font-black text-[#0F2038] font-accent tracking-tight block">
                {topper.rank}
              </span>
            </div>

            <h3 className="font-bold text-base text-slate-900 leading-snug">
              {topper.name}
            </h3>

            {topper.score && (
              <p className="text-xs font-semibold text-emerald-700">
                Score: {topper.score}
              </p>
            )}

            {topper.allocatedCollege && (
              <p className="text-xs font-medium text-slate-600 flex items-center gap-1 pt-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#8B1E26] shrink-0" />
                <span className="truncate">{topper.allocatedCollege}</span>
              </p>
            )}
          </div>
        </div>

        {/* Student Testimonial Snippet */}
        {topper.quote && (
          <div className="bg-slate-50 border-l-2 border-[#D4AF37] p-3 rounded-r-md text-xs text-slate-600 italic relative">
            <Quote className="w-3.5 h-3.5 text-slate-300 absolute top-2 right-2 rotate-180" />
            "{topper.quote}"
          </div>
        )}
      </div>
    </div>
  );
}
