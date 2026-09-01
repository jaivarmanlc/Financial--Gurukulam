import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, CheckCircle2, Sparkles } from 'lucide-react';

const questions = [
  {
    prompt: 'A company has revenue growth, better margins and rising cash flow. Which signal would most strongly support a premium valuation?',
    options: ['Higher employee count', 'Strong free cash flow conversion', 'More office space', 'Lower interest coverage'],
    correct: 1
  },
  {
    prompt: 'When analyzing a startup cap table, what matters most before a funding round?',
    options: ['Color of the brand deck', 'Dilution impact and ownership logic', 'Office location', 'Number of social media followers'],
    correct: 1
  },
  {
    prompt: 'Which financial output best demonstrates execution ability?',
    options: ['A polished slide with no model', 'A built valuation case with assumptions and rationale', 'A generic business summary', 'A list of competitors'],
    correct: 1
  },
  {
    prompt: 'Why do board presentations matter in finance jobs?',
    options: ['They look good in a PDF', 'They explain decisions with numbers and narrative', 'They replace accounting', 'They remove the need for modeling'],
    correct: 1
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
    <section className="terminal-panel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-kicker">Finance readiness assessment</p>
          <h2 className="section-title mx-auto max-w-3xl">Check whether you are building the decision-making muscle employers expect.</h2>
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
                <p className="mb-3 text-sm font-medium text-slate-100">Q{index + 1}. {question.prompt}</p>
                <div className="grid gap-2">
                  {question.options.map((option, optionIndex) => {
                    const selected = answers[index] === optionIndex;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleAnswer(index, optionIndex)}
                        className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
                          selected
                            ? 'border-emerald-400/60 bg-emerald-500/10 text-emerald-200'
                            : 'border-white/10 bg-slate-950/60 text-slate-300 hover:border-yellow-400/40'
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

          <div className="rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 via-slate-950 to-emerald-500/10 p-6 shadow-[0_0_40px_rgba(52,211,153,0.08)]">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-yellow-300">
                <BarChart3 size={18} />
                <span className="text-sm uppercase tracking-[0.2em]">Readiness</span>
              </div>
              <span className="text-xl font-semibold text-slate-100">{readiness}%</span>
            </div>

            <div className="mb-6 h-3 overflow-hidden rounded-full bg-slate-800/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-emerald-400 to-emerald-500 transition-all duration-500"
                style={{ width: `${readiness}%` }}
              />
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Current score</p>
                <p className="mt-2 text-3xl font-bold text-emerald-300">{score}/{questions.length}</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <div className="mb-2 flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 size={16} />
                  <span className="text-sm uppercase tracking-[0.18em]">Outcome</span>
                </div>
                <p className="text-sm leading-6 text-slate-300">
                  {readiness >= 75
                    ? 'You already think like a finance operator. Gurukulam will sharpen your edge into deal-level execution.'
                    : readiness >= 50
                      ? 'You know the basics. The program will turn your understanding into action and presentation confidence.'
                      : 'You are at the right starting point. The next step is converting theory into practical models and persuasive decisions.'}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/20 bg-yellow-500/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-yellow-200">
                  <Sparkles size={16} />
                  <span className="text-sm uppercase tracking-[0.18em]">Suggested next move</span>
                </div>
                <p className="text-sm leading-6 text-slate-300">Start with the valuation and LBO labs. They build the fastest route from campus knowledge to employable finance capability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
