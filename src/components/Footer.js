import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Newsletter from './Newsletter';
import logo from '../assets/MyOnlineStore-logo/vector/default-monochrome-white.svg';

const Footer = (props) => {
    // TODO: newsletter, socials | contact info | payment options | copyright in footer

    return (
        <footer className='c-footer'>
            <Newsletter />
            <section className='o-wrap o-wrap--flex u-justify-space-between'>
                <div className='c-footer__socials'>
                    <img src={logo} alt='Company Logo' className='c-footer__logo' />
                    <div className='c-footer__socials__items'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
