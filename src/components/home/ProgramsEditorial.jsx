import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../../config/courses';
import { Calendar, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ProgramsEditorial({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('ALL');

  const categories = ['ALL', 'JEE', 'NEET', 'CET', 'FOUNDATION'];

  const filteredCourses = activeTab === 'ALL'
    ? courses
    : courses.filter(c => c.category === activeTab);

  const flagship = filteredCourses[0] || courses[0];
  const secondary = filteredCourses.slice(1);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F5F3ED] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-3">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[10px] sm:text-xs font-extrabold text-[#0F2038] uppercase tracking-widest bg-stone-200/80 px-3 py-1 rounded-full inline-block">
              STRUCTURED PROSPECTUS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2038] tracking-tight">
              Target Programs for Competitive Mastery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Integrated syllabus plans combining board fundamentals with high-speed competitive problem techniques.
            </p>
          </div>

          <Link
            to="/programs"
            className="inline-flex items-center gap-2 bg-[#0F2038] hover:bg-[#183256] text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-colors shadow-sm shrink-0 min-h-[44px] items-center"
          >
            <span>All Programs & Syllabus</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </Link>
        </div>

        {/* Mobile Program Category Filter Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-4 sm:pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider shrink-0 transition-all min-h-[40px] ${
                activeTab === cat
                  ? 'bg-[#8B1E26] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat === 'ALL' ? 'All Programs' : `${cat} Programs`}
            </button>
          ))}
        </div>

        {/* Hierarchical Prospectus Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Marquee Featured Program Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-300/80 p-5 sm:p-8 shadow-sm flex flex-col justify-between space-y-5">
            
            {/* Top Tag */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="bg-[#8B1E26] text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {flagship.category}
                </span>
                {flagship.badge && (
                  <span className="bg-amber-100 text-amber-900 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-700" />
                    {flagship.badge}
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8B1E26]" />
                {flagship.duration}
              </span>
            </div>

            {/* Core Info */}
            <div className="space-y-3 sm:space-y-4">
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#8B1E26] uppercase tracking-wider">
                  {flagship.targetStudents}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F2038] tracking-tight mt-0.5 leading-snug">
                  {flagship.title}
                </h3>
              </div>

              {/* Subjects Pill */}
              <div className="flex flex-wrap gap-1.5">
                {flagship.subjects.map((sub, sIdx) => (
                  <span key={sIdx} className="bg-stone-100 text-slate-800 text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-stone-200">
                    {sub}
                  </span>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {flagship.description}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-1.5 pt-2 border-t border-stone-100">
                <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
                  Key Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                  {flagship.features.slice(0, 4).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <Calendar className="w-4 h-4 text-[#8B1E26] shrink-0" />
                <span>Next Batch: <strong className="text-slate-900">{flagship.batchStartDate}</strong></span>
              </div>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
                <Link
                  to={`/programs/${flagship.id}`}
                  className="bg-stone-100 hover:bg-stone-200 active:scale-[0.98] text-slate-800 text-xs font-bold py-3 px-4 rounded-xl text-center transition-colors min-h-[44px] flex items-center justify-center"
                >
                  Full Syllabus
                </Link>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(flagship.title)}
                  className="bg-[#8B1E26] hover:bg-[#6D171E] active:scale-[0.98] text-white text-xs font-extrabold py-3 px-5 rounded-xl shadow-sm transition-all min-h-[44px] flex items-center justify-center"
                >
                  Enquire Batch
                </button>
              </div>
            </div>

          </div>

          {/* Secondary Stacked Programs */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
            {secondary.length > 0 ? (
              secondary.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl border border-stone-300/80 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-2.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="bg-stone-100 text-slate-800 text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                        {course.category} • {course.duration}
                      </span>
                      <span className="text-[11px] font-bold text-[#8B1E26]">
                        {course.targetStudents}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-sm sm:text-base text-[#0F2038] leading-snug">
                      {course.title}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 mt-1 font-normal">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 border-t border-stone-100 text-xs">
                    <span className="text-slate-500 font-medium text-[11px]">
                      Starts: <strong className="text-slate-900">{course.batchStartDate}</strong>
                    </span>

                    <Link
                      to={`/programs/${course.id}`}
                      className="text-[#0F2038] hover:text-[#8B1E26] font-extrabold flex items-center gap-1 text-xs min-h-[36px] items-center"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8B1E26]" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-6 rounded-xl border border-stone-200 text-center text-xs text-slate-500">
                Explore individual syllabus details on the full programs page.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
