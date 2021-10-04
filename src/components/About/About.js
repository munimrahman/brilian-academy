import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import expert from '../../images/experts.png'
import './About.css'
import missionImg from '../../images/mission-img.png'
import visonImg from '../../images/vison-img.png'
import Testimonials from '../Testimonials/Testimonials';

const About = () => {
    return (
        <div>
            {/* hero section of about page */}
            <div className="hero d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white"><span className="fw-bold">About</span> Us</h1>
                <p className="text-white">HOME &gt; ABOUT US</p>
            </div>
            {/* first info section of about */}
            <div className="row container mx-auto d-flex align-items-center w-75">
                <div className="col-6">
                    <h1 className="my-5">Top Quality Education <br /> with Real Experts</h1>
                    <p className="content-align mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo qui incidunt consequatur provident ipsam doloremque enim quo repellat quod ut perspiciatis odio odit nobis excepturi soluta, voluptatum quae, nam, velit dolore tenetur! Quos dolore sint molestias ipsa fugiat excepturi.</p>
                    <button className="btn btn-danger shadow-none">Learn More</button>
                </div>
                <div className="col-6">
                    <img src={expert} alt="experts" className="img-fluid" />
                </div>
            </div>
            {/* experiance section */}
            <div className="bg-color text-center pt-5">
                <h1><span className="fw-bold text-danger">22 Years</span> Experience in <span className="fw-bold">Education</span> <br /> and <span className="fw-bold">Teaching</span></h1>
                <p className="w-50 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quia aperiam reprehenderit? Minus temporibus, eligendi perferendis libero id harum. Architecto.</p>
                <div className="d-flex justify-content-center align-iterms-center">
                    <div className="m-5 d-flex flex-column align-items-center">
                        <div className="bg-danger icn-bg d-flex align-items-center justify-content-center mb-3">
                            <i className="fas fa-book fs-3 text-white"></i>
                        </div>
                        <h2>1000+</h2>
                        <p>Online Courses</p>
                    </div>
                    <div className="m-5 d-flex flex-column align-items-center">
                        <div className="bg-danger icn-bg d-flex align-items-center justify-content-center mb-3">
                            <i className="fas fa-users fs-3 text-white"></i>
                        </div>
                        <h2>50000+</h2>
                        <p>Students Enrolled</p>
                    </div>
                    <div className="m-5 d-flex flex-column align-items-center">
                        <div className="bg-danger icn-bg d-flex align-items-center justify-content-center mb-3">
                            <i className="fas fa-user-alt fs-3 text-white"></i>
                        </div>
                        <h2>350+</h2>
                        <p>Expert Instructors</p>
                    </div>
                    <div className="m-5 d-flex flex-column align-items-center">
                        <div className="bg-danger icn-bg d-flex align-items-center justify-content-center mb-3">
                            <i className="fas fa-clock fs-3 text-white"></i>
                        </div>
                        <h2>10000+</h2>
                        <p>Hours Content</p>
                    </div>
                </div>
            </div>
            {/* our mission section */}
            <div className="row container mx-auto d-flex align-items-center w-75 mt-5">
                <div className="col-6 d-flex justify-content-center">
                    <img src={missionImg} alt="experts" className="img-fluid" />
                </div>
                <div className="col-6">
                    <h6 className="subheading-text-color">OUR MISSON</h6>
                    <h2 className="mb-5">We Want to Change The World with Edication</h2>
                    <p className="content-align mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo qui incidunt consequatur provident.</p>
                    <p>
                        Ipsam doloremque enim quo repellat quod ut perspiciatis odio odit nobis excepturi soluta, voluptatum quae, nam, velit dolore tenetur! Quos dolore sint molestias ipsa fugiat excepturi.</p>
                </div>
            </div>
            {/* our vison section */}
            <div className="row container mx-auto d-flex align-items-center w-75 mt-5">
                <div className="col-6">
                    <h6 className="subheading-text-color">OUR VISION</h6>
                    <h2 className="mb-5">Easily Educate Every People Around You</h2>
                    <p className="content-align mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo qui incidunt consequatur provident.</p>
                    <p>
                        Ipsam doloremque enim quo repellat quod ut perspiciatis odio odit nobis excepturi soluta, voluptatum quae, nam, velit dolore tenetur! Quos dolore sint molestias ipsa fugiat excepturi.</p>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <img src={visonImg} alt="experts" className="img-fluid" />
                </div>
            </div>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
        </div>
    );
};

export default About;