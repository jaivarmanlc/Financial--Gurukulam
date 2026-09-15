import { useState } from 'react';
import { courses, courseCategories } from '../data/content';
import { CheckCircle2, Clock, Star, Zap, ArrowRight, BookOpen, ShieldCheck, Tag } from 'lucide-react';
import CourseModal from './CourseModal';

export default function CourseCatalog({ onEnrollClick }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  const handleOpenSyllabus = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <section id="courses" className="relative py-20 overflow-hidden bg-[#030a16]">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.08),_transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-300">
            <Zap size={14} className="text-amber-400" />
            30-DAY & FASTTRACK SKILL CATALOG
          </span>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Designed Exclusively For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300">
              College Commerce Students
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Stop waiting until your final year to realize college doesn't teach practical skills. Choose your 30-Day course or 7-Day FastTrack sprint below and build your high-paid resume today!
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {courseCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-extrabold transition cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-105'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-amber-400/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              className="group relative rounded-3xl border border-slate-800 bg-[#051122]/90 p-6 md:p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
            >
              {/* Card Badge & Duration */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full">
                    {course.badge}
                  </span>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Clock size={12} /> {course.duration}
                  </span>
                </div>

                {/* Course Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white group-hover:text-amber-300 transition-colors">
                  {course.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium">
                  {course.tagline}
                </p>

                {/* Student Proof Bar */}
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-400 border-y border-white/5 py-2.5">
                  <span className="flex items-center gap-1 text-amber-300 font-bold">
                    <Star size={13} className="fill-amber-400 text-amber-400" /> {course.rating}
                  </span>
                  <span>•</span>
                  <span className="font-medium text-slate-300">{course.enrolledCount}</span>
                </div>

                {/* Practical Highlights List */}
                <div className="mt-5 space-y-2">
                  {course.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                      <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Mind Push Note */}
                <div className="mt-5 rounded-xl bg-slate-900/60 p-3 border border-slate-800/80">
                  <p className="text-[11px] text-slate-300 italic font-medium">
                    "{course.psychologicalPush}"
                  </p>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Price Display */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-amber-300">{course.discountPrice}</span>
                    <span className="text-xs text-slate-500 line-through font-semibold">{course.originalPrice}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Tag size={10} /> 70% Student Discount Applied
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => handleOpenSyllabus(course)}
                    className="flex-1 sm:flex-none text-xs font-bold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-xl transition cursor-pointer flex items-center justify-center gap-1"
                  >
                    <BookOpen size={14} /> Syllabus
                  </button>

                  <button
                    onClick={() => onEnrollClick && onEnrollClick(course)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 px-5 py-2.5 text-xs font-extrabold text-slate-950 hover:scale-105 transition cursor-pointer shadow-lg shadow-emerald-500/20"
                  >
                    Enroll Now <ArrowRight size={14} />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Detailed Modal Trigger */}
        <CourseModal 
          course={selectedCourse}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onEnrollClick={(c) => onEnrollClick && onEnrollClick(c)}
        />

      </div>
    </section>
  );
}
