import React from 'react';
import { institute } from '../config/institute';
import { Award, Target, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="py-6 sm:py-12 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Hero */}
        <div className="bg-[#0B192C] text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-3 border border-slate-800">
          <span className="text-[11px] sm:text-xs font-black text-[#F59E0B] uppercase tracking-widest bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700 inline-block">
            ABOUT PERL EDUCATION AURANGABAD
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Empowering Minds. Shaping Futures in IIT-JEE & NEET.
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl font-normal">
            PERL Education is a premier coaching institute in Chhatrapati Sambhajinagar (Aurangabad). Through small batch sizes, state-of-the-art air-conditioned smart classrooms, and expert faculty mentorship, we guide students to top achievements in national competitive examinations.
          </p>
        </div>

        {/* Story & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] sm:text-xs font-black text-[#0F4C81] uppercase tracking-wider">
              OUR TEACHING PHILOSOPHY & VALUES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] tracking-tight leading-snug">
              Chhatrapati Sambhajinagar's Premier Center for Science & Competitive Exams
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              In overcrowded commercial classrooms, individual student doubts often get overlooked. At PERL Education, we enforce strict <strong className="text-[#0B192C]">Small Batch Sizes</strong> so our teachers can track every student's learning curve and provide immediate help.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Across IIT-JEE (Mains & Advanced), NEET (UG Medical), School Foundation (Classes 8th, 9th, 10th - CBSE/ICSE/State), and 11th & 12th PCMB, our experienced educators simplify complex scientific principles with intuitive problem-solving methods.
            </p>

            <div className="pt-2 grid grid-cols-1 xs:grid-cols-2 gap-3 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>4.8 ★ Google Rating (370+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Small Batch Sizes & 1-on-1 Mentoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>AC Digital Smart Board Classrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daily Doubt Desks & High-Volume Practice</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-center">
              <div className="relative">
                <img
                  src={institute.images.classroomImage}
                  alt="PERL Education Campus"
                  className="w-full h-48 sm:h-56 rounded-2xl object-cover border border-slate-200 shadow"
                  loading="lazy"
                />
                <img
                  src="/logo.png"
                  alt="PERL Education Seal"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-contain absolute -bottom-4 left-1/2 -translate-x-1/2 shadow-xl bg-white p-1 border-2 border-slate-100"
                />
              </div>
              <div className="pt-2">
                <h3 className="font-black text-lg text-[#0B192C]">
                  {institute.name}
                </h3>
                <p className="text-xs font-bold text-[#0F4C81]">
                  1st Floor, Shrinath Complex, New Usmanpura, Aurangabad
                </p>
              </div>
              <p className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-2xl border border-slate-100 font-normal">
                "Primary Education & Righteousness Learning — Small Batches. High Focus. Uncompromised Quality."
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0F4C81] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base sm:text-lg text-[#0B192C]">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              To provide national-standard IIT-JEE, NEET, and school foundation coaching to students in Chhatrapati Sambhajinagar with personalized care and transparent guidance.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base sm:text-lg text-[#0B192C]">Academic Rigor</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              In-depth NCERT mastery, Daily Practice Problems (DPP), and Computer-Based Tests (CBT) structured exactly to NTA patterns for peak exam readiness.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base sm:text-lg text-[#0B192C]">Personal Mentorship</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Beyond regular teaching, continuous 1-on-1 counseling helps students build mental stamina, master time management, and eliminate exam anxiety.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
