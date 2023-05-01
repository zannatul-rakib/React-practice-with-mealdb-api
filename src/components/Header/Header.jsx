import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className="navbar">
            <div className="logo">
            <h1>MealDB</h1>
            </div>
            <div className="menu">
                <a href="/home">Home</a>
                <a href="/orders">Orders</a>
                <a href="/services">Services</a>
                <a href="/Contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;