import React from 'react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../../config/gallery';
import { features } from '../../config/features';
import { ArrowRight } from 'lucide-react';
import { institute } from '../../config/institute';

export default function StudentLifeGallery() {
  if (!features.gallery) return null;

  const mainItem = galleryItems[0] || {
    title: "Air-Conditioned Smart Classroom",
    category: "CLASSROOM",
    image: institute.images.classroomImage,
    caption: "Spacious, acoustic-treated classroom with digital interactive whiteboards."
  };
  const sideItem1 = galleryItems[1] || {
    title: "Daily Doubt Resolution Desk",
    category: "DOUBT DESK",
    image: institute.images.doubtSolvingImage,
    caption: "Dedicated 1-on-1 doubt clearing counters active daily."
  };
  const sideItem2 = galleryItems[2] || {
    title: "Computer Based Test (CBT) Lab",
    category: "CBT LAB",
    image: institute.images.heroImage,
    caption: "Computer lab simulating exact NTA JEE & NEET online test interface."
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-3 sm:gap-4 text-left">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[10px] sm:text-xs font-black text-[#0F4C81] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
              CAMPUS & INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B192C] tracking-tight">
              Life Inside PERL Education
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Air-conditioned smart classrooms, 1-on-1 daily doubt desks, digital interactive boards, and CBT mock test facilities at Shrinath Complex.
            </p>
          </div>

          <Link
            to="/student-life"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-black text-[#0F4C81] hover:text-[#0A3357] bg-blue-50/80 sm:bg-transparent px-4 py-2.5 sm:p-0 rounded-xl group shrink-0 min-h-[44px] w-full sm:w-auto"
          >
            <span>View Full Campus Life</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#F59E0B]" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-6">
          
          {/* Main Large Item */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm group aspect-16/10 sm:aspect-16/9 lg:aspect-auto lg:h-[380px] bg-slate-900">
            <img
              src={mainItem.image}
              alt={mainItem.title}
              className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/25 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1">
              <span className="inline-block bg-[#0F4C81] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {mainItem.category}
              </span>
              <h3 className="text-base sm:text-xl font-black text-white leading-snug">
                {mainItem.title}
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed font-normal line-clamp-2">
                {mainItem.caption}
              </p>
            </div>
          </div>

          {/* Side Items Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm group">
              <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
                <img
                  src={sideItem1.image}
                  alt={sideItem1.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#0B192C]/90 text-[#F59E0B] text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                  {sideItem1.category}
                </span>
              </div>
              <div className="p-4 space-y-0.5">
                <h4 className="font-black text-xs sm:text-sm text-[#0B192C] truncate">
                  {sideItem1.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1 font-normal">
                  {sideItem1.caption}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm group">
              <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
                <img
                  src={sideItem2.image}
                  alt={sideItem2.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#0B192C]/90 text-[#F59E0B] text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                  {sideItem2.category}
                </span>
              </div>
              <div className="p-4 space-y-0.5">
                <h4 className="font-black text-xs sm:text-sm text-[#0B192C] truncate">
                  {sideItem2.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1 font-normal">
                  {sideItem2.caption}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
