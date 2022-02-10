import uniqid from 'uniqid';
import heroBanner1 from '../assets/images/hero-banner-1.jpg';
import heroBanner2 from '../assets/images/hero-banner-2.jpg';
import heroBanner3 from '../assets/images/hero-banner-3.jpg';
import eventImage1 from '../assets/images/event-img-1.png';
import eventImage2 from '../assets/images/event-img-2.png';
import aboutUs from '../assets/images/about-us.jpg';
import employee1 from '../assets/images/employee-1.jpg';
import employee2 from '../assets/images/employee-2.jpg';
import employee3 from '../assets/images/employee-3.jpg';
import employee4 from '../assets/images/employee-4.jpg';

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
        text: ['Super Sale'],
        title: 'New Collection',
        backgroundColor: '#FEFFB6',
        id: uniqid()
    },
    {
        url: eventImage2,
        text: ['Sale 40% Off'],
        title: 'New Season',
        backgroundColor: '#CCFCFC',
        id: uniqid()
    }
];

const aboutUsArray = [
    {
        url: aboutUs,
        text: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur quibusdam enim expedita sed nesciunt incidunt accusamus adipisci officia libero laboriosam!',
            'Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. Duis sed odio sit amet nibh vultate cursus a sit amet mauris.'
        ],
        title: 'Who We Are',
        backgroundColor: '#fff',
        id: uniqid()
    }
];

const employeeArray = [
    {
        url: employee1,
        name: 'Marcelyn Rion',
        title: 'Head of HR',
        alt: 'Girl with black hat and red dress in dessert',
        id: uniqid()
    },
    {
        url: employee2,
        name: 'Eneida Breheny',
        title: 'Customer Service',
        alt: 'Young woman with collared shirt smiling',
        id: uniqid()
    },
    {
        url: employee3,
        name: 'Vincenz Stred ',
        title: 'CEO',
        alt: 'Middle-aged man with glasses smiling',
        id: uniqid()
    },
    {
        url: employee4,
        name: 'Geraint Guinane',
        title: 'Manager',
        alt: 'Well-dressed young man with brown shirt and blue blazer',
        id: uniqid()
    }
];

export { heroInfoArray, eventInfoArray, aboutUsArray, employeeArray };
