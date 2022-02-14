import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
    const navigate = useNavigate();
    return (
        <div className='c-productCard' onClick={() => navigate(`/shop/${props.product.title}`)}>
            <div className='c-productCard__img'>
                <img src={props.product.image} alt={props.product.title} />
            </div>
            <div className='c-productCard__info'>
                <p className='c-productCard__info__title'>{props.product.title}</p>
                <p className='c-productCard__info__price'>{props.product.price}€</p>
                <p>Rating: {props.product.rating.rate} Stars ({props.product.rating.count})</p>
            </div>
        </div>

    );
}

export default ProductCard;
