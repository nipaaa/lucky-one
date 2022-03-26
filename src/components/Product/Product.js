import React from 'react';

const Product = ({product,handleToCart}) => {
    const {picture,productName,price} = product;
    return (
     <div className="col text-center">
    <div className="card">
      <img height="400px" src={picture} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">Price: {price}</p>
        <button type="button" onClick={()=>handleToCart(product)} class="btn btn-outline-dark">Buy Now <i className="fa-solid fa-cart-arrow-down"></i></button>
      </div>
    </div>
  </div>       
       
    );
};

export default Product;