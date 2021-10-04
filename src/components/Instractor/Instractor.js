import React from 'react';

const Instractor = () => {
    return (
        <>
            <div className="col">
                <div className="card h-100 shadow">
                    <img src="https://img-c.udemycdn.com/user/200_H/7010472_fcc1_6.jpg" className="card-img-top" alt="..." />
                    <div className="card-body p-4">
                        <h5 className="card-title text-danger">Instractor Name</h5>
                        <p className="card-text">Digital Marketer</p>
                        <div>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="far fa-star text-warning"></i>
                            <small className="text-secondary ps-2 review-text">243 Reviews</small>
                        </div>
                        <p className="text-secondary mt-3 mb-0"><i class="fas fa-map-marker"></i> Paris, France</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Instractor;