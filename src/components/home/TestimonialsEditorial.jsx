import React from 'react';
import { studentTestimonials, parentTestimonials } from '../../config/testimonials';
import { features } from '../../config/features';
import { Quote, CheckCircle2, ShieldCheck, Star } from 'lucide-react';

export default function TestimonialsEditorial() {
  if (!features.testimonials) return null;

  const featuredStudent = studentTestimonials[0];
  const secondaryStudent = studentTestimonials[1];
  const parentReview = parentTestimonials[0];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold text-[#8B1E26] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
            STUDENT & PARENT PERSPECTIVES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2038] tracking-tight">
            Real Stories of Academic Transformation
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Reflections from students who cleared top JEE & NEET benchmarks and parents who trusted our disciplined methodology.
          </p>
        </div>

        {/* Editorial Layout: Large Featured Review (7 cols) + 2 Secondary Reviews (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Large Featured Student Testimonial (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8F7F4] rounded-2xl border border-stone-300/80 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6 relative">
            <Quote className="w-12 h-12 text-stone-300/60 absolute top-6 right-6 select-none" />

            <div className="space-y-4">
              <span className="inline-block bg-[#8B1E26] text-white text-[10px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider">
                FEATURED ASPIRANT STORY
              </span>
              
              <blockquote className="text-base sm:text-lg text-[#0F2038] font-accent italic leading-relaxed pt-2">
                "{featuredStudent.content}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-stone-200/80 flex items-center gap-4">
              <img
                src={featuredStudent.photo}
                alt={featuredStudent.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
              />
              <div>
                <h4 className="font-extrabold text-base text-[#0F2038]">
                  {featuredStudent.name}
                </h4>
                <p className="text-xs font-bold text-[#8B1E26]">
                  {featuredStudent.role}
                </p>
                <p className="text-[11px] text-slate-500">
                  {featuredStudent.course}
                </p>
              </div>
            </div>

          </div>

          {/* Right: 2 Stacked Reviews (Parent + Student) (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            
            {/* Secondary Student Review */}
            {secondaryStudent && (
              <div className="bg-white rounded-xl border border-stone-300/80 p-6 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    {secondaryStudent.highlight}
                  </span>
                  <span className="text-xs font-bold text-slate-400">Student Feedback</span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic font-normal">
                  "{secondaryStudent.content}"
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-stone-100">
                  <img
                    src={secondaryStudent.photo}
                    alt={secondaryStudent.name}
                    className="w-9 h-9 rounded-full object-cover border border-stone-200 shrink-0"
                  />
                  <div>
                    <h5 className="font-extrabold text-xs text-[#0F2038]">{secondaryStudent.name}</h5>
                    <span className="text-[10px] font-semibold text-slate-500 block">{secondaryStudent.role}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Parent Review */}
            {parentReview && (
              <div className="bg-white rounded-xl border border-stone-300/80 p-6 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0F2038] bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                    {parentReview.highlight}
                  </span>
                  <span className="text-xs font-bold text-slate-400">Parent Experience</span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic font-normal">
                  "{parentReview.content}"
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-stone-100">
                  <img
                    src={parentReview.photo}
                    alt={parentReview.name}
                    className="w-9 h-9 rounded-full object-cover border border-stone-200 shrink-0"
                  />
                  <div>
                    <h5 className="font-extrabold text-xs text-[#0F2038]">{parentReview.name}</h5>
                    <span className="text-[10px] font-semibold text-slate-500 block">{parentReview.course}</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
