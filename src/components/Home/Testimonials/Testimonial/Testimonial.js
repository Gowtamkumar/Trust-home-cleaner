import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (

        <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
            <div class="card testimonial-card">
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
                </div>
            </div>
        </div>


    );
};

export default Testimonial;