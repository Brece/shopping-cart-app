import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import { Outlet } from 'react-router-dom';

const ShopView = () => {
    const [selectedProductView, setSelectedProductView] = useState({});

    const handleSelectedProductView = (product) => {
        setSelectedProductView(product);
    }

    return (
        <section className='u-margin-bottom c-shop'>
            <Breadcrumb />
            <Outlet />
        </section>
    );
}

export default ShopView;
