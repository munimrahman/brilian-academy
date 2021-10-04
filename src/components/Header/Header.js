import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#DC3545"
    };
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
                                <NavLink to="/home" activeStyle={activeStyle} className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="courses" activeStyle={activeStyle} className="nav-link">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/instractors" activeStyle={activeStyle} className="nav-link">Instructors</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" activeStyle={activeStyle} className="nav-link">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" activeStyle={activeStyle} className="nav-link">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/sdfgt" activeStyle={activeStyle} className="nav-link">Test 404 Page</NavLink>
                            </li>
                        </ul>
                        <div className="ms-3">
                            <button className="btn btn-danger mx-2 shadow-none">Log In</button>
                            <button className="btn btn-outline-danger mx-2 shadow-none">Sing Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;