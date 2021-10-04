import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/404-not-found.png'

const NotFound = () => {
    return (
        <div className="container d-flex flex-column align-items-center mx-auto">
            <h2 className="mb-3">404 - Nothing to See Here!</h2>
            <div>
                <Link to="/" className="btn btn-danger shadow-none">Go Home</Link>
            </div>
            <div className="w-50">
                <img src={notFoundImg} alt="404-not-found" className="img-fluid" />
            </div>
        </div>
    );
};

export default NotFound;