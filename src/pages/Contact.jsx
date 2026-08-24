import React from 'react';
import EnquiryForm from '../components/enquiry/EnquiryForm';
import { institute } from '../config/institute';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Star } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-6 sm:py-12 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-2.5 border border-slate-800">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-[#F59E0B] px-3.5 py-1.5 rounded-full border border-amber-500/30 text-[11px] sm:text-xs font-black uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
            <span>ADMISSIONS & COUNSELLING CENTER • NEW USMANPURA</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Visit PERL Education or Connect with Us Today
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-normal">
            Visit our New Usmanpura center in Chhatrapati Sambhajinagar (Aurangabad), call our admissions desk, or submit the form below to book a Free Demo Class and 1-on-1 counseling session.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${institute.contact.phonePrimary}`}
                className="bg-[#0F4C81] hover:bg-[#0A3357] active:scale-[0.98] text-white p-4 rounded-2xl font-black text-xs text-center shadow transition-all flex flex-col items-center justify-center gap-1 min-h-[76px]"
                aria-label="Call Admissions"
              >
                <Phone className="w-5 h-5 text-[#F59E0B]" />
                <span>Call Desk</span>
                <span className="text-[10px] text-blue-200 font-normal">{institute.contact.phonePrimary}</span>
              </a>

              <a
                href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white p-4 rounded-2xl font-black text-xs text-center shadow transition-all flex flex-col items-center justify-center gap-1 min-h-[76px]"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>WhatsApp Chat</span>
                <span className="text-[10px] text-emerald-100 font-normal">Instant Reply</span>
              </a>
            </div>

            {/* Address & Office Hours Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="font-black text-base text-[#0B192C] border-b border-slate-100 pb-3 flex items-center justify-between">
                <span>Center Location & Contact Info</span>
                <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">4.8★ (370+ Reviews)</span>
              </h2>

              <div className="space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F4C81] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-sm">{institute.name}</strong>
                    <p className="mt-0.5 leading-relaxed">{institute.location.address}</p>
                    <p className="text-slate-500">{institute.location.landmark}</p>
                    <p className="font-semibold text-slate-900">{institute.location.city}, {institute.location.state} – {institute.location.pincode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Direct Phone Support</strong>
                    <p>{institute.contact.phonePrimary}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Official Admissions Email</strong>
                    <p>{institute.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Operating Schedule</strong>
                    <div className="mt-1 space-y-1 text-slate-600">
                      <p className="bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                        <strong>Mon, Wed – Sun:</strong> 8:00 AM – 10:00 PM
                      </p>
                      <p className="bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                        <strong>Tuesday:</strong> 8:30 AM – 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Container */}
            <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#0B192C]">New Usmanpura Center Map</span>
                <a
                  href={institute.location.mapDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#0F4C81] hover:underline flex items-center gap-1 min-h-[36px] items-center"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>

              <div className="aspect-16/9 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="PERL Education Location Map"
                  src={institute.location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 sm:space-y-6">
              <div className="border-b border-slate-100 pb-3 space-y-1">
                <span className="text-[10px] sm:text-[11px] font-black text-[#0F4C81] uppercase tracking-wider">
                  ADMISSIONS & COUNSELLING
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#0B192C]">
                  Book a Free Demo Class & Counselling Session
                </h2>
                <p className="text-xs text-slate-500">
                  Fill out this form to receive syllabus details, batch timings, and a confirmed seat for a free demo lecture.
                </p>
              </div>

              <EnquiryForm defaultSource="Contact Page Demo Request" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
