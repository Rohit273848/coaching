import React, { useState } from 'react';
import TopperCard from '../components/results/TopperCard';
import { toppers, resultSummary, examCategories, availableYears } from '../config/results';
import { Trophy, Search, CheckCircle2, Award } from 'lucide-react';

export default function Results() {
  const [selectedExam, setSelectedExam] = useState('ALL');
  const [selectedYear, setSelectedYear] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredToppers = toppers.filter((t) => {
    const matchExam = selectedExam === 'ALL' || t.exam === selectedExam;
    const matchYear = selectedYear === 'ALL' || t.year === parseInt(selectedYear);
    const matchSearch = searchTerm === '' || 
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (t.rollNumber && t.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (t.allocatedCollege && t.allocatedCollege.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchExam && matchYear && matchSearch;
  });

  return (
    <div className="py-6 sm:py-12 bg-[#F8F9FC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="bg-[#1D2B53] text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-4 border border-[#283C6E]">
          <div className="max-w-3xl space-y-2.5">
            <span className="text-[11px] sm:text-xs font-black text-[#F8B81F] uppercase tracking-widest bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700 inline-block">
              1,000+ STUDENTS PLACED • HALL OF FAME
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {resultSummary.headline}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {resultSummary.marathiHeadline} — {resultSummary.subHeadline}
            </p>
          </div>

          {/* Quick Stats Bar */}
          <div className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-800 text-left">
            <div className="bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80">
              <span className="text-2xl sm:text-3xl font-black text-white block">
                {resultSummary.totalSelections}
              </span>
              <span className="text-[11px] font-bold text-slate-400">Total Placed</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80">
              <span className="text-2xl sm:text-3xl font-black text-[#F8B81F] block">
                {resultSummary.bankingSelections}
              </span>
              <span className="text-[11px] font-bold text-slate-400">Banking Selections</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">
                {resultSummary.mcaerSelections}
              </span>
              <span className="text-[11px] font-bold text-slate-400">MCAER Agri Ranks</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80">
              <span className="text-2xl sm:text-3xl font-black text-sky-400 block">
                {resultSummary.sbiIbpsOfficers}
              </span>
              <span className="text-[11px] font-bold text-slate-400">Bank PO / Officers</span>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-saarthi space-y-3">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            
            {/* Exam Filter Tabs */}
            <div className="flex overflow-x-auto no-scrollbar gap-1.5 pb-1 lg:pb-0">
              {examCategories.map((exam) => (
                <button
                  key={exam}
                  onClick={() => setSelectedExam(exam)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase shrink-0 transition-all min-h-[38px] cursor-pointer ${
                    selectedExam === exam
                      ? 'bg-[#1E4FA8] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {exam}
                </button>
              ))}
            </div>

            {/* Search and Year Dropdown */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1 sm:w-60">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by student or bank name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:bg-white min-h-[38px]"
                />
              </div>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 rounded-xl px-3 py-2 focus:outline-none min-h-[38px]"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredToppers.map((topper) => (
            <TopperCard key={topper.id} topper={topper} />
          ))}
        </div>

        {filteredToppers.length === 0 && (
          <div className="bg-white p-8 sm:p-12 rounded-3xl text-center text-slate-500 space-y-2 border border-slate-200">
            <Trophy className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold">No ranker records match the selected filter combination.</p>
          </div>
        )}

      </div>
    </div>
  );
}
