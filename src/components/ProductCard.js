import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    // pass down product information as "state" in <Link />
    return (
        <div className='c-productCard'>
            <Link to={`${props.product.title}`} state={props.product}>
                <div className='c-productCard__img'>
                    <img src={props.product.image} alt={props.product.title} />
                </div>
                <div className='c-productCard__info'>
                    <p className='c-productCard__info__title'>{props.product.title}</p>
                    <p className='c-productCard__info__price'>{props.product.price.toFixed(2)}€</p>
                    <p>Rating: {props.product.rating.rate} Stars ({props.product.rating.count})</p>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
