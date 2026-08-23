import React from 'react';
import { Users, Trophy, Award, BookOpen, ShieldCheck, Clock } from 'lucide-react';
import { institute } from '../../config/institute';
import { resultSummary } from '../../config/results';

export default function KeyStats() {
  return (
    <section className="bg-white py-8 sm:py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile-First 2-Column Grid (4-Column on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-0 lg:divide-x divide-slate-200">
          
          {/* Stat 1 */}
          <div className="p-3.5 sm:p-4 lg:p-0 lg:px-8 bg-blue-50/40 sm:bg-transparent rounded-2xl sm:rounded-none border border-blue-100 sm:border-none text-left space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 mb-1">
              <Users className="w-4 h-4 text-[#1E4FA8] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#1E4FA8]">ENROLLED</span>
            </div>
            <span className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#1D2B53] tracking-tight block">
              25.2K+
            </span>
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-snug">
              Students guided across Maharashtra
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-3.5 sm:p-4 lg:p-0 lg:px-8 bg-amber-50/40 sm:bg-transparent rounded-2xl sm:rounded-none border border-amber-100 sm:border-none text-left space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 mb-1">
              <Trophy className="w-4 h-4 text-[#F8941F] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#F8941F]">SELECTIONS</span>
            </div>
            <span className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#1D2B53] tracking-tight block">
              {resultSummary.totalSelections}
            </span>
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-snug">
              In SBI, IBPS, RRB, AFO & MCAER
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-3.5 sm:p-4 lg:p-0 lg:px-8 bg-emerald-50/40 sm:bg-transparent rounded-2xl sm:rounded-none border border-emerald-100 sm:border-none text-left space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 mb-1">
              <Award className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-emerald-600">FACULTY</span>
            </div>
            <span className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#1D2B53] tracking-tight block">
              100% Master
            </span>
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-snug">
              Senior subject specialists & directors
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-3.5 sm:p-4 lg:p-0 lg:px-8 bg-slate-50 sm:bg-transparent rounded-2xl sm:rounded-none border border-slate-200 sm:border-none text-left space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 mb-1">
              <BookOpen className="w-4 h-4 text-[#1E4FA8] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#1E4FA8]">FACILITIES</span>
            </div>
            <span className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#1D2B53] tracking-tight block">
              Free Library
            </span>
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-snug">
              Silent study rooms & online CBT lab
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
