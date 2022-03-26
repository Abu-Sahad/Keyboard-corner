import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (products) => {

        //array copy
        let isExist = cart.find(product => product.id == products.id)
        if (isExist) {
            alert('Already selected')
            return
        }
        if (cart.length > 3) {
            alert('cannot select more then 4 item')
            return
        }
        else {
            const newCart = [...cart, products]
            setCart(newCart);
        }

    }
    const chooseHadler = () => {
        setCart([])

    }
    const randomhandler = () => {
        let randomSelect = []
        let randomValueIndex = Math.round(Math.random() * cart.length)
        if (randomValueIndex < cart.length) {
            let randomProduct = cart[randomValueIndex]
            if (randomProduct) {
                randomSelect.push(randomProduct)
                setCart(randomSelect)
            }

        }
        else {
            randomhandler()
        }
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart randomhandler={randomhandler} chooseHadler={chooseHadler} key={cart.id} cart={cart}></Cart>



            </div>
        </div>
    );
};

export default Shop;