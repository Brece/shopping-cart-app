import React, { useState } from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faEnvelopeOpen, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from './Breadcrumb';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        id: uniqid()
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        //Imitates confirmation message, form clearing and send form to CMS/server
        alert('Thank You for contacting Us. We will get back at you as soon as possible.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            id: uniqid()
        });
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleValidPhoneNumber = (e) => {
        const value = e.target.value;
        // if non-digit found show error message
        if (/\D/.test(value)) {
            e.target.nextSibling.classList.add('is-invalid');
            return;
        }
        e.target.nextSibling.classList.remove('is-invalid');
    }

    return (
        <section className='c-contact'>
            <Breadcrumb />
            <div className='o-wrap u-margin-bottom'>
                <div className='u-offset c-contact__info'>
                    <div className='c-contact__info__item'>
                        <div className='c-contact__info__item__icon'>
                            <FontAwesomeIcon icon={faMapLocationDot} />
                        </div>
                        <h3>Address</h3>
                        <p>123 Street, Old Trafford, London, UK</p>
                    </div>
                    <div className='c-contact__info__item'>
                        <div className='c-contact__info__item__icon'>
                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                        </div>
                        <h3>Email Address</h3>
                        <p>info@yourmail.com</p>
                    </div>
                    <div className='c-contact__info__item'>
                        <div className='c-contact__info__item__icon'>
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </div>
                        <h3>Phone</h3>
                        <p>+ 457 789 789 65</p>
                    </div>
                </div>
            </div>
            <div className='u-padding'>
                <div className='o-wrap c-contact__form'>
                    <form onSubmit={handleSubmit} className='c-contact__form__content'>
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                        <div className='c-contact__form__content__input'>
                            <div className='c-contact__form__content__input__group'>
                                <label forhtml='name'>Name*:</label>
                                <input type='text' id='name' name='name' placeholder='Enter Your Name' value={formData.name} required onChange={handleChange} />
                            </div>
                            <div className='c-contact__form__content__input__group'>
                                <label forhtml='email'>Email*:</label>
                                <input type='email' id='email' name='email' placeholder='your@email.com' value={formData.email} required onChange={handleChange} />
                            </div>
                            <div className='c-contact__form__content__input__group'>
                                <label forhtml='phone'>Phone Number*:</label>
                                <input type='text' id='phone' name='phone' placeholder='12345567890' value={formData.phone} required onChange={handleChange} onKeyUp={handleValidPhoneNumber} />
                                <small className='c-contact__form__content__input__group__error'>Please enter only numbers and no spaces.</small>
                            </div>
                            <div className='c-contact__form__content__input__group'>
                                <label forhtml='subject'>Subject*:</label>
                                <input type='text' id='subject' name='subject' placeholder='Enter Subject' value={formData.subject} required onChange={handleChange} />
                            </div>
                            <div className='c-contact__form__content__input__group'>
                                <label forhtml='message'>Message*:</label>
                                <textarea id='message' name='message' placeholder='Enter Your Message' value={formData.message} rows='8' required onChange={handleChange} />
                            </div>
                            <button type='submit' className='c-btn c-btn--form'>Send Message</button>
                        </div>
                    </form>
                    <div className='c-contact__form__map'>
                        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21653.97771762783!2d8.654535835554224!3d50.120653476817715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0eac7a19bf27%3A0xe9432f6e53bd0bdf!2sMAIN%20TOWER!5e0!3m2!1sen!2sde!4v1644497027836!5m2!1sen!2sde' title='Company Location' allowFullScreen='' loading='lazy' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
