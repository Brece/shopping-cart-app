import React from "react";
import { Link } from "react-router-dom";

const HeroSection = (props) => {
    // TODO: click event handler for hero carousel, maybe setTimeout for automatic scrolling

    const renderHeroSections = () => {
        return (
            props.heroInfo.map((item) => {
                return (
                    <div style={{ backgroundImage: `url(${item.url})` }} key={item.id}>
                        <p>{item.teaser}</p>
                        <h1>{item.title}</h1>
                        <Link to='/shop'>shop now</Link>
                    </div>
                );
            })
        );
    }

    return (
        <div className="c-hero">
            {renderHeroSections()}
            <div>left arrow</div>
            <div>right arrow</div>
        </div>
    );
}

export default HeroSection;
