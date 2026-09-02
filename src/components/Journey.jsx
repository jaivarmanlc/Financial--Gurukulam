import { motion } from 'framer-motion';
import { journeyData } from '../data/content';

export default function Journey() {
  return (
    <section id="journey" className="terminal-panel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-kicker">90-day learning journey</p>
          <h2 className="section-title"><span className="text-slate-100">A progression from </span><span className="text-yellow-400">fundamentals</span><span className="text-slate-100"> to </span><span className="text-emerald-400">boardroom performance.</span></h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {journeyData.map(({ phase, label, items }, index) => (
            <motion.article
              key={phase}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 hover:border-emerald-400/40 hover:bg-slate-950/85"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.28em] text-yellow-300">{phase}</span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/5 px-2 py-1 text-xs text-emerald-300">{label}</span>
              </div>
              <div className="mb-6 h-px w-full bg-gradient-to-r from-yellow-400/40 via-emerald-400/30 to-transparent" />
              <ul className="space-y-3 text-sm leading-7 text-slate-300">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
