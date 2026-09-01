import { motion } from 'framer-motion';
import { mentors } from '../data/content';

export default function Mentors() {
  return (
    <section id="mentors" className="terminal-panel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-kicker">Industry mentors</p>
          <h2 className="section-title">Guidance from operators who have lived the work.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {mentors.map(({ name, role, expertise }, index) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-yellow-500/10 to-emerald-500/10 text-xl font-bold text-yellow-200">
                {name.split(' ').map((part) => part[0]).join('')}
              </div>
              <h3 className="text-lg font-semibold text-slate-100">{name}</h3>
              <p className="mt-1 text-sm text-emerald-300">{role}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{expertise}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
