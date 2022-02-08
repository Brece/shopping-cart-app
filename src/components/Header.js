import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to='/cart'>Iconxxx<span>Cart</span></Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
