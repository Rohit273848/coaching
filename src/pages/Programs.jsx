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
    <div className="py-12 bg-[#FBFBFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="bg-[#0F2038] text-white p-8 sm:p-12 rounded-2xl shadow-xl relative overflow-hidden border border-slate-800">
          <div className="max-w-3xl space-y-3 relative z-10">
            <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              ACADEMIC OFFERINGS 2026-27
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Competitive Coaching Programs
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Explore our structured 2-Year, 1-Year, Dropper, and Foundation classroom courses. Designed by master faculty with strict 35-student batch limits.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#8B1E26] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'ALL' ? 'All Programs' : `${cat} Programs`}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} onOpenEnquiry={onOpenEnquiry} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="bg-white p-8 rounded-xl text-center text-slate-500 space-y-2 border border-slate-200">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold">No programs found for this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
