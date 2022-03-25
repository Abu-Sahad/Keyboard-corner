import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    let name
    for (const product of cart) {
        name = product.name
    }

    return (
        <div className='cart'>
            <h4>Selected Clothes:</h4>
            <p>Name:{name}</p>
            <span><button>CHOOSE 1 FOR ME</button><br />
                <button>CHOOSE AGAIN</button></span>



        </div>
    );
};

export default Cart;