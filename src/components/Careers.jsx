import { motion } from 'framer-motion';
import { careerPaths } from '../data/content';

export default function Careers() {
  return (
    <section id="careers" className="terminal-panel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-kicker">Career pathways</p>
          <h2 className="section-title"><span className="text-slate-100">Finance roles where a </span><span className="text-yellow-400">practical student</span><span className="text-slate-100"> becomes </span><span className="text-emerald-400">highly employable.</span></h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careerPaths.map((path, index) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, translateY: 18 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-center"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-sm font-semibold text-emerald-300">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-slate-100">{path}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
