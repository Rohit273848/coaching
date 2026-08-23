import React from 'react';
import { institute } from '../config/institute';
import { Award, Target, HeartHandshake, CheckCircle2, ShieldCheck, BookOpen, Users, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="py-6 sm:py-12 bg-[#F8F9FC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Hero */}
        <div className="bg-[#1D2B53] text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-3 border border-[#283C6E]">
          <span className="text-[11px] sm:text-xs font-black text-[#F8B81F] uppercase tracking-widest bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700 inline-block">
            ABOUT SAARTHI EDUCATION
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Building Careers. Creating Success.
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl font-normal">
            सारथी एज्युकेशन ही स्पर्धा परीक्षांच्या तयारीसाठी विश्वासार्ह संस्था आहे. सरकारी नोकरीचे स्वप्न पाहणाऱ्या विद्यार्थ्यांना योग्य मार्गदर्शन आणि दर्जेदार शिक्षण देणे हे आमचे ध्येय आहे.
          </p>
        </div>

        {/* Story & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] sm:text-xs font-black text-[#1E4FA8] uppercase tracking-wider">
              OUR JOURNEY SINCE {institute.establishedYear}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1D2B53] tracking-tight leading-snug">
              छत्रपती संभाजीनगरमधील स्पर्धा परीक्षांचे अग्रगण्य केंद्र
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              2019 पासून, आम्ही गुणवत्तापूर्ण शिक्षण, अनुभवी शिक्षकांचे मार्गदर्शन आणि परीक्षाकेंद्रित प्रशिक्षण देत आहोत. प्रत्येक विद्यार्थ्याला योग्य दिशा, आत्मविश्वास आणि उत्तम तयारी मिळावी, जेणेकरून तो आपल्या स्वप्नातील सरकारी नोकरी मिळवू शकेल.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              "तुमचे यश हेच आमचे ध्येय" हीच आमची प्रेरणा आहे. बँकिंग (IBPS, SBI, RRB, RBI, AFO) आणि कृषी पदव्युत्तर परीक्षा (MCAER PG-CET) या क्षेत्रांत आजवर 1,000 पेक्षा जास्त विद्यार्थ्यांची यशस्वी निवड झाली आहे.
            </p>

            <div className="pt-2 grid grid-cols-1 xs:grid-cols-2 gap-3 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E4FA8] shrink-0" />
                <span>1,000+ यशस्वी निकाल</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E4FA8] shrink-0" />
                <span>मर्यादित बॅच साईझ व वैयक्तिक लक्ष</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E4FA8] shrink-0" />
                <span>100% अनुभवी शिक्षक मंडळ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E4FA8] shrink-0" />
                <span>मोफत अभ्यासिका व कॉम्प्युटर लॅब</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-saarthi space-y-4 text-center">
              <img
                src={institute.images.heroImage}
                alt="Saarthi Education Center"
                className="w-full h-48 sm:h-56 rounded-2xl object-cover border border-slate-200 shadow"
                loading="lazy"
              />
              <div>
                <h3 className="font-black text-lg text-[#1D2B53]">
                  {institute.name} ({institute.marathiName})
                </h3>
                <p className="text-xs font-bold text-[#1E4FA8]">
                  Paithan Gate, Chhatrapati Sambhajinagar
                </p>
              </div>
              <p className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-2xl border border-slate-100 font-normal">
                "विद्यार्थ्यांच्या यशातच आमचे समाधान आहे. आम्ही प्रत्येक विद्यार्थ्याला त्याच्या क्षमतेनुसार घडवतो."
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-saarthi space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1E4FA8] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base sm:text-lg text-[#1D2B53]">Our Mission (ध्येय)</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              ग्रामीण व शहरी भागातील विद्यार्थ्यांना बँकिंग आणि कृषी क्षेत्रातील स्पर्धा परीक्षांची दर्जेदार तयारी करून देऊन त्यांना आत्मनिर्भर बनवणे.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-saarthi space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F8941F] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base sm:text-lg text-[#1D2B53]">Quality & Integrity (गुणवत्ता)</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              खरे विद्यार्थी आणि खरे यश. प्रत्येक यशोगाथा ही विद्यार्थ्यांची मेहनत आणि शिक्षकांच्या प्रामाणिक प्रयत्नांचे फलित आहे.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-saarthi space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base sm:text-lg text-[#1D2B53]">Student Mentorship (मार्गदर्शन)</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              अभ्यासाबरोबरच विद्यार्थ्यांचा आत्मविश्वास वाढवणे, परीक्षा भीती दूर करणे आणि मुलाखतीसाठी वैयक्तिक मार्गदर्शन देणे.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
