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

export default function LaunchExperience({ onApplyClick }) {
  return (
    <section id="launch" className="terminal-panel py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="section-kicker">HIGH-INTENSITY DEAL IMMERSION</p>
          <h2 className="section-title max-w-4xl mx-auto">
            <span className="text-slate-100">A student finance program designed to feel like a </span><span className="text-yellow-400">live deal room,</span><span className="text-slate-100"> not a </span><span className="text-emerald-400">classroom lecture.</span>
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_1.95fr]">
          {/* Left Column Stack */}
          <div className="flex flex-col gap-5">
            <div className="rounded-[28px] border border-yellow-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 p-5 shadow-[0_0_40px_rgba(16,185,129,0.12)] flex flex-col gap-3 w-full">
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-500/10 text-yellow-300">
                  <Rocket size={20} />
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/5 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                  STRICT COHORT SELECTION
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">Career-ready skill stack</p>
                <h3 className="font-serif text-[2rem] leading-tight text-slate-100">Built for Top 1% Finance Careers</h3>
                <p className="text-sm leading-6 text-slate-300">
                  Master the core deal execution skills that top investment banks and VC firms demand: valuation, modeling, transaction structuring, and boardroom presentation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {careerSkills.map((skill) => (
                  <div key={skill} className="rounded-2xl border border-white/10 bg-slate-950/60 px-2 py-2.5 text-center text-[10px] uppercase tracking-[0.16em] text-slate-200">
                    {skill}
                  </div>
                ))}
              </div>

              <div className="mt-1 flex flex-wrap justify-center gap-2.5">
                <button 
                  onClick={onApplyClick || (() => {
                    const formElement = document.getElementById('assessment-section');
                    if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
                  })}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 hover:scale-105 transition cursor-pointer"
                >
                  Apply For Executive Immersion <ArrowRight size={16} />
                </button>
                <a 
                  href="#mentors"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 hover:border-emerald-400/30 transition"
                >
                  Explore Mentors
                </a>
              </div>
            </div>

            {/* 5:00 AM Immersion Breakdown Card to fill vertical height */}
            <div className="rounded-[28px] border border-emerald-400/20 bg-slate-950/80 p-5 shadow-lg flex flex-col justify-between">
              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <ShieldCheck size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">5:00 AM Daily Execution Protocol</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-bold text-yellow-300">05:00 AM</span>
                  <span>Mindset Conditioning & Market Briefing</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-bold text-emerald-300">09:00 AM</span>
                  <span>Wall Street & Dalal Street LBO Modeling</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-bold text-yellow-300">02:00 PM</span>
                  <span>AI SEC Extraction & Forensic Audit Lab</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-300">06:00 PM</span>
                  <span>CFO Mentor War Room & Boardroom Defense</span>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-500/5 p-3 text-[11px] text-slate-300 leading-relaxed">
                <span className="font-bold text-yellow-300">Zero Textbooks:</span> 100% immersive, hands-on financial modeling using real Wall Street & Dalal Street deal data.
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featureCards.map(({ title, description, icon: Icon, accent }, index) => (
              <article
                key={title}
                className={`rounded-[24px] border p-5 ${index === featureCards.length - 1 && featureCards.length % 2 !== 0
                  ? 'md:col-span-2'
                  : ''
                  } ${accent === 'amber'
                    ? 'border-yellow-400/20 bg-slate-950/75'
                    : 'border-emerald-400/20 bg-slate-950/75'
                  }`}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border ${accent === 'amber'
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
            <p className="mt-4 text-3xl font-bold text-slate-100">₹90,000</p>
            <p className="mt-2 text-sm text-slate-400">All-inclusive residential execution accelerator</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <div className="flex items-center gap-3 text-yellow-300">
              <Building2 size={18} />
              <span className="text-xs uppercase tracking-[0.2em]">Cohort cap</span>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-100">40 students</p>
            <p className="mt-2 text-sm text-slate-400">High-intensity, mentor-led enterprise training</p>
          </div>

          <div className="rounded-2xl border border-emerald-400/20 bg-slate-950/80 p-5 shadow-md">
            <div className="flex items-center gap-3 text-emerald-300">
              <TrendingUp size={18} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Placement Support</span>
            </div>
            <p className="mt-4 text-3xl font-black text-emerald-400">100% Dedicated</p>
            <p className="mt-2 text-sm text-slate-300">Direct executive referral pipeline and hiring partner access</p>
          </div>
        </div>
      </div>
    </section>
  );
}
