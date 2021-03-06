import React from 'react';
import Breadcrumb from './Breadcrumb';
import { Outlet } from 'react-router-dom';

const ShopView = () => {
    return (
        <section className='u-margin-bottom'>
            <Breadcrumb />
            <Outlet />
        </section>
    );
}

export default ShopView;
