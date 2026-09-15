import { useState } from 'react';
import { X, CheckCircle2, PhoneCall, Loader2, Send, MessageCircle, Tag, ShieldCheck, Zap } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function StudentApplicationForm({ isOpen, onClose, preselectedCourse }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeName: '',
    courseTrack: preselectedCourse ? preselectedCourse.title : '30-Day Practical GST & Income Tax Masterclass',
    couponCode: 'COLLEGE70',
    motivation: 'I want to build real practical skills and get high-paid campus placement offers.',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const htmlMessage = `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #030b18; padding: 30px 10px; font-family: Arial, sans-serif;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #071329; border-radius: 16px; overflow: hidden; border: 1px solid #10b981;">
        <tr>
          <td style="background: linear-gradient(90deg, #f59e0b 0%, #10b981 100%); height: 6px;"></td>
        </tr>
        <tr>
          <td style="padding: 32px 28px; text-align: center; background-color: #030b18;">
            <h1 style="color: #ffffff; font-size: 24px; font-weight: 900; margin: 0; text-transform: uppercase;">
              Commerce Gurukulam
            </h1>
            <p style="color: #34d399; font-size: 13px; font-weight: bold; margin: 6px 0 0 0;">
              College Student Course Enrollment Receipt
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding: 28px; color: #e2e8f0; font-size: 14px; line-height: 1.6;">
            <p style="font-size: 16px; font-weight: bold; color: #ffffff; margin-top: 0;">
              Congratulations ${formData.fullName}! 🎉
            </p>
            <p style="color: #cbd5e1;">
              You have successfully enrolled in <strong>${formData.courseTrack}</strong> with the 70% College Discount code <strong style="color: #f59e0b;">${formData.couponCode}</strong>.
            </p>
            <div style="background-color: #030b18; border: 1px solid #10b981; border-radius: 12px; padding: 18px; margin: 20px 0;">
              <p style="margin: 0 0 8px 0; font-weight: bold; color: #34d399;">✓ Student Enrollment Summary:</p>
              <p style="margin: 4px 0; color: #e2e8f0;">• <strong>Student Name:</strong> ${formData.fullName}</p>
              <p style="margin: 4px 0; color: #e2e8f0;">• <strong>College/University:</strong> ${formData.collegeName || 'Commerce Student'}</p>
              <p style="margin: 4px 0; color: #e2e8f0;">• <strong>Course Selected:</strong> ${formData.courseTrack}</p>
              <p style="margin: 4px 0; color: #e2e8f0;">• <strong>Status:</strong> Seat Locked & Discount Applied</p>
            </div>
            <p style="color: #94a3b8; font-size: 13px;">
              Our Student Onboarding Mentor will reach you shortly on WhatsApp (<strong>${formData.phone}</strong>) with your live portal access keys and video lecture credentials.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;

    const plainTextMsg = `Dear ${formData.fullName},

Congratulations on enrolling in Commerce Gurukulam!

Selected Course: ${formData.courseTrack}
College: ${formData.collegeName}
Coupon Applied: ${formData.couponCode} (70% Off)

Our mentor will contact you shortly at ${formData.phone} with your portal credentials.

Warm regards,
Student Admissions
Commerce Gurukulam`;

    const templateParams = {
      to_name: formData.fullName,
      to_email: formData.email,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      background: formData.collegeName,
      motivation: formData.courseTrack,
      message: htmlMessage,
      plain_message: plainTextMsg,
      title: `Enrollment Confirmed: ${formData.courseTrack}`
    };

    try {
      const serviceId = 'service_qkw0nls';
      const templateId = 'template_nnrqffn';
      const publicKey = 'Pnq37zDUgO4VvOrAX';

      await emailjs.send(serviceId, templateId, templateParams, publicKey).catch((err) => {
        console.log('EmailJS transmission logged:', err);
      });
    } catch (error) {
      console.log('Dispatch logged:', error);
    } finally {
      setIsSending(false);
      setIsSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setIsSending(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-[#051124] rounded-3xl w-full max-w-xl relative border border-emerald-500/40 my-4 p-6 md:p-8 shadow-[0_0_60px_rgba(16,185,129,0.25)] text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition cursor-pointer rounded-full p-1.5 bg-slate-900"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-6 pr-8">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-extrabold px-3 py-1 border border-emerald-500/30 uppercase tracking-wider mb-2">
                <Zap size={13} className="text-amber-400 fill-amber-400" /> INSTANT STUDENT ENROLLMENT
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-white leading-tight">
                Enroll In Commerce Gurukulam
              </h2>
              <p className="text-slate-300 text-xs md:text-sm font-medium mt-1">
                Lock in your 70% College Student Grant discount before seats fill up!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Student Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1 uppercase tracking-wider">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Ananya Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition text-sm font-medium"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1 uppercase tracking-wider">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="student@college.edu"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1 uppercase tracking-wider">
                    WhatsApp Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition text-sm font-medium"
                  />
                </div>
              </div>

              {/* College Name & Course Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1 uppercase tracking-wider">
                  College / Institution Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. SRCC / Christ University / St. Xavier's"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1 uppercase tracking-wider">
                  Select 30-Day Course / FastTrack Program <span className="text-amber-400">*</span>
                </label>
                <select
                  name="courseTrack"
                  value={formData.courseTrack}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white focus:outline-none focus:border-emerald-400 transition text-sm font-medium"
                >
                  <option value="30-Day Practical GST, Income Tax & E-Filing Masterclass">30-Day Practical GST, Income Tax & E-Filing (₹1,499)</option>
                  <option value="30-Day Tally Prime + Advanced Financial Excel Mastery">30-Day Tally Prime + Advanced Excel (₹1,299)</option>
                  <option value="30-Day Wall Street Financial Modeling & DCF Valuation">30-Day Wall Street Financial Modeling & DCF (₹1,999)</option>
                  <option value="30-Day Technical Analysis & Stock Market Masterclass">30-Day Stock Market & Options Trading (₹1,399)</option>
                  <option value="7-Day FastTrack Corporate Accounting Exam Prep">7-Day FastTrack Semester Exam Victory (₹699)</option>
                  <option value="48-Hour Corporate Excel Speed Bootcamp">48-Hour Corporate Excel Speed Sprint (₹499)</option>
                </select>
              </div>

              {/* Coupon Box */}
              <div className="rounded-xl border border-amber-400/40 bg-amber-950/20 p-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Tag size={16} className="text-amber-400" />
                  <span className="font-bold text-amber-300">Code COLLEGE70 Applied</span>
                </div>
                <span className="font-extrabold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                  SAVED 70%
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-gradient-to-r from-amber-400 via-emerald-400 to-emerald-500 text-slate-950 font-extrabold rounded-xl transition transform hover:scale-[1.02] shadow-[0_0_25px_rgba(16,185,129,0.3)] text-sm md:text-base cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                {isSending ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Confirming Enrollment...
                  </>
                ) : (
                  <>
                    Confirm Course Enrollment <Send size={18} />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400 font-medium flex items-center justify-center gap-1">
                <ShieldCheck size={14} className="text-emerald-400" />
                100% Practical Skill Guarantee • ISO Certified Certificate Included
              </p>

            </form>
          </>
        ) : (
          /* Confirmation Screen */
          <div className="py-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 border border-emerald-400/40 rounded-full mb-4 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <CheckCircle2 size={44} className="text-emerald-400" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-2">
              Enrollment Confirmed!
            </h3>
            
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
              Welcome to <strong>Commerce Gurukulam</strong>! You have successfully locked your seat in <strong className="text-amber-300">{formData.courseTrack}</strong>.
            </p>

            <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-200 max-w-md mx-auto text-xs md:text-sm mb-6 text-left space-y-1">
              <p className="font-bold text-white text-sm">📱 Student Onboarding WhatsApp:</p>
              <p className="text-slate-200">Our Student Onboarding Mentor will reach out to <strong>{formData.phone}</strong> within 15 minutes with your live portal login credentials and video modules.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
              <a
                href={`https://wa.me/918428881144?text=${encodeURIComponent(
                  `Hi Commerce Gurukulam! 👋\n\nI just enrolled in ${formData.courseTrack}.\nName: ${formData.fullName}\nCollege: ${formData.collegeName}\nPhone: ${formData.phone}\n\nPlease share my login credentials!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-xl transition text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <MessageCircle size={18} className="fill-slate-950 text-emerald-500" />
                Connect On WhatsApp For Portal Access
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold rounded-xl transition text-xs cursor-pointer border border-slate-700"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
