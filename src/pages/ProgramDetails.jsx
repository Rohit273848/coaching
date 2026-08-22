import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../config/courses';
import { features } from '../config/features';
import EnquiryForm from '../components/enquiry/EnquiryForm';
import { Calendar, Clock, CheckCircle2, ArrowLeft, BookOpen, ShieldCheck } from 'lucide-react';

export default function ProgramDetails({ onOpenEnquiry }) {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === courseId) || courses[0];

  if (!course) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold">Course Not Found</h2>
        <Link to="/programs" className="text-[#8B1E26] underline font-semibold">
          Return to Programs
        </Link>
      </div>
    );
  }

  return (
    <div className="py-6 sm:py-10 bg-[#F8F7F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Back Link (Min 44px tap area) */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0F2038] hover:text-[#8B1E26] transition-colors min-h-[44px] items-center"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Programs</span>
        </button>

        {/* Hero Header */}
        <div className="bg-[#0F2038] text-white p-5 sm:p-10 rounded-2xl shadow-xl space-y-3 sm:space-y-4 border border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#8B1E26] text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded tracking-wider uppercase">
              {course.category}
            </span>
            <span className="bg-slate-800 text-[#D4AF37] text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded border border-slate-700">
              {course.targetStudents}
            </span>
            <span className="bg-slate-800 text-slate-300 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded border border-slate-700">
              {course.duration}
            </span>
          </div>

          <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
            {course.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-normal">
            {course.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-4 sm:gap-6 text-xs text-slate-300 font-semibold border-t border-slate-800">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Next Batch: <strong className="text-white">{course.batchStartDate}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Hours: <strong className="text-white">{course.weeklyHours}</strong></span>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Column: Syllabus & Details */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Features Checklist */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-stone-100 pb-3">
                <ShieldCheck className="w-5 h-5 text-[#8B1E26]" />
                <span>Program Highlights & Deliverables</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                {course.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Test & Schedule Info */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3 sm:space-y-4">
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-stone-100 pb-3">
                <Clock className="w-5 h-5 text-[#8B1E26]" />
                <span>Testing Frequency & Schedule</span>
              </h2>

              <div className="space-y-2 text-xs text-slate-700 font-normal">
                <p><strong>Evaluation Pattern:</strong> {course.testFrequency}</p>
                <p><strong>Eligibility:</strong> {course.eligibility}</p>
                <p><strong>Available Modes:</strong> {course.mode.join(', ')}</p>
              </div>
            </div>

            {/* Syllabus Overview Units */}
            {course.syllabusOverview && (
              <div className="bg-white p-5 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-stone-100 pb-3">
                  <BookOpen className="w-5 h-5 text-[#8B1E26]" />
                  <span>Syllabus & Topic Coverage</span>
                </h2>

                <div className="space-y-3">
                  {course.syllabusOverview.map((unit, idx) => (
                    <div key={idx} className="bg-stone-50 p-3.5 sm:p-4 rounded-xl border border-stone-200 space-y-2">
                      <h3 className="font-extrabold text-xs sm:text-sm text-[#0F2038]">
                        {unit.unit}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {unit.topics.map((tp, tIdx) => (
                          <span key={tIdx} className="bg-white text-slate-700 text-[11px] sm:text-xs px-2.5 py-1 rounded border border-stone-200 font-medium">
                            {tp}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fee Section (if enabled) */}
            {features.feeDisplay && course.feeStructure?.showFee && (
              <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">Fee Structure</h3>
                <p className="text-sm font-semibold text-slate-800">
                  Annual Tuition Fee: <span className="text-base font-black text-[#0F2038]">{course.feeStructure.annualFee}</span>
                </p>
                <p className="text-xs text-emerald-700 font-semibold">
                  {course.feeStructure.scholarshipUpto}
                </p>
              </div>
            )}

          </div>

          {/* Right Column: Direct Course Enquiry Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-5 sm:p-8 rounded-2xl border border-stone-200 shadow-md space-y-4">
              <div className="border-b border-stone-100 pb-3 space-y-1">
                <span className="text-[10px] sm:text-xs font-extrabold text-[#8B1E26] uppercase tracking-wider">
                  ADMISSION ENQUIRY
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  Enquire for {course.shortTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  Submit details to receive batch timings, fee concessions & demo passes.
                </p>
              </div>

              <EnquiryForm defaultSource={`Program Detail: ${course.title}`} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
