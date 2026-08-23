import React, { useEffect } from 'react';
import { X, GraduationCap, Sparkles } from 'lucide-react';
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
        className="relative bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[94vh] flex flex-col animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-30 bg-[#1D2B53] text-white p-4 sm:p-5 border-b border-[#283C6E] shrink-0">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#1E4FA8] text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                <GraduationCap className="w-5 h-5 text-[#F8B81F]" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-black text-[#F8B81F] uppercase tracking-wider">
                  Admissions & Counselling
                </span>
                <h3 className="text-base sm:text-lg font-black tracking-tight truncate text-white">
                  {institute.name} ({institute.marathiName})
                </h3>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="bg-white/15 hover:bg-white/25 active:bg-white/30 text-white font-bold px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 text-xs shrink-0 border border-white/20 min-h-[44px] cursor-pointer"
              aria-label="Close enquiry modal"
            >
              <X className="w-4 h-4 text-[#F8B81F]" />
              <span className="font-bold">Close</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-300 mt-2 font-normal">
            Speak directly with senior academic mentors regarding Banking & MCAER batch timings.
          </p>
        </div>

        {/* Modal Body Form */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 pb-safe">
          <EnquiryForm 
            defaultSource={defaultCourse ? `Course: ${defaultCourse}` : 'Modal Popup'} 
            defaultCourse={defaultCourse}
            onSuccessClose={onClose}
          />

          {/* Bottom Secondary Close Button */}
          <div className="pt-4 mt-4 border-t border-slate-100 text-center">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 py-2.5 px-6 rounded-xl transition-colors min-h-[44px] cursor-pointer"
            >
              ✕ Cancel & Return to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
