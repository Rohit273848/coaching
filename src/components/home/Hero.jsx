import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Phone, Award, Users, BookOpen, ChevronRight } from 'lucide-react';
import { institute } from '../../config/institute';
import { toppers } from '../../config/results';

export default function Hero({ onOpenEnquiry }) {
  const topper1 = toppers[0];
  const topper2 = toppers[1];

  return (
    <section className="relative bg-gradient-to-b from-[#F0F4FA] via-[#F8F9FC] to-white text-[#231F40] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 overflow-hidden border-b border-slate-200">
      
      {/* Background Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Academic Promise & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Academic Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1E4FA8] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-[#1E4FA8]">
                BANKING • MCAER • AFO • GOVT EXAMS
              </span>
            </div>

            {/* Headline from Reference Site */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight text-[#1D2B53] leading-[1.18]">
                Building Strong Foundations for a{' '}
                <span className="text-gradient-amber block sm:inline">
                  Successful Future.
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-xl">
                {institute.subTagline}
              </p>
            </div>

            {/* Academic Pillars Checklist */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap gap-2 text-xs font-bold text-slate-800 pt-1">
              <span className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>अनुभवी शिक्षक (Expert Faculty)</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>मर्यादित बॅचेस (Limited Seats)</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs xs:col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>मोफत Library & CBT Lab</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/programs"
                className="bg-[#1E4FA8] hover:bg-[#163E85] active:scale-[0.98] text-white font-black px-7 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm min-h-[50px] cursor-pointer"
                style={{
                  boxShadow: '0 4px 16px rgba(30, 79, 168, 0.35)',
                }}
              >
                <span>Find Batches</span>
                <ArrowRight className="w-4 h-4 text-[#F8B81F]" />
              </Link>

              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Hero Enquiry')}
                className="bg-white hover:bg-slate-50 active:scale-[0.98] text-[#1D2B53] font-black px-6 py-3.5 sm:py-4 rounded-xl border border-slate-300 shadow-xs transition-all flex items-center justify-center gap-2 text-sm min-h-[50px] cursor-pointer"
              >
                <span>Enquiry Now</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <a
                href={`tel:${institute.contact.phonePrimary}`}
                className="inline-flex sm:hidden items-center justify-center gap-2 text-[#1E4FA8] font-bold text-xs py-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Direct Call: {institute.contact.phonePrimary}</span>
              </a>
            </div>

            {/* Quick Proof Counters Strip */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200 text-left">
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                <span className="text-xl sm:text-2xl font-black text-[#1E4FA8] block">25.2K+</span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase text-slate-500 tracking-wider">ENROLLED</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                <span className="text-xl sm:text-2xl font-black text-[#F8941F] block">1,000+</span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase text-slate-500 tracking-wider">SELECTIONS</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs col-span-2 sm:col-span-1">
                <span className="text-xl sm:text-2xl font-black text-emerald-600 block">3+</span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase text-slate-500 tracking-wider">LANGUAGES</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Floating Badges */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Main Editorial Image */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900">
              <img
                src={institute.images.heroImage}
                alt="Saarthi Education Banking & MCAER Classroom"
                className="w-full h-[280px] xs:h-[320px] sm:h-[380px] lg:h-[440px] object-cover object-center opacity-95"
                loading="eager"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2B53]/90 via-[#1D2B53]/25 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#F8B81F] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Chhatrapati Sambhajinagar Center</span>
                </div>
                <h3 className="text-base font-black text-white">
                  A Strong Foundation for Lifelong Success.
                </h3>
                <p className="text-xs text-slate-200 font-normal mt-0.5 line-clamp-2">
                  अनुभवी शिक्षक, मर्यादित बॅच, नियमित टेस्ट आणि वैयक्तिक मार्गदर्शनासह आजच आमच्या ऑफलाइन बॅचमध्ये प्रवेश घ्या.
                </p>
              </div>
            </div>

            {/* Floating Glass Proof Badge 1: Online Support */}
            <div className="absolute -top-3 left-2 sm:-top-4 sm:-left-4 bg-white/95 backdrop-blur-md text-[#1D2B53] p-3 rounded-2xl border border-blue-100 shadow-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1E4FA8] flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#1E4FA8]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Online Support</span>
                <span className="text-xs font-black text-[#1E4FA8] block">{institute.contact.phonePrimary}</span>
              </div>
            </div>

            {/* Floating Glass Proof Badge 2: Topper Highlight */}
            {topper1 && (
              <div className="absolute -bottom-3 right-2 sm:-bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md text-[#1D2B53] p-3 rounded-2xl border border-amber-200 shadow-xl flex items-center gap-3">
                <img
                  src={topper1.photo}
                  alt={topper1.name}
                  className="w-10 h-10 rounded-xl object-cover border border-slate-200 shrink-0"
                />
                <div>
                  <span className="inline-block bg-[#1E4FA8] text-white text-[9px] font-black px-1.5 py-0.2 rounded uppercase">
                    {topper1.role}
                  </span>
                  <span className="text-xs font-black text-[#1D2B53] block leading-tight mt-0.5">
                    {topper1.name}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    {topper1.score}
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
