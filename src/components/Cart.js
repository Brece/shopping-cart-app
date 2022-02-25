import React, { useState, useEffect } from 'react';
import Breadcrumb from './Breadcrumb';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const updateLocalStorage = (newCart) => {
        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    const loadCart = () => {
        const shoppingCart = localStorage.getItem('cart');
        if (shoppingCart) {
            setCart(JSON.parse(shoppingCart));

            console.log(JSON.parse(shoppingCart));
        }
    }

    const handleDelete = (e) => {
        const itemId = Number(e.target.parentElement.dataset.id);
        const updatedCart = cart.filter((item) => item.id !== itemId);

        setCart(updatedCart);
        updateLocalStorage(updatedCart);
    }

    const handleAmount = (e) => {
        const itemId = Number(e.target.parentElement.parentElement.dataset.id);
        const operator = e.target.dataset.operator;
        const updatedCart = [];

        cart.forEach((item) => {
            if (item.id !== itemId) {
                updatedCart.push({...item});
            }
        });

        if (operator === 'decrease') {
            cart.forEach((item, index) => {
                if (item.id === itemId) {
                    if (item.amount > 1) {
                        updatedCart.splice(index, 0, {...item, amount: item.amount - 1})
                    } else {
                        updatedCart.splice(index, 0, {...item})
                    }
                }
            });
        } else {
            cart.forEach((item, index) => {
                if (item.id === itemId) {
                    updatedCart.splice(index, 0, {...item, amount: item.amount + 1});
                }
            });
        }

        setCart(updatedCart);
    }

    // TODO: create function for Total update
    const handleTotal = () => {
        let newTotal = 0;
        cart.forEach((item) => {
            newTotal += item.amount * item.price;
        });
        setTotal(newTotal);
    }

    const handleCheckout = (e) => {
        e.preventDefault();
        alert('As of now there is no backend connected for this project.');
    }

    const renderCartItems = () => {
        return (
            cart.map((item) => {
                return (
                    <div className='c-cart__content__item' data-id={item.id} key={item.id}>
                        <div className='c-cart__content__item__image'>
                            <img src={item.image} alt='Product' />
                        </div>
                        <h3 className='c-cart__content__item__title'>{item.title}</h3>
                        <div className='c-cart__content__item__amount'>
                            <div className='c-btn' data-operator='decrease' onClick={handleAmount} >-</div>
                            <p>{item.amount}</p>
                            <div className='c-btn' data-operator='increase' onClick={handleAmount}>+</div>
                        </div>
                        <p className='c-cart__content__item__price'>{item.price}€</p>
                        <p className='c-cart__content__item__total'>Subtotal: {item.price * item.amount}€</p>
                        <button className='c-btn' onClick={handleDelete}>delete item</button>
                    </div>
                );
            })
        );
    }

    useEffect (() => {
        loadCart();
        handleTotal();
    }, []);

    return (
        <section className='c-cart'>
            <Breadcrumb />
            <div className='o-wrap c-cart__content'>
                <div className='c-cart__content__header'>
                    <h3>product</h3>
                    <h3>quantity</h3>
                    <h3>price</h3>
                    <h3>subtotal</h3>
                </div>
                {renderCartItems()}
                <div className='c-cart__content__total'>
                    <h3>total</h3>
                    <p>{total}</p>
                </div>
                <div className='c-cart__content__options'>
                    <button className='c-btn' type='button'>
                        <Link to='/shop'>
                            back to shopping
                        </Link>
                    </button>
                    <button className='c-btn' type='button' onClick={handleTotal} >recalculate</button>
                    <button className='c-btn' type='button' onClick={handleCheckout} >proceed</button>
                </div>
            </div>
        </section>
    );
}

export default Cart;
