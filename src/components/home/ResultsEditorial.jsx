import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, GraduationCap, Quote, CheckCircle2 } from 'lucide-react';
import { toppers, resultSummary } from '../../config/results';
import { features } from '../../config/features';

export default function ResultsEditorial() {
  if (!features.results) return null;

  // Featured top ranker
  const featured = toppers.find(t => t.rank.includes('AIR 42')) || toppers[0];
  // Supporting rankers
  const supporting = toppers.filter(t => t.id !== featured.id).slice(0, 3);

  return (
    <section className="py-16 lg:py-20 bg-[#F8F7F4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Archive Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-extrabold text-[#8B1E26] uppercase tracking-widest bg-red-100/60 px-3 py-1 rounded-full border border-red-200/60">
              MEASURABLE EVIDENCE • HALL OF FAME
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2038] tracking-tight">
              Ranks Created Through Rigour & Discipline
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Every rank published here is 100% genuine with real student names, photograph verification, and verified college admissions.
            </p>
          </div>

          <Link
            to="/results"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#8B1E26] hover:text-[#6D171E] group shrink-0"
          >
            <span>Explore Complete Results Archive</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Layout: Large Featured Topper on Left + 3 Supporting Ranks on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Large Featured Topper Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-300/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            {/* Top Accent Strip */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <span className="bg-[#0F2038] text-white text-xs font-extrabold px-3 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                {featured.exam} • {featured.year} FEATURED RANKER
              </span>
              <span className="text-xs font-bold text-slate-500">
                {featured.courseJoined}
              </span>
            </div>

            {/* Main Featured Content */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Photo */}
              <div className="sm:col-span-5 relative">
                <img
                  src={featured.photo}
                  alt={featured.name}
                  className="w-full h-64 sm:h-72 object-cover rounded-xl border-2 border-stone-200 shadow-md"
                />
                <div className="absolute -bottom-3 -right-2 bg-[#8B1E26] text-white font-extrabold text-xs px-2.5 py-1 rounded-md shadow">
                  Session {featured.year}
                </div>
              </div>

              {/* Rank Info */}
              <div className="sm:col-span-7 space-y-3">
                <div className="inline-block bg-amber-50 border border-amber-200/90 px-3.5 py-1.5 rounded-lg">
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

                <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/70 text-xs text-slate-700 flex items-center gap-2">
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
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-slate-500">
              <span>Verified IIT Bombay Admission</span>
              <span className="font-semibold text-[#0F2038]">Apex Momentum 2-Year Classroom Program</span>
            </div>

          </div>

          {/* Right: 3 Supporting Standout Ranks (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {supporting.map((topper) => (
              <div
                key={topper.id}
                className="bg-white rounded-xl border border-stone-300/80 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <img
                  src={topper.photo}
                  alt={topper.name}
                  className="w-16 h-18 sm:w-20 sm:h-22 object-cover rounded-lg border border-stone-200 shrink-0 group-hover:scale-102 transition-transform"
                />

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8B1E26] bg-red-50 px-2 py-0.5 rounded">
                      {topper.exam} {topper.year}
                    </span>
                    {topper.score && (
                      <span className="text-[10px] font-bold text-slate-500">
                        {topper.score}
                      </span>
                    )}
                  </div>

                  <span className="text-xl sm:text-2xl font-black text-[#0F2038] font-accent block leading-tight">
                    {topper.rank}
                  </span>

                  <h4 className="font-extrabold text-sm text-slate-900 leading-snug">
                    {topper.name}
                  </h4>

                  <p className="text-xs text-slate-600 flex items-center gap-1 truncate">
                    <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span className="truncate">{topper.allocatedCollege}</span>
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
