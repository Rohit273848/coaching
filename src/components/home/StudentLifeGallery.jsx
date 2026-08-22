import React from 'react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../../config/gallery';
import { features } from '../../config/features';
import { ArrowRight } from 'lucide-react';

export default function StudentLifeGallery() {
  if (!features.gallery) return null;

  const mainItem = galleryItems[0];
  const sideItem1 = galleryItems[1];
  const sideItem2 = galleryItems[2];
  const bottomItem = galleryItems[3] || galleryItems[0];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F8F7F4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[10px] sm:text-xs font-extrabold text-[#0F2038] uppercase tracking-widest bg-stone-200/80 px-3 py-1 rounded-full inline-block">
              CAMPUS & CLASSROOM LIFE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2038] tracking-tight">
              Life Inside Apex Momentum Academy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Acoustic smart classrooms, 1-on-1 doubt counters, CBT mock exam lab, and felicitation ceremonies.
            </p>
          </div>

          <Link
            to="/student-life"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#8B1E26] hover:text-[#6D171E] group shrink-0 min-h-[44px] items-center"
          >
            <span>Complete Photo Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile-First Editorial Mosaic Gallery */}
        <div className="space-y-4">
          
          {/* Top Featured Large Image */}
          <div className="relative rounded-2xl overflow-hidden border border-stone-300/80 shadow-md group aspect-16/10 sm:aspect-16/9 lg:aspect-auto lg:h-[380px] bg-slate-900">
            <img
              src={mainItem.image}
              alt={mainItem.title}
              className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2038]/90 via-[#0F2038]/20 to-transparent" />
            
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1">
              <span className="inline-block bg-[#8B1E26] text-white text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                {mainItem.category}
              </span>
              <h3 className="text-base sm:text-xl font-extrabold text-white leading-snug">
                {mainItem.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed font-normal line-clamp-2">
                {mainItem.caption}
              </p>
            </div>
          </div>

          {/* 2-Column Side-by-Side Mobile Gallery Row */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            
            {/* Image 2 */}
            {sideItem1 && (
              <div className="bg-white rounded-xl border border-stone-300/80 overflow-hidden shadow-xs group">
                <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
                  <img
                    src={sideItem1.image}
                    alt={sideItem1.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-[#0F2038]/85 text-[#D4AF37] text-[8px] sm:text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase">
                    {sideItem1.category}
                  </span>
                </div>
                <div className="p-2.5 sm:p-3.5 space-y-0.5">
                  <h4 className="font-extrabold text-[11px] sm:text-xs text-[#0F2038] truncate">
                    {sideItem1.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1 font-normal">
                    {sideItem1.caption}
                  </p>
                </div>
              </div>
            )}

            {/* Image 3 */}
            {sideItem2 && (
              <div className="bg-white rounded-xl border border-stone-300/80 overflow-hidden shadow-xs group">
                <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
                  <img
                    src={sideItem2.image}
                    alt={sideItem2.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-[#0F2038]/85 text-[#D4AF37] text-[8px] sm:text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase">
                    {sideItem2.category}
                  </span>
                </div>
                <div className="p-2.5 sm:p-3.5 space-y-0.5">
                  <h4 className="font-extrabold text-[11px] sm:text-xs text-[#0F2038] truncate">
                    {sideItem2.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1 font-normal">
                    {sideItem2.caption}
                  </p>
                </div>
              </div>
            )}

            {/* Image 4 (Hidden on smallest, visible on sm+) */}
            {bottomItem && (
              <div className="hidden lg:block bg-white rounded-xl border border-stone-300/80 overflow-hidden shadow-xs group">
                <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
                  <img
                    src={bottomItem.image}
                    alt={bottomItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-[#0F2038]/85 text-[#D4AF37] text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase">
                    {bottomItem.category}
                  </span>
                </div>
                <div className="p-3.5 space-y-0.5">
                  <h4 className="font-extrabold text-xs text-[#0F2038] truncate">
                    {bottomItem.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1 font-normal">
                    {bottomItem.caption}
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
