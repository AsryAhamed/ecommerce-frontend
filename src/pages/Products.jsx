import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import './Products.css';

const Products = () => {
    const [products] = useState([
        { id: 1, name: 'iPhone X', price: '$999.00', imageUrl: 'https://sukienphuongnam.vn/wp-content/uploads/2022/10/iphone-13-pro-azul-sierra-real.png.png' },
        { id: 2, name: 'iPhone X (Black)', price: '$1099.00', imageUrl: 'https://www.freeiconspng.com/thumbs/iphone-x-pictures/new-iphone-x-photo-18.png' },
        { id: 3, name: 'iPhone X (Silver)', price: '$1199.00', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png' },
        { id: 4, name: 'iPhone X (Silver)', price: '$1199.00', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png' },
        { id: 5, name: 'iPhone X (Silver)', price: '$1199.00', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png' },
        { id: 6, name: 'iPhone X (Silver)', price: '$1199.00', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png' },
        { id: 7, name: 'iPhone X (Silver)', price: '$1199.00', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png' },
        { id: 8, name: 'iPhone X (Silver)', price: '$1199.00', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png' },
        { id: 9, name: 'iPhone X (Silver)', price: '$1199.00', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png' },
        { id: 10, name: 'iPhone X (Silver)', price: '$1199.00', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png' },
        { id: 11, name: 'iPhone X (Silver)', price: '$1199.00', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png' },
        { id: 12, name: 'iPhone X (Silver)', price: '$1199.00', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png' },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    const lastPostIndex = currentPage * productsPerPage;
    const firstPostIndex = lastPostIndex - productsPerPage;
    const currentProducts = products.slice(firstPostIndex, lastPostIndex);

    return (
        <div>
            <div className="product-list">
                {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Pagination
                totalPosts={products.length}
                postsPerPage={productsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Products;
