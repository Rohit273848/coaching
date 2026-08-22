import React from 'react';
import { Award, Trophy, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import { resultSummary } from '../../config/results';
import { institute } from '../../config/institute';

export default function KeyStats() {
  return (
    <section className="bg-white py-10 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Statistics Row with Clean Hairline Dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
          
          {/* Stat 1 */}
          <div className="pt-4 lg:pt-0 lg:px-8 text-center lg:text-left space-y-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 mb-1">
              <ShieldCheck className="w-4 h-4 text-[#8B1E26]" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Experience</span>
            </div>
            <span className="text-3xl sm:text-4xl font-black text-[#0F2038] font-accent tracking-tight block">
              15+ Years
            </span>
            <p className="text-xs text-slate-600 font-medium">
              Dedicated coaching legacy in Chhatrapati Sambhajinagar
            </p>
          </div>

          {/* Stat 2 */}
          <div className="pt-4 lg:pt-0 lg:px-8 text-center lg:text-left space-y-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 mb-1">
              <Trophy className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Selections</span>
            </div>
            <span className="text-3xl sm:text-4xl font-black text-[#0F2038] font-accent tracking-tight block">
              {resultSummary.totalSelections}
            </span>
            <p className="text-xs text-slate-600 font-medium">
              Selections in Top IITs, NITs, AIIMS & Govt Colleges
            </p>
          </div>

          {/* Stat 3 */}
          <div className="pt-4 lg:pt-0 lg:px-8 text-center lg:text-left space-y-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 mb-1">
              <Award className="w-4 h-4 text-[#8B1E26]" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Top Ranks</span>
            </div>
            <span className="text-3xl sm:text-4xl font-black text-[#0F2038] font-accent tracking-tight block">
              84+ Top 500
            </span>
            <p className="text-xs text-slate-600 font-medium">
              All India Ranks produced in JEE Advanced & NEET
            </p>
          </div>

          {/* Stat 4 */}
          <div className="pt-4 lg:pt-0 lg:px-8 text-center lg:text-left space-y-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 mb-1">
              <TrendingUp className="w-4 h-4 text-emerald-700" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Success Ratio</span>
            </div>
            <span className="text-3xl sm:text-4xl font-black text-[#0F2038] font-accent tracking-tight block">
              82% Batch Rate
            </span>
            <p className="text-xs text-slate-600 font-medium">
              Students qualifying target competitive exams
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
