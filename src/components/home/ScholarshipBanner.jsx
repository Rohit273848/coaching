import React from 'react';
import { Award, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { features } from '../../config/features';

export default function ScholarshipBanner({ onOpenEnquiry }) {
  if (!features.scholarshipTest) return null;

  return (
    <section className="py-8 sm:py-12 lg:py-14 bg-gradient-to-r from-[#0B192C] via-[#0F4C81] to-[#0A3357] text-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-7 lg:p-10 border border-white/20 shadow-xl flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 sm:gap-8">
          
          <div className="space-y-2 sm:space-y-3 text-left">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#F59E0B] text-[#0B192C] text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>PERL TALENT SCHOLARSHIP TEST</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-black text-white tracking-tight leading-tight">
              Earn Merit-Based Scholarships for JEE, NEET & Foundation
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl font-normal">
              Appear for our diagnostic scholarship test (Offline at New Usmanpura Center) to evaluate your current aptitude and qualify for merit fee waivers.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-2.5 sm:gap-5 text-[10.5px] sm:text-xs font-semibold text-amber-200 pt-0.5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Next Test: Every Sunday</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Classes 8th to 12th & Repeaters</span>
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Scholarship Test Registration')}
              className="w-full lg:w-auto bg-[#F59E0B] hover:bg-[#D97706] active:scale-[0.98] text-[#0B192C] font-black text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
            >
              <span>Register for Scholarship Test</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
