import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, LineChart, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { institute } from '../../config/institute';

export default function AcademyStory() {
  const pillars = [
    {
      title: "Conceptual Grounding First",
      desc: "Deep root derivations and physical intuition before solving advanced numericals.",
      icon: BookOpen
    },
    {
      title: "Daily 1-on-1 Doubt Desks",
      desc: "Senior IITian faculty sit at doubt counters from 4 PM to 7 PM to ensure zero backlog.",
      icon: Users
    },
    {
      title: "Exact NTA-Pattern CBT Tests",
      desc: "On-campus computer lab simulates the real JEE/NEET environment with instant diagnostics.",
      icon: Target
    },
    {
      title: "Transparent Parent Progress",
      desc: "Monthly PTMs and automated attendance/test reports keep parents fully in sync.",
      icon: LineChart
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Institute / Classroom Image with Mobile-Friendly Ratio */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-slate-900 aspect-16/10 sm:aspect-4/3 lg:aspect-auto lg:h-[480px]">
              <img
                src={institute.images.buildingImage || institute.images.heroImage}
                alt="Apex Momentum Academic Center"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2038]/85 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1">
                <div className="inline-flex items-center gap-1.5 bg-[#8B1E26] text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Samarth Nagar Center</span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-white">
                  Disciplined Academic Infrastructure
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-200">
                  Smart classrooms, silent study library, and 50-seater CBT lab.
                </p>
              </div>
            </div>

            {/* Badge overlay */}
            <div className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-4 bg-white p-2.5 sm:p-4 rounded-xl border border-stone-300 shadow-lg flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0F2038] text-white flex items-center justify-center font-bold">
                <span className="text-[#D4AF37] font-accent text-base sm:text-xl font-black">15</span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase text-slate-500 block">Legacy</span>
                <strong className="text-xs sm:text-sm font-extrabold text-slate-900 block">Years of Merit</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Story & Approach */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 pt-2 lg:pt-0">
            
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-extrabold text-[#8B1E26] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
                THE ACADEMIC APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#0F2038] tracking-tight leading-tight">
                Preparation Built Around Concepts, Practice & Performance.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              At {institute.name}, we refuse the assembly-line commercial model. We strictly cap batches to 35 students so every student is known by name and mentored directly by senior IITian educators.
            </p>

            {/* 4 Pillars Grid (Mobile-First 1 or 2 col) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="p-3 sm:p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#8B1E26] shrink-0" />
                      <h4 className="font-extrabold text-xs text-[#0F2038]">{p.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Story Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0F2038] hover:text-[#8B1E26] group transition-colors min-h-[44px] items-center"
              >
                <span>Discover Our Complete Academic Philosophy</span>
                <ArrowRight className="w-4 h-4 text-[#8B1E26] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
