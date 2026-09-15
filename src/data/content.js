export const navItems = [
  { id: 'combo', label: '⚡ 12-in-1 Combo' },
  { id: 'courses', label: '30-Day Courses' },
  { id: 'why', label: 'The Advantage' },
  { id: 'roi', label: 'Skill Calculator' },
  { id: 'testimonials', label: 'Student Proof' },
  { id: 'faq', label: 'FAQs' }
];

export const heroStats = [
  { label: 'College Students Trained', value: '14,200+' },
  { label: 'Practical Job Placement Edge', value: '94.8%' },
  { label: 'Partner Institutions', value: '180+ Colleges' },
  { label: 'Hands-on Corporate Projects', value: '100% Live' }
];

export const alertTickerMessages = [
  "🔥 Limited Time: 12-in-1 Mega Commerce Combo Active — Save 90% with code 'COLLEGE70'",
  "⚡ 94% of Commerce Graduates fail practical GST interview rounds — Master all 12 skills!",
  "🎓 Joined by students from SRCC, Christ University, St. Xavier's, Loyola, Hindu College & 180+ institutions!",
  "🚀 FastTrack Exam Bootcamps & Corporate Bundles starting this Monday!"
];

export const megaComboSkills = [
  { id: 1, name: 'GST & E-Filing Portal', icon: 'FileText', category: 'Taxation', desc: 'Live GSTR-1, 3B, 2B Reconciliation & E-Way Bills on Gov Portal' },
  { id: 2, name: 'Investment Banking', icon: 'Landmark', category: 'Valuation', desc: 'Institutional Pitch Books, Comps & M&A Transaction Structuring' },
  { id: 3, name: 'Forensic Accounting', icon: 'SearchCheck', category: 'Audit', desc: 'Balance Sheet Red Flags, Fraud Detection & Anomaly Audits' },
  { id: 4, name: 'Power BI & Dashboards', icon: 'BarChart3', category: 'Analytics', desc: 'Interactive Financial Reporting, DAX Math & Visual KPI Dashboards' },
  { id: 5, name: 'Ind AS & US GAAP', icon: 'BookMarked', category: 'Accounting', desc: 'Cross-Border Accounting Standards, Revenue Recognition & Leases' },
  { id: 6, name: 'Income Tax & ITR Filing', icon: 'ShieldAlert', category: 'Taxation', desc: 'ITR-1 to ITR-4 Computation, Chapter VI-A & Salary Tax Planning' },
  { id: 7, name: 'Financial Modelling & DCF', icon: 'TrendingUp', category: 'Valuation', desc: '3-Statement Forecasting, WACC, DCF Valuation & Sensitivity Tables' },
  { id: 8, name: 'Advanced Excel & Query', icon: 'Table', category: 'Analytics', desc: 'XLOOKUP, Power Query, Dynamic Array Formulas & Keyboard Shortcuts' },
  { id: 9, name: 'AI Finance Prompting', icon: 'Bot', category: 'Future Tech', desc: 'Automate Annual SEC Filing Audits & Financial Summaries with AI' },
  { id: 10, name: 'Tally Prime & Payroll', icon: 'Building', category: 'Accounting', desc: 'Company Setup, Voucher Entry, Inventory & BRS Reconciliation' },
  { id: 11, name: 'Stock Market & Options', icon: 'PieChart', category: 'Markets', desc: 'Price Action Trading, Technical Indicators & Option Risk Hedging' },
  { id: 12, name: 'FastTrack Exam Victory', icon: 'Zap', category: 'Academics', desc: '10-Year University Question Solutions & Semester Exam Cheat Sheets' }
];

