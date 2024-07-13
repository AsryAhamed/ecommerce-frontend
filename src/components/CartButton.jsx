import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartButton.css';

const CartButton = () => {
    const totalCount = useSelector(state => state.cart.totalCount);

    return (
        <Link to="/cart" className="cart-button">
            Cart
            {totalCount > 0 && <span className="cart-count">{totalCount}</span>}
        </Link>
    );
};

export default CartButton;
