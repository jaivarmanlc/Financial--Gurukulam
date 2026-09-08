import { useState } from 'react';
import { X, CheckCircle2, PhoneCall, Loader2, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function StudentApplicationForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    background: '',
    motivation: '',
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

    const htmlMessage = `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f5f9; padding: 30px 10px; font-family: Arial, Helvetica, sans-serif;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
        <!-- Top Accent Bar -->
        <tr>
          <td style="background: #f59e0b; height: 6px; background-image: linear-gradient(90deg, #d97706 0%, #10b981 100%);"></td>
        </tr>
        <!-- Header -->
        <tr>
          <td style="background-color: #0f172a; padding: 32px 28px; text-align: center;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center">
                  <span style="background-color: #1e293b; border: 1px solid #f59e0b; color: #fbbf24; padding: 5px 14px; border-radius: 20px; font-size: 11px; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase;">
                    Application Acknowledgement
                  </span>
                  <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; margin: 16px 0 6px 0; letter-spacing: 0.5px; text-transform: uppercase; font-family: Arial, sans-serif;">
                    Commerce Gurukulam
                  </h1>
                  <p style="color: #94a3b8; font-size: 13px; margin: 0; font-weight: 500;">
                    3-Month Executive Residential Accelerator
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Body Content -->
        <tr>
          <td style="padding: 32px 28px; background-color: #ffffff;">
            <!-- Greeting -->
            <p style="font-size: 16px; font-weight: bold; color: #0f172a; margin-top: 0; margin-bottom: 14px;">
              Dear ${formData.fullName},
            </p>
            <p style="font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 24px;">
              Congratulations on taking the first decisive step toward mastering real-world deal execution! We have successfully registered your candidate profile for the upcoming cohort of <strong>Commerce Gurukulam</strong>.
            </p>

            <!-- Status Box -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f0fdf4; border-left: 4px solid #10b981; border-radius: 6px; margin-bottom: 24px;">
              <tr>
                <td style="padding: 16px;">
                  <span style="color: #059669; font-size: 13px; font-weight: bold; display: block; margin-bottom: 4px;">
                    ✓ Application Status: Candidate Profile Registered
                  </span>
                  <span style="color: #334155; font-size: 13px; line-height: 1.5; display: block;">
                    Your application is under review by our Executive Admissions Board. Slots are limited strictly to <strong>40 candidates</strong> per cohort.
                  </span>
                </td>
              </tr>
            </table>

            <!-- Program Advantages Card -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0f172a; border-radius: 10px; margin-bottom: 24px; overflow: hidden;">
              <tr>
                <td style="padding: 24px; color: #ffffff;">
                  <h3 style="color: #fbbf24; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid #1e293b; padding-bottom: 10px;">
                    ✨ Program Privileges & Advantages
                  </h3>

                  <!-- Item 1 -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                    <tr>
                      <td width="24" valign="top" style="color: #10b981; font-size: 16px; line-height: 1.4;">✓</td>
                      <td style="color: #e2e8f0; font-size: 13px; line-height: 1.5;">
                        <strong style="color: #ffffff;">100% Live Deal Execution:</strong> Zero textbooks. Build live Wall Street & Dalal Street LBO models, DCF valuations, and M&A pitch books from Day 1.
                      </td>
                    </tr>
                  </table>

                  <!-- Item 2 -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                    <tr>
                      <td width="24" valign="top" style="color: #10b981; font-size: 16px; line-height: 1.4;">✓</td>
                      <td style="color: #e2e8f0; font-size: 13px; line-height: 1.5;">
                        <strong style="color: #ffffff;">AI-Integrated Workflows:</strong> Master AI prompt engineering for SEC filings, automated forensic auditing, and instant financial reports.
                      </td>
                    </tr>
                  </table>

                  <!-- Item 3 -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                    <tr>
                      <td width="24" valign="top" style="color: #10b981; font-size: 16px; line-height: 1.4;">✓</td>
                      <td style="color: #e2e8f0; font-size: 13px; line-height: 1.5;">
                        <strong style="color: #ffffff;">5:00 AM Elite Discipline:</strong> Mindset conditioning, CFO mentor war rooms, and boardroom pitch defense drills.
                      </td>
                    </tr>
                  </table>

                  <!-- Item 4 -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td width="24" valign="top" style="color: #10b981; font-size: 16px; line-height: 1.4;">✓</td>
                      <td style="color: #e2e8f0; font-size: 13px; line-height: 1.5;">
                        <strong style="color: #ffffff;">100% Placement Support:</strong> Direct referral access to premier boutique IB, PE, VC, and corporate finance firms.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Next Step Box -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; margin-bottom: 24px;">
              <tr>
                <td style="padding: 18px;">
                  <span style="color: #b45309; font-size: 14px; font-weight: bold; display: block; margin-bottom: 6px;">
                    📞 Next Step — Executive Admissions Interview
                  </span>
                  <p style="color: #78350f; font-size: 13px; line-height: 1.5; margin: 0;">
                    Our Executive Admissions Team will contact you shortly at <strong style="color: #92400e;">${formData.phone}</strong> to conduct your 1-on-1 screening interview and confirm your cohort slot.
                  </p>
                </td>
              </tr>
            </table>

            <p style="color: #64748b; font-size: 13px; line-height: 1.5; margin-bottom: 24px;">
              For any urgent questions, feel free to reply directly to this email or reach us at <a href="mailto:commercegurukulam1@gmail.com" style="color: #d97706; font-weight: bold; text-decoration: underline;">commercegurukulam1@gmail.com</a>.
            </p>

            <p style="color: #334155; font-size: 14px; font-weight: bold; margin: 0;">
              Warm regards,<br>
              <span style="color: #0f172a; font-weight: 800;">Admissions Executive Board</span><br>
              <span style="color: #64748b; font-size: 12px; font-weight: normal;">Commerce Gurukulam</span>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 28px; text-align: center;">
            <p style="color: #94a3b8; font-size: 11px; margin: 0 0 4px 0;">
              © ${new Date().getFullYear()} Commerce Gurukulam • All Rights Reserved
            </p>
            <p style="color: #94a3b8; font-size: 11px; margin: 0;">
              Official Admissions Office: <a href="mailto:commercegurukulam1@gmail.com" style="color: #64748b; text-decoration: none;">commercegurukulam1@gmail.com</a>
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;

    const plainTextMsg = `Dear ${formData.fullName},

Congratulations on taking the first decisive step toward mastering real-world deal execution! We have successfully received your candidate application for Commerce Gurukulam.

Program Privileges & Advantages:
• 100% Live Deal Execution: Zero textbooks. Build live Wall Street & Dalal Street LBO models, DCF valuations, and M&A pitch books from Day 1.
• AI-Integrated Workflows: Master AI prompt engineering for SEC filings, automated forensic auditing, and instant financial reports.
• 5:00 AM Elite Discipline: Mindset conditioning, CFO mentor war rooms, and boardroom pitch defense drills.
• 100% Placement Support: Direct referral access to premier boutique IB, PE, VC, and corporate finance firms.

Next Step — Executive Admissions Interview:
Our Executive Admissions Team will contact you shortly at ${formData.phone} to conduct your 1-on-1 screening interview and confirm your cohort slot.

For any immediate questions, feel free to reach us at commercegurukulam1@gmail.com.

Warm regards,
Admissions Executive Board
Commerce Gurukulam`;

    const templateParams = {
      to_name: formData.fullName,
      to_email: formData.email,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      background: formData.background,
      motivation: formData.motivation,
      message: htmlMessage,
      email_body: htmlMessage,
      html_message: htmlMessage,
      html: htmlMessage,
      content: htmlMessage,
      plain_message: plainTextMsg,
      title: 'Application Acknowledgement & Next Steps',
      admin_email: 'commercegurukulam1@gmail.com',
      reply_to: 'commercegurukulam1@gmail.com'
    };

    try {
      // 1. Trigger EmailJS direct background dispatch
      const serviceId = 'service_qkw0nls';
      const templateId = 'template_nnrqffn';
      const publicKey = 'Pnq37zDUgO4VvOrAX';

      await emailjs.send(serviceId, templateId, templateParams, publicKey).catch((err) => {
        console.log('EmailJS transmission logged for:', formData.email, err);
      });

      // 2. CallMeBot Automated WhatsApp Notification Dispatch
      // Set your CallMeBot API key below after activating it on WhatsApp
      const callmebotApiKey = window.CALLMEBOT_API_KEY || ''; 
      if (callmebotApiKey) {
        const waMsg = encodeURIComponent(
          `🔔 *COMMERCE GURUKULAM — NEW APPLICATION*\n\n👤 Candidate: ${formData.fullName}\n📞 Phone: ${formData.phone}\n📧 Email: ${formData.email}\n🎓 Status: ${formData.background}\n\nOur team will review and schedule the 1-on-1 interview.`
        );
        fetch(`https://api.callmebot.com/whatsapp.php?phone=918428881144&text=${waMsg}&apikey=${callmebotApiKey}`, {
          mode: 'no-cors'
        }).catch((err) => console.log('CallMeBot WhatsApp alert error:', err));
      }

      // 3. Automated Google Sheets Lead Recording Dispatch
      const googleSheetsUrl = window.GOOGLE_SHEETS_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbxsIx6HMjJkDag33HUPele-P16ysgXc6CS-Fl76ni85VsGhuSykKJCbbTVw5vUn1oHcpA/exec';
      if (googleSheetsUrl) {
        fetch(googleSheetsUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            background: formData.background,
            motivation: formData.motivation
          })
        }).catch((err) => console.log('Google Sheets lead dispatch error:', err));
      }
    } catch (error) {
      console.log('Email/WhatsApp/Sheets dispatch logged:', error);
    } finally {
      setIsSending(false);
      setIsSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      background: '',
      motivation: '',
    });
    setIsSubmitted(false);
    setIsSending(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-[#0f1b2e] rounded-2xl w-full max-w-xl relative border border-yellow-500/30 my-4 p-6 md:p-8 shadow-[0_0_60px_rgba(234,179,8,0.2)]">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 transition cursor-pointer"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-6 pr-8">
              <p className="text-yellow-400 text-xs md:text-sm font-bold tracking-wider mb-1">
                COHORT ADMISSION & EXECUTIVE SCREENING
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                Apply for Commerce Gurukulam
              </h2>
              <p className="text-slate-300 text-xs md:text-sm font-medium">
                Strictly Limited to 40 Elite Candidates | Applications Reviewed in Order of Receipt
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-slate-300 mb-1.5">
                  Full Name <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition text-sm"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-slate-300 mb-1.5">
                    Email Address <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="student@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-slate-300 mb-1.5">
                    Phone / WhatsApp Number <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition text-sm"
                  />
                </div>
              </div>

              {/* Educational/Professional Background */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-slate-300 mb-1.5">
                  Current Status <span className="text-yellow-400">*</span>
                </label>
                <select
                  name="background"
                  value={formData.background}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/60 border border-slate-700 text-white focus:outline-none focus:border-yellow-500 transition text-sm"
                >
                  <option value="">Select your background...</option>
                  <option value="undergraduate">Undergraduate Commerce Student</option>
                  <option value="graduate">Commerce / Finance Graduate</option>
                  <option value="professional">Early Working Professional</option>
                  <option value="ca_aspirant">CA / CFA / CS Aspirant</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-slate-300 mb-1.5">
                  Why do you want to join this 3-month residential execution accelerator? <span className="text-yellow-400">*</span>
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  placeholder="Describe your career goals in deal modeling, valuation, and AI workflows..."
                  rows="3"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition resize-none text-sm"
                />
              </div>

              {/* Program Investment */}
              <div className="bg-slate-900/60 rounded-xl p-3.5 border border-slate-700 flex justify-between items-center text-xs md:text-sm">
                <div>
                  <span className="font-medium text-slate-300">Total Program Investment:</span>{' '}
                  <span className="text-yellow-400 font-bold text-base">₹90,000</span>{' '}
                  <span className="text-slate-400 text-xs">(All-Inclusive Residential)</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-400/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  100% Placement Support
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 bg-gradient-to-r from-yellow-400 via-amber-400 to-emerald-400 text-slate-950 font-bold rounded-xl transition transform hover:scale-[1.02] shadow-[0_0_25px_rgba(234,179,8,0.3)] text-sm md:text-base cursor-pointer flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          /* Clean Simple Success Screen */
          <div className="py-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 border border-emerald-400/40 rounded-full mb-4 shadow-[0_0_30px_rgba(16,185,129,0.25)]">
              <CheckCircle2 size={44} className="text-emerald-400" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Application Submitted Successfully!
            </h3>
            
            <p className="text-slate-300 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-6">
              Thank you for applying to <strong>Commerce Gurukulam</strong>. We have registered your candidate profile.
            </p>

            <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-200 max-w-md mx-auto text-xs md:text-sm mb-8 text-left">
              <div className="flex items-center gap-2 font-bold text-emerald-300 mb-1.5">
                <PhoneCall size={18} className="text-emerald-400 animate-pulse" />
                <span>Next Step: Executive Admissions Call</span>
              </div>
              <p className="leading-relaxed text-slate-200">
                Our Executive Admissions Team will contact you shortly at <strong className="text-yellow-300">{formData.phone || 'your phone number'}</strong> to conduct your 1-on-1 screening interview.
              </p>
            </div>

            <div className="flex flex-col gap-3 justify-center items-center max-w-md mx-auto">
              {/* Option A: Send/Receive Acknowledgement on Student's WhatsApp */}
              <a
                href={`https://wa.me/${formData.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `🏆 *COMMERCE GURUKULAM — APPLICATION ACKNOWLEDGEMENT*\n\nDear ${formData.fullName},\n\nWe have received your candidate profile for the 3-Month Executive Accelerator.\n\n✓ Application Status: Registered & Under Review\n✓ Phone Registered: ${formData.phone}\n\nOur Executive Admissions team will call you shortly to schedule your 1-on-1 screening interview.\n\nOfficial Admissions Contact: +91 84288 81144 | commercegurukulam1@gmail.com`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.3)] cursor-pointer hover:scale-[1.02]"
              >
                <MessageCircle size={18} className="fill-slate-950 stroke-emerald-500" />
                Send Receipt to My WhatsApp ({formData.phone})
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {/* Option B: Contact Admissions Desk */}
                <a
                  href={`https://wa.me/918428881144?text=${encodeURIComponent(
                    `Hi Commerce Gurukulam Admissions! 👋\n\nI just submitted my candidate application.\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\n\nPlease confirm my 1-on-1 interview slot.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-yellow-400 font-semibold rounded-xl transition text-xs flex items-center justify-center gap-1.5 border border-yellow-500/30 cursor-pointer"
                >
                  💬 Chat with Admissions Desk
                </a>

                {/* Return button */}
                <button
                  onClick={handleResetAndClose}
                  className="px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold rounded-xl transition text-xs cursor-pointer border border-slate-700"
                >
                  Return to Website
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
