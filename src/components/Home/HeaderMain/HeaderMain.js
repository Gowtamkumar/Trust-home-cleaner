import React from 'react';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div className="text-center text-light p-5 headermain-container d-flex align-items-center container-fluid ">
            <div className="headermain-inner">
                <h2 className="mb-2 main-heading-text">Cleanmate operates in Ottawa and provides a variety of cleaning services.
                Choose us because of our reputation for excellence.</h2><br />
                <button className="btn brand-button text-light">Read More</button>
            </div>

        </div>
    );
};

export default HeaderMain;