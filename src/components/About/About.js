import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import expert from './experts.png'
import './About.css'

const About = () => {
    return (
        <div>
            <div className="hero d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white"><span className="fw-bold">About</span> Us</h1>
                <p className="text-white">HOME &gt; ABOUT US</p>
            </div>
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
            <div className="experience-section text-center pt-5">
                <h1><span className="fw-bold text-danger">22 Years</span> Experience in <span className="fw-bold">Education</span> <br /> and <span className="fw-bold">Teaching</span></h1>
                <p className="w-50 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quia aperiam reprehenderit? Minus temporibus, eligendi perferendis libero id harum. Architecto.</p>
                <div className="d-flex justify-content-center align-iterms-center">
                    <div className="m-5 d-flex flex-column align-items-center">
                        <div className="bg-danger icn-bg d-flex align-items-center justify-content-center mb-3">
                            <i class="fas fa-book fs-3 text-white"></i>
                        </div>
                        <h2>1000+</h2>
                        <p>Online Courses</p>
                    </div>
                    <div className="m-5 d-flex flex-column align-items-center">
                        <div className="bg-danger icn-bg d-flex align-items-center justify-content-center mb-3">
                            <i class="fas fa-users fs-3 text-white"></i>
                        </div>
                        <h2>1000+</h2>
                        <p>Online Courses</p>
                    </div>
                    <div className="m-5 d-flex flex-column align-items-center">
                        <div className="bg-danger icn-bg d-flex align-items-center justify-content-center mb-3">
                            <i class="fas fa-user-alt fs-3 text-white"></i>
                        </div>
                        <h2>1000+</h2>
                        <p>Online Courses</p>
                    </div>
                    <div className="m-5 d-flex flex-column align-items-center">
                        <div className="bg-danger icn-bg d-flex align-items-center justify-content-center mb-3">
                            <i class="fas fa-clock fs-3 text-white"></i>
                        </div>
                        <h2>1000+</h2>
                        <p>Online Courses</p>
                    </div>
                </div>
            </div>
            <Newsletter></Newsletter>
        </div>
    );
};

export default About;