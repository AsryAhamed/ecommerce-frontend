import React, { useState } from 'react';
import './Home.css';
import ProductCard from '../components/ProductCard';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
    const featuredProducts = [
        { id: 1, name: 'iPhone 13 Pro', price: '$999.00', imageUrl: 'https://images.dailyobjects.com/marche/product-images/1101/slick-phone-case-cover-for-iphone-13-pro-images/Nimbus-Phone-Case-Cover-For-iPhone-13-Pro.png?tr=cm-pad_resize,v-2,w-412,h-490,dpr-2,q-60' },
        { id: 2, name: 'iPhone 12', price: '$799.00', imageUrl: 'https://www.freeiconspng.com/thumbs/iphone-x-pictures/new-iphone-x-photo-18.png' },
        { id: 3, name: 'Samsung S26', price: '$399.00', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png' },
    ];

    const happyCustomers = [
        'https://www.applemust.com/wp-content/uploads/2017/11/iphonex_launch_tokyo_customer_selfiestick_20171102.jpg',
        'https://www.apple-iphone.ru/wp-content/uploads/2021/04/prodazhi_iphone-xs00008.jpeg',
        'https://www.apple.com/newsroom/images/2023/09/iphone-15-lineup-and-new-apple-watch-lineup-arrive-worldwide/article/Apple-5th-Ave-New-York-customers-holding-iPhone-purchases-230922_Full-Bleed-Image.jpg.large.jpg',
        'https://pbs.twimg.com/media/EvMHoZBVIAEPd5Z.jpg:large',
        'https://i.dailymail.co.uk/1/2018/09/21/09/4444954-6192393-image-a-65_1537517925224.jpg',
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const customersPerPage = 1;

    const pageCount = Math.ceil(happyCustomers.length / customersPerPage);
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const currentCustomers = happyCustomers.slice(
        currentPage * customersPerPage,
        (currentPage + 1) * customersPerPage
    );

    return (
        <div className="home-container">
            <div className="banner">
                <h1>Welcome to Mobile Marvels</h1>
                <p>Your one-stop shop for the latest and greatest mobile devices</p>
            </div>

            <div className="carousel">
                <img src="https://media.idownloadblog.com/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-advertisement.jpg" alt="iPhone 13 Pro Advertisement" />
                <img src="https://photos5.appleinsider.com/gallery/50083-98273-42127-81652-Tracked-Ad-Spot-xl-xl.jpg" alt="Apple Ad Spot" />
                <img src="https://9to5mac.com/wp-content/uploads/sites/6/2024/01/Screenshot-2024-01-25-at-8.54.11%E2%80%AFAM.png?w=1600" alt="Apple Advertisement" />
                <img src="https://www.macobserver.com/wp-content/uploads/2022/09/SamsunFiresShotsAppleSept2022Featured.png" alt="Samsung Fires Shots at Apple" />
            </div>

            <h2>Featured Products</h2>
            <div className="featured-products">
                {featuredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <h2>Happy Customers</h2>
            <div className="happy-customers">
                {currentCustomers.map((url, index) => (
                    <img key={index} src={url} alt={`Happy Customer ${index + 1}`} />
                ))}
            </div>

            <ReactPaginate
                previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                onPageChange={handlePageClick}
                pageCount={pageCount}
                containerClassName={'pagination'}
                previousClassName={'pagination-previous'}
                nextClassName={'pagination-next'}
                activeClassName={'active'}
                disabledClassName={'disabled'}
                previousLinkClassName={'pagination-link'}
                nextLinkClassName={'pagination-link'}
                breakLabel={null}
                pageLinkClassName={null}
            />

            <div className="promotions">
                <h2>Special Offers</h2>
                <p>Don't miss out on our exclusive deals and discounts. Check out our special offers now!</p>
                <div className="promotion-banner">
                    <img src="https://storage.pixteller.com/designs/designs-images/2021-01-08/05/iphone-sale-banner-1-5ff87a7608187.png" alt="Promotion Banner" />
                </div>
                <Link to="/promotions" className="promotions-button">View All Promotions</Link>
            </div>
        </div>
    );
};

export default Home;
