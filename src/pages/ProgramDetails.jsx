import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../config/courses';
import { features } from '../config/features';
import EnquiryForm from '../components/enquiry/EnquiryForm';
import { Calendar, Clock, CheckCircle2, ArrowLeft, BookOpen, ShieldCheck, Star, Users } from 'lucide-react';

export default function ProgramDetails({ onOpenEnquiry }) {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === courseId) || courses[0];

  if (!course) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold">Course Not Found</h2>
        <Link to="/programs" className="text-[#1E4FA8] underline font-semibold">
          Return to Batches
        </Link>
      </div>
    );
  }

  return (
    <div className="py-6 sm:py-10 bg-[#F8F9FC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-black text-[#1D2B53] hover:text-[#1E4FA8] transition-colors min-h-[44px] items-center cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Batches</span>
        </button>

        {/* Hero Header */}
        <div className="bg-[#1D2B53] text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-4 border border-[#283C6E]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#1E4FA8] text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full tracking-wider uppercase">
              {course.category}
            </span>
            <span className="bg-slate-800 text-[#F8B81F] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border border-slate-700">
              {course.targetStudents}
            </span>
            <span className="bg-slate-800 text-slate-300 text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full border border-slate-700">
              {course.duration}
            </span>
            <span className="bg-amber-500/20 text-[#F8B81F] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              <span>{course.rating}</span>
            </span>
          </div>

          <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
            {course.title}
          </h1>

          {course.marathiTitle && (
            <p className="text-sm sm:text-base font-bold text-[#F8B81F]">
              {course.marathiTitle}
            </p>
          )}

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-normal">
            {course.detailedDescription || course.description}
          </p>

          <div className="pt-3 flex flex-wrap gap-4 sm:gap-6 text-xs text-slate-300 font-semibold border-t border-slate-800">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#F8B81F]" />
              <span>Commencing: <strong className="text-white">{course.batchStartDate}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#F8B81F]" />
              <span>Schedule: <strong className="text-white">{course.weeklyHours}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#F8B81F]" />
              <span>Enrolled: <strong className="text-white">{course.studentCount}</strong></span>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Column: Syllabus & Details */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Features Checklist */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-saarthi space-y-4">
              <h2 className="text-base sm:text-lg font-black text-[#1D2B53] flex items-center gap-2 border-b border-slate-100 pb-3">
                <ShieldCheck className="w-5 h-5 text-[#1E4FA8]" />
                <span>Program Highlights & Deliverables</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                {course.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Test & Schedule Info */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-saarthi space-y-3 sm:space-y-4">
              <h2 className="text-base sm:text-lg font-black text-[#1D2B53] flex items-center gap-2 border-b border-slate-100 pb-3">
                <Clock className="w-5 h-5 text-[#1E4FA8]" />
                <span>Testing Frequency & Eligibility</span>
              </h2>

              <div className="space-y-2.5 text-xs text-slate-700 font-normal">
                <p><strong>Evaluation Pattern:</strong> {course.testFrequency}</p>
                <p><strong>Eligibility:</strong> {course.eligibility}</p>
                <p><strong>Available Learning Modes:</strong> {course.mode.join(', ')}</p>
              </div>
            </div>

            {/* Syllabus Overview */}
            {course.syllabusOverview && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-saarthi space-y-4">
                <h2 className="text-base sm:text-lg font-black text-[#1D2B53] flex items-center gap-2 border-b border-slate-100 pb-3">
                  <BookOpen className="w-5 h-5 text-[#1E4FA8]" />
                  <span>Syllabus & Topic Structure</span>
                </h2>

                <div className="space-y-3">
                  {course.syllabusOverview.map((unit, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                      <h3 className="font-black text-xs sm:text-sm text-[#1D2B53]">
                        {unit.unit}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {unit.topics.map((tp, tIdx) => (
                          <span key={tIdx} className="bg-white text-slate-700 text-[11px] sm:text-xs px-2.5 py-1 rounded-lg border border-slate-200 font-medium">
                            {tp}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Direct Course Enquiry Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-saarthi space-y-4">
              <div className="border-b border-slate-100 pb-3 space-y-1">
                <span className="text-[10px] sm:text-xs font-black text-[#1E4FA8] uppercase tracking-wider">
                  ADMISSION ENQUIRY
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#1D2B53]">
                  Enquire for {course.shortTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  Submit your details to receive batch timings, study material demos & seat reservation pass.
                </p>
              </div>

              <EnquiryForm defaultSource={`Batch Detail: ${course.title}`} defaultCourse={course.title} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
