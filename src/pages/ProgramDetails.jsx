import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../config/courses';
import { features } from '../config/features';
import EnquiryForm from '../components/enquiry/EnquiryForm';
import { Calendar, Clock, CheckCircle2, ArrowLeft, BookOpen, ShieldCheck, FileText } from 'lucide-react';

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
    <div className="py-10 bg-[#FBFBFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0F2038] hover:text-[#8B1E26] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Programs</span>
        </button>

        {/* Hero Header */}
        <div className="bg-[#0F2038] text-white p-6 sm:p-10 rounded-2xl shadow-xl space-y-4 border border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#8B1E26] text-white text-xs font-extrabold px-3 py-1 rounded tracking-wider uppercase">
              {course.category}
            </span>
            <span className="bg-slate-800 text-[#D4AF37] text-xs font-bold px-3 py-1 rounded border border-slate-700">
              {course.targetStudents}
            </span>
            <span className="bg-slate-800 text-slate-300 text-xs font-medium px-3 py-1 rounded border border-slate-700">
              {course.duration}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {course.title}
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            {course.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-6 text-xs text-slate-300 font-semibold border-t border-slate-800">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Next Batch Starts: <strong className="text-white">{course.batchStartDate}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Weekly Commitment: <strong className="text-white">{course.weeklyHours}</strong></span>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Syllabus & Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Features Checklist */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <ShieldCheck className="w-5 h-5 text-[#8B1E26]" />
                <span>Program Highlights & Student Deliverables</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Test & Schedule Info */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Clock className="w-5 h-5 text-[#8B1E26]" />
                <span>Testing Frequency & Schedule</span>
              </h2>

              <div className="space-y-3 text-xs text-slate-700">
                <p><strong>Evaluation Pattern:</strong> {course.testFrequency}</p>
                <p><strong>Eligibility Criteria:</strong> {course.eligibility}</p>
                <p><strong>Available Modes:</strong> {course.mode.join(', ')}</p>
              </div>
            </div>

            {/* Syllabus Overview Units */}
            {course.syllabusOverview && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <BookOpen className="w-5 h-5 text-[#8B1E26]" />
                  <span>Syllabus & Topic Coverage</span>
                </h2>

                <div className="space-y-4">
                  {course.syllabusOverview.map((unit, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                      <h3 className="font-extrabold text-sm text-[#0F2038]">
                        {unit.unit}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {unit.topics.map((tp, tIdx) => (
                          <span key={tIdx} className="bg-white text-slate-700 text-xs px-2.5 py-1 rounded border border-slate-200 font-medium">
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
              <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Fee Details</h3>
                <p className="text-sm font-semibold text-slate-800">
                  Annual Tuition Fee: <span className="text-lg font-black text-[#0F2038]">{course.feeStructure.annualFee}</span>
                </p>
                <p className="text-xs text-emerald-700 font-semibold">
                  {course.feeStructure.scholarshipUpto}
                </p>
              </div>
            )}

          </div>

          {/* Right Column: Direct Course Enquiry Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-lg space-y-4 sticky top-24">
              <div className="border-b border-slate-100 pb-4 space-y-1">
                <span className="text-xs font-extrabold text-[#8B1E26] uppercase tracking-wider">
                  ADMISSION ENQUIRY
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Enquire for {course.shortTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  Submit details to receive batch timings, fee concessions & demo lecture passes.
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
