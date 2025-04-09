import React from 'react';

function FeaturesSection() {
    return (
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
    );
}

export default FeaturesSection;
