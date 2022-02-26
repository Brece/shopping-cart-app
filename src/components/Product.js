import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield, faArrowsRotate, faCircleDollarToSlot, faStar } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
    // useLocation hook to get the passed down state from <Link /> property in ProductCard component to get the product information
    const location = useLocation();

    // stores product information in state
    const [state, setState] = useState(location.state);
    const [amount, setAmount] = useState(1);
    const [tabDisplayed, setTabDisplayed] = useState('description');

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

            // notification popup
            togglePopupMessage();
            return;
        }

        // initiliaze localstorage as an Array of objects when cart doesn't exist
        localStorage.setItem('cart', JSON.stringify([{...state, amount}]));
    }

    const togglePopupMessage = () => {
        const popup = document.querySelector('.c-product__info__text__cart__popup');
        popup.classList.add('isActive');
        setTimeout(() => {
            popup.classList.remove('isActive');
        }, 2500);
    }

    const handleCapitalizedDescription = () => {
        const description = state.description;
        const firstLetter = description[0].toUpperCase();
        const newDescription = firstLetter + description.slice(1);
        setState({...state, description: newDescription});
    }

    const handleTabDisplayed = (val) => {
        setTabDisplayed(val);
    }

    useEffect(() => {
        handleCapitalizedDescription();
    }, []);

    return (
        <section className='o-wrap c-product'>
            <div className='c-product__info'>
                <div className='c-product__image'>
                    <img src={state.image} alt='Product' />
                </div>
                <div className='c-product__info__text'>
                    <h3 className='c-product__info__title'>{state.title}</h3>
                    <p className='c-product__info__price'>{state.price.toFixed(2)}€</p>
                    <p className='c-product__info__teaser'>{state.description}</p>
                    <ul className='c-product__info__text__icons'>
                        <li>
                            <FontAwesomeIcon icon={faShield} />
                            <p>1 Year MyOnlineStore Warranty</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowsRotate} />
                            <p>30 Day Return Policy</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleDollarToSlot} />
                            <p>Cash on Delivery available</p>
                        </li>
                    </ul>
                    <div className='c-product__info__text__rating'>
                        <div className='c-product__info__text__rating__stars' style={{'--rating': state.rating.rate}} />
                        <span>{state.rating.rate} ({state.rating.count})</span>
                    </div>
                    <div className='c-product__info__text__cart'>
                        <div className='c-product__info__text__cart__amount' onClick={handleDecreasingAmount}>-</div>
                        <input type='text' value={amount} placeholder='1' onChange={handleChange} />
                        <div className='c-product__info__text__cart__amount' onClick={handleIncreasingAmount}>+</div>
                        <button type='button' className='c-btn c-product__info__text__cart__btn' onClick={handleAddToCart}>add to cart</button>
                        <div className='c-product__info__text__cart__popup'>
                            <p>Item has been added to Your shopping cart.</p>
                        </div>
                    </div>
                    <p className='c-product__info__text__category'>Category: {state.category}</p>
                </div>
            </div>
            <ProductTabs
                description={state.description}
                handleTabDisplayed={handleTabDisplayed}
                tabDisplayed={tabDisplayed} 
            />
        </section>
    );
}

const ReviewForm = () => {
    const [stars, setStars] = useState(1);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank You for your review.');
    }

    const handleStarRating = (e) => {
        const rating = e.target.dataset.rating;
        document.querySelectorAll('.c-product__tabs__form__rating__star').forEach((item, index) => {
            if (index < rating) {
                item.classList.add('isActive');
                return;
            }

            item.classList.remove('isActive');
        });

        setStars(rating);
    }

    return (
        <form className='c-product__tabs__form' onSubmit={ (e) => handleSubmit(e) }>
            <h4>Add a review</h4>
            <div className='c-product__tabs__form__rating'>
                <label htmlFor='rating-1' className='c-product__tabs__form__rating__star isActive'>
                    <FontAwesomeIcon icon={faStar} />
                </label>
                <input type='radio' name='rating' id='rating-1' data-rating='1' onClick={handleStarRating} selected />
                <label htmlFor='rating-2' className='c-product__tabs__form__rating__star'>
                    <FontAwesomeIcon icon={faStar} />
                </label>
                <input type='radio' name='rating' id='rating-2' data-rating='2' onClick={handleStarRating} />
                <label htmlFor='rating-3' className='c-product__tabs__form__rating__star'>
                    <FontAwesomeIcon icon={faStar} />
                </label>
                <input type='radio' name='rating' id='rating-3' data-rating='3' onClick={handleStarRating} />
                <label htmlFor='rating-4' className='c-product__tabs__form__rating__star'>
                    <FontAwesomeIcon icon={faStar} />
                </label>
                <input type='radio' name='rating' id='rating-4' data-rating='4' onClick={handleStarRating} />
                <label htmlFor='rating-5' className='c-product__tabs__form__rating__star'>
                    <FontAwesomeIcon icon={faStar} />
                </label>
                <input type='radio' name='rating' id='rating-5' data-rating='5' onClick={handleStarRating} />
            </div>
            <textarea rows='5' placeholder='Your review *' required />
            <input type='text' placeholder='Enter Name *' required />
            <input type='email' placeholder='Enter Email *' required />
            <button type='submit' className='c-btn'>Submit Review</button>
        </form>
    )
}

const ProductTabs = (props) => {
    const Description = () => {
        return (
            <p>{props.description}</p>
        );
    }

    const handleClick = (e) => {
        // change active tab
        const tab = e.target.dataset.tab;
        props.handleTabDisplayed(tab);

        // toggle highlighted active tab
        document.querySelectorAll('.c-product__tabs__list__item').forEach((item) => {
            if (item.dataset.tab === tab) {
                item.classList.add('isActive');
                return;
            }
            item.classList.remove('isActive');
        });
    }

    return (
        <div className='c-product__tabs'>
            <ul className='c-product__tabs__list'>
                <li className='c-product__tabs__list__item isActive' onClick={handleClick} data-tab='description'>description</li>
                <li className='c-product__tabs__list__item' onClick={handleClick} data-tab='review'>reviews</li>
            </ul>
            { props.tabDisplayed === 'review' ? <ReviewForm /> : <Description />}
        </div>
    );
}

export default Product;
