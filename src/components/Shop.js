import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ProductsGrid from './ProductsGrid';
import loadingImage from '../assets/loading.png';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState([]);
    const [filteredValue, setFilteredValue] = useState('all');
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    // ============ start pagination ==============
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0)
    const productsPerPage = 9;
    
    const handlePagination = () => {
        const numberOfProductsViewed = page * productsPerPage;
        const displayedProducts = filter.slice(
                numberOfProductsViewed,
                numberOfProductsViewed + productsPerPage
            );
        return displayedProducts;
    }

    const handleChangePage = ({ selected }) => {
        setPage(selected);
    }

    useEffect (() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [page]);
    // ============ end pagination ==============

    const handleState = (data) => {
        // initialize products and filter state
        let productsArray = data.map((item) => { return {...item} });
        setProducts(productsArray);
        setFilter(productsArray);
        setLoading(false);
        setTotalPages(Math.ceil(productsArray.length / productsPerPage));

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
            
            // FIXME: remove console.log
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
        setPage(0);
        setFilteredValue(filterValue);

        if (filterValue === 'all') {
            setFilter(products);
            setTotalPages(Math.ceil(products.length / productsPerPage))
            return;
        }

        const updatedFilter = products.filter((item) => {
            if (item.category === filterValue) {
                return {...item};
            }
        });
        setFilter(updatedFilter);
        setTotalPages(Math.ceil(updatedFilter.length / productsPerPage));
    }

    const handleActiveCategory = () => {
        const allCategories = document.querySelectorAll('.c-shop__sidebar__category');
        allCategories.forEach((item) => {
            // highlight current active filter 
            if (item.dataset.category === filteredValue) {
                item.classList.add('is-active');
                return;
            }
            item.classList.remove('is-active');
        });
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
            <div className='o-wrap o-wrap--flex'>
                {renderSidebar()}
                <ProductsGrid
                    filteredProducts={handlePagination()}
                    page={page}
                    totalPages={totalPages}
                    handleChangePage={handleChangePage}
                />
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
        handleActiveCategory();
    }, [filteredValue]);

    useEffect(() => {
        handleFetchRequest();
    }, []);

    return (
        <section className='u-margin-bottom c-shop'>
            { loading ? renderPlaceHolder() : renderLoadedSection() }
        </section>
    );
}

export default Shop;
