import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import { institute } from '../../config/institute';

export default function EnquiryModal({ isOpen, onClose, defaultCourse = '' }) {
  const scrollContainerRef = useRef(null);

  // Lock body scroll with scroll position preservation and listen for Escape key
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape' && onClose) {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      // Reset scroll position of the form container to top on open
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-sm flex flex-col justify-end sm:justify-center sm:items-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      {/* Modal Container: Viewport-aware Sheet on Mobile, Centered Dialog on Desktop */}
      <div 
        className="relative bg-white w-full max-w-lg rounded-t-[28px] sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 h-[90dvh] max-h-[90dvh] sm:h-auto sm:max-h-[88vh] flex flex-col animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Sticky Header — ALWAYS Visible with Close Button */}
        <div className="sticky top-0 z-30 bg-[#0B192C] text-white px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-800 shrink-0 shadow-md">
          {/* Mobile Sheet Pill Handle */}
          <div className="w-10 h-1 bg-white/25 rounded-full mx-auto mb-2 sm:hidden" />

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
                <h3 id="enquiry-modal-title" className="text-sm sm:text-base font-black tracking-tight truncate text-white">
                  {institute.name}
                </h3>
              </div>
            </div>

            {/* Always Visible, Easy-to-Tap Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="bg-white/15 hover:bg-white/25 active:bg-white/30 text-white font-bold px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 text-xs shrink-0 border border-white/25 min-h-[42px] cursor-pointer"
              aria-label="Close free demo form"
            >
              <X className="w-4 h-4 text-[#F59E0B]" />
              <span className="font-bold">Close</span>
            </button>
          </div>

          <p className="text-[10.5px] sm:text-[11px] text-slate-300 mt-1.5 font-normal truncate">
            1st Floor, Shrinath Complex, New Usmanpura, Aurangabad • +91 88620 15626
          </p>
        </div>

        {/* Scrollable Form Body — Natural Touch Scrolling */}
        <div 
          ref={scrollContainerRef}
          className="p-4 sm:p-6 overflow-y-auto flex-1 overscroll-contain pb-[max(28px,env(safe-area-inset-bottom,28px))]"
        >
          <EnquiryForm 
            defaultSource={defaultCourse ? `Course: ${defaultCourse}` : 'Modal Popup'} 
            defaultCourse={defaultCourse}
            onSuccessClose={onClose}
          />

          {/* Bottom Secondary Cancel Button */}
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
