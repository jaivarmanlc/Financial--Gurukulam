import { ArrowRight, Menu } from 'lucide-react';
import { navItems } from '../data/content';

export default function Navbar({ onApplyClick }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020b16]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex h-20 w-[205px] min-w-0 items-center sm:h-24 sm:w-[255px]">
          <img
            src="/images/Gemini_Generated_Image_plmcm2plmcm2plmc.png"
            alt="Commerce Gurukulam"
            className="h-full w-full object-contain mix-blend-screen"
          />
        </div>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-slate-300 transition hover:text-yellow-300">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button onClick={onApplyClick} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-yellow-400/40 hover:text-yellow-300">
            Student login
          </button>
          <button onClick={onApplyClick} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 shadow-[0_0_26px_rgba(52,211,153,0.25)] transition hover:scale-[1.02]">
            Apply now <ArrowRight size={16} />
          </button>
        </div>

        <button onClick={onApplyClick} className="rounded-full border border-white/10 bg-slate-950/70 p-2 md:hidden">
          <Menu size={18} className="text-slate-200" />
        </button>
      </nav>
    </header>
  );
}
