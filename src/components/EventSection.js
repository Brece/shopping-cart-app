import React from "react";
import { Link } from "react-router-dom";

const EventSection = (props) => {
    const renderEventSections = () => {
        return (
            props.eventInfo.map((item) => {
                return (
                    <div key={item.id}>
                        <div>
                            <img src={item.url} alt='Event' />
                        </div>
                        <div>
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
        <div className="c-event">
            {renderEventSections()}
        </div>
    );
}

export default EventSection;
