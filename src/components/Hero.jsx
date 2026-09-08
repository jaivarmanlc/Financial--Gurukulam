import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { heroStats } from '../data/content';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.08),_transparent_25%),radial-gradient(circle_at_80%_10%,_rgba(16,185,129,0.14),_transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-yellow-300 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
              STRICTLY LIMITED COHORT • 40 CANDIDATES ONLY
            </div>

            <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] sm:text-5xl xl:text-6xl font-bold">
              <span className="text-slate-100">Your Degree Won't Save </span><br />
              <span className="text-yellow-400">Your Finance Career.</span><br />
              <span className="text-emerald-400">Real Deal Execution Will.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Commerce Gurukulam is an intensive 3-month executive accelerator. Gain live deal execution skills and secure premier placements in Investment Banking, Private Equity, and Venture Capital.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button 
                onClick={() => {
                  const formElement = document.getElementById('assessment-section') || document.querySelector('button[data-apply]');
                  if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-emerald-400 px-7 py-3.5 text-base font-bold text-slate-950 shadow-[0_0_35px_rgba(234,179,8,0.35)] transition hover:scale-105 hover:shadow-[0_0_45px_rgba(234,179,8,0.5)] cursor-pointer"
              >
                Claim Your Cohort Seat <ArrowRight size={20} className="stroke-[2.5]" />
              </button>
              <a 
                href="#curriculum" 
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-3.5 font-medium text-emerald-300 transition hover:bg-emerald-500/20 hover:border-emerald-400/50"
              >
                <Play size={16} /> Explore Curriculum
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-yellow-400/20 bg-slate-950/80 p-4 shadow-lg hover:border-yellow-400/40 transition">
                  <p className="mb-1 text-2xl font-black text-yellow-400">{stat.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-[2rem] border border-emerald-400/20 bg-emerald-500/5 blur-3xl" />
            <div className="relative flex h-full min-h-[500px] items-center justify-center rounded-[28px] border border-yellow-400/20 bg-[#071320]/90 p-5 shadow-[0_0_50px_rgba(15,118,110,0.15)]">
              <motion.div
                className="relative h-[360px] w-[360px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
              >
                <motion.div
                  className="relative h-full w-full"
                  animate={{ x: [0, -26, 22, -18, 0] }}
                  transition={{ duration: 11, ease: 'easeInOut', repeat: Infinity }}
                  whileHover={{
                    rotate: [0, 90, 180, 270, 360],
                    transition: { duration: 1.8, ease: 'easeInOut' },
                  }}
                  whileTap={{
                    rotate: [0, 90, 180, 270, 360],
                    transition: { duration: 1.5, ease: 'easeInOut' },
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.18),_rgba(2,6,23,0.1)_38%,_rgba(2,6,23,0.8)_72%,_rgba(2,6,23,1)_100%)] shadow-[0_0_80px_rgba(34,211,238,0.1)]" />
                  <div className="absolute inset-[6%] rounded-full border-[3px] border-yellow-300/80 shadow-[0_0_25px_rgba(234,179,8,0.5)]" />
                  <div className="absolute inset-[16%] rounded-full border-[3px] border-cyan-300/80 shadow-[0_0_25px_rgba(34,211,238,0.5)]" />
                  <div className="absolute inset-[27%] rounded-full border-[3px] border-yellow-300/80 shadow-[0_0_25px_rgba(234,179,8,0.4)]" />
                  <div className="absolute inset-[38%] rounded-full border-[3px] border-cyan-300/80 shadow-[0_0_25px_rgba(34,211,238,0.5)]" />

                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(234,179,8,0.18),transparent_18%),radial-gradient(circle_at_68%_72%,rgba(34,211,238,0.18),transparent_18%),radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_35%)] blur-2xl" />

                  <div className="absolute left-1/2 top-1/2 h-[120px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-yellow-300 via-yellow-200 to-transparent opacity-90" />
                  <div className="absolute left-1/2 top-1/2 h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/80 bg-[#02131d]/80 shadow-[0_0_20px_rgba(234,179,8,0.5)]" />
                  <div className="absolute left-1/2 top-[26%] -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.28em] text-yellow-300">N</div>

                  <div className="absolute left-1/2 top-[-10px] -translate-x-1/2 text-center">
                    <div className="text-[18px] font-medium text-yellow-300">N</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/90">FOUNDATIONS</div>
                  </div>

                  <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-center">
                    <div className="text-[18px] font-medium text-yellow-300">E</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/90">DEAL SKILLS</div>
                  </div>

                  <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 text-center">
                    <div className="text-[18px] font-medium text-yellow-300">S</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/90">EXECUTION</div>
                  </div>

                  <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 text-center">
                    <div className="text-[18px] font-medium text-yellow-300">W</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/90">CAREER EDGE</div>
                  </div>

                  <div className="absolute inset-[34%] flex items-center justify-center rounded-full border border-cyan-300/50 bg-[#02131d]/90 shadow-[0_0_45px_rgba(34,211,238,0.25)]">
                    <div className="text-center">
                      <div className="text-[11px] uppercase tracking-[0.28em] text-yellow-300">CAREER</div>
                      <div className="mt-2 text-[28px] font-semibold tracking-tight text-emerald-300">Finance</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
