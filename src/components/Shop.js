import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from './Breadcrumb';
import ProductsGrid from './ProductsGrid';
import loadingImage from '../assets/loading.png';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleState = (data) => {
        // initialize products and filter state
        let productsArray = data.map((item) => { return {...item} });
        setProducts(productsArray);
        setFilter(productsArray);
        setLoading(false);

        // initialize categories state
        let categoriesArray = [];
        productsArray.forEach((item) => {
            const itemCategory = item.category;
            if (categoriesArray.some((item) => itemCategory === item.category)) {
                categoriesArray.forEach((item) => {
                    if (item.category === itemCategory) {
                        item.count++;
                    }
                });
            } else {
                categoriesArray.push({ category: item.category, count: 1 });
            }
        });
        setCategoryCounts(categoriesArray);
    }

    const handleFetchRequest = async () => {
        try {
            const request = await fetch('https://fakestoreapi.com/products', {mode: 'cors'});
            const data = await request.json();
            
            console.log(data.map(item => item));
            
            handleState(data);
            return;
        } catch (err) {
            throw new Error(err);
        }
    }

    const handleFilter = (e) => {
        // update filter state for view
        const filterValue = e.currentTarget.dataset.category;

        if (filterValue === 'all') {
            setFilter(products);
            return;
        }

        const updatedFilter = products.filter((item) => {
            if (item.category === filterValue) {
                return {...item};
            }
        });
        setFilter(updatedFilter);

        handleActiveCategory(e);
    }

    // TODO: display active filter correctly after state has been updated
    const handleActiveCategory = (e) => {
        // reset active class
        const allCategories = document.querySelectorAll('.c-shop__sidebar__category');
        allCategories.forEach((item) => item.classList.remove('is-active'));

        // highlight current active filter 
        e.currentTarget.classList.add('is-active');
    }

    const renderSidebar = () => {
        const allCount = categoryCounts.reduce((previousValue, nextValue) => previousValue + nextValue.count, 0);

        const categorySections = categoryCounts.map((item) => {
            return (
                <div className='c-shop__sidebar__category' onClick={handleFilter} data-category={item.category} key={uniqid()}>
                    <p className='c-shop__sidebar__category__name'>
                        <FontAwesomeIcon icon={faChevronRight} />
                        {item.category}
                    </p>
                    <p>({item.count})</p>
                </div>
            );
        });

        return (
            <aside className='c-shop__sidebar'>
                <h3>Categories</h3>
                <div className='c-shop__sidebar__category is-active' onClick={handleFilter} data-category='all' key={uniqid()}>
                    <p className='c-shop__sidebar__category__name'>
                        <FontAwesomeIcon icon={faChevronRight} />
                        all
                    </p>
                    <p>({allCount})</p>
                </div>
                {categorySections}
            </aside>
        )
    }

    const renderLoadedSection = () => {
        return (
            <div>
                <div className='o-wrap o-wrap--flex'>
                    {renderSidebar()}
                    <ProductsGrid filteredProducts={filter} />
                </div>
            </div>
        );
    }

    const renderPlaceHolder = () => {
        return (
            <div className='c-shop__loading'>
                <img src={loadingImage} alt='Store Products are being loaded'/>
            </div>
        );
    }

    useEffect(() => {
        handleFetchRequest();
    }, []);

    return (
        <section className='u-margin-bottom c-shop'>
            <Breadcrumb />
            { loading ? renderPlaceHolder() : renderLoadedSection() }
        </section>
    );
}

export default Shop;
