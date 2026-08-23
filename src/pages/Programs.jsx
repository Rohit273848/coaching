import React, { useState } from 'react';
import CourseCard from '../components/courses/CourseCard';
import { courses } from '../config/courses';
import { BookOpen, Sparkles } from 'lucide-react';

export default function Programs({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'BANKING', 'MCAER', 'GOVT EXAMS'];

  const filteredCourses = selectedCategory === 'ALL'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="py-8 sm:py-12 bg-[#F8F9FC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Page Header */}
        <div className="bg-[#1D2B53] text-white p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden border border-[#283C6E]">
          <div className="max-w-3xl space-y-2.5 relative z-10">
            <span className="text-[11px] sm:text-xs font-black text-[#F8B81F] uppercase tracking-widest bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700 inline-block">
              ACADEMIC OFFERINGS 2026
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Banking & MCAER Exam Batches
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Every exam is different — so is our preparation strategy. Pick your target exam and get a structured, mentor-led path from day one to result day.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shrink-0 transition-all min-h-[42px] cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1E4FA8] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'ALL' ? 'All Batches' : `${cat} Batches`}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} onOpenEnquiry={onOpenEnquiry} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="bg-white p-8 rounded-3xl text-center text-slate-500 space-y-2 border border-slate-200">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold">No batches found for this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
