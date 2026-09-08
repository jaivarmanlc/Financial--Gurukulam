import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const officialPhone = '918428881144'; // Official Admissions WhatsApp number
  const message = encodeURIComponent(
    'Hi Commerce Gurukulam Admissions! 👋 I would like to inquire about the 3-Month Executive Residential Accelerator and cohort availability.'
  );

  const whatsappUrl = `https://wa.me/${officialPhone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-3 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.4)] transition transform hover:scale-105 group cursor-pointer"
      title="Chat with Admissions on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle size={22} className="fill-slate-950 stroke-emerald-500" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
      </div>
      <span className="text-xs md:text-sm font-extrabold tracking-wide uppercase">
        WhatsApp Us
      </span>
    </a>
  );
}
