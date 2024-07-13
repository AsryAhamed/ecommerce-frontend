import React from 'react';
import './ShopCard.css';

const ShopCard = ({ name, imageUrl, description }) => {
    return (
        <div className="shop-card">
            <img src={imageUrl} alt={name} className="shop-image" />
            <div className="shop-details">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ShopCard;
