import React from 'react';
import './Course.css'

const Course = (props) => {
    // props info comes from home page and courses page
    const { author, title, descriptions, reviews, students, price, authorImg, courseImg, category } = props.course;
    return (
        // this component is called from home page and coursees page
        <div className="col">
            <div className="card h-100 shadow">
                <div className="position-relative">
                    <img src={courseImg} className="card-img-top" alt="..." />
                    <img src={authorImg} alt="aimg" className="authorImg" />
                    <span className="badge bg-danger category">{category}</span>
                </div>
                <div className="card-body">
                    <div>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                        <small className="text-secondary ps-2 review-text">{reviews} Reviews</small>
                    </div>
                    <h5 className="fs-6 fw-bold">{title}</h5>
                    <p className="autor-text">By <span className="text-danger">{author}</span></p>
                    <p className="card-text card-font">{descriptions}</p>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <i className="fas fa-user-alt pe-2"></i>
                            <small>{students}</small>
                        </div>
                        <button className="btn btn-danger shadow-none">Enroll</button>
                        <div>
                            <p className="m-0 text-success fw-bold">${price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;