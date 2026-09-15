import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MegaComboSection from './components/MegaComboSection';
import Problem from './components/Problem';
import CourseCatalog from './components/CourseCatalog';
import FastTrackBanner from './components/FastTrackBanner';
import ROICalculator from './components/ROICalculator';
import MindsetComparison from './components/MindsetComparison';
import CertificateShowcase from './components/CertificateShowcase';
import Experience from './components/Experience';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StudentApplicationForm from './components/StudentApplicationForm';
import LiveEnrollmentTicker from './components/LiveEnrollmentTicker';
import AIAssistant from './components/AIAssistant';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);
  const [selectedCourseForEnrollment, setSelectedCourseForEnrollment] = useState(null);

  const handleOpenEnrollment = (course = null) => {
    setSelectedCourseForEnrollment(course);
    setIsApplicationFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#020712] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Header Navbar */}
      <Navbar 
        onApplyClick={() => handleOpenEnrollment()}
        onHomeClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          onApplyClick={() => handleOpenEnrollment()}
          onExploreCourses={() => {
            const el = document.getElementById('combo');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 12-in-1 Mega Commerce Combo Section (Inspired by GT Learning Poster) */}
        <MegaComboSection onEnrollClick={(course) => handleOpenEnrollment(course)} />

        {/* Mind-Trigger Problem: College Disconnect */}
        <Problem onApplyClick={() => handleOpenEnrollment()} />

        {/* 30-Day Master Courses & FastTrack Skill Catalog */}
        <CourseCatalog onEnrollClick={(course) => handleOpenEnrollment(course)} />

        {/* FastTrack Emergency Exam & Sprint Banner */}
        <FastTrackBanner onEnrollClick={(course) => handleOpenEnrollment(course)} />

        {/* Interactive Student Skill & Career Calculator */}
        <ROICalculator onEnrollClick={() => handleOpenEnrollment()} />

        {/* Mindset Comparison Matrix: Average Student vs Gurukulam */}
        <MindsetComparison onEnrollClick={() => handleOpenEnrollment()} />

        {/* QR Verified Resume Badge & Certificate Showcase */}
        <CertificateShowcase onEnrollClick={() => handleOpenEnrollment()} />

        {/* Student Success Proof & Testimonials */}
        <Experience />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onApplyClick={() => handleOpenEnrollment()} />

      {/* Student Course Enrollment Modal */}
      <StudentApplicationForm 
        isOpen={isApplicationFormOpen}
        onClose={() => setIsApplicationFormOpen(false)}
        preselectedCourse={selectedCourseForEnrollment}
      />

      {/* Real-time Student Enrollment Toast Notifications (FOMO Trigger) */}
      <LiveEnrollmentTicker onEnrollClick={() => handleOpenEnrollment()} />

      {/* AI Assistant Chatbot */}
      <AIAssistant onApplyClick={() => handleOpenEnrollment()} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

    </div>
  );
}

export default App;
