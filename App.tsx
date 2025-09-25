
// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import HowItWorks from './components/HowItWorks';
// import FocusAreas from './components/FocusAreas';
// import ApplicationForm from './components/ApplicationForm';
// import Footer from './components/Footer';
import React, { Suspense } from 'react';

// Importa o componente de forma "preguiçosa" (lazy)
const Header = React.lazy(() => import('./components/Header'));
const Hero = React.lazy(() => import('./components/Hero'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const FocusAreas = React.lazy(() => import('./components/FocusAreas'));
const ApplicationForm = React.lazy(() => import('./components/ApplicationForm'));
const Footer = React.lazy(() => import('./components/Footer'));

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
