import React from 'react';
import { institute } from '../config/institute';
import { Award, GraduationCap, ShieldCheck, Target, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12 bg-[#FBFBFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero */}
        <div className="bg-[#0F2038] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-3 border border-slate-800">
          <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            OUR ACADEMIC LEGACY
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About {institute.name}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            Established in {institute.establishedYear}, {institute.name} was founded with a singular mission: to provide honest, rigorous, and result-oriented competitive coaching to students in {institute.location.city}.
          </p>
        </div>

        {/* Story & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-extrabold text-[#8B1E26] uppercase tracking-wider">
              FOUNDER'S VISION
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Bridging Conceptual Clarity with Exam Temperament
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We started with just 25 students in Samarth Nagar. Over the past 15 years, our commitment to small batch sizes (35 max) and daily doubt resolution has produced over 1,450+ selections in IITs, NITs, AIIMS, and top government engineering & medical colleges across Maharashtra and India.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We believe every student has potential if provided with structured guidance, error elimination feedback after every mock test, and accessible faculty mentors.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>15+ Years Track Record</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Commercial Distractions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Dedicated Faculty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Transparent Parent Updates</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4 text-center">
              <img
                src={institute.images.directorImage}
                alt="Director"
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-[#0F2038] shadow"
              />
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">
                  Er. Rajesh V. Sharma
                </h3>
                <p className="text-xs font-bold text-[#8B1E26]">
                  Founder & Senior Managing Director (B.Tech, IIT Bombay)
                </p>
              </div>
              <p className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-lg border border-slate-100">
                "Our promise to parents is simple — we treat every student's preparation with the seriousness and discipline it deserves."
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <Target className="w-7 h-7 text-[#8B1E26]" />
            <h3 className="font-extrabold text-base text-slate-900">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To democratize access to top-tier IITian and Doctor guidance in regional Maharashtra through disciplined classroom environments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <Award className="w-7 h-7 text-[#D4AF37]" />
            <h3 className="font-extrabold text-base text-slate-900">Our Core Value</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Academic integrity. We publish 100% verified ranker names, photographs, and college selection records without artificial marketing claims.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <HeartHandshake className="w-7 h-7 text-emerald-600" />
            <h3 className="font-extrabold text-base text-slate-900">Parent Partnership</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We maintain open doors for parents, offering regular diagnostic scorecards, counseling support, and monthly progress reviews.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
