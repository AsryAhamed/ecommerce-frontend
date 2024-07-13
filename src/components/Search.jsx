import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import './Search.css';

const Search = () => {
    const [query, setQuery] = useState('');
    const products = useSelector(state => state.products.items); // Assuming products are stored in the Redux store

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="search-container">
            <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search for products..."
                className="search-input"
            />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Search;
