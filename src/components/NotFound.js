import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='o-wrap o-wrap--flex c-notFound'>
            <h2>404</h2>
            <p>ooops! The page you requested was not found.</p>
            <div className='c-btn'>
                <Link to='/'>Back to homepage</Link>
            </div>
        </div>
    );
}

export default NotFound;
