import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, ShieldAlert, Zap } from 'lucide-react';
import { aiSurvivalData } from '../data/content';

export default function AIRealityCheck({ onOpenSurvivalGuide }) {
  return (
    <section className="terminal-panel py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.08),_transparent_35%)]" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Banner Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <Cpu size={14} className="animate-pulse text-cyan-300" />
            {aiSurvivalData.heroTag}
          </div>
          <h2 className="section-title mx-auto max-w-4xl">
            <span className="text-slate-100">AI Won't Replace Commerce Graduates. </span>
            <span className="text-yellow-400">Commerce Graduates Who Master AI </span>
            <span className="text-cyan-400">Will Replace Those Who Don't.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-slate-300 leading-relaxed">
            Over 80% of routine bookkeeping and entry-level spreadsheet work is being automated. Discover how Commerce Gurukulam turns AI into your ultimate career superpower.
          </p>
        </div>

        {/* Threat & Power Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {aiSurvivalData.threatStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-5 shadow-[0_0_25px_rgba(34,211,238,0.06)] hover:border-cyan-400/40 transition"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                {idx === 0 ? <ShieldAlert size={20} /> : idx === 1 ? <Zap size={20} /> : idx === 2 ? <Bot size={20} /> : <Cpu size={20} />}
              </div>
              <p className="text-3xl font-black text-cyan-300 mb-1">{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* High Impact Call-to-Action Teaser Box */}
        <div className="rounded-3xl border border-yellow-400/30 bg-gradient-to-r from-cyan-950/40 via-slate-950 to-yellow-950/30 p-6 sm:p-8 text-center shadow-[0_0_45px_rgba(34,211,238,0.12)]">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Want to See How You Can Out-Execute 99% of Commerce Graduates?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Explore our comprehensive AI Career Survival Guide, interactive AI productivity benchmarks, and specialized AI finance lab modules.
          </p>
          <button
            onClick={onOpenSurvivalGuide}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-400 px-8 py-4 text-base font-bold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:scale-105 hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] cursor-pointer"
          >
            Explore AI Career Survival Guide <ArrowRight size={20} className="stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
