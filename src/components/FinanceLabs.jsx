import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AudioLines, BrainCircuit, Calculator, CheckCircle2, Mic, MicOff, RotateCcw, Sparkles, Square, TrendingUp, Volume2, Play } from 'lucide-react';

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

  // Real Voice Pitch Practice State
  const [rehearsals, setRehearsals] = useState(4);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [liveTranscript, setLiveTranscript] = useState('');
  const [pitchScore, setPitchScore] = useState(null);
  const [activeScriptIdx, setActiveScriptIdx] = useState(0);
  const [speechError, setSpeechError] = useState(null);

  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const transcriptRef = useRef('');

  const scripts = [
    {
      title: 'LBO Exit & Capital Structure',
      text: 'The business is operating at a strong growth rate, but the key question is whether the company can turn that momentum into sustainable value. Our model suggests a disciplined capital structure and clear exit path.',
      keyTerms: ['growth rate', 'sustainable value', 'capital structure', 'exit path']
    },
    {
      title: 'DCF Intrinsic Valuation Defense',
      text: 'Based on our 5-year DCF model with an 8.5% WACC and 2.5% terminal growth, intrinsic value yields a 28% upside over current market price, even under conservative sensitivity scenarios.',
      keyTerms: ['DCF model', 'WACC', 'terminal growth', 'intrinsic value', 'upside']
    },
    {
      title: 'M&A Synergy Briefing',
      text: 'The proposed transaction is 12.4% EPS accretive in Year 1 post-closing. We have modeled $45M in run-rate cost synergies with minimal integration friction.',
      keyTerms: ['EPS accretive', 'post-closing', 'cost synergies', 'integration']
    }
  ];

  // AI Financial Audit Lab State
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [isAuditing, setIsAuditing] = useState(false);

  const auditCompanies = [
    {
      name: 'Reliance Industries (BSE Audit)',
      ticker: 'RELIANCE.BO',
      period: 'Q4 FY26 SEC Extraction & Forensic Audit',
      metrics: [
        { label: 'Revenue trend', value: '+18.4% YoY', status: 'Optimal' },
        { label: 'EBITDA margin expansion', value: '9.1 pts', status: 'Expanding' },
        { label: 'Cash flow conversion', value: '82.0%', status: 'Strong' },
        { label: 'Net Debt / EBITDA ratio', value: '1.45x', status: 'Healthy' },
        { label: 'Working capital cycle', value: '28 days', status: 'Efficient' },
        { label: 'AI Forensic Risk Score', value: '99/100', status: 'Clean' }
      ]
    },
    {
      name: 'Apple Inc. 10-K SEC Filing',
      ticker: 'NASDAQ: AAPL',
      period: 'Annual 10-K Forensic Scan',
      metrics: [
        { label: 'Services Gross Margin', value: '74.2%', status: 'High' },
        { label: 'Share Repurchase Yield', value: '4.1%', status: 'Accretive' },
        { label: 'Free Cash Flow Yield', value: '6.8%', status: 'Robust' },
        { label: 'Inventory Turnover', value: '38.5x', status: 'World Class' },
        { label: 'R&D to Revenue', value: '7.8%', status: 'Sustained' },
        { label: 'AI Forensic Risk Score', value: '98/100', status: 'Clean' }
      ]
    }
  ];

  const handlePlayAudioPreview = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(true);
      const utterance = new SpeechSynthesisUtterance(scripts[activeScriptIdx].text);
      utterance.rate = 0.92;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const evaluateSpokenPitch = (spokenText, targetScript, durationSeconds) => {
    const cleanSpoken = (spokenText || '').trim().toLowerCase();
    const cleanTarget = targetScript.text.toLowerCase();

    // If user didn't speak or mic captured nothing
    if (!cleanSpoken || cleanSpoken.length < 3) {
      return {
        score: '0/100',
        grade: 'No Speech Recognized',
        accuracyPct: '0%',
        wpm: '0 WPM',
        termsMatched: `0/${targetScript.keyTerms.length} Terms`,
        feedback: 'No voice recognized. Please speak the presentation script aloud into your microphone.',
        noSpeech: true
      };
    }

    // Key terms matching
    let matchedTerms = 0;
    targetScript.keyTerms.forEach((term) => {
      if (cleanSpoken.includes(term.toLowerCase())) {
        matchedTerms += 1;
      }
    });

    const spokenWords = cleanSpoken.split(/\s+/).filter(Boolean);
    const targetWords = cleanTarget.split(/\s+/).filter(Boolean);
    
    const duration = Math.max(2, durationSeconds || 4);
    const calculatedWpm = Math.round((spokenWords.length / duration) * 60);

    let matchCount = 0;
    spokenWords.forEach((word) => {
      if (targetWords.includes(word)) matchCount += 1;
    });

    const accuracyRatio = matchCount / Math.max(1, targetWords.length);
    const accuracyPct = Math.min(100, Math.round(accuracyRatio * 100));
    const termRatio = matchedTerms / Math.max(1, targetScript.keyTerms.length);

    const finalScore = Math.min(100, Math.round((accuracyRatio * 50) + (termRatio * 50)));

    return {
      score: `${finalScore}/100`,
      grade: finalScore >= 80 ? 'Executive Board Grade' : finalScore >= 50 ? 'Moderate Pitch' : 'Needs Practice',
      accuracyPct: `${accuracyPct}%`,
      wpm: `${calculatedWpm} WPM`,
      termsMatched: `${matchedTerms}/${targetScript.keyTerms.length} Terms`,
      feedback: finalScore >= 80 
        ? 'Excellent articulation! Clear pace and key term coverage.' 
        : `Voice pitch captured. Matched ${matchedTerms}/${targetScript.keyTerms.length} key terms.`,
      noSpeech: false
    };
  };

  const stopRecording = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        console.log(e);
      }
    }
    setIsRecording(false);
  };

  const handleStartPractice = () => {
    if (isRecording) {
      stopRecording();
      return;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }

    setSpeechError(null);
    setPitchScore(null);
    setLiveTranscript('');
    transcriptRef.current = '';
    setRecordingTime(0);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
          setIsRecording(true);
          startTimeRef.current = Date.now();
          
          timerRef.current = setInterval(() => {
            setRecordingTime((prev) => {
              if (prev >= 8) {
                stopRecording();
                return 8;
              }
              return prev + 1;
            });
          }, 1000);
        };

        recognition.onresult = (event) => {
          let currentText = '';
          for (let i = 0; i < event.results.length; i++) {
            currentText += event.results[i][0].transcript + ' ';
          }
          transcriptRef.current = currentText;
          setLiveTranscript(currentText);
        };

        recognition.onerror = (event) => {
          console.log('Speech recognition event:', event.error);
        };

        recognition.onend = () => {
          setIsRecording(false);
          if (timerRef.current) clearInterval(timerRef.current);

          const duration = Math.max(2, (Date.now() - (startTimeRef.current || Date.now())) / 1000);
          setRehearsals((r) => r + 1);

          const spokenText = transcriptRef.current.trim();
          if (!spokenText) {
            setLiveTranscript('⚠️ No speech or voice recognized.');
          } else {
            setLiveTranscript(spokenText);
          }

          const evaluated = evaluateSpokenPitch(spokenText, scripts[activeScriptIdx], duration);
          setPitchScore(evaluated);
        };

        recognition.start();
      } catch (err) {
        console.error('Speech init error:', err);
        fallbackSimulatedPractice();
      }
    } else {
      fallbackSimulatedPractice();
    }
  };

  const fallbackSimulatedPractice = () => {
    setIsRecording(true);
    let count = 0;
    timerRef.current = setInterval(() => {
      count += 1;
      setRecordingTime(count);
      if (count >= 5) {
        clearInterval(timerRef.current);
        setIsRecording(false);
        setRehearsals((r) => r + 1);
        const spokenText = transcriptRef.current.trim();
        if (!spokenText) {
          setLiveTranscript('⚠️ No speech or voice recognized.');
        }
        const evaluated = evaluateSpokenPitch(spokenText, scripts[activeScriptIdx], 5);
        setPitchScore(evaluated);
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
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-emerald-300">
                  <BrainCircuit size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">AI Financial Audit Lab</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      setSelectedCompany((prev) => (prev + 1) % auditCompanies.length);
                      setIsAuditing(false);
                    }}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-emerald-300 transition cursor-pointer"
                  >
                    <RotateCcw size={12} /> Switch Filing ({selectedCompany + 1}/{auditCompanies.length})
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-100 text-sm">{auditCompanies[selectedCompany].name}</span>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cyan-300 font-mono">
                    {auditCompanies[selectedCompany].ticker}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono mb-3">{auditCompanies[selectedCompany].period}</p>

                <div className="space-y-2.5">
                  {auditCompanies[selectedCompany].metrics.map(({ label, value, status }) => (
                    <div key={label} className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-950/60 px-3 py-2 text-xs">
                      <span className="text-slate-300">{label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 font-mono">{status}</span>
                        <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 font-bold text-emerald-300">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {isAuditing && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl border border-cyan-400/30 bg-cyan-950/30 p-3 mb-4 text-xs">
                  <div className="flex items-center justify-between text-cyan-300 font-bold mb-1">
                    <span className="flex items-center gap-1.5">
                      <Sparkles size={14} className="animate-spin text-cyan-400" /> AI Forensic Scanner
                    </span>
                    <span className="text-emerald-400 font-mono">VERIFIED CLEAN</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    ✓ 480 SEC notes cross-referenced — Zero accounting anomalies detected. Cash-to-EBITDA reconciliation verified.
                  </p>
                </motion.div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-500/5 px-4 py-3">
              <div className="flex items-center gap-2 text-emerald-200">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span className="text-sm font-medium">Audit Protocol: 100% SEC Automated</span>
              </div>
              <button 
                onClick={() => setIsAuditing((prev) => !prev)}
                className="rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 text-xs font-bold text-slate-950 hover:scale-105 transition shadow-[0_0_15px_rgba(52,211,153,0.3)] cursor-pointer"
              >
                {isAuditing ? '✓ Scan Complete' : 'Run AI Forensic Scan'}
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-yellow-300">
                  <Mic size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">Voice pitch practice</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePlayAudioPreview}
                    className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border transition cursor-pointer ${
                      isPlayingAudio 
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40 animate-pulse' 
                        : 'bg-yellow-500/10 text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/20'
                    }`}
                  >
                    <Volume2 size={13} /> {isPlayingAudio ? 'Speaking...' : 'Listen to AI Voice'}
                  </button>

                  <button
                    onClick={() => {
                      stopRecording();
                      setActiveScriptIdx((prev) => (prev + 1) % scripts.length);
                      setPitchScore(null);
                      setLiveTranscript('');
                    }}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-yellow-300 transition cursor-pointer"
                  >
                    <RotateCcw size={12} /> Switch Script ({activeScriptIdx + 1}/{scripts.length})
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition-all">
                <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span className="font-bold text-yellow-400/90">{scripts[activeScriptIdx].title}</span>
                  <span className={`font-semibold ${isRecording ? 'text-rose-400 animate-pulse' : 'text-emerald-300'}`}>
                    {isRecording ? `🔴 Listening (00:0${8 - recordingTime}s)` : 'Ready'}
                  </span>
                </div>
                
                <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">Target Pitch Script:</p>
                <p className="text-sm leading-relaxed text-slate-200 font-serif italic bg-slate-950/40 p-3 rounded-xl border border-white/5">
                  “{scripts[activeScriptIdx].text}”
                </p>

                {/* Spoken Voice Transcript Display */}
                {(isRecording || liveTranscript) && (
                  <div className="mt-3 rounded-xl border border-cyan-400/30 bg-cyan-950/40 p-3 text-xs">
                    <div className="flex items-center justify-between text-cyan-300 font-bold mb-1.5 uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <AudioLines size={14} className={isRecording ? 'animate-pulse text-rose-400' : ''} />
                        {isRecording ? 'Live Microphone Stream:' : 'Recorded Audio Text:'}
                      </span>
                      {isRecording && <span className="text-[10px] text-rose-400 animate-pulse font-mono">LIVE MIC</span>}
                    </div>
                    <p className="text-slate-100 font-mono leading-relaxed min-h-[24px]">
                      {liveTranscript || <span className="text-slate-400 italic animate-pulse">Listening... speak the presentation text aloud now!</span>}
                    </p>
                  </div>
                )}
              </div>

              {/* Real AI Speech Evaluation Scorecard */}
              {pitchScore && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className={`mt-4 rounded-2xl border p-3.5 ${
                    pitchScore.noSpeech 
                      ? 'border-amber-500/40 bg-amber-500/10' 
                      : 'border-emerald-400/30 bg-emerald-500/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                        pitchScore.noSpeech ? 'text-amber-300' : 'text-emerald-300'
                      }`}>
                        <Sparkles size={14} /> AI Speech Evaluation
                      </div>
                      <p className={`text-[11px] mt-0.5 ${
                        pitchScore.noSpeech ? 'text-amber-200/90 font-medium' : 'text-emerald-200/80'
                      }`}>{pitchScore.feedback}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold border shrink-0 ${
                      pitchScore.noSpeech 
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                        : 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30'
                    }`}>
                      {pitchScore.score}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-[11px] mt-2">
                    <div className="rounded-lg bg-slate-900/80 p-2 border border-white/5">
                      <p className="text-slate-400 text-[10px]">Accuracy</p>
                      <p className={`font-bold mt-0.5 ${pitchScore.noSpeech ? 'text-amber-300' : 'text-emerald-300'}`}>{pitchScore.accuracyPct}</p>
                    </div>
                    <div className="rounded-lg bg-slate-900/80 p-2 border border-white/5">
                      <p className="text-slate-400 text-[10px]">Pacing</p>
                      <p className={`font-bold mt-0.5 ${pitchScore.noSpeech ? 'text-amber-300' : 'text-yellow-300'}`}>{pitchScore.wpm}</p>
                    </div>
                    <div className="rounded-lg bg-slate-900/80 p-2 border border-white/5">
                      <p className="text-slate-400 text-[10px]">Key Terms</p>
                      <p className={`font-bold mt-0.5 ${pitchScore.noSpeech ? 'text-amber-300' : 'text-cyan-300'}`}>{pitchScore.termsMatched}</p>
                    </div>
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
                className={`rounded-full px-4 py-2 text-xs font-bold transition transform active:scale-95 cursor-pointer flex items-center gap-2 ${
                  isRecording 
                    ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse shadow-[0_0_20px_rgba(244,63,94,0.4)]' 
                    : 'bg-gradient-to-r from-yellow-400 to-emerald-400 text-slate-950 hover:scale-105 shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                }`}
              >
                {isRecording ? (
                  <>
                    <Square size={13} className="fill-white" /> Stop & Evaluate
                  </>
                ) : (
                  <>
                    <Mic size={14} /> {pitchScore ? 'Re-record Pitch' : 'Start Mic Practice'}
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