export const mindTriggers = [
  {
    icon: 'AlertTriangle',
    title: 'The College Degree Lie',
    headline: 'Your College Syllabus is 15 Years Outdated.',
    description: 'Professors teach textbook definitions from 2008. But Wall Street, Big-4, and Top Corporates hire for live Tally Prime, GST filing, Excel Financial Models, and Tax Structuring. Without practical mastery, your degree is just a paper weight.',
    highlight: '90% of commerce grads get rejected because they cannot build a single live Excel model.'
  },
  {
    icon: 'TrendingUp',
    title: 'The Career Opportunity Divide',
    headline: 'Same College. Same Marks. Completely Different Career Track.',
    description: 'Why does a student with 65% marks secure a premier Investment Analyst role while a 90% scorer gets stuck in basic data entry? Because employers pay for PRACTICAL EXECUTION, not mugged-up theory.',
    highlight: 'Skill beats GPA every single time in corporate job interviews.'
  },
  {
    icon: 'Zap',
    title: 'The 30-Day Shortcut',
    headline: 'Master What Colleges Fail to Teach in 3 Years.',
    description: 'In just 30 days or 7 FastTrack days, Commerce Gurukulam rewires your brain with battle-tested industry skills, institutional deal decks, and C-Suite portfolio projects that make recruiters beg to hire you.',
    highlight: 'Zero useless homework. 100% portfolio-building execution.'
  }
];

export const courseCategories = [
  { id: 'all', label: '🔥 All Programs' },
  { id: '30day', label: '🏆 30-Day Master Courses' },
  { id: 'fasttrack', label: '⚡ FastTrack Sprints (3-7 Days)' },
  { id: 'exam', label: '🎓 College Exam & CA Bootcamps' }
];

