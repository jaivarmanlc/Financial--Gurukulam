import { useState } from 'react';
import { Calculator, TrendingUp, Award, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function ROICalculator({ onEnrollClick }) {
  const [collegeYear, setCollegeYear] = useState('3rd');
  const [selectedCourseType, setSelectedCourseType] = useState('30day-modeling');

  // Skill impact data without salary/LPA numbers
  const getCalculationData = () => {
    switch (selectedCourseType) {
      case '30day-modeling':
        return {
          role: 'Investment Banking & Equity Analyst',
          careerImpact: 'Institutional Valuation & M&A Pitch Books',
          practicalAdvantage: '3 Live Deal Models for Resume Portfolio',
          fee: '₹1,999',
          skillMultiplier: '10x Speed',
          hiringChance: '96%'
        };
      case '30day-gst':
        return {
          role: 'Corporate Tax Consultant & GST Specialist',
          careerImpact: 'Government Portal E-Filing & Audit Mastery',
          practicalAdvantage: 'Independent Client Practice & CA Office Ready',
          fee: '₹1,499',
          skillMultiplier: '100% Practical',
          hiringChance: '94%'
        };
      case '30day-tally':
        return {
          role: 'Corporate Accountant & MIS Data Analyst',
          careerImpact: 'Tally Prime Payroll & Dynamic Excel Dashboards',
          practicalAdvantage: 'Master 20+ Keyboard Speed Shortcuts & Power Query',
          fee: '₹1,299',
          skillMultiplier: 'Top Speed Analyst',
          hiringChance: '92%'
        };
      default:
        return {
          role: 'Semester Distinction & Placement Ready',
          careerImpact: '80%+ University Semester Distinction',
          practicalAdvantage: '10-Year Question Paper Mastery & Mind Maps',
          fee: '₹699',
          skillMultiplier: '7-Day Sprint',
          hiringChance: '90%'
        };
    }
  };

  const data = getCalculationData();

  return (
    <section id="roi" className="relative py-20 bg-[#020814] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300">
            <Calculator size={14} /> STUDENT SKILL MULTIPLIER
          </span>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Calculate Your Skill & Career Advantage <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300">
              Before You Start Your Course
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Investing ₹699 - ₹1,999 in practical skills isn't an expense — it's the highest yielding skill upgrade of your entire college life.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          
          {/* Left Inputs */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-800 bg-[#051124] p-6 sm:p-8">
            
            <h3 className="text-xl font-bold font-serif text-white mb-6 flex items-center gap-2">
              <Sparkles size={18} className="text-amber-400" /> Select Your Details
            </h3>

            {/* Input 1: College Year */}
            <div className="mb-6">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                1. What is your current college status?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: '1st', label: '1st Year' },
                  { id: '2nd', label: '2nd Year' },
                  { id: '3rd', label: 'Final Year' },
                  { id: 'grad', label: 'Graduated' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCollegeYear(item.id)}
                    className={`rounded-xl py-2.5 px-3 text-xs font-extrabold transition border ${
                      collegeYear === item.id
                        ? 'bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 border-amber-400 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Selected Course Track */}
            <div className="mb-6">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                2. Which 30-Day or FastTrack Skill do you want?
              </label>
              <div className="space-y-2.5">
                {[
                  { id: '30day-modeling', label: '30-Day Wall Street Financial Modeling (IB / PE Track)', fee: '₹1,999' },
                  { id: '30day-gst', label: '30-Day Practical GST & Income Tax Masterclass', fee: '₹1,499' },
                  { id: '30day-tally', label: '30-Day Tally Prime + Advanced Corporate Excel', fee: '₹1,299' },
                  { id: 'fasttrack', label: '7-Day FastTrack Exam Victory / 48-Hr Excel Sprint', fee: '₹699' }
                ].map((track) => (
                  <div
                    key={track.id}
                    onClick={() => setSelectedCourseType(track.id)}
                    className={`rounded-xl p-3.5 border cursor-pointer transition flex items-center justify-between ${
                      selectedCourseType === track.id
                        ? 'bg-emerald-950/40 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs font-bold">{track.label}</span>
                    <span className="text-xs font-black text-amber-300 bg-amber-400/10 px-2 py-1 rounded border border-amber-400/20">
                      {track.fee}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Psychological Callout */}
            <div className="rounded-xl bg-slate-900/80 p-4 border border-slate-800 text-xs text-slate-300 font-medium">
              💡 <strong className="text-amber-300">College Fact:</strong> Investing {data.fee} today equips you with verified portfolio skills that set you apart from 10,000+ competitors in campus interviews.
            </div>

          </div>

          {/* Right Results Output Card */}
          <div className="lg:col-span-6 rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-[#07192e] to-[#04101e] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-bl-xl">
              SKILL OUTCOME
            </div>

            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">ESTIMATED CAREER IMPACT</span>
            <h3 className="text-2xl font-bold font-serif text-white mt-1 mb-6">
              {data.role}
            </h3>

            {/* Big Stats Row */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl bg-slate-950/80 p-4 border border-slate-800">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">Practical Skill Mastery</p>
                <p className="text-base font-black text-amber-300 mt-1.5 leading-snug">{data.careerImpact}</p>
                <p className="text-[10px] text-emerald-400 font-medium mt-1">100% Live Case Files</p>
              </div>

              <div className="rounded-2xl bg-slate-950/80 p-4 border border-slate-800">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">Placement Portfolio Edge</p>
                <p className="text-xs font-bold text-emerald-400 mt-1.5 leading-snug">{data.practicalAdvantage}</p>
                <p className="text-[10px] text-slate-400 font-medium mt-1">Verified Resume Credential</p>
              </div>
            </div>

            {/* Skill Multiplier Highlight */}
            <div className="rounded-2xl border border-amber-400/40 bg-gradient-to-r from-amber-500/10 to-emerald-500/10 p-5 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">Speed & Mastery Multiplier</p>
                  <p className="text-2xl font-black text-white mt-0.5">{data.skillMultiplier}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 font-medium">Interview Selection Probability</p>
                  <p className="text-xl font-bold text-emerald-300">{data.hiringChance}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={onEnrollClick}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-emerald-400 to-emerald-500 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 hover:scale-[1.02] transition shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              Lock In {data.fee} Student Pricing <ArrowRight size={16} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
