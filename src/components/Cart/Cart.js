import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    return (
        <div className='cart'>
            <h4>Selected Clothes:</h4>
            <div>
                {cart.map((product) => (
                    <p key={product.id}>{product.name}</p>
                ))}
            </div>
            <span><button>CHOOSE 1 FOR ME</button><br />
                <button>CHOOSE AGAIN</button></span>



        </div>
    );
};

export default Cart;