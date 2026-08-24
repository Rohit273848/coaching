/**
 * COURSES & ACADEMIC PROGRAMS DATA MODEL
 * 
 * PERL Education Offerings:
 * - IIT-JEE (Mains & Advanced)
 * - NEET (UG Medical Entrance)
 * - School & Foundation Programs (Classes 8th, 9th, 10th - CBSE, ICSE, State Board)
 * - Higher Secondary (Classes 11th & 12th PCMB Integrated)
 */

export const courses = [
  {
    id: "iit-jee-mains-advanced",
    title: "IIT-JEE (Mains & Advanced) Comprehensive Prep",
    shortTitle: "IIT-JEE (Mains & Advanced)",
    category: "JEE",
    targetStudents: "Class 11th, 12th & 12th Pass / Droppers Targeting IITs & NITs",
    duration: "1 to 2 Years Integrated",
    studentCount: "450+ Aspirants",
    lessonCount: "350+ Hours Live / Smart Class",
    rating: "4.9 / 5.0 (Google Rated)",
    mode: ["Smart Classroom (Usmanpura)", "Hybrid with App Tests"],
    badge: "Top Engineering Choice",
    subjects: [
      "Physics (Mechanics, Electrodynamics, Optics, Modern Physics)",
      "Chemistry (Physical, Organic & Inorganic Chemistry)",
      "Mathematics (Calculus, Algebra, Coordinate Geometry, Vectors)"
    ],
    batchStartDate: "New Batches Starting Every Month",
    weeklyHours: "18-22 Hours (Lectures + Guided DPP Practice)",
    testFrequency: "Weekly Sectional Chapter Tests + Bi-weekly JEE Mains/Adv Full Mock Tests",
    eligibility: "Class 10th Passed / Class 11th / Class 12th Appearing or Passed",
    description: "Engineered to help students secure top percentile ranks in JEE Main and Advanced. Features small batch sizes, individual mentor focus, digital smart boards, and regular Computer-Based Test (CBT) mock exam series.",
    detailedDescription: "A highly rigorous, concept-first coaching program engineered to bridge foundational school theory with advanced problem-solving techniques required for cracking JEE Main and securing Top Ranks in JEE Advanced for IITs & NITs.",
    features: [
      "Small Batch Sizes (Strict limits for maximum teacher-student interaction)",
      "Air-Conditioned Smart Classrooms with interactive digital visual boards",
      "Daily Practice Problems (DPP) & high-volume multi-concept question banks",
      "Special 1-on-1 Daily Doubt-Clearing Desks with senior faculty",
      "National-level Computer Based Test (CBT) Series simulating NTA exam interface",
      "Comprehensive Study Material, Formula Guides & Previous 15 Years Solved Papers"
    ],
    syllabusOverview: [
      { unit: "Physics Module", topics: ["Kinematics, Laws of Motion & Work-Energy-Power", "Rotational Dynamics & Gravitation", "Thermodynamics & Kinetic Theory", "Electrostatics, Current Electricity & Magnetism", "Optics (Ray & Wave) and Modern Physics"] },
      { unit: "Chemistry Module", topics: ["Atomic Structure, Chemical Bonding & Periodic Table", "Thermodynamics, Equilibrium & Electrochemistry", "Organic Reaction Mechanisms & Functional Groups", "Coordination Compounds, Metallurgy & p/d/f Block Elements"] },
      { unit: "Mathematics Module", topics: ["Sets, Relations & Functions, Trigonometry", "Differential & Integral Calculus with Applications", "Coordinate Geometry (Circles, Parabola, Ellipse, Hyperbola)", "Vectors, 3D Geometry, Matrices & Determinants, Probability"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "Affordable Installment Plan Available",
      installmentAvailable: true,
      scholarshipUpto: "Scholarships available on Admission Test / 10th Board Marks"
    },
    ctaText: "Book Free JEE Demo Class"
  },
  {
    id: "neet-medical-entrance",
    title: "NEET (UG) Medical Entrance Preparation",
    shortTitle: "NEET (UG) Medical Prep",
    category: "NEET",
    targetStudents: "Class 11th, 12th & Repeaters Targeting MBBS, BDS & AIIMS",
    duration: "1 to 2 Years Integrated",
    studentCount: "520+ Aspirants",
    lessonCount: "400+ Hours Smart Lectures",
    rating: "4.9 / 5.0 (Google Rated)",
    mode: ["Smart Classroom (Usmanpura)", "Hybrid with App Access"],
    badge: "Medical Aspirants Choice",
    subjects: [
      "Biology (Botany - Diversity, Cell Biology, Genetics, Ecology)",
      "Biology (Zoology - Human Physiology, Reproduction, Evolution)",
      "Physics (Mechanics, Thermal, Electromagnetism, Modern Physics)",
      "Chemistry (Organic, Physical & Inorganic Chemistry)"
    ],
    batchStartDate: "New Batches Starting Every Month",
    weeklyHours: "20-24 Hours (Classes + Daily NCERT Line-by-Line Drills)",
    testFrequency: "Weekly NCERT Objective Tests + OMR-Based 720-Marks NEET Mock Exams",
    eligibility: "Class 10th Passed / Class 11th / Class 12th Biology Stream",
    description: "Specialized coaching targeting 650+ scores for admission to prestigious Government Medical Colleges (MBBS). Combines 100% NCERT line-by-line mastery, daily doubt resolution, and high-standard full-length mock tests.",
    detailedDescription: "A specialized, intensive medical entrance coaching program meticulously aligned with NTA NEET patterns and 100% NCERT mastery, backed by speed-accuracy training in Physics and Chemistry.",
    features: [
      "100% NCERT Line-by-Line Deep Dive with mind maps and diagram analyses",
      "High-Yield Question Banks with 10,000+ chapter-wise NEET practice questions",
      "Interactive 3D Visual Learning for Complex Biological & Chemical mechanisms",
      "Dedicated Daily Doubt Clearance & Mentorship from medical education experts",
      "Full-Length OMR Mock Test Series with detailed negative marking analysis",
      "Mobile App access for anytime recorded lecture revision and instant quizzes"
    ],
    syllabusOverview: [
      { unit: "Biology (Botany & Zoology)", topics: ["Diversity in Living World & Structural Organisation", "Cell Structure and Function, Biomolecules", "Plant Physiology & Human Physiology", "Reproduction & Genetics and Evolution", "Biology in Human Welfare, Biotechnology & Ecology"] },
      { unit: "Physics for NEET", topics: ["Mechanics, Properties of Bulk Matter, Gravitation", "Thermodynamics, Oscillations and Waves", "Electrostatics, Current, Magnetism & EMI", "Optics, Dual Nature of Matter, Atoms & Nuclei"] },
      { unit: "Chemistry for NEET", topics: ["Basic Concepts of Chemistry, Structure of Atom", "States of Matter, Thermodynamics, Equilibrium", "Organic Chemistry Basics, Hydrocarbons, Biomolecules", "Periodic Table, Coordination Chemistry & Metallurgy"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "Flexible Installment Option",
      installmentAvailable: true,
      scholarshipUpto: "Merit-based Concession on Board Scores"
    },
    ctaText: "Book Free NEET Demo Class"
  },
  {
    id: "foundation-class-8-9-10",
    title: "School Foundation Program (Classes 8th, 9th & 10th)",
    shortTitle: "Foundation (Class 8–10)",
    category: "FOUNDATION",
    targetStudents: "Students of Classes 8th, 9th & 10th (CBSE, ICSE & State Board)",
    duration: "Academic Year (10-12 Months)",
    studentCount: "380+ Students",
    lessonCount: "250+ Interactive Sessions",
    rating: "4.8 / 5.0 (Google Rated)",
    mode: ["Smart Classroom (Usmanpura)", "Offline + App Support"],
    badge: "Strong Academic Base",
    subjects: [
      "Physics & Chemistry (Conceptual Science)",
      "Mathematics (Algebra, Geometry, Mental Ability)",
      "Biology (Fundamentals & Life Processes)",
      "Olympiad & NTSE Aptitude Training"
    ],
    batchStartDate: "Fresh Batches Available",
    weeklyHours: "12-15 Hours",
    testFrequency: "Chapter-wise Subjective & Objective Tests with Parent Performance Reports",
    eligibility: "Students studying in or entering Class 8th, 9th, or 10th",
    description: "Builds solid fundamentals for CBSE, ICSE, and State Board students. Clarifies core concepts in Mathematics and Science to lay a strong base for future IIT-JEE, NEET, and Olympiad competitive examinations.",
    detailedDescription: "Builds unshakeable conceptual clarity in Math and Science while ensuring stellar school board exam performance and developing logical reasoning for NTSE, MTSE, and Olympiad competitive exams.",
    features: [
      "Small Batch Strength allowing individual monitoring of every child",
      "Dual focus: 100% Board Exam Excellence + Early Competitive Foundation",
      "Air-Conditioned classrooms with digital animations for abstract scientific topics",
      "Regular Chapter Tests, Periodic Term Exams & Timely Parent-Teacher Meetings",
      "Mental Ability & Logical Aptitude training for analytical thinking development",
      "Doubt clearing sessions after every lecture to ensure zero backlog"
    ],
    syllabusOverview: [
      { unit: "Class 8 Foundation", topics: ["Force & Pressure, Light, Chemical Effects of Current", "Rational Numbers, Linear Equations, Mensuration", "Microorganisms, Cell Structure, Conservation of Plants/Animals"] },
      { unit: "Class 9 Foundation", topics: ["Motion, Force and Laws of Motion, Gravitation, Work & Energy", "Matter in Our Surroundings, Atoms and Molecules, Structure of Atom", "Number Systems, Polynomials, Coordinate Geometry, Triangles, Circles"] },
      { unit: "Class 10 Board & Foundation", topics: ["Light - Reflection & Refraction, Electricity, Magnetic Effects", "Chemical Reactions, Acids-Bases-Salts, Carbon & Its Compounds", "Real Numbers, Quadratic Equations, Trigonometry, Statistics & Probability", "Life Processes, Control & Coordination, Heredity & Evolution"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "Affordable Monthly / Term Installments",
      installmentAvailable: true,
      scholarshipUpto: "Sibling & Merit Discounts Available"
    },
    ctaText: "Book Free Foundation Demo"
  },
  {
    id: "class-11-12-pcmb-boards-entrance",
    title: "Class 11th & 12th Science (PCMB) - Boards + Entrance",
    shortTitle: "Class 11th & 12th PCMB",
    category: "BOARDS",
    targetStudents: "11th & 12th Science Students (CBSE, ICSE & Maharashtra State Board)",
    duration: "1 to 2 Years",
    studentCount: "310+ Students",
    lessonCount: "300+ Smart Sessions",
    rating: "4.8 / 5.0 (Google Rated)",
    mode: ["Smart Classroom (Usmanpura)", "Classroom + Digital Notes"],
    badge: "Board + Competitive Mastery",
    subjects: [
      "Physics (Theory, Numerical & Board Derivations)",
      "Chemistry (Theory, Reactions & Practical Conceptuals)",
      "Mathematics (Pure & Applied Problem Solving)",
      "Biology (Botanical & Zoological In-depth Study)"
    ],
    batchStartDate: "Admissions Open",
    weeklyHours: "16-20 Hours",
    testFrequency: "Subjective Board Pattern Unit Tests + Competitive MCQ Drills",
    eligibility: "Class 10th Passed (CBSE / ICSE / State Board)",
    description: "Comprehensive curriculum designed for 11th and 12th Science students to achieve 90%+ scores in Board examinations alongside robust preparation for MHT-CET, JEE, and NEET.",
    detailedDescription: "Designed to eliminate the tension between Board exam subjective writing and Entrance exam multiple-choice speed. Students master textbook derivations, definitions, and high-speed numericals concurrently.",
    features: [
      "Complete coverage of Maharashtra State Board (HSC), CBSE & ICSE syllabus",
      "Rigorous subjective answer-writing practice for scoring top marks in 12th Boards",
      "Integrated competitive orientation for MHT-CET, JEE & NEET",
      "State-of-the-art air-conditioned digital classrooms at Shrinath Complex",
      "Printed comprehensive notes, formula charts & solved past 10 years board papers",
      "Continuous performance feedback shared with parents"
    ],
    syllabusOverview: [
      { unit: "Class 11 PCMB Foundation", topics: ["Physics: Units, Motion, Gravitation, Mechanical Properties, Sound", "Chemistry: Basic Concepts, Bonding, Redox, Hydrocarbons", "Maths: Trigonometry, Complex Numbers, Sequences, Straight Lines", "Biology: Biomolecules, Cell Division, Plant & Animal Tissues"] },
      { unit: "Class 12 Board Mastery", topics: ["Physics: Rotational Dynamics, Wave Optics, Current, Modern Physics", "Chemistry: Solid State, Solutions, Aldehydes & Ketones, Coordination", "Maths: Differentiation, Integration, Vectors, Linear Programming", "Biology: Reproduction in Organisms, Genetics, Enhancement in Food, Ecology"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "Easy Installment Schedule",
      installmentAvailable: true,
      scholarshipUpto: "Concession for 10th Board Achievers"
    },
    ctaText: "Book Free PCMB Demo Class"
  }
];
