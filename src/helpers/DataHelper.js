import uniqid from 'uniqid';

const heroInfoArray = [
    {
        url: '#',
        teaser: '50% off in all products',
        title: 'Man Fashion',
        id: uniqid()
    },
    {
        url: '#',
        teaser: 'Taking your Viewing Experience to Next Level',
        title: 'Summer Sale',
        id: uniqid()
    },
    {
        url: '#',
        teaser: '',
        title: 'Woman Fashion',
        id: uniqid()
    }
];

const eventInfoArray = [
    {
        url: '#',
        teaser: 'Super Sale',
        title: 'New Collection',
        id: uniqid()
    },
    {
        url: '#',
        teaser: 'Sale 40% Off',
        title: 'New Season',
        id: uniqid()
    }
]

export { heroInfoArray, eventInfoArray };
