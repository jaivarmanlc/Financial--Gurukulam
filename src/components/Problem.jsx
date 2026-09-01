import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, ChartNoAxesCombined, GraduationCap } from 'lucide-react';
import { problemPoints } from '../data/content';

export default function Problem() {
  return (
    <section id="program" className="terminal-panel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-kicker">Degree-to-execution problem</p>
          <h2 className="section-title mx-auto max-w-4xl">College gives you the degree. Financial Gurukulam gives you the execution engine.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5">
            {problemPoints.map(({ title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-5 hover:border-yellow-400/40 hover:bg-slate-950/90"
              >
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
                  {index === 0 ? <GraduationCap size={20} /> : index === 1 ? <ChartNoAxesCombined size={20} /> : <BrainCircuit size={20} />}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-100">{title}</h3>
                  <p className="leading-7 text-slate-300">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 via-slate-950 to-emerald-500/10 p-6 shadow-[0_0_40px_rgba(234,179,8,0.06)]">
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Reality check</p>
              <div className="rounded-full border border-yellow-400/20 bg-yellow-500/5 px-2 py-1 text-xs text-yellow-300">Student focus</div>
            </div>
            <h3 className="mt-5 font-serif text-3xl text-slate-100">A job-ready finance student is built through repetition, review and pressure-tested thinking.</h3>

            <div className="mt-6 space-y-4">
              {[
                ['Valuation confidence', '86%'],
                ['Modeling consistency', '91%'],
                ['Boardroom clarity', '89%']
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-emerald-400 to-emerald-500" style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-200">
              See the student roadmap <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
