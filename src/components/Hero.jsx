import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { heroStats } from '../data/content';

const chartData = [
  { name: 'Week 1', value: 32 },
  { name: 'Week 2', value: 46 },
  { name: 'Week 3', value: 54 },
  { name: 'Week 4', value: 60 },
  { name: 'Week 5', value: 72 },
  { name: 'Week 6', value: 83 },
  { name: 'Week 7', value: 92 }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.08),_transparent_25%),radial-gradient(circle_at_80%_10%,_rgba(16,185,129,0.14),_transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/5 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-emerald-300">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Student finance immersion
            </div>

            <h2 className="max-w-2xl font-serif text-4xl leading-[1.02] text-slate-100 sm:text-5xl xl:text-7xl">
              You Have the Degree. Now Learn to Do the Work.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Financial Gurukulam is a 3-month immersive practical finance program designed for students who want to become capable, confident and delivery-ready in investment, valuation, corporate finance and transaction work.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-emerald-400 px-5 py-3 font-medium text-slate-950 shadow-[0_0_30px_rgba(234,179,8,0.2)] transition hover:-translate-y-0.5">
                Apply for the next cohort <ArrowRight size={18} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-slate-100 transition hover:border-emerald-400/30 hover:text-emerald-200">
                <Play size={16} /> Watch the student story
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="mb-1 text-2xl font-bold text-emerald-300">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] border border-emerald-400/20 bg-emerald-500/5 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-yellow-400/20 bg-[#071320]/90 p-5 shadow-[0_0_50px_rgba(15,118,110,0.15)] hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.12),0_0_50px_rgba(16,185,129,0.14)]">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Program intensity</p>
                  <h3 className="mt-2 font-serif text-2xl text-slate-100">Finance Execution Dashboard</h3>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/5 px-2 py-1 text-xs text-emerald-300">
                  <TrendingUp size={14} /> Live growth
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Model accuracy</p>
                  <p className="mt-2 text-3xl font-bold text-yellow-300">92%</p>
                  <p className="mt-1 text-sm text-slate-400">From valuation workbench</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Deal readiness</p>
                  <p className="mt-2 text-3xl font-bold text-emerald-300">8.4/10</p>
                  <p className="mt-1 text-sm text-slate-400">Boardroom confidence index</p>
                </div>
              </div>

              <div className="mt-5 h-48 w-full rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="goldGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#facc15" stopOpacity={0.7} />
                        <stop offset="100%" stopColor="#facc15" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#020b16', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '12px' }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#facc15" strokeWidth={3} fill="url(#goldGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {['DCF', 'LBO', 'M&A'].map((item, index) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-center">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{item}</p>
                    <p className="mt-1 text-lg font-semibold text-slate-100">{index === 0 ? '9.2x' : index === 1 ? '4.8x' : '2.1x'}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
