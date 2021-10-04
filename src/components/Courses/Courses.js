import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courseData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="hero d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white"><span className="fw-bold">Course</span> List</h1>
                <p className="text-white">HOME &gt; COURSES</p>
            </div>
            <div className="m-5">
                <div className="container row row-cols-1 row-cols-md-3 g-4 mx-5">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;