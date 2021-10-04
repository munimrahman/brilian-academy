import React from 'react';

const Newsletter = () => {
    return (
        <div className="text-center m-5">
            <h2><span className="text-danger fw-bold">Subscribe</span> Our Newsletter</h2>
            <p className="w-50 mx-auto">Submit your email here. We will notify you our important news and also <span className="fw-bold">free courses</span> and offers</p>
            <div className="input-group mb-3 w-50 mx-auto">
                <input type="text" className="form-control shadow-none" placeholder="your email address" aria-label="your email address" aria-describedby="button-addon2" />
                <button className="btn btn-outline-danger shadow-none" type="button" id="button-addon2">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;