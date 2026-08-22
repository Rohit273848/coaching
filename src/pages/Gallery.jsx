import React, { useState } from 'react';
import { galleryItems, galleryCategories } from '../config/gallery';

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState('ALL');

  const filteredItems = selectedCat === 'ALL'
    ? galleryItems
    : galleryItems.filter(g => g.category === selectedCat);

  return (
    <div className="py-6 sm:py-12 bg-[#F8F7F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="bg-[#0F2038] text-white p-6 sm:p-10 rounded-2xl shadow-xl space-y-2.5 border border-slate-800">
          <span className="text-[10px] sm:text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700 inline-block">
            CAMPUS LIFE & INFRASTRUCTURE
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Environment & Facilities
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-normal">
            Take a look inside our Samarth Nagar center — smart classrooms, NTA-pattern CBT computer lab, 1-on-1 doubt counters, and annual ranker felicitation ceremonies.
          </p>
        </div>

        {/* Category Filters (Horizontal swipe on mobile) */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1 sm:pb-0">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider shrink-0 transition-all min-h-[38px] ${
                selectedCat === cat
                  ? 'bg-[#8B1E26] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all group">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#0F2038]/90 backdrop-blur-xs text-[#D4AF37] text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                  {item.category}
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-extrabold text-sm text-slate-900 leading-snug">
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
