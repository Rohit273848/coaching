import React from 'react';
import { Calendar, Clock, MapPin, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import { courses } from '../../config/courses';
import { features } from '../../config/features';

export default function BatchesTable({ onOpenEnquiry }) {
  if (!features.batchSchedule) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#111822] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-black text-[#F8B81F] uppercase tracking-widest bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700 inline-block">
              ADMISSIONS OPEN 2026
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Upcoming Batch Commencement Schedule
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              New Online + Offline Banking & MCAER batches starting 1 September 2026. Limited batch capacity for personal attention.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Batch Schedule Direct Enquiry')}
            className="w-full sm:w-auto bg-[#F8B81F] hover:bg-[#E5A40F] active:scale-[0.98] text-[#1D2B53] font-black text-xs px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 shadow-md min-h-[46px] cursor-pointer"
          >
            <span>Reserve Batch Seat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Batch Cards (Shown on Mobile / Small screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {courses.map((c) => (
            <div
              key={c.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="bg-[#1E4FA8] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase">
                    {c.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-emerald-400 text-[10px] font-bold">
                    <ShieldAlert className="w-3 h-3" />
                    Admissions Open
                  </span>
                </div>

                <h4 className="font-black text-base text-white leading-snug">
                  {c.title}
                </h4>

                <div className="space-y-1 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#F8B81F]" />
                    <span>Starts: {c.batchStartDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Duration: {c.duration} • {c.mode[0]}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(c.title)}
                className="w-full bg-[#1E4FA8] hover:bg-[#163E85] active:scale-98 text-white text-xs font-bold py-3 rounded-xl transition-colors min-h-[44px] flex items-center justify-center gap-1.5"
              >
                <span>Get Batch Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F8B81F]" />
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-[#F8B81F] font-black uppercase text-[11px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Course & Program</th>
                  <th className="py-4 px-4">Target Students</th>
                  <th className="py-4 px-4">Batch Start Date</th>
                  <th className="py-4 px-4">Learning Mode</th>
                  <th className="py-4 px-4">Admission Status</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-200">
                {courses.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-white">
                      <div className="flex items-center gap-2.5">
                        <span className="bg-[#1E4FA8] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full">
                          {c.category}
                        </span>
                        <span className="truncate max-w-xs">{c.shortTitle}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-300 font-medium">
                      {c.targetStudents}
                    </td>
                    <td className="py-4 px-4 font-semibold text-amber-300">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#F8B81F] shrink-0" />
                        <span>{c.batchStartDate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-300">
                      {c.mode.join(', ')}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 bg-emerald-950/80 text-emerald-400 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-800">
                        <ShieldAlert className="w-3 h-3" />
                        Admissions Open
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => onOpenEnquiry && onOpenEnquiry(c.title)}
                        className="bg-[#1E4FA8] hover:bg-[#163E85] text-white text-xs font-black px-4 py-2 rounded-xl transition-colors shadow-xs min-h-[38px] cursor-pointer"
                      >
                        Enquire
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
