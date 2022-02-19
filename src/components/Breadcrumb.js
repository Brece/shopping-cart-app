import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();

    // TODO:
    // Link to the right url (first path link to "/")
    // last path location is not a link, is highlighted as active
    // connect locations with css style ">"
    const renderPath = () => {
        let paths = location.pathname
            .split('/')
            .filter((x) => x);
        
        return paths.map((path, index) => {
            if (index === paths.length - 1) {
                return (
                    <p className='c-breadcrumb__item c-breadcrumb__item--last' key={index} >
                        {path}
                    </p>
                );
            }

            if (index === 0) {
                return (
                    <Link
                    className='c-breadcrumb__item'
                    to={''}
                    key={index} >
                        {path}
                    </Link>
                );
            }

            return (
                <Link
                    className='c-breadcrumb__item'
                    to={`${path}`}
                    style={ ({isActive}) => {
                        return { backgroundColor: isActive ? 'red' : '' } 
                    }}
                    key={index} >
                    {path}
                </Link>
            );
        });
    }

    useEffect(() => {
        // FIXME: remove console.log
        console.log(location);
    });

    return (
        <section className='u-margin-bottom c-breadcrumb'>
            <div className='o-wrap'>
                <div>{renderPath()}</div>
            </div>
        </section>
    );
}

export default Breadcrumb;
