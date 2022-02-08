import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = (props) => {
    // TODO: click event handler for hero carousel, maybe setTimeout for automatic scrolling

    const renderHeroSections = () => {
        return (
            props.heroInfo.map((item) => {
                return (
                    <div style={{ backgroundImage: `url(${item.url})` }} key={item.id}>
                        <p>{item.teaser}</p>
                        <h1>{item.title}</h1>
                        <div className='c-btn'>
                            <Link to='/shop'>shop now</Link>
                        </div>
                    </div>
                );
            })
        );
    }

    return (
        <div className='c-hero'>
            {renderHeroSections()}
            <div>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
}

export default HeroSection;
