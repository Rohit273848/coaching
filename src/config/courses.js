/**
 * COURSES & ACADEMIC PROGRAMS DATA MODEL
 * 
 * Saarthi Education Offerings: Banking (IBPS, SBI, RBI, RRB), MCAER (Agri PG-CET),
 * AFO (Agriculture Field Officer), and SSC / Govt Competitive Exams.
 */

export const courses = [
  {
    id: "banking-master-batch",
    title: "BANKING Comprehensive Master Program",
    marathiTitle: "बँकिंग संपूर्ण तयारी बॅच (IBPS, SBI, RBI, RRB)",
    shortTitle: "Banking Master Batch",
    category: "BANKING",
    targetStudents: "Graduates / Final Year Students Preparing for Banking",
    duration: "25 weeks",
    studentCount: "653+",
    lessonCount: "180+ Lessons",
    rating: "4.9 / 5.0",
    mode: ["Offline Classroom", "Online Live + Recorded"],
    badge: "Most Popular",
    subjects: [
      "Quantitative Aptitude",
      "Reasoning Ability & Puzzles",
      "English Language & Vocab",
      "Banking Awareness & Economy",
      "Computer Knowledge",
      "Current Affairs & GD/PI"
    ],
    batchStartDate: "1st September 2026",
    weeklyHours: "20 Hours (Classes + Daily Speed Tests)",
    testFrequency: "Daily Sectional Quizzes + Weekly Full-Length IBPS/SBI Mock Tests",
    eligibility: "Any Degree Graduate / Final Year Appearing",
    description: "सारथी एज्युकेशनचा बँकिंग कोर्स हा IBPS, SBI, RBI आणि इतर बँकिंग परीक्षांची संपूर्ण तयारी करून देतो. अनुभवी शिक्षक, नियमित टेस्ट, दर्जेदार नोट्स आणि मुलाखत मार्गदर्शनासह संपूर्ण अभ्यासक्रम पूर्ण केला जातो.",
    detailedDescription: "A structured, mentor-led program designed for high speed and accuracy in Pre, Mains, and Interview stages of IBPS PO/Clerk, SBI PO/Clerk, RBI Assistant/Grade B, and Regional Rural Banks (RRBs).",
    features: [
      "Zero-to-Advanced Quantitative Aptitude with short tricks & Vedic Math",
      "High-level Reasoning & Puzzle Mastery for Prelims and Mains cutoff clearing",
      "Daily Banking & Financial Awareness with weekly current affairs capsules",
      "Computer-Based Test (CBT) Series matching exact TCS-iON exam interface",
      "Special 1-on-1 Doubt Clearing Sessions with Senior Quant & Reasoning Faculty",
      "Free Silent Study Library & Computer Lab Access for all offline students",
      "Exclusive Mock Interview Panels with retired Bank Managers & Officers"
    ],
    syllabusOverview: [
      { unit: "Quantitative Aptitude", topics: ["Simplification & Approximation", "Number Series & Quadratic Equations", "Data Interpretation (DI & Caselets)", "Arithmetic Word Problems (Percentages, Ratio, SI-CI, Time & Work)"] },
      { unit: "Reasoning Ability", topics: ["Seating Arrangement & High-level Puzzles", "Syllogism (Only a few cases)", "Inequalities & Coding-Decoding", "Critical Reasoning & Input-Output", "Blood Relations & Direction Sense"] },
      { unit: "English Language", topics: ["Reading Comprehension (Economy & Tech based)", "Cloze Test & Error Spotting", "Para Jumbles & Sentence Rearrangement", "Grammar Rules & Vocabulary Builder"] },
      { unit: "General & Banking Awareness", topics: ["RBI Monetary Policy & Functions", "Banking Terminologies & NPA Management", "Govt Schemes & Union Budget", "National & International Current Affairs (Last 6 Months)"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "Affordable Installments",
      installmentAvailable: true,
      scholarshipUpto: "Special Early Bird Discount Available"
    },
    ctaText: "Enroll in Banking Batch"
  },
  {
    id: "mcaer-pg-cet-batch",
    title: "MCAER PG-CET (Agricultural Post Graduate CET)",
    marathiTitle: "MCAER PG-CET कृषी पदव्युत्तर प्रवेश परीक्षा बॅच",
    shortTitle: "MCAER PG-CET Batch",
    category: "MCAER",
    targetStudents: "B.Sc (Agriculture) & Allied Degree Students",
    duration: "25 weeks",
    studentCount: "465+",
    lessonCount: "160+ Lessons",
    rating: "4.9 / 5.0",
    mode: ["Offline Classroom", "Online Live"],
    badge: "State Toppers Choice",
    subjects: [
      "Agronomy",
      "Genetics & Plant Breeding",
      "Horticulture",
      "Soil Science & Agri Chemistry",
      "Agri Economics & Extension",
      "Plant Pathology & Entomology"
    ],
    batchStartDate: "1st September 2026",
    weeklyHours: "18 Hours (Specialized Domain Lectures)",
    testFrequency: "Chapterwise Subject Drills + 20 Full-Length MCAER Mocks",
    eligibility: "B.Sc (Agri / Horti / Forestry / Agri-BioTech) Passed or Final Year",
    description: "MCAER PG-CET हा महाराष्ट्रातील कृषी पदव्युत्तर प्रवेश परीक्षेसाठी खास तयार केलेला अभ्यासक्रम आहे. अनुभवी शिक्षकांचे मार्गदर्शन, नवीन अभ्यासक्रमानुसार अध्यापन आणि नियमित टेस्ट सिरीजमुळे विद्यार्थ्यांचे सरकारी कृषी विद्यापीठांमध्ये प्रवेशाचे स्वप्न पूर्ण होते.",
    detailedDescription: "Comprehensive preparation for Maharashtra Council of Agricultural Education and Research (MCAER) PG-CET for admission to M.Sc (Agri) in state agricultural universities (MPKV Rahuri, VNMKV Parbhani, PDKV Akola, Dr. BSKKV Dapoli).",
    features: [
      "Subject-wise deep coverage strictly according to latest MCAER Syllabus guidelines",
      "Concise conceptual notes & summary tables for quick revision",
      "10-Year Previous Years Question (PYQ) analysis and discussion",
      "OMR and CBT Mock Test Series with State Rank Prediction",
      "Guidance by Agri Subject Specialists & Past MCAER University Rankers",
      "Hostel & Library Assistance in Chhatrapati Sambhajinagar"
    ],
    syllabusOverview: [
      { unit: "Agronomy & Soil Science", topics: ["Principles of Agronomy", "Field Crops (Kharif & Rabi)", "Weed & Water Management", "Soil Fertility, Pedology & Fertilizer Chemistry"] },
      { unit: "Genetics, Breeding & Seed Tech", topics: ["Mendelian Genetics & Cytogenetics", "Plant Breeding Methods & Heterosis", "Seed Production Technology", "Biotechnology Fundamentals"] },
      { unit: "Horticulture & Plant Protection", topics: ["Pomology, Olericulture & Floriculture", "Plant Pathology, Fungal & Viral Diseases", "Economic Entomology & Integrated Pest Management"] },
      { unit: "Economics & Extension", topics: ["Agri Marketing & Farm Management", "Extension Methods & Rural Sociology", "Agri Statistics & Experimental Designs"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "Affordable Fee Structure",
      installmentAvailable: true,
      scholarshipUpto: "Merit Discount Available"
    },
    ctaText: "Enroll in MCAER Batch"
  },
  {
    id: "afo-agriculture-field-officer",
    title: "IBPS AFO (Agriculture Field Officer - Specialist Officer)",
    marathiTitle: "IBPS AFO कृषी अधिकारी विशेष बॅच",
    shortTitle: "IBPS AFO Specialist",
    category: "BANKING",
    targetStudents: "B.Sc Agri & Allied Graduates Targeting Scale-I Bank Officer",
    duration: "25 weeks",
    studentCount: "380+",
    lessonCount: "175+ Lessons",
    rating: "4.9 / 5.0",
    mode: ["Offline Classroom", "Online Hybrid"],
    badge: "High Selection Record",
    subjects: [
      "Prelims (Quant, Reasoning, English)",
      "Mains (Professional Agri Knowledge)",
      "Govt Agri Schemes & NABARD Norms",
      "Mock Interview Panel"
    ],
    batchStartDate: "1st September 2026",
    weeklyHours: "22 Hours",
    testFrequency: "Dual Track: Prelims Speed Tests + Mains Subject Tests",
    eligibility: "4-Year B.Sc Agriculture / Horticulture / Agri Engg / Forestry Graduate",
    description: "IBPS SO Agriculture Field Officer (Scale-I) पदासाठी पूर्व, मुख्य आणि मुलाखतीची संपूर्ण एकात्मिक तयारी. व्यावसायिक कृषी ज्ञान आणि बँकिंग पूर्व परीक्षेचा परिपूर्ण सराव.",
    detailedDescription: "A specialized double-advantage course tailored for Agri graduates aiming to crack IBPS AFO in top Nationalized Commercial Banks (PNB, BOB, Canara, Indian Bank, CBI).",
    features: [
      "Simultaneous training for Phase-I Prelims speed and Phase-II Professional Knowledge",
      "Complete coverage of NABARD guidelines, Priority Sector Lending (PSL), and Agri census",
      "Specialized study notes for Animal Husbandry, Fisheries, Dairy & Forestry",
      "Daily Mains question practice + previous 5 years AFO solved papers",
      "Exclusive mock interview sessions with real feedback from banking panels"
    ],
    syllabusOverview: [
      { unit: "Phase 1: Prelims Section", topics: ["Quantitative Aptitude (Speed Math & DI)", "Reasoning Ability (Puzzles & Logic)", "English Language for Qualifying Marks"] },
      { unit: "Phase 2: Professional Agri Knowledge", topics: ["Agronomy & Field Crops", "Horticulture & Post Harvest Technology", "Soil Science & Nutrient Management", "Animal Husbandry, Dairy & Poultry"] },
      { unit: "Agri Schemes & Current Trends", topics: ["PM-KISAN, PMFBY, AIF & KCC Guidelines", "NABARD Model Schemes & Unit Costs", "Recent Agri Statistics & MSP Announcements"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "Affordable Fee",
      installmentAvailable: true,
      scholarshipUpto: "Early Admission Benefit"
    },
    ctaText: "Enroll in AFO Batch"
  },
  {
    id: "ssc-railway-central-govt",
    title: "SSC CGL / CHSL & Railway RRB Foundation Batch",
    marathiTitle: "SSC व रेल्वे भरती परीक्षा फाउंडेशन बॅच",
    shortTitle: "SSC & Railway Govt Batch",
    category: "GOVT EXAMS",
    targetStudents: "12th / Graduate Students Targeting Central Govt Jobs",
    duration: "20 weeks",
    studentCount: "290+",
    lessonCount: "140+ Lessons",
    rating: "4.8 / 5.0",
    mode: ["Offline Classroom", "Online Support"],
    badge: "Complete Syllabus",
    subjects: [
      "Mathematics (Arithmetic & Advanced)",
      "General Intelligence & Reasoning",
      "English Comprehension",
      "General Studies (History, Polity, Geo, Sci)"
    ],
    batchStartDate: "1st September 2026",
    weeklyHours: "16 Hours",
    testFrequency: "Weekly TCS-Pattern CBT Mock Exams",
    eligibility: "12th Pass or Any Graduate",
    description: "कर्मचारी निवड आयोग (SSC) आणि रेल्वे भरती बोर्ड (RRB) च्या सर्व परीक्षांची संपूर्ण अभ्यासक्रमानुसार एकाच बॅचमध्ये प्रभावी तयारी.",
    detailedDescription: "Structured foundation coaching for SSC CGL, CHSL, MTS, CPO, and Railway NTPC & Group D exams with specialized focus on Advanced Mathematics and General Studies.",
    features: [
      "Step-by-step Advanced Math tricks (Algebra, Geometry, Trigonometry, Mensuration)",
      "Concise General Science and Indian Polity & History bullet notes",
      "Extensive TCS-pattern previous years question drill (2019-2025)",
      "Typing guidance & computer skill test readiness"
    ],
    syllabusOverview: [
      { unit: "Quantitative & Advanced Math", topics: ["Arithmetic Master Series", "Geometry & Mensuration 2D/3D", "Trigonometry & Heights-Distances", "Algebra & Number System"] },
      { unit: "General Awareness", topics: ["Indian Constitution & Polity", "Physical & Indian Geography", "Indian History & Freedom Struggle", "Physics, Chemistry & Biology Basics", "Static GK & Current Affairs"] }
    ],
    feeStructure: {
      showFee: false,
      annualFee: "Standard Fee",
      installmentAvailable: true,
      scholarshipUpto: "Batch Concession Available"
    },
    ctaText: "Enroll in SSC Batch"
  }
];
