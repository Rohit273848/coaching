import React from 'react';
import FacultyCard from '../components/faculty/FacultyCard';
import { facultyMembers, facultySummary } from '../config/faculty';
import { ShieldCheck, Award, Users, BookOpen } from 'lucide-react';

export default function Faculty() {
  return (
    <div className="py-6 sm:py-12 bg-[#F8F9FC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header matching saarthiedu.online */}
        <div className="bg-[#1D2B53] text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-3 border border-[#283C6E]">
          <span className="text-[11px] sm:text-xs font-black text-[#F8B81F] uppercase tracking-widest bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700 inline-block">
            {facultySummary.title}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {facultySummary.headline}
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl font-normal">
            {facultySummary.subTitle}
          </p>
        </div>

        {/* Faculty Grid (6 Educators) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((fac) => (
            <FacultyCard key={fac.id} faculty={fac} />
          ))}
        </div>

        {/* Faculty Promise Box */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-saarthi space-y-4">
          <h2 className="text-base sm:text-xl font-black text-[#1D2B53] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E4FA8]" />
            <span>Our Teaching Promise to Students & Parents</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-xs text-slate-600 leading-relaxed font-normal">
            <div className="space-y-1.5 bg-blue-50/40 p-4 rounded-2xl border border-blue-100">
              <h3 className="font-black text-[#1D2B53] text-sm">Full-Time Master Educators</h3>
              <p>All core subjects (Quantitative Aptitude, Reasoning, Banking Awareness, Agriculture, English) are directly taught by senior HODs.</p>
            </div>
            <div className="space-y-1.5 bg-amber-50/40 p-4 rounded-2xl border border-amber-100">
              <h3 className="font-black text-[#1D2B53] text-sm">Daily 1-on-1 Doubt Desk</h3>
              <p>Faculty members sit at dedicated doubt solving counters every day to clarify numericals, formulas, and mock test errors.</p>
            </div>
            <div className="space-y-1.5 bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100">
              <h3 className="font-black text-[#1D2B53] text-sm">Interview Mentorship</h3>
              <p>Personal interview coaching, mock panel interviews, and body language guidance to ensure high final merit ranking.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
