import React from 'react';
import heroImg from './online-learning.png'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="container row d-flex align-items-center mx-auto mt-3">
            <div className="col-6">
                <p className="mb-2 subheading-text-color fw-bold">START LEARNING TODAY</p>
                <h1><span className="fw-bold">Learn</span> Your Desired <span className="fw-bold">Skill</span> From The <span className="fw-bold">Experts</span></h1>
                <p className="my-4">Learning with learna is total fun!</p>
                <button className="btn btn-danger me-2 shadow-none">Get Started</button>
                <button className="btn btn-outline-danger ms-2 shadow-none">View Courses</button>
            </div>
            <div className="col-6">
                <img src={heroImg} alt="online-learning" className="img-fluid" />
            </div>
        </div>
    );
};

export default HeroSection;