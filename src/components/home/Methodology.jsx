import React from 'react';
import { BookOpen, Target, FileSpreadsheet, LineChart, RefreshCw, Layers } from 'lucide-react';
import { features } from '../../config/features';

export default function Methodology() {
  if (!features.methodology) return null;

  const steps = [
    {
      num: "01",
      title: "CONCEPT RIGOUR",
      desc: "Deep theoretical derivations led by IITian faculty from first principles."
    },
    {
      num: "02",
      title: "DAILY PRACTICE",
      desc: "Graded Daily Practice Problems (DPP) with 20-year past PYQs."
    },
    {
      num: "03",
      title: "CBT & OMR TESTS",
      desc: "Bi-weekly computer-based mocks replicating exact NTA JEE & NEET interface."
    },
    {
      num: "04",
      title: "ERROR ANALYSIS",
      desc: "Diagnostic topic scorecards tracking negative marking and speed bottlenecks."
    },
    {
      num: "05",
      title: "DOUBT DESK",
      desc: "Daily 1-on-1 doubt counters active from 4 PM to 7 PM to eliminate backlogs."
    },
    {
      num: "06",
      title: "TARGET REVISION",
      desc: "Structured micro-revision modules and high-speed mock test marathons."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#0F2038] text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Subtle Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700">
            SYSTEMATIC PEDAGOGY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            How We Prepare Students for Top Percentiles
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            Consistent ranks don't happen by accident. Every aspirant follows our time-tested 6-phase academic progression.
          </p>
        </div>

        {/* Connected Progression Flow (Horizontal on desktop, Vertical on mobile) */}
        <div className="relative">
          
          {/* Connecting Line across steps on large screens */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-slate-700/80 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/90 lg:bg-transparent p-5 lg:p-2 rounded-xl lg:rounded-none border lg:border-none border-slate-800 space-y-3 text-left group"
              >
                {/* Step Number Circle */}
                <div className="w-14 h-14 rounded-full bg-[#0B1526] border-2 border-slate-700 text-[#D4AF37] flex items-center justify-center font-black text-lg font-accent shadow-md group-hover:border-[#8B1E26] group-hover:bg-[#8B1E26] group-hover:text-white transition-all duration-300">
                  {step.num}
                </div>

                <div className="space-y-1 pt-1">
                  <h3 className="font-extrabold text-sm text-white tracking-tight uppercase group-hover:text-[#D4AF37] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {step.desc}
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
