import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileStickyCTA from './components/layout/MobileStickyCTA';
import EnquiryModal from './components/enquiry/EnquiryModal';

import Home from './pages/Home';
import Programs from './pages/Programs';
import ProgramDetails from './pages/ProgramDetails';
import Results from './pages/Results';
import Faculty from './pages/Faculty';
import Gallery from './pages/Gallery';
import Updates from './pages/Updates';
import About from './pages/About';
import Contact from './pages/Contact';

import { features } from './config/features';
import { applyTheme } from './config/theme';

// Scroll to top component on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryCourse, setEnquiryCourse] = useState('');
  const [topBarVisible, setTopBarVisible] = useState(true);
  const topBarRef = useRef(null);

  // Apply institute theme configuration on mount
  useEffect(() => {
    applyTheme();
  }, []);

  // Measure topbar height to pass to floating navbar
  useEffect(() => {
    const updateTopBarVisibility = () => {
      // TopBar is approximately 32px; check if it is scrolled past
      setTopBarVisible(window.scrollY < 32);
    };
    window.addEventListener('scroll', updateTopBarVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateTopBarVisibility);
  }, []);

  const handleOpenEnquiry = (courseName = '') => {
    setEnquiryCourse(courseName);
    setEnquiryModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#1C2430] selection:bg-[#8B1E26] selection:text-white">
        {/* Top Announcement Bar — sits above the floating glass navbar */}
        <TopBar onOpenEnquiry={handleOpenEnquiry} />

        {/* Floating Glass Navbar — fixed positioned, requires content offset */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} topBarVisible={topBarVisible} />

        {/* Main Content Area — padded to clear the fixed navbar (topbar ~32px + navbar 60px + gap 10px) */}
        <main className="flex-1" style={{ paddingTop: 102 }}>
          <Routes>
            <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/programs" element={<Programs onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/programs/:courseId" element={<ProgramDetails onOpenEnquiry={handleOpenEnquiry} />} />
            
            {features.results && <Route path="/results" element={<Results />} />}
            {features.faculty && <Route path="/faculty" element={<Faculty />} />}
            {features.gallery && <Route path="/student-life" element={<Gallery />} />}
            {features.updates && <Route path="/updates" element={<Updates onOpenEnquiry={handleOpenEnquiry} />} />}

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenEnquiry={handleOpenEnquiry} />

        {/* Mobile Sticky Quick CTA Bar */}
        <MobileStickyCTA onOpenEnquiry={handleOpenEnquiry} />

        {/* Global Enquiry Popup Modal */}
        <EnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          defaultCourse={enquiryCourse}
        />
      </div>
    </Router>
  );
}
