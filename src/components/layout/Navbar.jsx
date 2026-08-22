import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, GraduationCap, ArrowRight, ChevronRight } from 'lucide-react';
import { institute } from '../../config/institute';
import { getNavLinks } from '../../config/navigation';

export default function Navbar({ onOpenEnquiry, topBarVisible }) {
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
    // Prevent body scroll when drawer open
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ─── Floating Glass Navbar ─────────────────────────────────────────── */}
      <header
        className="fixed left-0 right-0 z-40"
        style={{ top: topBarVisible ? 32 : 10 }}
      >
        {/* Outer centering shell — gives the floating effect */}
        <div className="mx-auto px-3 sm:px-4 lg:px-6"
          style={{ maxWidth: 1440 }}
        >
          <div
            className="transition-all duration-300 ease-out"
            style={{
              background: scrolled
                ? 'rgba(255, 255, 255, 0.88)'
                : 'rgba(255, 255, 255, 0.74)',
              backdropFilter: `blur(${scrolled ? 22 : 16}px)`,
              WebkitBackdropFilter: `blur(${scrolled ? 22 : 16}px)`,
              border: scrolled
                ? '1px solid rgba(255, 255, 255, 0.55)'
                : '1px solid rgba(255, 255, 255, 0.40)',
              boxShadow: scrolled
                ? '0 8px 32px rgba(15, 23, 42, 0.12), 0 2px 8px rgba(15, 23, 42, 0.06)'
                : '0 4px 20px rgba(15, 23, 42, 0.08)',
              borderRadius: '14px',
              padding: '0 6px',
            }}
          >
            <div className="flex items-center justify-between h-[60px] px-3 sm:px-4 lg:px-5">

              {/* ── Brand / Logo ──────────────────────────────────────── */}
              <Link
                to="/"
                className="flex items-center gap-2.5 shrink-0 group"
                aria-label="Apex Momentum Academy - Home"
              >
                {/* Icon Badge */}
                <div
                  className="w-9 h-9 rounded-[9px] flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#183256]"
                  style={{
                    background: '#0F2038',
                    boxShadow: '0 2px 8px rgba(15, 32, 56, 0.25)',
                  }}
                >
                  <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
                </div>

                {/* Name Block */}
                <div className="hidden sm:block leading-none">
                  <span
                    className="block font-extrabold text-[15px] leading-tight tracking-tight text-[#0F2038]"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {institute.name}
                  </span>
                  <span
                    className="block text-[10px] font-bold tracking-[0.08em] uppercase mt-0.5"
                    style={{ color: '#8B1E26' }}
                  >
                    JEE&nbsp;•&nbsp;NEET&nbsp;•&nbsp;CET&nbsp;•&nbsp;Foundation
                  </span>
                </div>
                {/* Compact name for very small screens */}
                <span className="sm:hidden font-extrabold text-[15px] text-[#0F2038] tracking-tight">
                  {institute.shortName}
                </span>
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
                      className="relative flex items-center px-3 py-1.5 mx-0.5 text-[13px] font-semibold rounded-lg transition-all duration-200 group"
                      style={{
                        color: isActive ? '#8B1E26' : '#374151',
                        background: isActive ? 'rgba(139, 30, 38, 0.07)' : 'transparent',
                      }}
                      onMouseEnter={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'rgba(15, 32, 56, 0.05)';
                          e.currentTarget.style.color = '#0F2038';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#374151';
                        }
                      }}
                    >
                      {link.label}
                      {/* Active underline indicator */}
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

              {/* ── Compact nav for lg (not xl) ─────────────────────── */}
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
                      onMouseEnter={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'rgba(15, 32, 56, 0.05)';
                          e.currentTarget.style.color = '#0F2038';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#374151';
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* ── Right Action Area ─────────────────────────────────── */}
              <div className="hidden lg:flex items-center gap-2 shrink-0">
                {/* Call Desk — subtle link style */}
                <a
                  href={`tel:${institute.contact.phonePrimary}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-semibold text-slate-600 hover:text-[#0F2038] transition-colors duration-200 group"
                  style={{ letterSpacing: '0.01em' }}
                >
                  <Phone
                    className="w-3.5 h-3.5 text-emerald-600 group-hover:text-emerald-700 transition-colors"
                  />
                  <span className="hidden xl:block">Call Desk</span>
                </a>

                {/* Divider */}
                <div
                  className="h-5 w-px"
                  style={{ background: 'rgba(15, 32, 56, 0.12)' }}
                />

                {/* Enquire Now — primary CTA */}
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Header Enquiry')}
                  className="flex items-center gap-1.5 text-white text-[13px] font-bold rounded-[9px] transition-all duration-200 hover:shadow-md active:scale-[0.98]"
                  style={{
                    background: '#8B1E26',
                    padding: '8px 16px',
                    boxShadow: '0 2px 8px rgba(139, 30, 38, 0.28)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#6D171E'}
                  onMouseLeave={e => e.currentTarget.style.background = '#8B1E26'}
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>

              {/* ── Mobile Hamburger ──────────────────────────────────── */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-[9px] transition-all duration-200"
                style={{
                  background: mobileMenuOpen
                    ? 'rgba(15, 32, 56, 0.08)'
                    : 'rgba(15, 32, 56, 0.04)',
                  border: '1px solid rgba(15, 32, 56, 0.08)',
                }}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                <span
                  className="transition-all duration-200"
                  style={{ color: '#0F2038' }}
                >
                  {mobileMenuOpen
                    ? <X className="w-5 h-5" />
                    : <Menu className="w-5 h-5" />
                  }
                </span>
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
            className="fixed inset-0 z-30 lg:hidden"
            style={{ background: 'rgba(11, 21, 38, 0.35)', backdropFilter: 'blur(2px)' }}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div
            className="fixed z-40 lg:hidden"
            style={{
              top: (topBarVisible ? 32 : 10) + 68,
              left: 12,
              right: 12,
              background: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.55)',
              boxShadow: '0 20px 60px rgba(15, 23, 42, 0.14), 0 4px 16px rgba(15, 23, 42, 0.08)',
              borderRadius: '14px',
              overflow: 'hidden',
              animation: 'navDrawerIn 0.22s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {/* Nav Links */}
            <div className="p-3">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path ||
                  (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center justify-between px-4 py-3 rounded-[9px] text-[14px] font-semibold transition-all duration-150"
                    style={{
                      color: isActive ? '#8B1E26' : '#1C2430',
                      background: isActive ? 'rgba(139, 30, 38, 0.07)' : 'transparent',
                      borderLeft: isActive ? '2px solid #8B1E26' : '2px solid transparent',
                      marginBottom: idx < navLinks.length - 1 ? 2 : 0,
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className="w-4 h-4"
                      style={{ color: isActive ? '#8B1E26' : '#9CA3AF' }}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div
              className="mx-4"
              style={{ height: 1, background: 'rgba(15, 32, 56, 0.08)' }}
            />

            {/* Mobile Action Buttons */}
            <div className="p-3 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry && onOpenEnquiry('Mobile Drawer Enquiry');
                }}
                className="w-full flex items-center justify-center gap-2 text-white text-[13px] font-bold rounded-[9px] py-3 transition-all duration-200"
                style={{
                  background: '#8B1E26',
                  boxShadow: '0 2px 10px rgba(139, 30, 38, 0.25)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#6D171E'}
                onMouseLeave={e => e.currentTarget.style.background = '#8B1E26'}
              >
                <span>Book Free Counselling</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <a
                href={`tel:${institute.contact.phonePrimary}`}
                className="w-full flex items-center justify-center gap-2 text-[13px] font-semibold rounded-[9px] py-2.5 transition-all duration-200"
                style={{
                  background: 'rgba(15, 32, 56, 0.05)',
                  border: '1px solid rgba(15, 32, 56, 0.1)',
                  color: '#1C2430',
                }}
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call: {institute.contact.phonePrimary}</span>
              </a>
            </div>
          </div>
        </>
      )}

      {/* Keyframe for drawer animation */}
      <style>{`
        @keyframes navDrawerIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
