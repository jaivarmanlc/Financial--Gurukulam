import { Zap, Clock, ShieldCheck, ArrowRight, Award, Flame, CheckCircle } from 'lucide-react';

export default function FastTrackBanner({ onEnrollClick }) {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-[#030a16] via-[#071329] to-[#030a16]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Glow Box container */}
        <div className="relative rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-900 to-emerald-950/40 p-8 sm:p-12 shadow-2xl overflow-hidden">
          
          {/* Top Background Badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest px-6 py-2 rounded-bl-2xl shadow-lg flex items-center gap-1.5">
            <Flame size={14} className="fill-slate-950" /> EMERGENCY SKILL UPGRADE
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-bold text-amber-300 mb-4">
              <Zap size={14} className="fill-amber-400" /> FASTTRACK COURSES (3 TO 7 DAYS)
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
              Have Exams Next Week Or Placement Interview Tomorrow? <br />
              <span className="text-amber-300">Crack It With Our 48-Hour & 7-Day FastTrack Sprints!</span>
            </h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Designed for urgent results: Zero unnecessary filler. 100% condensed high-frequency exam questions, corporate Excel speed shortcuts, and live filing drills.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              
              {/* Sprint 1 */}
              <div className="rounded-2xl border border-amber-500/30 bg-slate-950/80 p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-300 uppercase">⚡ 7-DAY EXAM VICTORY</span>
                  <span className="text-xs font-black text-emerald-400">Only ₹699</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">B.Com & BBA Semester Corporate Accounting</h4>
                <p className="text-xs text-slate-400">10-Year university question papers solved live + formula cheat sheets for 80%+ distinction score.</p>
              </div>

              {/* Sprint 2 */}
              <div className="rounded-2xl border border-emerald-500/30 bg-slate-950/80 p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-300 uppercase">⚡ 48-HOUR EXCEL SPRINT</span>
                  <span className="text-xs font-black text-amber-400">Only ₹499</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Corporate Excel & Dashboard Speed Bootcamp</h4>
                <p className="text-xs text-slate-400">Throw away your mouse! Master the 20 keyboard shortcuts, XLOOKUP & dashboards recruiters test.</p>
              </div>

            </div>

            {/* Action Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById('courses');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-emerald-400 to-emerald-500 px-6 py-3.5 text-xs font-extrabold text-slate-950 hover:scale-105 transition cursor-pointer shadow-lg shadow-amber-500/20"
              >
                Join FastTrack Sprint Now <ArrowRight size={16} />
              </button>

              <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                <Clock size={14} className="text-amber-400" /> Instant Access Granted Upon Enrollment
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
