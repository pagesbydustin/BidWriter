import React from 'react'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <>
      <Navigation></Navigation>

      <div className="App" id='app'>
        <div id='mainContent' className='container-fluid'>
          {/* Hero Section */}
          <section className="hero-section bg-secondary ps-5 pe-5 rounded-3 shadow">
            <div className='row align-items-center min-vh-75'>
              <div className='col-md-6'>
                <h1 className='display-4 mb-4'>Create Winning Bids</h1>
                <p className='lead mb-4'>Streamline your bid writing process with our AI-powered tools and templates.</p>
                <button className='btn btn-primary btn-lg shadow'>Get Started</button>
              </div>
              <div className='col-md-6'>
                <img src="https://s3.eu-west-2.amazonaws.com/thorntonandlowe/Bid-Writing-Process.jpg" alt="Bid Writing Process" className="img-fluid" />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id='features' className="features-section my-5">
            <h2 className='text-center mb-4 p-4 shadow bg-secondary rounded-3'>Key Features</h2>
            <div className='row g-4'>
              <div className='col-md-4'>
                <div className='feature-card p-4 shadow text-center'>
                  <h3 className='mb-3'>Consultation Services</h3>
                  <i className="bi bi-people-fill display-4 mb-3"></i>
                  <p className='mb-0'>Expert bid reviewers provide personalized feedback and strategic improvements to maximize your winning potential.</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='feature-card p-4 shadow text-center'>
                  <h3 className='mb-3'>Smart Templates</h3>
                  <i className="bi bi-file-earmark-text-fill display-4 mb-3"></i>
                  <p className='mb-0'>Access a comprehensive library of industry-specific bid templates and proven frameworks for success.</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='feature-card p-4 shadow text-center'>
                  <h3 className='mb-3'>Cloud Platform</h3>
                  <i className="bi bi-cloud-fill display-4 mb-3"></i>
                  <p className='mb-0'>Manage your entire bid process with our integrated cloud platform, from creation to tracking and collaboration.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="pricing-section my-5">
            <h2 className='text-center mb-4 p-4 shadow bg-secondary rounded-3'>Pricing Plans</h2>
            <div className='row g-4'>
              <div className='col-md-4'>
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
              <div className='col-md-4'>
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
              <div className='col-md-4'>
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
          <section className="cta-section text-center my-5 bg-secondary p-4 shadow">
            <h2 className='mb-4'>Ready to Win More Bids?</h2>
            <p className='lead mb-4'>Start using BidWriter today and transform your bid writing process.</p>
            <button className='btn btn-primary btn-lg shadow'>Sign Up Now</button>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
