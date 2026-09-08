import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LaunchExperience from './components/LaunchExperience';
import Problem from './components/Problem';
import AIRealityCheck from './components/AIRealityCheck';
import AICareerSurvivalPage from './components/AICareerSurvivalPage';
import WhyGurukulam from './components/WhyGurukulam';
import Curriculum from './components/Curriculum';
import Journey from './components/Journey';
import FinanceLabs from './components/FinanceLabs';
import Mentors from './components/Mentors';
import Projects from './components/Projects';
import Careers from './components/Careers';
import Assessment from './components/Assessment';
import Experience from './components/Experience';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StudentApplicationForm from './components/StudentApplicationForm';
import AIAssistant from './components/AIAssistant';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'ai-survival'

  const navigateToAISurvival = () => {
    setCurrentView('ai-survival');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030b18] text-slate-100">
      {currentView === 'home' ? (
        <>
          <Navbar 
            onApplyClick={() => setIsApplicationFormOpen(true)}
            onHomeClick={navigateToHome}
            onAISurvivalClick={navigateToAISurvival}
          />
          <main>
            <Hero />
            <LaunchExperience />
            <Problem />
            {/* AI Reality Check Teaser Section */}
            <AIRealityCheck onOpenSurvivalGuide={navigateToAISurvival} />
            <WhyGurukulam />
            <Curriculum />
            <Journey />
            <FinanceLabs />
            <Mentors />
            <Projects />
            <Careers />
            <Assessment />
            <Experience />
            <FAQ />
          </main>
          <Footer />
        </>
      ) : (
        /* Dedicated AI Career Survival Sub-Page */
        <AICareerSurvivalPage 
          onBackToHome={navigateToHome}
          onApplyClick={() => setIsApplicationFormOpen(true)}
        />
      )}

      {/* Student Application Form Modal */}
      <StudentApplicationForm 
        isOpen={isApplicationFormOpen}
        onClose={() => setIsApplicationFormOpen(false)}
      />

      {/* AI Assistant Chatbot */}
      <AIAssistant />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