export const courses = [
  // 30-DAY MASTER COURSES
  {
    id: 'course-30-gst-tax',
    category: '30day',
    badge: '🔥 BESTSELLER FOR COLLEGE STUDENTS',
    title: '30-Day Practical GST, Income Tax & E-Filing Masterclass',
    tagline: 'Become a Certified Corporate Tax Consultant before leaving college.',
    duration: '30 Days (1 Hr/Day)',
    level: 'Beginner to Advanced',
    originalPrice: '₹4,999',
    discountPrice: '₹1,499',
    enrolledCount: '4,820+ Students Enrolled',
    rating: '4.9/5 (1,240 reviews)',
    highlights: [
      'Live GSTR-1, GSTR-3B & GSTR-9 Filing on Government Portal',
      'Income Tax Return (ITR-1 to ITR-4) Real Case Filing',
      'Corporate Tax Planning & TDS/TCS Reconciliation',
      'Authorized Government Tax Practitioner Certificate'
    ],
    detailedSyllabus: [
      { week: 'Week 1', topic: 'GST Registration, Invoicing & Input Tax Credit (ITC) Mechanics' },
      { week: 'Week 2', topic: 'Live Portal Filing: GSTR-1, 3B, 2B Reconciliation & E-Way Bills' },
      { week: 'Week 3', topic: 'Income Tax Computations, Deductions, Chapter VI-A & Tax Planning' },
      { week: 'Week 4', topic: 'Live ITR-1/2/4 Filing, Client Consultation Setup & Audit Basics' }
    ],
    psychologicalPush: 'Top CA & Tax firms give immediate preference to students who can file GST independently. Don’t wait for graduation!',
    targetAudience: 'B.Com / BBA / M.Com / CA Inter Students'
  },
  {
    id: 'course-30-tally-excel',
    category: '30day',
    badge: '💼 100% PLACEMENT FOCUSED',
    title: '30-Day Tally Prime + Advanced Financial Excel Mastery',
    tagline: 'Transform into a High-Speed Corporate Accountant & Data Analyst.',
    duration: '30 Days (1 Hr/Day)',
    level: 'Beginner to Pro',
    originalPrice: '₹5,999',
    discountPrice: '₹1,299',
    enrolledCount: '5,310+ Students Enrolled',
    rating: '4.9/5 (2,100 reviews)',
    highlights: [
      'Tally Prime with GST, Inventory & Payroll Management',
      'Advanced Excel: XLOOKUP, INDEX-MATCH, Power Pivot, Macros',
      'Real Corporate Balance Sheet Finalization & MIS Reporting',
      'Includes 50+ Real Company Data Files for Practice'
    ],
    detailedSyllabus: [
      { week: 'Week 1', topic: 'Tally Prime Company Setup, Voucher Entry, Inventory & GST Configuration' },
      { week: 'Week 2', topic: 'Payroll, Bank Reconciliation Statement (BRS) & Financial Finalization' },
      { week: 'Week 3', topic: 'Advanced Excel Data Cleanup, XLOOKUP, Nested IFs & Dynamic Dashboards' },
      { week: 'Week 4', topic: 'Power Query Data Automation, MIS Report Generation & Mock Client Audits' }
    ],
    psychologicalPush: 'Excel and Tally are non-negotiable. 9 out of 10 accounting job interviews start with a 15-minute live Tally/Excel test. Crack it with 100% speed!',
    targetAudience: 'All Commerce & Management Undergraduates'
  },
  {
    id: 'course-30-financial-modeling',
    category: '30day',
    badge: '👑 HIGH GROWTH CAREER TRACK',
    title: '30-Day Wall Street Financial Modeling & DCF Valuation',
    tagline: 'Build institutional DCF & M&A Pitch Books that command Wall Street respect.',
    duration: '30 Days (1.5 Hrs/Day)',
    level: 'Intermediate to Advanced',
    originalPrice: '₹8,999',
    discountPrice: '₹1,999',
    enrolledCount: '2,940+ Students Enrolled',
    rating: '5.0/5 (980 reviews)',
    highlights: [
      '3-Statement Integrated Financial Forecasting Model',
      'DCF Valuation, WACC Calculation & Sensitivity Matrices',
      'LBO (Leveraged Buyout) & M&A Accretion/Dilution Analysis',
      'Build 3 Institutional Deal Memos for Your Resume Portfolio'
    ],
    detailedSyllabus: [
      { week: 'Week 1', topic: 'Historical Financial Analysis, Revenue Drivers & 3-Statement Integration' },
      { week: 'Week 2', topic: 'WACC Math, Unlevered Free Cash Flow (FCFF) & DCF Intrinsic Valuation' },
      { week: 'Week 3', topic: 'Relative Valuation: Comps, Precedent Transactions & Trading Multiples' },
      { week: 'Week 4', topic: 'LBO Modeling, Debt Tranches, Waterfall Returns & Executive Pitch Book Deck' }
    ],
    psychologicalPush: 'Investment Banking & Equity Research analyst roles command huge prestige. Show up to your campus placement with 3 institutional financial models!',
    targetAudience: 'B.Com (Hons), BBA Finance, MBA, CA Aspirants'
  },
  {
    id: 'course-30-stock-trading',
    category: '30day',
    badge: '📈 WEALTH & TRADING MASTERY',
    title: '30-Day Technical Analysis, Stock Market & Options Masterclass',
    tagline: 'Understand market dynamics, risk management, and smart money movement.',
    duration: '30 Days (1 Hr/Day)',
    level: 'Beginner to Trader',
    originalPrice: '₹6,499',
    discountPrice: '₹1,399',
    enrolledCount: '3,870+ Students Enrolled',
    rating: '4.8/5 (1,450 reviews)',
    highlights: [
      'Price Action Trading, Candlestick Formations & Chart Patterns',
      'Fundamental Analysis: P/E, EV/EBITDA, Balance Sheet Checks',
      'Futures & Options (F&O) Risk Hedging Strategies',
      'Live Market Paper Trading & Portfolio Management'
    ],
    detailedSyllabus: [
      { week: 'Week 1', topic: 'Market Mechanics, Order Types, Fundamental Screening & Sector Analysis' },
      { week: 'Week 2', topic: 'Price Action Patterns, Support/Resistance, Breakout Trading & Indicators' },
      { week: 'Week 3', topic: 'Options Greek Math (Delta, Theta, Vega), Hedging & Iron Condor Strategies' },
      { week: 'Week 4', topic: 'Risk-to-Reward Ratio, Trade Journaling & Simulated Live Market Trading' }
    ],
    psychologicalPush: 'Stop losing money on random social media tips. Learn institutional market analysis used by fund managers!',
    targetAudience: 'College Students wanting financial independence & stock market careers'
  },

  // FASTTRACK COURSES (3-7 DAYS)
  {
    id: 'course-ft-bcom-exam',
    category: 'fasttrack',
    badge: '⚡ 7-DAY EXAM VICTORY SPRINT',
    title: '7-Day FastTrack Corporate Accounting & Costing Exam Prep',
    tagline: 'Score 80%+ in your College Semester Exams with Zero Stress.',
    duration: '7 Days Sprint (2 Hrs/Day)',
    level: 'Exam Focused',
    originalPrice: '₹2,999',
    discountPrice: '₹699',
    enrolledCount: '6,100+ Students Enrolled',
    rating: '4.9/5 (3,400 reviews)',
    highlights: [
      'Covers 100% University Exam Important Questions & Adjustments',
      'Final Accounts, Issue of Shares, Partnership & Holding Companies',
      '10-Year Previous Question Papers Solved Live',
      'Downloadable Cheat Sheets & Formula Mind Maps'
    ],
    detailedSyllabus: [
      { week: 'Day 1-2', topic: 'Company Accounts: Issue of Shares, Forfeiture, Redemption of Debentures' },
      { week: 'Day 3-4', topic: 'Final Accounts of Companies with Complex Adjustments & Balance Sheet' },
      { week: 'Day 5-6', topic: 'Cost Sheet, Process Costing, Marginal Costing & Variance Analysis' },
      { week: 'Day 7', topic: 'Super Exam Marathon: 50 High-Frequency Numerical Mastered' }
    ],
    psychologicalPush: 'Why panic the night before exams? Master all high-weightage topics in 7 structured days and secure top university rank!',
    targetAudience: '1st, 2nd & 3rd Year B.Com / BBA Semester Students'
  },
  {
    id: 'course-ft-excel-sprint',
    category: 'fasttrack',
    badge: '⚡ 48-HOUR SPRINT',
    title: '48-Hour Corporate Excel & Dashboard Speed Bootcamp',
    tagline: 'Master the 20 Excel Shortcuts & Formulas Every Hiring Manager Tests.',
    duration: '2 Days (3 Hrs/Day)',
    level: 'Crash Course',
    originalPrice: '₹1,999',
    discountPrice: '₹499',
    enrolledCount: '8,400+ Students Enrolled',
    rating: '4.9/5 (4,120 reviews)',
    highlights: [
      'Keyboard-Only Excel Speed Drills (Throw away your mouse!)',
      'VLOOKUP, XLOOKUP, INDEX-MATCH & SUMIFS Masterclass',
      'Pivot Tables, Slicers & Interactive Visual Dashboards',
      'Includes Corporate Excel Skill Test Certificate'
    ],
    detailedSyllabus: [
      { week: 'Day 1', topic: 'Speed Shortcuts, Data Cleaning, Advanced Formulas & Conditional Formatting' },
      { week: 'Day 2', topic: 'Dynamic Pivot Tables, Interactive Dashboards & Live Corporate Test Simulation' }
    ],
    psychologicalPush: 'Need an urgent skill booster for an interview tomorrow? This 48-hour sprint gives you immediate practical confidence.',
    targetAudience: 'Students preparing for upcoming campus placement drives'
  }
];

