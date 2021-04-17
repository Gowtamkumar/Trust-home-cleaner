import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {

    return (
        <div className="container">

    
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand brand-text-color LogoBrand">TRUST HOME CLENER</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 navbar-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 navbar-link">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 navbar-link">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 navbar-link">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 navbar-link">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/login" class="nav-link ms-3 navbar-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;