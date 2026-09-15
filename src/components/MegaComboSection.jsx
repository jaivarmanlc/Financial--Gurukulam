import { useState } from 'react';
import { megaComboSkills } from '../data/content';
import { 
  FileText, Landmark, SearchCheck, BarChart3, BookMarked, 
  ShieldAlert, TrendingUp, Table, Bot, Building, PieChart, 
  Zap, Gift, ArrowRight, CheckCircle2, Sparkles, Star, Tag, Award 
} from 'lucide-react';

export default function MegaComboSection({ onEnrollClick }) {
  const [activeSkillId, setActiveSkillId] = useState(1);

  // Map string icon names to Lucide components
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'FileText': return <FileText className="text-emerald-400" size={18} />;
      case 'Landmark': return <Landmark className="text-amber-400" size={18} />;
      case 'SearchCheck': return <SearchCheck className="text-cyan-400" size={18} />;
      case 'BarChart3': return <BarChart3 className="text-purple-400" size={18} />;
      case 'BookMarked': return <BookMarked className="text-blue-400" size={18} />;
      case 'ShieldAlert': return <ShieldAlert className="text-red-400" size={18} />;
      case 'TrendingUp': return <TrendingUp className="text-emerald-400" size={18} />;
      case 'Table': return <Table className="text-teal-400" size={18} />;
      case 'Bot': return <Bot className="text-cyan-300" size={18} />;
      case 'Building': return <Building className="text-amber-300" size={18} />;
      case 'PieChart': return <PieChart className="text-indigo-400" size={18} />;
      default: return <Zap className="text-amber-400" size={18} />;
    }
  };

  const selectedSkill = megaComboSkills.find(s => s.id === activeSkillId) || megaComboSkills[0];

  return (
    <section id="combo" className="relative py-20 bg-gradient-to-b from-[#020712] via-[#061226] to-[#020712] overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-purple-600/10 via-amber-500/10 to-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-1.5 text-xs font-bold text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] mb-4">
            <Sparkles size={14} className="text-amber-400" />
            <span>EXECUTIVE 12-IN-1 SKILL COMBO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Master Skills That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300">
              Keep You Ahead
            </span>
          </h2>

          <div className="mt-4 inline-block rounded-2xl border border-emerald-500/40 bg-emerald-950/40 px-6 py-2">
            <p className="text-sm sm:text-base font-extrabold text-emerald-300 tracking-wide">
              🎯 Grab Our 12-Course Mega Combo Now:
            </p>
          </div>

        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 12 Skill Pills Grid (Mirroring Grant Thornton Poster Aesthetic) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-800 bg-[#040e1c]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                12 INCLUDED MASTER MODULES
              </span>
              <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                ALL-ACCESS PASS
              </span>
            </div>

            {/* 2-Column Skill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {megaComboSkills.map((skill) => (
                <div
                  key={skill.id}
                  onClick={() => setActiveSkillId(skill.id)}
                  className={`group rounded-2xl p-3.5 border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    activeSkillId === skill.id
                      ? 'bg-gradient-to-r from-slate-900 to-emerald-950/60 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] scale-[1.02]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-slate-950 p-2 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition">
                      {getIconComponent(skill.icon)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className={`text-[10px] font-black rounded-full px-2 py-0.5 ${
                    activeSkillId === skill.id ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    ✓ Live
                  </span>
                </div>
              ))}
            </div>

            {/* Dynamic Active Skill Detail Box */}
            <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-950/20 p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Sparkles size={14} /> MODULE HIGHLIGHT: {selectedSkill.name}
                </span>
                <span className="text-[10px] text-emerald-400 font-bold">100% PRACTICAL</span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {selectedSkill.desc}
              </p>
            </div>

          </div>

          {/* Right Column: High-Impact Promo Banner & Student Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-[#071a2e] via-[#041120] to-[#020914] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            
            {/* Top Student Badge Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-amber-400" />
                  <span className="text-xs font-extrabold text-amber-300 uppercase tracking-wider">OFFICIAL COLLEGE BUNDLE</span>
                </div>
                <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-[10px] font-extrabold text-emerald-300">
                  SAVE 90%
                </span>
              </div>

              <div className="py-6">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Why Learn 1 Skill When You Can Command All 12?
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Top corporate firms don't look for one-dimensional graduates. They select students who know GST filing, Financial Modeling, Power BI dashboards, and Tally Prime altogether.
                </p>

                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Lifetime Recording Access & Resource Sheets</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>12 ISO-Verified Resume Credential Certificates</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>100% Fee-Back Guarantee If Not Satisfied</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Massive Irresistible Value Box (Inspired by the Gift Banner in image) */}
            <div className="rounded-2xl border-2 border-purple-500/50 bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 p-5 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4">
                
                {/* Gift Icon Box */}
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-purple-500 p-0.5 flex-shrink-0 shadow-lg">
                  <div className="h-full w-full bg-[#080d1a] rounded-[14px] flex items-center justify-center">
                    <Gift size={28} className="text-amber-300 animate-bounce" />
                  </div>
                </div>

                {/* Offer Price Details */}
                <div>
                  <p className="text-xs font-bold text-purple-200">
                    Get All These 12 Courses @
                  </p>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-sm text-slate-400 line-through font-bold">INR 45,000</span>
                    <span className="text-2xl sm:text-3xl font-black text-amber-300">₹2,499</span>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase">+ GST</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5 flex items-center gap-1">
                    <Tag size={10} className="text-amber-400" /> 70% College Grant Code <strong className="text-amber-300">COLLEGE70</strong> Applied!
                  </p>
                </div>

              </div>

              {/* Instant Enrollment CTA */}
              <button
                onClick={() => onEnrollClick({ title: '12-in-1 Mega Commerce Skill Bundle', discountPrice: '₹2,499' })}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-emerald-400 to-emerald-500 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 hover:scale-105 transition shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                Grab 12-Course Combo Now <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
