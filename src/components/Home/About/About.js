import React from 'react';
import about from '../../../Images/cleaning-set.jpg';
import './About.css'
const About = () => {
    return (
        <div className="container-fluid">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={about} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 p-5">
                        <h3 className="brand-text-color">ABOUT OUR COMPANY</h3>
                        <p>Exceptional level of cleaning services.</p>
                        <p>Founded in 1995 Cleanmate quickly built a reputation as one of the leading providers of residential and commercial cleaning solutions. Our continuous pursuit for perfection has resulted in consistent growth each year. Our focus is to listen to our clients, understand their needs and provide the exceptional level of residential and commercial cleaning service.</p>
                        <div className="d-flex justify-content-between brand-text-color">
                            <div className="brand-text-color">
                                <h5>900+</h5>
                                <h4 className="brand-text-color">Happy Clients</h4>
                            </div>
                            <div>
                            <h5>18+</h5>
                                <h4>Total Services</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;