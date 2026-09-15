import { motion } from 'framer-motion';
import { ArrowRight, Zap, CheckCircle2, ShieldCheck, Sparkles, Award, TrendingUp, BookOpen, Clock } from 'lucide-react';
import { heroStats } from '../data/content';

export default function Hero({ onApplyClick, onExploreCourses }) {
  return (
    <section className="relative overflow-hidden pt-10 pb-20">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_35%),radial-gradient(circle_at_85%_20%,_rgba(16,185,129,0.15),_transparent_30%),radial-gradient(circle_at_15%_70%,_rgba(139,92,246,0.12),_transparent_35%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left Column: Mind-Manipulating Copywriting */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            
            {/* Top Student Urgency Badge */}
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span>🎓 FOR COLLEGE STUDENTS & COMMERCE GRADUATES</span>
              <span className="text-amber-400/50">|</span>
              <span className="text-emerald-300 font-extrabold flex items-center gap-1">
                <Clock size={12} /> 30-DAY & FASTTRACK COURSES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-slate-100">Stop Relying On 10-Year-Old </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-amber-400">College Theory.</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                Master High-Demand Corporate Skills In 30 Days.
              </span>
            </h1>

            {/* Mind-Manipulating Subheadline */}
            <p className="mt-6 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
              Why do 90% of commerce graduates struggle in entry-level interviews? Because colleges teach outdated 2008 textbooks. <strong className="text-amber-300">Commerce Gurukulam</strong> gives you live corporate mastery in <strong className="text-emerald-300">GST filing, Tally Prime, Excel Financial Modeling & Stock Markets</strong> in just 30 days or FastTrack 7 days!
            </p>

            {/* Psychological Value Bullets */}
            <div className="mt-6 space-y-2.5">
              <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">100% Practical & Live Portal Access:</strong> File real GST returns & build Excel dashboards.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">College-Friendly Hours:</strong> Only 1 hour daily — fits perfectly alongside your degree.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                <span><strong className="text-amber-300">100% Fee-Back Guarantee:</strong> Master practical skills or get a 100% refund.</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a 
                href="#courses"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-400 via-emerald-400 to-emerald-500 px-8 py-4 text-base font-extrabold text-slate-950 shadow-[0_0_35px_rgba(16,185,129,0.35)] transition hover:scale-105 hover:shadow-[0_0_45px_rgba(245,158,11,0.5)] cursor-pointer"
              >
                Explore 30-Day Courses <ArrowRight size={20} />
              </a>

              <button 
                onClick={onApplyClick} 
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-6 py-4 text-sm font-bold text-amber-300 transition hover:bg-amber-400/20 hover:border-amber-400/70 cursor-pointer"
              >
                <Sparkles size={16} /> Claim 70% College Discount
              </button>
            </div>

            {/* Guarantee Tag */}
            <div className="mt-5 flex items-center gap-3 text-xs text-slate-400 font-medium">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>ISO Certified Certificate • Lifetime Recording Access • 100% Money-Back Guarantee</span>
            </div>

          </motion.div>

          {/* Right Column: Dynamic Visual Student Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.1 }} 
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-cyan-500/20 blur-2xl opacity-60" />
            
            <div className="relative rounded-3xl border border-emerald-500/30 bg-[#061122]/90 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
              
              {/* Top Header Card */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">STUDENT TRANSFORMATION CARD</span>
                  <h3 className="text-xl font-bold text-white font-serif">College Student to High-Demand Professional</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-bold">
                  94%
                </div>
              </div>

              {/* Middle Comparison Widget */}
              <div className="mt-6 space-y-4">
                
                {/* Traditional College Path */}
                <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-red-400 uppercase">Traditional College Path</span>
                    <span className="text-xs font-bold text-red-400">Limited Roles</span>
                  </div>
                  <p className="text-xs text-slate-300">3 Years of Theory ➔ Zero Practical Skills ➔ Struggling in Campus Placement Interviews</p>
                </div>

                {/* Gurukulam 30-Day Path */}
                <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[9px] font-black uppercase px-2 py-0.5 rounded-bl">
                    FASTTRACK SUCCESS
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-emerald-300 uppercase flex items-center gap-1">
                      <Zap size={13} className="text-amber-400 fill-amber-400" /> Gurukulam 30-Day Path
                    </span>
                    <span className="text-xs font-black text-amber-300">Premier Corporate Roles</span>
                  </div>
                  <p className="text-xs text-slate-200 font-medium">30 Days Practical Skills ➔ Live GST/Tally Portfolio ➔ High-Growth Corporate & Big-4 Placement Edge</p>
                </div>

              </div>

              {/* Quick Stat Badges */}
              <div className="mt-6 grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
                <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                  <p className="text-xs text-slate-400 font-medium">Avg Student Rating</p>
                  <p className="text-lg font-black text-amber-300">4.9 / 5.0 ⭐</p>
                </div>
                <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                  <p className="text-xs text-slate-400 font-medium">College Alumni</p>
                  <p className="text-lg font-black text-emerald-400">180+ Colleges</p>
                </div>
              </div>

              {/* Bottom Instant Enroll Callout */}
              <div className="mt-6 text-center">
                <button
                  onClick={onApplyClick}
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 py-3 text-xs font-extrabold text-slate-950 uppercase tracking-wider hover:opacity-95 transition"
                >
                  Apply For Next 30-Day Batch (7 Seats Left)
                </button>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom Hero Stats Banner */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {heroStats.map((stat, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-[#040d1c]/80 p-5 backdrop-blur-md hover:border-amber-400/40 transition">
              <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-300">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
