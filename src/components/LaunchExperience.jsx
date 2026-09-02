import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Landmark,
  Mic,
  Rocket,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from 'lucide-react';

const featureCards = [
  {
    title: 'Live Wall Street LBO Terminal Sandbox',
    description: 'Run leverage, debt structure, and exit multiple scenarios in real time to understand sponsor returns, DSCR, and value creation under pressure.',
    icon: Landmark,
    accent: 'amber',
  },
  {
    title: 'Real-Time AI Voice Pitch Defense Simulator',
    description: 'Practice answering high-stakes boardroom questions with live voice prompts and sharpen your ability to defend decisions with clarity and conviction.',
    icon: Mic,
    accent: 'emerald',
  },
  {
    title: 'Venture Capital Cap Table & Term Sheet Builder',
    description: 'Model dilution, founder ownership, ESOP mechanics, and term-sheet structure to understand how startup financing really works in practice.',
    icon: WalletCards,
    accent: 'amber',
  },
  {
    title: 'The Reinvestment & Scaling Engine',
    description: 'Simulate cohort growth, operating leverage, and reinvestment decisions to understand how premium education businesses scale sustainably.',
    icon: TrendingUp,
    accent: 'emerald',
  },
  {
    title: 'Gurukulam AI Financial Audit Lab',
    description: 'Stress-test financial narratives with AI-assisted forensic review, anomaly detection, and corporate scenario analysis built for real-world decision making.',
    icon: ShieldCheck,
    accent: 'amber',
  },
];

const careerSkills = [
  'DCF Valuation',
  'LBO Modeling',
  'M&A Analysis',
  'Investment Memo',
  'Deal Execution',
  'Financial Storytelling',
];

export default function LaunchExperience() {
  return (
    <section id="launch" className="terminal-panel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-kicker">Cohort 1 launch countdown</p>
          <h2 className="section-title max-w-4xl mx-auto">
            A student finance program designed to feel like a live deal room, not a classroom lecture.
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_1.95fr]">
          <div className="rounded-[28px] border border-yellow-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 p-4 shadow-[0_0_40px_rgba(16,185,129,0.12)] flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-500/10 text-yellow-300">
                <Rocket size={20} />
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                Launch window
              </span>
            </div>

            <div className="space-y-2.5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Career-ready skill stack</p>
              <h3 className="font-serif text-[2rem] leading-tight text-slate-100">Built for finance careers</h3>
              <p className="text-sm leading-6 text-slate-300">
                Learn the core skills employers expect from early-career investment and corporate finance talent: valuation, modeling, execution, and decision communication.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {careerSkills.map((skill) => (
                <div key={skill} className="rounded-2xl border border-white/10 bg-slate-950/60 px-2 py-2.5 text-center text-[10px] uppercase tracking-[0.16em] text-slate-200">
                  {skill}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950">
                Apply for Cohort 1 <ArrowRight size={16} />
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200">
                Explore campus
              </button>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featureCards.map(({ title, description, icon: Icon, accent }) => (
              <article
                key={title}
                className={`rounded-[24px] border p-5 ${
                  accent === 'amber'
                    ? 'border-yellow-400/20 bg-slate-950/75'
                    : 'border-emerald-400/20 bg-slate-950/75'
                }`}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border ${
                  accent === 'amber'
                    ? 'border-yellow-400/25 bg-yellow-500/10 text-yellow-300'
                    : 'border-emerald-400/25 bg-emerald-500/10 text-emerald-300'
                }`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-serif text-2xl text-slate-100">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <div className="flex items-center gap-3 text-emerald-300">
              <BriefcaseBusiness size={18} />
              <span className="text-xs uppercase tracking-[0.2em]">Program fee</span>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-100">₹2,50,000</p>
            <p className="mt-2 text-sm text-slate-400">All-inclusive residential execution accelerator</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <div className="flex items-center gap-3 text-yellow-300">
              <Building2 size={18} />
              <span className="text-xs uppercase tracking-[0.2em]">Cohort cap</span>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-100">20 students</p>
            <p className="mt-2 text-sm text-slate-400">High-intensity, mentor-led enterprise training</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <div className="flex items-center gap-3 text-emerald-300">
              <TrendingUp size={18} />
              <span className="text-xs uppercase tracking-[0.2em]">Gross surplus</span>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-100">₹35L</p>
            <p className="mt-2 text-sm text-slate-400">Projected launch revenue with 70% operating margin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
