import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = (props) => {
    const [index, setIndex] = useState(0);

    const handleResetSliderOpacity = (slides) => {
        slides.forEach((element) => {
            element.style.opacity = 0;
            element.style.zIndex = 0;
        });
    }

    const handleNextSlide = (slides) => {
        handleResetSliderOpacity(slides);

        let nextSlideIndex = index + 1;

        if (nextSlideIndex === slides.length) {
            nextSlideIndex = 0;
        }

        slides[nextSlideIndex].style.opacity = 1;
        slides[nextSlideIndex].style.zIndex = 1;
        setIndex(nextSlideIndex);
    }

    const handlePrevSlide = (slides) => {
        handleResetSliderOpacity(slides);

        let nextSlideIndex = index - 1;

        if (nextSlideIndex < 0) {
            nextSlideIndex = slides.length - 1;
        }

        slides[nextSlideIndex].style.opacity = 1;
        slides[nextSlideIndex].style.zIndex = 1;
        setIndex(nextSlideIndex);
    }

    const renderHeroSections = () => {
        return (
            props.heroInfo.map((item) => {
                return (
                    <div className='c-hero__slider__banner' style={{ backgroundImage: `url(${item.url})` }} key={item.id}>
                        <div className='o-wrap'>
                            <div className='c-hero__slider__banner__content'>
                                <p>{item.teaser}</p>
                                <h1>{item.title}</h1>
                                <div className='c-btn'>
                                    <Link to='/shop'>shop now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        );
    }

    useEffect(() => {
        const slides = document.querySelectorAll('.c-hero__slider__banner');
        const prevBtn = document.querySelector('.c-hero__arrow--left');
        const nextBtn = document.querySelector('.c-hero__arrow--right');

        prevBtn.addEventListener('click', () => handlePrevSlide(slides));
        nextBtn.addEventListener('click', () => handleNextSlide(slides));

        const slideShow = setInterval(() => {
            handleNextSlide(slides);
        }, 5000);

        return () => {
            prevBtn.removeEventListener('click', () => handlePrevSlide(slides));
            nextBtn.removeEventListener('click', () => handleNextSlide(slides));
            clearInterval(slideShow);
        }
    });

    return (
        <section className='u-margin-bottom u-margin-top c-hero'>
            <div className='c-hero__slider'>
                {renderHeroSections()}
            </div>
            <div className='c-hero__arrow c-hero__arrow--left'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className='c-hero__arrow c-hero__arrow--right'>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </section>
    );
}

export default HeroSection;
