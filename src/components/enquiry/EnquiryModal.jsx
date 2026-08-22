import React, { useEffect } from 'react';
import { X, GraduationCap } from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import { institute } from '../../config/institute';

export default function EnquiryModal({ isOpen, onClose, defaultCourse = '' }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white w-full max-w-lg rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden border border-stone-200 max-h-[92vh] flex flex-col animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F2038] text-white p-4 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-white/10 active:scale-95 transition-all w-11 h-11 flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-1.5 pr-10">
            <div className="w-8 h-8 rounded-lg bg-white/10 text-[#D4AF37] flex items-center justify-center font-bold shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                Admissions & Counselling
              </span>
              <h3 className="text-base sm:text-lg font-extrabold tracking-tight truncate">
                {institute.name}
              </h3>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-300">
            Speak directly with senior academic mentors regarding batch timing & scholarships.
          </p>
        </div>

        {/* Modal Body Form */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          <EnquiryForm 
            defaultSource={defaultCourse ? `Course: ${defaultCourse}` : 'Modal Popup'} 
            onSuccessClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}
