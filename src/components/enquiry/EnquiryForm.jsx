import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { institute } from '../../config/institute';

export default function EnquiryForm({ defaultSource = 'General Enquiry', defaultCourse = '', onSuccessClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    targetQualification: 'Graduate / Final Year',
    targetExam: defaultCourse || 'Banking (IBPS / SBI / RRB)',
    preferredMode: 'Offline Classroom (Paithan Gate)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.mobile) return;
    
    setSubmitted(true);
    setTimeout(() => {
      if (onSuccessClose) {
        onSuccessClose();
      }
    }, 4000);
  };

  const handleWhatsAppClick = () => {
    const text = `Hello ${institute.name}! I am submitting an admission enquiry:\nStudent: ${formData.studentName || 'Aspirant'}\nMobile: ${formData.mobile || 'N/A'}\nQualification: ${formData.targetQualification}\nTarget Exam: ${formData.targetExam}\nPreferred Mode: ${formData.preferredMode}\nSource: ${defaultSource}`;
    window.open(`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-in fade-in">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">Enquiry Received Successfully!</h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Thank you, <span className="font-bold text-slate-900">{formData.studentName}</span>. Our senior counselor from Saarthi Education will contact you at <span className="font-bold text-slate-900">{formData.mobile}</span> with complete batch timings and free demo lecture details.
          </p>
        </div>
        
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold px-6 py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 min-h-[46px]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp Instantly</span>
          </button>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-slate-500 hover:text-slate-700 underline py-2"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Student & Parent Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
            Student Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.studentName}
            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E4FA8]/20 focus:border-[#1E4FA8] min-h-[48px]"
          />
        </div>
        <div>
          <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
            Parent Name (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. Sanjay Sharma"
            value={formData.parentName}
            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E4FA8]/20 focus:border-[#1E4FA8] min-h-[48px]"
          />
        </div>
      </div>

      {/* Mobile & Target Qualification */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            inputMode="numeric"
            required
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E4FA8]/20 focus:border-[#1E4FA8] min-h-[48px]"
          />
        </div>

        <div>
          <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
            Current Qualification
          </label>
          <select
            value={formData.targetQualification}
            onChange={(e) => setFormData({ ...formData, targetQualification: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E4FA8]/20 focus:border-[#1E4FA8] min-h-[48px]"
          >
            <option value="Graduate / Final Year">Graduate / Final Year Student</option>
            <option value="B.Sc Agriculture / Allied">B.Sc (Agriculture) / Allied Degree</option>
            <option value="12th Pass">12th Standard Passed</option>
            <option value="Post Graduate">Post Graduate (M.Sc / MBA / M.Com)</option>
            <option value="Working Professional">Working Professional</option>
          </select>
        </div>
      </div>

      {/* Target Exam & Mode */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
            Target Exam
          </label>
          <select
            value={formData.targetExam}
            onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E4FA8]/20 focus:border-[#1E4FA8] min-h-[48px]"
          >
            <option value="Banking (IBPS / SBI / RRB / RBI)">Banking Comprehensive (IBPS / SBI / RRB / RBI)</option>
            <option value="MCAER (Agri PG-CET)">MCAER (Agri PG-CET 2026)</option>
            <option value="IBPS AFO (Agriculture Field Officer)">IBPS AFO (Agriculture Field Officer)</option>
            <option value="SSC CGL / CHSL & Railway">SSC CGL / CHSL & Railway RRB</option>
            <option value="Free Demo Lecture Request">Book Free Offline Demo Lecture</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
            Learning Mode
          </label>
          <select
            value={formData.preferredMode}
            onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E4FA8]/20 focus:border-[#1E4FA8] min-h-[48px]"
          >
            <option value="Offline Classroom (Paithan Gate)">Offline Classroom (Paithan Gate Center)</option>
            <option value="Online Live + App Recorded">Online Live + Mobile App</option>
            <option value="Hybrid (Classroom + App)">Hybrid (Classroom + App)</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2 space-y-2">
        <button
          type="submit"
          className="w-full bg-[#1E4FA8] hover:bg-[#163E85] active:scale-[0.98] text-white font-black py-4 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm min-h-[50px] cursor-pointer"
        >
          <Send className="w-4 h-4 text-[#F8B81F]" />
          <span>Book Free Counselling / Reserve Seat</span>
        </button>

        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-xs min-h-[44px] cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Instant WhatsApp Enquiry (+91 86949 47070)</span>
        </button>
      </div>

      <p className="text-[11px] text-slate-400 text-center pt-1">
        🔒 Your phone number is kept confidential for Saarthi Education counselling only.
      </p>
    </form>
  );
}
