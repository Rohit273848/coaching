import React, { useState } from 'react';
import CourseCard from '../components/courses/CourseCard';
import { courses } from '../config/courses';
import { BookOpen } from 'lucide-react';

export default function Programs({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'JEE', 'NEET', 'CET', 'FOUNDATION'];

  const filteredCourses = selectedCategory === 'ALL'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="py-8 sm:py-12 bg-[#F8F7F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Page Header */}
        <div className="bg-[#0F2038] text-white p-6 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden border border-slate-800">
          <div className="max-w-3xl space-y-2.5 relative z-10">
            <span className="text-[10px] sm:text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700 inline-block">
              ACADEMIC OFFERINGS 2026-27
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Competitive Coaching Programs
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Structured 2-Year, 1-Year, Dropper, and Foundation classroom courses. Designed by master faculty with strict 35-student batch limits.
            </p>
          </div>
        </div>

        {/* Category Filters (Touch-friendly horizontal swipe on mobile) */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider shrink-0 transition-all min-h-[40px] ${
                selectedCategory === cat
                  ? 'bg-[#8B1E26] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat === 'ALL' ? 'All Programs' : `${cat} Programs`}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} onOpenEnquiry={onOpenEnquiry} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="bg-white p-8 rounded-2xl text-center text-slate-500 space-y-2 border border-stone-200">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold">No programs found for this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
