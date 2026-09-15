import { useState } from 'react';
import { X, CheckCircle2, Clock, Award, Star, Tag, ShieldCheck, ArrowRight, Zap, Download } from 'lucide-react';

export default function CourseModal({ course, isOpen, onClose, onEnrollClick }) {
  const [promoApplied, setPromoApplied] = useState(true);
  const [promoCode, setPromoCode] = useState('COLLEGE70');

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-3xl border border-emerald-500/30 bg-[#061224] p-6 md:p-8 shadow-2xl text-slate-100 my-8">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full bg-slate-900 p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <X size={20} />
        </button>

        {/* Top Header Tag */}
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-300 mb-3">
          <Zap size={14} className="text-amber-400" />
          <span>{course.badge || 'POPULAR COURSE'}</span>
        </div>

        {/* Course Title */}
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-2">
          {course.title}
        </h2>
        <p className="text-slate-300 text-sm mb-6 font-medium">
          {course.tagline}
        </p>

        {/* Course Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-6">
          <div>
            <p className="text-[11px] text-slate-400 font-semibold uppercase">Duration</p>
            <p className="text-sm font-bold text-amber-300 flex items-center gap-1">
              <Clock size={14} /> {course.duration}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-slate-400 font-semibold uppercase">Target Audience</p>
            <p className="text-sm font-bold text-white">{course.targetAudience || 'College Students'}</p>
          </div>
          <div>
            <p className="text-[11px] text-slate-400 font-semibold uppercase">Rating</p>
            <p className="text-sm font-bold text-amber-300 flex items-center gap-1">
              <Star size={14} className="fill-amber-400 text-amber-400" /> {course.rating}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-slate-400 font-semibold uppercase">Practical Projects</p>
            <p className="text-sm font-bold text-emerald-300">100% Live Case Files</p>
          </div>
        </div>

        {/* Mind-Trigger Callout Box */}
        {course.psychologicalPush && (
          <div className="mb-6 rounded-xl border border-amber-500/30 bg-amber-950/20 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">💡 WHY COLLEGE STUDENTS NEED THIS</p>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              "{course.psychologicalPush}"
            </p>
          </div>
        )}

        {/* Detailed Week-by-Week Syllabus */}
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
            <CheckCircle2 size={16} /> Complete Week-by-Week Curriculum
          </h3>
          <div className="space-y-2.5">
            {course.detailedSyllabus ? (
              course.detailedSyllabus.map((item, idx) => (
                <div key={idx} className="rounded-xl bg-slate-900/60 p-3.5 border border-slate-800 flex items-start gap-3">
                  <span className="rounded bg-emerald-500/20 text-emerald-300 text-xs font-extrabold px-2.5 py-1 flex-shrink-0">
                    {item.week}
                  </span>
                  <p className="text-xs font-medium text-slate-200 mt-0.5">{item.topic}</p>
                </div>
              ))
            ) : (
              course.highlights.map((item, idx) => (
                <div key={idx} className="rounded-xl bg-slate-900/60 p-3 border border-slate-800 text-xs text-slate-200 font-medium">
                  • {item}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Pricing & Checkout Block */}
        <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-amber-950/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-amber-300">{course.discountPrice}</span>
              <span className="text-sm text-slate-400 line-through font-semibold">{course.originalPrice}</span>
              <span className="rounded bg-amber-400/20 text-amber-300 text-xs font-extrabold px-2 py-0.5 border border-amber-400/30">
                SAVE 70%
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-medium flex items-center gap-1">
              <Tag size={12} className="text-amber-400" /> College Discount Code <strong className="text-emerald-300">COLLEGE70</strong> Applied!
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                if (onEnrollClick) onEnrollClick(course);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 hover:scale-105 transition cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              Enroll Instant Access <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Guarantee footer */}
        <div className="mt-4 text-center">
          <p className="text-[11px] text-slate-400 font-medium flex items-center justify-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-400" />
            100% Refund Guarantee • ISO Verified Certificate Included • Lifetime Video Access
          </p>
        </div>

      </div>
    </div>
  );
}
