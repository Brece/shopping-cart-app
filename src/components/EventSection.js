import React from 'react';
import { Link } from 'react-router-dom';

const EventSection = (props) => {
    const renderEventSections = () => {
        return (
            props.eventInfo.map((item) => {
                return (
                    <div className='c-event__item' style={{ backgroundColor: item.backgroundColor }} key={item.id}>
                        <div className='c-event__item__img'>
                            <img src={item.url} alt='Event' />
                        </div>
                        <div className='c-event__item__info'>
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
        <div className='o-wrap c-event'>
            <div className='o-wrap--flex u-offset'>
                {renderEventSections()}
            </div>
        </div>
    );
}

export default EventSection;
