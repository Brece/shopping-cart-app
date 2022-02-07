import React from 'react';

const Newsletter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!')
        // clear input field
        e.target[0].value = '';
    }

    return (
        <section className='c-newsletter'>
            <h2>Subscribe Our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Enter Email Address' required />
                <button type='submit'>subscribe</button>
            </form>
        </section>
    );
}

export default Newsletter;
