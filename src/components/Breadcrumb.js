import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
    const [page, setPage] = useState();
    const location = useLocation();

    const renderPath = () => {
        let paths = location.pathname
        .split('/')
        .filter((x) => x)
        .map((x) => x.replaceAll('%20', ' '));
        
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
                    key={index} >
                    {path}
                </Link>
            );
        });
    }

    useEffect(() => {
        // set page when mounted to render the page title
        let paths = location.pathname
        .split('/')
        .filter((x) => x);

        setPage(paths[0]);
    }, []);

    return (
        <section className='u-margin-bottom u-margin-top c-breadcrumb'>
            <div className='o-wrap'>
                <h1 className='c-breadcrumb__title'>{page}</h1>
                <div>{renderPath()}</div>
            </div>
        </section>
    );
}

export default Breadcrumb;
