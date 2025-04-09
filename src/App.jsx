import React, { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'  // Add this import

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
          {/* Hero Section */}
          <section className="hero-section ps-5 pe-5 rounded-3 shadow d-flex align-items-center mb-5">
            <div className='row align-items-center justify-content-between w-100'>
              <div className='col-lg-5 animate-on-scroll'>
                <h1 className='display-3 fw-bold mb-4'>Bid Writing<br />Made Simple</h1>
                <p className='lead mb-4 text-light opacity-90'>Streamline your bid creation and management process with our comprehensive tools.</p>
                <button className='btn btn-primary btn-lg shadow px-5 py-3'>
                  Create New Bid
                  <i className="bi bi-plus-circle ms-2"></i>
                </button>
              </div>
              <div className='col-lg-6 mt-5 mt-lg-0 animate-on-scroll'>
                <div className="position-relative">
                  {!imageLoaded && <div className="skeleton-loader" />}
                  <img
                    src="https://www.bidacademy.com.au/wp-content/uploads/2024/04/Why-Bid-Writing-is-Unique-Image-1536x1024.jpg"
                    alt="Bid Management Dashboard"
                    className="img-fluid rounded-3 shadow-lg"
                    onLoad={() => setImageLoaded(true)}
                    style={{ opacity: imageLoaded ? 1 : 0 }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id='features' className="features-section my-6 mb-5">
            <h2 className='text-center h1 fw-bold mb-5 animate-on-scroll'>
              Bid Management Features
            </h2>
            <div className='row g-4'>
              <div className='col-md-4 animate-on-scroll'>
                <div className='feature-card h-100'>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <div className='icon-wrapper mb-4 p-3 rounded-circle bg-primary d-flex align-items-center justify-content-center' style={{ width: '64px', height: '64px' }}>
                      <i className="bi bi-plus-circle-fill text-white"></i>
                    </div>
                    <h3 className='h4 mb-3'>Create New Bid</h3>
                    <p className='mb-0 opacity-85'>Start a new bid proposal with our intuitive creation wizard.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 animate-on-scroll'>
                <div className='feature-card h-100'>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <div className='icon-wrapper mb-4 p-3 rounded-circle bg-primary d-flex align-items-center justify-content-center' style={{ width: '64px', height: '64px' }}>
                      <i className="bi bi-pencil-square text-white"></i>
                    </div>
                    <h3 className='h4 mb-3'>Adjust Existing Bid</h3>
                    <p className='mb-0 opacity-85'>Modify and update your existing bid proposals with ease.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 animate-on-scroll'>
                <div className='feature-card h-100'>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <div className='icon-wrapper mb-4 p-3 rounded-circle bg-primary d-flex align-items-center justify-content-center' style={{ width: '64px', height: '64px' }}>
                      <i className="bi bi-trash-fill text-white"></i>
                    </div>
                    <h3 className='h4 mb-3'>Remove Bid</h3>
                    <p className='mb-0 opacity-85'>Safely delete unnecessary or outdated bid proposals from your system.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section id="manage" className="cta-section text-center my-6 animate-on-scroll mb-5">
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <h2 className='display-4 fw-bold mb-4'>Ready to Manage Your Bids?</h2>
                <p className='lead mb-5'>Take control of your bid process with our intuitive management tools</p>
                <div className='d-flex gap-3 justify-content-center'>
                  <button
                    className="btn btn-primary btn-lg shadow px-5"
                    aria-label="View bids dashboard"
                    role="button"
                  >
                    <i className="bi bi-grid-fill me-2"></i>
                    View Dashboard
                  </button>
                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    aria-label="View pricing"
                    role="button"
                    onClick={handleClick}
                  >
                    <i className="bi bi-tag-fill me-2"></i>
                    Reveal Pricing
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
