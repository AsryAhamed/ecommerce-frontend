import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faMobileAlt } from '@fortawesome/free-solid-svg-icons'; // Import the mobile icon
import './Navbar.css';

const Navbar = () => {
    const totalCount = useSelector(state => state.cart.totalCount); // Get cart count from Redux store

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-brand">
                    <FontAwesomeIcon icon={faMobileAlt} className="brand-icon" /> Mobile Marvels
                </Link>
            </div>
            <div className="navbar-center">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/products" className="navbar-link">Products</Link>
                <Link to="/shop" className="navbar-link">Shop</Link>
                <Link to="/contact" className="navbar-link">Contact</Link>
            </div>
            <div className="navbar-icons">
                <Link to="/search" className="icon">
                    <FontAwesomeIcon icon={faSearch} />
                </Link>
                <Link to="/cart" className="icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {totalCount > 0 && <span className="cart-count">{totalCount}</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