export const roiMetrics = {
  avgPlacementTime: '24 Days Post Course',
  moneyBackGuaranteeDays: '30 Days 100% Refund'
};

export const mindsetComparison = [
  {
    feature: 'Practical Industry Skills',
    averageStudent: '❌ Zero (Only knows textbook definitions)',
    gurukulamStudent: '✅ 100% Live (Files GST, builds DCF, operates Tally)'
  },
  {
    feature: 'Excel & Data Mastery',
    averageStudent: '❌ Uses mouse for basic table borders',
    gurukulamStudent: '✅ Keyboard-only speed analyst (XLOOKUP, Macros, Dashboards)'
  },
  {
    feature: 'Resume & Portfolio',
    averageStudent: '❌ Plain PDF with generic hobbies & college grades',
    gurukulamStudent: '✅ Verified Portfolio with 5 Live Financial Project Decks'
  },
  {
    feature: 'Campus Placement Confidence',
    averageStudent: '❌ Nervous, fears technical interview questions',
    gurukulamStudent: '✅ Dominates technical rounds with real case experience'
  },
  {
    feature: 'Career Placement Outcome',
    averageStudent: '❌ Stuck in basic data entry & low growth roles',
    gurukulamStudent: '✅ High-growth Investment Banking, Tax Consulting & Corporate Roles'
  }
];

