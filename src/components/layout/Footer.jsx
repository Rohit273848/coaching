import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle, Send, CheckCircle2, Star } from 'lucide-react';
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
    <footer className="bg-[#0B192C] text-slate-300 pt-10 sm:pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">

        {/* Top Newsletter & Advisory Strip */}
        <div className="bg-[#0F4C81] rounded-3xl p-4.5 sm:p-8 mb-8 sm:mb-12 border border-blue-400/20 shadow-2xl flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1 text-left">
            <span className="text-[#F59E0B] text-[10px] sm:text-xs font-black uppercase tracking-wider flex items-center justify-start gap-1">
              <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
              EXCELLENCE IN SCIENCE & COMPETITIVE COACHING
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white">Subscribe to IIT-JEE, NEET & Board Exam Alerts</h3>
            <p className="text-xs sm:text-sm text-blue-100">Get batch updates, test schedules, and preparation tips directly in your inbox.</p>
          </div>

          <form onSubmit={handleNewsletter} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2.5 max-w-md">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-xs sm:text-sm text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 min-h-[46px] w-full"
            />
            <button
              type="submit"
              className="bg-[#F59E0B] hover:bg-[#D97706] active:scale-95 text-[#0B192C] font-black px-6 py-3 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shrink-0 min-h-[46px] cursor-pointer"
            >
              {subscribed ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#0B192C]" />
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
          <div className="lg:col-span-2 space-y-4 text-left">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="PERL Education Logo"
                className="w-12 h-12 rounded-full object-contain shrink-0 drop-shadow-md bg-white/5 p-0.5 border border-white/20 group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="block font-black text-xl text-white tracking-tight">
                  {institute.name}
                </span>
                <span className="block text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider">
                  Chhatrapati Sambhajinagar (Aurangabad)
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-2">
              Premier Coaching Institute in Aurangabad for IIT-JEE (Mains & Adv), NEET (UG), School Foundation (Class 8–10), and Junior College PCMB. Known for small batch sizes, digital smart classrooms, and personal mentoring.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>{institute.location.fullAddress}</span>
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
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide border-l-2 border-[#0F4C81] pl-2.5">
              Academic Courses
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
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide border-l-2 border-[#0F4C81] pl-2.5">
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
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide border-l-2 border-[#0F4C81] pl-2.5">
              Admissions Desk
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book a Free Demo Class for JEE, NEET or Foundation batches.
            </p>
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Footer Book Free Demo')}
              className="w-full bg-[#0F4C81] hover:bg-[#0A3357] active:scale-[0.98] text-white font-extrabold text-xs py-3 rounded-xl shadow transition-colors flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
            </button>
            <a
              href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold text-xs py-2.5 rounded-xl text-center block transition-colors border border-emerald-500/30 min-h-[44px] flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91 88620 15626</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {institute.name}. All rights reserved.</p>
          <p className="text-slate-500 text-center sm:text-right">
            IIT-JEE • NEET • Foundation (Class 8–10) • Junior College PCMB
          </p>
        </div>
      </div>
    </footer>
  );
}
