import React from 'react';

const TeamSection = (props) => {
    const renderTeamMember = () => {
        return (
            props.contentInfo.map((item) => {
                return (
                    <div className='c-team__member__item' key={item.id}>
                        <div className='c-team__member__item__img'>
                            <img src={item.url} alt={item.alt} />
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.title}</p>
                    </div>
                );
            })
        );
    }

    return (
        <section className='o-wrap u-margin-bottom c-team'>
            <div className='c-team__info'>
                <h2>Our Team Members</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className='o-wrap--flex u-offset c-team__member'>
                {renderTeamMember()}
            </div>
        </section>
    );
}

export default TeamSection;
