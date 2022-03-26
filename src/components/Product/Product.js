import React from 'react';

const Product = ({product,handleToCart}) => {
    const {picture,productName,price} = product;
    return (
     <div class="col">
    <div class="card">
      <img height="400px" src={picture} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{productName}</h5>
        <p class="card-text">Price: {price}</p>
        <button type="button" onClick={()=>handleToCart(product)} class="btn btn-outline-dark">Buy Now<i class="fa-solid fa-cart-arrow-down"></i></button>
      </div>
    </div>
  </div>       
       
    );
};

export default Product;