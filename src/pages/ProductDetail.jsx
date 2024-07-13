import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Simulating fetching product details based on productId
        const products = [
            {
                id: 1,
                name: 'iPhone X',
                price: '$999.00',
                description: 'The iPhone X features a 5.8-inch Super Retina display, Face ID, and a powerful A11 Bionic chip.',
                imageUrl: 'https://sukienphuongnam.vn/wp-content/uploads/2022/10/iphone-13-pro-azul-sierra-real.png.png'
            },
            {
                id: 2,
                name: 'iPhone X (Black)',
                price: '$1099.00',
                description: 'The iPhone X (Black) offers the same great features as the iPhone X with a sleek black finish.',
                imageUrl: 'https://www.freeiconspng.com/thumbs/iphone-x-pictures/new-iphone-x-photo-18.png'
            },
            
            {
                id: 3,
                name: 'iPhone X (Silver)',
                price: '$1199.00',
                description: 'The iPhone X (Silver) combines the latest technology with a stunning silver design.',
                imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png'
            },
            {
                id: 4,
                name: 'iPhone X (Silver)',
                price: '$1199.00',
                description: 'The iPhone X (Silver) combines the latest technology with a stunning silver design.',
                imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png'
            },
            {
                id: 5,
                name: 'iPhone X (Silver)',
                price: '$1199.00',
                description: 'The iPhone X (Silver) combines the latest technology with a stunning silver design.',
                imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png'
            },
            {
                id: 6,
                name: 'iPhone X (Silver)',
                price: '$1199.00',
                description: 'The iPhone X (Silver) combines the latest technology with a stunning silver design.',
                imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png'
            },
            {
                id: 7,
                name: 'iPhone X (Silver)',
                price: '$1199.00',
                description: 'The iPhone X (Silver) combines the latest technology with a stunning silver design.',
                imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png'
            },
            {
                id: 8,
                name: 'iPhone X (Silver)',
                price: '$1199.00',
                description: 'The iPhone X (Silver) combines the latest technology with a stunning silver design.',
                imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png'
            },
            {
                id: 9,
                name: 'iPhone X (Silver)',
                price: '$1199.00',
                description: 'The iPhone X (Silver) combines the latest technology with a stunning silver design.',
                imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png'
            },
            {
                id: 10,
                name: 'iPhone X (Silver)',
                price: '$1199.00',
                description: 'The iPhone X (Silver) combines the latest technology with a stunning silver design.',
                imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png'
            },
            {
                id: 11,
                name: 'iPhone X (Silver)',
                price: '$1199.00',
                description: 'The iPhone X (Silver) combines the latest technology with a stunning silver design.',
                imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png'
            },
            {
                id: 12,
                name: 'iPhone X (Silver)',
                price: '$1199.00',
                description: 'The iPhone X (Silver) combines the latest technology with a stunning silver design.',
                imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png'
            },
        ];

        const selectedProduct = products.find(p => p.id === parseInt(productId));
        setProduct(selectedProduct);
    }, [productId]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetail;
