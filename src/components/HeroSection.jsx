import React from 'react';

function HeroSection({ imageLoaded, setImageLoaded }) {
    return (
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
    );
}

export default HeroSection;
