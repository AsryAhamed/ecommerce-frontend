import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../redux/actions/cartActions';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleQuantityChange = (productId, quantity) => {
        dispatch(updateCartQuantity(productId, parseInt(quantity)));
    };

    const totalAmount = cart.items.reduce((total, item) => total + item.price.replace('$', '') * item.quantity, 0);

    return (
        <div className="shopping-cart">
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                {cart.items.map(item => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-item-details">
                            <p className="cart-item-name">{item.name}</p>
                            <p className="cart-item-price">{item.price}</p>
                        </div>
                        <div className="cart-item-actions">
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            />
                            <button onClick={() => handleRemove(item.id)} className="remove-button">Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="total-amount">Total Amount: ${totalAmount.toFixed(2)}</h2>
            <a href="/checkout" className="checkout-button">Checkout</a>
        </div>
    );
};

export default ShoppingCart;
