import React from 'react';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    return (
        <div>
            <div className="hero d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white"><span className="fw-bold">Course</span> List</h1>
                <p className="text-white">HOME &gt; COURSES</p>
            </div>
            <Course></Course>
        </div>
    );
};

export default Courses;