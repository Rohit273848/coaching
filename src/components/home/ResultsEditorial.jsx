import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, GraduationCap, Sparkles } from 'lucide-react';
import { toppers } from '../../config/results';
import { features } from '../../config/features';

export default function ResultsEditorial() {
  if (!features.results) return null;

  // Featured top ranker
  const featured = toppers.find(t => t.rank.includes('AIR 42')) || toppers[0];
  // Supporting rankers
  const supporting = toppers.filter(t => t.id !== featured.id).slice(0, 3);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F7F4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[10px] sm:text-xs font-extrabold text-[#8B1E26] uppercase tracking-widest bg-red-100/70 px-3 py-1 rounded-full border border-red-200/60 inline-block">
              MEASURABLE EVIDENCE • HALL OF FAME
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2038] tracking-tight">
              Ranks Created Through Rigour & Discipline
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              100% verified results with real student names, photographs, and verified college admissions.
            </p>
          </div>

          <Link
            to="/results"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#8B1E26] hover:text-[#6D171E] group shrink-0 min-h-[44px] items-center"
          >
            <span>Explore Complete Results Archive</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile-First Results Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Featured Topper Showcase */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-300/80 p-5 sm:p-8 shadow-sm flex flex-col justify-between space-y-5">
            
            {/* Top Accent Strip */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <span className="bg-[#0F2038] text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                {featured.exam} {featured.year}
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-slate-500 truncate max-w-[140px] sm:max-w-none">
                {featured.courseJoined}
              </span>
            </div>

            {/* Main Featured Content (Stacked on Mobile, 2-Col on Tablet/Desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
              
              {/* Photo */}
              <div className="sm:col-span-5 relative flex justify-center sm:block">
                <div className="relative w-48 sm:w-full">
                  <img
                    src={featured.photo}
                    alt={featured.name}
                    className="w-full h-56 sm:h-72 object-cover rounded-xl border-2 border-stone-200 shadow-md"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-2 -right-1 bg-[#8B1E26] text-white font-extrabold text-[11px] px-2.5 py-0.5 rounded shadow">
                    Session {featured.year}
                  </div>
                </div>
              </div>

              {/* Rank Details */}
              <div className="sm:col-span-7 space-y-2.5 sm:space-y-3">
                <div className="inline-block bg-amber-50 border border-amber-200/90 px-3.5 py-1.5 rounded-xl">
                  <span className="text-3xl sm:text-4xl font-black text-[#0F2038] font-accent tracking-tight block">
                    {featured.rank}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F2038] tracking-tight">
                    {featured.name}
                  </h3>
                  <p className="text-xs font-bold text-emerald-700 mt-0.5">
                    Score: {featured.score}
                  </p>
                </div>

                <div className="bg-stone-50 p-2.5 sm:p-3 rounded-lg border border-stone-200/80 text-xs text-slate-700 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#8B1E26] shrink-0" />
                  <span className="font-semibold">{featured.allocatedCollege}</span>
                </div>

                {featured.quote && (
                  <p className="text-xs text-slate-600 italic leading-relaxed pt-1">
                    "{featured.quote}"
                  </p>
                )}
              </div>

            </div>

            {/* Bottom Footer */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-500">
              <span>Verified Admission</span>
              <span className="font-semibold text-[#0F2038] truncate max-w-[180px] sm:max-w-none">
                2-Year Classroom Program
              </span>
            </div>

          </div>

          {/* Supporting Ranks: Horizontal Touch-Swipe on Mobile, Stacked on Desktop */}
          <div className="lg:col-span-5">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-3 sm:gap-4 pb-2 lg:pb-0 snap-x no-scrollbar">
              {supporting.map((topper) => (
                <div
                  key={topper.id}
                  className="w-[280px] xs:w-[310px] sm:w-[340px] lg:w-full shrink-0 snap-start bg-white rounded-xl border border-stone-300/80 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex items-center gap-3 sm:gap-4"
                >
                  <img
                    src={topper.photo}
                    alt={topper.name}
                    className="w-16 h-18 sm:w-20 sm:h-22 object-cover rounded-lg border border-stone-200 shrink-0"
                    loading="lazy"
                  />

                  <div className="flex-1 space-y-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#8B1E26] bg-red-50 px-2 py-0.5 rounded truncate">
                        {topper.exam} {topper.year}
                      </span>
                      {topper.score && (
                        <span className="text-[10px] font-bold text-slate-500 shrink-0">
                          {topper.score.split(' ')[0]}
                        </span>
                      )}
                    </div>

                    <span className="text-xl sm:text-2xl font-black text-[#0F2038] font-accent block leading-tight">
                      {topper.rank}
                    </span>

                    <h4 className="font-extrabold text-sm text-slate-900 leading-tight truncate">
                      {topper.name}
                    </h4>

                    <p className="text-[11px] sm:text-xs text-slate-600 flex items-center gap-1 truncate">
                      <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span className="truncate">{topper.allocatedCollege}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="flex lg:hidden items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium pt-2">
              <span>← Swipe for more toppers →</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
