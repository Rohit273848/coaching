import React, { useState } from 'react';
import { studentTestimonials, parentTestimonials } from '../../config/testimonials';
import { features } from '../../config/features';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsEditorial() {
  if (!features.testimonials) return null;

  const allTestimonials = [...studentTestimonials, ...parentTestimonials];
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = allTestimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <span className="text-[10px] sm:text-xs font-extrabold text-[#8B1E26] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
            STUDENT & PARENT PERSPECTIVES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2038] tracking-tight">
            Real Stories of Academic Transformation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Direct reflections from students who cleared top JEE & NEET benchmarks and parents who trusted our system.
          </p>
        </div>

        {/* Mobile-First Interactive Card Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F8F7F4] rounded-2xl border border-stone-300/80 p-6 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px]">
            <Quote className="w-10 h-10 sm:w-14 sm:h-14 text-stone-300/50 absolute top-4 right-4 select-none pointer-events-none" />

            <div className="space-y-3 sm:space-y-4">
              <span className="inline-block bg-[#8B1E26] text-white text-[9px] sm:text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                {current.highlight || 'VERIFIED EXPERIENCE'}
              </span>
              
              <blockquote className="text-sm sm:text-lg text-[#0F2038] font-accent italic leading-relaxed pt-1">
                "{current.content}"
              </blockquote>
            </div>

            {/* Author details & controls */}
            <div className="pt-6 border-t border-stone-200/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={current.photo}
                  alt={current.name}
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#0F2038]">
                    {current.name}
                  </h4>
                  <p className="text-xs font-bold text-[#8B1E26]">
                    {current.role}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 truncate max-w-[170px] sm:max-w-none">
                    {current.course}
                  </p>
                </div>
              </div>

              {/* Prev / Next Buttons (Min 44px touch target) */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-stone-300 text-[#0F2038] hover:bg-stone-50 active:scale-95 flex items-center justify-center transition-all shadow-xs"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#8B1E26] text-white hover:bg-[#6D171E] active:scale-95 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-[#D4AF37]" />
                </button>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {allTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all min-w-[24px] min-h-[24px] flex items-center justify-center ${
                  currentIndex === idx ? 'w-6' : 'w-2'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-[#8B1E26]' : 'w-2 bg-stone-300'
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
