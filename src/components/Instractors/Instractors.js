import React from 'react';
import BecomeInstructor from '../BecomeInstructor/BecomeInstructor';
import Instractor from '../Instractor/Instractor';

const Instractors = () => {
    return (
        <div>
            <div className="hero d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white">Our <span className="fw-bold">Instructors</span></h1>
                <p className="text-white">HOME &gt; INSTRUCTORS</p>
            </div>
            <div className="text-center mt-4">
                <h1>Our Experienced Instructors</h1>
                <p className="w-50 mx-auto">Do you want to move on next step? Choose your most popular leaning mentors, it will help you to achieve your professional goals.</p>
            </div>
            <div className="container row row-cols-1 row-cols-md-3 g-4 mx-auto mt-3 mb-5">
                <Instractor></Instractor>
                <Instractor></Instractor>
                <Instractor></Instractor>
                <Instractor></Instractor>
                <Instractor></Instractor>
                <Instractor></Instractor>
            </div>
            <BecomeInstructor></BecomeInstructor>
        </div>
    );
};

export default Instractors;