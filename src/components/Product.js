import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Product = () => {
    // FIXME: remove params when not needed
    // useParams hook to get current URL represented by path=":product"
    const { product } = useParams();
    
    // useLocation hook to get the passed down state from <Link /> property in ProductCard component to get the product information
    const location = useLocation();

    // stores product information in state
    const [state, setState] = useState(location.state);
    const [amount, setAmount] = useState(1);

    const handleIncreasingAmount = () => {
        setAmount(amount + 1);
    }

    const handleDecreasingAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    }

    const handleChange = (e) => {
        e.target.value = amount;
    }

    const handleAddToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        console.log(cart);

        if (cart !== null) {
            let itemIndex;
            const isIncluded = cart.find((item, index) => {
                if (item.id === state.id) {
                    itemIndex = index;
                    return true;
                }
                return false;
            });

            if (isIncluded) {
                cart[itemIndex].amount += amount;
            } else {
                cart.push({...state, amount});
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            return;
        }

        // initiliaze localstorage as an Array of objects when
        localStorage.setItem('cart', JSON.stringify([{...state, amount}]));
    }

    // FIXME: remove console.log
    console.log(location.state);

    return (
        <section className='o-wrap c-product'>
            <div className='c-product__info'>
                <div className='c-product__image'>
                    <img src={state.image} alt='Product' />
                </div>
                <div className='c-product__info__text'>
                    <h3 className='c-product__info__title'>{state.title}</h3>
                    <p className='c-product__info__price'>{state.price}€</p>
                    <p className='c-product__info__teaser'>{state.description}</p>
                    <div className='c-product__info__text__icons'>
                        <p>icons for delivery & services xxx</p>
                    </div>
                    <p className='c-product__info__text__rating'>{state.rating.rate} ({state.rating.count})</p>
                    <div className='c-product__info__text__cart'>
                        <div className='c-product__info__text__cart__amount' onClick={handleDecreasingAmount}>-</div>
                        <input type='text' value={amount} placeholder='1' onChange={handleChange} />
                        <div className='c-product__info__text__cart__amount' onClick={handleIncreasingAmount}>+</div>
                        <button type='button' className='c-btn c-product__info__text__cart__btn' onClick={handleAddToCart}>add to cart</button>
                    </div>
                    <p className='c-product__info__text__category'>{state.category}</p>
                </div>
            </div>
            <div className='c-product__description'>
                <p>{state.description}</p>
            </div>
        </section>
    );
}

export default Product;
