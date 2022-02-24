import React, { useState, useEffect } from 'react';
import Breadcrumb from './Breadcrumb';

const Cart = () => {
    const [cart, setCart] = useState([]);

    const updateLocalStorage = () => {
        // TODO: possible argument to counter async state update
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const loadCart = () => {
        const shoppingCart = localStorage.getItem('cart');
        if (shoppingCart) {
            setCart(JSON.parse(shoppingCart));

            console.log(JSON.parse(shoppingCart));
        }
    }

    const handleDelete = (e) => {

    }

    const handleIncreasingAmount = (e) => {
        // search cart for item.id to increase/decrease amount
        // update cart and localstorage at the same time
        // dataset.id either on each button or once on parent container, dependent on html structure
        console.log(e.target.dataset.id);
    }

    const handleDecreasingAmount = (e) => {

    }

    const renderCartItems = () => {
        return (
            cart.map((item) => {
                return (
                    <div className='c-cart__content__item' key={item.id}>
                        <div className='c-cart__content__item__image'>
                            <img src={item.image} alt='Product' />
                        </div>
                        <h3 className='c-cart__content__item__title'>{item.title}</h3>
                        <p className='c-cart__content__item__price'>{item.price}€</p>
                        <div className='c-btn' data-id={item.id} onClick={handleDecreasingAmount} >-</div>
                        <p className='c-cart__content__item__amount'>{item.amount}</p>
                        <div className='c-btn' data-id={item.id} onClick={handleIncreasingAmount}>+</div>
                        <p className='c-cart__content__item__total'>Total: {item.price * item.amount}€</p>
                        <button className='c-btn' onClick={handleDelete} >delete item</button>
                    </div>
                );
            })
        );
    }

    useEffect (() => {
        loadCart();
    }, []);

    return (
        <section className='c-cart'>
            <Breadcrumb />
            <div className='o-wrap c-cart__content'>
                {renderCartItems()}
            </div>
        </section>
    );
}

export default Cart;
