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
            <div className="m-5 pt-5">
                <div className="container d-flex mx-5 justify-content-between">
                    <div className="mx-5">
                        <p className="fs-6"><i class="fas fa-th text-secondary me-2"></i> Showing 1 - 8 of 300 Courses</p>
                    </div>
                    <div className="mx-5 d-flex">
                        <div className="mx-2">
                            <select class="form-select form-select-sm shadow-none" aria-label=".form-select-sm example">
                                <option selected>Select Category</option>
                                <option value="1">Personal Development
                                </option>
                                <option value="2">Leadership</option>
                                <option value="3">Communication Skills</option>
                                <option value="4">Parenting</option>
                                <option value="5">Personal Productivity</option>
                            </select>
                        </div>
                        <div className="mx-2">
                            <select class="form-select form-select-sm shadow-none" aria-label=".form-select-sm example">
                                <option selected>Sort By</option>
                                <option value="1">Name</option>
                                <option value="2">Date</option>
                                <option value="3">Reviews</option>
                            </select>
                        </div>
                    </div>
                </div>
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