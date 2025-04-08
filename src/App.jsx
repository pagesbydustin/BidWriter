import React, { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import './App.css'

function App() {
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

  return (
    <>
      <Navigation className="fixed-top" />

      <div className="App" id='app'>
        <div id='mainContent' className=''>
          {/* Hero Section */}
          <section className="hero-section ps-5 pe-5 rounded-3 shadow d-flex align-items-center mb-5">
            <div className='row align-items-center justify-content-between w-100'>
              <div className='col-lg-5 animate-on-scroll'>
                <h1 className='display-3 fw-bold mb-4'>Transform Your <br />Bid Writing Process</h1>
                <p className='lead mb-4 text-light opacity-90'>Create winning proposals with AI-powered tools and expert templates.</p>
                <button className='btn btn-primary btn-lg shadow px-5 py-3'>
                  Get Started Free
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
              <div className='col-lg-6 mt-5 mt-lg-0 animate-on-scroll'>
                <img src="https://www.bidacademy.com.au/wp-content/uploads/2024/04/Why-Bid-Writing-is-Unique-Image-1536x1024.jpg" alt="Bid Writing Process" className="img-fluid rounded-3 shadow-lg" />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id='features' className="features-section my-6 mb-5">
            <h2 className='text-center h1 fw-bold mb-5 animate-on-scroll'>
              Why Choose BidWriter?
            </h2>
            <div className='row g-4'>
              <div className='col-md-4 animate-on-scroll'>
                <div className='feature-card h-100'>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <div className='icon-wrapper mb-4 p-3 rounded-circle bg-primary'>
                      <i className="bi bi-people-fill display-6"></i>
                    </div>
                    <h3 className='h4 mb-3'>Expert Consultation</h3>
                    <p className='mb-0 opacity-85'>Get personalized feedback from bid experts who have helped win millions in contracts.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 animate-on-scroll'>
                <div className='feature-card h-100'>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <div className='icon-wrapper mb-4 p-3 rounded-circle bg-primary'>
                      <i className="bi bi-file-earmark-text-fill display-6"></i>
                    </div>
                    <h3 className='h4 mb-3'>Smart Templates</h3>
                    <p className='mb-0 opacity-85'>Access a comprehensive library of industry-specific bid templates and proven frameworks for success.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 animate-on-scroll'>
                <div className='feature-card h-100'>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <div className='icon-wrapper mb-4 p-3 rounded-circle bg-primary'>
                      <i className="bi bi-cloud-fill display-6"></i>
                    </div>
                    <h3 className='h4 mb-3'>Cloud Platform</h3>
                    <p className='mb-0 opacity-85'>Manage your entire bid process with our integrated cloud platform, from creation to tracking and collaboration.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="pricing-section my-6 mb-5">
            <h2 className='text-center h1 fw-bold mb-5 animate-on-scroll'>Pricing Plans</h2>
            <div className='row g-4'>
              <div className='col-md-4 animate-on-scroll'>
                <div className='feature-card p-4 shadow text-center'>
                  <h3>Basic</h3>
                  <div className='display-4 my-3'>$59</div>
                  <p className='text-muted mb-4'>per month</p>
                  <ul className='list-unstyled mb-4'>
                    <li className='mb-2'>5 Bids per month</li>
                    <li className='mb-2'>Basic Templates</li>
                    <li className='mb-2'>Email Support</li>
                    <li className='mb-2'>Basic Analytics</li>
                  </ul>
                  <button className='btn btn-primary shadow'>Choose Basic</button>
                </div>
              </div>
              <div className='col-md-4 animate-on-scroll'>
                <div className='feature-card p-4 shadow text-center'>
                  <h3>Professional</h3>
                  <div className='display-4 my-3'>$129</div>
                  <p className='text-muted mb-4'>per month</p>
                  <ul className='list-unstyled mb-4'>
                    <li className='mb-2'>20 Bids per month</li>
                    <li className='mb-2'>Premium Templates</li>
                    <li className='mb-2'>Priority Support</li>
                    <li className='mb-2'>Advanced Analytics</li>
                  </ul>
                  <button className='btn btn-primary shadow'>Choose Pro</button>
                </div>
              </div>
              <div className='col-md-4 animate-on-scroll'>
                <div className='feature-card p-4 shadow text-center'>
                  <h3>Enterprise</h3>
                  <div className='display-4 my-3'>$249</div>
                  <p className='text-muted mb-4'>per month</p>
                  <ul className='list-unstyled mb-4'>
                    <li className='mb-2'>Unlimited Bids</li>
                    <li className='mb-2'>Custom Templates</li>
                    <li className='mb-2'>24/7 Support</li>
                    <li className='mb-2'>Full Analytics Suite</li>
                  </ul>
                  <button className='btn btn-primary shadow'>Choose Enterprise</button>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="cta-section text-center my-6 animate-on-scroll mb-5">
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <h2 className='display-4 fw-bold mb-4'>Ready to Win More Bids?</h2>
                <p className='lead mb-5'>Join thousands of successful businesses using BidWriter to secure more contracts.</p>
                <div className='d-flex gap-3 justify-content-center'>
                  <button className='btn btn-primary btn-lg shadow px-5'>
                    Start Free Trial
                  </button>
                  <button className='btn btn-outline-light btn-lg px-5'>
                    Schedule Demo
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
