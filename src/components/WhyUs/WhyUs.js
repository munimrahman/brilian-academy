import React from 'react';

const WhyUs = () => {
    return (
        <div>
            <h1 className="text-center m-5">Why <span className="fw-bold text-danger">Choose Us?</span></h1>
            <div className="container row d-flex align-items-center mx-auto">
                <div className="col-6">
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card h-100 bg-color shadow">
                                <div className="my-5 d-flex flex-column align-items-center">
                                    <div className="bg-danger icn-bg d-flex align-items-center justify-content-center mb-3">
                                        <i class="fas fa-diagnoses fs-3 text-white"></i>
                                    </div>
                                    <h5 className="my-3">Online Test</h5>
                                    <p className="text-center w-75">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 bg-color shadow">
                                <div className="my-5 d-flex flex-column align-items-center">
                                    <div className="bg-danger icn-bg d-flex align-items-center justify-content-center mb-3">
                                        <i class="fas fa-book fs-3 text-white"></i>
                                    </div>
                                    <h5 className="my-3">Online Materials
                                    </h5>
                                    <p className="text-center w-75">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 bg-color shadow">
                                <div className="my-5 d-flex flex-column align-items-center">
                                    <div className="bg-danger icn-bg d-flex align-items-center justify-content-center mb-3">
                                        <i class="fas fa-tv fs-3 text-white"></i>
                                    </div>
                                    <h5 className="my-3">Virtual Classes</h5>
                                    <p className="text-center w-75">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 bg-color shadow">
                                <div className="my-5 d-flex flex-column align-items-center">
                                    <div className="bg-danger icn-bg d-flex align-items-center justify-content-center mb-3">
                                        <i class="fas fa-certificate fs-3 text-white"></i>
                                    </div>
                                    <h5 className="my-3">Online Certificate</h5>
                                    <p className="text-center w-75">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h2 className="mb-4">Frequently Asked Questions</h2>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Professional Teachers
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>
                                        Nullam tempor eleifend lacus, non viverra ipsum iaculis nec. Donec commodo arcu vel nibh interdum, quis blandit nisl imperdiet. In vel risus lorem. Nullam eu dapibus lectus. Nulla ut consequat ligula. Nullam vitae massa vitae odio consequat laoreet vitae eu ante. Duis accumsan, diam quis eleifend. Suspendisse elementum, ante ut vestibulum pharetra, ex neque bibendum lorem, et tempor velit arcu vel tellus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    24/7 Online Course
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Nunc vel ipsum sit amet ante molestie viverra id sed augue. Duis mattis ex eget ex interdum interdum. Nullam a molestie est. Nulla pharetra volutpat ligula, vitae tristique ante imperdiet eget. Suspendisse elementum, ante ut vestibulum pharetra, ex neque bibendum lorem, et tempor velit arcu vel tellus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Lifetime Membership
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Suspendisse elementum, ante ut vestibulum pharetra, ex neque bibendum lorem, et tempor velit arcu vel tellus. Proin sit amet rutrum orci, eget feugiat dolor. Integer venenatis ipsum vel tempor venenatis. Cras commodo pulvinar convallis. Suspendisse elementum, ante ut vestibulum pharetra, ex neque bibendum lorem, et tempor velit arcu vel tellus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;