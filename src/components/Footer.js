import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMobile, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Newsletter from './Newsletter';
import logo from '../assets/MyOnlineStore-logo/vector/default-monochrome-white.svg';
import visa from '../assets/payment/visa.png';
import paypal from '../assets/payment/paypal.png';

const Footer = (props) => {
    // TODO: newsletter, socials | contact info | payment options | copyright in footer

    return (
        <footer className='c-footer'>
            <Newsletter />
            <section className='o-wrap o-wrap--flex u-justify-space-between'>
                <div className='c-footer__socials'>
                    <img src={logo} alt='Company Logo' className='c-footer__logo' />
                    <div className='c-footer__socials__items'>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>
                <div className='c-footer__contact'>
                    <h4>Contact Info</h4>
                    <div className='c-footer__contact__item'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p>123 Street, Old Trafford, New South London , UK</p>
                    </div>
                    <div className='c-footer__contact__item'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>info@sitename.com</p>
                    </div>
                    <div className='c-footer__contact__item'>
                        <FontAwesomeIcon icon={faMobile} />
                        <p>+ 457 789 789 65</p>
                    </div>
                </div>
            </section>
            <section className='c-footer__payment'>
                <div className='o-wrap o-wrap--flex u-justify-space-between'>
                    <p>&copy; 2022 Designed and built by Nui Ruppert</p>
                    <div className='c-footer__payment__options'>
                        <img src={visa} alt='Payment Option Visa' />
                        <img src={paypal} alt='Payment Option Paypal' />
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
