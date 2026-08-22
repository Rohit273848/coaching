import React from 'react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../../config/gallery';
import { features } from '../../config/features';
import { Camera, ArrowRight, Sparkles } from 'lucide-react';

export default function StudentLifeGallery() {
  if (!features.gallery) return null;

  const mainItem = galleryItems[0];
  const sideItems = galleryItems.slice(1, 4);

  return (
    <section className="py-16 lg:py-24 bg-[#F8F7F4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-extrabold text-[#0F2038] uppercase tracking-widest bg-stone-200/80 px-3 py-1 rounded-full">
              CAMPUS & CLASSROOM LIFE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2038] tracking-tight">
              Life Inside Apex Momentum Academy
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Take a look inside our Samarth Nagar center — smart classrooms, 1-on-1 doubt clearing counters, CBT mock exam lab, and felicitation events.
            </p>
          </div>

          <Link
            to="/student-life"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#8B1E26] hover:text-[#6D171E] group shrink-0"
          >
            <span>View Complete Photo Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Mosaic Gallery: 1 Large Image (7 cols) + 3 Stacked Images (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Large Featured Classroom Image (7 cols) */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-stone-300/80 shadow-md group min-h-[340px] sm:min-h-[440px] bg-slate-900">
            <img
              src={mainItem.image}
              alt={mainItem.title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2038]/90 via-[#0F2038]/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="inline-block bg-[#8B1E26] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded tracking-wider uppercase">
                {mainItem.category}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                {mainItem.title}
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                {mainItem.caption}
              </p>
            </div>
          </div>

          {/* 3 Secondary Stacked Media Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {sideItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-stone-300/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col lg:flex-row items-center group"
              >
                <div className="w-full lg:w-40 h-36 lg:h-full relative shrink-0 bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-[#0F2038]/85 text-[#D4AF37] text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase">
                    {item.category}
                  </span>
                </div>

                <div className="p-4 space-y-1">
                  <h4 className="font-extrabold text-xs sm:text-sm text-[#0F2038] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
