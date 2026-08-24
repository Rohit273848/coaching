import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, ChevronRight, Star, MessageCircle, MapPin } from 'lucide-react';
import { institute } from '../../config/institute';
import { getNavLinks } from '../../config/navigation';

export default function Navbar({ onOpenEnquiry, topBarVisible = true, onMobileMenuToggle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navLinks = getNavLinks();

  // Scroll detection for navbar surface treatment
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
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
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    if (onMobileMenuToggle) {
      onMobileMenuToggle(mobileMenuOpen);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, onMobileMenuToggle]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ─── Floating Header Container ─────────────────────────────────────── */}
      <header
        className="fixed left-0 right-0 z-40 transition-all duration-300 pointer-events-none"
        style={{ top: topBarVisible ? 36 : 10 }}
      >
        <div className="w-full max-w-[1600px] mx-auto px-2.5 sm:px-4 lg:px-6">
          <div
            className="pointer-events-auto transition-all duration-300 ease-out"
            style={{
              background: scrolled
                ? 'rgba(255, 255, 255, 0.98)'
                : 'rgba(255, 255, 255, 0.94)',
              backdropFilter: `blur(${scrolled ? 20 : 14}px)`,
              WebkitBackdropFilter: `blur(${scrolled ? 20 : 14}px)`,
              border: scrolled
                ? '1px solid rgba(15, 76, 129, 0.16)'
                : '1px solid rgba(226, 232, 240, 0.95)',
              boxShadow: scrolled
                ? '0 12px 36px -4px rgba(11, 25, 44, 0.14), 0 2px 8px rgba(11, 25, 44, 0.04)'
                : '0 4px 20px -2px rgba(11, 25, 44, 0.07)',
              borderRadius: '16px',
            }}
          >
            <div className="flex items-center justify-between min-h-[58px] sm:min-h-[66px] lg:min-h-[70px] px-3 sm:px-5 lg:px-6 flex-nowrap gap-2 sm:gap-4">

              {/* ── Brand / Logo ──────────────────────────────────────── */}
              <Link
                to="/"
                className="flex items-center gap-2.5 sm:gap-3 shrink-0 group min-h-[44px]"
                aria-label="PERL Education - Home"
              >
                {/* Official Logo Emblem */}
                <img
                  src="/logo.png"
                  alt="PERL Education Logo"
                  className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full object-contain shrink-0 drop-shadow transition-transform duration-200 group-hover:scale-105"
                />

                {/* Name & Academic Scope Block */}
                <div className="leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="block font-black text-[15px] sm:text-[17px] xl:text-[19px] tracking-tight text-[#0B192C]"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {institute.shortName || 'PERL Education'}
                    </span>
                    <span className="hidden xl:inline-flex items-center gap-1 text-[10px] font-black text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/80 whitespace-nowrap">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      4.8★ (370+ Reviews)
                    </span>
                  </div>
                  <span
                    className="hidden sm:block text-[9px] sm:text-[10px] font-bold tracking-[0.05em] uppercase text-[#0F4C81] whitespace-nowrap"
                  >
                    IIT-JEE • NEET • Foundation (8th–10th) • PCMB
                  </span>
                </div>
              </Link>

              {/* ── Desktop Navigation (>=1024px) ──────────────────────── */}
              <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink min-w-0 flex-nowrap" aria-label="Main navigation">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path ||
                    (link.path !== '/' && location.pathname.startsWith(link.path));
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative whitespace-nowrap px-2.5 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-[14px] font-bold rounded-lg transition-all duration-200 shrink-0 ${
                        isActive
                          ? 'text-[#0F4C81] bg-blue-50/80 font-black'
                          : 'text-slate-700 hover:text-[#0F4C81] hover:bg-slate-100/70'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          className="absolute bottom-0.5 left-2.5 right-2.5 h-[2px] rounded-full bg-[#0F4C81]"
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* ── Right Action Area (Desktop) ──────────────────────── */}
              <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0 flex-nowrap">
                <a
                  href={`tel:${institute.contact.phonePrimary}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12.5px] xl:text-[13px] font-bold text-slate-700 hover:text-[#0F4C81] hover:bg-blue-50 transition-colors whitespace-nowrap"
                  aria-label={`Call Admissions Desk: ${institute.contact.phonePrimary}`}
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="hidden xl:inline">{institute.contact.phonePrimary}</span>
                  <span className="xl:hidden">Call Desk</span>
                </a>

                <button
                  onClick={() => { if (onOpenEnquiry) onOpenEnquiry('Navbar Book Free Demo'); }}
                  className="flex items-center gap-1.5 xl:gap-2 text-white text-[12.5px] xl:text-[13px] font-black rounded-xl px-4 xl:px-5 py-2.5 transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #0F4C81 0%, #0A3357 100%)',
                    boxShadow: '0 4px 14px rgba(15, 76, 129, 0.35)',
                  }}
                  aria-label="Book a Free Demo Class"
                >
                  <span>Book Free Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                </button>
              </div>

              {/* ── Mobile Right Actions (<1024px) ───────────────────── */}
              <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Instant Phone Call Button */}
                <a
                  href={`tel:${institute.contact.phonePrimary}`}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/80 active:scale-95 transition-all"
                  aria-label={`Call PERL Education at ${institute.contact.phonePrimary}`}
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                </a>

                {/* Hamburger Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-all active:scale-95 cursor-pointer bg-slate-100 hover:bg-slate-200/80 text-[#0B192C] border border-slate-200"
                  aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5 text-[#0B192C]" />
                  ) : (
                    <Menu className="w-5 h-5 text-[#0B192C]" />
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile Navigation Drawer (<1024px) ─────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div
            className="fixed z-50 inset-x-3 max-h-[calc(100vh-80px)] overflow-y-auto rounded-3xl bg-white/98 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 flex flex-col"
            style={{
              top: (topBarVisible ? 36 : 10) + 64,
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80 rounded-t-3xl">
              <div className="flex items-center gap-2.5">
                <img
                  src="/logo.png"
                  alt="PERL Education Logo"
                  className="w-10 h-10 rounded-full object-contain shrink-0 drop-shadow"
                />
                <div>
                  <span className="font-black text-sm text-[#0B192C] block leading-tight">
                    {institute.name}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 block">
                    New Usmanpura, Aurangabad
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center active:scale-95 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Pill */}
            <div className="px-4 pt-3">
              <div className="flex items-center justify-between bg-amber-50/90 border border-amber-200/80 px-3 py-2 rounded-xl text-xs font-bold text-amber-950">
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                  <span>4.8 / 5.0 Rating (370+ Google Reviews)</span>
                </div>
                <span className="text-[10px] bg-amber-200/80 px-1.5 py-0.5 rounded text-amber-900 font-extrabold uppercase">
                  Verified
                </span>
              </div>
            </div>

            {/* Nav Links */}
            <div className="p-3 space-y-1 overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path ||
                  (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-bold transition-all min-h-[46px] ${
                      isActive
                        ? 'text-[#0F4C81] bg-blue-50/90 font-black border-l-4 border-[#0F4C81]'
                        : 'text-slate-800 hover:bg-slate-50 active:bg-slate-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? 'text-[#0F4C81]' : 'text-slate-400'}`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="h-px bg-slate-100 mx-4" />

            {/* CTAs & Quick Actions */}
            <div className="p-4 space-y-2.5 bg-slate-50/60 rounded-b-3xl">
              {/* Primary Demo Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry('Mobile Drawer Book Free Demo');
                }}
                className="w-full flex items-center justify-center gap-2 text-white text-[14px] font-black rounded-xl py-3.5 bg-[#0F4C81] hover:bg-[#0A3357] active:scale-[0.98] shadow-md min-h-[48px] transition-all cursor-pointer"
                style={{
                  boxShadow: '0 4px 14px rgba(15, 76, 129, 0.35)',
                }}
              >
                <span>Book a Free Demo Class</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </button>

              {/* Call & WhatsApp Quick Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${institute.contact.phonePrimary}`}
                  className="flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 bg-white text-slate-900 border border-slate-200 min-h-[44px] active:scale-[0.98] transition-all shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Call Us</span>
                </a>

                <a
                  href={`https://wa.me/${institute.contact.whatsappNumber}?text=${encodeURIComponent(institute.contact.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 bg-emerald-600 hover:bg-emerald-700 text-white min-h-[44px] active:scale-[0.98] transition-all shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Campus Note */}
              <div className="pt-2 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-[#F59E0B]" />
                <span>1st Floor, Shrinath Complex, New Usmanpura</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
