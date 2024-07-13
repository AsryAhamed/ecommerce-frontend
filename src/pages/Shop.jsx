import React from 'react';
import './Shop.css';
import ShopCard from '../components/ShopCard';

const shops = [
    {
        name: 'Wireless World',
        imageUrl: 'https://rtlimages.apple.com/cmc/dieter/store/16_9/R219.png?resize=2880:1612&output-format=jpg&output-quality=85&interpolation=progressive-bicubic',
        description: 'Wireless World offers a wide range of mobile devices and accessories. Known for their excellent customer service and competitive prices, Wireless World is your go-to shop for the latest in mobile technology.'
    },
    {
        name: 'Cellcampus',
        imageUrl: 'https://img.global.news.samsung.com/uk/wp-content/uploads/2020/12/Day_02_363-1024x683.jpg',
        description: 'Cellcampus specializes in smartphones and tablets. With a focus on the latest releases and top brands, Cellcampus is the perfect place to find your next device.'
    },
    {
        name: 'Gadget Galaxy',
        imageUrl: 'https://antdisplay.com/pub/media/magefan_blog/20190515_103005_016.jpg',
        description: 'Gadget Galaxy offers a variety of electronics and gadgets. From smartphones to smart home devices, Gadget Galaxy has everything you need to stay connected and up-to-date with the latest technology.'
    }
];

const Shop = () => {
    return (
        <div className="shop-container">
            <h1>Our Shops</h1>
            <div className="shop-grid">
                {shops.map((shop, index) => (
                    <ShopCard
                        key={index}
                        name={shop.name}
                        imageUrl={shop.imageUrl}
                        description={shop.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop;
