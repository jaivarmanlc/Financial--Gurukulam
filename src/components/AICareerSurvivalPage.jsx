import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldAlert,
  Sparkles,
  Zap
} from 'lucide-react';
import { aiSurvivalData } from '../data/content';

export default function AICareerSurvivalPage({ onBackToHome, onApplyClick }) {
  const [activeLabTab, setActiveLabTab] = useState(aiSurvivalData.aiLabs[0].id);

  const selectedLab = aiSurvivalData.aiLabs.find(lab => lab.id === activeLabTab) || aiSurvivalData.aiLabs[0];

  return (
    <div className="min-h-screen bg-[#030b18] text-slate-100 pb-20">
      {/* Top Sticky Bar */}
      <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-[#020b16]/90 backdrop-blur-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20 transition cursor-pointer"
          >
            <ArrowLeft size={18} /> Back to Overview
          </button>
          
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs font-semibold text-yellow-400 uppercase tracking-widest">
              Cohort Capacity: 40 Seats Only
            </span>
            <button
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-emerald-400 px-5 py-2 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(234,179,8,0.3)] transition hover:scale-105 cursor-pointer"
            >
              Apply Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        {/* Hero Warning Banner */}
        <section className="text-center py-12 relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-950 via-[#071728] to-slate-950 p-6 sm:p-12 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-yellow-300">
            <ShieldAlert size={16} className="text-yellow-400 animate-pulse" />
            CAREER SURVIVAL GUIDE • 2026 AI WAVE
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            <span className="text-slate-100">AI Won't Replace Commerce Graduates. </span><br />
            <span className="text-cyan-400">Commerce Graduates Who Master AI </span><br />
            <span className="text-yellow-400">Will Replace Those Who Don't.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            By 2026, 80%+ of traditional manual bookkeeping, basic tax filing, and repetitive Excel modeling will be fully automated. Traditional graduates face immediate obsolescence. Commerce Gurukulam teaches you how to command AI to deliver 10x output and secure premier deal-room roles.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {aiSurvivalData.threatStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-5 shadow-md">
                <p className="text-3xl font-black text-cyan-300 mb-1">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 1: Comparison Matrix (Traditional vs AI-Powered) */}
        <section className="py-16">
          <div className="text-center mb-10">
            <p className="section-kicker text-cyan-400">The Execution Gap</p>
            <h2 className="section-title">
              <span className="text-slate-100">Traditional Graduate </span>
              <span className="text-slate-400">vs. </span>
              <span className="text-cyan-400">Commerce Gurukulam AI Athlete</span>
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-4 sm:p-6 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <th className="py-4 px-4">Finance Domain</th>
                  <th className="py-4 px-4 text-red-400/90">Traditional College Graduate (At Risk)</th>
                  <th className="py-4 px-4 text-cyan-300">Commerce Gurukulam AI Professional (Top 1%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {aiSurvivalData.matrix.map((row, idx) => (
                  <tr key={row.feature} className="hover:bg-cyan-500/5 transition">
                    <td className="py-5 px-4 font-bold text-slate-200">{row.feature}</td>
                    <td className="py-5 px-4 text-slate-400 bg-red-950/10 rounded-l-xl">
                      <span className="inline-block mr-2 text-red-400 font-bold">✗</span>
                      {row.traditional}
                    </td>
                    <td className="py-5 px-4 text-cyan-200 font-medium bg-cyan-950/20 rounded-r-xl border-l border-cyan-400/30">
                      <span className="inline-block mr-2 text-emerald-400 font-bold">✓</span>
                      {row.gurukulamAI}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Interactive AI Productivity Simulator */}
        <section className="py-16 terminal-panel rounded-3xl p-6 sm:p-10 my-10">
          <div className="text-center mb-10">
            <p className="section-kicker text-yellow-400">Productivity Benchmarks</p>
            <h2 className="section-title">
              <span className="text-slate-100">Deliver 14-Hour Execution Tasks in </span>
              <span className="text-yellow-400">Under 45 Minutes.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {aiSurvivalData.productivityTasks.map((item) => (
              <div key={item.task} className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                <h3 className="font-bold text-lg text-slate-100 mb-4">{item.task}</h3>
                
                {/* Manual Time Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-red-400 font-semibold mb-1">
                    <span>Manual Work (No AI)</span>
                    <span>{item.manualHours} Hours</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-red-500/80 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>

                {/* AI Work Time Bar */}
                <div>
                  <div className="flex justify-between text-xs text-emerald-400 font-semibold mb-1">
                    <span>Gurukulam AI Workflow</span>
                    <span>{item.aiMinutes} Minutes</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Deep Dive AI Finance Labs */}
        <section className="py-16">
          <div className="text-center mb-10">
            <p className="section-kicker text-cyan-400">Specialized AI Curriculum</p>
            <h2 className="section-title">
              <span className="text-slate-100">Master the 4 Core </span>
              <span className="text-cyan-400">AI Financial Execution Labs.</span>
            </h2>
          </div>

          {/* Lab Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {aiSurvivalData.aiLabs.map((lab) => (
              <button
                key={lab.id}
                onClick={() => setActiveLabTab(lab.id)}
                className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                  activeLabTab === lab.id
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                    : 'border border-white/10 bg-slate-950/60 text-slate-300 hover:border-cyan-400/40'
                }`}
              >
                {lab.title}
              </button>
            ))}
          </div>

          {/* Active Lab Card */}
          <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-950 via-[#061828] to-slate-950 p-6 sm:p-10 shadow-[0_0_50px_rgba(34,211,238,0.1)]">
            <div className="flex items-center gap-3 text-cyan-300 mb-2">
              <BrainCircuit size={24} />
              <span className="text-xs font-bold uppercase tracking-widest">{selectedLab.subtitle}</span>
            </div>
            <h3 className="font-serif text-3xl font-bold text-slate-100 mb-4">{selectedLab.title}</h3>
            <p className="text-base text-slate-300 leading-relaxed max-w-3xl mb-6">{selectedLab.description}</p>

            <div className="border-t border-white/10 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4 flex items-center gap-2">
                <Sparkles size={16} /> Key Portfolio Skills Mastered
              </h4>
              <div className="grid gap-3 sm:grid-cols-3">
                {selectedLab.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-2.5 rounded-xl border border-cyan-400/20 bg-cyan-950/20 p-3 text-sm text-cyan-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: High Urgency Application Call-to-Action */}
        <section className="py-16 text-center">
          <div className="rounded-3xl border border-yellow-400/40 bg-gradient-to-r from-yellow-500/15 via-slate-950 to-emerald-500/15 p-8 sm:p-14 shadow-[0_0_60px_rgba(234,179,8,0.2)]">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-400 mb-3">
              NON-NEGOTIABLE CAREER REQUIREMENT
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
              Don't Get Automated. <br />
              <span className="text-yellow-400">Master the AI Execution Engine.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Enrollment for our 3-month residential accelerator is strictly capped at **40 candidates**. Secure your executive screening before cohort seats fill up.
            </p>
            
            <button
              onClick={onApplyClick}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-emerald-400 px-9 py-4 text-lg font-bold text-slate-950 shadow-[0_0_40px_rgba(234,179,8,0.4)] transition hover:scale-105 hover:shadow-[0_0_60px_rgba(234,179,8,0.6)] cursor-pointer"
            >
              Claim Your Cohort Seat Now <ArrowRight size={22} className="stroke-[2.5]" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
