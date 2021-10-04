import React from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import HeroSection from '../HeroSection/HeroSection';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <div className="container d-flex justify-content-between align-items-end px-3">
                <div>
                    <h2 className="my-4"><span className="fw-bold">Popular</span> Courses</h2>
                    <p>At the Learna Education users can learn <br /> lots of things from real expert!</p>
                </div>
                <Link to="/courses" className="border-bottom border-danger border-2 text-decoration-none text-dark">View All Courses</Link>
            </div>
            <Course></Course>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;