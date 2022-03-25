import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, img, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;