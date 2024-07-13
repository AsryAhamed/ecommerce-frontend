import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
            <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
