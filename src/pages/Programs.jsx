import React, { useState } from 'react';
import CourseCard from '../components/courses/CourseCard';
import { courses } from '../config/courses';
import { BookOpen, Sparkles, Star } from 'lucide-react';

export default function Programs({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'JEE', 'NEET', 'FOUNDATION', 'BOARDS'];

  const filteredCourses = selectedCategory === 'ALL'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="py-8 sm:py-12 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Page Header */}
        <div className="bg-[#0B192C] text-white p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
          <div className="max-w-3xl space-y-2.5 relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-[#F59E0B] px-3.5 py-1.5 rounded-full border border-amber-500/30 text-[11px] sm:text-xs font-black uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
              <span>COURSES & PREPARATION PROGRAMS 2026-27</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              IIT-JEE, NEET & School Foundation Batches
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Structured, mentor-led programs with small batch sizes, AC smart digital classrooms, and daily 1-on-1 doubt clearing desks at New Usmanpura center.
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
                  ? 'bg-[#0F4C81] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'ALL' ? 'All Courses' : `${cat} Programs`}
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
            <p className="text-sm font-semibold">No programs found for this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
