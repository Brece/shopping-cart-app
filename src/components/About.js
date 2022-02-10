import React, { useState } from 'react';
import ContentSection from './ContentSection';
import { aboutUsArray } from '../helpers/DataHelper';

const About = (props) => {
    const [aboutInfo, setAboutInfo] = useState(aboutUsArray)
    return (
        <ContentSection contentInfo={aboutInfo} />
    );
}

export default About;