export const liveStudentNotifications = [
  { name: 'Priya Sharma', college: 'SRCC Delhi', course: '12-in-1 Mega Commerce Skill Bundle', time: '2 mins ago' },
  { name: 'Rahul Verma', college: 'Christ University Bangalore', course: '30-Day Wall Street Financial Modeling', time: '5 mins ago' },
  { name: 'Aditya Patel', college: 'St. Xavier’s Mumbai', course: '12-in-1 Mega Commerce Skill Bundle', time: '8 mins ago' },
  { name: 'Sneha K.', college: 'Loyola College Chennai', course: '7-Day FastTrack B.Com Exam Prep', time: '12 mins ago' },
  { name: 'Karan Mehta', college: 'NMIMS Mumbai', course: '30-Day Tally Prime + Advanced Excel', time: '15 mins ago' },
  { name: 'Ananya Roy', college: 'Hindu College Delhi', course: '12-in-1 Mega Commerce Skill Bundle', time: '18 mins ago' }
];

export const studentTestimonials = [
  {
    name: 'Aakash R.',
    college: 'B.Com (Hons) Final Year, Delhi University',
    courseTaken: '12-in-1 Mega Commerce Skill Bundle',
    outcomeBefore: 'Rejected in 3 campus drives',
    outcomeAfter: 'Landed Analyst Role at EY',
    quote: 'My college taught accounting theory for 3 years, but I couldn’t build a basic DCF model or file GST. In the 12-in-1 Mega Combo, I learned Financial Modeling, Power BI, and GST filing in 30 days. The EY interview partner was blown away!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Meera Nambiar',
    college: 'BBA Finance, Christ University',
    courseTaken: '30-Day Practical GST & Income Tax Masterclass',
    outcomeBefore: 'Struggling for unpaid internships',
    outcomeAfter: 'Got Corporate Tax Consultancy Internship',
    quote: 'During my interview at a top tax consultancy, they asked if I knew live GSTR-3B filing. Thanks to Gurukulam, I opened the portal setup and explained ITC reconciliation line by line. I got hired on the spot!',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Siddharth Jain',
    college: 'B.Com 2nd Year & CA Aspirant',
    courseTaken: '7-Day FastTrack Exam Prep + 48-Hr Excel Sprint',
    outcomeBefore: 'Scored 58% in 1st Semester',
    outcomeAfter: 'Scored 84% in Semester Exam & Built Dashboards',
    quote: 'The 7-Day FastTrack course saved my semester. The mind maps and question predictions were 100% accurate. Plus, the 48-Hr Excel course helped me build dashboards that got me a remote research role!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  }
];

export const faqs = [
  {
    question: 'What is included in the 12-in-1 Mega Commerce Skill Bundle?',
    answer: 'The 12-in-1 Mega Bundle gives you all 12 core commerce master modules: GST Filing, Investment Banking & M&A, Forensic Accounting, Power BI, Ind AS & US GAAP, Income Tax & ITR, Financial Modeling & DCF, Advanced Excel, AI Prompting, Tally Prime, Stock Market Options, and FastTrack Semester Exam Prep!'
  },
  {
    question: 'I am a 1st year college student with zero practical experience. Can I join?',
    answer: 'Absolutely! All our courses and the 12-in-1 bundle are built step-by-step specifically for college students. We start from ground zero and guide you until you are building real corporate files.'
  },
  {
    question: 'How do 30-Day Courses and FastTrack Courses work alongside college classes?',
    answer: 'All sessions require only 1 to 1.5 hours daily. You get lifetime access to recorded video modules, downloadable Excel sheets, live Q&A mentor rooms, and flexible schedules so your college attendance is never affected.'
  },
  {
    question: 'Will I get an official government / corporate recognized certificate?',
    answer: 'Yes! Every course includes an ISO-certified, employer-verifiable Certificate of Completion with a unique QR code and portfolio link that you can directly add to your LinkedIn profile and resume.'
  },
  {
    question: 'What is the 100% Money-Back Guarantee policy?',
    answer: 'We are so confident in our practical training that if you complete the first 7 days of any course or bundle and feel it hasn’t upgraded your practical skills, we will refund 100% of your fee with zero questions asked.'
  },
  {
    question: 'How do I claim the 70% College Student Discount?',
    answer: 'Simply click "Enroll Now" on any course card or click the "Claim 12-Course Bundle" button. Use the instant coupon code COLLEGE70 at checkout to lock in the special pricing!'
  }
];
