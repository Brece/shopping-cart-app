import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/MyOnlineStore-logo/vector/default-monochrome.svg';

const Header = (props) => {
    return (
        <header className='c-header'>
            <div>
                <img src={logo} alt='Company Logo' />
                <h2>MyOnlineStore</h2>
            </div>
            <nav>
                <ul>
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
                    <li>
                        <Link to='/cart'>
                            <span>Cart</span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
