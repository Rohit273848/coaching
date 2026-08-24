import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CourseCard({ course, onOpenEnquiry }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col h-full group hover:-translate-y-1">
      {/* Top Banner Tag */}
      <div className="bg-[#0B192C] text-white p-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="bg-[#0F4C81] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full tracking-wider uppercase">
            {course.category}
          </span>
          {course.badge && (
            <span className="bg-[#F59E0B] text-[#0B192C] text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              {course.badge}
            </span>
          )}
        </div>
        <span className="text-xs text-slate-300 font-bold flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
          {course.duration}
        </span>
      </div>

      {/* Main Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Target & Title */}
          <div className="space-y-1 mb-2.5">
            <span className="text-[11px] font-bold text-[#D97706] uppercase tracking-wide">
              {course.targetStudents}
            </span>
            <h3 className="text-lg sm:text-xl font-black text-[#0B192C] leading-snug group-hover:text-[#0F4C81] transition-colors">
              {course.title}
            </h3>
          </div>

          {/* Subjects Pills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {course.subjects.map((sub, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-0.5 rounded-lg border border-slate-200">
                {sub}
              </span>
            ))}
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-3 font-normal">
            {course.description}
          </p>

          {/* Key Features */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            {course.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info & Action */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#0F4C81]" />
              <span>Batch: <strong className="text-slate-900">{course.batchStartDate}</strong></span>
            </div>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[11px]">
              Small Batch Size
            </span>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              to={`/programs/${course.id}`}
              className="bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-800 font-bold text-xs py-3 px-3 rounded-xl text-center transition-colors flex items-center justify-center gap-1 min-h-[44px]"
            >
              <span>Syllabus & Info</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry(course.title)}
              className="bg-[#0F4C81] hover:bg-[#0A3357] active:scale-[0.98] text-white font-black text-xs py-3 px-3 rounded-xl text-center transition-all shadow-xs min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
