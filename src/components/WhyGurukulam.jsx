import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, BriefcaseBusiness, GraduationCap, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: GraduationCap,
    title: 'Student-first learning system',
    description: 'Structured for fresh graduates who want to become finance operators, not just theory learners.'
  },
  {
    icon: BriefcaseBusiness,
    title: 'Deal-ready assignments',
    description: 'Each module translates into a real deliverable: valuation memo, board pitch, LBO analysis or cap table strategy.'
  },
  {
    icon: BrainCircuit,
    title: 'Finance + AI fluency',
    description: 'Students learn how to use AI for analysis, automation and research without losing the core finance judgment.'
  },
  {
    icon: Sparkles,
    title: 'Execution mindset',
    description: 'Practical skills, communication discipline and boardroom confidence are built every single day.'
  }
];

export default function WhyGurukulam() {
  return (
    <section className="terminal-panel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between gap-3">
          <div>
            <p className="section-kicker">Why Gurukulam</p>
            <h2 className="section-title">The missing bridge between degree and execution.</h2>
          </div>
          <button className="hidden rounded-full border border-emerald-400/30 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-300 md:inline-flex items-center gap-2">
            Student roadmap <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_0_0_1px_rgba(148,163,184,0.04)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-500/10 text-yellow-300">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">{title}</h3>
              <p className="text-sm leading-6 text-slate-300">{description}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-yellow-400/50 via-emerald-400/30 to-transparent" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
