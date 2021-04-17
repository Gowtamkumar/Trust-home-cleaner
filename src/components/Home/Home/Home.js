import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Services></Services>
            <About></About>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>

    );
};

export default Home;