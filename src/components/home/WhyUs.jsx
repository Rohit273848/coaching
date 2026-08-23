import React from 'react';
import { Award, Users, HelpCircle, BookOpen, CheckCircle2, ShieldCheck } from 'lucide-react';
import { features } from '../../config/features';

export default function WhyUs() {
  if (!features.whyUs) return null;

  const pillars = [
    {
      title: "Expert Faculty",
      marathiTitle: "अनुभवी शिक्षक",
      desc: "अनुभवी शिक्षकांकडून शिका, जे अवघड संकल्पना सोप्या पद्धतीने समजावून सांगतात आणि योग्य मार्गदर्शन करतात.",
      englishDesc: "Learn from senior educators with 10+ years experience who make tough Quant, Reasoning, and Banking concepts simple.",
      icon: Award,
      color: "bg-blue-50 text-[#1E4FA8] border-blue-200"
    },
    {
      title: "Personalized Learning",
      marathiTitle: "वैयक्तिक लक्ष",
      desc: "प्रत्येक विद्यार्थ्याच्या शिकण्याच्या गरजेनुसार वैयक्तिक अभ्यास योजना आणि विशेष लक्ष दिले जाते.",
      englishDesc: "Customized study schedules, limited batch sizes, and 1-on-1 performance tracking for every aspirant.",
      icon: Users,
      color: "bg-amber-50 text-[#F8941F] border-amber-200"
    },
    {
      title: "Doubt Support",
      marathiTitle: "शंका निरसन",
      desc: "तुमच्या सर्व शंका दूर करण्यासाठी दररोज विशेष डाउट सेशन्स आणि वैयक्तिक मार्गदर्शन.",
      englishDesc: "Daily 1-on-1 doubt clearing desks with subject masters to ensure zero confusion before exam day.",
      icon: HelpCircle,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      title: "Free Library & Lab",
      marathiTitle: "मोफत लायब्ररी व लॅब",
      desc: "अभ्यास आणि सरावासाठी विद्यार्थ्यांना शांत वातावरणातील मोफत लॅब व अभ्यासिका सुविधा.",
      englishDesc: "Peaceful air-conditioned reading hall and dedicated CBT computer lab for full-length mock practice.",
      icon: BookOpen,
      color: "bg-purple-50 text-purple-600 border-purple-200"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F8F9FC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <span className="text-[11px] sm:text-xs font-black text-[#1E4FA8] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
            WHY CHOOSE US
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1D2B53] tracking-tight">
            Why Choose Saarthi Education ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            सार्थी एज्युकेशनमध्ये आम्ही अनुभवी शिक्षकांचे मार्गदर्शन, वैयक्तिक लक्ष आणि विद्यार्थ्यांना केंद्रस्थानी ठेवून शिक्षण देतो, ज्यामुळे प्रत्येक विद्यार्थी आत्मविश्वासाने आपले सरकारी नोकरीचे ध्येय पूर्ण करू शकतो.
          </p>
        </div>

        {/* 4 Cards Grid matching saarthiedu.online */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-saarthi hover:shadow-saarthi-lg transition-all flex flex-col justify-between space-y-4 group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${p.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-black text-lg text-[#1D2B53] group-hover:text-[#1E4FA8] transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-xs font-bold text-[#F8941F] block">
                      {p.marathiTitle}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-normal">
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
