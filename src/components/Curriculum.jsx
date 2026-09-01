import { useState } from 'react';
import { motion } from 'framer-motion';
import { curriculumData } from '../data/content';

export default function Curriculum() {
  const [selected, setSelected] = useState(curriculumData[0].title);
  const activeItem = curriculumData.find((item) => item.title === selected) ?? curriculumData[0];

  return (
    <section id="curriculum" className="terminal-panel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-kicker">Curriculum</p>
          <h2 className="section-title">The finance stack students need to execute, not just understand.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {curriculumData.map(({ title, subtitle, bullets }, index) => {
            const isActive = selected === title;

            return (
              <motion.article
                key={title}
                type="button"
                onClick={() => setSelected(title)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`cursor-pointer rounded-2xl border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${
                  isActive
                    ? 'border-yellow-400/60 bg-slate-950/90 shadow-[0_0_0_1px_rgba(250,204,21,0.18),0_0_24px_rgba(250,204,21,0.12)]'
                    : 'border-white/10 bg-slate-950/70 hover:border-yellow-400/35 hover:bg-slate-950/80'
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-yellow-400/25 bg-yellow-500/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-yellow-300">{subtitle}</span>
                  <span className="text-sm text-slate-500">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          key={activeItem.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-3xl border border-yellow-400/30 bg-gradient-to-r from-yellow-500/10 via-slate-950 to-emerald-500/10 p-5 shadow-[0_0_35px_rgba(250,204,21,0.08)]"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-emerald-300">Selected module</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-100">{activeItem.title}</h3>
            </div>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">{activeItem.subtitle}</span>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Students move through {activeItem.title.toLowerCase()} with live case work, applied decision-making and portfolio-ready output, so the subject becomes a practical skill rather than a theory headline.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
