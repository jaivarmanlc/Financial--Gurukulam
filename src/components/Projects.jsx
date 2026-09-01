import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { studentProjects } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="terminal-panel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-kicker">Student projects</p>
          <h2 className="section-title">The portfolio students build while they learn.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {studentProjects.map((project, index) => (
            <motion.article
              key={project}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group rounded-2xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-emerald-400/30 hover:bg-slate-950"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.24em] text-yellow-300">Portfolio piece</span>
                <ArrowUpRight size={16} className="text-slate-400 transition group-hover:text-emerald-300" />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">{project}</h3>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-yellow-400/40 via-emerald-400/30 to-transparent" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
