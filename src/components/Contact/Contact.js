import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            {/* hero section of contact page */}
            <div className="hero d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white"><span className="fw-bold">Contact</span> Us</h1>
                <p className="text-white">HOME &gt; CONTACT US</p>
            </div>
            <div className="w-75 row mx-auto my-5 d-flex align-items-center">
                {/* contact info section */}
                <div className="col-4">
                    <div className="d-flex align-items-center">
                        <div className="bg-danger icn-bg d-flex align-items-center justify-content-center">
                            <i className="fas fa-map-marker-alt fs-3 text-white"></i>
                        </div>
                        <div className="ms-4">
                            <h4>Address</h4>
                            <address>8530 Saliabakpur, Banaripara <br /> Barishal, Bangladesh</address>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="bg-danger icn-bg d-flex align-items-center justify-content-center">
                            <i className="fas fa-envelope-open fs-3 text-white"></i>
                        </div>
                        <div className="ms-4">
                            <h4>Email</h4>
                            <p>brilian@email.com</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="bg-danger icn-bg d-flex align-items-center justify-content-center">
                            <i className="fas fa-phone fs-3 text-white"></i>
                        </div>
                        <div className="ms-4">
                            <h4>Call Us</h4>
                            <p>+88019265 <br /> +88049665</p>
                        </div>
                    </div>
                </div>
                {/* contact form section */}
                <div className="col-8 border-start border-danger">
                    <div className="ms-3">
                        <h2>Feel Free to Send Us a Message</h2>
                        <p>We always want to hear you. We will response with in 24 hours!</p>
                        <div>
                            <div className="row mb-3">
                                <div className="col">
                                    <p>Name</p>
                                    <input type="text" className="form-control shadow-none" placeholder="Your Name" aria-label="Your Name" />
                                </div>
                                <div className="col">
                                    <p>Email</p>
                                    <input type="email" className="form-control shadow-none" placeholder="Email" aria-label="Email" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <p>Message</p>
                                <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" rows="8"></textarea>
                            </div>
                            <button className="btn btn-danger shadow-none">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Contact;