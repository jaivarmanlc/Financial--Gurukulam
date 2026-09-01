import { useState } from 'react';
import { X } from 'lucide-react';

export default function StudentApplicationForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    background: '',
    motivation: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        background: '',
        motivation: '',
      });
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 md:p-0 overflow-y-auto">
      <div className="bg-[#0f1b2e] rounded-2xl w-full max-w-2xl relative border border-yellow-500/20 my-4 md:my-0 p-4 md:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 md:top-4 right-3 md:right-4 text-slate-400 hover:text-slate-100 transition"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-6 md:mb-8 pr-8">
              <p className="text-yellow-500 text-xs md:text-sm font-semibold tracking-wider mb-2">
                COHORT 1 ADMISSION
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                Apply for The Financial Gurukulam
              </h2>
              <p className="text-slate-400 text-xs md:text-sm">
                Limited to 20 Elite Candidates | Launching Sep 5, 2026
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition text-sm"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="rahul@example.com"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition text-sm"
                  />
                </div>
              </div>

              {/* Educational/Professional Background */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">
                  Current Educational / Professional Background
                </label>
                <select
                  name="background"
                  value={formData.background}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:border-yellow-500 transition text-sm"
                >
                  <option value="">Select your status...</option>
                  <option value="student">Undergraduate Student</option>
                  <option value="graduate">Graduate Student</option>
                  <option value="professional">Working Professional</option>
                  <option value="entrepreneur">Entrepreneur</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">
                  Why do you want to join this 3-month residential accelerator?
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  placeholder="Describe your career goals and interest in live finance execution..."
                  rows="4"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition resize-none text-sm"
                />
              </div>

              {/* Program Investment */}
              <div className="bg-slate-900/50 rounded-lg p-3 md:p-4 border border-slate-700">
                <p className="text-slate-300 text-xs md:text-sm">
                  <span className="font-semibold">Total Program Investment:</span>{' '}
                  <span className="text-yellow-500 font-bold">₹2,50,000</span>{' '}
                  <span className="text-slate-400">(All-Inclusive)</span>
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition transform hover:scale-105 active:scale-95 text-sm md:text-base"
              >
                Submit Candidate Application
              </button>
            </form>
          </>
        ) : (
          /* Success Message */
          <div className="text-center py-8 md:py-12">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Application Submitted!
              </h3>
              <p className="text-slate-400 text-xs md:text-sm">
                Thank you for your interest in The Financial Gurukulam. We'll review your application and get back to you shortly.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
