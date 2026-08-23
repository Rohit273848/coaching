import React from 'react';
import Hero from '../components/home/Hero';
import KeyStats from '../components/home/KeyStats';
import ProgramsEditorial from '../components/home/ProgramsEditorial';
import AcademyStory from '../components/home/AcademyStory';
import ResultsEditorial from '../components/home/ResultsEditorial';
import WhyUs from '../components/home/WhyUs';
import FacultyShowcase from '../components/home/FacultyShowcase';
import MobileAppBanner from '../components/home/MobileAppBanner';
import BatchesTable from '../components/home/BatchesTable';
import TestimonialsEditorial from '../components/home/TestimonialsEditorial';
import Methodology from '../components/home/Methodology';
import StudentLifeGallery from '../components/home/StudentLifeGallery';
import UpdatesEditorial from '../components/home/UpdatesEditorial';
import FinalCTA from '../components/home/FinalCTA';
import Accordion from '../components/faq/Accordion';
import { faqItems } from '../config/faq';
import { features } from '../config/features';

export default function Home({ onOpenEnquiry }) {
  return (
    <div className="space-y-0 animate-in fade-in duration-300">
      
      {/* 1. Hero Section matching saarthiedu.online */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Key Stats Strip */}
      <KeyStats />

      {/* 3. "What we offer" Course Showcase (Banking, MCAER, AFO, SSC) */}
      <ProgramsEditorial onOpenEnquiry={onOpenEnquiry} />

      {/* 4. "About Us" Story — Building Careers. Creating Success. (Since 2019) */}
      <AcademyStory />

      {/* 5. Success Stories — Our Students, Our Pride */}
      {features.results && <ResultsEditorial />}

      {/* 6. Why Choose Saarthi Education (4 Pillars) */}
      {features.whyUs && <WhyUs />}

      {/* 7. Faculty Showcase — Master Educators */}
      {features.faculty && <FacultyShowcase />}

      {/* 8. Take Saarthi Education App Banner */}
      <MobileAppBanner onOpenEnquiry={onOpenEnquiry} />

      {/* 9. Upcoming Batch Schedule Table */}
      {features.batchSchedule && <BatchesTable onOpenEnquiry={onOpenEnquiry} />}

      {/* 10. Student & Parent Testimonials */}
      {features.testimonials && <TestimonialsEditorial />}

      {/* 11. Systematic Pedagogy / Methodology */}
      {features.methodology && <Methodology />}

      {/* 12. Campus Life & Student Gallery */}
      {features.gallery && <StudentLifeGallery />}

      {/* 13. News & Batch Updates */}
      {features.updates && <UpdatesEditorial onOpenEnquiry={onOpenEnquiry} />}

      {/* 14. Frequently Asked Questions Accordion (Marathi + English) */}
      {features.faq && (
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 space-y-2">
              <span className="text-[11px] sm:text-xs font-black text-[#1E4FA8] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
                FAQ’S
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1D2B53] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Find answers to common questions about our courses, classes, admission process, and student support.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </section>
      )}

      {/* 15. Final Free Trial CTA Section */}
      <FinalCTA onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
