import React from 'react';

const Newsletter = () => {
    return (
        <div className="text-center m-5">
            <h2><span className="text-danger fw-bold">Subscribe</span> Our Newsletter</h2>
            <p className="w-50 mx-auto">Submit your email here. We will notify you our important news and also free courses and offers</p>
            <div class="input-group mb-3 w-50 mx-auto">
                <input type="text" class="form-control shadow-none" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-danger shadow-none" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    );
};

export default Newsletter;