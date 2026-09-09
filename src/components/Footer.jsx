import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer({ onApplyClick }) {
  return (
    <footer className="border-t border-white/10 bg-[#020b16] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 via-slate-950 to-yellow-500/10 p-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="section-kicker">Apply for the next cohort</p>
              <h2 className="section-title mt-2 max-w-xl text-left">Build the finance skillset employers expect, before they ask for it.</h2>
            </div>

            <button 
              onClick={onApplyClick || (() => {
                const formElement = document.getElementById('assessment-section');
                if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
              })}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-emerald-400 px-5 py-3 font-medium text-slate-950 shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:scale-105 transition cursor-pointer"
            >
              Start your application <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="font-serif text-2xl text-slate-100">Commerce Gurukulam</p>
            <p className="mt-2 text-slate-400">Commerce & finance execution for serious students.</p>
          </div>

          <div className="flex flex-col gap-3 text-left">
            <div className="flex items-start gap-3 max-w-sm text-slate-300">
              <MapPin size={18} className="shrink-0 mt-0.5 text-yellow-400" />
              <span className="leading-snug">Mettukuppam Rd, Odamanagar, Vanagaram, Chennai, Tamil Nadu 600095</span>
            </div>
            <a 
              href="https://wa.me/918428881144" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition"
            >
              <Phone size={18} className="shrink-0 text-yellow-400" /> 
              <span>+91 84288 81144</span>
            </a>
            <a 
              href="mailto:learn@commercegurukulam.com" 
              className="flex items-center gap-3 text-yellow-300 font-medium hover:underline"
            >
              <Mail size={18} className="shrink-0 text-yellow-400" /> 
              <span>learn@commercegurukulam.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
