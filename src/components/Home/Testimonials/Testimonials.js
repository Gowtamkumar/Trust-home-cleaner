import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial/Testimonial';
import './Testimonials.css'
import img from '../../../Images/cleaning-set.jpg'
import img1 from '../../../Images/Catering.jpg'
import img2 from '../../../Images/home-clining.jpg'
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/showreview')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className="container-fluid bg-light">
            <section class="text-center container my-5 p-1 pb-5">
                <h2 class="h1-responsive font-weight-bold my-5">Testi<span className="brand-text-color">monials</span> </h2>
                <p class="dark-grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam </p>


                <div className="row">
                    {
                        testimonials.map(tmonial => <Testimonial testimonial={tmonial} key={tmonial._id}></Testimonial>)
                    }
                </div>



            </section>
        </div>

    );
};

export default Testimonials;