import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { institute } from '../../config/institute';
import { courses } from '../../config/courses';
import { getNavLinks } from '../../config/navigation';

export default function Footer({ onOpenEnquiry }) {
  const navLinks = getNavLinks();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#111822] text-slate-300 pt-12 sm:pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Advisory Strip */}
        <div className="bg-[#1D2B53] rounded-2xl p-6 sm:p-8 mb-12 border border-[#283C6E] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-[#F8B81F] text-xs font-black uppercase tracking-wider">STAY CONNECTED</span>
            <h3 className="text-xl sm:text-2xl font-black text-white">Subscribe to Exam Notifications & Batch Alerts</h3>
            <p className="text-xs sm:text-sm text-slate-300">Get IBPS, SBI, and MCAER exam updates directly in your inbox.</p>
          </div>

          <form onSubmit={handleNewsletter} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2.5 max-w-md">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:bg-white/20 min-h-[46px] w-full"
            />
            <button
              type="submit"
              className="bg-[#F8B81F] hover:bg-[#E5A40F] active:scale-95 text-[#1D2B53] font-black px-6 py-3 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shrink-0 min-h-[46px]"
            >
              {subscribed ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#1D2B53]" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-slate-800">
          
          {/* Column 1: Institute Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#1E4FA8] text-white flex items-center justify-center font-bold text-xl border border-blue-400/30 shadow-lg">
                <GraduationCap className="w-6 h-6 text-[#F8B81F]" />
              </div>
              <div>
                <span className="block font-black text-xl text-white tracking-tight">
                  {institute.name}
                </span>
                <span className="block text-[11px] font-bold text-[#F8B81F] uppercase tracking-wider">
                  {institute.marathiName} • Chhatrapati Sambhajinagar
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-2">
              Empowering students with quality education and smart learning solutions. Dedicated classroom & online coaching for Banking and MCAER exams since {institute.establishedYear}.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F8B81F] shrink-0 mt-0.5" />
                <span>{institute.location.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${institute.contact.phonePrimary}`} className="hover:text-white font-bold">
                  {institute.contact.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${institute.contact.email}`} className="hover:text-white">
                  {institute.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{institute.contact.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide border-l-2 border-[#1E4FA8] pl-2.5">
              Target Batches
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link 
                    to={`/programs/${course.id}`} 
                    className="hover:text-white transition-colors block py-1 text-slate-400"
                  >
                    {course.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide border-l-2 border-[#1E4FA8] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="hover:text-white transition-colors block py-1 text-slate-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Admissions & Action */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide border-l-2 border-[#1E4FA8] pl-2.5">
              Enquiry Desk
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              New Banking & MCAER batches starting 1 September 2026.
            </p>
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Footer Admissions Desk')}
              className="w-full bg-[#1E4FA8] hover:bg-[#163E85] active:scale-[0.98] text-white font-extrabold text-xs py-3 rounded-xl shadow transition-colors flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>Enquiry Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F8B81F]" />
            </button>
            <a
              href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold text-xs py-2.5 rounded-xl text-center block transition-colors border border-emerald-500/30 min-h-[44px] flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {institute.name} (सारथी एज्युकेशन). All rights reserved.</p>
          <p className="text-slate-500 text-center sm:text-right">
            Banking • MCAER • AFO • Competitive Exams Coaching
          </p>
        </div>
      </div>
    </footer>
  );
}
