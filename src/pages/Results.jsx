import React, { useState } from 'react';
import TopperCard from '../components/results/TopperCard';
import { toppers, resultSummary, examCategories, availableYears } from '../config/results';
import { Trophy, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Results() {
  const [selectedExam, setSelectedExam] = useState('ALL');
  const [selectedYear, setSelectedYear] = useState('ALL');

  const filteredToppers = toppers.filter((t) => {
    const matchExam = selectedExam === 'ALL' || t.exam === selectedExam;
    const matchYear = selectedYear === 'ALL' || t.year === parseInt(selectedYear);
    return matchExam && matchYear;
  });

  return (
    <div className="py-12 bg-[#FBFBFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-[#0F2038] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-4 border border-slate-800">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              HALL OF FAME & RESULTS ARCHIVE
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {resultSummary.headline}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              {resultSummary.subHeadline}
            </p>
          </div>

          {/* Quick Stats Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800 text-center sm:text-left">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-white font-accent block">
                {resultSummary.totalSelections}
              </span>
              <span className="text-xs font-semibold text-slate-400">Total Selections</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[#D4AF37] font-accent block">
                {resultSummary.iitSelections}
              </span>
              <span className="text-xs font-semibold text-slate-400">IIT Selections</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-accent block">
                {resultSummary.aiimsSelections}
              </span>
              <span className="text-xs font-semibold text-slate-400">AIIMS & MBBS Selections</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-amber-400 font-accent block">
                {resultSummary.top1000AirCount}
              </span>
              <span className="text-xs font-semibold text-slate-400">Top 1000 AIR Ranks</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            
            {/* Exam Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {examCategories.map((exam) => (
                <button
                  key={exam}
                  onClick={() => setSelectedExam(exam)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold uppercase transition-all ${
                    selectedExam === exam
                      ? 'bg-[#8B1E26] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
                className="bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#8B1E26]/20"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredToppers.map((topper) => (
            <TopperCard key={topper.id} topper={topper} />
          ))}
        </div>

        {filteredToppers.length === 0 && (
          <div className="bg-white p-12 rounded-xl text-center text-slate-500 space-y-2 border border-slate-200">
            <Trophy className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold">No ranker records match the selected filter combination.</p>
          </div>
        )}

      </div>
    </div>
  );
}
