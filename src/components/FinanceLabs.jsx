import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { AudioLines, BrainCircuit, Calculator, Mic, TrendingUp } from 'lucide-react';

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
          <h2 className="section-title">Small simulations. Big execution confidence.</h2>
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

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <div className="mb-5 flex items-center gap-2 text-yellow-300">
              <Mic size={18} />
              <span className="text-sm uppercase tracking-[0.2em]">Voice pitch practice</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>Script</span>
                <span className="text-emerald-300">Ready</span>
              </div>
              <p className="text-sm leading-7 text-slate-200">
                “The business is operating at a strong growth rate, but the key question is whether the company can turn that momentum into sustainable value. Our model suggests a disciplined capital structure and clear exit path.”
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl border border-yellow-400/20 bg-yellow-500/5 px-4 py-3">
              <div className="flex items-center gap-2 text-yellow-200">
                <AudioLines size={16} />
                <span className="text-sm">Voice notes: 4 rehearsals</span>
              </div>
              <button className="rounded-full bg-gradient-to-r from-yellow-400 to-emerald-400 px-3 py-1.5 text-xs font-semibold text-slate-950">Practice</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
