import React from 'react';
import { features } from '../../config/features';

export default function Methodology() {
  if (!features.methodology) return null;

  const steps = [
    {
      num: "01",
      title: "CONCEPT MASTERY",
      desc: "Deep dive into NCERT fundamentals and advanced theoretical foundations for Physics, Chem, Math & Bio."
    },
    {
      num: "02",
      title: "SMART DIGITAL CLASS",
      desc: "Visual interactive learning on AC digital boards with 3D mechanism simulations and visual recall."
    },
    {
      num: "03",
      title: "DAILY DPP PRACTICE",
      desc: "Daily Practice Problems (DPP) from high-volume question banks with graded difficulty levels."
    },
    {
      num: "04",
      title: "1-ON-1 DOUBT SESSIONS",
      desc: "Daily dedicated doubt clearing counters with subject faculties at Shrinath Complex center."
    },
    {
      num: "05",
      title: "CBT & OMR MOCKS",
      desc: "NTA pattern Computer Based Tests (CBT) and 720-marks NEET OMR drills with negative marking control."
    },
    {
      num: "06",
      title: "RANK BOOSTER MENTORING",
      desc: "Continuous micro-analysis of speed, accuracy, and personalized revision blueprints."
    }
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#0B192C] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2 sm:space-y-3">
          <span className="text-[10px] sm:text-xs font-black text-[#F59E0B] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700 inline-block">
            PERL TEACHING METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Our 6-Step Scientific Learning Framework
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            Consistent top ranks in IIT-JEE and NEET require a structured pedagogy. Every student at PERL Education follows our proven 6-stage roadmap.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-slate-700/80 z-0" />

          {/* Vertical Connecting Line for Mobile */}
          <div className="lg:hidden absolute top-4 bottom-8 left-5 w-[2px] bg-slate-700/80 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-3.5 sm:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="flex items-start lg:block gap-3.5 sm:gap-4 bg-slate-900/70 lg:bg-transparent p-3.5 sm:p-4 lg:p-2 rounded-2xl lg:rounded-none border border-slate-800 lg:border-none group text-left"
              >
                {/* Step Badge */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-[#0F4C81] border-2 border-slate-700 text-[#F59E0B] flex items-center justify-center font-black text-xs sm:text-base lg:text-lg shadow-md group-hover:border-[#F59E0B] group-hover:bg-[#0F4C81] group-hover:text-white transition-all shrink-0">
                  {step.num}
                </div>

                <div className="space-y-1 lg:pt-3 flex-1">
                  <h3 className="font-black text-xs sm:text-sm text-white tracking-tight uppercase group-hover:text-[#F59E0B] transition-colors">
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
