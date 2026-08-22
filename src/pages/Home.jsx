import React from 'react';
import Hero from '../components/home/Hero';
import KeyStats from '../components/home/KeyStats';
import ResultsEditorial from '../components/home/ResultsEditorial';
import AcademyStory from '../components/home/AcademyStory';
import ProgramsEditorial from '../components/home/ProgramsEditorial';
import Methodology from '../components/home/Methodology';
import FacultyShowcase from '../components/home/FacultyShowcase';
import StudentLifeGallery from '../components/home/StudentLifeGallery';
import TestimonialsEditorial from '../components/home/TestimonialsEditorial';
import BatchesTable from '../components/home/BatchesTable';
import ScholarshipBanner from '../components/home/ScholarshipBanner';
import UpdatesEditorial from '../components/home/UpdatesEditorial';
import FinalCTA from '../components/home/FinalCTA';
import Accordion from '../components/faq/Accordion';
import { faqItems } from '../config/faq';
import { features } from '../config/features';

export default function Home({ onOpenEnquiry }) {
  return (
    <div className="space-y-0 animate-in fade-in duration-300">
      
      {/* 1. Contained Editorial Hero with Soft Tinted Canvas & Floating Badges */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Immediate Trust & Credibility Statistics Strip */}
      <KeyStats />

      {/* 3. Results Section — Featured Topper + Standout Rankers */}
      {features.results && <ResultsEditorial />}

      {/* 4. "The Academy" Story — Philosophy & Academic Approach */}
      <AcademyStory />

      {/* 5. Structured Programs Prospectus — Hierarchical Layout */}
      <ProgramsEditorial onOpenEnquiry={onOpenEnquiry} />

      {/* 6. 6-Step Connected Teaching System Progression */}
      {features.methodology && <Methodology />}

      {/* 7. Faculty Showcase — Featured Director + Department HODs */}
      {features.faculty && <FacultyShowcase />}

      {/* 8. Campus Life & Student Experience Gallery */}
      {features.gallery && <StudentLifeGallery />}

      {/* 9. Authentic Student & Parent Perspectives */}
      {features.testimonials && <TestimonialsEditorial />}

      {/* 10. Upcoming Batch Commencement Schedule Table */}
      {features.batchSchedule && <BatchesTable onOpenEnquiry={onOpenEnquiry} />}

      {/* 11. Merit Scholarship & Admission Test Banner */}
      {features.scholarshipTest && <ScholarshipBanner onOpenEnquiry={onOpenEnquiry} />}

      {/* 12. News & Dispatches (Editorial Magazine Style) */}
      {features.updates && <UpdatesEditorial onOpenEnquiry={onOpenEnquiry} />}

      {/* 13. Minimalist FAQ Section */}
      {features.faq && (
        <section className="py-16 lg:py-24 bg-white border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 space-y-2">
              <span className="text-xs font-extrabold text-[#8B1E26] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
                CLARITY & ADMISSIONS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2038] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Direct answers regarding admissions, batch sizes, test series, and doubt solving counters.
              </p>
            </div>

            <Accordion items={faqItems} />
          </div>
        </section>
      )}

      {/* 14. Final Conversion & Academic Advisory Section */}
      <FinalCTA onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
