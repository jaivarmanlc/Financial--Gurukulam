import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { AudioLines, BrainCircuit, Calculator, CheckCircle2, Mic, RotateCcw, Sparkles, Square, TrendingUp } from 'lucide-react';

function formatNumber(value) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(value);
}

export default function FinanceLabs() {
  const [purchasePrice, setPurchasePrice] = useState(500);
  const [debt, setDebt] = useState(300);
  const [years, setYears] = useState(5);
  const [exitMultiple, setExitMultiple] = useState(8);
  const [roundSize, setRoundSize] = useState(4);
  const [preMoney, setPreMoney] = useState(18);
  const [founderPct, setFounderPct] = useState(70);

  // Voice Pitch Practice State
  const [rehearsals, setRehearsals] = useState(4);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [pitchScore, setPitchScore] = useState(null);
  const [activeScriptIdx, setActiveScriptIdx] = useState(0);

  const scripts = [
    {
      title: 'LBO Exit & Capital Structure',
      text: '“The business is operating at a strong growth rate, but the key question is whether the company can turn that momentum into sustainable value. Our model suggests a disciplined capital structure and clear exit path.”'
    },
    {
      title: 'DCF Intrinsic Valuation Defense',
      text: '“Based on our 5-year DCF model with an 8.5% WACC and 2.5% terminal growth, intrinsic value yields a 28% upside over current market price, even under conservative sensitivity scenarios.”'
    },
    {
      title: 'M&A Synergy Briefing',
      text: '“The proposed transaction is 12.4% EPS accretive in Year 1 post-closing. We have modeled $45M in run-rate cost synergies with minimal integration friction.”'
    }
  ];

  const handleStartPractice = () => {
    if (isRecording) return;
    setIsRecording(true);
    setPitchScore(null);
    setRecordingTime(0);

    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setRecordingTime(count);
      if (count >= 5) {
        clearInterval(interval);
        setIsRecording(false);
        setRehearsals((r) => r + 1);
        setPitchScore({
          score: '96/100',
          metrics: [
            { label: 'Pacing', val: '135 WPM' },
            { label: 'Tone', val: 'Executive' },
            { label: 'Coverage', val: '100%' }
          ]
        });
      }
    }, 1000);
  };

  const lbo = useMemo(() => {
    const equity = purchasePrice - debt;
    const exitValue = purchasePrice * exitMultiple;
    const endingEquity = exitValue - debt;
    const moic = endingEquity / equity;
    const irr = ((moic ** (1 / years)) - 1) * 100;
    return { equity, exitValue, endingEquity, moic, irr };
  }, [purchasePrice, debt, years, exitMultiple]);

  const capTable = useMemo(() => {
    const postMoney = preMoney + roundSize;
    const newInvestorPct = (roundSize / postMoney) * 100;
    const founderAfter = founderPct - (founderPct * newInvestorPct) / 100;
    return { postMoney, newInvestorPct, founderAfter };
  }, [roundSize, preMoney, founderPct]);

  const aiSummary = [
    { label: 'Revenue trend', value: '+18.4%' },
    { label: 'Margin expansion', value: '9.1 pts' },
    { label: 'Cash conversion', value: '82%' }
  ];

  return (
    <section id="finance-labs" className="terminal-panel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-kicker">Learn by doing</p>
          <h2 className="section-title"><span className="text-slate-100">Small simulations. </span><span className="text-yellow-400">Big</span><span className="text-slate-100"> execution </span><span className="text-emerald-400">confidence.</span></h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-yellow-300">
                <Calculator size={18} />
                <span className="text-sm uppercase tracking-[0.2em]">LBO practice simulator</span>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">Live model</div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Entry value</span>
                <input type="range" min="200" max="1000" step="10" value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))} className="w-full accent-amber-400" />
                <span className="block text-lg font-semibold text-slate-100">$ {formatNumber(purchasePrice)}M</span>
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Debt funded</span>
                <input type="range" min="100" max="700" step="10" value={debt} onChange={(e) => setDebt(Number(e.target.value))} className="w-full accent-emerald-400" />
                <span className="block text-lg font-semibold text-slate-100">$ {formatNumber(debt)}M</span>
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Hold period</span>
                <input type="range" min="3" max="7" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-yellow-400" />
                <span className="block text-lg font-semibold text-slate-100">{years} years</span>
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Exit multiple</span>
                <input type="range" min="5" max="12" step="0.5" value={exitMultiple} onChange={(e) => setExitMultiple(Number(e.target.value))} className="w-full accent-emerald-400" />
                <span className="block text-lg font-semibold text-slate-100">{exitMultiple.toFixed(1)}x</span>
              </label>
            </div>

            <div className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Initial equity</p>
                <p className="mt-2 text-2xl font-bold text-emerald-300">$ {formatNumber(lbo.equity)}M</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Exit value</p>
                <p className="mt-2 text-2xl font-bold text-yellow-300">$ {formatNumber(lbo.exitValue)}M</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">MOIC</p>
                <p className="mt-2 text-2xl font-bold text-slate-100">{lbo.moic.toFixed(2)}x</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">IRR</p>
                <p className="mt-2 text-2xl font-bold text-slate-100">{lbo.irr.toFixed(1)}%</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-300">
                <TrendingUp size={18} />
                <span className="text-sm uppercase tracking-[0.2em]">VC cap-table builder</span>
              </div>
              <div className="rounded-full border border-yellow-400/25 bg-yellow-500/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-yellow-300">Dilution math</div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Pre-money value</span>
                <input type="range" min="10" max="40" step="1" value={preMoney} onChange={(e) => setPreMoney(Number(e.target.value))} className="w-full accent-emerald-400" />
                <span className="block text-lg font-semibold text-slate-100">$ {preMoney}M</span>
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>New round size</span>
                <input type="range" min="2" max="12" step="0.5" value={roundSize} onChange={(e) => setRoundSize(Number(e.target.value))} className="w-full accent-yellow-400" />
                <span className="block text-lg font-semibold text-slate-100">$ {roundSize}M</span>
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Founder ownership</span>
                <input type="range" min="40" max="90" step="1" value={founderPct} onChange={(e) => setFounderPct(Number(e.target.value))} className="w-full accent-emerald-400" />
                <span className="block text-lg font-semibold text-slate-100">{founderPct}%</span>
              </label>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Post-money</p>
                <p className="mt-2 text-2xl font-bold text-emerald-300">$ {capTable.postMoney}M</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                <span>Investor stake</span>
                <span className="font-semibold text-yellow-300">{capTable.newInvestorPct.toFixed(1)}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-emerald-400 to-emerald-500" style={{ width: `${capTable.newInvestorPct}%` }} />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                <span>Founder after round</span>
                <span className="font-semibold text-slate-100">{capTable.founderAfter.toFixed(1)}%</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <div className="mb-5 flex items-center gap-2 text-emerald-300">
              <BrainCircuit size={18} />
              <span className="text-sm uppercase tracking-[0.2em]">AI financial analysis demo</span>
            </div>
            <div className="space-y-3">
              {aiSummary.map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 px-3 py-3">
                  <span className="text-sm text-slate-300">{label}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-500/5 px-2 py-1 text-xs font-medium text-emerald-200">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-yellow-300">
                  <Mic size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">Voice pitch practice</span>
                </div>
                <button
                  onClick={() => setActiveScriptIdx((prev) => (prev + 1) % scripts.length)}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-yellow-300 transition cursor-pointer"
                >
                  <RotateCcw size={12} /> Switch Script ({activeScriptIdx + 1}/{scripts.length})
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition-all">
                <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span className="font-bold text-yellow-400/90">{scripts[activeScriptIdx].title}</span>
                  <span className={`font-semibold ${isRecording ? 'text-rose-400 animate-pulse' : 'text-emerald-300'}`}>
                    {isRecording ? `🔴 Live Recording (00:0${5 - recordingTime}s)` : 'Ready'}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-200 font-serif italic">
                  {scripts[activeScriptIdx].text}
                </p>

                {isRecording && (
                  <div className="mt-4 flex items-center justify-between border-t border-rose-500/30 pt-3">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-mono">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping" />
                      Listening to microphone input...
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="h-4 w-1 bg-amber-400 animate-[bounce_0.6s_infinite_100ms]" />
                      <span className="h-6 w-1 bg-emerald-400 animate-[bounce_0.6s_infinite_200ms]" />
                      <span className="h-3 w-1 bg-cyan-400 animate-[bounce_0.6s_infinite_300ms]" />
                      <span className="h-5 w-1 bg-yellow-400 animate-[bounce_0.6s_infinite_400ms]" />
                    </div>
                  </div>
                )}
              </div>

              {pitchScore && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                      <Sparkles size={14} /> AI Pitch Evaluation
                    </div>
                    <span className="rounded-full bg-emerald-400/20 px-2.5 py-0.5 text-xs font-bold text-emerald-300">
                      Score: {pitchScore.score}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    {pitchScore.metrics.map((m) => (
                      <div key={m.label} className="rounded-lg bg-slate-900/60 p-1.5 border border-white/5">
                        <p className="text-slate-400">{m.label}</p>
                        <p className="font-semibold text-emerald-200 mt-0.5">{m.val}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-yellow-400/20 bg-yellow-500/5 px-4 py-3">
              <div className="flex items-center gap-2 text-yellow-200">
                <AudioLines size={16} />
                <span className="text-sm font-medium">Voice notes: {rehearsals} rehearsals</span>
              </div>
              <button 
                onClick={handleStartPractice}
                disabled={isRecording}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition transform active:scale-95 cursor-pointer flex items-center gap-1.5 ${
                  isRecording 
                    ? 'bg-rose-500 text-white animate-pulse' 
                    : 'bg-gradient-to-r from-yellow-400 to-emerald-400 text-slate-950 hover:scale-105 shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                }`}
              >
                {isRecording ? (
                  <>
                    <Square size={12} className="fill-white" /> Recording...
                  </>
                ) : (
                  <>
                    <Mic size={14} /> {pitchScore ? 'Re-record Pitch' : 'Practice'}
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
