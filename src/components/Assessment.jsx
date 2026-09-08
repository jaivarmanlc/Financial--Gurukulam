import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, CheckCircle2, Sparkles } from 'lucide-react';

const questions = [
  {
    prompt: 'Why did you choose Commerce & Finance as your core career path?',
    options: [
      'To build a high-impact career in Investment Banking, Valuation, and Corporate Finance',
      'To get a basic degree and look for routine office jobs',
      'Because my friends chose it without much thought',
      'I am still unsure about my long-term career direction'
    ],
    correct: 0
  },
  {
    prompt: 'Why do you want to study this 3-month practical execution course?',
    options: [
      'To build live financial models, master deal structuring, and stand out in placement interviews',
      'To read more college textbooks and memorize definitions',
      'Just to collect a generic course participation certificate',
      'To pass time while waiting for campus drives'
    ],
    correct: 0
  },
  {
    prompt: 'What is your primary objective after completing your graduation?',
    options: [
      'Secure a high-tier role in Investment Banking, PE, VC, or Corporate Finance',
      'Settle for a low-paying back-office entry job',
      'Wait for internships without having practical modeling skills',
      'Take a break without a clear career roadmap'
    ],
    correct: 0
  },
  {
    prompt: 'How do you believe real financial expertise and confidence are built?',
    options: [
      'Through live deal-building, C-suite mentor feedback, and boardroom pitch defenses',
      'By memorizing accounting formulas the night before college exams',
      'By watching passive video lectures without opening Excel',
      'By relying strictly on college textbook chapters'
    ],
    correct: 0
  }
];

export default function Assessment() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const score = useMemo(() => {
    return answers.reduce((total, answer, index) => total + (answer === questions[index].correct ? 1 : 0), 0);
  }, [answers]);

  const handleAnswer = (questionIndex, optionIndex) => {
    setAnswers((current) => {
      const next = [...current];
      next[questionIndex] = optionIndex;
      return next;
    });
  };

  const readiness = Math.round((score / questions.length) * 100);

  return (
    <section id="assessment-section" className="terminal-panel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-kicker">Student Career Fit & Assessment</p>
          <h2 className="section-title mx-auto max-w-3xl">
            <span className="text-slate-100">Why choose </span>
            <span className="text-yellow-400">Commerce Gurukulam?</span>
            <span className="text-slate-100"> Evaluate your </span>
            <span className="text-emerald-400">career mindset.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            {questions.map((question, index) => (
              <motion.div
                key={question.prompt}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="rounded-xl border border-white/10 bg-slate-900/70 p-4"
              >
                <p className="mb-3 text-sm font-semibold text-slate-100">Q{index + 1}. {question.prompt}</p>
                <div className="grid gap-2">
                  {question.options.map((option, optionIndex) => {
                    const selected = answers[index] === optionIndex;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleAnswer(index, optionIndex)}
                        className={`rounded-lg border px-3.5 py-2.5 text-left text-sm transition font-medium ${selected
                          ? 'border-emerald-400/60 bg-emerald-500/15 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                          : 'border-white/10 bg-slate-950/60 text-slate-300 hover:border-yellow-400/40 hover:text-white'
                          }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="sticky top-24 self-start rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 via-slate-950 to-emerald-500/10 p-6 shadow-[0_0_40px_rgba(52,211,153,0.08)] space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-yellow-300">
                <BarChart3 size={18} />
                <span className="text-sm font-bold uppercase tracking-[0.2em]">Program Alignment</span>
              </div>
              <span className="text-xl font-bold text-slate-100">{readiness}%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-emerald-400 to-emerald-500 transition-all duration-500"
                style={{ width: `${readiness}%` }}
              />
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Career Alignment Score</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-black text-emerald-300">{score}/{questions.length}</span>
                <span className="text-xs text-slate-400">Questions Matched</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
              <div className="mb-2 flex items-center gap-2 text-emerald-300">
                <CheckCircle2 size={16} />
                <span className="text-sm font-bold uppercase tracking-[0.18em]">Fit Evaluation</span>
              </div>
              <p className="text-xs md:text-sm leading-relaxed text-slate-300">
                {readiness >= 75
                  ? 'You have clear career ambition! Commerce Gurukulam is built for driven students like you who want live deal-room execution and top-tier placements.'
                  : readiness >= 50
                    ? 'You know you want a serious finance career. This program will convert your basic degree knowledge into practical deal modeling skills.'
                    : 'You are evaluating your future options. Commerce Gurukulam will provide the structure, clarity, and skills needed for a high-growth career.'}
              </p>
            </div>

            {/* Added Cohort Advantages Summary Box */}
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4 space-y-2">
              <p className="text-xs font-bold text-yellow-400 uppercase tracking-wider">🎯 What You Master in 3 Months:</p>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li>Wall Street & Dalal Street LBO Modeling</li>
                <li>AI SEC Filing Extraction & Forensic Audit</li>
                <li>5:00 AM Discipline & Boardroom Pitch Defenses</li>
                <li>100% Placement Referral Support</li>
              </ul>
            </div>

            <div className="rounded-xl border border-yellow-400/30 bg-yellow-500/10 p-4 text-center">
              <div className="mb-2 flex items-center justify-center gap-2 text-yellow-200">
                <Sparkles size={16} />
                <span className="text-xs font-bold uppercase tracking-[0.18em]">Lock Your Seat</span>
              </div>
              <p className="text-xs text-slate-300 mb-3">Strictly limited to 40 candidates per cohort.</p>
              <button
                onClick={() => {
                  const applyBtn = document.querySelector('button[data-apply]') || document.querySelector('nav button');
                  if (applyBtn) applyBtn.click();
                }}
                className="w-full py-2.5 bg-gradient-to-r from-yellow-400 to-emerald-400 text-slate-950 font-bold rounded-lg transition text-xs uppercase tracking-wider cursor-pointer hover:scale-[1.02] shadow-[0_0_20px_rgba(234,179,8,0.2)]"
              >
                Apply for Screening Interview
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
