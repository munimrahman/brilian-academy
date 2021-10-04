import React from 'react';

const BecomeInstructor = () => {
    return (
        <div>
            <h1 className="text-center"><span className="fw-bold">Register</span> and Become a Instructor</h1>
            <div className="row w-75 my-5 p-5 shadow rounded mx-auto d-flex align-items-center">
                <div className="col-6 border-end border-danger">
                    <div className="w-75 mx-auto">
                        <h3 className="text-center mb-5"><span className="border-bottom border-3 border-danger">Apply Now</span></h3>
                        <form className="row g-3">
                            <div className="col">
                                <input type="text" className="form-control shadow-none" placeholder="Your Name" aria-label="Your Name" />
                            </div>
                            <div className="input-group">
                                <span className="input-group-text" id="addon-wrapping">@</span>
                                <input type="text" className="form-control shadow-none" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control shadow-none" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Password</label>
                                <input type="password" className="form-control shadow-none" id="inputPassword4" />
                            </div>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control shadow-none" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control shadow-none" id="inputCity" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control shadow-none" id="inputZip" />
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input shadow-none" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-danger shadow-none">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-6 p-5">
                    <div className="w-75">
                        <h3><span className="fw-bold text-danger">Join Us!</span> We Are More Than An Academy!</h3>
                        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, quidem? Quasi nesciunt quibusdam, non quas optio aliquid. Incidunt, quia ullam?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeInstructor;