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
import ScholarshipBanner from '../components/home/ScholarshipBanner';
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
      
      {/* 1. Hero Section */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Key Stats Strip (4.8★, 370+ Reviews, Small Batches, Smart Class) */}
      <KeyStats />

      {/* 3. Featured Courses (IIT-JEE, NEET, Foundation 8-10, PCMB Boards) */}
      <ProgramsEditorial onOpenEnquiry={onOpenEnquiry} />

      {/* 4. About PERL Story */}
      <AcademyStory />

      {/* 5. Proven Results & Achievers */}
      {features.results && <ResultsEditorial />}

      {/* 6. Why Choose PERL (4 Core Pillars) */}
      {features.whyUs && <WhyUs />}

      {/* 7. Faculty Mentors Showcase */}
      {features.faculty && <FacultyShowcase />}

      {/* 8. Scholarship Test Strip */}
      {features.scholarshipTest && <ScholarshipBanner onOpenEnquiry={onOpenEnquiry} />}

      {/* 9. Digital Learning App Banner */}
      <MobileAppBanner onOpenEnquiry={onOpenEnquiry} />

      {/* 10. Upcoming Batch Commencement Schedule Table */}
      {features.batchSchedule && <BatchesTable onOpenEnquiry={onOpenEnquiry} />}

      {/* 11. Student & Parent Testimonials */}
      {features.testimonials && <TestimonialsEditorial />}

      {/* 12. 6-Step Scientific Learning Methodology */}
      {features.methodology && <Methodology />}

      {/* 13. Campus Life & Infrastructure Gallery */}
      {features.gallery && <StudentLifeGallery />}

      {/* 14. News & Batch Notices */}
      {features.updates && <UpdatesEditorial onOpenEnquiry={onOpenEnquiry} />}

      {/* 15. FAQ Accordion (Bilingual) */}
      {features.faq && (
        <section className="py-10 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
            <div className="text-center mb-6 sm:mb-12 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-black text-[#0F4C81] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B192C] tracking-tight">
                Got Questions? We’ve Got Answers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Find answers about our courses, small batch sizes, AC smart classrooms, and admission process in Aurangabad.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </section>
      )}

      {/* 16. Final Free Demo Class Booking CTA */}
      <FinalCTA onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
