import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Product = () => {
    // useParams hook to get current URL represented by path=":product"
    const { product } = useParams();

    // useLocation hook to get the passed down state from <Link /> property in ProductCard component to get the product information
    const location = useLocation();

    // FIXME: remove console.log
    console.log(location.state);

    return (
        <section className='c-product'>
            <p>{location.state.title}</p>
            <p>{location.state.description}</p>
            <p>{location.state.price}</p>
            <p>{location.state.image}</p>
            <p>{location.state.rating.rate}</p>
        </section>
    );
}

export default Product;
