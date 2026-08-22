import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Award, Users, ShieldCheck, ChevronRight } from 'lucide-react';
import { institute } from '../../config/institute';
import { toppers } from '../../config/results';

export default function Hero({ onOpenEnquiry }) {
  const topRanker = toppers.find(t => t.rank.includes('AIR 42')) || toppers[0];
  const secondRanker = toppers.find(t => t.rank.includes('99.94')) || toppers[3] || toppers[1];

  return (
    <section className="relative bg-[#F5F3ED] text-[#1C2430] pt-6 pb-16 lg:pt-10 lg:pb-20 overflow-hidden border-b border-stone-200/80">
      {/* Subtle Academic Watermark / Grid Lines (barely visible background texture) */}
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

      {/* Subtle Coordinate / Formula accents in corners (pure aesthetic restraint) */}
      <div className="absolute top-12 left-10 text-[11px] font-mono text-stone-400/40 select-none hidden lg:block tracking-widest">
        [SYS_COORD: 19.8762° N, 75.3433° E] • JEE_NEET_CORE
      </div>
      <div className="absolute bottom-8 right-12 text-[11px] font-mono text-stone-400/40 select-none hidden lg:block tracking-widest">
        f(x) = lim(Δt→0) • SELECTION_PROB ≥ 0.82
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Academic Promise & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Academic Eyebrow */}
            <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-xs border border-stone-300/80 px-3.5 py-1.5 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#8B1E26] animate-pulse shrink-0" />
              <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#0F2038]">
                JEE (MAIN & ADVANCED) • NEET-UG • MHT-CET • FOUNDATION
              </span>
            </div>

            {/* Powerful Specific Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#0F2038] leading-[1.12]">
                Build Strong Concepts. <br />
                <span className="text-[#8B1E26] font-accent italic font-bold">Earn The Top Rank.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-normal">
                {institute.subTagline} Built around a disciplined 6-step learning methodology, strict 35-student batch limits, and daily 1-on-1 IITian doubt resolution.
              </p>
            </div>

            {/* Academic Pillars Checklist */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-800 pt-1">
              <span className="flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-md border border-stone-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Strict 35-Student Batch Cap</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-md border border-stone-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Full-time IITian & Doctor Faculty</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-md border border-stone-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Daily 3-Hour Doubt Counters</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/programs"
                className="bg-[#8B1E26] hover:bg-[#6D171E] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm group"
              >
                <span>Explore Academic Programs</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Hero Book Counselling')}
                className="bg-white hover:bg-stone-50 text-[#0F2038] font-bold px-6 py-3.5 rounded-xl border border-stone-300/90 shadow-xs hover:shadow transition-all text-center text-sm flex items-center justify-center gap-1.5"
              >
                <span>Book Free Counselling</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Micro Trust Note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#8B1E26] shrink-0" />
              <span>Admissions Open for Session 2026-27 • Offline Center at Samarth Nagar</span>
            </div>

          </div>

          {/* Right Column: Editorial Visual Composition with Floating Proof Badges */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Background Geometric Layer */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-stone-200/60 via-stone-100/40 to-transparent rounded-3xl -rotate-1 pointer-events-none" />

            {/* Main Editorial Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-300/80 shadow-xl bg-slate-900 group">
              <img
                src={institute.images.heroImage}
                alt="Apex Momentum Academy Classroom Environment"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-103 transition-transform duration-700 opacity-95"
                loading="eager"
              />
              
              {/* Subtle bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2038]/85 via-[#0F2038]/20 to-transparent" />

              {/* Bottom Image Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider mb-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Real Classroom Focus</span>
                </div>
                <p className="text-xs text-slate-200 font-medium leading-snug">
                  Interactive problem-solving & conceptual physics lecture at Samarth Nagar Center.
                </p>
              </div>
            </div>

            {/* Floating Glass Proof Badge 1: Top Ranker Highlight */}
            {topRanker && (
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md text-[#0F2038] p-3 sm:p-3.5 rounded-xl border border-stone-200/90 shadow-xl max-w-[220px] transition-transform hover:-translate-y-0.5 duration-200">
                <div className="flex items-center gap-2.5">
                  <img
                    src={topRanker.photo}
                    alt={topRanker.name}
                    className="w-10 h-11 object-cover rounded-lg border border-stone-200 shrink-0"
                  />
                  <div>
                    <span className="inline-block bg-[#8B1E26] text-white text-[9px] font-black px-1.5 py-0.5 rounded tracking-wider uppercase">
                      {topRanker.exam}
                    </span>
                    <span className="block text-lg font-black text-[#0F2038] font-accent leading-none mt-1">
                      {topRanker.rank}
                    </span>
                    <p className="text-[10px] font-bold text-slate-600 truncate max-w-[120px]">
                      {topRanker.name.split(' ')[0]} • {topRanker.allocatedCollege.split(' ')[0]}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Floating Glass Proof Badge 2: Selection / Percentile Stat */}
            {secondRanker && (
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md text-[#0F2038] px-4 py-2.5 rounded-xl border border-stone-200/90 shadow-xl flex items-center gap-3 transition-transform hover:-translate-y-0.5 duration-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">
                    {secondRanker.exam} Topper
                  </span>
                  <span className="text-base font-black text-[#0F2038] font-accent block leading-tight">
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
