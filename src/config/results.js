/**
 * RESULTS & TOPPERS ARCHIVE DATA MODEL
 * 
 * Production-ready results structure for JEE Advanced, JEE Main, NEET-UG, MHT-CET.
 * Supports filtering by exam and year, featured toppers, and selection summary counts.
 */

export const resultSummary = {
  totalSelections: "1,450+",
  iitSelections: "320+",
  aiimsSelections: "115+",
  top1000AirCount: "84",
  stateCet99Percentile: "410+",
  headline: "Consistent Rank Creation Year After Year",
  subHeadline: "Our students don't just clear exams — they secure top ranks in India's hardest competitive tests through structured preparation and personal mentoring."
};

export const toppers = [
  {
    id: "t1",
    name: "Arjun S. Patil",
    exam: "JEE Advanced",
    year: 2026,
    rank: "AIR 42",
    score: "328 / 360",
    courseJoined: "2-Year Integrated JEE Batch",
    allocatedCollege: "IIT Bombay (Computer Science & Engineering)",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    quote: "Apex Momentum's daily 2-hour doubt desk and test analysis reports transformed my physics numerical speed. Faculty guidance kept me focused when tests got tough.",
    featured: true
  },
  {
    id: "t2",
    name: "Dr. Ananya R. Deshmukh",
    exam: "NEET UG",
    year: 2026,
    rank: "AIR 118",
    score: "710 / 720",
    courseJoined: "2-Year Comprehensive Medical Batch",
    allocatedCollege: "AIIMS New Delhi",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    quote: "NCERT line-by-line Biology workbooks provided by Apex Academy ensured 360/360 in Bio. The test series perfectly matched the actual NEET paper difficulty.",
    featured: true
  },
  {
    id: "t3",
    name: "Rohan V. Kulkarni",
    exam: "JEE Main",
    year: 2026,
    rank: "99.96 %ile",
    score: "285 / 300 (Maths 100 %ile)",
    courseJoined: "2-Year Classroom Program",
    allocatedCollege: "IIT Madras (Electrical Engg)",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    quote: "The small batch size of 35 meant every teacher knew my weak chapters. Personal mentoring made a huge difference in my rank.",
    featured: true
  },
  {
    id: "t4",
    name: "Priya M. Jadhav",
    exam: "MHT-CET",
    year: 2026,
    rank: "99.94 %ile",
    score: "State Rank 14",
    courseJoined: "1-Year CET Booster Batch",
    allocatedCollege: "COEP Technological University (CSE)",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    quote: "The CET speed drills and computer-based mock exams removed my examination fear completely. Highly grateful to Apex teachers!",
    featured: true
  },
  {
    id: "t5",
    name: "Aditya P. Shinde",
    exam: "JEE Advanced",
    year: 2025,
    rank: "AIR 156",
    score: "298 / 360",
    courseJoined: "Dropper Rank Booster Batch",
    allocatedCollege: "IIT Delhi (Mechanical Engineering)",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    quote: "Taking a drop year was intimidating, but the disciplined environment and peer group at Apex turned my dream of IIT Delhi into reality.",
    featured: false
  },
  {
    id: "t6",
    name: "Sneha G. Joshi",
    exam: "NEET UG",
    year: 2025,
    rank: "AIR 240",
    score: "702 / 720",
    courseJoined: "2-Year Medical Batch",
    allocatedCollege: "Seth GS Medical College (KEM Hospital, Mumbai)",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
    quote: "Faculty members were accessible till 8 PM every day for doubt clearing. You never feel alone during preparation here.",
    featured: false
  },
  {
    id: "t7",
    name: "Omkar N. Chavan",
    exam: "JEE Main",
    year: 2025,
    rank: "99.88 %ile",
    score: "Physics 100 %ile",
    courseJoined: "2-Year JEE Batch",
    allocatedCollege: "VNIT Nagpur (Computer Science)",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
    quote: "Weekly performance analysis tracking helped me eliminate negative marking completely.",
    featured: false
  },
  {
    id: "t8",
    name: "Vaishnavi K. More",
    exam: "BOARDS",
    year: 2026,
    rank: "98.4 %",
    score: "PCM 297/300",
    courseJoined: "HSC Integrated Board + CET",
    allocatedCollege: "Government College of Engineering",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    quote: "Balanced focus on both Board subjective answers and CET objective tricks gave me top scores in both exams.",
    featured: false
  }
];

export const examCategories = ["ALL", "JEE Advanced", "JEE Main", "NEET UG", "MHT-CET", "BOARDS"];
export const availableYears = [2026, 2025, 2024];
