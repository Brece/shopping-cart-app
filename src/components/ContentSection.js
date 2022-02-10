import React from 'react';
import { Link } from 'react-router-dom';

const ContentSection = (props) => {
    const renderContentSections = () => {
        // differentiate dependent on property length how c-content__item should be displayed
        return (
            props.contentInfo.map((item) => {
                const paras = item.text.map( (para, index) => <p key={index}>{para}</p> );

                return (
                    <div className={`c-content__item${ props.contentInfo.length > 1 ? ' c-content__item--split' : '' }`} style={{ backgroundColor: item.backgroundColor }} key={item.id}>
                        <div className='c-content__item__img'>
                            <img src={item.url} alt='Event' />
                        </div>
                        <div className='c-content__item__info'>
                            <h2>{item.title}</h2>
                            {paras}
                            <Link to='/shop'>shop now</Link>
                        </div>
                    </div>
                );
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
