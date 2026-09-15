import { Award, ShieldCheck, CheckCircle2, QrCode, Sparkles, ExternalLink } from 'lucide-react';

export default function CertificateShowcase({ onEnrollClick }) {
  return (
    <section className="relative py-20 bg-[#020916] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 mb-4">
              <Award size={14} /> EMPLOYER-VERIFIED RESUME BADGE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Stand Out To Employers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300">
                With QR-Verified Certificates
              </span>
            </h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Upon completing any 30-Day Course or FastTrack Sprint, you earn an official, ISO 9001:2015 certified Certificate of Practical Execution equipped with a unique QR verification URL.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">Direct LinkedIn Integration:</strong> Add 1-click credential badge to your LinkedIn profile.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">Live QR Code Verification:</strong> Hiring managers can scan to view your real practical project portfolio.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white">ISO & Government Tax Authorized:</strong> Recognized across Big-4, Investment Banks & Top Corporates.</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onEnrollClick}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 px-7 py-3.5 text-xs font-extrabold uppercase text-slate-950 hover:scale-105 transition shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                Earn Your Certificate <Sparkles size={16} />
              </button>
            </div>

          </div>

          {/* Right Certificate Graphic Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/20 to-emerald-500/20 blur-2xl opacity-60" />
            
            <div className="relative rounded-3xl border-2 border-amber-400/40 bg-[#061426] p-6 sm:p-8 shadow-2xl">
              
              {/* Top Certificate Branding */}
              <div className="flex items-center justify-between pb-6 border-b border-amber-400/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center font-black text-amber-300 text-lg font-serif">
                    CG
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold uppercase tracking-widest text-amber-300 font-serif">COMMERCE GURUKULAM</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">ISO 9001:2015 CERTIFIED ACADEMY</p>
                  </div>
                </div>
                <div className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-[10px] font-extrabold text-emerald-300">
                  VERIFIED CREDENTIAL
                </div>
              </div>

              {/* Certificate Body */}
              <div className="py-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">CERTIFICATE OF PRACTICAL MASTERY</p>
                <p className="text-xs text-slate-300 mt-2">This is to certify that</p>
                <h3 className="text-2xl font-serif font-black text-white mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400">
                  [ Your Full Name ]
                </h3>
                <p className="text-xs text-slate-300 mt-2">has successfully completed the intensive 30-Day Practical Program in</p>
                <p className="text-base font-bold text-emerald-300 mt-1">
                  Practical GST, Income Tax Filing & Advanced Corporate Excel
                </p>
                <p className="text-[11px] text-slate-400 mt-3 max-w-md mx-auto">
                  Demonstrated hands-on competence in live GSTR-3B portal reconciliation, 3-statement financial modeling, and corporate balance sheet finalization.
                </p>
              </div>

              {/* Certificate Footer */}
              <div className="pt-6 border-t border-amber-400/20 flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">ISSUED BY</p>
                  <p className="text-xs font-bold text-slate-200">Director of Academic & Skill Board</p>
                </div>

                <div className="flex items-center gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800">
                  <QrCode size={28} className="text-amber-300" />
                  <div className="text-[9px] text-slate-400 text-left">
                    <p className="font-extrabold text-white">SCAN TO VERIFY</p>
                    <p>ID: CG-2026-9842</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
