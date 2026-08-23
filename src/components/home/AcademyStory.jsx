import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Award, ShieldCheck, Target, HeartHandshake } from 'lucide-react';
import { institute } from '../../config/institute';

export default function AcademyStory() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Image / Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-slate-100 shadow-xl bg-slate-900 aspect-16/10 sm:aspect-4/3 lg:aspect-auto lg:h-[480px]">
              <img
                src={institute.images.classroomImage || institute.images.heroImage}
                alt="Saarthi Education Chhatrapati Sambhajinagar"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2B53]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1">
                <div className="inline-flex items-center gap-1.5 bg-[#1E4FA8] text-white text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F8B81F]" />
                  <span>Paithan Gate Center</span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-white">
                  Driven To Succeed — 2019 पासून विश्वास
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-200">
                  Smart interactive classrooms, free silent library, and regular computer-based mock drills.
                </p>
              </div>
            </div>

            {/* Badge overlay */}
            <div className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-4 bg-white p-3 sm:p-5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1E4FA8] text-white flex items-center justify-center font-bold shadow-md">
                <span className="text-[#F8B81F] text-lg sm:text-2xl font-black">2019</span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 block tracking-wider">ESTABLISHED</span>
                <strong className="text-xs sm:text-sm font-black text-[#1D2B53] block">Years of Trust</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            <div className="space-y-2">
              <span className="text-[11px] sm:text-xs font-black text-[#1E4FA8] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
                ABOUT US
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-[#1D2B53] tracking-tight leading-tight">
                Building Careers. <br />
                <span className="text-[#1E4FA8]">Creating Success.</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              सारथी एज्युकेशन ही स्पर्धा परीक्षांच्या तयारीसाठी विश्वासार्ह संस्था आहे. सरकारी नोकरीचे स्वप्न पाहणाऱ्या विद्यार्थ्यांना योग्य मार्गदर्शन आणि दर्जेदार शिक्षण देणे हे आमचे ध्येय आहे.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              2019 पासून, आम्ही गुणवत्तापूर्ण शिक्षण, अनुभवी शिक्षकांचे मार्गदर्शन आणि परीक्षाकेंद्रित प्रशिक्षण देत आहोत. प्रत्येक विद्यार्थ्याला योग्य दिशा, आत्मविश्वास आणि उत्तम तयारी मिळावी, जेणेकरून तो आपल्या स्वप्नातील सरकारी नोकरी मिळवू शकेल. <strong className="text-[#1D2B53]">"तुमचे यश हेच आमचे ध्येय"</strong> हीच आमची प्रेरणा आहे.
            </p>

            {/* 3 Reference Feature Points */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                <CheckCircle2 className="w-5 h-5 text-[#1E4FA8] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#1D2B53]">अनुभवी शिक्षकांकडून उत्तम मार्गदर्शन (Expert Faculty Guidance)</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                <CheckCircle2 className="w-5 h-5 text-[#F8941F] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#1D2B53]">प्रत्येक विद्यार्थ्याकडे वैयक्तिक लक्ष (Personal Attention to Every Student)</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#1D2B53]">यशस्वी भविष्यासाठी दर्जेदार शिक्षण (Quality Education for a Successful Future)</span>
              </div>
            </div>

            {/* Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#1E4FA8] hover:bg-[#163E85] text-white font-black text-xs px-6 py-3.5 rounded-xl transition-all shadow-md min-h-[46px] cursor-pointer"
              >
                <span>Learn More About Saarthi</span>
                <ArrowRight className="w-4 h-4 text-[#F8B81F]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
