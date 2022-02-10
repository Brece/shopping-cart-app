import React from 'react';
import { Link } from 'react-router-dom';

const ContentSection = (props) => {
    const renderContentSections = () => {
        return (
            props.eventInfo.map((item) => {
                return (
                    <div className='c-content__item' style={{ backgroundColor: item.backgroundColor }} key={item.id}>
                        <div className='c-content__item__img'>
                            <img src={item.url} alt='Event' />
                        </div>
                        <div className='c-content__item__info'>
                            <h2>{item.title}</h2>
                            <p>{item.teaser}</p>
                            <Link to='/shop'>shop now</Link>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div className='o-wrap c-content'>
            <div className='o-wrap--flex u-offset'>
                {renderContentSections()}
            </div>
        </div>
    );
}

export default ContentSection;
