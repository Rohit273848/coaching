import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, GraduationCap, Trophy, CheckCircle2, Sparkles } from 'lucide-react';
import { toppers, resultSummary } from '../../config/results';
import { features } from '../../config/features';

export default function ResultsEditorial() {
  if (!features.results) return null;

  const featured = toppers[0];
  const supporting = toppers.slice(1, 5);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-black text-[#1E4FA8] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
              SUCCESS STORIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1D2B53] tracking-tight">
              {resultSummary.headline}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-bold">
              {resultSummary.marathiHeadline}
            </p>
          </div>

          <Link
            to="/results"
            className="inline-flex items-center gap-1.5 text-xs font-black text-[#1E4FA8] hover:text-[#163E85] group shrink-0 min-h-[44px] items-center"
          >
            <span>View All 1,000+ Selections</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Featured Topper Card */}
          <div className="lg:col-span-7 bg-[#F8F9FC] rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-saarthi flex flex-col justify-between space-y-5">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <span className="bg-[#1E4FA8] text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-[#F8B81F]" />
                {featured.role}
              </span>
              <span className="text-xs font-bold text-slate-500">
                {featured.score}
              </span>
            </div>

            {/* Content Body */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
              
              {/* Photo */}
              <div className="sm:col-span-5 relative flex justify-center sm:block">
                <div className="relative w-48 sm:w-full">
                  <img
                    src={featured.photo}
                    alt={featured.name}
                    className="w-full h-56 sm:h-72 object-cover rounded-2xl border-2 border-white shadow-md"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-2 -right-1 bg-[#1E4FA8] text-white font-black text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-lg shadow">
                    Selected
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="sm:col-span-7 space-y-3">
                <div className="inline-block bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-xl">
                  <span className="text-2xl sm:text-3xl font-black text-[#1D2B53] tracking-tight block">
                    {featured.rank}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1D2B53]">
                    {featured.name}
                  </h3>
                  {featured.marathiName && (
                    <p className="text-xs font-bold text-[#F8941F]">
                      {featured.marathiName}
                    </p>
                  )}
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#1E4FA8] shrink-0" />
                  <span className="font-bold">{featured.allocatedCollege}</span>
                </div>

                {featured.quote && (
                  <p className="text-xs text-slate-600 italic leading-relaxed pt-1 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    "{featured.quote}"
                  </p>
                )}
              </div>

            </div>

            {/* Card Footer */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-[#1E4FA8]">Saarthi Classroom Batch</span>
              <span className="font-bold text-slate-700">100% Authentic Result</span>
            </div>

          </div>

          {/* Supporting Rankers Grid (4 items) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {supporting.map((topper) => (
              <div
                key={topper.id}
                className="bg-[#F8F9FC] rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all flex items-center gap-3.5"
              >
                <img
                  src={topper.photo}
                  alt={topper.name}
                  className="w-16 h-18 sm:w-18 sm:h-20 object-cover rounded-xl border border-slate-200 shrink-0"
                  loading="lazy"
                />

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase text-[#1E4FA8] bg-blue-50 px-2 py-0.5 rounded truncate">
                      {topper.role}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 shrink-0">
                      {topper.score.split(' ')[0]}
                    </span>
                  </div>

                  <h4 className="font-black text-sm sm:text-base text-[#1D2B53] leading-tight truncate">
                    {topper.name}
                  </h4>

                  <p className="text-[11px] font-semibold text-[#F8941F] truncate">
                    {topper.marathiName || topper.exam}
                  </p>

                  <p className="text-[11px] text-slate-600 truncate flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-[#1E4FA8] shrink-0" />
                    <span>{topper.allocatedCollege}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
