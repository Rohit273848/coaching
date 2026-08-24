import React from 'react';
import { Award, GraduationCap, BookOpen } from 'lucide-react';

export default function FacultyCard({ faculty }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col h-full group hover:-translate-y-1">
      {/* Top Image & Badge */}
      <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
        <img
          src={faculty.photo}
          alt={faculty.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-95"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent opacity-90" />
        
        {/* Experience Pill */}
        <div className="absolute bottom-3 left-3 bg-[#0F4C81] text-white text-[11px] font-black px-3 py-1 rounded-full shadow flex items-center gap-1">
          <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>{faculty.experience}</span>
        </div>

        {/* Qualification Tag */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#0B192C] text-[11px] font-black px-2.5 py-0.5 rounded-full border border-white/20">
          {faculty.qualification.split(',')[0]}
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#D97706] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span className="truncate">{faculty.specialization.split(',')[0]}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-[#0B192C] leading-snug group-hover:text-[#0F4C81] transition-colors">
            {faculty.name}
          </h3>

          <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-[#0F4C81] shrink-0" />
            <span>{faculty.qualification}</span>
          </p>

          <p className="text-xs text-slate-600 leading-relaxed pt-1 font-normal line-clamp-3">
            {faculty.bio}
          </p>
        </div>

        {/* Quote */}
        {faculty.quote && (
          <div className="bg-slate-50 border-l-3 border-[#0F4C81] p-3 rounded-r-xl text-xs text-slate-600 italic">
            "{faculty.quote}"
          </div>
        )}
      </div>
    </div>
  );
}
