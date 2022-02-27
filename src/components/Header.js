import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/MyOnlineStore-logo/vector/default-monochrome.svg';

const Header = () => {
    const [amount, setAmount] = useState(0);

    const handleState = () => {
        const cart = JSON.parse(localStorage.getItem('cart'));

        if (cart !== null) {
            let totalAmount = 0;
            cart.forEach(item => {
                totalAmount += item.amount;
            });
            setAmount(totalAmount);
        }
    }

    const handleHamburgerMenu = (e) => {
        e.currentTarget.classList.toggle('isActive');
        document.querySelector('.c-header__nav').classList.toggle('isActive');
    }

    const handleCloseHamburgerMenu = () => {
        document.querySelector('.c-header__hamburger').classList.remove('isActive');
        document.querySelector('.c-header__nav').classList.remove('isActive');
    }

    useEffect (() => {
        handleState();

        // FIXME: unfortunatly it only updates the amount in real time in other tabs of the store not in the current one
        window.addEventListener('storage', () => handleState());

        return () => window.removeEventListener('storage', () => handleState());
    },[]);

    return (
        <header className='c-header'>
            <div className='c-header__hamburger' onClick={handleHamburgerMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='o-wrap o-wrap--flex u-justify-space-between'>
                <div className='c-header__logo'>
                    <img src={logo} alt='Company Logo' />
                </div>
                <nav className='c-header__nav'>
                    <ul className='c-header__nav__list'>
                        <li>
                            <Link to='/' onClick={handleCloseHamburgerMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' onClick={handleCloseHamburgerMenu}>About</Link>
                        </li>
                        <li>
                            <Link to='/shop' onClick={handleCloseHamburgerMenu}>Shop</Link>
                        </li>
                        <li>
                            <Link to='/contact' onClick={handleCloseHamburgerMenu}>Contact</Link>
                        </li>
                        <li className='c-header__nav__list__cart'>
                            <Link to='/cart' onClick={handleCloseHamburgerMenu}>
                                <span>Cart</span>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <div className='c-header__nav__list__cart__amount'>{amount}</div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
