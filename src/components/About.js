import React, { useState } from 'react';
import ContentSection from './ContentSection';
import TeamSection from './TeamSection';
import Services from './Services';
import { aboutUsArray, employeeArray } from '../helpers/DataHelper';

const About = () => {
    const [aboutInfo, setAboutInfo] = useState(aboutUsArray)
    const [teamInfo, setTeamInfo] = useState(employeeArray)
    return (
        <section className='c-about'>
            <ContentSection contentInfo={aboutInfo} />
            <TeamSection contentInfo={teamInfo} />
            <Services />
        </section>
    );
}

export default About;
