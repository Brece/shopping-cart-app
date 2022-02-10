import uniqid from 'uniqid';
import heroBanner1 from '../assets/images/hero-banner-1.jpg';
import heroBanner2 from '../assets/images/hero-banner-2.jpg';
import heroBanner3 from '../assets/images/hero-banner-3.jpg';
import eventImage1 from '../assets/images/event-img-1.png';
import eventImage2 from '../assets/images/event-img-2.png';

const heroInfoArray = [
    {
        url: heroBanner1,
        teaser: '50% off in all products',
        title: 'Man Fashion',
        id: uniqid()
    },
    {
        url: heroBanner3,
        teaser: 'Taking your Viewing Experience to Next Level',
        title: 'Summer Sale',
        id: uniqid()
    },
    {
        url: heroBanner2,
        teaser: '',
        title: 'Woman Fashion',
        id: uniqid()
    }
];

const eventInfoArray = [
    {
        url: eventImage1,
        teaser: 'Super Sale',
        title: 'New Collection',
        backgroundColor: '#FEFFB6',
        id: uniqid()
    },
    {
        url: eventImage2,
        teaser: 'Sale 40% Off',
        title: 'New Season',
        backgroundColor: '#CCFCFC',
        id: uniqid()
    }
]

export { heroInfoArray, eventInfoArray };
