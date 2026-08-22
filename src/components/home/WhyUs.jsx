import React from 'react';
import { ShieldCheck, Users, HelpCircle, Laptop, Bell, FileText } from 'lucide-react';
import { features } from '../../config/features';

export default function WhyUs() {
  if (!features.whyUs) return null;

  const points = [
    {
      title: "Strict Batch Size of 35 Students",
      desc: "Unlike massive commercial coaching hubs with 150+ students in one hall, we strictly cap every batch to 35 students to guarantee individual attention.",
      icon: Users
    },
    {
      title: "Full-Time Master Faculty",
      desc: "Our educators are full-time IITians, Medical Doctors, and PhD Scholars devoted entirely to classroom teaching and doubt clearing.",
      icon: ShieldCheck
    },
    {
      title: "Daily Dedicated Doubt Desk",
      desc: "Faculty members sit at 1-on-1 doubt counters every evening from 4 PM to 7 PM so no numerical doubt is left unresolved.",
      icon: HelpCircle
    },
    {
      title: "Exact NTA CBT Test Environment",
      desc: "Our on-campus computer lab replicates the real NTA JEE Main online interface, building time-management confidence.",
      icon: Laptop
    },
    {
      title: "Automated Parent Progress Reports",
      desc: "Parents receive regular SMS updates for attendance and bi-weekly test marks, accompanied by 4-weekly PTM sessions.",
      icon: Bell
    },
    {
      title: "Comprehensive Study Modules",
      desc: "Structured workbooks covering basic concepts, advanced numericals, NCERT line-by-line drills, and 20-Year PYQ archives.",
      icon: FileText
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold text-[#0F2038] uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            THE APEX ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Serious Aspirants & Parents Choose Us
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We avoid generic promises and flashy slogans. Here are the concrete structural reasons behind our consistent selection rate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#8B1E26] text-white flex items-center justify-center shadow-xs">
                  <Icon className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <h3 className="font-extrabold text-base text-slate-900 tracking-tight">
                  {pt.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
