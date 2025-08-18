
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FocusAreas from './components/FocusAreas';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F9FAFF] text-slate-800 font-sans leading-relaxed">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <FocusAreas />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
