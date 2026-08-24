import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../../config/courses';
import { Star, ArrowRight } from 'lucide-react';

export default function ProgramsEditorial({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('ALL');

  const categories = ['ALL', 'JEE', 'NEET', 'FOUNDATION', 'BOARDS'];

  const filteredCourses = activeTab === 'ALL'
    ? courses
    : courses.filter(c => c.category === activeTab);

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-3 sm:gap-4">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl text-left">
            <span className="text-[10px] sm:text-xs font-black text-[#0F4C81] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
              FEATURED COURSES & PROGRAMS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B192C] tracking-tight">
              Targeted Coaching for IIT-JEE, NEET & School Foundation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Every competitive exam demands a tailored strategy. Pick your target program and get small batch attention, digital smart board lectures, and daily doubt resolution.
            </p>
          </div>

          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0A3357] text-white font-black text-xs px-5 py-3 rounded-xl transition-all shadow-md shrink-0 min-h-[46px] w-full sm:w-auto"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
          </Link>
        </div>

        {/* Category Tabs (Mobile Scrollable Strip) */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-3 sm:pb-6 -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shrink-0 transition-all min-h-[44px] cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#0F4C81] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'ALL' ? 'All Programs' : `${cat} Prep`}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-0.5"
            >
              {/* Card Header */}
              <div className="p-4 sm:p-6 lg:p-7 space-y-3 sm:space-y-4 border-b border-slate-100 text-left">
                <div className="flex items-center justify-between">
                  <span className="bg-[#0F4C81] text-white text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1 text-amber-600 text-xs font-bold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{course.rating || '4.9/5'}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
                    {course.targetStudents}
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#0B192C] tracking-tight group-hover:text-[#0F4C81] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  {course.marathiTitle && (
                    <p className="font-marathi text-xs sm:text-[13px] font-bold text-[#D97706] mt-1 leading-relaxed">
                      {course.marathiTitle}
                    </p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {course.description}
                </p>

                {/* Key Course Stats */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1 text-center text-xs text-slate-700 bg-slate-50 p-2.5 sm:p-3 rounded-2xl border border-slate-100">
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 block">Duration</span>
                    <strong className="text-slate-900 font-black text-[11px] sm:text-xs truncate block">{course.duration}</strong>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 block">Batch Size</span>
                    <strong className="text-emerald-700 font-black text-[11px] sm:text-xs block">Small</strong>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 block">Classroom</span>
                    <strong className="text-slate-900 font-black text-[11px] sm:text-xs block">Smart AC</strong>
                  </div>
                </div>
              </div>

              {/* Subject Pills & Features */}
              <div className="p-4 sm:p-6 lg:p-7 space-y-3 sm:space-y-4 bg-slate-50/40 flex-1 flex flex-col justify-between text-left">
                <div className="space-y-1.5 sm:space-y-2">
                  <span className="text-[10px] sm:text-[11px] font-black text-slate-800 uppercase tracking-wider block">
                    Core Subjects & Highlights:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.subjects.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-white text-slate-700 text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-slate-200"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-3 sm:pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
                  <div className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">Starts: {course.batchStartDate}</span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Link
                      to={`/programs/${course.id}`}
                      className="flex-1 sm:flex-none bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs px-4 py-3 rounded-xl border border-slate-200 transition-colors text-center min-h-[44px] flex items-center justify-center"
                    >
                      Syllabus
                    </Link>
                    <button
                      onClick={() => onOpenEnquiry && onOpenEnquiry(course.title)}
                      className="flex-[1.4] sm:flex-none bg-[#0F4C81] hover:bg-[#0A3357] active:scale-95 text-white font-black text-xs px-5 py-3 rounded-xl shadow-md transition-all text-center min-h-[44px] flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Book Free Demo</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
