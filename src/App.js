import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './redux/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Search from './components/Search'; // Import the Search component
import Promotions from './pages/Promotions';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/search" element={<Search />} /> {/* Add route for Search component */}
                    <Route path="/promotions" element={<Promotions />} />
                </Routes>
                <Footer />
                <ToastContainer />
            </Router>
        </Provider>
    );
};

export default App;
