import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../../config/courses';
import { Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export default function ProgramsEditorial({ onOpenEnquiry }) {
  // Flagship Marquee Program
  const flagship = courses.find(c => c.id === 'jee-main-advanced-2yr') || courses[0];
  // Secondary Programs
  const otherPrograms = courses.filter(c => c.id !== flagship.id).slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-[#F5F3ED] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-extrabold text-[#0F2038] uppercase tracking-widest bg-stone-200/80 px-3 py-1 rounded-full">
              STRUCTURED PROSPECTUS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2038] tracking-tight">
              Target Programs for Competitive Mastery
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Every course follows an integrated syllabus plan combining board fundamentals with high-speed problem-solving techniques.
            </p>
          </div>

          <Link
            to="/programs"
            className="inline-flex items-center gap-2 bg-[#0F2038] hover:bg-[#183256] text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-colors shadow-sm shrink-0"
          >
            <span>View All Programs & Full Syllabus</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </Link>
        </div>

        {/* Hierarchical Prospectus Layout: Marquee Program (7 cols) + 3 Secondary Programs (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Marquee Featured Card: 2-Year Integrated JEE Program (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-300/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            {/* Top Tag */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="bg-[#8B1E26] text-white text-xs font-extrabold px-3 py-1 rounded-md uppercase tracking-wider">
                  {flagship.category} FLAGSHIP
                </span>
                <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  Most Enrolled
                </span>
              </div>
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8B1E26]" />
                {flagship.duration}
              </span>
            </div>

            {/* Core Info */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-[#8B1E26] uppercase tracking-wider">
                  {flagship.targetStudents}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2038] tracking-tight mt-1 leading-snug">
                  {flagship.title}
                </h3>
              </div>

              {/* Subjects Pill */}
              <div className="flex flex-wrap gap-1.5">
                {flagship.subjects.map((sub, sIdx) => (
                  <span key={sIdx} className="bg-stone-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full border border-stone-200">
                    {sub}
                  </span>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {flagship.description}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
                  Program Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {flagship.features.slice(0, 4).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <Calendar className="w-4 h-4 text-[#8B1E26]" />
                <span>Next Batch Starts: <strong className="text-slate-900">{flagship.batchStartDate}</strong></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Link
                  to={`/programs/${flagship.id}`}
                  className="bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                >
                  Full Syllabus
                </Link>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(flagship.title)}
                  className="bg-[#8B1E26] hover:bg-[#6D171E] text-white text-xs font-extrabold px-5 py-2.5 rounded-lg shadow-sm transition-all"
                >
                  Enquire Batch
                </button>
              </div>
            </div>

          </div>

          {/* Secondary Stacked Programs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {otherPrograms.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl border border-stone-300/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="bg-stone-100 text-slate-800 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                      {course.category} • {course.duration}
                    </span>
                    <span className="text-[11px] font-bold text-[#8B1E26]">
                      {course.targetStudents}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-base text-[#0F2038] leading-snug">
                    {course.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 font-normal">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-xs">
                  <span className="text-slate-500 font-medium text-[11px]">
                    Batch: <strong className="text-slate-900">{course.batchStartDate}</strong>
                  </span>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/programs/${course.id}`}
                      className="text-[#0F2038] hover:text-[#8B1E26] font-extrabold flex items-center gap-1 text-xs"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
