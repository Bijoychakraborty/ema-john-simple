import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const {img, name,seller,quantity,ratings,price}=props.product;
    const handleAddToCart=()=>{
        console.log('product added');
    }
    return (
        <div className='product'>
           <img src={img} alt="" />
        <div className="product-info">
        <h5 className='product-name'>{name}</h5>
           <p>Price:${price}</p>
           <p>Manufacturer:{seller}</p>
           <p>Rating:{ratings}</p>
        </div>
        <button onClick={handleAddToCart} className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;