import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CallToActionSection from './components/CallToActionSection';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <>
      <Navigation className="fixed-top" />
      <div className="App" id='app'>
        <div id='mainContent' className=''>
          <HeroSection imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} />
          <FeaturesSection />
          <CallToActionSection handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default App;
