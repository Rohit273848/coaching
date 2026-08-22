import React from 'react';
import { X, GraduationCap } from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import { institute } from '../../config/institute';

export default function EnquiryModal({ isOpen, onClose, defaultCourse = '' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F2038] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-white/10 text-[#D4AF37] flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                Admissions & Counselling
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                {institute.name}
              </h3>
            </div>
          </div>

          <p className="text-xs text-slate-300">
            Fill the form below to talk to senior academic mentors regarding batch timing, syllabus strategy & SAT scholarship.
          </p>
        </div>

        {/* Modal Body Form */}
        <div className="p-5 sm:p-6">
          <EnquiryForm 
            defaultSource={defaultCourse ? `Course: ${defaultCourse}` : 'Modal Popup'} 
            onSuccessClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}
