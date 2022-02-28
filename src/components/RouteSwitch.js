import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import About from './About';
import ShopView from './ShopView';
import Shop from './Shop';
import Product from './Product';
import Home from './Home';
import Contact from './Contact';
import Cart from './Cart';
import NotFound from './NotFound';
import ScrollToTop from './ScrollToTop';

const RouteSwitch = () => {
	return (
		<BrowserRouter basename='/shopping-cart-app/'>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='shop' element={<ShopView />}>
                        <Route index element={<Shop />} />
                        <Route path=':product' element={<Product />} />
                    </Route>
                    <Route path='contact' element={<Contact />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='/404' element={<NotFound />} />
                    <Route path='*' element={<Navigate replace to='/404' />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;
