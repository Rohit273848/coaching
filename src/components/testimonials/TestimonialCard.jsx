import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function TestimonialCard({ item }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full space-y-4">
      <div className="space-y-3">
        {/* Rating Stars & Highlight Pill */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          {item.highlight && (
            <span className="bg-red-50 text-[#8B1E26] text-[10px] font-bold px-2 py-0.5 rounded border border-red-100 uppercase tracking-wider">
              {item.highlight}
            </span>
          )}
        </div>

        {/* Testimonial Quote */}
        <div className="relative text-sm text-slate-700 leading-relaxed italic">
          <Quote className="w-6 h-6 text-slate-200 absolute -top-2 -left-2 -z-10" />
          "{item.content}"
        </div>
      </div>

      {/* Author Details */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <img
          src={item.photo}
          alt={item.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-slate-200 shadow-xs"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold text-sm text-slate-900 leading-tight">
            {item.name}
          </h4>
          <p className="text-xs font-semibold text-[#8B1E26]">
            {item.role}
          </p>
          <p className="text-[11px] text-slate-500">
            {item.course}
          </p>
        </div>
      </div>
    </div>
  );
}
