import React from 'react';

const BecomeInstructor = () => {
    return (
        <div>
            <h1 className="text-center">Register and Become a Instructor</h1>
            <div className="row w-75 my-5 p-5 shadow rounded mx-auto d-flex align-items-center">
                <div className="col-6 border-end border-danger">
                    <div className="w-75 mx-auto">
                        <h3 className="text-center mb-5"><span className="border-bottom border-3 border-danger">Apply Now</span></h3>
                        <form class="row g-3">
                            <div class="col">
                                <input type="text" class="form-control shadow-none" placeholder="Your Name" aria-label="Your Name" />
                            </div>
                            <div class="input-group">
                                <span class="input-group-text" id="addon-wrapping">@</span>
                                <input type="text" class="form-control shadow-none" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control shadow-none" id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control shadow-none" id="inputPassword4" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control shadow-none" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">City</label>
                                <input type="text" class="form-control shadow-none" id="inputCity" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputZip" class="form-label">Zip</label>
                                <input type="text" class="form-control shadow-none" id="inputZip" />
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input shadow-none" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-danger shadow-none">Sign Up</button>
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