import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='o-wrap o-wrap--flex u-margin-bottom c-notFound'>
            <h2>404</h2>
            <p><span>ooops! The page you requested was not found.</span></p>
            <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
            <div className='c-btn'>
                <Link to='/'>Back to homepage</Link>
            </div>
        </section>
    );
}

export default NotFound;
