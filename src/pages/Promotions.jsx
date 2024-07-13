import React from 'react';
import ProductCard from '../components/ProductCard';
import './Promotions.css';

const Promotions = () => {
    const promotionProducts = [
        { id: 1, name: 'iPhone 13 Pro', price: '$999', imageUrl: 'https://images.dailyobjects.com/marche/product-images/1101/slick-phone-case-cover-for-iphone-13-pro-images/Nimbus-Phone-Case-Cover-For-iPhone-13-Pro.png?tr=cm-pad_resize,v-2,w-412,h-490,dpr-2,q-60' },
        { id: 2, name: 'iPhone 12', price: '$799', imageUrl: 'https://www.freeiconspng.com/thumbs/iphone-x-pictures/new-iphone-x-photo-18.png' },
        { id: 3, name: 'Samsung S26', price: '$299', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png' },
    ];

    return (
        <div className="promotions-container">
            <h1>Promotions</h1>
            <div className="promotions-list">
                {promotionProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Promotions;
