import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import { institute } from '../../config/institute';

export default function EnquiryModal({ isOpen, onClose, defaultCourse = '' }) {
  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape' && onClose) {
          onClose();
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
      className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Bottom-Sheet (Mobile) / Center Dialog (Desktop) */}
      <div 
        className="relative bg-white w-full max-w-lg rounded-t-[28px] sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 h-[88dvh] max-h-[88dvh] sm:h-auto sm:max-h-[88vh] flex flex-col animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header — Always Visible at Top */}
        <div className="sticky top-0 z-30 bg-[#0B192C] text-white px-4 py-3 sm:p-5 border-b border-slate-800 shrink-0 shadow-md">
          {/* Mobile Sheet Handle Bar */}
          <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-2.5 sm:hidden" />

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0 text-left">
              <img
                src="/logo.png"
                alt="PERL Education Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-contain shrink-0 drop-shadow-md bg-white/5 p-0.5 border border-white/20"
              />
              <div className="min-w-0">
                <span className="block text-[9.5px] sm:text-[10px] font-black text-[#F59E0B] uppercase tracking-wider">
                  Book a Free Demo Class
                </span>
                <h3 className="text-sm sm:text-base font-black tracking-tight truncate text-white">
                  {institute.name}
                </h3>
              </div>
            </div>

            {/* High-Contrast Prominent Close Button */}
            <button
              onClick={onClose}
              className="bg-white/15 hover:bg-white/25 active:bg-white/30 text-white font-bold px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 text-xs shrink-0 border border-white/20 min-h-[42px] cursor-pointer"
              aria-label="Close enquiry modal"
            >
              <X className="w-4 h-4 text-[#F59E0B]" />
              <span className="font-bold">Close</span>
            </button>
          </div>

          <p className="text-[10.5px] sm:text-[11px] text-slate-300 mt-1.5 font-normal truncate">
            1st Floor, Shrinath Complex, New Usmanpura, Aurangabad
          </p>
        </div>

        {/* Modal Scrollable Body Form */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 overscroll-contain pb-[max(24px,env(safe-area-inset-bottom,24px))]">
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
