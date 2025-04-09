import React from 'react';

function CallToActionSection({ handleClick }) {
    return (
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
    );
}

export default CallToActionSection;
