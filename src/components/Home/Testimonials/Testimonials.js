import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial/Testimonial';
import './Testimonials.css'
import Carousel from 'react-multi-carousel';
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('https://cryptic-sea-20754.herokuapp.com/showreview')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="container-fluid bg-light">
            <section class="text-center container my-5 p-1 pb-5">
                <h2 class="h1-responsive font-weight-bold my-5">Testi<span className="brand-text-color">monials</span> </h2>
                <p class="dark-grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam </p>
                <div className="row">
                    <Carousel responsive={responsive}>
                        {
                            testimonials.map(tmonial => <Testimonial testimonial={tmonial} key={tmonial._id}></Testimonial>)
                        }
                    </Carousel>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;