import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, LineChart, Users, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { institute } from '../../config/institute';

export default function AcademyStory() {
  const pillars = [
    {
      title: "Conceptual Grounding First",
      desc: "We focus on root derivations and physical intuition before solving advanced numericals.",
      icon: BookOpen
    },
    {
      title: "Daily 1-on-1 Doubt Desks",
      desc: "Senior IITian faculty sit at doubt counters every day from 4 PM to 7 PM to ensure zero backlog.",
      icon: Users
    },
    {
      title: "Exact NTA-Pattern CBT Tests",
      desc: "Our on-campus computer lab simulates the real JEE/NEET environment with instant error diagnostics.",
      icon: Target
    },
    {
      title: "Transparent Parent Progress",
      desc: "Monthly PTMs and automated attendance/test reports keep parents fully in sync with preparation.",
      icon: LineChart
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Institute / Classroom Image with Layered Styling */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-3 bg-stone-100 rounded-3xl -rotate-1 pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-xl bg-slate-900">
              <img
                src={institute.images.buildingImage || institute.images.heroImage}
                alt="Apex Momentum Academic Center"
                className="w-full h-[420px] lg:h-[480px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2038]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="inline-flex items-center gap-1.5 bg-[#8B1E26] text-white text-[10px] font-bold px-2.5 py-0.5 rounded tracking-wider uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Samarth Nagar Center</span>
                </div>
                <h4 className="text-base font-extrabold text-white">
                  Disciplined Academic Infrastructure
                </h4>
                <p className="text-xs text-slate-200">
                  Acoustic-treated smart classrooms, silent self-study library, and 50-seater CBT lab.
                </p>
              </div>
            </div>

            {/* Badge overlay */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white p-4 rounded-xl border border-stone-300 shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F2038] text-white flex items-center justify-center font-bold">
                <span className="text-[#D4AF37] font-accent text-xl font-black">15</span>
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-slate-500 block">Legacy</span>
                <strong className="text-xs font-extrabold text-slate-900 block">Years of Academic Merit</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Story & Approach */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-[#8B1E26] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
                THE ACADEMIC APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#0F2038] tracking-tight leading-tight">
                Preparation Built Around Concepts, Practice & Performance.
              </h2>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              At {institute.name}, we refuse the assembly-line commercial model. Instead of cramming 150 students into single halls, we strictly cap batches to 35 students. Every student is known by name, monitored through diagnostic test analytics, and mentored directly by senior IITian educators.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
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

            {/* Story CTA */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0F2038] hover:text-[#8B1E26] group transition-colors"
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
