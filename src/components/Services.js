import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHandHoldingDollar, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className='o-wrap c-services'>
            <div className='o-wrap--flex u-offset'>
                <div className='c-services__item'>
                    <div className='c-services__item__icon'>
                        <FontAwesomeIcon icon={faTruck} />
                    </div>
                    <h3>Free Delivery</h3>
                    <p>If you are going to use of Lorem, you need to be sure there anything</p>
                </div>
                <div className='c-services__item'>
                    <div className='c-services__item__icon'>
                        <FontAwesomeIcon icon={faHandHoldingDollar} />
                    </div>
                    <h3>30 Day Return</h3>
                    <p>If you are going Lorem, you need to be sure there anything</p>
                </div>
                <div className='c-services__item'>
                    <div className='c-services__item__icon'>
                        <FontAwesomeIcon icon={faHeadset} />
                    </div>
                    <h3>27/4 Support</h3>
                    <p>If you are going to use of Lorem, you need to be sure there anything use of Lorem, you need </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
