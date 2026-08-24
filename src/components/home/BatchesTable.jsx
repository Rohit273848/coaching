import React from 'react';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { courses } from '../../config/courses';
import { features } from '../../config/features';

export default function BatchesTable({ onOpenEnquiry }) {
  if (!features.batchSchedule) return null;

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#0B192C] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] sm:text-xs font-black text-[#F59E0B] uppercase tracking-widest bg-slate-800/90 px-3 py-1 rounded-full border border-slate-700 inline-block">
              ADMISSIONS OPEN 2026-27
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Schedule
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Fresh IIT-JEE, NEET & Foundation (8th–10th) classroom batches at New Usmanpura center. Small batch size policy ensures personalized focus and rapid doubt resolution.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Batch Schedule Book Free Demo')}
            className="w-full md:w-auto bg-[#F59E0B] hover:bg-[#D97706] active:scale-[0.98] text-[#0B192C] font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 shadow-md min-h-[46px] cursor-pointer self-start md:self-end"
            aria-label="Book a Free Demo Class"
          >
            <span>Book Free Demo Class</span>
            <ArrowRight className="w-4 h-4 text-[#0B192C]" />
          </button>
        </div>

        {/* Mobile & Tablet View: Structured Course Cards (<1024px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 lg:hidden text-left">
          {courses.map((c) => (
            <div
              key={c.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-md flex flex-col justify-between"
            >
              {/* Top: Category Badge + Title */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="bg-[#0F4C81]/90 text-blue-200 border border-blue-400/30 text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {c.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-950/70 text-emerald-400 text-[10.5px] font-bold px-2 py-0.5 rounded-md border border-emerald-800/70">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    Small Batch Size
                  </span>
                </div>

                <h3 className="font-black text-base sm:text-lg text-white leading-snug">
                  {c.title}
                </h3>
              </div>

              {/* Middle: Labeled Information Groups */}
              <div className="space-y-3 text-left border-t border-slate-800/80 pt-3 text-xs">
                
                {/* Target Students */}
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
                    TARGET STUDENTS
                  </span>
                  <p className="text-slate-200 font-medium leading-relaxed">
                    {c.targetStudents}
                  </p>
                </div>

                {/* Batch Commencement */}
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
                    BATCH COMMENCEMENT
                  </span>
                  <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                    <span>{c.batchStartDate}</span>
                  </div>
                </div>

                {/* Classroom Mode */}
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
                    CLASSROOM MODE
                  </span>
                  <p className="text-slate-300 font-normal leading-snug">
                    {c.mode.join(' • ')}
                  </p>
                </div>

              </div>

              {/* Bottom: Primary CTA */}
              <div className="pt-1">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(c.title)}
                  className="w-full bg-gradient-to-r from-[#0F4C81] to-[#0284C7] hover:from-[#0A3357] hover:to-[#0369A1] active:scale-[0.98] text-white text-xs sm:text-sm font-black py-3 px-4 rounded-xl transition-all min-h-[46px] flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  aria-label={`Book Free Demo for ${c.title}`}
                >
                  <span>Book Free Demo Class</span>
                  <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Polished Academic Table (≥1024px) */}
        <div className="hidden lg:block bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-950/90 text-slate-400 font-black uppercase text-[11px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Course & Program</th>
                  <th className="py-4 px-4">Target Students</th>
                  <th className="py-4 px-4">Batch Commencement</th>
                  <th className="py-4 px-4">Classroom Mode</th>
                  <th className="py-4 px-4">Capacity</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-200">
                {courses.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-800/50 transition-colors">
                    
                    {/* Course & Program */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2.5">
                        <span className="bg-[#0F4C81]/80 text-blue-200 border border-blue-400/30 text-[9.5px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0">
                          {c.category}
                        </span>
                        <span className="font-extrabold text-white text-[13.5px] truncate max-w-[220px]">
                          {c.shortTitle || c.title}
                        </span>
                      </div>
                    </td>

                    {/* Target Students */}
                    <td className="py-4 px-4 text-slate-300 font-medium max-w-[210px] leading-relaxed">
                      {c.targetStudents}
                    </td>

                    {/* Batch Commencement */}
                    <td className="py-4 px-4 font-semibold text-amber-300 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                        <span>{c.batchStartDate}</span>
                      </div>
                    </td>

                    {/* Classroom Mode */}
                    <td className="py-4 px-4 text-slate-300 font-normal max-w-[180px] leading-snug">
                      {c.mode.join(' • ')}
                    </td>

                    {/* Capacity Indicator */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 bg-emerald-950/70 text-emerald-400 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-emerald-800/80">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        Small Batch Size
                      </span>
                    </td>

                    {/* Action Column */}
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <button
                        onClick={() => onOpenEnquiry && onOpenEnquiry(c.title)}
                        className="bg-[#0F4C81] hover:bg-[#0284C7] active:scale-[0.97] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs min-h-[38px] cursor-pointer inline-flex items-center gap-1.5 border border-blue-400/20"
                        aria-label={`Book demo for ${c.title}`}
                      >
                        <span>Book Demo</span>
                        <ArrowRight className="w-3 h-3 text-[#F59E0B]" />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
