import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
	return (
		<div className='c-layout'>
			<Header />
			<Outlet />
			<Footer />
			<div>
				<FontAwesomeIcon icon={faChevronUp} />
			</div>
		</div>
	);
}

export default Layout;
