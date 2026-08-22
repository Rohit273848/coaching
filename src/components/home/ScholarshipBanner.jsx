import React from 'react';
import { Award, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { features } from '../../config/features';

export default function ScholarshipBanner({ onOpenEnquiry }) {
  if (!features.scholarshipTest) return null;

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-r from-[#8B1E26] via-[#751A20] to-[#0F2038] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-10 border border-white/20 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          
          <div className="space-y-2.5 sm:space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#D4AF37] text-slate-900 text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>SCHOLARSHIP & ADMISSION TEST (SAT)</span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-tight">
              Earn Up to 100% Fee Concession on Academic Merit
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl font-normal">
              Appear for our weekly SAT diagnostic test (Online / Offline at Samarth Nagar Center) to test your conceptual rank and qualify for merit fee waivers.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-[11px] sm:text-xs font-semibold text-amber-200 pt-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Next Test: Upcoming Sunday</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Classes 8th to 12th & Droppers</span>
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('SAT Scholarship Registration')}
              className="w-full lg:w-auto bg-[#D4AF37] hover:bg-[#C29F2F] active:scale-[0.98] text-slate-900 font-extrabold text-sm px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px]"
            >
              <span>Register for SAT Test</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
