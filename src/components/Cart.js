import React, { useState, useEffect } from 'react';
import Breadcrumb from './Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
            handleTotal(JSON.parse(shoppingCart));
        }
    }

    const handleTotal = (updatedCart) => {
        let newTotal = 0;
        updatedCart.forEach((item) => {
            newTotal += item.amount * item.price;
        });
        setTotal(newTotal.toFixed(2));
    }

    const handleDelete = (e) => {
        const itemId = Number(e.currentTarget.parentElement.dataset.id);
        const updatedCart = cart.filter((item) => item.id !== itemId);

        setCart(updatedCart);
        updateLocalStorage(updatedCart);
        handleTotal(updatedCart);
    }

    const handleAmount = (e) => {
        const itemId = Number(e.currentTarget.parentElement.parentElement.dataset.id);
        const operator = e.currentTarget.dataset.operator;
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
        updateLocalStorage(updatedCart);
        handleTotal(updatedCart);
    }

    const handleCheckout = (e) => {
        e.preventDefault();
        alert('As of now there is no backend connected for this project.');
    }

    // FIXME: link to product view with product info as property
    const renderCartItems = () => {
        return (
            cart.map((item) => {
                return (
                    <CartItem item={item} handleAmount={handleAmount} handleDelete={handleDelete} key={item.id} />
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
                <div className='c-cart__content__header'>
                    <h3>product</h3>
                    <h3>quantity</h3>
                    <h3>price</h3>
                    <h3>subtotal</h3>
                </div>
                {renderCartItems()}
                <div className='c-cart__content__total'>
                    <p>total</p>
                    <p>{total}€</p>
                </div>
                <div className='c-cart__content__options'>
                    <button className='c-btn' type='button'>
                        <Link to='/shop'>
                            back to shopping
                        </Link>
                    </button>
                    <button className='c-btn' type='button' onClick={handleCheckout} >
                        <Link to=''>
                            proceed
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
}

const CartItem = (props) => {
    // useNavigate gets the same results as <Link/>
    // '/shop/...' is an absolute path while 'shop/...' isn't !!!
    /*
    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/shop/${props.item.title}`, { state: props.item });
    }
    */

    return (
        <div className='c-cart__content__item' data-id={props.item.id}>
            <div className='c-cart__content__item__image'>
                <Link to={`/shop/${props.item.title}`} state={props.item}>
                    <img src={props.item.image} alt='Product' />
                </Link>
            </div>
            <h3 className='c-cart__content__item__title'>
                <Link to={`/shop/${props.item.title}`} state={props.item}>
                    {props.item.title}
                </Link>
            </h3>
            <div className='c-cart__content__item__amount'>
                <div data-operator='decrease' onClick={props.handleAmount} >-</div>
                <p>{props.item.amount}</p>
                <div data-operator='increase' onClick={props.handleAmount}>+</div>
            </div>
            <p className='c-cart__content__item__price'>{props.item.price.toFixed(2)}€</p>
            <p className='c-cart__content__item__total'>{(props.item.price * props.item.amount).toFixed(2)}€</p>
            <div className='c-cart__content__item__delete' onClick={props.handleDelete}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>
    )
}

export default Cart;
