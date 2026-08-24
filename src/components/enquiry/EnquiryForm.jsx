import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { institute } from '../../config/institute';

export default function EnquiryForm({ defaultSource = 'General Enquiry', defaultCourse = '', onSuccessClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    studentGrade: 'Class 11th Science',
    board: 'CBSE Board',
    targetExam: defaultCourse || 'IIT-JEE (Mains & Advanced)',
    preferredMode: 'Smart Classroom (New Usmanpura Center)',
    requestDemo: true,
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
    const text = `Hello ${institute.name}!\nI would like to book a Free Demo Class / Admission Enquiry:\n\n👤 Student: ${formData.studentName || 'Aspirant'}\n👨‍👩‍👦 Parent: ${formData.parentName || 'N/A'}\n📱 Mobile: ${formData.mobile || 'N/A'}\n📚 Grade: ${formData.studentGrade}\n🏫 Board: ${formData.board}\n🎯 Target Exam: ${formData.targetExam}\n📍 Mode: ${formData.preferredMode}\n📌 Source: ${defaultSource}`;
    window.open(`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 text-center space-y-4 animate-in fade-in">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">Demo Class & Enquiry Confirmed!</h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Thank you, <span className="font-bold text-slate-900">{formData.studentName}</span>. Our senior counselor from {institute.name} (New Usmanpura) will contact you at <span className="font-bold text-slate-900">{formData.mobile}</span> with the batch schedule and demo lecture invitation.
          </p>
        </div>
        
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold px-6 py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 min-h-[46px] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp Instantly</span>
          </button>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-slate-500 hover:text-slate-700 underline py-2 cursor-pointer"
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
            placeholder="e.g. Atharva Joshi"
            value={formData.studentName}
            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] min-h-[48px]"
          />
        </div>
        <div>
          <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
            Parent Name (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. Rajesh Joshi"
            value={formData.parentName}
            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] min-h-[48px]"
          />
        </div>
      </div>

      {/* Mobile & Grade */}
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
            placeholder="10-digit phone number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] min-h-[48px]"
          />
        </div>

        <div>
          <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
            Current Grade / Class
          </label>
          <select
            value={formData.studentGrade}
            onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] min-h-[48px]"
          >
            <option value="Class 8th (Foundation)">Class 8th (School Foundation)</option>
            <option value="Class 9th (Foundation)">Class 9th (School Foundation)</option>
            <option value="Class 10th (Board + Foundation)">Class 10th (Board + Foundation)</option>
            <option value="Class 11th Science">Class 11th Science (JEE / NEET)</option>
            <option value="Class 12th Science">Class 12th Science (JEE / NEET / Boards)</option>
            <option value="12th Pass / Dropper / Repeater">12th Pass / Dropper / Repeater</option>
          </select>
        </div>
      </div>

      {/* Target Exam & School Board */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
            Target Course / Exam
          </label>
          <select
            value={formData.targetExam}
            onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] min-h-[48px]"
          >
            <option value="IIT-JEE (Mains & Advanced)">IIT-JEE (Mains & Advanced)</option>
            <option value="NEET (UG Medical Entrance)">NEET (UG Medical Entrance)</option>
            <option value="Foundation (Classes 8th, 9th, 10th)">School Foundation (Classes 8, 9, 10)</option>
            <option value="Class 11th & 12th PCMB">Class 11th & 12th PCMB (Boards + Entrance)</option>
            <option value="Book Free Demo Class">Book Free Classroom Demo Session</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
            School / College Board
          </label>
          <select
            value={formData.board}
            onChange={(e) => setFormData({ ...formData, board: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] min-h-[48px]"
          >
            <option value="CBSE Board">CBSE Board</option>
            <option value="Maharashtra State Board (SSC / HSC)">Maharashtra State Board (SSC / HSC)</option>
            <option value="ICSE / ISC Board">ICSE / ISC Board</option>
            <option value="Other Board">Other State / International Board</option>
          </select>
        </div>
      </div>

      {/* Free Demo Checkbox Highlight */}
      <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-3.5 flex items-center gap-3">
        <input
          type="checkbox"
          id="requestDemoCheck"
          checked={formData.requestDemo}
          onChange={(e) => setFormData({ ...formData, requestDemo: e.target.checked })}
          className="w-5 h-5 text-[#0F4C81] rounded focus:ring-[#0F4C81] accent-[#0F4C81] cursor-pointer"
        />
        <label htmlFor="requestDemoCheck" className="text-xs font-bold text-[#0F4C81] cursor-pointer select-none">
          ✨ Reserve 1-Day Free Offline Demo Class at Shrinath Complex, New Usmanpura
        </label>
      </div>

      {/* Submit Buttons */}
      <div className="pt-2 space-y-2">
        <button
          type="submit"
          className="w-full bg-[#0F4C81] hover:bg-[#0A3357] active:scale-[0.98] text-white font-black py-4 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm min-h-[50px] cursor-pointer"
        >
          <Send className="w-4 h-4 text-[#F59E0B]" />
          <span>Book Free Demo Class / Reserve Seat</span>
        </button>

        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-xs min-h-[44px] cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Instant WhatsApp Enquiry (+91 88620 15626)</span>
        </button>
      </div>

      <p className="text-[11px] text-slate-400 text-center pt-1">
        🔒 Your phone number is kept confidential for PERL Education academic counselling only.
      </p>
    </form>
  );
}
