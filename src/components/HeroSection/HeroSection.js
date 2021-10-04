import React from 'react';
import heroImg from '../../images/online-learning.png'
import './HeroSection.css'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        // this component is called from home page
        <div className="container row d-flex align-items-center mx-auto mt-3">
            <div className="col-6">
                <p className="mb-2 subheading-text-color fw-bold">START LEARNING TODAY</p>
                <h1><span className="fw-bold text-danger">Learn</span> Your Desired <span className="fw-bold text-danger">Skill</span> From The <span className="fw-bold text-danger">Experts</span></h1>
                <p className="my-4">Learning with Brilian is total fun!</p>
                <Link to="/courses" className="btn btn-danger me-2 shadow-none">Get Started</Link>
                <Link to="/courses" className="btn btn-outline-danger ms-2 shadow-none">View Courses</Link>
            </div>
            <div className="col-6">
                <img src={heroImg} alt="online-learning" className="img-fluid" />
            </div>
        </div>
    );
};

export default HeroSection;