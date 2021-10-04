import React, { useEffect, useState } from 'react';
import BecomeInstructor from '../BecomeInstructor/BecomeInstructor';
import Instractor from '../Instractor/Instractor';

const Instractors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./instractorsData.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <div className="hero d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white">Our <span className="fw-bold">Instructors</span></h1>
                <p className="text-white">HOME &gt; INSTRUCTORS</p>
            </div>
            <div className="text-center mt-4">
                <h1>Our <span className="fw-bold">Experienced</span> Instructors</h1>
                <p className="w-50 mx-auto">Do you want to move on next step? Choose your most popular leaning mentors, it will help you to achieve your professional goals.</p>
            </div>
            {/* all instructors are displayed here */}
            <div className="container row row-cols-1 row-cols-md-3 g-4 mx-auto mt-3 mb-5">
                {
                    instructors.map(instructor => <Instractor
                        key={instructor.id}
                        instructor={instructor}
                    ></Instractor>)
                }
            </div>
            <BecomeInstructor></BecomeInstructor>
        </div>
    );
};

export default Instractors;