import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, PhoneCall } from 'lucide-react';
import { institute } from '../../config/institute';

export default function EnquiryForm({ defaultSource = 'General Enquiry', onSuccessClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    targetClass: 'Class 11',
    targetExam: 'JEE (Main + Advanced)',
    preferredMode: 'Offline Classroom',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.mobile) return;
    
    setSubmitted(true);
    setTimeout(() => {
      if (onSuccessClose) {
        // Option to close modal after short delay
      }
    }, 4000);
  };

  const handleWhatsAppClick = () => {
    const text = `Hello ${institute.name}! I am submitting an enquiry:\nStudent: ${formData.studentName || 'Aspirant'}\nMobile: ${formData.mobile || 'N/A'}\nClass: ${formData.targetClass}\nExam: ${formData.targetExam}\nSource: ${defaultSource}`;
    window.open(`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4 animate-in fade-in">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-900">Counselling Request Received!</h3>
          <p className="text-sm text-slate-600">
            Thank you, <span className="font-semibold text-slate-900">{formData.studentName}</span>. Our academic counselor will call you on <span className="font-semibold text-slate-900">{formData.mobile}</span> within 2 hours.
          </p>
        </div>
        
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp Instantly</span>
          </button>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-slate-500 hover:text-slate-700 underline"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Student Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Arjun Patil"
            value={formData.studentName}
            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E26]/20 focus:border-[#8B1E26]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Parent Name
          </label>
          <input
            type="text"
            placeholder="e.g. Suresh Patil"
            value={formData.parentName}
            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E26]/20 focus:border-[#8B1E26]"
          />
        </div>
      </div>

      {/* Mobile & Target Class */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E26]/20 focus:border-[#8B1E26]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Current / Target Class
          </label>
          <select
            value={formData.targetClass}
            onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E26]/20 focus:border-[#8B1E26]"
          >
            <option value="Class 8">Class 8th</option>
            <option value="Class 9">Class 9th</option>
            <option value="Class 10">Class 10th</option>
            <option value="Class 11">Moving to Class 11th</option>
            <option value="Class 12">Moving to Class 12th</option>
            <option value="Class 12 Passed (Dropper)">Class 12th Passed (Dropper Batch)</option>
          </select>
        </div>
      </div>

      {/* Target Exam & Mode */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Target Exam
          </label>
          <select
            value={formData.targetExam}
            onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E26]/20 focus:border-[#8B1E26]"
          >
            <option value="JEE (Main + Advanced)">JEE (Main + Advanced)</option>
            <option value="NEET-UG Medical">NEET-UG Medical</option>
            <option value="MHT-CET State Exam">MHT-CET State Exam</option>
            <option value="Foundation (Olympiads / NTSE)">Foundation (Class 8-10)</option>
            <option value="CBSE / State Board Integrated">CBSE / State Board Integrated</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Preferred Batch Mode
          </label>
          <select
            value={formData.preferredMode}
            onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E26]/20 focus:border-[#8B1E26]"
          >
            <option value="Offline Classroom">Offline Classroom (Samarth Nagar)</option>
            <option value="Hybrid (Classroom + Online App)">Hybrid (Classroom + Online App)</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2 space-y-2">
        <button
          type="submit"
          className="w-full bg-[#8B1E26] hover:bg-[#6D171E] text-white font-bold py-3 px-4 rounded-lg shadow hover:shadow-md transition-all flex items-center justify-center gap-2 text-sm"
        >
          <Send className="w-4 h-4 text-[#D4AF37]" />
          <span>Book Free Academic Counselling Session</span>
        </button>

        <div className="text-center">
          <span className="text-xs text-slate-400 font-medium">OR</span>
        </div>

        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 text-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat Directly on WhatsApp</span>
        </button>
      </div>

      <p className="text-[11px] text-slate-400 text-center pt-1">
        🔒 Your phone number is strictly kept confidential for academic counselling only.
      </p>
    </form>
  );
}
