import React, { useState } from 'react';
import { galleryItems, galleryCategories } from '../config/gallery';
import { Camera, Image } from 'lucide-react';

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState('ALL');

  const filteredItems = selectedCat === 'ALL'
    ? galleryItems
    : galleryItems.filter(g => g.category === selectedCat);

  return (
    <div className="py-12 bg-[#FBFBFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-[#0F2038] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-3 border border-slate-800">
          <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            CAMPUS LIFE & INFRASTRUCTURE
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Environment & Facilities
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            Take a look inside our Samarth Nagar center — smart classrooms, NTA-pattern CBT computer lab, 1-on-1 doubt counters, and annual ranker felicitation ceremonies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase transition-all ${
                selectedCat === cat
                  ? 'bg-[#8B1E26] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Editorial Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#0F2038]/90 backdrop-blur-xs text-[#D4AF37] text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                  {item.category}
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-extrabold text-sm text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
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
