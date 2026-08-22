import React, { useState, useEffect } from 'react';
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

  // Apply institute theme configuration on mount
  useEffect(() => {
    applyTheme();
  }, []);

  // Measure topbar scroll threshold
  useEffect(() => {
    const updateTopBarVisibility = () => {
      setTopBarVisible(window.scrollY < 30);
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
        {/* Top Announcement Bar */}
        <TopBar onOpenEnquiry={handleOpenEnquiry} />

        {/* Floating Glass Navbar */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} topBarVisible={topBarVisible} />

        {/* Main Content Area — Mobile-First Padding: clears navbar at top and floating sticky bar on mobile */}
        <main className="flex-1 pt-[84px] sm:pt-[94px] lg:pt-[100px] pb-24 lg:pb-0">
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
