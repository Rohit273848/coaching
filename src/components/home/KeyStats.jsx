import React from 'react';
import { Award, Trophy, TrendingUp, ShieldCheck } from 'lucide-react';
import { resultSummary } from '../../config/results';

export default function KeyStats() {
  return (
    <section className="bg-white py-8 sm:py-10 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile-First 2-Column Grid (4-Column on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-0 lg:divide-x divide-stone-200">
          
          {/* Stat 1 */}
          <div className="p-3 sm:p-4 lg:p-0 lg:px-8 bg-stone-50/70 sm:bg-transparent rounded-xl sm:rounded-none border border-stone-200/80 sm:border-none text-left space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 mb-0.5 sm:mb-1">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B1E26] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider">Experience</span>
            </div>
            <span className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#0F2038] font-accent tracking-tight block">
              15+ Years
            </span>
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-snug">
              Academic excellence in Sambhajinagar
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-3 sm:p-4 lg:p-0 lg:px-8 bg-stone-50/70 sm:bg-transparent rounded-xl sm:rounded-none border border-stone-200/80 sm:border-none text-left space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 mb-0.5 sm:mb-1">
              <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider">Selections</span>
            </div>
            <span className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#0F2038] font-accent tracking-tight block">
              {resultSummary.totalSelections}
            </span>
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-snug">
              In Top IITs, NITs, AIIMS & Govt Colleges
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-3 sm:p-4 lg:p-0 lg:px-8 bg-stone-50/70 sm:bg-transparent rounded-xl sm:rounded-none border border-stone-200/80 sm:border-none text-left space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 mb-0.5 sm:mb-1">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B1E26] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider">Top Ranks</span>
            </div>
            <span className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#0F2038] font-accent tracking-tight block">
              84+ Top 500
            </span>
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-snug">
              AIR Ranks produced in JEE & NEET
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-3 sm:p-4 lg:p-0 lg:px-8 bg-stone-50/70 sm:bg-transparent rounded-xl sm:rounded-none border border-stone-200/80 sm:border-none text-left space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 mb-0.5 sm:mb-1">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider">Success Rate</span>
            </div>
            <span className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#0F2038] font-accent tracking-tight block">
              82% Batch Rate
            </span>
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-snug">
              Students qualifying target exams
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
