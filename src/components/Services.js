import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faHandHoldingDollar, faHeadset } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="c-services">
            <div>
                <div>
                    <FontAwesomeIcon icon={faTruck} />
                </div>
                <h3>Free Delivery</h3>
                <p>If you are going to use of Lorem, you need to be sure there anything</p>
            </div>
            <div>
                <div>
                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                </div>
                <h3>30 Day Return</h3>
                <p>If you are going Lorem, you need to be sure there anything</p>
            </div>
            <div>
                <div>
                    <FontAwesomeIcon icon={faHeadset} />
                </div>
                <h3>27/4 Support</h3>
                <p>If you are going to use of Lorem, you need to be sure there anything use of Lorem, you need </p>
            </div>
        </div>
    );
}

export default Services;
