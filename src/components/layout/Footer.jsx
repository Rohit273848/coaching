import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import { institute } from '../../config/institute';
import { courses } from '../../config/courses';
import { getNavLinks } from '../../config/navigation';

export default function Footer({ onOpenEnquiry }) {
  const navLinks = getNavLinks();

  return (
    <footer className="bg-[#0B1526] text-slate-300 pt-10 sm:pt-14 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-slate-800">
          
          {/* Column 1: Institute Identity */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F2038] text-white flex items-center justify-center font-bold text-xl border border-slate-700">
                <GraduationCap className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="block font-bold text-lg sm:text-xl text-white tracking-tight">
                  {institute.name}
                </span>
                <span className="block text-[10px] sm:text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  Established {institute.establishedYear} • Chhatrapati Sambhajinagar
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-2">
              {institute.subTagline}
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{institute.location.address}, {institute.location.city}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${institute.contact.phonePrimary}`} className="hover:text-white font-semibold">
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

          {/* Column 2: Programs */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide border-l-2 border-[#8B1E26] pl-2.5">
              Academic Programs
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
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide border-l-2 border-[#8B1E26] pl-2.5">
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
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide border-l-2 border-[#8B1E26] pl-2.5">
              Admissions Desk
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Admissions open for JEE Main/Advanced, NEET-UG and CET batches.
            </p>
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Footer Admissions Desk')}
              className="w-full bg-[#8B1E26] hover:bg-[#6D171E] active:scale-[0.98] text-white font-bold text-xs py-3 rounded-xl shadow transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
            >
              <span>Book Free Counselling</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={institute.location.mapEmbedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs py-2.5 rounded-xl text-center block transition-colors border border-slate-700 min-h-[44px] flex items-center justify-center"
            >
              Locate Samarth Nagar Center
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {institute.name}. All rights reserved.</p>
          <p className="text-slate-500 text-center sm:text-right">
            JEE • NEET • CET • Foundation Coaching
          </p>
        </div>
      </div>
    </footer>
  );
}
