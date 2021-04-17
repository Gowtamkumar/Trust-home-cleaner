import React from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from 'react-hover-animation'
const Service = ({ singleservice }) => {
    // console.log("sdfsdf",singleservice)
    return (
      
    
   
        <div className="col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '22rem' }}>
            <AnimationWrapper>
            <img src={`data:image/jpeg;base64,${singleservice.image.img}`} className="card-img-top" alt="..." />
            </AnimationWrapper>
                {/* <img src={homeClining} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title brand-text-color">{singleservice.service}</h5>
                    <p className="card-text">{singleservice.description}</p>
                </div>
                <div className="d-flex justify-content-between p-2">
                    <div className=" ">
                        <h2 className="brand-text-color">${singleservice.price}</h2>
                    </div>
                    <div className=" ">
                        <h2>
                            <Link to={`/order/${singleservice._id}`}>
                                <button className="btn brand-button text-light">Buy Now</button>
                            </Link>
                        </h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;