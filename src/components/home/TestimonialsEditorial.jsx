import React, { useState } from 'react';
import { studentTestimonials, parentTestimonials } from '../../config/testimonials';
import { features } from '../../config/features';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsEditorial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allTestimonials = [...studentTestimonials, ...parentTestimonials];

  if (!features.testimonials || allTestimonials.length === 0) return null;

  const current = allTestimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-[10.5px] sm:text-xs font-black text-amber-800">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>4.8 / 5.0 GOOGLE RATING (370+ REVIEWS)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B192C] tracking-tight">
            Student & Parent Experiences at PERL
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Hear from students who cracked top IIT-JEE & NEET benchmarks and parents who value our small batch sizes and personal care.
          </p>
        </div>

        {/* Card Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200 p-4.5 sm:p-8 lg:p-10 shadow-2xs relative overflow-hidden flex flex-col justify-between min-h-[280px] sm:min-h-[340px] text-left">
            <Quote className="w-8 h-8 sm:w-14 sm:h-14 text-slate-200 absolute top-3.5 right-3.5 select-none pointer-events-none" />

            <div className="space-y-2.5 sm:space-y-4">
              <span className="inline-block bg-[#0F4C81] text-white text-[9.5px] sm:text-[10px] font-black px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider">
                {current.highlight || 'VERIFIED EXPERIENCE'}
              </span>
              
              <blockquote className="text-xs sm:text-base lg:text-lg text-[#0B192C] font-semibold italic leading-relaxed pt-0.5">
                "{current.content}"
              </blockquote>
            </div>

            {/* Author details & controls */}
            <div className="pt-4 sm:pt-6 border-t border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <img
                  src={current.photo}
                  alt={current.name}
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl object-cover border-2 border-white shadow-2xs shrink-0"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-black text-xs sm:text-base text-[#0B192C]">
                    {current.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs font-bold text-[#0F4C81]">
                    {current.role}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 truncate max-w-[130px] sm:max-w-none">
                    {current.course}
                  </p>
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200 text-[#0B192C] hover:bg-slate-50 active:scale-95 flex items-center justify-center transition-all shadow-xs cursor-pointer min-h-[44px] min-w-[44px]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0F4C81] text-white hover:bg-[#0A3357] active:scale-95 flex items-center justify-center transition-all shadow-sm cursor-pointer min-h-[44px] min-w-[44px]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-[#F59E0B]" />
                </button>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 pt-3 sm:pt-4">
            {allTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="p-2 flex items-center justify-center cursor-pointer min-h-[44px] min-w-[32px]"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-[#0F4C81]' : 'w-2 bg-slate-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
