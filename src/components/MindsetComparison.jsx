import { mindsetComparison } from '../data/content';
import { ShieldCheck, CheckCircle2, XCircle, Zap, ArrowRight } from 'lucide-react';

export default function MindsetComparison({ onEnrollClick }) {
  return (
    <section id="why" className="relative py-20 bg-[#030b18] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-300">
            <Zap size={14} className="text-amber-400" /> THE UNFAIR ADVANTAGE
          </span>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Average College Student <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400">
              vs Commerce Gurukulam Graduate
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            See the exact difference between relying on 3 years of college lectures vs taking a 30-Day practical Gurukulam sprint.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="rounded-3xl border border-slate-800 bg-[#051124] overflow-hidden shadow-2xl">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 bg-slate-900/90 border-b border-slate-800 p-4 sm:p-6 text-xs sm:text-sm font-extrabold tracking-wider uppercase">
            <div className="col-span-4 text-slate-400">Career Dimension</div>
            <div className="col-span-4 text-red-400 border-l border-slate-800 pl-4">Average College Student</div>
            <div className="col-span-4 text-emerald-400 border-l border-slate-800 pl-4 flex items-center gap-1">
              <Zap size={14} className="text-amber-400 fill-amber-400" /> Gurukulam Graduate
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-800/80">
            {mindsetComparison.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm transition hover:bg-slate-900/40">
                
                {/* Feature Label */}
                <div className="col-span-4 font-bold text-white pr-2">
                  {row.feature}
                </div>

                {/* Average Student */}
                <div className="col-span-4 text-slate-300 border-l border-slate-800 pl-4 font-medium">
                  <span className="text-red-400 block sm:inline font-semibold">{row.averageStudent}</span>
                </div>

                {/* Gurukulam Student */}
                <div className="col-span-4 text-emerald-300 border-l border-slate-800 pl-4 font-bold">
                  <span className="text-emerald-400 block sm:inline">{row.gurukulamStudent}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Bottom Psychological CTA Banner */}
        <div className="mt-10 rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-950/40 via-slate-900 to-emerald-950/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-white font-serif">Which side of the comparison do you want to be on?</h4>
            <p className="text-xs text-slate-300 mt-1 font-medium">Don't wait for graduation day to regret not learning practical skills.</p>
          </div>
          <button
            onClick={onEnrollClick}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 px-6 py-3.5 text-xs font-extrabold uppercase text-slate-950 hover:scale-105 transition cursor-pointer shadow-lg shadow-emerald-500/20 whitespace-nowrap"
          >
            Become The 1% Student <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
