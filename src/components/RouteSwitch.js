import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import About from './About';
import ShopView from './ShopView';
import Shop from './Shop';
import Product from './Product';
import Home from './Home';
import Contact from './Contact';
import Cart from './Cart';
import NotFound from './NotFound';

const RouteSwitch = () => {
	return (
		<BrowserRouter>
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
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;
