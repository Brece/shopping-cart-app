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

    useEffect (() => {
        handleState();

        // FIXME: unfortunatly it only updates the amount in real time in other tabs of the store not in the current one
        window.addEventListener('storage', () => handleState());

        return () => window.removeEventListener('storage', () => handleState());
    },[]);

    return (
        <header className='c-header'>
            <div className='o-wrap o-wrap--flex u-justify-space-between'>
                <div className='c-header__logo'>
                    <img src={logo} alt='Company Logo' />
                </div>
                <nav className='c-header__nav'>
                    <ul className='c-header__nav__list'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/shop'>Shop</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li className='c-header__nav__list__cart'>
                            <Link to='/cart'>
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
