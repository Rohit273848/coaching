import React from 'react';
import { features } from '../../config/features';

export default function Methodology() {
  if (!features.methodology) return null;

  const steps = [
    {
      num: "01",
      title: "CONCEPT MASTERY",
      desc: "Comprehensive coverage of Quant, Reasoning, and Banking fundamentals from basic to advanced."
    },
    {
      num: "02",
      title: "SPEED MATH DRILLS",
      desc: "Daily simplification and Vedic Math shortcuts to solve arithmetic in seconds."
    },
    {
      num: "03",
      title: "TCS-PATTERN CBT MOCKS",
      desc: "Regular computer-based tests matching exact IBPS, SBI, and MCAER interfaces."
    },
    {
      num: "04",
      title: "ERROR ANALYSIS",
      desc: "Diagnostic topic scorecards tracking negative marking and sectional time bottlenecks."
    },
    {
      num: "05",
      title: "DAILY DOUBT DESK",
      desc: "Daily 1-on-1 doubt clearing counters with subject experts at our Paithan Gate center."
    },
    {
      num: "06",
      title: "MOCK INTERVIEWS",
      desc: "Specialized GD/PI interview panels led by experienced educators and bank officers."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#1D2B53] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-black text-[#F8B81F] uppercase tracking-widest bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700 inline-block">
            SYSTEMATIC PEDAGOGY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            How We Prepare Students for Banking & MCAER Success
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            1000+ selections don't happen by chance. Every student at Saarthi Education follows our proven 6-stage preparation framework.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-slate-700/80 z-0" />

          {/* Vertical Connecting Line for Mobile */}
          <div className="lg:hidden absolute top-4 bottom-8 left-5 w-[2px] bg-slate-700/80 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="flex items-start lg:block gap-4 bg-slate-900/60 lg:bg-transparent p-4 lg:p-2 rounded-2xl lg:rounded-none border border-slate-800 lg:border-none group"
              >
                {/* Step Badge */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-[#111822] border-2 border-slate-700 text-[#F8B81F] flex items-center justify-center font-black text-sm sm:text-base lg:text-lg shadow-md group-hover:border-[#F8B81F] group-hover:bg-[#1E4FA8] group-hover:text-white transition-all shrink-0">
                  {step.num}
                </div>

                <div className="space-y-1 lg:pt-3 flex-1">
                  <h3 className="font-black text-xs sm:text-sm text-white tracking-tight uppercase group-hover:text-[#F8B81F] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal">
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
