import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../../config/courses';
import { Clock, Users, BookOpen, Star, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ProgramsEditorial({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('ALL');

  const categories = ['ALL', 'BANKING', 'MCAER', 'GOVT EXAMS'];

  const filteredCourses = activeTab === 'ALL'
    ? courses
    : courses.filter(c => c.category === activeTab);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F8F9FC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching saarthiedu.online */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-black text-[#1E4FA8] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
              WHAT WE OFFER
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1D2B53] tracking-tight">
              Find the Right Course for Your Goal
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Every exam is different — so is our preparation strategy. Pick your target exam and get a structured, mentor-led path from day one to result day.
            </p>
          </div>

          <Link
            to="/programs"
            className="inline-flex items-center gap-2 bg-[#1E4FA8] hover:bg-[#163E85] text-white font-black text-xs px-5 py-3 rounded-xl transition-all shadow-md shrink-0 min-h-[46px] items-center"
          >
            <span>View All Batches</span>
            <ArrowRight className="w-4 h-4 text-[#F8B81F]" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-4 sm:pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shrink-0 transition-all min-h-[40px] cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#1E4FA8] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'ALL' ? 'All Batches' : `${cat} Batches`}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-saarthi hover:shadow-saarthi-lg transition-all flex flex-col justify-between group"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-7 space-y-4 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="bg-[#1E4FA8] text-white text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{course.rating || '4.9/5'}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
                    {course.targetStudents}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1D2B53] tracking-tight group-hover:text-[#1E4FA8] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  {course.marathiTitle && (
                    <p className="text-xs font-bold text-[#F8941F] mt-1">
                      {course.marathiTitle}
                    </p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {course.description}
                </p>

                {/* Key Course Stats */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Duration</span>
                    <strong className="text-slate-900 font-black">{course.duration}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Enrolled</span>
                    <strong className="text-slate-900 font-black">{course.studentCount}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Lessons</span>
                    <strong className="text-slate-900 font-black">{course.lessonCount}</strong>
                  </div>
                </div>
              </div>

              {/* Subject Pills & Features */}
              <div className="p-6 sm:p-7 space-y-4 bg-slate-50/40 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-black text-slate-800 uppercase tracking-wider block">
                    Key Topics Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.subjects.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-white text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-slate-200"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">Starts: {course.batchStartDate}</span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Link
                      to={`/programs/${course.id}`}
                      className="flex-1 sm:flex-none bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs px-4 py-3 rounded-xl border border-slate-200 transition-colors text-center min-h-[44px] flex items-center justify-center"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => onOpenEnquiry && onOpenEnquiry(course.title)}
                      className="flex-1 sm:flex-none bg-[#1E4FA8] hover:bg-[#163E85] active:scale-95 text-white font-black text-xs px-5 py-3 rounded-xl shadow-md transition-all text-center min-h-[44px] flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Enroll Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F8B81F]" />
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
