import React from 'react';
import { Users, Trophy, Star, Sparkles } from 'lucide-react';

export default function KeyStats() {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Unified 4-Box Grid: 2x2 on Mobile, 4-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          
          {/* Box 1: Google Rating & Reviews */}
          <div className="p-3.5 xs:p-4 sm:p-5 bg-amber-50/60 rounded-2xl sm:rounded-3xl border border-amber-200/90 text-left space-y-1.5 shadow-2xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-1.5 text-amber-900">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-500 shrink-0" />
              <span className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider">
                REPUTATION
              </span>
            </div>
            <div>
              <span className="text-xl xs:text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B192C] tracking-tight block leading-none">
                4.8 / 5.0
              </span>
            </div>
            <p className="text-[10.5px] xs:text-[11px] sm:text-xs text-slate-600 font-semibold leading-snug">
              370+ Verified Google Reviews
            </p>
          </div>

          {/* Box 2: Selection & Ranks */}
          <div className="p-3.5 xs:p-4 sm:p-5 bg-blue-50/60 rounded-2xl sm:rounded-3xl border border-blue-200/90 text-left space-y-1.5 shadow-2xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-1.5 text-[#0F4C81]">
              <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0F4C81] shrink-0" />
              <span className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider">
                SELECTION RATE
              </span>
            </div>
            <div>
              <span className="text-xl xs:text-2xl sm:text-3xl lg:text-[34px] font-black text-emerald-600 tracking-tight block leading-none">
                98%
              </span>
            </div>
            <p className="text-[10.5px] xs:text-[11px] sm:text-xs text-slate-600 font-semibold leading-snug">
              IITs, NITs, GMCs & Board Merit
            </p>
          </div>

          {/* Box 3: Small Batches & Mentorship */}
          <div className="p-3.5 xs:p-4 sm:p-5 bg-emerald-50/60 rounded-2xl sm:rounded-3xl border border-emerald-200/90 text-left space-y-1.5 shadow-2xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-1.5 text-emerald-800">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider">
                ATTENTION
              </span>
            </div>
            <div>
              <span className="text-lg xs:text-xl sm:text-2xl lg:text-[28px] font-black text-[#0B192C] tracking-tight block leading-none sm:pt-0.5">
                Small Batches
              </span>
            </div>
            <p className="text-[10.5px] xs:text-[11px] sm:text-xs text-slate-600 font-semibold leading-snug">
              1-on-1 Dedicated Doubt Desks
            </p>
          </div>

          {/* Box 4: AC Smart Classrooms & App */}
          <div className="p-3.5 xs:p-4 sm:p-5 bg-purple-50/60 rounded-2xl sm:rounded-3xl border border-purple-200/90 text-left space-y-1.5 shadow-2xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-1.5 text-purple-900">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0F4C81] shrink-0" />
              <span className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider">
                CAMPUS
              </span>
            </div>
            <div>
              <span className="text-lg xs:text-xl sm:text-2xl lg:text-[28px] font-black text-[#0B192C] tracking-tight block leading-none sm:pt-0.5">
                AC Smart Class
              </span>
            </div>
            <p className="text-[10.5px] xs:text-[11px] sm:text-xs text-slate-600 font-semibold leading-snug">
              Digital Boards & Hybrid App
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
