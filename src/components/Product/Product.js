import React from 'react';
import './Product.css'
import { MdAddShoppingCart } from "react-icons/md"

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
            <div className='btn-cart-main'>
                <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart<span className='icons-item'><MdAddShoppingCart /></span></p>
                </button></div>
        </div>
    );
};

export default Product;