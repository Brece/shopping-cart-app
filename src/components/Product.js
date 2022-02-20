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
        <section className='o-wrap c-product'>
            <div>
                <div>
                    <img src={location.state.image} alt='Product' />
                </div>
                <div>
                    <h3>{location.state.title}</h3>
                    <p>icons for delivery & services xxx</p>
                    <p>{location.state.price}</p>
                    <p>{location.state.rating.rate}</p>
                </div>
            </div>
            <div>
                <p>{location.state.description}</p>
            </div>
        </section>
    );
}

export default Product;
