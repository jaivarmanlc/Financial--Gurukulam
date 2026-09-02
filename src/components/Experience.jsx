import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const items = [
  {
    student: 'Ananya',
    track: 'Finance + M&A track',
    quote: 'The toughest part of college was not understanding finance; it was translating it into work. Gurukulam made that shift visible in every case and model.'
  },
  {
    student: 'Vikram',
    track: 'Valuation & transactions',
    quote: 'I went from memorizing ratios to building valuation narratives. The live feedback loop helped me understand how numbers become decisions.'
  },
  {
    student: 'Sana',
    track: 'AI finance analysis',
    quote: 'The AI labs were not gimmicks. They taught me how to use tools correctly, read outputs critically and present insights with confidence.'
  }
];

export default function Experience() {
  return (
    <section className="terminal-panel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-kicker">Student experience</p>
          <h2 className="section-title"><span className="text-slate-100">A rhythm built for </span><span className="text-yellow-400">serious</span><span className="text-slate-100"> finance </span><span className="text-emerald-400">students.</span></h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map(({ student, track, quote }, index) => (
            <motion.article
              key={student}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-slate-100">{student}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">{track}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-500/10 text-yellow-300">
                  <Quote size={16} />
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-300">“{quote}”</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
