import React, { useEffect } from 'react';
import { X, GraduationCap } from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import { institute } from '../../config/institute';

export default function EnquiryModal({ isOpen, onClose, defaultCourse = '' }) {
  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose && onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative bg-white w-full max-w-lg rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden border border-stone-200 max-h-[94vh] flex flex-col animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Always-Visible Close Button */}
        <div className="sticky top-0 z-30 bg-[#0F2038] text-white p-4 sm:p-5 border-b border-slate-800 shrink-0">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-white/10 text-[#D4AF37] flex items-center justify-center font-bold shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-extrabold text-[#D4AF37] uppercase tracking-wider">
                  Admissions & Counselling
                </span>
                <h3 className="text-base sm:text-lg font-extrabold tracking-tight truncate text-white">
                  {institute.name}
                </h3>
              </div>
            </div>

            {/* High-Contrast Prominent Close Button (Min 44px) */}
            <button
              onClick={onClose}
              className="bg-white/15 hover:bg-white/25 active:bg-white/30 text-white font-bold px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 text-xs shrink-0 border border-white/20 min-h-[44px] cursor-pointer"
              aria-label="Close enquiry modal"
            >
              <X className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-extrabold">Close</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-300 mt-2 font-normal">
            Speak directly with senior academic mentors regarding batch timing & scholarships.
          </p>
        </div>

        {/* Modal Body Form */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 pb-safe">
          <EnquiryForm 
            defaultSource={defaultCourse ? `Course: ${defaultCourse}` : 'Modal Popup'} 
            onSuccessClose={onClose}
          />

          {/* Bottom Secondary Close Button for mobile ease */}
          <div className="pt-4 mt-4 border-t border-stone-100 text-center">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto text-xs font-bold text-slate-500 hover:text-slate-800 bg-stone-100 hover:bg-stone-200 py-2.5 px-6 rounded-xl transition-colors min-h-[44px]"
            >
              ✕ Cancel & Return to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
