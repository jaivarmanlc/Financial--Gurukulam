import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LaunchExperience from './components/LaunchExperience';
import Problem from './components/Problem';
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

function App() {
  return (
    <div className="min-h-screen bg-[#030b18] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <LaunchExperience />
        <Problem />
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
    </div>
  );
}

export default App;
