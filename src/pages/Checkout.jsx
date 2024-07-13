import React from 'react';
import './Checkout.css';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        alert('Payment Submitted');
    };

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h1>Checkout</h1>
                <p>Complete your purchase by filling in the details below.</p>
            </div>
            <div className="checkout-content">
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    {cartItems.map((item) => (
                        <div key={item.id} className="order-item">
                            <img src={item.imageUrl} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${Number(item.price).toFixed(2)}</p>
                                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="order-total">
                        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                    </div>
                </div>
                <div className="checkout-form">
                    <h2>Shipping Information</h2>
                    <form onSubmit={handlePaymentSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Shipping Address</label>
                            <input type="text" id="address" name="address" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zip">ZIP Code</label>
                            <input type="text" id="zip" name="zip" required />
                        </div>
                        <h2>Payment Information</h2>
                        <div className="form-group">
                            <label htmlFor="card-number">Card Number</label>
                            <input type="text" id="card-number" name="card-number" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expiry-date">Expiry Date</label>
                            <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" required />
                        </div>
                        <button type="submit" className="checkout-button">Complete Purchase</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
