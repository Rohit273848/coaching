/**
 * COURSES & ACADEMIC PROGRAMS DATA MODEL
 * 
 * Reusable program data structure supporting JEE, NEET, CET, and Foundation.
 * The UI automatically populates program grid, cards, filters, and detail pages.
 */

export const courses = [
  {
    id: "jee-main-advanced-2yr",
    title: "JEE Main + Advanced (Two-Year Integrated Program)",
    shortTitle: "JEE 2-Year Integrated",
    category: "JEE",
    targetStudents: "Students moving to Class 11",
    duration: "2 Academic Years",
    mode: ["Offline Classroom", "Hybrid Support"],
    badge: "Most Popular",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    batchStartDate: "10th June 2026",
    weeklyHours: "24 Hours (Classes + Doubt Counter)",
    testFrequency: "Bi-Weekly Mock Tests + Monthly Full Syllabus JEE Pattern",
    eligibility: "Class 10th Passed / Appeared (Min 75% in Science & Math recommended)",
    description: "A comprehensive 2-year program designed to build deep conceptual clarity from fundamental concepts up to JEE Advanced problem-solving speed and accuracy.",
    features: [
      "Full coverage of Class 11 & 12 CBSE/State Board + JEE Advanced syllabus",
      "Dedicated daily 2-hour Doubt Solving Counter with Senior IITian Faculty",
      "Specialized Study Modules: Basic, Advanced & Archive (20-Year PYQs)",
      "Bi-weekly Computer-Based Tests (CBT) mirroring exact NTA JEE Main interface",
      "Personal academic mentor assigned per batch of 35 students",
      "Detailed Performance Analytics portal provided for parents & students"
    ],
    syllabusOverview: [
      { unit: "Class 11 Physics", topics: ["Mechanics", "Waves & Oscillations", "Thermodynamics", "Properties of Matter"] },
      { unit: "Class 11 Chemistry", topics: ["Atomic Structure", "Chemical Bonding", "Equilibrium", "Organic Chemistry Basics"] },
      { unit: "Class 11 Mathematics", topics: ["Algebra & Matrices", "Trigonometry", "Coordinate Geometry", "Calculus Intro"] },
      { unit: "Class 12 Physics", topics: ["Electrostatics", "Electromagnetism", "Optics", "Modern Physics"] },
      { unit: "Class 12 Chemistry", topics: ["Electrochemistry", "Coordination Compounds", "Aldehydes & Polymers"] },
      { unit: "Class 12 Mathematics", topics: ["Differential & Integral Calculus", "Vectors & 3D Geometry", "Probability"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "₹1,15,000",
      installmentAvailable: true,
      scholarshipUpto: "Up to 100% via SAT Exam"
    },
    ctaText: "Enquire for JEE 2028 Batch"
  },
  {
    id: "neet-ug-2yr",
    title: "NEET-UG (Two-Year Comprehensive Medical Program)",
    shortTitle: "NEET 2-Year Program",
    category: "NEET",
    targetStudents: "Students moving to Class 11",
    duration: "2 Academic Years",
    mode: ["Offline Classroom"],
    badge: "High Selection Rate",
    subjects: ["Physics", "Chemistry", "Botany", "Zoology"],
    batchStartDate: "15th June 2026",
    weeklyHours: "26 Hours (NCERT Line-by-Line Focus)",
    testFrequency: "Weekly NCERT Drill + Monthly 720-Mark OMR Pattern Test",
    eligibility: "Class 10th Passed / Appeared",
    description: "Meticulously crafted NCERT-concentric coaching for NEET aspirants with equal emphasis on conceptual speed in Physics and 360/360 mastery in Biology.",
    features: [
      "NCERT Line-by-Line Mastery Workbooks for Botany & Zoology",
      "Physics formula application drills & daily practice problems (DPP)",
      "Weekly OMR-based test evaluation with immediate error analysis reports",
      "Special Memory Tricks & Mnemonics sessions for Bio Taxonomy & Reactions",
      "Full access to 10,000+ Question Bank with video solutions",
      "Regular Parent-Teacher Meet (PTM) every 4 weeks"
    ],
    syllabusOverview: [
      { unit: "Biology (Class 11 & 12)", topics: ["Diversity in Living World", "Cell Structure", "Plant Physiology", "Human Physiology", "Genetics & Evolution", "Ecology"] },
      { unit: "Physics (Class 11 & 12)", topics: ["Kinematics & Laws of Motion", "Work & Energy", "Thermodynamics", "Current Electricity", "Optics", "Semiconductors"] },
      { unit: "Chemistry (Class 11 & 12)", topics: ["Physical Chemistry Calculations", "Inorganic NCERT Trends", "Organic Reactions & Mechanisms"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "₹1,10,000",
      installmentAvailable: true,
      scholarshipUpto: "Up to 90% via SAT"
    },
    ctaText: "Enquire for NEET 2028 Batch"
  },
  {
    id: "jee-neet-repeater-dropper",
    title: "Target Repeater / Dropper Program (JEE & NEET 2027)",
    shortTitle: "Dropper / Repeater Batch",
    category: "JEE",
    targetStudents: "Class 12th Passed (Drop Year Aspirants)",
    duration: "1 Academic Year (Full Day Intensive)",
    mode: ["Offline Classroom"],
    badge: "Intensive Rank Booster",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
    batchStartDate: "25th June 2026",
    weeklyHours: "32 Hours (Intensive Problem Solving)",
    testFrequency: "Every Sunday Full Length Test Series",
    eligibility: "Class 12th Passed",
    description: "An intensive 1-year rank transformation program focusing on error elimination, advanced problem speed, and rigorous test series for students repeating JEE or NEET.",
    features: [
      "Fast-track complete syllabus revision followed by 5 months of pure test series",
      "Personalised weak-area diagnostic mapping after every mock exam",
      "Separate Top 30 Super Batch for high percentile scorers",
      "1-on-1 Strategy sessions with Senior Academic Director",
      "Complete quiet Study Library access with reserved study desks"
    ],
    syllabusOverview: [
      { unit: "Phase 1 (Jun - Nov)", topics: ["Complete Syllabus Core Coverage & Advanced DPPs"] },
      { unit: "Phase 2 (Dec - Jan)", topics: ["Part Tests, Full Syllabus CBT Mock Drills & Speed Optimisation"] },
      { unit: "Phase 3 (Feb - Apr)", topics: ["JEE Adv / NEET Special Rank Refinement Series"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "₹95,000",
      installmentAvailable: true,
      scholarshipUpto: "Special rank discount for high Class 12% / Previous JEE/NEET score"
    },
    ctaText: "Join Droppers Batch"
  },
  {
    id: "mht-cet-booster",
    title: "MHT-CET State Rank Master Program",
    shortTitle: "MHT-CET Program",
    category: "CET",
    targetStudents: "Class 12th State Board / CBSE Students",
    duration: "1 Academic Year / Fast-Track Crash Course",
    mode: ["Offline", "Hybrid"],
    badge: "99+ Percentile Guarantee Focus",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
    batchStartDate: "1st July 2026",
    weeklyHours: "18 Hours",
    testFrequency: "Weekly Chapterwise Speed Drills + 15 Full CBT Mocks",
    eligibility: "Class 12th Appearing",
    description: "Focused preparation designed specifically for State Engineering & Pharmacy admissions (COEP, VJTI, ICT, PICT targets) following State Textbook Alignment.",
    features: [
      "100% Alignment with Maharashtra State Bureau of Textbook Production",
      "Shortcut tricks for solving 150 questions in 180 minutes without errors",
      "Chapter-wise PYQ bank from 2018 to 2025 CET papers",
      "Time-management simulation software for CBT confidence"
    ],
    syllabusOverview: [
      { unit: "Class 11 Syllabus (20% Weightage)", topics: ["Selected High Weightage Chapters as per State CET Cell"] },
      { unit: "Class 12 Syllabus (80% Weightage)", topics: ["Complete Class 12th HSC Physics, Chemistry, Math & Bio Syllabus"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "₹65,000",
      installmentAvailable: true,
      scholarshipUpto: "Up to 50%"
    },
    ctaText: "Enquire MHT-CET Batch"
  },
  {
    id: "foundation-class-8-9-10",
    title: "Junior Olympiad & Foundation Builder (Classes 8, 9 & 10)",
    shortTitle: "Class 8-10 Foundation",
    category: "FOUNDATION",
    targetStudents: "Class 8, 9 and 10 Students",
    duration: "1 to 3 Years Integrated",
    mode: ["Offline Classroom"],
    badge: "Strong Basics First",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Mental Ability (MAT)"],
    batchStartDate: "5th June 2026",
    weeklyHours: "12 Hours (Weekend / Evening Batches)",
    testFrequency: "Monthly Aptitude & Board Alignment Tests",
    eligibility: "Students studying in Class 8, 9 or 10",
    description: "Nurturing analytical thinking, mathematical aptitude, scientific curiosity, and early preparation for NSEJS, NTSE, PRMO, and future JEE/NEET competitive journeys.",
    features: [
      "Dual Advantage: Top Board Performance + Early Competitive Foundation",
      "Special Logical Reasoning & Mental Ability Training",
      "Hands-on Science Lab Demos & Conceptual Experiments",
      "Stress-free environment promoting academic curiosity over rote learning",
      "Smooth transition into Class 11 JEE/NEET advanced batches"
    ],
    syllabusOverview: [
      { unit: "Science Foundation", topics: ["Physics Laws", "Chemical Reactions", "Cell Biology & Physiology Demos"] },
      { unit: "Math Foundation", topics: ["Number Theory", "Algebraic Rigour", "Euclidean & Coordinate Geometry"] },
      { unit: "Mental Ability", topics: ["Verbal & Non-Verbal Reasoning", "Pattern Recognition", "Data Interpretation"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "₹45,000",
      installmentAvailable: true,
      scholarshipUpto: "Up to 50%"
    },
    ctaText: "Enroll in Foundation"
  }
];
