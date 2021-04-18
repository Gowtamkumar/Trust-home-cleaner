import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
const Testimonial = ({ testimonial }) => {
    return (
        <div class="col-md-12 mb-lg-0 mb-4">
            <div class="card testimonial-card m-2">
                <div class="card-up info-color"></div>
                <div class="avatar mx-auto white">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" class="rounded-circle img-fluid" />
                </div>
                <div class="card-body">
                    <h4 class="font-weight-bold mb-4 brand-text-color">{testimonial.name}</h4>
                    <p>{testimonial.companyName}</p>
                    <hr />
                    <p class="dark-grey-text mt-4">
                        <i class="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;