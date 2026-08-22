/**
 * FEATURE FLAGS CONFIGURATION
 * 
 * Toggle institute website features on or off.
 * Setting any flag to `false` automatically removes the corresponding page,
 * navigation menu items, and homepage sections without breaking layout.
 */

export const features = {
  topAnnouncementBar: true,   // Show top announcement banner
  results: true,              // Toppers & exam results section/page
  faculty: true,              // Faculty profile section/page
  testimonials: true,         // Student & Parent reviews section
  gallery: true,              // Campus life & classroom photo gallery
  updates: true,              // News, announcements & batch updates page
  scholarshipTest: true,      // Merit scholarship test CTA banner
  hostelInfo: true,           // Detailed hostel/accommodation support info
  onlineClasses: true,        // Hybrid/Online class support badge
  feeDisplay: false,          // Show fees breakdown (default false for flexibility)
  freeDemo: true,             // Enable "Book Free Demo Lecture" button
  faq: true,                  // Frequently asked questions accordion
  methodology: true,          // 6-step teaching methodology process
  whyUs: true,                // Core academic advantages section
  batchSchedule: true,        // Upcoming batch table
};
