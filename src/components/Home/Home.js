import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import HeroSection from '../HeroSection/HeroSection';
import Newsletter from '../Newsletter/Newsletter';
import Testimonials from '../Testimonials/Testimonials';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    const [featuredCourses, setFeaturedCourses] = useState([])
    useEffect(() => {
        fetch('./featuredCourseData.json')
            .then(res => res.json())
            .then(data => setFeaturedCourses(data));
    }, [])
    return (
        < div >
            <HeroSection></HeroSection>
            <div className="container d-flex justify-content-between align-items-end px-3">
                <div>
                    <h2 className="my-4"><span className="fw-bold text-danger">Popular</span> Courses</h2>
                    <p>At the Learna Education users can learn <br /> lots of things from real expert!</p>
                </div>
                <Link to="/courses" className="border-bottom border-danger border-2 text-decoration-none text-dark">View All Courses</Link>
            </div>
            <div className="m-5">
                <div className="row row-cols-1 row-cols-md-4 g-4 mx-5">
                    {
                        featuredCourses.map(featuredCourse => <Course
                            key={featuredCourse.id}
                            course={featuredCourse}
                        ></Course>)
                    }
                </div>
            </div>
            <WhyUs></WhyUs>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
        </div >
    );
};

export default Home;