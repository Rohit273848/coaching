import React from 'react';
import { Link } from 'react-router-dom';
import { facultyMembers } from '../../config/faculty';
import { features } from '../../config/features';
import { GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FacultyShowcase() {
  if (!features.faculty) return null;

  const leadFaculty = facultyMembers[0];
  const otherFaculty = facultyMembers.slice(1);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[10px] sm:text-xs font-extrabold text-[#8B1E26] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
              ACADEMIC LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2038] tracking-tight">
              Learn Directly From Master Educators
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              No junior teaching assistants. All core subjects are taught by our full-time senior IITian and Doctor HODs.
            </p>
          </div>

          <Link
            to="/faculty"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#8B1E26] hover:text-[#6D171E] group shrink-0 min-h-[44px] items-center"
          >
            <span>View Full Faculty Credentials</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Mobile-First Faculty Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Featured Lead Faculty */}
          <div className="lg:col-span-7 bg-[#F8F7F4] rounded-2xl border border-stone-300/80 p-5 sm:p-8 shadow-sm flex flex-col justify-between space-y-5">
            
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
              <span className="bg-[#0F2038] text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                DIRECTOR & HOD PHYSICS
              </span>
              <span className="text-xs font-bold text-[#8B1E26]">
                {leadFaculty.experience}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
              
              <div className="sm:col-span-5 relative flex justify-center sm:block">
                <div className="relative w-48 sm:w-full">
                  <img
                    src={leadFaculty.photo}
                    alt={leadFaculty.name}
                    className="w-full h-56 sm:h-72 object-cover object-top rounded-xl border border-stone-300 shadow-md"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-2 -right-1 bg-[#8B1E26] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded shadow">
                    IIT Bombay
                  </div>
                </div>
              </div>

              <div className="sm:col-span-7 space-y-2.5 sm:space-y-3">
                <div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#8B1E26] uppercase tracking-wide">
                    {leadFaculty.designation}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F2038] tracking-tight">
                    {leadFaculty.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mt-0.5">
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
              <span className="font-semibold text-[#0F2038] truncate max-w-[200px] sm:max-w-none">
                Specialization: {leadFaculty.specialization}
              </span>
              <span className="text-[11px] text-slate-500 shrink-0">Full-time Faculty</span>
            </div>

          </div>

          {/* Supporting Subject Heads: Horizontal Touch-Swipe on Mobile, Stacked on Desktop */}
          <div className="lg:col-span-5">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-3 sm:gap-4 pb-2 lg:pb-0 snap-x no-scrollbar">
              {otherFaculty.map((fac) => (
                <div
                  key={fac.id}
                  className="w-[280px] xs:w-[310px] sm:w-[340px] lg:w-full shrink-0 snap-start bg-white rounded-xl border border-stone-300/80 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex items-center gap-3 sm:gap-4"
                >
                  <img
                    src={fac.photo}
                    alt={fac.name}
                    className="w-16 h-18 sm:w-20 sm:h-22 object-cover object-top rounded-lg border border-stone-200 shrink-0"
                    loading="lazy"
                  />

                  <div className="flex-1 space-y-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#8B1E26] bg-red-50 px-2 py-0.5 rounded truncate">
                        {fac.specialization.split(',')[0]}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 shrink-0">
                        {fac.experience}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-sm sm:text-base text-[#0F2038] leading-tight truncate">
                      {fac.name}
                    </h4>

                    <p className="text-xs font-semibold text-slate-700 flex items-center gap-1 truncate">
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

            {/* Mobile Swipe Hint */}
            <div className="flex lg:hidden items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium pt-2">
              <span>← Swipe for subject HODs →</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
