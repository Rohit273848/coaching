import React from 'react';
import { Award, GraduationCap, BookOpen, Quote } from 'lucide-react';

export default function FacultyCard({ faculty }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
      {/* Top Image & Badge */}
      <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
        <img
          src={faculty.photo}
          alt={faculty.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-95"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2038] via-transparent to-transparent opacity-90" />
        
        {/* Experience Pill */}
        <div className="absolute bottom-3 left-3 bg-[#8B1E26] text-white text-[11px] font-extrabold px-2.5 py-1 rounded shadow flex items-center gap-1">
          <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{faculty.experience}</span>
        </div>

        {/* Qualification Tag */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#0F2038] text-[11px] font-bold px-2 py-0.5 rounded border border-white/20">
          {faculty.qualification.split(',')[0]}
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B1E26] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{faculty.specialization}</span>
          </div>

          <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
            {faculty.name}
          </h3>

          <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>{faculty.qualification}</span>
          </p>

          <p className="text-xs text-slate-600 leading-relaxed pt-1">
            {faculty.bio}
          </p>
        </div>

        {/* Quote / Teaching Motto */}
        {faculty.quote && (
          <div className="bg-slate-50 border-l-2 border-[#8B1E26] p-3 rounded-r-md text-xs text-slate-600 italic">
            "{faculty.quote}"
          </div>
        )}
      </div>
    </div>
  );
}
