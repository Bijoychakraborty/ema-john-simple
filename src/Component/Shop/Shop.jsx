import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb, getShoppingCart} from '../../../utilities/fakedb'

const Shop = () => {
    const [products, setProducts] =useState([]);
    const [cart, setCart] =useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[]);
    useEffect(()=>{
        const storedCart = getShoppingCart();
        let saveCart=[];
        // step 1: get id of the added product
        for(const id in storedCart){
            //step:2get products from products by using id 

const addedProduct = products.find(product=>product.id===id)
if(addedProduct){
    const quantity = storedCart[id];
    addedProduct.quantity=quantity;
    saveCart.push(addedProduct);
}
console.log('added products', addedProduct);
        }
        setCart(saveCart);
    },[products])

    const handleAddToCart=(product)=>{
        // console.log(product);
        const newCart = [...cart,product]
        setCart(newCart);
        addToDb(product.id)
        

    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map((product=><Product key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    
                    ></Product>))
                }

            </div>
            <div className='cart-container'>
         <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;