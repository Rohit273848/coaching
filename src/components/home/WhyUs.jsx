import React from 'react';
import { Users, MonitorPlay, Laptop, HelpCircle } from 'lucide-react';
import { features } from '../../config/features';

export default function WhyUs() {
  if (!features.whyUs) return null;

  const pillars = [
    {
      title: "Small Batch Sizes",
      subtitle: "Personalized Care & 1-on-1 Mentoring",
      desc: "Strict limits on batch strength to ensure our educators closely monitor every student's academic progress and doubts.",
      englishDesc: "Strict batch size caps to guarantee personalized attention, continuous tracking, and direct teacher accessibility for every student.",
      icon: Users,
      color: "bg-blue-50 text-[#0F4C81] border-blue-200"
    },
    {
      title: "Modern Infrastructure",
      subtitle: "AC Digital Smart Classrooms",
      desc: "Fully air-conditioned classrooms equipped with state-of-the-art interactive digital smart boards for 3D visual learning.",
      englishDesc: "Air-conditioned smart classrooms equipped with interactive digital boards that make abstract scientific concepts crystal clear.",
      icon: MonitorPlay,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      title: "Hybrid / Tech Integration",
      subtitle: "Learning App & Online CBT Mocks",
      desc: "App-based daily quizzes, 24/7 recorded lecture access for anytime revision, and full-length NTA pattern computer-based tests.",
      englishDesc: "App-based daily quizzes, on-demand recorded lecture access for revision, and full-length online CBT mock testing.",
      icon: Laptop,
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      title: "Doubt Clearing & Practice",
      subtitle: "Daily Doubt Desks & High-Volume Q-Banks",
      desc: "Daily 1-on-1 doubt resolution desks immediately following lectures, supported by 10,000+ practice questions and solved past papers.",
      englishDesc: "Daily doubt-resolution desks with senior subject faculties and high-volume question banks to eliminate all doubts immediately.",
      icon: HelpCircle,
      color: "bg-amber-50 text-[#D97706] border-amber-200"
    }
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2 sm:space-y-3">
          <span className="text-[10px] sm:text-xs font-black text-[#0F4C81] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
            WHY PERL EDUCATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B192C] tracking-tight">
            The PERL Advantage for IIT-JEE & NEET
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            At PERL Education, we combine small batch sizes, digital smart classrooms, and daily 1-on-1 doubt desks to instill peak competitive confidence in every aspirant.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 sm:p-6 lg:p-7 border border-slate-200 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between space-y-3 sm:space-y-4 group hover:-translate-y-1 text-left"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border shadow-2xs ${p.color}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div>
                    <h3 className="font-black text-base sm:text-lg text-[#0B192C] group-hover:text-[#0F4C81] transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-bold text-[#D97706] block">
                      {p.subtitle}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-slate-100 text-[10.5px] sm:text-[11px] text-slate-500 font-normal">
                  {p.englishDesc}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
