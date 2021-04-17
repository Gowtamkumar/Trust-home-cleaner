import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center">
            
            <form class="row g-3 contact-container">
            <h3 className="text-center">Cont<span className="brand-text-color">act Us</span></h3>
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="First Name" />
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="Last Name" />
                </div>
                <div class="col-12">
                    <input type="email" class="form-control"  placeholder="Email Adress" />
                </div>
               
                <div class="col-12">
                    <textarea class="form-control" rows="3"></textarea>
                </div>

                <div class="col-12 d-grid gap-2">
                <button type="button" class="btn btn-sm brand-button">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;