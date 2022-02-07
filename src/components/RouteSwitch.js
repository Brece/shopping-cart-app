import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import Contact from './Contact';
import Cart from './Cart';
import NotFound from './NotFound';
// import Header from './Header';
// import Footer from './Footer';
// import Newsletter from './Newsletter';

const RouteSwitch = () => {
	return (
		<BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='shop' element={<Shop />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;
