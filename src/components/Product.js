import React from 'react';
import { useParams } from 'react-router-dom';

const Product = (props) => {
    const params = useParams();

    // FIXME: remove console.log
    console.log(props);

    return (
        <section className='c-product'>
            product xxx
        </section>
    );
}

export default Product;
