import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/NavBar.css';


const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Title of the website */}
            <Link to="/home" className="title">Ticket Booking</Link>

            {/* This is the menu option for smaller screens */}
            <button onClick={() => setOpen(!open)} className="menu-toggle" aria-label="Toggle menu">
                ☰
            </button>

            {/* This is the profile link */}
            <div className={`menu ${open ? 'open' : ''}`}>
                <Link to="/profile">Profile</Link>  {/* Navigate to Profile page */}
                
                {/* This is the cart button */}
                <div className="cart">
                    <Link to="/cart" className="cart-button">Cart</Link> {/* Navigate to Cart page */}
                </div>

                {/* This is the login button */}
                <Link to="/login" className="login-button">Login</Link> {/* Navigate to Login page */}
            </div>

            {/* These are the menu options for mobile */}
            {open && (
                <div className="mobile-menu">
                    <Link to="/profile">Profile</Link>
                    <Link to="/login" className="login-button">Login</Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
