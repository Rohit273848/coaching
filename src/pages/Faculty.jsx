import React from 'react';
import FacultyCard from '../components/faculty/FacultyCard';
import { facultyMembers, facultySummary } from '../config/faculty';
import { ShieldCheck, GraduationCap } from 'lucide-react';

export default function Faculty() {
  return (
    <div className="py-12 bg-[#FBFBFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-[#0F2038] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-3 border border-slate-800">
          <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            MASTER FACULTY TEAM
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {facultySummary.title}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            {facultySummary.subTitle}
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyMembers.map((fac) => (
            <FacultyCard key={fac.id} faculty={fac} />
          ))}
        </div>

        {/* Faculty Commitment Box */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#8B1E26]" />
            <span>Our Faculty Promise to Students & Parents</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">No Guest Lecturers</h3>
              <p>All core physics, chemistry, mathematics, and biology classes are conducted by our full-time senior HODs.</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Daily Doubt Counter</h3>
              <p>Faculty members are present at doubt desks every day from 4 PM to 7 PM for 1-on-1 problem resolution.</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">1-on-1 Mentorship</h3>
              <p>Every student is paired with a mentor faculty member to monitor emotional well-being and test score trends.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
