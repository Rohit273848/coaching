import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, GraduationCap, ArrowRight, ChevronRight, MessageCircle } from 'lucide-react';
import { institute } from '../../config/institute';
import { getNavLinks } from '../../config/navigation';

export default function Navbar({ onOpenEnquiry, topBarVisible, onMobileMenuToggle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navLinks = getNavLinks();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Lock body scroll and notify parent when mobile menu is toggled
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    if (onMobileMenuToggle) {
      onMobileMenuToggle(mobileMenuOpen);
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen, onMobileMenuToggle]);

  return (
    <>
      {/* ─── Floating Glass Navbar ─────────────────────────────────────────── */}
      <header
        className="fixed left-0 right-0 z-40"
        style={{ top: topBarVisible ? 32 : 10 }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div
            className="transition-all duration-300 ease-out"
            style={{
              background: scrolled
                ? 'rgba(255, 255, 255, 0.92)'
                : 'rgba(255, 255, 255, 0.78)',
              backdropFilter: `blur(${scrolled ? 20 : 14}px)`,
              WebkitBackdropFilter: `blur(${scrolled ? 20 : 14}px)`,
              border: scrolled
                ? '1px solid rgba(255, 255, 255, 0.60)'
                : '1px solid rgba(15, 32, 56, 0.08)',
              boxShadow: scrolled
                ? '0 8px 30px rgba(15, 23, 42, 0.10), 0 2px 6px rgba(15, 23, 42, 0.04)'
                : '0 4px 18px rgba(15, 23, 42, 0.06)',
              borderRadius: '14px',
            }}
          >
            <div className="flex items-center justify-between h-[56px] sm:h-[60px] px-3 sm:px-4 lg:px-5">

              {/* ── Brand / Logo ──────────────────────────────────────── */}
              <Link
                to="/"
                className="flex items-center gap-2.5 shrink-0 group min-h-[44px] items-center"
                aria-label="Apex Momentum Academy - Home"
              >
                {/* Icon Badge */}
                <div
                  className="w-9 h-9 rounded-[9px] flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#183256]"
                  style={{
                    background: '#0F2038',
                    boxShadow: '0 2px 6px rgba(15, 32, 56, 0.20)',
                  }}
                >
                  <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
                </div>

                {/* Name Block */}
                <div className="leading-tight">
                  <span
                    className="block font-extrabold text-[14px] sm:text-[15px] tracking-tight text-[#0F2038] truncate max-w-[170px] xs:max-w-[210px] sm:max-w-none"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {institute.name}
                  </span>
                  <span
                    className="block text-[9px] sm:text-[10px] font-bold tracking-[0.06em] uppercase"
                    style={{ color: '#8B1E26' }}
                  >
                    JEE • NEET • CET • Foundation
                  </span>
                </div>
              </Link>

              {/* ── Desktop Navigation ───────────────────────────────── */}
              <nav className="hidden xl:flex items-center" aria-label="Main navigation">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path ||
                    (link.path !== '/' && location.pathname.startsWith(link.path));
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="relative flex items-center px-3 py-1.5 mx-0.5 text-[13px] font-semibold rounded-lg transition-all duration-200"
                      style={{
                        color: isActive ? '#8B1E26' : '#374151',
                        background: isActive ? 'rgba(139, 30, 38, 0.07)' : 'transparent',
                      }}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                          style={{ background: '#8B1E26', bottom: '3px' }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* ── Compact nav for lg ───────────────────────────────── */}
              <nav className="hidden lg:flex xl:hidden items-center gap-0.5" aria-label="Main navigation compact">
                {navLinks.slice(0, 5).map((link) => {
                  const isActive = location.pathname === link.path ||
                    (link.path !== '/' && location.pathname.startsWith(link.path));
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="relative px-2.5 py-1.5 text-[12px] font-semibold rounded-lg transition-all duration-200"
                      style={{
                        color: isActive ? '#8B1E26' : '#374151',
                        background: isActive ? 'rgba(139, 30, 38, 0.07)' : 'transparent',
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* ── Right Action Area (Desktop) ──────────────────────── */}
              <div className="hidden lg:flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${institute.contact.phonePrimary}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-semibold text-slate-600 hover:text-[#0F2038] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden xl:block">Call Desk</span>
                </a>

                <div className="h-5 w-px bg-slate-200" />

                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Header Enquiry')}
                  className="flex items-center gap-1.5 text-white text-[13px] font-extrabold rounded-[9px] transition-all hover:shadow-md active:scale-[0.98] px-4 py-2 bg-[#8B1E26] hover:bg-[#6D171E] cursor-pointer"
                  style={{ boxShadow: '0 2px 8px rgba(139, 30, 38, 0.25)' }}
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>

              {/* ── Mobile Hamburger (Min 44px x 44px tap target) ─────── */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl transition-colors active:scale-95 cursor-pointer"
                style={{
                  background: mobileMenuOpen ? 'rgba(15, 32, 56, 0.08)' : 'rgba(15, 32, 56, 0.04)',
                }}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#0F2038]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#0F2038]" />
                )}
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile Drawer (Full-Width Touch-Friendly Panel, z-50 above everything) ─── */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 z-40 lg:hidden bg-slate-950/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div
            className="fixed z-50 lg:hidden max-h-[calc(100vh-90px)] overflow-y-auto"
            style={{
              top: (topBarVisible ? 32 : 10) + 64,
              left: 12,
              right: 12,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(15, 32, 56, 0.12)',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.20), 0 4px 16px rgba(15, 23, 42, 0.10)',
              borderRadius: '16px',
            }}
          >
            {/* Nav Links */}
            <div className="p-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path ||
                  (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-bold transition-all min-h-[48px] ${
                      isActive
                        ? 'text-[#8B1E26] bg-red-50/90 border-l-4 border-[#8B1E26]'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? 'text-[#8B1E26]' : 'text-slate-400'}`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100 mx-4" />

            {/* Quick Action Mobile Buttons */}
            <div className="p-4 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry && onOpenEnquiry('Mobile Drawer Enquiry');
                }}
                className="w-full flex items-center justify-center gap-2 text-white text-[14px] font-extrabold rounded-xl py-3.5 bg-[#8B1E26] hover:bg-[#6D171E] shadow-md min-h-[48px] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Book Free Academic Counselling</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${institute.contact.phonePrimary}`}
                  className="flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 bg-slate-100 text-slate-900 border border-slate-200 min-h-[44px] active:scale-[0.98] transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Call Desk</span>
                </a>

                <a
                  href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 bg-emerald-600 hover:bg-emerald-700 text-white min-h-[44px] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
