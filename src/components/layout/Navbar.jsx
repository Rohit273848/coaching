import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, GraduationCap, ArrowRight, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';
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
        className="fixed left-0 right-0 z-40 transition-all duration-300"
        style={{ top: topBarVisible ? 36 : 10 }}
      >
        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
          <div
            className="transition-all duration-300 ease-out"
            style={{
              background: scrolled
                ? 'rgba(255, 255, 255, 0.96)'
                : 'rgba(255, 255, 255, 0.88)',
              backdropFilter: `blur(${scrolled ? 20 : 14}px)`,
              WebkitBackdropFilter: `blur(${scrolled ? 20 : 14}px)`,
              border: scrolled
                ? '1px solid rgba(30, 79, 168, 0.15)'
                : '1px solid rgba(229, 233, 242, 0.9)',
              boxShadow: scrolled
                ? '0 12px 35px rgba(26, 46, 85, 0.12), 0 2px 6px rgba(26, 46, 85, 0.04)'
                : '0 4px 20px rgba(26, 46, 85, 0.06)',
              borderRadius: '16px',
            }}
          >
            <div className="flex items-center justify-between min-h-[62px] sm:min-h-[68px] px-3 sm:px-5 lg:px-6 flex-nowrap gap-2 sm:gap-4">

              {/* ── Brand / Logo ──────────────────────────────────────── */}
              <Link
                to="/"
                className="flex items-center gap-2.5 shrink-0 group min-h-[44px]"
                aria-label="Saarthi Education - Home"
              >
                {/* Logo Icon Badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #1E4FA8 0%, #163E85 100%)',
                    boxShadow: '0 4px 12px rgba(30, 79, 168, 0.3)',
                  }}
                >
                  <GraduationCap className="w-5 h-5 text-[#F8B81F]" />
                </div>

                {/* Name Block */}
                <div className="leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="block font-black text-[15px] sm:text-[17px] xl:text-[18px] tracking-tight text-[#1D2B53]"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {institute.name}
                    </span>
                    <span className="hidden xl:inline-block text-[11px] font-bold text-[#F8941F] bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200 whitespace-nowrap">
                      {institute.marathiName}
                    </span>
                  </div>
                  <span
                    className="hidden sm:block text-[9px] sm:text-[10px] font-bold tracking-[0.06em] uppercase text-[#1E4FA8] whitespace-nowrap"
                  >
                    Banking • MCAER • AFO Coaching
                  </span>
                </div>
              </Link>

              {/* ── Desktop Navigation ───────────────────────────────── */}
              <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2 shrink min-w-0 flex-nowrap" aria-label="Main navigation">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path ||
                    (link.path !== '/' && location.pathname.startsWith(link.path));
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="relative whitespace-nowrap px-2 xl:px-2.5 2xl:px-3 py-1.5 xl:py-2 text-[12.5px] xl:text-[13.5px] 2xl:text-[14px] font-bold rounded-lg transition-all duration-200 shrink-0"
                      style={{
                        color: isActive ? '#1E4FA8' : '#374151',
                        background: isActive ? 'rgba(30, 79, 168, 0.08)' : 'transparent',
                      }}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          className="absolute bottom-0.5 left-2 right-2 h-[2.5px] rounded-full bg-[#1E4FA8]"
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
                  className="flex items-center gap-1.5 px-2.5 xl:px-3 py-2 rounded-xl text-[12.5px] xl:text-[13px] font-bold text-slate-700 hover:text-[#1E4FA8] hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="hidden xl:inline">{institute.contact.phonePrimary}</span>
                  <span className="xl:hidden">Call</span>
                </a>

                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Header Enquiry')}
                  className="flex items-center gap-1.5 xl:gap-2 text-white text-[12px] xl:text-[13px] font-black rounded-xl px-3.5 xl:px-5 py-2 xl:py-2.5 transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #1E4FA8 0%, #163E85 100%)',
                    boxShadow: '0 4px 14px rgba(30, 79, 168, 0.35)',
                  }}
                >
                  <span>Enquiry Now</span>
                  <ArrowRight className="w-4 h-4 text-[#F8B81F] shrink-0" />
                </button>
              </div>

              {/* ── Mobile Hamburger ─────────────────────────────────── */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl transition-colors active:scale-95 cursor-pointer bg-slate-100/80 shrink-0"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#1D2B53]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#1D2B53]" />
                )}
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile Drawer ─────────────────────────────────────────────────── */}
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
              top: (topBarVisible ? 36 : 10) + 70,
              left: 12,
              right: 12,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(30, 79, 168, 0.15)',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.25)',
              borderRadius: '20px',
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
                        ? 'text-[#1E4FA8] bg-blue-50/90 border-l-4 border-[#1E4FA8]'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? 'text-[#1E4FA8]' : 'text-slate-400'}`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="h-px bg-slate-100 mx-4" />

            {/* Quick Action Mobile Buttons */}
            <div className="p-4 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry && onOpenEnquiry('Mobile Drawer Enquiry');
                }}
                className="w-full flex items-center justify-center gap-2 text-white text-[14px] font-black rounded-xl py-3.5 bg-[#1E4FA8] hover:bg-[#163E85] shadow-md min-h-[48px] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Enquiry Now / Free Demo</span>
                <ArrowRight className="w-4 h-4 text-[#F8B81F]" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${institute.contact.phonePrimary}`}
                  className="flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 bg-slate-100 text-slate-900 border border-slate-200 min-h-[44px] active:scale-[0.98] transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Call Us</span>
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
