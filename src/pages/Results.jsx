import React, { useState } from 'react';
import TopperCard from '../components/results/TopperCard';
import { toppers, resultSummary, examCategories, availableYears } from '../config/results';
import { Trophy } from 'lucide-react';

export default function Results() {
  const [selectedExam, setSelectedExam] = useState('ALL');
  const [selectedYear, setSelectedYear] = useState('ALL');

  const filteredToppers = toppers.filter((t) => {
    const matchExam = selectedExam === 'ALL' || t.exam === selectedExam;
    const matchYear = selectedYear === 'ALL' || t.year === parseInt(selectedYear);
    return matchExam && matchYear;
  });

  return (
    <div className="py-6 sm:py-12 bg-[#F8F7F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="bg-[#0F2038] text-white p-6 sm:p-10 rounded-2xl shadow-xl space-y-4 border border-slate-800">
          <div className="max-w-3xl space-y-2.5">
            <span className="text-[10px] sm:text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700 inline-block">
              HALL OF FAME & RESULTS ARCHIVE
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {resultSummary.headline}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {resultSummary.subHeadline}
            </p>
          </div>

          {/* Quick Stats Bar (2-col on Mobile, 4-col on Tablet+) */}
          <div className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-800 text-left">
            <div className="bg-slate-900/60 sm:bg-transparent p-2.5 sm:p-0 rounded-xl">
              <span className="text-xl xs:text-2xl sm:text-3xl font-black text-white font-accent block">
                {resultSummary.totalSelections}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-400">Total Selections</span>
            </div>
            <div className="bg-slate-900/60 sm:bg-transparent p-2.5 sm:p-0 rounded-xl">
              <span className="text-xl xs:text-2xl sm:text-3xl font-black text-[#D4AF37] font-accent block">
                {resultSummary.iitSelections}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-400">IIT Selections</span>
            </div>
            <div className="bg-slate-900/60 sm:bg-transparent p-2.5 sm:p-0 rounded-xl">
              <span className="text-xl xs:text-2xl sm:text-3xl font-black text-emerald-400 font-accent block">
                {resultSummary.aiimsSelections}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-400">AIIMS Selections</span>
            </div>
            <div className="bg-slate-900/60 sm:bg-transparent p-2.5 sm:p-0 rounded-xl">
              <span className="text-xl xs:text-2xl sm:text-3xl font-black text-amber-400 font-accent block">
                {resultSummary.top1000AirCount}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-400">Top 1000 AIR</span>
            </div>
          </div>
        </div>

        {/* Filters (Horizontal Swipe on Mobile) */}
        <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Exam Tabs */}
            <div className="flex overflow-x-auto no-scrollbar gap-1.5 pb-1 sm:pb-0">
              {examCategories.map((exam) => (
                <button
                  key={exam}
                  onClick={() => setSelectedExam(exam)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold uppercase shrink-0 transition-all min-h-[38px] ${
                    selectedExam === exam
                      ? 'bg-[#8B1E26] text-white shadow-xs'
                      : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                  }`}
                >
                  {exam}
                </button>
              ))}
            </div>

            {/* Year Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <label className="text-xs font-bold text-slate-700 uppercase">Year:</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-stone-50 border border-stone-200 text-xs font-bold text-slate-800 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B1E26]/20 min-h-[38px]"
              >
                <option value="ALL">All Years</option>
                {availableYears.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredToppers.map((topper) => (
            <TopperCard key={topper.id} topper={topper} />
          ))}
        </div>

        {filteredToppers.length === 0 && (
          <div className="bg-white p-8 sm:p-12 rounded-2xl text-center text-slate-500 space-y-2 border border-stone-200">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-slate-300 mx-auto" />
            <p className="text-xs sm:text-sm font-semibold">No ranker records match the selected filter combination.</p>
          </div>
        )}

      </div>
    </div>
  );
}
