import React from 'react';
import { Link } from 'react-router-dom';
import { facultyMembers, facultySummary } from '../../config/faculty';
import { features } from '../../config/features';
import { GraduationCap, ArrowRight, Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function FacultyShowcase() {
  if (!features.faculty) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-black text-[#1E4FA8] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
              {facultySummary.title}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1D2B53] tracking-tight">
              {facultySummary.headline}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              {facultySummary.subTitle}
            </p>
          </div>

          <Link
            to="/faculty"
            className="inline-flex items-center gap-1.5 text-xs font-black text-[#1E4FA8] hover:text-[#163E85] group shrink-0 min-h-[44px] items-center"
          >
            <span>Meet All Faculty Members</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Faculty Grid (6 Educators) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((fac) => (
            <div
              key={fac.id}
              className="bg-[#F8F9FC] rounded-3xl border border-slate-200 overflow-hidden shadow-saarthi hover:shadow-saarthi-lg transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Photo & Badge */}
              <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                <img
                  src={fac.photo}
                  alt={fac.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D2B53]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="bg-[#1E4FA8] text-[#F8B81F] text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider inline-block">
                    {fac.qualification}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-200 block mt-0.5">
                    {fac.experience}
                  </span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 sm:p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-black text-lg sm:text-xl text-[#1D2B53] group-hover:text-[#1E4FA8] transition-colors">
                    {fac.name}
                  </h3>
                  {fac.marathiName && (
                    <p className="text-xs font-bold text-[#F8941F]">
                      {fac.marathiName}
                    </p>
                  )}
                  <p className="text-xs font-bold text-[#1E4FA8]">
                    {fac.designation}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1 font-normal line-clamp-2">
                    {fac.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 italic">
                  "{fac.quote}"
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
