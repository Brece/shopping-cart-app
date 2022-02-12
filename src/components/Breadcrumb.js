import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();

    // TODO:
    // Link to the right url
    // last path location is not a link
    // connect locations with css style ">"
    const renderPath = () => {
        const paths = location.pathname.split('/');
        return paths.map((item, index) => {
            return (
                <Link to={location.pathname} key={index}>
                    {item}
                </Link>
            );
        });
    }

    useEffect(() => {
        // console.log(location);
    });

    return (
        <section className='u-margin-bottom u-padding c-breadcrumb'>
            <div className='o-wrap'>
                <div>{renderPath()}</div>
            </div>
        </section>
    );
}

export default Breadcrumb;