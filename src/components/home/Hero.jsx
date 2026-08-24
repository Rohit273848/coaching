import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Phone, ChevronRight, Star } from 'lucide-react';
import { institute } from '../../config/institute';

export default function Hero({ onOpenEnquiry }) {

  return (
    <section className="relative bg-gradient-to-b from-[#F0F4F8] via-[#F8FAFC] to-white text-[#1E293B] pt-4 sm:pt-8 lg:pt-10 pb-10 sm:pb-16 lg:pb-20 overflow-hidden border-b border-slate-200">

      {/* ─── Integrated Background Artwork Layer (z-0) ────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Responsive Background Graphic */}
        <img
          src="/hero-bg.png"
          alt=""
          role="presentation"
          fetchPriority="high"
          className="w-full h-full object-cover object-[80%_center] sm:object-right-bottom opacity-85 sm:opacity-90 lg:opacity-95 transition-opacity duration-300"
        />

        {/* Desktop Gradient Mask: Enhances left-side text contrast while preserving right-side glowing science art */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 via-40% to-transparent hidden lg:block" />

        {/* Mobile / Tablet Gradient Mask: Guarantees high text readability on smaller stacked screens */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/75 to-white/92 lg:hidden" />
      </div>

      {/* Background Decorative Ambient Gradient Blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Academic Hierarchy & CTAs (Order 1 on desktop and mobile) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">

            {/* 1. Academic Eyebrow & Google Rating Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 bg-white border border-blue-200/90 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#0F4C81] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase text-[#0F4C81]">
                  IIT-JEE • NEET • FOUNDATION (8th–10th) • PCMB
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-amber-50/90 border border-amber-200 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-black text-amber-900 shadow-2xs">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                <span>4.8 / 5.0 Rating (370+ Google Reviews)</span>
              </div>
            </div>

            {/* 2. Main Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black tracking-tight text-[#0B192C] leading-[1.16]">
                Empowering Minds, Shaping Futures in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] via-[#0284C7] to-[#059669] block sm:inline">
                  IIT-JEE & NEET.
                </span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                {institute.subTagline || "Chhatrapati Sambhajinagar's premier coaching institute — small batch sizes, air-conditioned smart digital classrooms, expert faculty, and dedicated personal mentorship for every student."}
              </p>
            </div>

            {/* 3. Core Benefit Pills */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap gap-2 text-xs font-bold text-slate-800 pt-0.5">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Small Batch Sizes (Strict Limits)</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>AC Digital Smart Classrooms</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs xs:col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daily 1-on-1 Doubt Desks</span>
              </div>
            </div>

            {/* 4. Action CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Hero Book Free Demo')}
                className="w-full sm:w-auto bg-[#0F4C81] hover:bg-[#0A3357] active:scale-[0.98] text-white font-black px-7 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm min-h-[48px] sm:min-h-[52px] cursor-pointer"
                style={{
                  boxShadow: '0 4px 18px rgba(15, 76, 129, 0.35)',
                }}
                aria-label="Book a Free Demo Class"
              >
                <span>Book a Free Demo Class</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </button>

              <Link
                to="/programs"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 active:scale-[0.98] text-[#0B192C] font-black px-6 py-3.5 sm:py-4 rounded-xl border border-slate-300 shadow-xs transition-all flex items-center justify-center gap-2 text-sm min-h-[48px] sm:min-h-[52px]"
                aria-label="Explore All Courses"
              >
                <span>Explore All Courses</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <a
                href={`tel:${institute.contact.phonePrimary}`}
                className="inline-flex sm:hidden items-center justify-center gap-2 text-[#0F4C81] font-bold text-xs py-2 bg-blue-50/60 rounded-xl border border-blue-100 min-h-[42px]"
                aria-label={`Call Admissions: ${institute.contact.phonePrimary}`}
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Call Admissions: {institute.contact.phonePrimary}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual & Floating Trust Badges */}
          <div className="lg:col-span-5 relative mt-6 sm:mt-6 lg:mt-0">

            {/* Main Editorial Classroom Image */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900">
              <img
                src={institute.images.heroImage}
                alt="PERL Education Aurangabad Smart Classroom with Students and Faculty"
                className="w-full h-[280px] xs:h-[320px] sm:h-[380px] lg:h-[450px] object-cover object-center opacity-95"
                loading="eager"
              />

              {/* Deep Gradient Overlay for Uncompromised Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/65 via-35% to-transparent pointer-events-none" />

              {/* Bottom Text Caption Area — Completely Unobstructed */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white z-10 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>Shrinath Complex • New Usmanpura Center</span>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-black text-white leading-snug">
                  Small Batches. High Results.
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-100 font-medium leading-relaxed">
                  Air-conditioned smart classrooms, expert faculty for PCMB, and dedicated 1-on-1 doubt resolution desks.
                </p>
              </div>
            </div>

            {/* Floating Glass Proof Badge 1: Admissions Desk (Top Left) */}
            <div className="absolute -top-3.5 left-2 sm:-top-4 sm:-left-3 bg-white/95 backdrop-blur-md text-[#0B192C] px-3 py-2 rounded-2xl border border-blue-100 shadow-xl flex items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0F4C81] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#0F4C81]" />
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 block">Admissions Desk</span>
                <span className="text-xs font-black text-[#0F4C81] block">+91 88620 15626</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
