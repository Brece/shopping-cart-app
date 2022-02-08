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
            <div className='o-wrap o-wrap--flex u-justify-space-between'>
                <h2>Subscribe Our Newsletter</h2>
                <form onSubmit={handleSubmit} className='c-newsletter__form'>
                    <input type='email' placeholder='Enter Email Address' required />
                    <button type='submit' className='c-btn c-btn--subscribe'>subscribe</button>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;
