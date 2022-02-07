import React, { useState } from "react";
import { heroInfoArray, eventInfoArray } from "../helpers/DataHelper";
import HeroSection from "./HeroSection";
import EventSection from "./EventSection";
import Services from "./Services";

// state for hero image slider, and maybe for customer reviews
const Home = () => {
    const [heroInfo, setHeroInfo] = useState(heroInfoArray);
    const [eventInfo, setEventInfo] = useState(eventInfoArray);

    return (
        <section>
            <HeroSection heroInfo={heroInfo} />
            <EventSection eventInfo={eventInfo} />
            <Services />
        </section>
    );
}

export default Home;
