import React from 'react';
import FacultyCard from '../components/faculty/FacultyCard';
import { facultyMembers, facultySummary } from '../config/faculty';
import { ShieldCheck } from 'lucide-react';

export default function Faculty() {
  return (
    <div className="py-6 sm:py-12 bg-[#F8F7F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="bg-[#0F2038] text-white p-6 sm:p-10 rounded-2xl shadow-xl space-y-2.5 border border-slate-800">
          <span className="text-[10px] sm:text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700 inline-block">
            MASTER FACULTY TEAM
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {facultySummary.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-normal">
            {facultySummary.subTitle}
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {facultyMembers.map((fac) => (
            <FacultyCard key={fac.id} faculty={fac} />
          ))}
        </div>

        {/* Faculty Commitment Box */}
        <div className="bg-white p-5 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <h2 className="text-base sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B1E26]" />
            <span>Our Faculty Promise to Students & Parents</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-xs text-slate-600 leading-relaxed font-normal">
            <div className="space-y-1 bg-stone-50/70 p-3 sm:p-0 rounded-xl sm:bg-transparent">
              <h3 className="font-bold text-slate-900 text-sm">No Guest Lecturers</h3>
              <p>All core physics, chemistry, mathematics, and biology classes are conducted by our full-time senior HODs.</p>
            </div>
            <div className="space-y-1 bg-stone-50/70 p-3 sm:p-0 rounded-xl sm:bg-transparent">
              <h3 className="font-bold text-slate-900 text-sm">Daily Doubt Counter</h3>
              <p>Faculty members are present at doubt desks every day from 4 PM to 7 PM for 1-on-1 problem resolution.</p>
            </div>
            <div className="space-y-1 bg-stone-50/70 p-3 sm:p-0 rounded-xl sm:bg-transparent">
              <h3 className="font-bold text-slate-900 text-sm">1-on-1 Mentorship</h3>
              <p>Every student is paired with a mentor faculty member to monitor emotional well-being and test score trends.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
