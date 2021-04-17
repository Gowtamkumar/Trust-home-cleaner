import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
library.add(fab, faFacebookF, faLinkedinIn, faTwitter, faInstagram)
const Footer = () => {
    return (
        <div className="container-fluid footer-contaier mt-5 brand-button text-light">
            <div className="container">


                <div className="row">
                    <div className="col-md-3 mt-5">
                        <h5 className="">About</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ipsam repellendus dolore atque quibusdam veritatis veniam tempore culpa rem assumenda maiores, expedita sint, quasi amet!</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-5">Company</h5>
                        <ul class="list-group">
                            <li class="list-group-items">
                                <Link to="/" className="text-light">About</Link>
                            </li>
                            <li class="list-group-items">
                                <Link to="/" className="text-light">Services</Link>
                            </li>
                            <li class="list-group-items">
                                <Link to="/" className="text-light">Our Team</Link>
                            </li>
                            <li class="list-group-items">
                                <Link to="/" className="text-light">Portfolio</Link>
                            </li>
                            <li class="list-group-items">
                                <Link to="/" className="text-light">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-5">Quick Link</h5>
                        <ul class="list-group">
                            <li class="list-group-items">
                                <Link to="/" className="text-light">House Clining</Link>
                            </li>
                            <li class="list-group-items">
                                <Link to="/" className="text-light">POST RENOVATION</Link>
                            </li>
                            <li class="list-group-items">
                                <Link to="/" className="text-light">GREEN SPACES MAINTENANCE</Link>
                            </li>
                            <li class="list-group-items">
                                <Link to="/" className="text-light">House Clining Emergency</Link>
                            </li>
                            <li class="list-group-items">
                                <Link to="/" className="text-light">Support</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-5">Our Address</h5>
                        <p>Jessore-Ganganandapur-Chutipur Rd, Jashore</p>
                        <div >
                            <FontAwesomeIcon className="info-icon" icon={faFacebookF} style={{ fontSize: '25px', marginLeft: "12px", }} />
                            <FontAwesomeIcon className="info-icon" icon={faLinkedinIn} style={{ fontSize: '25px', marginLeft: "12px" }} />
                            <FontAwesomeIcon className="info-icon" icon={faTwitter} style={{ fontSize: '25px', marginLeft: "12px" }} />
                            <FontAwesomeIcon className="info-icon" icon={faInstagram} style={{ fontSize: '25px', marginLeft: "12px" }} />
                        </div>
                        <div className="mt-3">
                            <h5>Call Now</h5>
                            <button className="btn bg-light">+25784146</button>
                        </div>

                    </div>

                </div>
                <div className="row copyright-container">
                    <div className="col-md-12 text-center">
                        <h5>Copyright {(new Date()).getFullYear()} all Rights Reserved</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;