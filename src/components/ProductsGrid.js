import React from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from './ProductCard';

const ProductsGrid = (props) => {
    const renderProducts = () => {
        return (
            props.filteredProducts.map((item) => {
                return (
                    <ProductCard product={item} key={item.id} />
                );
            })
        );
    }

    return (
        <section className='c-productsGrid'>
            <div className='o-wrap--flex u-offset'>
                {renderProducts()}
            </div>
            <ReactPaginate 
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={ '...' }
                pageCount={props.totalPages}
                onPageChange={props.handleChangePage}
                forcePage={props.page}
                containerClassName={'c-productsGrid__navPagination'}
                disabledClassName={'c-productsGrid__navDisabled'}
                activeClassName={'c-productsGrid__navActive'}
            />
        </section>
    );
}

export default ProductsGrid;
