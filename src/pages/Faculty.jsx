import React from 'react';
import FacultyCard from '../components/faculty/FacultyCard';
import { facultyMembers, facultySummary } from '../config/faculty';
import { ShieldCheck, Award, Users, BookOpen, Star } from 'lucide-react';

export default function Faculty() {
  return (
    <div className="py-6 sm:py-12 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-3 border border-slate-800">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-[#F59E0B] px-3.5 py-1.5 rounded-full border border-amber-500/30 text-[11px] sm:text-xs font-black uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
            <span>{facultySummary.title}</span>
          </div>
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
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base sm:text-xl font-black text-[#0B192C] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F4C81]" />
            <span>Our Teaching & Mentoring Promise to Students and Parents</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-xs text-slate-600 leading-relaxed font-normal">
            <div className="space-y-1.5 bg-blue-50/40 p-4 rounded-2xl border border-blue-100">
              <h3 className="font-black text-[#0B192C] text-sm">Full-Time Master Mentors</h3>
              <p>Core subjects in Physics, Chemistry, Mathematics, and Biology are taught by experienced educators with dedicated classroom focus.</p>
            </div>
            <div className="space-y-1.5 bg-amber-50/40 p-4 rounded-2xl border border-amber-100">
              <h3 className="font-black text-[#0B192C] text-sm">Daily 1-on-1 Doubt Clearing Desk</h3>
              <p>Faculty members sit at dedicated doubt solving counters every day after lectures to clarify numericals, NCERT lines, and test errors.</p>
            </div>
            <div className="space-y-1.5 bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100">
              <h3 className="font-black text-[#0B192C] text-sm">Continuous Performance Tracking</h3>
              <p>Small batch sizes allow our teachers to track test scores, analyze weaknesses, and provide customized improvement roadmaps.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
