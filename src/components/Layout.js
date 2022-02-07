import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
	// TODO: to-top button for each site
	return (
		<div className='c-layout'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
