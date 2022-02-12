import React from 'react';
import ReactPaginate from 'react-paginate';

const ProductsGrid = (props) => {
    const renderProducts = () => {
        return (
            props.filteredProducts.map((item) => {
                return (
                    <div className='c-productsGrid__card' key={item.id}>
                        <div className='c-productsGrid__card__img'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className='c-productsGrid__card__info'>
                            <p className='c-productsGrid__card__info__title'>{item.title}</p>
                            <p className='c-productsGrid__card__info__price'>{item.price}€</p>
                            <p>Rating: {item.rating.rate} Stars ({item.rating.count})</p>
                        </div>
                    </div>
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
