import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Product = (props) => {
    const params = useParams();
    const location = useLocation();
    console.log(params, location);
    return (
        <section className='c-product'>
            product xxx
        </section>
    );
}

export default Product;
