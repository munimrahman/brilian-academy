import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid mx-5">
                    <Link to="/" className="navbar-brand fs-3">
                        <img src={logo} alt="logo" className="w-75" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/home" ctiveStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }} className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to="courses" className="nav-link">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/instractors" className="nav-link">Instructors</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sdfgt" className="nav-link">Test 404 Page</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;