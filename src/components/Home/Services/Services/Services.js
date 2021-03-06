import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://cryptic-sea-20754.herokuapp.com/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <div className="text-center mb-5">
                <h2>OUR <span className="brand-text-color">CLEANING SERVICES</span> </h2>
                <p>Do you wish you had more free time? We can make it happen!</p>
            </div>
            <div className="row">
                {
                    services.length === 0 && <p>Lodding.....</p>
                }
                {
                    services.map(SgService => <Service singleservice={SgService} key={SgService._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;