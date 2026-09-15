import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Tag } from 'lucide-react';
import { navItems, alertTickerMessages } from '../data/content';

export default function Navbar({ onApplyClick, onHomeClick }) {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % alertTickerMessages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-500/20 bg-[#020914]/95 backdrop-blur-xl shadow-lg">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 px-4 py-1.5 border-b border-emerald-500/20 text-xs text-center font-medium flex items-center justify-center gap-2 text-emerald-300">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="animate-fade-in font-semibold tracking-wide text-slate-100 truncate max-w-xl">
          {alertTickerMessages[tickerIndex]}
        </span>
        <button 
          onClick={onApplyClick}
          className="ml-2 hidden sm:inline-flex items-center gap-1 rounded bg-amber-400/20 px-2 py-0.5 text-[11px] font-bold text-amber-300 hover:bg-amber-400/30 transition border border-amber-400/30 shrink-0"
        >
          <Tag size={11} /> Claim 70% OFF
        </button>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        
        {/* Brand Logo Only (Text Removed) */}
        <div 
          onClick={onHomeClick}
          className="flex items-center cursor-pointer group shrink-0"
        >
          {!imgError ? (
            <img 
              src="/logo.png" 
              alt="Commerce Gurukulam" 
              onError={() => setImgError(true)}
              className="h-11 md:h-14 w-auto object-contain transition group-hover:scale-105"
            />
          ) : (
            <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-amber-400 via-emerald-500 to-cyan-400 p-[2px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition">
              <div className="h-full w-full bg-[#030c1b] rounded-[10px] flex items-center justify-center font-bold text-amber-300 text-xl font-serif">
                CG
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-5 lg:gap-8 lg:flex">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="text-xs font-bold text-slate-300 transition hover:text-amber-300 tracking-wider uppercase whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Action Button */}
        <div className="hidden items-center gap-3 md:flex shrink-0">
          <button 
            onClick={onApplyClick} 
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-emerald-400 to-emerald-500 px-5 py-2.5 text-xs font-extrabold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition hover:scale-105 hover:shadow-[0_0_28px_rgba(245,158,11,0.4)] cursor-pointer whitespace-nowrap"
          >
            Enroll Now <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button 
            onClick={onApplyClick} 
            className="rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 px-3 py-1.5 text-xs font-extrabold text-slate-950 mr-1"
          >
            Enroll
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-xl border border-white/10 bg-slate-900 p-2 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#040e1f] px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-amber-300 py-1.5 border-b border-slate-800/50"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onApplyClick();
            }}
            className="w-full mt-2 py-3 bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 font-extrabold text-xs uppercase rounded-xl"
          >
            Enroll Now
          </button>
        </div>
      )}

    </header>
  );
}
