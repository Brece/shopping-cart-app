import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
	const handleStickyBtn = () => {
		const scrollToTopBtn = document.querySelector('.c-btn-top');
		let scrollTotal = window.scrollY;

		if (scrollTotal > 200) {
			scrollToTopBtn.classList.add('is-active');
		} else {
			scrollToTopBtn.classList.remove('is-active');
		}
	}

	const handleScrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	useEffect(() => {
		window.addEventListener('scroll', handleStickyBtn);
		return () => window.removeEventListener('scroll', handleStickyBtn);
	}, []);

	return (
		<div className='c-layout'>
			<Header />
			<Outlet />
			<Footer />
			<div className='c-btn-top' onClick={handleScrollToTop}>
				<FontAwesomeIcon icon={faChevronUp} />
			</div>
		</div>
	);
}

export default Layout;
