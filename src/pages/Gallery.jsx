import React, { useState } from 'react';
import { galleryItems, galleryCategories } from '../config/gallery';

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState('ALL');

  const filteredItems = selectedCat === 'ALL'
    ? galleryItems
    : galleryItems.filter(g => g.category === selectedCat);

  return (
    <div className="py-6 sm:py-12 bg-[#F8F9FC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="bg-[#1D2B53] text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-2.5 border border-[#283C6E]">
          <span className="text-[11px] sm:text-xs font-black text-[#F8B81F] uppercase tracking-widest bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700 inline-block">
            CAMPUS LIFE & INFRASTRUCTURE
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Academic Environment & Facilities
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl font-normal">
            Take a look inside our Paithan Gate center — smart interactive classrooms, silent study library, computer-based mock exam lab, and felicitation ceremonies.
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
                  ? 'bg-[#1E4FA8] text-white shadow-md'
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
            <div key={item.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-saarthi hover:shadow-saarthi-lg transition-all group hover:-translate-y-1">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#1D2B53]/90 backdrop-blur-xs text-[#F8B81F] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                  {item.category}
                </span>
              </div>
              <div className="p-5 space-y-1">
                <h3 className="font-black text-sm sm:text-base text-[#1D2B53] leading-snug">
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
