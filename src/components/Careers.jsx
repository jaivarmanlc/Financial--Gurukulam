import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  PieChart, 
  Building2, 
  Layers, 
  Rocket, 
  Briefcase, 
  ShieldCheck, 
  Cpu, 
  Award, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { careerPaths } from '../data/content';

const iconMap = {
  TrendingUp,
  PieChart,
  Building2,
  Layers,
  Rocket,
  Briefcase,
  ShieldCheck,
  Cpu,
  Award
};

export default function Careers() {
  return (
    <section id="careers" className="terminal-panel py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="section-kicker">INSTITUTIONAL CAREER PATHWAYS</p>
          <h2 className="section-title mx-auto max-w-3xl">
            <span className="text-slate-100">9 High-Growth </span>
            <span className="text-yellow-400">Finance Careers </span>
            <span className="text-slate-100">Built for </span>
            <span className="text-emerald-400">Deal-Ready Students.</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Zero theoretical resumes. Stand out in placement interviews with a verified portfolio of 7 institutional deal decks.
          </p>
        </div>

        {/* 3x3 Perfectly Balanced Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerPaths.map((item, index) => {
            const IconComponent = iconMap[item.icon] || TrendingUp;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative rounded-2xl border border-white/10 bg-slate-950/80 p-6 transition-all duration-300 hover:border-yellow-400/40 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(234,179,8,0.12)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/25 bg-yellow-500/10 text-yellow-300 transition group-hover:scale-110 group-hover:border-emerald-400/40 group-hover:bg-emerald-500/10 group-hover:text-emerald-300">
                      <IconComponent size={22} />
                    </div>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-slate-100 mb-2 leading-snug group-hover:text-yellow-300 transition">
                    {item.title}
                  </h3>

                  {/* Demand Indicator */}
                  <p className="text-xs text-slate-400 font-medium mb-4 flex items-center gap-1.5">
                    {item.demand}
                  </p>

                  {/* Key Skills Mastered */}
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Key Skills Mastered:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-slate-900/80 px-2 py-1 text-[10px] font-medium text-slate-300"
                        >
                          <CheckCircle2 size={10} className="text-emerald-400" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-5 border-t border-white/10 pt-3 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200">
                  <span className="font-semibold text-[10px] uppercase tracking-wider text-yellow-400/90">
                    0{index + 1} / PATHWAY
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 opacity-0 group-hover:opacity-100 transition duration-300">
                    Cohort Aligned <ArrowRight size={12} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Placement Commitment Banner */}
        <div className="mt-14 rounded-2xl border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 via-slate-950 to-yellow-500/10 p-6 md:p-8 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-yellow-300 text-xs font-bold uppercase tracking-widest bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-400/30">
                <Sparkles size={14} /> Direct Executive Placement Support
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-slate-100 font-bold">
                Ready to break into boutique IB, PE, VC, or Corporate Finance?
              </h3>
              <p className="text-slate-300 text-xs md:text-sm max-w-2xl">
                Our admissions panel evaluates every candidate profile for cohort alignment and long-term career drive.
              </p>
            </div>

            <button
              onClick={() => {
                const formElement = document.getElementById('assessment-section') || document.querySelector('button[data-apply]');
                if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-yellow-400 to-emerald-400 text-slate-950 font-bold rounded-xl transition transform hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.3)] text-xs md:text-sm uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 shrink-0"
            >
              Evaluate Your Mindset & Apply <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
