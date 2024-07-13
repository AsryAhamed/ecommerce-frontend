import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Navigation</h2>
            <ul className="sidebar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/promotions">Promotions</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
