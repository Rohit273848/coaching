import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { features } from '../../config/features';

export default function CourseCard({ course, onOpenEnquiry }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
      {/* Top Banner Tag */}
      <div className="bg-[#0F2038] text-white p-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="bg-[#8B1E26] text-white text-[10px] font-extrabold px-2 py-0.5 rounded tracking-wider uppercase">
            {course.category}
          </span>
          {course.badge && (
            <span className="bg-[#D4AF37] text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              {course.badge}
            </span>
          )}
        </div>
        <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
          {course.duration}
        </span>
      </div>

      {/* Main Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          {/* Target Class & Title */}
          <div className="space-y-1.5 mb-3">
            <span className="text-xs font-bold text-[#8B1E26] uppercase tracking-wide">
              {course.targetStudents}
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-[#0F2038] transition-colors">
              {course.title}
            </h3>
          </div>

          {/* Subjects Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {course.subjects.map((sub, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-slate-200">
                {sub}
              </span>
            ))}
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
            {course.description}
          </p>

          {/* Key Features List */}
          <div className="space-y-2">
            {course.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info & Action */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-[#8B1E26]" />
              <span>Next Batch: <strong className="text-slate-900">{course.batchStartDate}</strong></span>
            </div>
          </div>

          {/* Optional Fee Display */}
          {features.feeDisplay && course.feeStructure?.showFee && (
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs">
              <span className="text-slate-500 font-medium">Tuition Fee: </span>
              <strong className="text-slate-900 text-sm">{course.feeStructure.annualFee}</strong>
              <span className="text-emerald-700 font-semibold block text-[11px]">
                {course.feeStructure.scholarshipUpto}
              </span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              to={`/programs/${course.id}`}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs py-2.5 px-3 rounded-lg text-center transition-colors flex items-center justify-center gap-1"
            >
              <span>Full Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry(course.title)}
              className="bg-[#8B1E26] hover:bg-[#6D171E] text-white font-bold text-xs py-2.5 px-3 rounded-lg text-center transition-colors shadow-xs"
            >
              Enquire Batch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
