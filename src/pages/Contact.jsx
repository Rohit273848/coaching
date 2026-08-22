import React from 'react';
import EnquiryForm from '../components/enquiry/EnquiryForm';
import { institute } from '../config/institute';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-12 bg-[#FBFBFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="bg-[#0F2038] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-3 border border-slate-800">
          <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            CONNECT WITH ACADEMIC COUNSELORS
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact & Admission Enquiry
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            Visit our Samarth Nagar center, call our admissions desk, or submit the enquiry form below to book a free 1-on-1 counseling session with senior faculty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${institute.contact.phonePrimary}`}
                className="bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-xl font-extrabold text-xs text-center shadow transition-all flex flex-col items-center gap-1.5"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>Call Admissions</span>
                <span className="text-[10px] text-slate-400 font-normal">{institute.contact.phonePrimary}</span>
              </a>

              <a
                href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-800 text-white p-4 rounded-xl font-extrabold text-xs text-center shadow transition-all flex flex-col items-center gap-1.5"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>WhatsApp Chat</span>
                <span className="text-[10px] text-emerald-200 font-normal">Instant Reply</span>
              </a>
            </div>

            {/* Address & Office Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <h2 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3">
                Center Location & Hours
              </h2>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8B1E26] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-sm">{institute.name} Center</strong>
                    <p>{institute.location.address}</p>
                    <p>{institute.location.landmark}</p>
                    <p>{institute.location.city}, {institute.location.state} - {institute.location.pincode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Office Working Hours</strong>
                    <p>{institute.contact.officeHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Official Email</strong>
                    <p>{institute.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Container */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900">Interactive Location Map</span>
                <a
                  href={institute.location.mapDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#8B1E26] hover:underline flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>

              <div className="aspect-16/9 w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="Institute Location Map"
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
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xl space-y-6">
              <div className="border-b border-slate-100 pb-4 space-y-1">
                <span className="text-xs font-extrabold text-[#8B1E26] uppercase tracking-wider">
                  ADMISSION COUNSELLING FORM
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Request a Free Counselling Session
                </h2>
                <p className="text-xs text-slate-500">
                  Fill in your details. Our academic head will contact you within 2 hours with batch details.
                </p>
              </div>

              <EnquiryForm defaultSource="Contact Page Form" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
