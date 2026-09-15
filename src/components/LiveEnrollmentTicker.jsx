import { useState, useEffect } from 'react';
import { liveStudentNotifications } from '../data/content';
import { CheckCircle2, X, Zap } from 'lucide-react';

export default function LiveEnrollmentTicker({ onEnrollClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show toast after 2.5 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    // Rotate notification every 7 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % liveStudentNotifications.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  const notification = liveStudentNotifications[currentIndex];

  if (!isVisible || !notification) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-sm animate-bounce-short">
      <div 
        onClick={onEnrollClick}
        className="group relative rounded-2xl border border-emerald-500/40 bg-[#051329]/95 p-4 shadow-2xl backdrop-blur-xl flex items-start gap-3 cursor-pointer hover:border-amber-400/60 transition"
      >
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
          }}
          className="absolute top-2 right-2 text-slate-500 hover:text-white transition"
        >
          <X size={14} />
        </button>

        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center text-slate-950 font-black text-xs flex-shrink-0 shadow-md">
          {notification.name.charAt(0)}
        </div>

        <div className="pr-4">
          <p className="text-xs font-bold text-white flex items-center gap-1">
            {notification.name} <span className="text-[10px] text-slate-400">({notification.college})</span>
          </p>
          <p className="text-[11px] font-semibold text-emerald-300 mt-0.5">
            Enrolled in <strong className="text-amber-300">{notification.course}</strong>
          </p>
          <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 size={11} /> Verified Enrollment
            </span>
            <span>{notification.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
