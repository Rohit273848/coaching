import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { institute } from '../../config/institute';

export default function AcademyStory() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Image / Visual Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Classroom Visual Container */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-slate-100 shadow-xl bg-slate-900 aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-[460px]">
              <img
                src={institute.images.classroomImage || institute.images.heroImage}
                alt="PERL Education Smart Classroom Aurangabad"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              
              {/* High-Contrast Smooth Dark Gradient for Perfect Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/70 via-45% to-transparent pointer-events-none" />
              
              {/* Bottom Text Overlay Area */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-white space-y-1.5 text-left z-10">
                <div className="inline-flex items-center gap-1.5 bg-[#0F4C81] text-white text-[9px] sm:text-[10.5px] font-black px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Shrinath Complex, New Usmanpura</span>
                </div>
                
                <h4 className="text-base sm:text-lg lg:text-xl font-black text-white leading-snug">
                  Empowering Minds. Shaping Futures.
                </h4>
                
                <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                  Air-conditioned smart classrooms equipped with digital interactive boards and comprehensive PCMB mentorship.
                </p>
              </div>
            </div>

            {/* Google Reputation Badge — Zero Overlap on Mobile, Floating on Tablet/Desktop */}
            <div className="mt-2.5 sm:mt-0 flex justify-end sm:block">
              <div className="sm:absolute sm:-bottom-4 sm:-right-4 bg-white p-2.5 sm:p-3.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2.5 sm:gap-3 z-20">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md shrink-0">
                  <Star className="w-5 h-5 fill-white" />
                </div>
                <div className="text-left">
                  <span className="text-[8.5px] sm:text-[9.5px] font-black uppercase text-slate-400 block tracking-wider">GOOGLE REPUTATION</span>
                  <strong className="text-xs sm:text-sm font-black text-[#0B192C] block">4.8★ (370+ Reviews)</strong>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-5 text-left">
            
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-black text-[#0F4C81] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                ABOUT PERL EDUCATION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0B192C] tracking-tight leading-tight">
                A Premier Coaching Hub for <br className="hidden sm:inline" />
                <span className="text-[#0F4C81]">IIT-JEE, NEET & Foundation.</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              PERL Education is Chhatrapati Sambhajinagar's leading coaching destination, dedicated to guiding students toward exceptional ranks in IIT-JEE (Mains & Advanced), NEET (UG Medical), and School Foundation (Classes 8th to 10th).
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              We reject crowded mass-batch teaching in favor of <strong className="text-[#0B192C]">Small Batch Sizes</strong> and <strong className="text-[#0B192C]">Personalized Attention</strong>. Our air-conditioned smart classrooms, seasoned master educators, and daily 1-on-1 doubt clearing desks ensure complete conceptual clarity for every aspirant.
            </p>

            {/* 3 Core Highlights */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-left">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F4C81] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#0B192C]">Small Batch Sizes & Dedicated 1-on-1 Mentoring</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-amber-50/50 border border-amber-100 text-left">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97706] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#0B192C]">Air-Conditioned Digital Smart Board Classrooms</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-left">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#0B192C]">Daily Doubt Resolution Desks & Hybrid App Integration</span>
              </div>
            </div>

            {/* Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0A3357] text-white font-black text-xs px-6 py-3.5 rounded-xl transition-all shadow-md min-h-[46px] w-full sm:w-auto"
              >
                <span>Learn More About PERL</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
