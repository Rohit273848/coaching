import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { institute } from '../../config/institute';
import { toppers } from '../../config/results';

export default function Hero({ onOpenEnquiry }) {
  const topRanker = toppers.find(t => t.rank.includes('AIR 42')) || toppers[0];
  const secondRanker = toppers.find(t => t.rank.includes('99.94')) || toppers[3] || toppers[1];

  return (
    <section className="relative bg-[#F5F3ED] text-[#1C2430] pt-4 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 overflow-hidden border-b border-stone-200/80">
      {/* Subtle Academic Watermark / Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] select-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="academic-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0F2038" strokeWidth="1" />
              <circle cx="24" cy="24" r="0.8" fill="#0F2038" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#academic-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Academic Promise & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Academic Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xs border border-stone-300/80 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#8B1E26] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase text-[#0F2038] truncate">
                JEE • NEET • MHT-CET • FOUNDATION
              </span>
            </div>

            {/* Powerful Specific Headline (Mobile-First Typography) */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#0F2038] leading-[1.15]">
                Build Strong Concepts. <br />
                <span className="text-[#8B1E26] font-accent italic font-bold">Earn The Top Rank.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-xl">
                {institute.subTagline} Built around a disciplined 6-step learning methodology, strict 35-student batch limits, and daily 1-on-1 IITian doubt resolution.
              </p>
            </div>

            {/* Academic Pillars Checklist */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap gap-2 text-xs font-semibold text-slate-800 pt-1">
              <span className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1.5 rounded-lg border border-stone-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Strict 35-Student Cap</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1.5 rounded-lg border border-stone-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Full-time IITian Faculty</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1.5 rounded-lg border border-stone-200/80 xs:col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Daily 3-Hour Doubt Desks</span>
              </span>
            </div>

            {/* CTAs (Full width on mobile for easy thumb-tapping) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/programs"
                className="bg-[#8B1E26] hover:bg-[#6D171E] active:scale-[0.98] text-white font-extrabold px-6 py-3.5 sm:py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm min-h-[48px]"
              >
                <span>Explore Academic Programs</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>

              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Hero Book Counselling')}
                className="bg-white hover:bg-stone-50 active:scale-[0.98] text-[#0F2038] font-bold px-6 py-3.5 sm:py-4 rounded-xl border border-stone-300 shadow-xs transition-all flex items-center justify-center gap-1.5 text-sm min-h-[48px]"
              >
                <span>Book Free Counselling</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Micro Trust Note */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-[#8B1E26] shrink-0" />
              <span>Admissions Open for Session 2026-27 • Samarth Nagar Center</span>
            </div>

          </div>

          {/* Right Column: Mobile-Friendly Composition with In-Bounds Floating Proof Badges */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Main Editorial Image */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-300/80 shadow-lg bg-slate-900">
              <img
                src={institute.images.heroImage}
                alt="Apex Momentum Academy Classroom"
                className="w-full h-[260px] xs:h-[300px] sm:h-[360px] lg:h-[420px] object-cover object-center opacity-95"
                loading="eager"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2038]/85 via-[#0F2038]/20 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider mb-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Real Classroom Focus</span>
                </div>
                <p className="text-xs text-slate-200 font-medium leading-snug truncate sm:whitespace-normal">
                  Interactive problem-solving & conceptual physics lecture at Samarth Nagar.
                </p>
              </div>
            </div>

            {/* Floating Glass Proof Badge 1: Top Ranker */}
            {topRanker && (
              <div className="absolute -top-3 left-2 sm:-top-4 sm:-left-4 bg-white/95 backdrop-blur-md text-[#0F2038] p-2.5 sm:p-3.5 rounded-xl border border-stone-200 shadow-xl max-w-[190px] sm:max-w-[220px] transition-transform">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <img
                    src={topRanker.photo}
                    alt={topRanker.name}
                    className="w-8 h-10 sm:w-10 sm:h-12 object-cover rounded-lg border border-stone-200 shrink-0"
                  />
                  <div>
                    <span className="inline-block bg-[#8B1E26] text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded tracking-wider uppercase">
                      {topRanker.exam}
                    </span>
                    <span className="block text-base sm:text-lg font-black text-[#0F2038] font-accent leading-none mt-0.5 sm:mt-1">
                      {topRanker.rank}
                    </span>
                    <p className="text-[9px] sm:text-[10px] font-bold text-slate-600 truncate max-w-[100px] sm:max-w-[120px]">
                      {topRanker.name.split(' ')[0]} • {topRanker.allocatedCollege.split(' ')[0]}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Floating Glass Proof Badge 2: Percentile Stat */}
            {secondRanker && (
              <div className="absolute -bottom-3 right-2 sm:-bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md text-[#0F2038] px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-stone-200 shadow-xl flex items-center gap-2 sm:gap-3 transition-transform">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">
                    {secondRanker.exam} Topper
                  </span>
                  <span className="text-sm sm:text-base font-black text-[#0F2038] font-accent block leading-tight">
                    {secondRanker.rank}
                  </span>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
