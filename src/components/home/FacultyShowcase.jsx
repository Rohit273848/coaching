import React from 'react';
import { Link } from 'react-router-dom';
import { facultyMembers, facultySummary } from '../../config/faculty';
import { features } from '../../config/features';
import { Award, GraduationCap, ArrowRight, BookOpen, Quote, ShieldCheck } from 'lucide-react';

export default function FacultyShowcase() {
  if (!features.faculty) return null;

  // Senior Lead Educator (HOD Physics / Director)
  const leadFaculty = facultyMembers[0];
  // Other HODs
  const otherFaculty = facultyMembers.slice(1);

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-extrabold text-[#8B1E26] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
              ACADEMIC LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2038] tracking-tight">
              Learn Directly From Master Educators
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              No junior teaching assistants or outsourced guest lectures. All core subjects are taught by our full-time senior HODs.
            </p>
          </div>

          <Link
            to="/faculty"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#8B1E26] hover:text-[#6D171E] group shrink-0"
          >
            <span>View Full Faculty Credentials</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Faculty Layout: Lead HOD (7 cols) + 3 Subject Heads (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Lead Faculty (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8F7F4] rounded-2xl border border-stone-300/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
            
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-4">
              <span className="bg-[#0F2038] text-white text-xs font-extrabold px-3 py-1 rounded uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                FEATURED SENIOR DIRECTOR
              </span>
              <span className="text-xs font-bold text-[#8B1E26]">
                {leadFaculty.experience}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              <div className="sm:col-span-5 relative">
                <img
                  src={leadFaculty.photo}
                  alt={leadFaculty.name}
                  className="w-full h-64 sm:h-72 object-cover object-top rounded-xl border border-stone-300 shadow-md"
                  loading="lazy"
                />
                <div className="absolute -bottom-2 -right-1 bg-[#8B1E26] text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                  IIT Bombay
                </div>
              </div>

              <div className="sm:col-span-7 space-y-3">
                <div>
                  <span className="text-xs font-bold text-[#8B1E26] uppercase tracking-wide">
                    {leadFaculty.designation}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F2038] tracking-tight">
                    {leadFaculty.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mt-1">
                    <GraduationCap className="w-4 h-4 text-[#0F2038] shrink-0" />
                    <span>{leadFaculty.qualification}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {leadFaculty.bio}
                </p>

                {leadFaculty.quote && (
                  <div className="bg-white p-3 rounded-lg border border-stone-200 text-xs text-slate-700 italic">
                    "{leadFaculty.quote}"
                  </div>
                )}
              </div>

            </div>

            <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-[#0F2038]">Specialization: {leadFaculty.specialization}</span>
              <span className="text-[11px] text-slate-500">Full-time Faculty</span>
            </div>

          </div>

          {/* Other 3 Subject Heads (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {otherFaculty.map((fac) => (
              <div
                key={fac.id}
                className="bg-white rounded-xl border border-stone-300/80 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <img
                  src={fac.photo}
                  alt={fac.name}
                  className="w-16 h-18 sm:w-20 sm:h-22 object-cover object-top rounded-lg border border-stone-200 shrink-0 group-hover:scale-102 transition-transform"
                  loading="lazy"
                />

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8B1E26] bg-red-50 px-2 py-0.5 rounded">
                      {fac.specialization.split(',')[0]}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500">
                      {fac.experience}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-sm sm:text-base text-[#0F2038] leading-tight">
                    {fac.name}
                  </h4>

                  <p className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span className="truncate">{fac.qualification}</span>
                  </p>

                  <p className="text-[11px] text-slate-500 line-clamp-1 font-normal">
                    {fac.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
