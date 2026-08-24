import React, { useState } from 'react';
import { galleryItems, galleryCategories } from '../config/gallery';
import { Star } from 'lucide-react';

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState('ALL');

  const filteredItems = selectedCat === 'ALL'
    ? galleryItems
    : galleryItems.filter(g => g.category === selectedCat);

  return (
    <div className="py-6 sm:py-12 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-2.5 border border-slate-800">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-[#F59E0B] px-3.5 py-1.5 rounded-full border border-amber-500/30 text-[11px] sm:text-xs font-black uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
            <span>CAMPUS LIFE & INFRASTRUCTURE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Academic Environment & Facilities
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl font-normal">
            Take a look inside our New Usmanpura center in Chhatrapati Sambhajinagar — air-conditioned smart classrooms, interactive digital boards, daily doubt resolution counters, and CBT exam lab.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1 sm:pb-0">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shrink-0 transition-all min-h-[40px] cursor-pointer ${
                selectedCat === cat
                  ? 'bg-[#0F4C81] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group hover:-translate-y-1">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#0B192C]/90 backdrop-blur-xs text-[#F59E0B] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                  {item.category}
                </span>
              </div>
              <div className="p-5 space-y-1">
                <h3 className="font-black text-sm sm:text-base text-[#0B192C] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
