import React from 'react';
import personOne from '../../images/person-1.jpg'
import personTwo from '../../images/person-2.jpg'
import personThree from '../../images/person-3.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className="my-5 p-5 bg-color">
            <h1 className="text-center">Our <span className="fw-bold text-danger">Testimonials</span></h1>
            <p className="w-50 mx-auto text-center fs-5 pb-3">Want to join now? Don't hesitate! We have thousands of satisfied students! See what they are saying!</p>
            <div id="carouselExampleInterval" class="carousel slide w-75 mx-auto" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <p className="text-center lh-lg w-75 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus eligendi exercitationem nisi nulla quod explicabo iure, molestiae quasi vel ea commodi delectus aut ipsa neque consequuntur, et, itaque nemo? Magni consequatur dignissimos vero eaque odit itaque sequi recusandae!</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="hr-line border border-danger w-25"></div>
                            <img src={personOne} class="d-block border border-3 border-danger carousel-img mx-3" alt="..." />
                            <div className="hr-line border border-danger w-25"></div>
                        </div>
                        <p className="text-center mt-3"><span className="fw-bold">MD Adil</span> -<small> SEO Expert</small></p>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <p className="text-center lh-lg w-75 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus eligendi exercitationem nisi nulla quod explicabo iure, molestiae quasi vel ea commodi delectus aut ipsa neque consequuntur, et, itaque nemo? Magni consequatur dignissimos vero eaque odit itaque sequi recusandae!</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="hr-line border border-danger w-25"></div>
                            <img src={personTwo} class="d-block border border-3 border-danger carousel-img mx-3" alt="..." />
                            <div className="hr-line border border-danger w-25"></div>
                        </div>
                        <p className="text-center mt-3"><span className="fw-bold">Ariful Islam</span> -<small> Web Developer</small></p>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <p className="text-center lh-lg w-75 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus eligendi exercitationem nisi nulla quod explicabo iure, molestiae quasi vel ea commodi delectus aut ipsa neque consequuntur, et, itaque nemo? Magni consequatur dignissimos vero eaque odit itaque sequi recusandae!</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="hr-line border border-danger w-25"></div>
                            <img src={personThree} class="d-block border border-3 border-danger carousel-img mx-3" alt="..." />
                            <div className="hr-line border border-danger w-25"></div>
                        </div>
                        <p className="text-center mt-3"><span className="fw-bold">Mahadi Hasan</span> -<small> Content Writer</small></p>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Testimonials;