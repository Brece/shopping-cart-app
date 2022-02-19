import React, { useEffect } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';

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
            return ( index === 0
                ? <NavLink
                    to={''}
                    key={index} >
                    {path}
                </NavLink>

                : <NavLink
                    to={`${path}`}
                    style={ ({isActive}) => {
                        return { backgroundColor: isActive ? 'red' : '' } 
                    }}
                    key={index} >
                    {path}
                </NavLink>
            );
        });
    }

    useEffect(() => {
        // FIXME: remove console.log
        console.log(location);
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
