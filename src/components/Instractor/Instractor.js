import React from 'react';

const Instractor = (props) => {
    const { name, img, review, category, address } = props.instructor || {}
    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body p-4">
                    <h5 className="card-title text-danger">{name}</h5>
                    <p className="card-text">{category}</p>
                    <div>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                        <small className="text-secondary ps-2 review-text">{review} Reviews</small>
                    </div>
                    <p className="text-secondary mt-3 mb-0"><i className="fas fa-map-marker"></i> {address}</p>
                </div>
            </div>
        </div>
    );
};

export default Instractor;