import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, TrendingUp, Zap, ShieldCheck } from 'lucide-react';
import { mindTriggers } from '../data/content';

export default function Problem({ onApplyClick }) {
  return (
    <section className="relative py-20 bg-[#020714] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-red-400">
            <AlertTriangle size={14} /> THE HARD TRUTH ABOUT COLLEGE DEGREES
          </span>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why 90% Of Commerce Students <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-amber-400">
              Get Trapped In Low-Paid Roles
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            The corporate world doesn't care how many pages of textbook answers you memorized. They care if you can file GST on day one and build live Excel models.
          </p>
        </div>

        {/* 3 Mind Trigger Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {mindTriggers.map((trigger, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl border border-slate-800 bg-[#051124] p-6 sm:p-8 flex flex-col justify-between hover:border-amber-400/50 transition duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
            >
              <div>
                <div className="h-12 w-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-6">
                  {idx === 0 ? <AlertTriangle size={24} className="text-red-400" /> : idx === 1 ? <TrendingUp size={24} className="text-amber-400" /> : <Zap size={24} className="text-emerald-400" />}
                </div>

                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">{trigger.title}</span>
                <h3 className="text-xl font-bold font-serif text-white mt-1 mb-3">
                  {trigger.headline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {trigger.description}
                </p>
              </div>

              <div className="mt-6 rounded-xl bg-slate-900/80 p-3.5 border border-slate-800">
                <p className="text-[11px] font-bold text-amber-300">
                  ⚠️ {trigger.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-emerald-400 to-emerald-500 px-8 py-4 text-xs font-extrabold uppercase text-slate-950 hover:scale-105 transition cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            Break Out Of The College Trap <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
